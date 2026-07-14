import { env } from "cloudflare:workers";
import { normalizeAndValidate } from "./validation";

type RuntimeEnv = { DB: D1Database; TURNSTILE_SECRET_KEY?: string; RATE_LIMIT_SALT?: string; EMAIL_PROVIDER?: string; RESEND_API_KEY?: string; CONTACT_EMAIL?: string; ALLOWED_ORIGINS?: string };
const attempts = new Map<string, number[]>();
const json = (body: unknown, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
const fields = ["processType","mainBottleneck","currentProcess","frequency","peopleInvolved","currentHandling","tools","biggestConsequence","fullName","workEmail","companyName","companyWebsite","role","companySize","projectStage","supportType"];

async function digest(value: string) {
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return [...new Uint8Array(bytes)].map(x => x.toString(16).padStart(2, "0")).join("");
}

async function notify(runtime: RuntimeEnv, id: string, values: Record<string, string | boolean>) {
  if (runtime.EMAIL_PROVIDER !== "resend" || !runtime.RESEND_API_KEY) return "disabled";
  try {
    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${runtime.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: "BuildFlow AI <enquiries@notifications.buildflow.ai>", to: [runtime.CONTACT_EMAIL || "hanannaseer778@gmail.com"], subject: `New workflow enquiry ${id}`, text: `Submission: ${id}\nProcess: ${values.processType}\nCompany: ${values.companyName}\nContact: ${values.fullName} <${values.workEmail}>`, tracking_opens: false, tracking_clicks: false }) });
    return response.ok ? "sent" : "failed";
  } catch { return "failed"; }
}

export async function POST(request: Request) {
  const runtime = env as unknown as RuntimeEnv;
  try {
    if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return json({ ok:false, code:"UNSUPPORTED_MEDIA_TYPE" }, 415);
    const origin = request.headers.get("origin");
    const allowed = (runtime.ALLOWED_ORIGINS || "").split(",").map(x=>x.trim()).filter(Boolean);
    if (origin && allowed.length && !allowed.includes(origin)) return json({ ok:false, code:"FORBIDDEN_ORIGIN" }, 403);
    const length = Number(request.headers.get("content-length") || 0);
    if (length > 25_000) return json({ ok:false, code:"PAYLOAD_TOO_LARGE" }, 413);
    const raw = await request.text();
    if (raw.length > 25_000) return json({ ok:false, code:"PAYLOAD_TOO_LARGE" }, 413);
    const input = JSON.parse(raw) as Record<string, unknown>;
    if (input.website) return json({ ok:false, code:"ABUSE_DETECTED" }, 400);
    const salt = runtime.RATE_LIMIT_SALT || "local-development-only";
    const ip = request.headers.get("cf-connecting-ip") || "local";
    const abuseKey = await digest(`${salt}:${ip}`);
    const now = Date.now(); const recent = (attempts.get(abuseKey) || []).filter(t => now - t < 600_000);
    if (recent.length >= 5) return json({ ok:false, code:"TOO_MANY_REQUESTS" }, 429);
    recent.push(now); attempts.set(abuseKey, recent);
    const token = typeof input.turnstileToken === "string" ? input.turnstileToken : "";
    if (!token || !runtime.TURNSTILE_SECRET_KEY) return json({ ok:false, code:"TURNSTILE_FAILED" }, 400);
    const verifyBody = new URLSearchParams({ secret: runtime.TURNSTILE_SECRET_KEY, response: token });
    if (ip !== "local") verifyBody.set("remoteip", ip);
    const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method:"POST", body:verifyBody });
    const verdict = await verify.json() as { success?: boolean };
    if (!verdict.success) return json({ ok:false, code:"TURNSTILE_FAILED" }, 400);
    const result = normalizeAndValidate(input);
    if (!result.valid) return json({ ok:false, code:"VALIDATION_ERROR", fieldErrors:result.fieldErrors }, 400);
    const id = crypto.randomUUID(); const timestamp = new Date().toISOString();
    const idempotencyKey = typeof input.idempotencyKey === "string" && input.idempotencyKey.length <= 100 ? input.idempotencyKey : crypto.randomUUID();
    const values = result.values;
    const placeholders = fields.map(()=>"?").join(",");
    try {
      await runtime.DB.prepare(`INSERT INTO workflow_submissions (id,created_at,updated_at,status,${fields.map(x=>x.replace(/[A-Z]/g,m=>`_${m.toLowerCase()}`)).join(",")},consent_to_contact,source_path,user_agent_summary,turnstile_verified,notification_status,idempotency_key) VALUES (?,?,?,'new',${placeholders},?,?,?,?,?,'pending',?)`).bind(id,timestamp,timestamp,...fields.map(k=>values[k] ?? null),1,String(input.sourcePath||"/workflow-review").slice(0,200),String(request.headers.get("user-agent")||"").slice(0,200),1,idempotencyKey).run();
    } catch (error) {
      if (String(error).includes("UNIQUE")) return json({ ok:false, code:"DUPLICATE_SUBMISSION" }, 409);
      return json({ ok:false, code:"SERVICE_UNAVAILABLE" }, 503);
    }
    const notificationStatus = await notify(runtime,id,values);
    await runtime.DB.prepare("UPDATE workflow_submissions SET notification_status=?, updated_at=? WHERE id=?").bind(notificationStatus,new Date().toISOString(),id).run().catch(()=>undefined);
    return json({ ok:true, submissionId:id, next:`/thank-you?reference=${encodeURIComponent(id)}` }, 201);
  } catch { return json({ ok:false, code:"INVALID_REQUEST" }, 400); }
}

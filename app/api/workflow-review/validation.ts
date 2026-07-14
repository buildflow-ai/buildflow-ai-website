export const processTypes = ["Lead handling and sales follow-up","Client onboarding","Client delivery and communication","Reporting and management visibility","Internal administration","Document processing","Knowledge access or internal assistant","Existing automation improvement","Something else"] as const;
export const bottlenecks = ["Information has to be copied manually","Follow-ups are delayed or missed","The next person is not notified","Approvals have to be chased","Tools do not stay synchronized","Reporting takes too much manual work","Errors or duplicate records occur","The process depends on one person","We are not sure where the main issue is"] as const;

export type WorkflowPayload = Record<string, unknown>;
const required = ["processType","mainBottleneck","currentProcess","frequency","peopleInvolved","currentHandling","tools","biggestConsequence","fullName","workEmail","companyName","role","companySize","projectStage","supportType"];
const limits: Record<string, number> = { currentProcess: 2000, tools: 500, biggestConsequence: 1000, companyWebsite: 300 };
const plainText = /^[^<>]*$/;

export function normalizeAndValidate(input: WorkflowPayload) {
  const values: Record<string, string | boolean> = {};
  const fieldErrors: Record<string, string> = {};
  for (const [key, raw] of Object.entries(input)) {
    if (typeof raw === "string") values[key] = raw.replace(/\s+/g, " ").trim();
    else if (typeof raw === "boolean") values[key] = raw;
  }
  for (const key of required) if (!values[key]) fieldErrors[key] = "This field is required.";
  for (const [key, value] of Object.entries(values)) {
    if (typeof value !== "string") continue;
    const max = limits[key] ?? 200;
    if (value.length > max) fieldErrors[key] = `Use ${max} characters or fewer.`;
    if (!plainText.test(value)) fieldErrors[key] = "Use plain text without HTML.";
  }
  if (typeof values.workEmail === "string") {
    values.workEmail = values.workEmail.toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail)) fieldErrors.workEmail = "Enter a valid email address.";
  }
  if (values.companyWebsite && typeof values.companyWebsite === "string") {
    try { const u = new URL(values.companyWebsite); if (!/^https?:$/.test(u.protocol)) throw new Error(); }
    catch { fieldErrors.companyWebsite = "Enter a full http or https URL."; }
  }
  if (!processTypes.includes(values.processType as typeof processTypes[number])) fieldErrors.processType = "Choose a listed process.";
  if (!bottlenecks.includes(values.mainBottleneck as typeof bottlenecks[number])) fieldErrors.mainBottleneck = "Choose a listed issue.";
  if (values.consentToContact !== true) fieldErrors.consentToContact = "Consent is required so we can respond.";
  return { values, fieldErrors, valid: Object.keys(fieldErrors).length === 0 };
}

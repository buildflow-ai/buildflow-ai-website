CREATE TABLE `workflow_submissions` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`process_type` text NOT NULL,
	`main_bottleneck` text NOT NULL,
	`current_process` text NOT NULL,
	`frequency` text NOT NULL,
	`people_involved` text NOT NULL,
	`current_handling` text NOT NULL,
	`tools` text NOT NULL,
	`biggest_consequence` text NOT NULL,
	`full_name` text NOT NULL,
	`work_email` text NOT NULL,
	`company_name` text NOT NULL,
	`company_website` text,
	`role` text NOT NULL,
	`company_size` text NOT NULL,
	`project_stage` text NOT NULL,
	`support_type` text NOT NULL,
	`consent_to_contact` integer NOT NULL,
	`source_path` text NOT NULL,
	`user_agent_summary` text,
	`turnstile_verified` integer NOT NULL,
	`notification_status` text DEFAULT 'disabled' NOT NULL,
	`idempotency_key` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `workflow_submissions_idempotency_idx` ON `workflow_submissions` (`idempotency_key`);--> statement-breakpoint
CREATE INDEX `workflow_submissions_created_idx` ON `workflow_submissions` (`created_at`);--> statement-breakpoint
CREATE INDEX `workflow_submissions_status_idx` ON `workflow_submissions` (`status`);
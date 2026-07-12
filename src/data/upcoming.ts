import { UpcomingIdea } from '@/types'

// ─── HOW TO ADD A NEW UPCOMING IDEA ───────────────────────────────────────────
// 1. Copy an entry below and update all fields (use the next free dp-/qg- id)
// 2. Use tag: 'New App' | 'New Feature' | 'Feature Update'
// 3. Pick a category from UpcomingCategory in src/types/index.ts
// 4. Add a concise AI build prompt to the `prompt` field
// 5. git push → Vercel auto-deploys in ~30 seconds
// ─────────────────────────────────────────────────────────────────────────────

export const upcomingIdeas: UpcomingIdea[] = [
  // ─── DAILYPLAN ───────────────────────────────────────────────────────────────
  {
    id: 'dp-1',
    slug: 'equipment-maintenance-tracker',
    appName: 'DailyPlan',
    title: 'Equipment Maintenance & Inspection Tracker',
    subtitle:
      'A dedicated module to schedule, record, and track HVAC equipment and tool maintenance across jobsites and warehouses.',
    description:
      'Tie recurring inspections to assets, log service history, and surface overdue maintenance in the dashboard. Reduces equipment downtime, extends asset life, and helps meet safety/insurance requirements.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Materials & Equipment',
    complexity: 'Medium',
    highlights: [
      'Asset registry with QR-code scanning',
      'Recurring maintenance schedules',
      'Service-log history',
      'Photo attachments',
      'Reuses existing Safety checklist patterns',
    ],
    prompt:
      'Build an Equipment Maintenance & Inspection Tracker module inside DailyPlan. Create an asset registry (equipment/tools by jobsite/warehouse), schedule recurring inspections, record service history with photos, and surface overdue maintenance on the Dashboard. Reuse the existing Safety checklist UI patterns, Supabase tables, and RLS conventions.',
  },
  {
    id: 'dp-2',
    slug: 'subcontractor-portal-scorecard',
    appName: 'DailyPlan',
    title: 'Subcontractor Portal & Scorecard',
    subtitle:
      'A limited-access portal where approved subcontractors can view assigned work, submit daily reports, and receive schedule updates.',
    description:
      'Internal PMs can score subcontractor performance over time. Reduces email back-and-forth, centralizes subcontractor accountability, and builds a performance history for future vendor selection.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Workflow & Collaboration',
    complexity: 'High',
    highlights: [
      'Role-scoped access (subcontractor)',
      'Document upload for safety docs and certs',
      'Simple daily-report form',
      'Scorecard ratings and performance history',
      'Job-specific messaging',
    ],
    prompt:
      'Build a Subcontractor Portal inside DailyPlan with scoped external access. Subcontractors log in, see only their assigned work, submit daily reports, upload safety docs and certs, and receive schedule updates. PMs rate performance per job to build a scorecard history. Use Supabase auth/RLS, existing file upload helpers, and messaging patterns.',
  },
  {
    id: 'dp-3',
    slug: 'weather-site-conditions',
    appName: 'DailyPlan',
    title: 'Weather & Site Conditions Integration',
    subtitle:
      'Integrate a weather API to display forecast cards on the Daily Plan and Dashboard.',
    description:
      'Auto-flag high wind, extreme heat, rain, or cold that could affect ductwork, AeroSeal, or safety, and suggest mitigations. Helps foremen plan safer, more realistic days and reduces weather-related rework or delays.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Field Operations',
    complexity: 'Low-Medium',
    highlights: [
      '7-day forecast per job',
      'Weather alerts and condition-based safety reminders',
      'Historical weather tied to production notes',
      'Read-only API integration to start',
    ],
    prompt:
      'Add Weather & Site Conditions Integration to DailyPlan. Pull a 7-day forecast per job from a weather API and show forecast cards on the Daily Plan and Dashboard. Auto-flag high wind, extreme heat, rain, or cold that impacts ductwork/AeroSeal/safety and display suggested mitigations. Store historical weather tied to production notes.',
  },
  {
    id: 'dp-4',
    slug: 'material-inventory-warehouse',
    appName: 'DailyPlan',
    title: 'Material Inventory & Warehouse Management',
    subtitle:
      'Track ductwork materials, fittings, sealant, and consumables across warehouses and jobsites.',
    description:
      'Enable transfer requests, cycle counts, and low-stock alerts that feed into the Orders/Buyout workflow. Prevents jobsite shortages, reduces emergency purchases, and improves purchasing forecasts.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Materials & Equipment',
    complexity: 'Medium',
    highlights: [
      'Inventory locations and stock levels',
      'Transfer requests between warehouses and jobsites',
      'Consumption logging',
      'Reorder thresholds and low-stock alerts',
      'Integration with existing Orders module',
    ],
    prompt:
      'Build Material Inventory & Warehouse Management in DailyPlan. Track ductwork materials, fittings, sealant, and consumables across warehouses and jobsites. Support transfer requests, cycle counts, consumption logging, reorder thresholds, and low-stock alerts that feed into the existing Orders/Buyout workflow.',
  },
  {
    id: 'dp-5',
    slug: 'ai-production-forecasting',
    appName: 'DailyPlan',
    title: 'AI-Powered Production Forecasting',
    subtitle:
      'Use historical daily-plan production data and crew assignments to predict job completion dates, labor needs, and bottlenecks.',
    description:
      'Surface recommendations directly on the PM Dashboard and job pages. Moves planning from reactive to predictive, improving resource allocation and customer communication.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'AI & Automation',
    complexity: 'High',
    highlights: [
      'Trend charts and completion-date predictions',
      'Labor-demand alerts',
      '"What-if" scenario inputs (crew size, shift changes)',
      'Integrates with existing AI services',
    ],
    prompt:
      'Build AI-Powered Production Forecasting in DailyPlan. Use historical daily-plan production data and crew assignments to predict job completion dates, labor needs, and bottlenecks. Surface trend charts, labor-demand alerts, and "what-if" scenario inputs on the PM Dashboard and job pages. Integrate with existing AI services.',
  },
  {
    id: 'dp-6',
    slug: 'daily-plans-voice-offline',
    appName: 'DailyPlan',
    title: 'Daily Plans — Voice-to-Text & Offline Mode',
    subtitle:
      'Allow foremen to dictate notes into any Daily Plan section and cache plan edits locally for offline use.',
    description:
      'Work continues without connectivity and syncs automatically when back online. Speeds up field data entry and makes the app usable in basements, mechanical rooms, and remote sites.',
    date: '2026-06-29',
    tag: 'Feature Update',
    category: 'Field Operations',
    complexity: 'Medium',
    highlights: [
      'Browser speech-to-text',
      'IndexedDB offline cache',
      'Conflict resolution on sync',
      'UI toggles for offline status',
    ],
    prompt:
      'Extend Daily Plans with Voice-to-Text and Offline Mode. Add a mic button to every Daily Plan notes/comment field using browser speech-to-text. Cache plan edits in IndexedDB when offline and sync automatically when connectivity returns. Implement basic conflict resolution and an offline-status indicator.',
  },
  {
    id: 'dp-7',
    slug: 'safety-incident-investigation',
    appName: 'DailyPlan',
    title: 'Safety Hub — Incident Investigation Workflow',
    subtitle:
      'Extend the Incidents feature with a structured investigation flow and closed-loop corrective actions.',
    description:
      'Add root-cause analysis (5 Whys or fishbone), corrective actions with owners/due dates, witness statements, and closure sign-off. Turns incident reporting into a closed-loop safety improvement process.',
    date: '2026-06-29',
    tag: 'Feature Update',
    category: 'Safety & Compliance',
    complexity: 'Medium',
    highlights: [
      'Investigation checklist',
      'Corrective-action tracking with owners and due dates',
      'Notification reminders',
      'Exportable incident report PDF',
      'Extends existing incidents tables and UI',
    ],
    prompt:
      'Extend the Safety Hub Incidents feature with a structured Investigation Workflow. Add root-cause analysis (5 Whys or fishbone), corrective actions with owners/due dates, witness statements, notification reminders, closure sign-off, and an exportable incident report PDF. Build on the existing incidents tables and UI.',
  },
  {
    id: 'dp-8',
    slug: 'aeroseal-signature-auto-delivery',
    appName: 'DailyPlan',
    title: 'AeroSeal — Digital Customer Signature & Auto-Delivery',
    subtitle:
      'Add customer signature capture directly on the certificate/run completion screen.',
    description:
      'Automatically email the signed certificate and summary to the customer and office. Eliminates paper handoffs, speeds up billing, and provides immediate customer proof of completion.',
    date: '2026-06-29',
    tag: 'Feature Update',
    category: 'Field Operations',
    complexity: 'Medium',
    highlights: [
      'Canvas signature pad',
      'Certificate PDF stamping',
      'Resend email dispatch',
      'Audit trail of signatures',
    ],
    prompt:
      'Add Digital Customer Signature & Auto-Delivery to the AeroSeal module. Add a canvas signature pad on the certificate/run completion screen, stamp the signature onto the certificate PDF, and auto-email the signed certificate and summary to the customer and office with a resend button and audit trail.',
  },
  {
    id: 'dp-9',
    slug: 'aligngap-360-feedback',
    appName: 'DailyPlan',
    title: 'AlignGap — 360-Degree Feedback Expansion',
    subtitle:
      'Expand AlignGap from a manager/employee two-way review to include peer and direct-report feedback.',
    description:
      'Aggregate input anonymously and present richer gap analytics with radar charts, theme clustering, and focus areas. Gives managers a fuller picture of performance and aligns with the analytics direction.',
    date: '2026-06-29',
    tag: 'Feature Update',
    category: 'Workflow & Collaboration',
    complexity: 'Medium-High',
    highlights: [
      'Multi-rater invitation flow',
      'Anonymity controls',
      'Aggregated reports',
      'Comment theme clustering',
      'Radar chart visualization',
    ],
    prompt:
      'Expand AlignGap to 360-Degree Feedback. Allow peer and direct-report invitations, enforce anonymity controls, aggregate responses, and present richer gap analytics with radar charts, comment theme clustering, and focus areas. Extend the existing AlignGap tables and UI.',
  },
  {
    id: 'dp-10',
    slug: 'dashboard-alerts-action-center',
    appName: 'DailyPlan',
    title: 'Dashboard — Centralized Alerts & Action Center',
    subtitle:
      'Add a unified notification/alert panel to the Dashboard that surfaces overdue Daily Plans, expiring certs, missing fields, and pending approvals.',
    description:
      'Each alert deep-links to the relevant action. Reduces the chance of important items falling through the cracks and gives each role a clear daily priority list.',
    date: '2026-06-29',
    tag: 'Feature Update',
    category: 'Analytics & Reporting',
    complexity: 'Medium',
    highlights: [
      'Alert aggregation query',
      'Per-user relevance filtering',
      'Dismiss/read states',
      'Priority badges',
      'Reusable alert service other modules can publish into',
    ],
    prompt:
      'Add a Centralized Alerts & Action Center to the DailyPlan Dashboard. Build a reusable alert service that aggregates overdue Daily Plans, expiring safety certs, missing fields, and pending approvals. Filter alerts by user role, support dismiss/read states and priority badges, and deep-link each alert to its action.',
  },
  {
    id: 'dp-11',
    slug: 'constraint-transcriber',
    appName: 'DailyPlan',
    title: 'Constraint Transcriber',
    subtitle:
      'Foremen voice-dictate field issues; speech-to-text parses them into structured action items routed to the right managers.',
    description:
      'Built on the Meeting Transcript Action Extractor, this captures trailer-side constraints straight from the field and turns them into trackable tasks with owners and due dates. Removes the delay between a problem surfacing and the office acting on it.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'AI & Automation',
    complexity: 'Medium',
    highlights: [
      'Voice capture optimized for jobsite noise',
      'Auto-extracts who, what, and when',
      'Routes action items to PMs, safety, or dispatch',
      'Links back to the originating job and daily plan',
      'Works on mobile without leaving the field view',
    ],
    prompt:
      'Build a Constraint Transcriber in DailyPlan. Foremen tap a mic button to voice-dictate field constraints; speech-to-text + the Meeting Transcript Action Extractor parse the audio into structured action items with owners and due dates. Route items to PMs, safety, or dispatch and link them back to the originating job and daily plan.',
  },
  {
    id: 'dp-12',
    slug: 'foreman-todo-list',
    appName: 'DailyPlan',
    title: 'Foreman-Level To-Do List',
    subtitle:
      'A lightweight, site-specific task list for foremen tied to the day’s plan and crew assignments.',
    description:
      'Gives foremen a simple place to jot must-do items for themselves and their crew — safety reminders, material checks, follow-ups — without the weight of the full task module. Items can be carried forward or closed out at end-of-day.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Field Operations',
    complexity: 'Low-Medium',
    highlights: [
      'Mobile-first, thumb-friendly interface',
      'Auto-suggests tasks from the active Daily Plan',
      'Site and crew scoped',
      'Carry-forward incomplete items',
      'Rolls into end-of-day turnover',
    ],
    prompt:
      'Build a lightweight Foreman-Level To-Do List in DailyPlan. Create a mobile-first, site-specific task list tied to the active Daily Plan and crew. Auto-suggest tasks from the plan, allow carry-forward of incomplete items, and roll completed/open items into the end-of-day turnover report.',
  },
  {
    id: 'dp-13',
    slug: 'pm-daily-digest',
    appName: 'DailyPlan',
    title: 'PM Daily Digest — AI Summary',
    subtitle:
      'An automated morning brief for project managers with risks, exposures, overdue items, and status update drafts.',
    description:
      'Aggregates overnight changes across jobs — missing fields, late deliveries, safety open items, schedule conflicts — and surfaces what needs attention first. Includes auto-drafted status updates PMs can edit and send.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'AI & Automation',
    complexity: 'Medium',
    highlights: [
      'Auto-generated every morning per PM',
      'Risk/exposure flagging',
      'Deep-links to every highlighted item',
      'Editable status-update drafts',
      'Extends dailyplan-chat with PM query types',
    ],
    prompt:
      'Build a PM Daily Digest in DailyPlan. Every morning, generate an AI summary per project manager that aggregates risks, exposures, overdue items, and schedule conflicts across their jobs. Include deep-links and editable status-update drafts. Extend dailyplan-chat to support PM query types.',
  },
  {
    id: 'dp-14',
    slug: 'ai-crew-to-job-suggestions',
    appName: 'DailyPlan',
    title: 'AI Crew-to-Job Suggestions',
    subtitle:
      'Recommends the best crew placement for upcoming work based on skills, availability, location, and job priorities.',
    description:
      'Analyzes crew certifications, past performance, current assignments, and travel distance to suggest optimal placements. Dispatchers retain full control but start from a data-informed shortlist instead of a blank board.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Scheduling & Dispatch',
    complexity: 'Medium-High',
    highlights: [
      'Skill and certification matching',
      'Availability and location awareness',
      'Rush and priority weighting',
      'Explainable recommendations',
      'One-click accept or override',
    ],
    prompt:
      'Build AI Crew-to-Job Suggestions in DailyPlan. Recommend optimal crew placement for upcoming work by analyzing skills, certifications, availability, current assignments, location, and job priority. Present explainable suggestions dispatchers can accept or override with one click.',
  },
  {
    id: 'dp-15',
    slug: 'ready-to-start-dispatch-gate',
    appName: 'DailyPlan',
    title: 'Ready-to-Start Dispatch Gate',
    subtitle:
      'A pre-dispatch checklist that blocks crews from being sent until material, tools, drawings, and permits are confirmed ready.',
    description:
      'Surfaces missing prerequisites before a crew is dispatched, preventing wasted trips and standby time. Each gate item links to the source record so the dispatcher can clear it quickly.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Scheduling & Dispatch',
    complexity: 'Medium',
    highlights: [
      'Configurable gate criteria per task type',
      'Material readiness status',
      'Tool/equipment readiness check',
      'Drawing and permit verification',
      'Visual red/green gate status per job',
    ],
    prompt:
      'Build a Ready-to-Start Dispatch Gate in DailyPlan. Create a pre-dispatch checklist per task type that verifies material, tools, drawings, and permits are ready before a crew is dispatched. Show a red/green gate status and link each item to its source record for quick clearance.',
  },
  {
    id: 'dp-16',
    slug: 'skill-aware-crew-assignment',
    appName: 'DailyPlan',
    title: 'Skill-Aware Crew Assignment',
    subtitle:
      'Track worker certifications and skills so schedulers can build crews that match each task’s requirements.',
    description:
      'Adds a skills matrix to the roster and warns when a planned crew lacks a required certification — confined space, fall protection, welding, rigging, etc. Helps avoid compliance gaps and rework caused by wrong crew mix.',
    date: '2026-06-29',
    tag: 'Feature Update',
    category: 'Scheduling & Dispatch',
    complexity: 'Medium-High',
    highlights: [
      'Worker skill and certification profiles',
      'Task-type requirement rules',
      'Assignment conflict warnings',
      'Expiration alerts for certs',
      'Crew composition suggestions',
    ],
    prompt:
      'Make crew assignment skill-aware in DailyPlan. Add skill and certification profiles to workers, define task-type requirement rules, warn when a planned crew lacks required certs, alert on upcoming cert expirations, and suggest compliant crew compositions.',
  },
  {
    id: 'dp-17',
    slug: 'constraint-register',
    appName: 'DailyPlan',
    title: 'Constraint Register with Owners & Due Dates',
    subtitle:
      'A centralized list of every open constraint across active jobs with clear ownership and resolution deadlines.',
    description:
      'Moves constraints out of text threads and whiteboards into a tracked register. PMs and foremen can see what is blocked, who is accountable, and when it must be cleared — with escalations as due dates approach.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Workflow & Collaboration',
    complexity: 'Medium',
    highlights: [
      'Job-scoped and cross-job views',
      'Owner assignment and due dates',
      'Status workflow (Open / In Progress / Cleared)',
      'Auto-escalation nearing deadline',
      'Feeds the Dashboard Alerts & Action Center',
    ],
    prompt:
      'Build a Constraint Register in DailyPlan. Centralize every open constraint across jobs with owner assignment, due dates, and an Open/In Progress/Cleared workflow. Provide job-scoped and cross-job views, auto-escalate nearing deadlines, and feed alerts into the Dashboard Action Center.',
  },
  {
    id: 'dp-18',
    slug: 'auto-end-of-day-turnover',
    appName: 'DailyPlan',
    title: 'Auto End-of-Day Turnover Report',
    subtitle:
      'Generates a structured handoff summary for the next shift or foreman based on actuals, notes, and open items.',
    description:
      'Pulls together completed work, remaining tasks, constraints, safety notes, and material issues into a ready-to-read turnover. Seeds tomorrow’s Daily Plan so the next crew starts with context instead of asking questions.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Field Operations',
    complexity: 'Medium',
    highlights: [
      'Auto-generated from field notes and statuses',
      'Carry-forward incomplete tasks',
      'Constraint and safety handoff section',
      'Seeds the next day’s plan',
      'Editable before send',
    ],
    prompt:
      'Build an Auto End-of-Day Turnover Report in DailyPlan. Generate a structured handoff from completed work, remaining tasks, constraints, safety notes, and material issues. Carry forward incomplete tasks, include a constraint/safety section, seed the next day’s plan, and let the foreman edit before sending.',
  },

  // ─── QUOTEGEN ────────────────────────────────────────────────────────────────
  {
    id: 'qg-1',
    slug: 'takeoff-digitizer-drawing-upload',
    appName: 'QuoteGen',
    title: 'Takeoff Digitizer & Drawing Upload Tool',
    subtitle:
      'A frontend takeoff module that lets estimators upload construction drawings and perform digital quantity takeoffs.',
    description:
      'Upload PDF, DWG, or image drawings, scale them, and take off duct, fittings, steel, and equipment quantities directly into quote line items. Eliminates manual data entry from paper/PDF plans and reduces transcription errors.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Estimating & Takeoff',
    complexity: 'High',
    highlights: [
      'PDF, DWG, and image drawing support',
      'Canvas scaling and measurement tooling',
      'Digital quantity takeoff for duct, fittings, steel, and equipment',
      'Maps takeoff output directly to quote templates',
      'Closes the gap between existing takeoff schema and UI',
    ],
    prompt:
      'Build a Takeoff Digitizer & Drawing Upload Tool in QuoteGen. Let estimators upload PDF, DWG, or image drawings, scale them on a canvas, and perform digital quantity takeoffs for duct, fittings, steel, and equipment. Push the quantities directly into quote line items and map them to the existing takeoff schema.',
  },
  {
    id: 'qg-2',
    slug: 'quote-approval-workflow',
    appName: 'QuoteGen',
    title: 'Quote Approval Workflow',
    subtitle:
      'Configurable multi-stage approval chain before a quote can be sent to a customer.',
    description:
      'Estimators submit quotes for review; managers approve, request changes, or reject with comments. Audit trail stored in quote history. Prevents pricing errors from reaching customers and enforces margin discipline.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Workflow & Collaboration',
    complexity: 'Medium',
    highlights: [
      'Status transitions and role-based permissions',
      'Manager approve/request changes/reject actions',
      'Comment threads per review',
      'Notification emails',
      'History logging and audit trail',
    ],
    prompt:
      'Build a Quote Approval Workflow in QuoteGen. Add status transitions (Draft → Submitted → Approved/Rejected/Changes Requested) with role-based permissions, manager review actions, comment threads, notification emails, and a full audit trail in quote history.',
  },
  {
    id: 'qg-3',
    slug: 'automated-follow-up-sequences',
    appName: 'QuoteGen',
    title: 'Automated Follow-Up Sequences',
    subtitle:
      'A lightweight drip-campaign builder for sent quotes with scheduled, personalized follow-up emails.',
    description:
      'Schedule follow-ups (e.g., 3 days, 1 week, 2 weeks after send) with automatic stop rules when a quote is awarded, lost, or replied to. Improves win rates by ensuring consistent follow-through without manual tracking.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Sales & Customer',
    complexity: 'Medium',
    highlights: [
      'Visual sequence builder',
      'Email template variables',
      'Scheduled edge function dispatch',
      'Status-aware cancellation logic',
      'Stop rules for awarded/lost/replied quotes',
    ],
    prompt:
      'Build Automated Follow-Up Sequences in QuoteGen. Create a visual sequence builder where users schedule personalized follow-up emails after a quote is sent. Use a scheduled edge function for dispatch, support email template variables, and auto-cancel sequences when a quote is awarded, lost, or replied to.',
  },
  {
    id: 'qg-4',
    slug: 'vendor-bid-comparison-tool',
    appName: 'QuoteGen',
    title: 'Subcontractor & Vendor Bid Comparison Tool',
    subtitle:
      'A side-by-side comparison view for vendor quotes on sheet metal, steel, insulation, and more.',
    description:
      'Upload or paste subcontractor bids; the system normalizes units, highlights outliers, and suggests the best-value option. Speeds up buyout decisions, improves costing accuracy, and creates a reusable vendor price history database.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Materials & Equipment',
    complexity: 'Medium-High',
    highlights: [
      'Side-by-side bid comparison',
      'Unit normalization heuristics',
      'Outlier highlighting',
      'Best-value suggestions',
      'Reusable vendor price history',
    ],
    prompt:
      'Build a Subcontractor & Vendor Bid Comparison Tool in QuoteGen. Provide a side-by-side view for vendor quotes (sheet metal, steel, insulation, etc.). Normalize units, highlight outliers, suggest best-value options, and store results in a reusable vendor price history database.',
  },
  {
    id: 'qg-5',
    slug: 'mobile-field-quote-capture',
    appName: 'QuoteGen',
    title: 'Mobile Field Quote Capture',
    subtitle:
      'A tablet-first, offline-capable interface for field estimators to capture job site details on-site.',
    description:
      'Capture photos, measurements, and voice notes in the field. Drafts sync to the main quote editor when back online. Enables estimators to start quotes on-site, reduces back-office re-entry, and improves response time to customers.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Field Operations',
    complexity: 'High',
    highlights: [
      'Tablet-first offline-capable UI',
      'Mobile-optimized forms',
      'Photo capture with geotagging',
      'Voice notes and measurements',
      'Automatic sync back to quote editor',
    ],
    prompt:
      'Build Mobile Field Quote Capture in QuoteGen. Create a tablet-first, offline-capable interface for estimators to capture job site details, photos with geotagging, measurements, and voice notes. Store drafts locally and sync them into the main quote editor when back online.',
  },
  {
    id: 'qg-6',
    slug: 'smart-quote-template-engine',
    appName: 'QuoteGen',
    title: 'Smart Quote Template Engine (Reusable Sections)',
    subtitle:
      'Upgrade Duct/FAB/Steel templates with a library of reusable scope sections, terms, and material matrices.',
    description:
      'Users save custom snippets, drag them into a quote, and update all quotes globally when a snippet changes. Reduces repetitive writing, ensures consistency across estimators, and makes large pricing updates manageable.',
    date: '2026-06-29',
    tag: 'Feature Update',
    category: 'Estimating & Takeoff',
    complexity: 'Medium',
    highlights: [
      'Snippet library for scope sections and terms',
      'Drag-and-drop composer integration',
      'Global propagation when snippets change',
      'Material matrix reusable blocks',
      'Consistency across estimators',
    ],
    prompt:
      'Upgrade QuoteGen with a Smart Quote Template Engine. Add a snippet library of reusable scope sections, terms, and material matrices. Let estimators drag snippets into the quote composer and propagate updates globally when a snippet changes.',
  },
  {
    id: 'qg-7',
    slug: 'enhanced-analytics-forecasting',
    appName: 'QuoteGen',
    title: 'Enhanced Analytics & Forecasting Dashboard',
    subtitle:
      'Extend existing sales analytics with predictive win-rate modeling, estimator comparisons, and pipeline forecasting.',
    description:
      'Add automated weekly email reports to leadership. Turns quote data into actionable business intelligence and helps management forecast revenue and workload.',
    date: '2026-06-29',
    tag: 'Feature Update',
    category: 'Analytics & Reporting',
    complexity: 'Medium',
    highlights: [
      'Predictive win-rate modeling',
      'Estimator performance comparisons',
      'Pipeline forecasting',
      'Automated weekly leadership email reports',
      'Mostly query/reporting work',
    ],
    prompt:
      'Extend QuoteGen analytics with an Enhanced Forecasting Dashboard. Add predictive win-rate modeling, estimator performance comparisons, pipeline forecasting, and automated weekly email reports to leadership. Build on the existing /salesdata analytics queries and reporting patterns.',
  },
  {
    id: 'qg-8',
    slug: 'ai-scope-writing-assistant',
    appName: 'QuoteGen',
    title: 'AI-Powered Scope Writing Assistant',
    subtitle:
      'Integrate an LLM assistant into the quote editor that drafts scope-of-work language from project notes and requirements.',
    description:
      'The assistant pulls from previous similar quotes and customer requirements; users review and refine the output. Speeds up quote writing, reduces writer’s block, and helps junior estimators produce professional scopes.',
    date: '2026-06-29',
    tag: 'Feature Update',
    category: 'AI & Automation',
    complexity: 'Medium',
    highlights: [
      'LLM scope drafting from project notes',
      'Context retrieval from previous similar quotes',
      'Review and accept/reject UI',
      'Prompt engineering and quote context',
      'Helps junior estimators produce professional scopes',
    ],
    prompt:
      'Add an AI-Powered Scope Writing Assistant to QuoteGen. Integrate an LLM into the quote editor that drafts scope-of-work language from project notes, customer requirements, and previous similar quotes. Provide a review/accept/reject UI and tune prompts for the Duct/FAB/Steel templates.',
  },
  {
    id: 'qg-9',
    slug: 'customer-quote-portal',
    appName: 'QuoteGen',
    title: 'Customer Quote Portal',
    subtitle:
      'A branded, token-secured web page where customers can view, download, accept, decline, or request changes to quotes online.',
    description:
      'Acceptance triggers status updates and optional e-signature capture. Improves customer experience, reduces back-and-forth email, and captures faster closes.',
    date: '2026-06-29',
    tag: 'Feature Update',
    category: 'Sales & Customer',
    complexity: 'Medium-High',
    highlights: [
      'Public-facing branded route',
      'Secure token-based access',
      'Customer accept/decline/request changes',
      'E-signature capture',
      'Status webhook updates',
    ],
    prompt:
      'Build a Customer Quote Portal in QuoteGen. Create a branded, token-secured public page where customers can view, download, accept, decline, or request changes to quotes. Capture e-signatures on acceptance and push status updates back into the quote record.',
  },
  {
    id: 'qg-10',
    slug: 'quote-revision-diff-viewer',
    appName: 'QuoteGen',
    title: 'Quote Revision Diff Viewer',
    subtitle:
      'A visual side-by-side diff tool for quote revisions that highlights changes between any two versions.',
    description:
      'Highlights changes in pricing, quantities, scope language, terms, and attachments between any two versions. Makes version history useful for internal reviews and customer change-order discussions.',
    date: '2026-06-29',
    tag: 'Feature Update',
    category: 'Workflow & Collaboration',
    complexity: 'Low-Medium',
    highlights: [
      'Side-by-side revision comparison',
      'Pricing and quantity change highlighting',
      'Scope language and terms diff',
      'Attachment change tracking',
      'Leverages existing quote history data',
    ],
    prompt:
      'Build a Quote Revision Diff Viewer in QuoteGen. Provide a side-by-side comparison of any two quote revisions, highlighting changes in pricing, quantities, scope language, terms, and attachments. Leverage the existing quote history data and make it useful for change-order discussions.',
  },

  // ─── ADDITIONAL QUOTEGEN IDEAS ───────────────────────────────────────────────
  {
    id: 'qg-11',
    slug: 'tagcounter-manual-pdf-counting',
    appName: 'QuoteGen',
    title: 'TagCounter + Manual PDF Counting',
    subtitle:
      'Upload PDF plans and count tagged parts (VAV, CD, FSD, RG) by tag pattern or by dropping colored markers on the drawing.',
    description:
      'A lightweight pre-takeoff counting layer that needs no dimensional measurement. Estimators click to drop part-type markers on PDF.js drawings and get live per-page tallies that feed the scope. Counts also become training data for the AI takeoff model.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Estimating & Takeoff',
    complexity: 'Medium-High',
    highlights: [
      'PDF.js drawing viewer',
      'Click-to-drop colored part-type markers',
      'Tag pattern auto-count (VAV, CD, FSD, RG)',
      'Live per-page tally',
      'Outputs feed scope line items and AI training data',
    ],
    prompt:
      'Build TagCounter + Manual PDF Counting in QuoteGen. Upload PDF plans, display them with PDF.js, and let estimators drop colored part-type markers or run tag-pattern auto-counts (VAV, CD, FSD, RG). Show live per-page tallies and feed the counts into scope line items and AI takeoff training data.',
  },
  {
    id: 'qg-12',
    slug: 'missing-scope-detector',
    appName: 'QuoteGen',
    title: 'Missing-Scope Detector',
    subtitle:
      'Scans the quote for common missing scope items like crane, permit, disposal, controls, TAB, and commissioning.',
    description:
      'Catches the things estimators forget to clarify or price — crane rentals, permits, hauling/disposal, controls integration, TAB, commissioning, and temporary power. Surfaces them as flagged suggestions the estimator can accept, edit, or dismiss.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Estimating & Takeoff',
    complexity: 'Medium',
    highlights: [
      'Rule-based and LLM-assisted detection',
      'Configurable checklist per team (Duct / Fab / Steel)',
      'One-click add to scope or exclusions',
      'Learns from past won/lost quotes',
      'Reduces post-award change orders',
    ],
    prompt:
      'Build a Missing-Scope Detector in QuoteGen. Scan quotes for commonly forgotten items — crane, permit, disposal, controls, TAB, commissioning, temporary power — using rules and LLM assistance. Surface flagged suggestions estimators can accept, edit, or dismiss, with team-specific checklists.',
  },
  {
    id: 'qg-13',
    slug: 'assembly-templates-archetype',
    appName: 'QuoteGen',
    title: 'Assembly Templates by Archetype',
    subtitle:
      'Pre-built quote assemblies for common project types like RTU swap, VAV zone add, or exhaust fan replacement.',
    description:
      'Goes beyond reusable snippets by bundling entire scope sections, labor assumptions, materials, and terms for common job archetypes. Estimators drop in an assembly and adjust quantities instead of writing from scratch.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Estimating & Takeoff',
    complexity: 'Medium',
    highlights: [
      'Archetype library (RTU swap, VAV add, fan replacement, etc.)',
      'Bundled scope, labor, materials, and terms',
      'Quantity-driven scaling',
      'Team-specific archetypes',
      'Builds on the Smart Quote Template Engine',
    ],
    prompt:
      'Build Assembly Templates by Archetype in QuoteGen. Create pre-built assemblies for common project types (RTU swap, VAV zone add, exhaust fan replacement, etc.) that bundle scope, labor, materials, and terms. Let estimators drop in an assembly and scale by quantity. Build on the Smart Quote Template Engine.',
  },
  {
    id: 'qg-14',
    slug: 'good-better-best-builder',
    appName: 'QuoteGen',
    title: 'Good / Better / Best Option Builder',
    subtitle:
      'Generate tiered quote options for customers with clear upgrade rationale and pricing at each level.',
    description:
      'Lets estimators define a base scope and two upgrade tiers — for example, standard liner vs. acoustic liner vs. external insulation, or standard controls vs. upgraded controls. Each tier shows delta pricing and a customer-facing rationale.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Sales & Customer',
    complexity: 'Medium',
    highlights: [
      'Base + two upgrade tiers per quote',
      'Delta pricing automatically calculated',
      'Customer-facing option summary',
      'PDF output with tiered scope blocks',
      'Helps upsell without rewriting the quote',
    ],
    prompt:
      'Build a Good / Better / Best Option Builder in QuoteGen. Let estimators define a base scope plus two upgrade tiers with delta pricing and customer-facing rationale. Render tiered scope blocks in the PDF and make it easy to present options without rewriting the entire quote.',
  },
  {
    id: 'qg-15',
    slug: 'won-lost-reason-capture',
    appName: 'QuoteGen',
    title: 'Won / Lost Reason Capture',
    subtitle:
      'Record why quotes are won or lost to build feedback loops for estimating and sales.',
    description:
      'Adds a quick close-out step when a quote status changes to Awarded or Lost. Captures reason codes, competitor info, and free-form notes. Feeds analytics so leadership can spot pricing, scope, or follow-up patterns.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Analytics & Reporting',
    complexity: 'Low-Medium',
    highlights: [
      'Reason-code picker with custom notes',
      'Competitor and price capture',
      'Required on status change to Awarded/Lost',
      'Trend reporting by estimator and team',
      'Improves forecasting and win-rate modeling',
    ],
    prompt:
      'Build Won/Lost Reason Capture in QuoteGen. When a quote status changes to Awarded or Lost, prompt the estimator for reason codes, competitor info, and notes. Store the data and feed it into analytics and win-rate modeling.',
  },
  {
    id: 'qg-16',
    slug: 'long-lead-procurement-alerts',
    appName: 'QuoteGen',
    title: 'Long-Lead Procurement Alerts',
    subtitle:
      'Flag equipment and materials with extended lead times so quotes reflect realistic delivery and pricing.',
    description:
      'Surfaces long-lead items during quoting — RTUs, custom coils, specialty steel — and prompts the estimator to confirm availability and delivery impact. Helps avoid quotes that win but cannot be fulfilled on schedule.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Materials & Equipment',
    complexity: 'Medium',
    highlights: [
      'Long-lead item database',
      'Automatic flagging in scope builder',
      'Delivery impact note per item',
      'Integration with vendor price history',
      'Escalation if lead time exceeds job schedule',
    ],
    prompt:
      'Build Long-Lead Procurement Alerts in QuoteGen. Maintain a long-lead item database (RTUs, custom coils, specialty steel) and automatically flag those items during quoting. Prompt estimators to confirm availability and capture delivery impact, with escalation when lead time exceeds the job schedule.',
  },
  {
    id: 'qg-17',
    slug: 'estimate-to-project-handoff',
    appName: 'QuoteGen',
    title: 'Estimate-to-Project Handoff Packet',
    subtitle:
      'Auto-generates a structured project kickoff document when a quote is awarded.',
    description:
      'Packages the final scope, clarifications, exclusions, assumptions, pricing breakdown, customer contacts, and key dates into a handoff packet for the PM and field team. Reduces misinterpretation between estimating and operations.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Workflow & Collaboration',
    complexity: 'Medium',
    highlights: [
      'Auto-generated on quote award',
      'Scope, exclusions, and assumptions preserved',
      'Pricing breakdown and key dates',
      'Customer and vendor contacts',
      'PDF and structured DailyPlan import',
    ],
    prompt:
      'Build an Estimate-to-Project Handoff Packet in QuoteGen. When a quote is awarded, auto-generate a kickoff document containing the final scope, clarifications, exclusions, assumptions, pricing breakdown, customer/vendor contacts, and key dates. Output as PDF and, where possible, import structured data into DailyPlan.',
  },
  {
    id: 'qg-18',
    slug: 'assumption-exclusions-builder',
    appName: 'QuoteGen',
    title: 'Assumption & Exclusions Builder',
    subtitle:
      'A structured builder for quote assumptions and exclusions so nothing is left implied.',
    description:
      'Replaces ad-hoc assumption notes with a managed list of standard assumptions and exclusions. Estimators pick from team defaults, add job-specific items, and the final set flows cleanly into the PDF and handoff packet.',
    date: '2026-06-29',
    tag: 'New Feature',
    category: 'Estimating & Takeoff',
    complexity: 'Low-Medium',
    highlights: [
      'Team-specific default libraries',
      'Structured add/edit/reorder',
      'Auto-included in PDF output',
      'Linked to missing-scope detection',
      'Reduces post-award disputes',
    ],
    prompt:
      'Build an Assumption & Exclusions Builder in QuoteGen. Replace ad-hoc assumption notes with a structured builder that offers team-specific defaults and lets estimators add, edit, and reorder job-specific assumptions and exclusions. Flow the final list into the PDF and handoff packet and link it to the Missing-Scope Detector.',
  },

  // ─── DAILYPLAN — JULY 2026 BATCH ─────────────────────────────────────────────
  {
    id: 'dp-19',
    slug: 'photo-progress-timeline',
    appName: 'DailyPlan',
    title: 'Photo Progress Documentation & Timeline',
    subtitle:
      'A geotagged, timestamped photo log per job that builds an automatic visual timeline of installed work.',
    description:
      'Crews snap photos tagged to job, area, and system; the app organizes them into a scrollable before/after timeline. Protects against back-charges, documents concealed work before close-in, and gives PMs remote eyes on every site.',
    date: '2026-07-12',
    tag: 'New Feature',
    category: 'Field Operations',
    complexity: 'Medium',
    highlights: [
      'Geotag and timestamp on every photo',
      'Tag by job, area, and system',
      'Before/after and close-in documentation',
      'Scrollable visual timeline per job',
      'Exportable photo packages for disputes',
    ],
    prompt:
      'Build Photo Progress Documentation & Timeline in DailyPlan. Let crews capture geotagged, timestamped photos tagged to job, area, and system. Organize them into a scrollable visual timeline with before/after and close-in views, and support exportable photo packages for dispute protection.',
  },
  {
    id: 'dp-20',
    slug: 'toolbox-talk-library',
    appName: 'DailyPlan',
    title: 'Toolbox Talk Library & Digital Sign-Off',
    subtitle:
      'A managed library of weekly safety talks with digital attendance sign-off from the field.',
    description:
      'Foremen pick or get assigned a toolbox talk, run it at the morning huddle, and capture crew signatures on a phone or tablet. Attendance history feeds Safety Hub compliance reporting — no more paper sign-in sheets lost in truck cabs.',
    date: '2026-07-12',
    tag: 'Feature Update',
    category: 'Safety & Compliance',
    complexity: 'Low-Medium',
    highlights: [
      'Curated talk library with scheduling',
      'Digital crew sign-off on mobile',
      'Attendance history per worker',
      'Feeds Safety Hub compliance reports',
      'Spanish-language talk support',
    ],
    prompt:
      'Build a Toolbox Talk Library & Digital Sign-Off in DailyPlan Safety Hub. Manage a library of safety talks with weekly scheduling, let foremen run talks and capture digital crew signatures on mobile, store attendance history per worker, and feed compliance reporting. Include Spanish-language talks.',
  },
  {
    id: 'dp-21',
    slug: 'manpower-heatmap',
    appName: 'DailyPlan',
    title: 'Manpower Heatmap & Capacity Board',
    subtitle:
      'A company-wide visual board showing crew loading by week so leadership can spot over- and under-allocation early.',
    description:
      'Aggregates assignments across all active jobs into a color-coded heatmap — who is committed where, weeks ahead. Makes hiring, overtime, and job-acceptance decisions with real capacity data instead of gut feel.',
    date: '2026-07-12',
    tag: 'New Feature',
    category: 'Scheduling & Dispatch',
    complexity: 'Medium',
    highlights: [
      'Color-coded weekly loading heatmap',
      'Company, crew, and trade-level views',
      'Committed vs. available capacity',
      'Forecast overlay from upcoming awarded work',
      'Drill-down to the underlying assignments',
    ],
    prompt:
      'Build a Manpower Heatmap & Capacity Board in DailyPlan. Aggregate crew assignments across all active jobs into a color-coded weekly loading heatmap with company, crew, and trade-level views. Show committed vs. available capacity, overlay forecasted demand from awarded work, and support drill-down to assignments.',
  },
  {
    id: 'dp-22',
    slug: 'delivery-crane-coordinator',
    appName: 'DailyPlan',
    title: 'Delivery & Crane Day Coordinator',
    subtitle:
      'Schedule material deliveries and crane picks against site logistics, with conflicts flagged automatically.',
    description:
      'A shared logistics calendar per job for deliveries, crane days, and road/lane closures. Flags double-booked hoisting windows and deliveries arriving before the crew or laydown space is ready.',
    date: '2026-07-12',
    tag: 'New Feature',
    category: 'Scheduling & Dispatch',
    complexity: 'Medium',
    highlights: [
      'Per-job logistics calendar',
      'Crane pick and hoisting window booking',
      'Delivery-vs-readiness conflict flags',
      'Vendor delivery confirmations',
      'Feeds the Ready-to-Start Dispatch Gate',
    ],
    prompt:
      'Build a Delivery & Crane Day Coordinator in DailyPlan. Create a per-job logistics calendar for material deliveries, crane picks, and site closures. Flag conflicts like double-booked hoisting windows or deliveries before laydown/crew readiness, capture vendor confirmations, and feed status into the Ready-to-Start Dispatch Gate.',
  },
  {
    id: 'dp-23',
    slug: 'qr-job-board',
    appName: 'DailyPlan',
    title: 'QR Job Board — Trailer Poster',
    subtitle:
      'A printable QR poster for the site trailer that opens today’s plan, drawings, and emergency info — no login required.',
    description:
      'Each job gets a QR code linking to a read-only mobile page: today’s plan summary, key contacts, muster point, and current drawings. Gets information to every worker and sub on site without accounts or app installs.',
    date: '2026-07-12',
    tag: 'New Feature',
    category: 'Field Operations',
    complexity: 'Low',
    highlights: [
      'Printable per-job QR poster',
      'Read-only, no-login mobile page',
      'Today’s plan summary and key contacts',
      'Emergency info and muster point',
      'Token-secured public route',
    ],
    prompt:
      'Build a QR Job Board in DailyPlan. Generate a printable QR poster per job that opens a token-secured, read-only mobile page showing today’s plan summary, key contacts, emergency info, muster point, and links to current drawings — no login or app install required.',
  },
  {
    id: 'dp-24',
    slug: 'punch-list-closeout',
    appName: 'DailyPlan',
    title: 'Punch List & Closeout Tracker',
    subtitle:
      'Room-by-room punch items with photos, assignees, and completion sign-off to drive jobs to done.',
    description:
      'Track punch items by area with photo evidence, owners, and due dates. Progress rolls up to a closeout dashboard so PMs know exactly what stands between the job and final billing.',
    date: '2026-07-12',
    tag: 'New Feature',
    category: 'Field Operations',
    complexity: 'Medium',
    highlights: [
      'Area/room-scoped punch items',
      'Photo evidence and assignees',
      'Completion sign-off workflow',
      'Closeout progress dashboard',
      'Export for GC and owner walkthroughs',
    ],
    prompt:
      'Build a Punch List & Closeout Tracker in DailyPlan. Track punch items by area/room with photos, assignees, due dates, and a completion sign-off workflow. Roll progress into a closeout dashboard and support exports for GC and owner walkthroughs.',
  },
  {
    id: 'dp-25',
    slug: 'timesheet-production-capture',
    appName: 'DailyPlan',
    title: 'Timesheet & Production Quantity Capture',
    subtitle:
      'Capture crew hours and installed quantities per cost code to power earned-value tracking.',
    description:
      'Foremen log hours and installed quantities (lbs of duct, LF of pipe, units set) against cost codes right in the daily plan. Compares earned vs. burned in near-real time so overruns surface in days, not at month-end.',
    date: '2026-07-12',
    tag: 'New Feature',
    category: 'Analytics & Reporting',
    complexity: 'Medium-High',
    highlights: [
      'Hours and quantities per cost code',
      'Earned vs. burned tracking',
      'Overrun alerts within days',
      'Feeds AI production forecasting',
      'Export to payroll and accounting',
    ],
    prompt:
      'Build Timesheet & Production Quantity Capture in DailyPlan. Let foremen log crew hours and installed quantities per cost code inside the daily plan. Compute earned vs. burned in near-real time, alert on overruns, feed the AI production forecasting model, and export to payroll/accounting.',
  },
  {
    id: 'dp-26',
    slug: 'spanish-language-mode',
    appName: 'DailyPlan',
    title: 'Spanish Language Mode',
    subtitle:
      'Full Spanish translation for all field-facing screens, with per-user language preference.',
    description:
      'Every screen a foreman or crew member touches — daily plans, safety checklists, to-dos, turnover — available in Spanish with one tap. Removes a real adoption barrier and improves safety comprehension on mixed-language crews.',
    date: '2026-07-12',
    tag: 'Feature Update',
    category: 'Field Operations',
    complexity: 'Low-Medium',
    highlights: [
      'Per-user language preference',
      'All field-facing screens translated',
      'Safety content prioritized',
      'i18n framework for future languages',
      'One-tap language toggle',
    ],
    prompt:
      'Add a Spanish Language Mode to DailyPlan. Introduce an i18n framework, translate all field-facing screens (daily plans, safety checklists, to-dos, turnover) into Spanish, prioritize safety content, and add a per-user language preference with a one-tap toggle.',
  },

  // ─── QUOTEGEN — JULY 2026 BATCH ──────────────────────────────────────────────
  {
    id: 'qg-19',
    slug: 'bid-calendar-deadline-tracker',
    appName: 'QuoteGen',
    title: 'Bid Calendar & Deadline Tracker',
    subtitle:
      'Every open bid, walk date, RFI deadline, and addendum due date in one shared calendar with reminders.',
    description:
      'Replaces scattered Outlook reminders with a team-wide bid calendar. Estimators see what is due this week, managers see workload distribution, and nothing gets submitted late because a deadline lived in one person’s inbox.',
    date: '2026-07-12',
    tag: 'New Feature',
    category: 'Workflow & Collaboration',
    complexity: 'Low-Medium',
    highlights: [
      'Team-wide bid calendar view',
      'Walk dates, RFI and addenda deadlines',
      'Automatic reminders and escalations',
      'Estimator workload at a glance',
      'Syncs due dates from quote records',
    ],
    prompt:
      'Build a Bid Calendar & Deadline Tracker in QuoteGen. Show every open bid’s due date, walk date, RFI deadline, and addenda dates on a shared team calendar with reminders and escalations. Sync dates from quote records and surface estimator workload distribution.',
  },
  {
    id: 'qg-20',
    slug: 'addendum-impact-tracker',
    appName: 'QuoteGen',
    title: 'Addendum Impact Tracker',
    subtitle:
      'Log addenda per bid, flag scope and pricing impacts, and verify every quote references the latest addendum.',
    description:
      'Each addendum is logged against the bid with a quick impact assessment — pricing, scope, schedule, or none. The quote PDF automatically lists acknowledged addenda, eliminating the classic “quoted off the wrong addendum” dispute.',
    date: '2026-07-12',
    tag: 'New Feature',
    category: 'Estimating & Takeoff',
    complexity: 'Medium',
    highlights: [
      'Addendum log per bid',
      'Impact assessment workflow',
      'Auto-listed acknowledgments on the PDF',
      'Warning when quotes predate an addendum',
      'Links to affected line items',
    ],
    prompt:
      'Build an Addendum Impact Tracker in QuoteGen. Log addenda against each bid with an impact assessment (pricing, scope, schedule, none), warn when a quote predates the latest addendum, link impacts to affected line items, and auto-list acknowledged addenda on the quote PDF.',
  },
  {
    id: 'qg-21',
    slug: 'historical-cost-database',
    appName: 'QuoteGen',
    title: 'Historical Cost Database & Unit Benchmarks',
    subtitle:
      'Auto-build $/lb, $/LF, and $/unit benchmarks from past quotes and actuals to sanity-check new bids.',
    description:
      'Mines quote history and job actuals into unit-cost benchmarks by work type, building type, and size band. New quotes get a live comparison — “your duct $/lb is 18% below your last five similar jobs” — before they go out the door.',
    date: '2026-07-12',
    tag: 'New Feature',
    category: 'Analytics & Reporting',
    complexity: 'Medium-High',
    highlights: [
      'Benchmarks by work and building type',
      'Live sanity-check against similar past jobs',
      'Quote vs. actual variance feedback loop',
      'Outlier warnings before submission',
      'Improves with every closed job',
    ],
    prompt:
      'Build a Historical Cost Database in QuoteGen. Mine quote history and job actuals into unit-cost benchmarks ($/lb, $/LF, $/unit) segmented by work type, building type, and size band. Show live comparisons and outlier warnings on new quotes and feed quote-vs-actual variance back into the benchmarks.',
  },
  {
    id: 'qg-22',
    slug: 'spec-keyword-scanner',
    appName: 'QuoteGen',
    title: 'Spec Book Keyword Scanner',
    subtitle:
      'Upload spec PDFs and auto-flag risk keywords — liquidated damages, special warranties, seismic, stainless — against a managed watchlist.',
    description:
      'Scans uploaded specification books for watchlist terms that change cost or risk, and pins each hit to its page. Estimators review a flagged summary instead of reading 400 pages, and the watchlist grows as the team learns.',
    date: '2026-07-12',
    tag: 'New Feature',
    category: 'AI & Automation',
    complexity: 'Medium',
    highlights: [
      'PDF spec book upload and OCR',
      'Managed risk-keyword watchlist',
      'Page-pinned hits with context snippets',
      'Flag summary per bid',
      'Team-editable watchlist that grows over time',
    ],
    prompt:
      'Build a Spec Book Keyword Scanner in QuoteGen. Upload specification PDFs, OCR them, and scan for a team-managed watchlist of risk keywords (liquidated damages, special warranties, seismic, stainless, etc.). Pin each hit to its page with a context snippet and present a flagged summary per bid.',
  },
  {
    id: 'qg-23',
    slug: 'labor-rate-escalation-manager',
    appName: 'QuoteGen',
    title: 'Labor Rate & Escalation Manager',
    subtitle:
      'Centralized labor rates, burden, and escalation factors with effective dates that quotes pull automatically.',
    description:
      'One admin screen for shop and field rates, burden percentages, and escalation schedules. Quotes always price from current rates, and long-duration bids apply escalation automatically instead of relying on estimator memory.',
    date: '2026-07-12',
    tag: 'Feature Update',
    category: 'Estimating & Takeoff',
    complexity: 'Low-Medium',
    highlights: [
      'Central rate table with effective dates',
      'Burden and markup management',
      'Automatic escalation for long-duration work',
      'Rate change audit history',
      'Warns on quotes using stale rates',
    ],
    prompt:
      'Build a Labor Rate & Escalation Manager in QuoteGen. Centralize shop/field labor rates, burden percentages, and escalation schedules with effective dates. Have quotes auto-pull current rates, apply escalation on long-duration bids, keep a change audit history, and warn when a quote uses stale rates.',
  },
  {
    id: 'qg-24',
    slug: 'gc-relationship-tracker',
    appName: 'QuoteGen',
    title: 'GC & Customer Relationship Tracker',
    subtitle:
      'A lightweight CRM for general contractors — contacts, bid history, win rates, and preferred-status notes.',
    description:
      'Every GC gets a profile: who to call, what we have bid them, what we have won, and how they pay. Prioritizes estimating effort toward customers who actually award work, and preserves relationship knowledge when people move on.',
    date: '2026-07-12',
    tag: 'New Feature',
    category: 'Sales & Customer',
    complexity: 'Medium',
    highlights: [
      'GC profiles with contacts and notes',
      'Bid and award history per customer',
      'Win rate and payment behavior tracking',
      'Preferred / avoid status flags',
      'Feeds bid/no-bid decisions',
    ],
    prompt:
      'Build a GC & Customer Relationship Tracker in QuoteGen. Create profiles for general contractors with contacts, notes, bid/award history, win rates, and payment behavior. Support preferred/avoid status flags and surface the data during bid/no-bid decisions.',
  },
  {
    id: 'qg-25',
    slug: 'duplicate-bid-detection',
    appName: 'QuoteGen',
    title: 'Duplicate Bid Detection & Coordination',
    subtitle:
      'Detects when multiple estimators are quoting the same project for different GCs and coordinates pricing.',
    description:
      'Matches new quotes against open ones by project name, address, and walk date. When two estimators are pricing the same job for competing GCs, both get notified so scope and pricing stay consistent across submissions.',
    date: '2026-07-12',
    tag: 'New Feature',
    category: 'Workflow & Collaboration',
    complexity: 'Low-Medium',
    highlights: [
      'Fuzzy matching on name, address, and dates',
      'Cross-estimator duplicate alerts',
      'Linked quote groups per project',
      'Consistent pricing across GC submissions',
      'Avoids accidental self-competition',
    ],
    prompt:
      'Build Duplicate Bid Detection in QuoteGen. Fuzzy-match new quotes against open ones by project name, address, and walk date. Alert estimators when the same project is being quoted for different GCs, link the quotes into a project group, and help keep scope and pricing consistent.',
  },
  {
    id: 'qg-26',
    slug: 'margin-analyzer',
    appName: 'QuoteGen',
    title: 'Quoted vs. Actual Margin Analyzer',
    subtitle:
      'Compares quoted margin to actual job margin after completion and recommends adjustments by job type.',
    description:
      'Closes the loop between estimating and results. Pulls actual costs per completed job, compares against the winning quote, and surfaces patterns — which job types, sizes, and GCs consistently over- or under-perform their estimate.',
    date: '2026-07-12',
    tag: 'New Feature',
    category: 'Analytics & Reporting',
    complexity: 'Medium-High',
    highlights: [
      'Quoted vs. actual margin per job',
      'Patterns by job type, size, and GC',
      'Estimate accuracy scoring',
      'Margin recommendations for future bids',
      'Feeds the historical cost database',
    ],
    prompt:
      'Build a Quoted vs. Actual Margin Analyzer in QuoteGen. Import actual costs for completed jobs, compare against the winning quote, and surface over/under-performance patterns by job type, size, and GC. Score estimate accuracy and recommend margin adjustments for future bids, feeding the historical cost database.',
  },
]

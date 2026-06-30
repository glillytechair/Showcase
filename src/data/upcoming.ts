import { UpcomingIdea } from '@/types'

// ─── HOW TO ADD A NEW UPCOMING IDEA ───────────────────────────────────────────
// 1. Copy an entry below and update all fields
// 2. Use tag: 'New App' | 'New Feature' | 'Feature Update'
// 3. git push → Vercel auto-deploys in ~30 seconds
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
    complexity: 'Medium',
    highlights: [
      'Asset registry with QR-code scanning',
      'Recurring maintenance schedules',
      'Service-log history',
      'Photo attachments',
      'Reuses existing Safety checklist patterns',
    ],
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
    complexity: 'High',
    highlights: [
      'Role-scoped access (subcontractor)',
      'Document upload for safety docs and certs',
      'Simple daily-report form',
      'Scorecard ratings and performance history',
      'Job-specific messaging',
    ],
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
    complexity: 'Low-Medium',
    highlights: [
      '7-day forecast per job',
      'Weather alerts and condition-based safety reminders',
      'Historical weather tied to production notes',
      'Read-only API integration to start',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Inventory locations and stock levels',
      'Transfer requests between warehouses and jobsites',
      'Consumption logging',
      'Reorder thresholds and low-stock alerts',
      'Integration with existing Orders module',
    ],
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
    complexity: 'High',
    highlights: [
      'Trend charts and completion-date predictions',
      'Labor-demand alerts',
      '"What-if" scenario inputs (crew size, shift changes)',
      'Integrates with existing AI services',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Browser speech-to-text',
      'IndexedDB offline cache',
      'Conflict resolution on sync',
      'UI toggles for offline status',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Investigation checklist',
      'Corrective-action tracking with owners and due dates',
      'Notification reminders',
      'Exportable incident report PDF',
      'Extends existing incidents tables and UI',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Canvas signature pad',
      'Certificate PDF stamping',
      'Resend email dispatch',
      'Audit trail of signatures',
    ],
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
    complexity: 'Medium-High',
    highlights: [
      'Multi-rater invitation flow',
      'Anonymity controls',
      'Aggregated reports',
      'Comment theme clustering',
      'Radar chart visualization',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Alert aggregation query',
      'Per-user relevance filtering',
      'Dismiss/read states',
      'Priority badges',
      'Reusable alert service other modules can publish into',
    ],
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
    complexity: 'High',
    highlights: [
      'PDF, DWG, and image drawing support',
      'Canvas scaling and measurement tooling',
      'Digital quantity takeoff for duct, fittings, steel, and equipment',
      'Maps takeoff output directly to quote templates',
      'Closes the gap between existing takeoff schema and UI',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Status transitions and role-based permissions',
      'Manager approve/request changes/reject actions',
      'Comment threads per review',
      'Notification emails',
      'History logging and audit trail',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Visual sequence builder',
      'Email template variables',
      'Scheduled edge function dispatch',
      'Status-aware cancellation logic',
      'Stop rules for awarded/lost/replied quotes',
    ],
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
    complexity: 'Medium-High',
    highlights: [
      'Side-by-side bid comparison',
      'Unit normalization heuristics',
      'Outlier highlighting',
      'Best-value suggestions',
      'Reusable vendor price history',
    ],
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
    complexity: 'High',
    highlights: [
      'Tablet-first offline-capable UI',
      'Mobile-optimized forms',
      'Photo capture with geotagging',
      'Voice notes and measurements',
      'Automatic sync back to quote editor',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Snippet library for scope sections and terms',
      'Drag-and-drop composer integration',
      'Global propagation when snippets change',
      'Material matrix reusable blocks',
      'Consistency across estimators',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Predictive win-rate modeling',
      'Estimator performance comparisons',
      'Pipeline forecasting',
      'Automated weekly leadership email reports',
      'Mostly query/reporting work',
    ],
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
    complexity: 'Medium',
    highlights: [
      'LLM scope drafting from project notes',
      'Context retrieval from previous similar quotes',
      'Review and accept/reject UI',
      'Prompt engineering and quote context',
      'Helps junior estimators produce professional scopes',
    ],
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
    complexity: 'Medium-High',
    highlights: [
      'Public-facing branded route',
      'Secure token-based access',
      'Customer accept/decline/request changes',
      'E-signature capture',
      'Status webhook updates',
    ],
  },
  {
    id: 'qg-10',
    slug: 'quote-revision-diff-viewer',
    appName: 'QuoteGen',
    title: 'Quote Revision Diff Viewer',
    subtitle:
      'A visual side-by-side diff tool for quote revisions that highlights changes between any two versions.',
    description:
      'Highlights changes in pricing, quantities, scope language, terms, and attachments. Makes version history useful for internal reviews and customer change-order discussions.',
    date: '2026-06-29',
    tag: 'Feature Update',
    complexity: 'Low-Medium',
    highlights: [
      'Side-by-side revision comparison',
      'Pricing and quantity change highlighting',
      'Scope language and terms diff',
      'Attachment change tracking',
      'Leverages existing quote history data',
    ],
  },

  // ─── ADDITIONAL DAILYPLAN IDEAS ──────────────────────────────────────────────
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
    complexity: 'Medium',
    highlights: [
      'Voice capture optimized for jobsite noise',
      'Auto-extracts who, what, and when',
      'Routes action items to PMs, safety, or dispatch',
      'Links back to the originating job and daily plan',
      'Works on mobile without leaving the field view',
    ],
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
    complexity: 'Low-Medium',
    highlights: [
      'Mobile-first, thumb-friendly interface',
      'Auto-suggests tasks from the active Daily Plan',
      'Site and crew scoped',
      'Carry-forward incomplete items',
      'Rolls into end-of-day turnover',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Auto-generated every morning per PM',
      'Risk/exposure flagging',
      'Deep-links to every highlighted item',
      'Editable status-update drafts',
      'Extends dailyplan-chat with PM query types',
    ],
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
    complexity: 'Medium-High',
    highlights: [
      'Skill and certification matching',
      'Availability and location awareness',
      'Rush and priority weighting',
      'Explainable recommendations',
      'One-click accept or override',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Configurable gate criteria per task type',
      'Material readiness status',
      'Tool/equipment readiness check',
      'Drawing and permit verification',
      'Visual red/green gate status per job',
    ],
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
    complexity: 'Medium-High',
    highlights: [
      'Worker skill and certification profiles',
      'Task-type requirement rules',
      'Assignment conflict warnings',
      'Expiration alerts for certs',
      'Crew composition suggestions',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Job-scoped and cross-job views',
      'Owner assignment and due dates',
      'Status workflow (Open / In Progress / Cleared)',
      'Auto-escalation nearing deadline',
      'Feeds the Dashboard Alerts & Action Center',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Auto-generated from field notes and statuses',
      'Carry-forward incomplete tasks',
      'Constraint and safety handoff section',
      'Seeds the next day’s plan',
      'Editable before send',
    ],
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
    complexity: 'Medium-High',
    highlights: [
      'PDF.js drawing viewer',
      'Click-to-drop colored part-type markers',
      'Tag pattern auto-count (VAV, CD, FSD, RG)',
      'Live per-page tally',
      'Outputs feed scope line items and AI training data',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Rule-based and LLM-assisted detection',
      'Configurable checklist per team (Duct / Fab / Steel)',
      'One-click add to scope or exclusions',
      'Learns from past won/lost quotes',
      'Reduces post-award change orders',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Archetype library (RTU swap, VAV add, fan replacement, etc.)',
      'Bundled scope, labor, materials, and terms',
      'Quantity-driven scaling',
      'Team-specific archetypes',
      'Builds on the Smart Quote Template Engine',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Base + two upgrade tiers per quote',
      'Delta pricing automatically calculated',
      'Customer-facing option summary',
      'PDF output with tiered scope blocks',
      'Helps upsell without rewriting the quote',
    ],
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
    complexity: 'Low-Medium',
    highlights: [
      'Reason-code picker with custom notes',
      'Competitor and price capture',
      'Required on status change to Awarded/Lost',
      'Trend reporting by estimator and team',
      'Improves forecasting and win-rate modeling',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Long-lead item database',
      'Automatic flagging in scope builder',
      'Delivery impact note per item',
      'Integration with vendor price history',
      'Escalation if lead time exceeds job schedule',
    ],
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
    complexity: 'Medium',
    highlights: [
      'Auto-generated on quote award',
      'Scope, exclusions, and assumptions preserved',
      'Pricing breakdown and key dates',
      'Customer and vendor contacts',
      'PDF and structured DailyPlan import',
    ],
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
    complexity: 'Low-Medium',
    highlights: [
      'Team-specific default libraries',
      'Structured add/edit/reorder',
      'Auto-included in PDF output',
      'Linked to missing-scope detection',
      'Reduces post-award disputes',
    ],
  },
]

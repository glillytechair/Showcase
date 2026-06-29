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
]

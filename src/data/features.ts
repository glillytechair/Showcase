import { Feature } from '@/types'

// ─── HOW TO ADD A NEW FEATURE ────────────────────────────────────────────────
// 1. Drop images/videos into public/media/
// 2. Copy an entry below and update all fields
// 3. git push → Vercel auto-deploys in ~30 seconds
// ─────────────────────────────────────────────────────────────────────────────

export const features: Feature[] = [
  {
    id: '4',
    slug: 'dailyplan',
    appName: 'DailyPlan',
    title: 'DailyPlan — The Field Operations Platform',
    subtitle: 'One place where the field, the office, and management run the day off the same page.',
    description:
      "DailyPlan is the operating system for the company's day-to-day work. It started as a planning tool for the on-site foreman and grew into a single app that ties together everyone who touches a job — field crews, project managers, dispatch, CAD, safety, HR, and the back office.\n\nWhen someone logs in, the app knows who they are and takes them straight to the work that's theirs. A foreman lands on the day's plan for the job. A project manager sees their assignments, forecasts, and buyouts. A drafter goes to the CAD dashboard. Everyone is working in the same system, looking at the same live data, instead of stitching the picture together from texts, spreadsheets, and email.\n\nConstruction work is coordinated across a dozen disconnected places — a whiteboard in the trailer, a scheduling spreadsheet, Procore, a pile of paper work orders, a group text about who's driving what truck tomorrow. Information lives in people's heads and inboxes, and by the time a problem reaches the people who can fix it, it's already late.\n\nDailyPlan pulls those threads into one source of truth. Plans, schedules, orders, change orders, equipment, manpower, safety, and CAD all live in the same app and update in real time, so the field and the office stop guessing about what the other one is doing.\n\nDailyPlan was built for people working out of a trailer or a truck, not a desk. The interface is fast, the data is always current, and the most important answers — what am I doing today, what's in my way, what's coming — are never more than a tap away. Everything else in the platform exists to keep that answer accurate.",
    date: '2026-01-01',
    tag: 'New Application',
    department: 'Field Operations',
    highlights: [
      'Role-aware landing — each user is taken straight to the view that matches their job: foreman, PM, drafter, dispatcher, safety, or management',
      'Daily Plan — the foreman\'s plan for each job with crews, tasks, constraints, and priorities so the field starts the day ready',
      'Dashboard — top-line read across active work, attention items, and current status in one glance',
      'Schedule — company-wide, per-job, and equipment scheduling in one place instead of competing spreadsheets',
      'Dispatch & Trucking — assignments, trucks, and deliveries coordinated so the right people and gear reach the site',
      'Orders, Change Orders & Work Orders — material and scope tracked from request through delivery, captured in the open',
      'PM Tools — assignments, daily summaries, planning whiteboard, buyout tracking, rentals, labor forecasting, internal tasks, and seal coordination',
      'AeroSeal — field requests, seal runs, and billing linked together even across jobs',
      'CAD / CADash — the drafting team\'s live assignments, progress, priorities, due dates, and file links',
      'Safety — audits, library, and review built into the app so compliance lives with the work',
      'Time Review & HR — labor review and people workflows in the same platform',
      'Procore integration — connects DailyPlan to existing systems so data flows instead of being re-entered',
      'Live, shared data — everyone works from the same source of truth without status meetings or version chasing',
      'Early problem surfacing — constraints, blocks, and rush items are flagged where the right people will see them',
      'Built for the field first — fast interface, always-current data, and the day\'s answers never more than a tap away',
    ],
    media: [
      { type: 'image', url: '/dailyplan1.png', caption: 'DailyPlan — Field Operations Platform overview' },
      { type: 'image', url: '/dailyplan2.png', caption: 'Daily Plan view for the on-site foreman' },
      { type: 'image', url: '/dailyplan3.png', caption: 'Dashboard across active work and attention items' },
      { type: 'image', url: '/dailyplan4.png', caption: 'Scheduling and dispatch coordination' },
      { type: 'image', url: '/dailyplan5.png', caption: 'PM tools and project management workspace' },
      { type: 'image', url: '/dailyplan6.png', caption: 'Orders, change orders, and work order tracking' },
    ],
  },
  {
    id: '3',
    slug: 'report-reader',
    appName: 'QuoteGen',
    featureName: 'Report Reader',
    title: 'QuoteGen — Report Reader',
    subtitle: 'Reads a Trimble Recap Report PDF and writes material weights, liner, and round-duct lengths directly into the Excel estimate — eliminating the manual read-add-retype loop.',
    description:
      'For every bid, estimators open the Recap Report, find each material total, manually sum liner sq ft and round footage per diameter across pressure-class sections, then navigate to each cell in the estimate and type every number in. The summing and retyping is where mistakes creep in — a fat-fingered 605 vs 650, or a diameter total that forgot the 4″ WG section.\n\nReport Reader replaces that entire loop with three steps: drop the PDF, review what it found, drop the Excel and click Write. Zero numbers typed, zero manual addition — and the same parsed numbers you reviewed on screen are the exact numbers written.',
    date: '2026-06-25',
    tag: 'New Feature',
    department: 'Estimating',
    highlights: [
      'Drop the PDF — drag any Recap Report onto the page and it parses automatically, regardless of page length',
      'Review before writing — shows every value it found (material LBS, liner sq ft, round spiral by diameter) so you eyeball it first',
      'Write to Excel — drag in the .xlsx or pick from Google Drive; numbers land in the right cells, everything else stays untouched',
      'Writes 5 material/liner cells: Galvanized rect (B6), Aluminum (B18), Black iron (B60), Stainless (B62), Duct Liner sq ft (B31)',
      'Writes round spiral footage per diameter across all WG sections into Spiral Calculator B7–B34',
      'Sums by dimension across pressure classes — 8″ in 2″ WG and 4″ WG sections become one 8″ total automatically',
      'Ignores Double-Wall sections so roll-up rows are never mis-read as phantom sizes',
      'Page-title driven, not page-number driven — works regardless of report length or structure',
      'In-place save on Chrome/Edge — writes straight back to the .xlsx, no stray copy files',
      'Anything not found in the report is left untouched, never zeroed out',
      'Net savings: ~100+ keystrokes and several minutes of cross-section adding eliminated per estimate, transcription errors reduced to zero',
    ],
    media: [
      {
        type: 'image',
        url: '/reportparse1.png',
        caption: 'Report Reader — PDF drop and parse view',
      },
      {
        type: 'image',
        url: '/reportparse2.png',
        caption: 'Parsed values review — material weights, liner, and round duct by diameter',
      },
      {
        type: 'image',
        url: '/reportparse3.png',
        caption: 'Excel write — numbers land in the correct cells',
      },
      {
        type: 'image',
        url: '/reportparse4.png',
        caption: 'Cell mapping — from report section to estimate workbook',
      },
    ],
  },
  {
    id: '2',
    slug: 'cadash',
    appName: 'CADash',
    title: 'CADash',
    subtitle: 'A live window into the CAD team\'s workload, progress, and priorities — visible to drafters, managers, and the field at the same time.',
    description:
      'CADash is a dedicated branch of the DailyPlan app built for the CAD team. When a CAD user or CAD manager logs in, the app recognizes their role and takes them straight to their own dashboard — they never have to dig through the field-facing Daily Plan to find their work.\n\nIn one screen, anyone with access can see what every drafter is working on, how far along it is, what\'s urgent, and what\'s stuck. It turns the CAD pipeline from something that lives in people\'s heads and inboxes into a single shared, always-current picture.',
    date: '2026-06-20',
    tag: 'New Application',
    department: 'CAD',
    highlights: [
      'Live dashboard — refreshes automatically and re-checks the moment you return to the tab, so everyone is always looking at the same numbers',
      'Four stat cards — Active Jobs, Avg. Progress, Rush Jobs, and Available Drafters give a top-line read at a glance',
      'Current Team Status table — every live assignment with team member, job, priority, area/task, due date, percent-complete bar, and Drive/Revit links',
      'Filter by priority or status — instantly answer "show me everything RUSH" or "what\'s blocked right now"',
      'Blocked flag — anything stuck is highlighted in red and counted in a banner so problems surface immediately instead of quietly eating days',
      'Priority levels — RUSH, HIGH, NORMAL, LOW set in the open so the whole team agrees on what comes first',
      'Direct file links — each assignment carries links to its Google Drive folder and Revit file, no hunting for the latest version',
      'Team roster — manage drafter names, emails, availability, and color/initials avatars',
      'Role-based access — CAD managers get team-workload, queue-health, and attention metrics; drafters and field users see what\'s relevant to them',
      'Manager view — higher-level read for balancing load across the team and spotting where help is needed',
      'Scaffolded for expansion — Jobs & Queue, Requests from the field, Drawing library, and CAD Standards already framed in',
    ],
    media: [
      {
        type: 'image',
        url: '/Cad1.png',
        caption: 'CADash dashboard — live stat cards and team status',
      },
      {
        type: 'image',
        url: '/cad2.png',
        caption: 'Current Team Status table with priority and progress',
      },
      {
        type: 'image',
        url: '/cad3.png',
        caption: 'Assignment detail with Drive and Revit file links',
      },
      {
        type: 'image',
        url: '/cad4.png',
        caption: 'Blocked items flagged in real time',
      },
      {
        type: 'image',
        url: '/cad5.png',
        caption: 'Team roster with availability and avatars',
      },
      {
        type: 'image',
        url: '/cad6.png',
        caption: 'Manager view — workload balance and queue health',
      },
    ],
  },
  {
    id: '1',
    slug: 'inventory-tracker',
    appName: 'StockSync',
    title: 'StockSync',
    subtitle: 'One live system for shop inventory, purchase orders, and order status — replacing Google Sheets and paper POs entirely.',
    description:
      'The Inventory Tracker is Tech Air\'s central system for managing shop inventory, purchase orders, and order status. It replaced a disconnected set of Google Sheets and a manual paper PO process with a single web application that any employee can use from a desktop or phone. Each person sees only the view they need, and every change — a quantity adjustment, a new PO, a received delivery — updates one shared database in real time.\n\nThe result is that the shop always knows what\'s on hand, the office always knows what\'s been ordered and what\'s arrived, and nobody is chasing information across spreadsheets or paper.',
    date: '2026-06-01',
    tag: 'New Application',
    department: 'Inventory',
    highlights: [
      'Purchase Order Management — structured two-panel form with vendor, PO number, job site, line items, and full status workflow from Ordered to Received',
      'One-Click PO Printing — formatted PDF matching Tech Air\'s Dynamics layout with vendor info auto-filled from the vendor profile',
      'Automatic Google Drive Filing — received orders generate a PDF and file it to Drive by vendor folder automatically',
      'Inventory by Location — every item tracked by quantity, minimum, unit of measure, vendor, and shop area with automatic low-stock flagging',
      'Backorder Tracking — per-item backorder flags and a dedicated tab showing everything outstanding across all orders',
      'Partial Receiving — shop checks off only what arrived and notifies purchasing without closing an incomplete order',
      'Packing Slip Photos — shop staff photograph the packing slip on their phone; image attaches automatically to the email sent to purchasing',
      'Role-Based Access — admin, office, and shop roles with an admin panel for adding users without IT involvement',
      'Email Notifications — automatic email to purchasing on every received or partial delivery with items, vendor, PO, and packing slip photo',
      'Built-in Work Flow Guide — step-by-step onboarding on the Manage screen covering orders, receiving, backorders, and vendors',
      'Full Audit Trail — every quantity change logged with timestamp and user',
      'Vendor Directory — contact names, addresses, payment terms, and pricing stored once and auto-filled everywhere',
    ],
    media: [
      {
        type: 'image',
        url: '/Stocksync1.png',
        caption: 'Inventory Tracker — main dashboard',
      },
      {
        type: 'image',
        url: '/Stocksync2.png',
        caption: 'Purchase order management panel',
      },
      {
        type: 'image',
        url: '/Stocksync3.png',
        caption: 'Shop floor mobile receiving view',
      },
      {
        type: 'image',
        url: '/Stocksync4.png',
        caption: 'Inventory by location with low-stock alerts',
      },
      {
        type: 'image',
        url: '/Stocksync5.png',
        caption: 'Vendor directory and PO print preview',
      },
    ],
  },
]

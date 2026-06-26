import { Feature } from '@/types'

// ─── HOW TO ADD A NEW FEATURE ────────────────────────────────────────────────
// 1. Drop images/videos into public/media/
// 2. Copy an entry below and update all fields
// 3. git push → Vercel auto-deploys in ~30 seconds
// ─────────────────────────────────────────────────────────────────────────────

export const features: Feature[] = [
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

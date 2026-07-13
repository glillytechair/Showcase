import { RoadmapItem } from '@/types'

// ─── ROADMAP — APPROVED WORK ─────────────────────────────────────────────────
// Committed items only, confirmed for pursuit — NOT raw brainstorms.
// Source of truth: Secondbrain/projects/ROADMAP.md (snapshot 2026-07-13).
// Buckets: now = in flight / next up · next = queued · later = approved, not scheduled
// To update: edit ROADMAP.md first, then mirror the change here and git push.
// ─────────────────────────────────────────────────────────────────────────────

export const roadmapItems: RoadmapItem[] = [
  // ─── NOW — in flight / next up ─────────────────────────────────────────────
  {
    id: 'rm-1',
    bucket: 'now',
    title: 'Vendor Price List auto-update from POs',
    area: 'StockSync',
    approved: '2026-07-08',
    target: 'TBD',
    what: 'When a PO saves with an item code, pull that PO line’s price into the Pricing column for the matching code — capturing the PO’s vendor so one-off outside buys don’t overwrite the normal vendor’s price.',
    why: 'Keeps the vendor price list current automatically instead of manual upkeep.',
    doneWhen:
      'Phase 1 (code cleanup so Purchasing GP code matches the ITEMS code) is signed off, then Phase 2 auto-update is live and verified against a real PO save. Phase 3 is a monthly rollup report for Ken (~1,151 items).',
  },
  {
    id: 'rm-2',
    bucket: 'now',
    title: 'Employee Portal + Customer Portal',
    area: 'Company Website',
    approved: '2026-07-13',
    target: '2026-12-31',
    what: 'Update netechair.com to add an Employee Portal (HR self-service / workplace hub) and a Customer Portal.',
    why: 'One company-domain home for employees and customers, replacing scattered links and manual back-and-forth.',
    doneWhen:
      'Both portals are live on netechair.com — Employee Portal covering the core modules from the prior plan, Customer Portal with an agreed v1 scope.',
    note: 'Open decision: portal.netechair.com subdomain vs. inside www. Customer Portal v1 scope still to be defined.',
  },

  // ─── NEXT — queued ─────────────────────────────────────────────────────────
  {
    id: 'rm-3',
    bucket: 'next',
    title: 'HR Hub (run from DailyPlan domain)',
    area: 'DailyPlan',
    approved: '2026-07-08',
    target: 'TBD',
    what: 'Build an HR Hub for HR, hosted under and run from the DailyPlan domain.',
    why: 'Gives HR a dedicated home inside the existing DailyPlan platform rather than a separate tool.',
    doneWhen:
      'HR has a working hub section on the DailyPlan domain covering the core HR workflows (scope to be confirmed).',
    note: 'Overlaps with the website Employee Portal — decide what lives where before building both.',
  },
  {
    id: 'rm-4',
    bucket: 'next',
    title: 'Drawboard finalization',
    area: 'QuoteGen',
    approved: '2026-07-08',
    target: 'TBD',
    what: 'Finalize the Drawboard digital counting / takeoff workflow for QuoteGen.',
    why: 'Completes the move from paper plan counting to digital counting — faster, auditable, scalable.',
    doneWhen: 'Drawboard-based counting workflow is finalized and usable by estimators end-to-end.',
  },
  {
    id: 'rm-5',
    bucket: 'next',
    title: 'StockSync POs ↔ DailyPlan job numbers',
    area: 'StockSync + DailyPlan',
    approved: '2026-07-08',
    target: 'TBD',
    what: 'Link StockSync purchase orders to DailyPlan job numbers so each PO is matched to its job, then surface PO status to the foreman inside DailyPlan.',
    why: 'Foremen see whether materials for their job are ordered or received without chasing purchasing — closes the loop between purchasing and the field.',
    doneWhen:
      'POs are joined to DailyPlan jobs on the shared job number, and a foreman viewing a job sees the status of that job’s POs (ordered / partial / received).',
    note: 'StockSync POs and DailyPlan jobs already share the same job number — a direct join, no crosswalk layer needed.',
  },
  {
    id: 'rm-6',
    bucket: 'next',
    title: 'CADash — blocker / status / %-complete conventions',
    area: 'CADash',
    approved: '2026-07-08',
    target: 'TBD',
    what: 'Define and document team conventions for CADash: what counts as a blocker, how % complete is set, what priority means, and how often drafters update status.',
    why: 'The fields only give real workload and capacity visibility if everyone uses them the same way — nail this before the whole roster is on it.',
    doneWhen:
      'A short convention guide is signed off, shared with the drafter roster, and drafters update on the agreed cadence.',
  },
  {
    id: 'rm-7',
    bucket: 'next',
    title: 'Constraint Register',
    area: 'DailyPlan',
    approved: '2026-07-08',
    target: 'TBD',
    what: 'Centralize every open constraint across jobs in one register — owners, due dates, and an Open / In Progress / Cleared workflow with job-scoped and cross-job views.',
    why: 'Constraints currently live scattered per-job with no owner or deadline pressure; one register makes blockers visible company-wide before they stall crews.',
    doneWhen:
      'Constraints move through Open → In Progress → Cleared, are viewable per-job and across all jobs, auto-escalate near their due date, and surface in the Dashboard Action Center.',
  },

  // ─── LATER — approved, not scheduled ───────────────────────────────────────
  {
    id: 'rm-8',
    bucket: 'later',
    title: 'Quote Map (revive dormant feature)',
    area: 'QuoteGen',
    approved: '2026-07-09',
    target: 'TBD',
    what: 'Revive and finish the dormant geographic map view of quotes — filters for company, date range, bid amount, and awarded status, with a live win-rate read and full search.',
    why: 'Turns existing quote data into a market and strategy view — geographic concentration, where we win, and white space to chase — with no extra data upkeep.',
    doneWhen:
      'Quote Map works end-to-end: pins load from live quotes, filters, search, and win-rate all function, and it’s good enough to showcase.',
  },
  {
    id: 'rm-9',
    bucket: 'later',
    title: 'Orders Platform — foreman ordering to shop inputers',
    area: 'Orders Platform (new)',
    approved: '2026-07-13',
    target: 'TBD',
    what: 'A digital orders platform where foremen enter job-specific part orders, replacing hand-written orders sent as emailed photos — returning clean, structured order info to shop inputers.',
    why: 'Kills the parse-handwriting step: inputers get ready-to-enter data instead of deciphering photos — fewer errors, faster order turnaround.',
    doneWhen:
      'Foremen place orders digitally end-to-end, inputers receive structured data they can enter straight into the shop system, and the parts database is live.',
    note: 'The shop system itself is not changing. Parts catalog seeded from example orders; inputers own ongoing maintenance.',
  },
  {
    id: 'rm-10',
    bucket: 'later',
    title: 'Airtable schedule — Purchasing column from StockSync POs',
    area: 'StockSync + Airtable',
    approved: '2026-07-13',
    target: 'TBD',
    what: 'Add a Purchasing column to the Airtable schedule that auto-links POs created in StockSync to the matching cut (lookup by job → cut) for anything purchased.',
    why: 'Purchasing status shows inline on the schedule without cross-checking StockSync.',
    doneWhen:
      'Purchasing column is live on the designated views only, POs auto-link by job → cut on PO creation, and multiple vendors/POs per cut link correctly.',
    note: 'Exact matching logic (job → cut) still to be confirmed before building. Shares PO-to-job groundwork with the StockSync ↔ DailyPlan link.',
  },
]

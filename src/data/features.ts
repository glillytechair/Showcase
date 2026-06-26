import { Feature } from '@/types'

// ─── HOW TO ADD A NEW FEATURE ────────────────────────────────────────────────
// 1. Drop images/videos into public/media/
// 2. Copy an entry below and update all fields
// 3. git push → Vercel auto-deploys in ~30 seconds
// ─────────────────────────────────────────────────────────────────────────────

export const features: Feature[] = [
  {
    id: '1',
    slug: 'inventory-tracker',
    title: 'Inventory Tracker',
    subtitle: 'One live system for shop inventory, purchase orders, and order status — replacing Google Sheets and paper POs entirely.',
    description:
      'The Inventory Tracker is Tech Air\'s central system for managing shop inventory, purchase orders, and order status. It replaced a disconnected set of Google Sheets and a manual paper PO process with a single web application that any employee can use from a desktop or phone. Each person sees only the view they need, and every change — a quantity adjustment, a new PO, a received delivery — updates one shared database in real time.\n\nThe result is that the shop always knows what\'s on hand, the office always knows what\'s been ordered and what\'s arrived, and nobody is chasing information across spreadsheets or paper.',
    date: '2026-06-01',
    tag: 'New Feature',
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

import { Feature } from '@/types'

// ─── HOW TO ADD A NEW FEATURE ────────────────────────────────────────────────
// 1. Upload your image/video to Supabase Storage → get the public URL
// 2. Copy one of the entries below and update all fields
// 3. Commit & push — Vercel will auto-deploy within ~30 seconds
// ─────────────────────────────────────────────────────────────────────────────

export const features: Feature[] = [
  {
    id: '1',
    slug: 'real-time-inventory-sync',
    title: 'Real-Time Inventory Sync',
    subtitle: 'Live updates across all locations — zero refresh required.',
    description:
      'Our inventory system now pushes live updates the moment a stock change occurs anywhere in the network. No more stale counts, no manual refreshes. Every terminal sees the same truth at the same time.',
    date: '2026-06-20',
    tag: 'New Feature',
    department: 'Inventory',
    highlights: [
      'Sub-second sync across all warehouse locations',
      'Conflict resolution built-in for simultaneous edits',
      'Offline-first with automatic reconciliation on reconnect',
      'Works across mobile, desktop, and kiosk terminals',
    ],
    media: [
      {
        type: 'image',
        // Replace this URL with your Supabase public URL
        url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80',
        caption: 'Live sync dashboard showing multi-location updates',
      },
    ],
  },
  {
    id: '2',
    slug: 'smart-reporting-dashboard',
    title: 'Smart Reporting Dashboard',
    subtitle: 'Every KPI you care about — one screen, zero noise.',
    description:
      'The new reporting dashboard adapts to your role. Managers see margin and velocity. Operations see stock health. Executives see the top-line. All from the same URL with no configuration needed.',
    date: '2026-06-10',
    tag: 'Enhancement',
    department: 'Reporting',
    highlights: [
      'Role-aware views auto-configure on login',
      'Export to PDF, CSV, or push to Slack in one click',
      'Drill-down from summary to transaction-level detail',
      '30-day, 90-day, and YTD comparison built-in',
    ],
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
        caption: 'Executive overview with drill-down capability',
      },
    ],
  },
  {
    id: '3',
    slug: 'mobile-barcode-scanner',
    title: 'Mobile Barcode Scanner',
    subtitle: 'Your phone is now a warehouse tool.',
    description:
      'Native camera integration turns any iOS or Android device into a full barcode scanner. Scan items to pull inventory, log receiving, or trigger a transfer — no additional hardware required.',
    date: '2026-05-28',
    tag: 'New Feature',
    department: 'Mobile',
    highlights: [
      'Works with standard camera — no Bluetooth scanner needed',
      'Supports UPC, QR, Code 128, and DataMatrix formats',
      'Haptic feedback confirms successful scans',
      'Batch scan mode for receiving 50+ items at once',
    ],
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80',
        caption: 'Mobile scanner in action on warehouse floor',
      },
    ],
  },
]

export type MediaType = 'image' | 'video'

export interface MediaItem {
  type: MediaType
  url: string
  caption?: string
  thumbnail?: string // for videos, optional poster frame
}

export interface Feature {
  id: string
  slug: string
  appName: string        // e.g. "StockSync" or "Reporting Suite"
  featureName?: string   // omit when the whole entry IS the app (New Application)
  title: string          // display title — appName + featureName combined if needed
  subtitle: string
  description: string
  date: string           // ISO string e.g. "2026-06-20"
  tag: 'New Application' | 'New Feature' | 'Enhancement' | 'Fix' | 'Integration' | 'Performance'
  media: MediaItem[]
  highlights?: string[]
  department?: string
}

export type UpcomingTag = 'New App' | 'New Feature' | 'Feature Update'

export interface UpcomingIdea {
  id: string
  slug: string
  appName: string
  title: string
  subtitle: string
  description: string
  date: string
  tag: UpcomingTag
  complexity?: string
  highlights?: string[]
  prompt: string
}

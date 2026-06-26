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
  title: string
  subtitle: string
  description: string
  date: string // ISO string e.g. "2026-06-20"
  tag: 'New Feature' | 'Enhancement' | 'Fix' | 'Integration' | 'Performance'
  media: MediaItem[]
  highlights?: string[] // bullet points shown on the feature page
  department?: string   // e.g. "Inventory", "Reporting", "Mobile"
}

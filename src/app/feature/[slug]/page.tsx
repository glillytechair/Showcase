import { features } from '@/data/features'
import { notFound } from 'next/navigation'
import FeatureShowcase from './FeatureShowcase'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const feature = features.find((f) => f.slug === slug)
  if (!feature) return {}
  return {
    title: `${feature.title} — Tech Updates`,
    description: feature.subtitle,
    openGraph: {
      title: feature.title,
      description: feature.subtitle,
      images: feature.media.find((m) => m.type === 'image')?.url
        ? [{ url: feature.media.find((m) => m.type === 'image')!.url }]
        : [],
    },
  }
}

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params
  const feature = features.find((f) => f.slug === slug)
  if (!feature) notFound()

  const currentIndex = features.findIndex((f) => f.slug === slug)
  const prev = features[currentIndex - 1] ?? null
  const next = features[currentIndex + 1] ?? null

  return <FeatureShowcase feature={feature} prev={prev} next={next} />
}

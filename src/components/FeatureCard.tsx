'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Feature } from '@/types'
import { ArrowRight, Play } from 'lucide-react'

interface Props {
  feature: Feature
  index: number
}

const tagClass: Record<string, string> = {
  'New Application': 'tag-New\\ Application',
  'New Feature':     'tag-New\\ Feature',
  Enhancement:       'tag-Enhancement',
  Fix:               'tag-Fix',
  Integration:       'tag-Integration',
  Performance:       'tag-Performance',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function FeatureCard({ feature, index }: Props) {
  const hasVideo = feature.media.some((m) => m.type === 'video')
  const firstMedia = feature.media[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link href={`/feature/${feature.slug}`} className="block group h-full">
        <article className="glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col">
          {/* Media preview */}
          <div className="relative aspect-video overflow-hidden bg-[rgba(255,255,255,0.02)]">
            {firstMedia?.type === 'video' ? (
              <video
                src={firstMedia.url}
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            ) : firstMedia?.url ? (
              <img
                src={firstMedia.url}
                alt={firstMedia.caption || feature.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[rgba(255,255,255,0.15)] text-sm">No preview</span>
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070810] via-transparent to-transparent opacity-60" />

            {/* Video badge */}
            {hasVideo && (
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Play size={10} fill="white" className="text-white" />
                <span className="text-[10px] font-semibold text-white/90 uppercase tracking-widest">Video</span>
              </div>
            )}

            {/* Media count */}
            {feature.media.length > 1 && (
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1">
                <span className="text-[10px] font-semibold text-white/70">{feature.media.length} media</span>
              </div>
            )}

            {/* Arrow reveal on hover */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center shadow-lg">
                <ArrowRight size={14} className="text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col gap-3 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span className={`tag-pill ${tagClass[feature.tag] || ''}`}>{feature.tag}</span>
              {feature.department && (
                <span className="text-[10px] text-[var(--text-secondary)] font-medium">{feature.department}</span>
              )}
            </div>

            <div>
              <h2 className="text-base font-semibold text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent)] transition-colors duration-200">
                {feature.appName}
              </h2>
              {feature.featureName && (
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">{feature.featureName}</p>
              )}
              <p className="mt-1.5 text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                {feature.subtitle}
              </p>
            </div>

            <div className="mt-auto pt-2 border-t border-[var(--border)] flex items-center justify-between">
              <time className="text-[11px] text-[var(--text-secondary)]">{formatDate(feature.date)}</time>
              <span className="text-[11px] text-[var(--accent)] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                View details <ArrowRight size={10} />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Feature } from '@/types'
import { ArrowRight, Sparkles } from 'lucide-react'

interface Props {
  feature: Feature
  index: number
}

const tagClass: Record<string, string> = {
  'New Application': 'tag-NewApplication',
  'New Feature':     'tag-NewFeature',
  Enhancement:       'tag-Enhancement',
  Fix:               'tag-Fix',
  Integration:       'tag-Integration',
  Performance:       'tag-Performance',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  })
}

export default function FeatureRow({ feature, index }: Props) {
  const firstImage = feature.media.find((m) => m.type === 'image')
  const isNewApp = feature.tag === 'New Application'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/feature/${feature.slug}`} className="block group">
        <div className={`glass glass-hover card-shimmer rounded-xl px-5 py-4 flex items-center gap-5 relative ${isNewApp ? 'new-app-row' : ''}`}>
          <div className="shimmer-sweep" />
          {/* Thumbnail */}
          {firstImage && (
            <div className="flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[var(--border)]">
              <img
                src={firstImage.url}
                alt=""
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          )}

          {/* App / Feature labels */}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 min-w-0">
              <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200 truncate">
                {feature.appName}
              </span>
              {feature.featureName && (
                <>
                  <span className="text-[var(--text-secondary)] text-xs flex-shrink-0">·</span>
                  <span className="text-xs text-[var(--text-secondary)] truncate">{feature.featureName}</span>
                </>
              )}
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5 truncate">{feature.subtitle}</p>
          </div>

          {/* Tag */}
          <span className={`tag-pill flex-shrink-0 hidden sm:inline-flex items-center gap-1 ${tagClass[feature.tag] || ''}`}>
            {isNewApp && <Sparkles size={10} className="animate-pulse-glow" />}
            {feature.tag}
          </span>

          {/* Date */}
          <time className="text-[11px] text-[var(--text-secondary)] flex-shrink-0 hidden md:block tabular-nums">
            {formatDate(feature.date)}
          </time>

          {/* Arrow */}
          <ArrowRight
            size={14}
            className="flex-shrink-0 text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200"
          />

          {/* Bottom glow line on hover */}
          <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-400" />
        </div>
      </Link>
    </motion.div>
  )
}

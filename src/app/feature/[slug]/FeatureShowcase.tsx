'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Feature } from '@/types'
import MediaViewer from '@/components/MediaViewer'
import AnimatedSection from '@/components/AnimatedSection'
import GridBackground from '@/components/GridBackground'
import { ArrowLeft, ArrowRight, Calendar, Layers } from 'lucide-react'

interface Props {
  feature: Feature
  prev: Feature | null
  next: Feature | null
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

const tagColors: Record<string, string> = {
  'New Application': 'rgba(0,210,140,0.15)',
  'New Feature':     'rgba(79,142,247,0.15)',
  Enhancement:       'rgba(132,90,223,0.15)',
  Fix:               'rgba(52,199,89,0.15)',
  Integration:       'rgba(255,159,10,0.15)',
  Performance:       'rgba(0,199,190,0.15)',
}

const tagTextColors: Record<string, string> = {
  'New Application': '#4dffc3',
  'New Feature':     '#7eb8ff',
  Enhancement:       '#c4a0f7',
  Fix:               '#6ee09e',
  Integration:       '#ffcf6b',
  Performance:       '#5ef5ee',
}

export default function FeatureShowcase({ feature, prev, next }: Props) {
  return (
    <div className="relative min-h-screen">
      <GridBackground />

      {/* Hero accent glow behind media */}
      <div
        className="fixed inset-x-0 top-0 h-[60vh] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${tagColors[feature.tag] ?? 'rgba(79,142,247,0.08)'} 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-24">
        {/* Back nav + system identifier */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="pt-8 mb-10 flex items-center justify-between"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
            All updates
          </Link>
          <div className="terminal text-[10px] text-[var(--text-secondary)] tracking-widest hidden sm:block">
            NETA<span className="text-[var(--accent)]">::</span>TECH<span className="text-[var(--accent)]">/</span>SHOWCASE
          </div>
        </motion.div>

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          {/* Tag + meta row — HUD style */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
            <span
              className="tag-pill"
              style={{
                background: tagColors[feature.tag],
                color: tagTextColors[feature.tag],
                border: `1px solid ${tagTextColors[feature.tag]}40`,
              }}
            >
              {feature.tag}
            </span>

            <span className="text-[var(--border)] terminal text-[11px]">//</span>

            {feature.department && (
              <span className="flex items-center gap-1.5 terminal text-[11px] text-[var(--text-secondary)]">
                <Layers size={10} style={{ color: tagTextColors[feature.tag] }} />
                <span style={{ color: tagTextColors[feature.tag] }} className="opacity-70">{feature.department.toUpperCase()}</span>
              </span>
            )}

            <span className="flex items-center gap-1.5 terminal text-[11px] text-[var(--text-secondary)]">
              <Calendar size={10} />
              {formatDate(feature.date)}
            </span>

            <div className="ml-auto flex items-center gap-2">
              <div className="online-dot" />
              <span className="terminal text-[10px] tracking-widest uppercase" style={{ color: '#4dffc3' }}>Deployed</span>
            </div>
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4 text-glow"
            style={{ letterSpacing: '-0.03em' }}
          >
            {feature.title}
          </h1>

          <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            {feature.subtitle}
          </p>
        </motion.div>

        {/* Media */}
        <AnimatedSection delay={0.1} className="mb-10">
          <MediaViewer media={feature.media} />
        </AnimatedSection>

        {/* Divider */}
        <AnimatedSection delay={0.2}>
          <div className="line-accent mb-10" />
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection delay={0.25} className="mb-10">
          <p className="text-base text-[var(--text-secondary)] leading-loose max-w-2xl">
            {feature.description}
          </p>
        </AnimatedSection>

        {/* Highlights */}
        {feature.highlights && feature.highlights.length > 0 && (
          <AnimatedSection delay={0.3} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="terminal text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                What&apos;s included
              </h2>
              <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${tagTextColors[feature.tag] ?? '#7eb8ff'}30, transparent)` }} />
            </div>
            <ul className="space-y-2.5">
              {feature.highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="card-shimmer flex items-start gap-3 glass rounded-xl px-4 py-3 relative overflow-hidden"
                >
                  <div className="shimmer-sweep" />
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${tagColors[feature.tag] ?? 'rgba(79,142,247,0.15)'}`,
                      border: `1px solid ${tagTextColors[feature.tag] ?? '#7eb8ff'}35`,
                    }}
                  >
                    <span
                      className="terminal text-[10px] font-bold"
                      style={{ color: tagTextColors[feature.tag] ?? '#7eb8ff' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm text-[var(--text-primary)] leading-relaxed pt-0.5">{item}</span>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>
        )}

        {/* Prev / Next navigation */}
        {(prev || next) && (
          <AnimatedSection delay={0.4}>
            <div className="line-accent mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prev ? (
                <Link href={`/feature/${prev.slug}`} className="group glass glass-hover rounded-xl p-4 flex items-center gap-3">
                  <ArrowLeft size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors group-hover:-translate-x-1 transition-transform duration-200" />
                  <div className="min-w-0">
                    <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mb-0.5">Previous</div>
                    <div className="text-sm font-medium text-[var(--text-primary)] truncate">{prev.title}</div>
                  </div>
                </Link>
              ) : <div />}

              {next ? (
                <Link href={`/feature/${next.slug}`} className="group glass glass-hover rounded-xl p-4 flex items-center justify-end gap-3 text-right">
                  <div className="min-w-0">
                    <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mb-0.5">Next</div>
                    <div className="text-sm font-medium text-[var(--text-primary)] truncate">{next.title}</div>
                  </div>
                  <ArrowRight size={16} className="flex-shrink-0 text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              ) : <div />}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                ← Back to all updates
              </Link>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}

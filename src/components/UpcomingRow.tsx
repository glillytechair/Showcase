'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UpcomingIdea } from '@/types'
import ComplexityMeter from '@/components/ComplexityMeter'
import { Lightbulb, ChevronDown, Copy, Check, Terminal, Calendar } from 'lucide-react'

interface Props {
  idea: UpcomingIdea
  index: number
}

const tagClass: Record<string, string> = {
  'New App': 'tag-NewApp',
  'New Feature': 'tag-NewFeature',
  'Feature Update': 'tag-FeatureUpdate',
}

export default function UpcomingRow({ idea, index }: Props) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(idea.prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for browsers that block clipboard
      const textarea = document.createElement('textarea')
      textarea.value = idea.prompt
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const dateLabel = new Date(idea.date + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  const visibleHighlights = expanded ? idea.highlights ?? [] : (idea.highlights ?? []).slice(0, 4)
  const hiddenCount = (idea.highlights?.length ?? 0) - visibleHighlights.length

  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.18 } }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
        layout: { type: 'spring', stiffness: 350, damping: 34 },
      }}
    >
      <div
        onClick={() => setExpanded((e) => !e)}
        role="button"
        aria-expanded={expanded}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setExpanded((x) => !x)
          }
        }}
        className="glass glass-hover card-shimmer rounded-xl px-4 py-4 sm:px-5 relative group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[rgba(79,142,247,0.5)]"
      >
        <div className="shimmer-sweep" />

        <div className="flex items-start gap-3 sm:gap-4">
          {/* Idea icon */}
          <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[rgba(79,142,247,0.12)] border border-[rgba(79,142,247,0.2)] flex items-center justify-center mt-0.5">
            <Lightbulb size={16} className="sm:hidden text-[var(--accent)]" />
            <Lightbulb size={18} className="hidden sm:block text-[var(--accent)]" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                {idea.appName}
              </span>
              <span className="text-[var(--text-secondary)] text-xs">·</span>
              <span className={`tag-pill inline-flex items-center gap-1 ${tagClass[idea.tag] || ''}`}>
                {idea.tag}
              </span>
              <span className="text-[var(--text-secondary)] text-xs">·</span>
              <span className="inline-flex items-center text-[10px] font-medium text-[#4dffc3] bg-[rgba(0,210,140,0.08)] border border-[rgba(0,210,140,0.25)] rounded-full px-2 py-0.5 leading-tight">
                {idea.category}
              </span>
              {idea.complexity && (
                <>
                  <span className="text-[var(--text-secondary)] text-xs">·</span>
                  <ComplexityMeter complexity={idea.complexity} />
                </>
              )}
            </div>

            <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent)] transition-colors duration-200 pr-4 sm:pr-0">
              {idea.title}
            </h3>

            <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
              {idea.subtitle}
            </p>

            {visibleHighlights.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {visibleHighlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-[10px] text-[var(--text-secondary)] bg-[rgba(255,255,255,0.04)] border border-[var(--border)] rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 leading-tight"
                  >
                    {highlight}
                  </li>
                ))}
                {hiddenCount > 0 && (
                  <li className="text-[10px] text-[var(--accent)] px-2 py-1">
                    +{hiddenCount} more
                  </li>
                )}
              </ul>
            )}

            {/* Expanded detail */}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-[var(--text-secondary)] mt-4 leading-relaxed">
                    {idea.description}
                  </p>

                  <div className="mt-4 rounded-lg bg-[rgba(0,0,0,0.35)] border border-[rgba(79,142,247,0.18)] px-3.5 py-3">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Terminal size={11} className="text-[var(--accent)]" />
                      <span className="text-[10px] font-semibold text-[var(--accent)] uppercase tracking-widest">
                        AI Build Prompt
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed font-mono">
                      {idea.prompt}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer: date + copy action */}
            <div className="mt-3 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[10px] text-[var(--text-secondary)]">
                <Calendar size={10} />
                {dateLabel}
              </span>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1.5 text-[11px] font-medium rounded-md px-2.5 py-1.5 transition-all duration-200 ${
                  copied
                    ? 'bg-[rgba(0,210,140,0.15)] text-[#4dffc3] border border-[rgba(0,210,140,0.35)]'
                    : 'bg-[rgba(79,142,247,0.1)] text-[var(--accent)] border border-[rgba(79,142,247,0.25)] hover:bg-[rgba(79,142,247,0.18)] hover:border-[rgba(79,142,247,0.4)]'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={12} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    Copy Prompt
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ID readout + expand chevron */}
          <div className="flex-shrink-0 flex flex-col items-end gap-2 mt-1">
            <ChevronDown
              size={15}
              className={`text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-all duration-200 ${
                expanded ? 'rotate-180' : ''
              }`}
            />
            <span className="terminal text-[8px] tracking-[0.2em] text-[var(--text-secondary)] opacity-50 hidden sm:block">
              {idea.id.toUpperCase().replace('-', '·')}
            </span>
          </div>
        </div>

        {/* Bottom glow line on hover */}
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-400" />
      </div>
    </motion.div>
  )
}

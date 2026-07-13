'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RoadmapItem } from '@/types'
import { Map, ChevronDown, Calendar, Target, CheckCircle2, AlertTriangle } from 'lucide-react'

interface Props {
  item: RoadmapItem
  index: number
}

export default function RoadmapRow({ item, index }: Props) {
  const [expanded, setExpanded] = useState(false)

  const approvedLabel = new Date(item.approved + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  const targetLabel =
    item.target === 'TBD'
      ? 'TBD'
      : new Date(item.target + 'T00:00:00').toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })

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
          {/* Roadmap icon */}
          <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[rgba(0,210,140,0.1)] border border-[rgba(0,210,140,0.22)] flex items-center justify-center mt-0.5">
            <Map size={16} className="sm:hidden text-[#4dffc3]" />
            <Map size={18} className="hidden sm:block text-[#4dffc3]" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                {item.area}
              </span>
              <span className="text-[var(--text-secondary)] text-xs">·</span>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-[var(--text-secondary)]">
                <Calendar size={10} />
                Approved {approvedLabel}
              </span>
              <span className="text-[var(--text-secondary)] text-xs">·</span>
              <span
                className={`inline-flex items-center gap-1.5 text-[10px] font-medium rounded-full px-2 py-0.5 leading-tight border ${
                  item.target === 'TBD'
                    ? 'text-[var(--text-secondary)] bg-[rgba(255,255,255,0.04)] border-[var(--border)]'
                    : 'text-[#ffcf6b] bg-[rgba(245,158,11,0.08)] border-[rgba(245,158,11,0.3)]'
                }`}
              >
                <Target size={10} />
                Target {targetLabel}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent)] transition-colors duration-200 pr-4 sm:pr-0">
              {item.title}
            </h3>

            <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
              {item.what}
            </p>

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
                  <div className="mt-4 flex flex-col gap-3">
                    <div>
                      <span className="terminal text-[9px] font-semibold text-[var(--accent)] uppercase tracking-[0.25em]">
                        Why
                      </span>
                      <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                        {item.why}
                      </p>
                    </div>

                    <div className="rounded-lg bg-[rgba(0,0,0,0.35)] border border-[rgba(0,210,140,0.18)] px-3.5 py-3">
                      <div className="flex items-center gap-1.5 mb-2">
                        <CheckCircle2 size={11} className="text-[#4dffc3]" />
                        <span className="text-[10px] font-semibold text-[#4dffc3] uppercase tracking-widest">
                          Done when
                        </span>
                      </div>
                      <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                        {item.doneWhen}
                      </p>
                    </div>

                    {item.note && (
                      <div className="flex items-start gap-2 rounded-lg bg-[rgba(245,158,11,0.06)] border border-[rgba(245,158,11,0.2)] px-3.5 py-2.5">
                        <AlertTriangle size={11} className="text-[#ffcf6b] mt-0.5 flex-shrink-0" />
                        <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                          {item.note}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
              {item.id.toUpperCase().replace('-', '·')}
            </span>
          </div>
        </div>

        {/* Bottom glow line on hover */}
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#4dffc3] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-400" />
      </div>
    </motion.div>
  )
}

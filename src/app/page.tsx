'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { features } from '@/data/features'
import FeatureCard from '@/components/FeatureCard'
import FeatureRow from '@/components/FeatureRow'
import GridBackground from '@/components/GridBackground'
import { Zap, LayoutGrid, List, ArrowUpDown } from 'lucide-react'

type SortOrder = 'newest' | 'oldest'
type ViewMode  = 'grid' | 'list'

export default function HomePage() {
  const [sort, setSort]     = useState<SortOrder>('newest')
  const [view, setView]     = useState<ViewMode>('grid')

  const sorted = [...features].sort((a, b) => {
    const delta = new Date(b.date).getTime() - new Date(a.date).getTime()
    return sort === 'newest' ? delta : -delta
  })

  return (
    <div className="relative min-h-screen">
      <GridBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        {/* Header */}
        <header className="pt-20 pb-14 text-center">
          <div className="inline-block glass rounded-2xl px-8 py-10 md:px-12 md:py-12 border border-[rgba(79,142,247,0.12)] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(79,142,247,0.3)] bg-[rgba(79,142,247,0.08)] mb-6"
            >
              <Zap size={12} className="text-[var(--accent)] animate-pulse-glow" />
              <span className="text-[11px] font-semibold text-[var(--accent)] uppercase tracking-widest">
                Tech Department
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-glow"
              style={{ letterSpacing: '-0.03em' }}
            >
              What we&apos;ve built
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-base md:text-lg text-[var(--text-secondary)] md:whitespace-nowrap text-balance"
            >
              The latest features, enhancements, and improvements from our engineering team.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="line-accent w-32 mx-auto mt-8"
            />
          </div>
        </header>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center justify-between mb-8"
        >
          {/* Sort */}
          <button
            onClick={() => setSort(s => s === 'newest' ? 'oldest' : 'newest')}
            className="flex items-center gap-2 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors glass rounded-lg px-3 py-2"
          >
            <ArrowUpDown size={13} />
            {sort === 'newest' ? 'Newest first' : 'Oldest first'}
          </button>

          {/* View toggle */}
          <div className="flex items-center gap-1 glass rounded-lg p-1">
            <button
              onClick={() => setView('grid')}
              className={`p-1.5 rounded-md transition-colors duration-150 ${
                view === 'grid'
                  ? 'bg-[var(--accent)] text-white'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <LayoutGrid size={14} />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-1.5 rounded-md transition-colors duration-150 ${
                view === 'list'
                  ? 'bg-[var(--accent)] text-white'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <List size={14} />
            </button>
          </div>
        </motion.div>

        {/* Feature list */}
        <AnimatePresence mode="wait">
          {view === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {sorted.map((feature, i) => (
                <FeatureCard key={feature.id} feature={feature} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3"
            >
              {sorted.map((feature, i) => (
                <FeatureRow key={feature.id} feature={feature} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center text-[11px] text-[var(--text-secondary)]"
        >
          Built by the Tech Department · Updates are live on deploy
        </motion.footer>
      </div>
    </div>
  )
}

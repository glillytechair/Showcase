'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { features } from '@/data/features'
import { upcomingIdeas } from '@/data/upcoming'
import FeatureCard from '@/components/FeatureCard'
import FeatureRow from '@/components/FeatureRow'
import UpcomingRow from '@/components/UpcomingRow'
import GridBackground from '@/components/GridBackground'
import { Zap, LayoutGrid, List, ArrowUpDown } from 'lucide-react'

type SortOrder = 'newest' | 'oldest'
type ViewMode  = 'grid' | 'list'
type Tab       = 'released' | 'upcoming'

export default function HomePage() {
  const [sort, setSort]     = useState<SortOrder>('newest')
  const [view, setView]     = useState<ViewMode>('list')
  const [tab, setTab]       = useState<Tab>('released')

  const sorted = [...features].sort((a, b) => {
    const delta = new Date(b.date).getTime() - new Date(a.date).getTime()
    return sort === 'newest' ? delta : -delta
  })

  const isReleased = tab === 'released'

  return (
    <div className="relative min-h-screen">
      <GridBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        {/* Header */}
        <header className="pt-20 pb-14 text-center">
          <div className="relative inline-block glass rounded-3xl px-10 py-12 md:px-16 md:py-16 border border-[rgba(79,142,247,0.15)] shadow-[0_24px_100px_rgba(0,0,0,0.5),0_0_0_1px_rgba(79,142,247,0.08),0_0_120px_rgba(79,142,247,0.08)]">

            {/* HUD corner brackets */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[rgba(79,142,247,0.5)]" />
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[rgba(79,142,247,0.5)]" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[rgba(79,142,247,0.5)]" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[rgba(79,142,247,0.5)]" />

            {/* Breathing glow inside card */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
              aria-hidden="true"
            >
              <motion.div
                className="absolute inset-x-0 top-0 h-3/4"
                style={{ background: 'radial-gradient(ellipse 75% 60% at 50% -10%, rgba(79,142,247,0.16) 0%, transparent 65%)' }}
                animate={{ opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[rgba(79,142,247,0.4)] bg-[rgba(79,142,247,0.1)] mb-7"
              style={{ boxShadow: '0 0 28px rgba(79,142,247,0.22), inset 0 0 14px rgba(79,142,247,0.06)' }}
            >
              <Zap size={13} className="text-[var(--accent)] animate-pulse-glow" />
              <span className="text-[11px] font-semibold text-[var(--accent)] uppercase tracking-widest">
                Tech Department
              </span>
            </motion.div>

            {/* Title — shifting gradient */}
            <motion.h1
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title block text-5xl md:text-7xl font-bold leading-none"
              style={{ letterSpacing: '-0.04em' }}
            >
              {isReleased ? "What we've built" : "What's coming"}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              key={`${tab}-subtitle`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-base md:text-lg text-[var(--text-secondary)] md:whitespace-nowrap"
            >
              {isReleased
                ? 'The latest features, enhancements, and improvements from our engineering team.'
                : 'Ideas on the roadmap for DailyPlan and QuoteGen — new features and upgrades in progress.'}
            </motion.p>

            {/* Decorated divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex items-center justify-center gap-4 mt-9"
            >
              <div className="line-accent w-32" />
            </motion.div>
          </div>
        </header>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
        >
          <div className="flex items-center gap-2">
            {/* Tab switcher */}
            <div className="flex items-center gap-1 glass rounded-lg p-1">
              <button
                onClick={() => setTab('released')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150 ${
                  tab === 'released'
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Released
              </button>
              <button
                onClick={() => setTab('upcoming')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150 ${
                  tab === 'upcoming'
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Upcoming
              </button>
            </div>

            {/* Released-only sort */}
            {isReleased && (
              <button
                onClick={() => setSort(s => s === 'newest' ? 'oldest' : 'newest')}
                className="flex items-center gap-2 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors glass rounded-lg px-3 py-2"
              >
                <ArrowUpDown size={13} />
                {sort === 'newest' ? 'Newest first' : 'Oldest first'}
              </button>
            )}
          </div>

          {/* Released-only view toggle */}
          {isReleased && (
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
          )}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {isReleased ? (
            view === 'grid' ? (
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
            )
          ) : (
            <motion.div
              key="upcoming"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3"
            >
              {upcomingIdeas.map((idea, i) => (
                <UpcomingRow key={idea.id} idea={idea} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}

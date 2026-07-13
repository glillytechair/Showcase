'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import { motion, AnimatePresence, animate } from 'framer-motion'
import { features } from '@/data/features'
import { upcomingIdeas } from '@/data/upcoming'
import { roadmapItems } from '@/data/roadmap'
import { UpcomingIdea, UpcomingCategory, UpcomingComplexity, upcomingCategories, RoadmapBucket } from '@/types'
import FeatureCard from '@/components/FeatureCard'
import FeatureRow from '@/components/FeatureRow'
import UpcomingRow from '@/components/UpcomingRow'
import RoadmapRow from '@/components/RoadmapRow'
import GridBackground from '@/components/GridBackground'
import StatusBar from '@/components/StatusBar'
import DecodeText from '@/components/DecodeText'
import { Zap, LayoutGrid, List, ArrowUpDown, SlidersHorizontal, Search, X, Layers, ChevronUp } from 'lucide-react'

type SortOrder = 'newest' | 'oldest'
type ViewMode  = 'grid' | 'list'
type Tab       = 'released' | 'upcoming' | 'roadmap'

const roadmapBuckets: { key: RoadmapBucket; label: string; blurb: string }[] = [
  { key: 'now', label: 'Now', blurb: 'IN FLIGHT' },
  { key: 'next', label: 'Next', blurb: 'QUEUED' },
  { key: 'later', label: 'Later', blurb: 'APPROVED · NOT SCHEDULED' },
]

type UpcomingAppFilter        = 'all' | 'DailyPlan' | 'QuoteGen'
type UpcomingTagFilter        = 'all' | 'New Feature' | 'Feature Update' | 'New App'
type UpcomingCategoryFilter   = 'all' | UpcomingCategory
type UpcomingComplexityFilter = 'all' | UpcomingComplexity
type UpcomingSort = 'default' | 'newest' | 'alpha' | 'complexity-desc' | 'complexity-asc'

function complexityScore(idea: UpcomingIdea): number {
  switch (idea.complexity) {
    case 'High': return 3
    case 'Medium-High': return 2.5
    case 'Medium': return 2
    case 'Low-Medium': return 1.5
    case 'Low': return 1
    default: return 0
  }
}

const complexityLevels: UpcomingComplexity[] = ['Low', 'Low-Medium', 'Medium', 'Medium-High', 'High']

const complexityPill: Record<UpcomingComplexity, string> = {
  'Low':         'bg-[rgba(0,210,140,0.7)]',
  'Low-Medium':  'bg-[rgba(0,199,190,0.7)]',
  'Medium':      'bg-[rgba(79,142,247,0.75)]',
  'Medium-High': 'bg-[rgba(132,90,223,0.75)]',
  'High':        'bg-[rgba(255,99,132,0.75)]',
}

const tickerTagColors: Record<string, string> = {
  'New Application': '#4dffc3',
  'New Feature':     '#7eb8ff',
  Enhancement:       '#c4a0f7',
  Fix:               '#6ee09e',
  Integration:       '#ffcf6b',
  Performance:       '#5ef5ee',
}

/** Animated count-up number. */
function StatCounter({ value, delay = 0 }: { value: number; delay?: number }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.5,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => controls.stop()
  }, [value, delay])

  return <span className="tabular-nums">{n}</span>
}

/** Number that rolls vertically when its value changes. */
function RollingCount({ value, className = '' }: { value: number; className?: string }) {
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block tabular-nums"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

/** Filter chip with a spring-sliding active pill and press feedback. */
function FilterChip({
  active,
  onClick,
  layoutId,
  pillClass = 'bg-[var(--accent)]',
  children,
}: {
  active: boolean
  onClick: () => void
  layoutId: string
  pillClass?: string
  children: React.ReactNode
}) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.92 }}
      className={`relative px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors duration-150 ${
        active ? 'text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
      }`}
    >
      {active && (
        <motion.span
          layoutId={layoutId}
          className={`absolute inset-0 rounded-md ${pillClass}`}
          transition={{ type: 'spring', stiffness: 520, damping: 38 }}
          style={{ boxShadow: '0 0 18px rgba(79,142,247,0.25)' }}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-1.5">{children}</span>
    </motion.button>
  )
}

const panelVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

const panelItem = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function HomePage() {
  const [sort, setSort]     = useState<SortOrder>('newest')
  const [view, setView]     = useState<ViewMode>('list')
  const [tab, setTab]       = useState<Tab>('released')

  const [appFilter, setAppFilter]               = useState<UpcomingAppFilter>('all')
  const [tagFilter, setTagFilter]               = useState<UpcomingTagFilter>('all')
  const [categoryFilter, setCategoryFilter]     = useState<UpcomingCategoryFilter>('all')
  const [complexityFilter, setComplexityFilter] = useState<UpcomingComplexityFilter>('all')
  const [query, setQuery]                       = useState('')
  const [upcomingSort, setUpcomingSort]         = useState<UpcomingSort>('default')
  const [groupByApp, setGroupByApp]             = useState(true)
  const [showTop, setShowTop]                   = useState(false)

  const searchRef = useRef<HTMLInputElement>(null)

  // "/" focuses search, Escape blurs it
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement
      const typing = el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement
      if (e.key === '/' && !typing) {
        e.preventDefault()
        searchRef.current?.focus()
      }
      if (e.key === 'Escape' && el === searchRef.current) {
        searchRef.current?.blur()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Back-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const sorted = [...features].sort((a, b) => {
    const delta = new Date(b.date).getTime() - new Date(a.date).getTime()
    return sort === 'newest' ? delta : -delta
  })

  const appCount = useMemo(() => new Set(features.map((f) => f.appName)).size, [])

  const tickerItems = useMemo(
    () =>
      [...features]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((f) => ({
          app: f.appName,
          featureName: f.featureName,
          tag: f.tag,
          date: new Date(f.date + 'T00:00:00')
            .toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
            .toUpperCase(),
        })),
    [],
  )

  // ── Upcoming filtering ──────────────────────────────────────────────────────
  const q = query.trim().toLowerCase()

  const matchesSearch = (idea: UpcomingIdea) => {
    if (!q) return true
    const haystack = [
      idea.title,
      idea.subtitle,
      idea.description,
      idea.appName,
      idea.category,
      ...(idea.highlights ?? []),
    ]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  }

  const matchesFilters = (
    idea: UpcomingIdea,
    ignore: { app?: boolean; tag?: boolean; category?: boolean; complexity?: boolean } = {},
  ) => {
    if (!ignore.app && appFilter !== 'all' && idea.appName !== appFilter) return false
    if (!ignore.tag && tagFilter !== 'all' && idea.tag !== tagFilter) return false
    if (!ignore.category && categoryFilter !== 'all' && idea.category !== categoryFilter) return false
    if (!ignore.complexity && complexityFilter !== 'all' && idea.complexity !== complexityFilter) return false
    return matchesSearch(idea)
  }

  const filteredUpcoming = useMemo(() => {
    const list = upcomingIdeas.filter((idea) => matchesFilters(idea))

    return [...list].sort((a, b) => {
      if (upcomingSort === 'alpha') return a.title.localeCompare(b.title)
      if (upcomingSort === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime()
      if (upcomingSort === 'complexity-desc') return complexityScore(b) - complexityScore(a)
      if (upcomingSort === 'complexity-asc') return complexityScore(a) - complexityScore(b)
      return 0
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appFilter, tagFilter, categoryFilter, complexityFilter, q, upcomingSort])

  const countByApp = (app: UpcomingAppFilter) =>
    upcomingIdeas.filter((i) => (app === 'all' || i.appName === app) && matchesFilters(i, { app: true })).length
  const countByTag = (tag: UpcomingTagFilter) =>
    upcomingIdeas.filter((i) => (tag === 'all' || i.tag === tag) && matchesFilters(i, { tag: true })).length
  const countByCategory = (cat: UpcomingCategoryFilter) =>
    upcomingIdeas.filter((i) => (cat === 'all' || i.category === cat) && matchesFilters(i, { category: true })).length
  const countByComplexity = (cx: UpcomingComplexityFilter) =>
    upcomingIdeas.filter((i) => (cx === 'all' || i.complexity === cx) && matchesFilters(i, { complexity: true })).length

  const groupedUpcoming = useMemo(() => {
    const map = new Map<string, UpcomingIdea[]>()
    filteredUpcoming.forEach((idea) => {
      const list = map.get(idea.appName) ?? []
      list.push(idea)
      map.set(idea.appName, list)
    })
    return [...map.entries()]
  }, [filteredUpcoming])

  const showGrouped = groupByApp && appFilter === 'all' && upcomingSort === 'default'

  const anyFilterActive =
    appFilter !== 'all' ||
    tagFilter !== 'all' ||
    categoryFilter !== 'all' ||
    complexityFilter !== 'all' ||
    q !== ''

  const clearFilters = () => {
    setAppFilter('all')
    setTagFilter('all')
    setCategoryFilter('all')
    setComplexityFilter('all')
    setQuery('')
  }

  const isReleased = tab === 'released'
  const isUpcoming = tab === 'upcoming'
  const isRoadmap  = tab === 'roadmap'
  const dir = isReleased ? -1 : 1

  const roadmapByBucket = useMemo(() => {
    const map = new Map<RoadmapBucket, typeof roadmapItems>()
    roadmapBuckets.forEach((b) => {
      map.set(b.key, roadmapItems.filter((item) => item.bucket === b.key))
    })
    return map
  }, [])

  const appFilters: { key: UpcomingAppFilter; label: string }[] = [
    { key: 'all', label: 'All apps' },
    { key: 'DailyPlan', label: 'DailyPlan' },
    { key: 'QuoteGen', label: 'QuoteGen' },
  ]

  const tagFilters: { key: UpcomingTagFilter; label: string }[] = [
    { key: 'all', label: 'All types' },
    { key: 'New Feature', label: 'New Feature' },
    { key: 'Feature Update', label: 'Feature Update' },
    { key: 'New App', label: 'New App' },
  ]

  const sortOptions: { key: UpcomingSort; label: string }[] = [
    { key: 'default', label: 'Default order' },
    { key: 'newest', label: 'Newest first' },
    { key: 'alpha', label: 'A — Z' },
    { key: 'complexity-desc', label: 'Complexity: High → Low' },
    { key: 'complexity-asc', label: 'Complexity: Low → High' },
  ]

  const stats = isReleased
    ? [
        { label: 'Shipped', value: features.length, delay: 0.3 },
        { label: 'Apps', value: appCount, delay: 0.45 },
        { label: 'In pipeline', value: upcomingIdeas.length, delay: 0.6 },
      ]
    : isRoadmap
    ? [
        { label: 'Now', value: roadmapByBucket.get('now')?.length ?? 0, delay: 0.3 },
        { label: 'Next', value: roadmapByBucket.get('next')?.length ?? 0, delay: 0.45 },
        { label: 'Later', value: roadmapByBucket.get('later')?.length ?? 0, delay: 0.6 },
      ]
    : [
        { label: 'Ideas queued', value: upcomingIdeas.length, delay: 0.3 },
        { label: 'Categories', value: upcomingCategories.length, delay: 0.45 },
        { label: 'Shipped', value: features.length, delay: 0.6 },
      ]

  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <StatusBar />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        {/* Header */}
        <header className="pt-24 pb-10 text-center">
          <div className="relative inline-block glass holo-ring rounded-3xl px-10 py-12 md:px-16 md:py-14 border border-[rgba(79,142,247,0.15)] shadow-[0_24px_100px_rgba(0,0,0,0.5),0_0_0_1px_rgba(79,142,247,0.08),0_0_120px_rgba(79,142,247,0.08)]">

            {/* HUD corner brackets */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[rgba(79,142,247,0.5)] z-10" />
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[rgba(79,142,247,0.5)] z-10" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[rgba(79,142,247,0.5)] z-10" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[rgba(79,142,247,0.5)] z-10" />

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
              <span className="terminal text-[10px] font-semibold text-[var(--accent)] uppercase tracking-[0.3em]">
                Tech Department · Ops Deck
              </span>
            </motion.div>

            {/* Title — decodes into place */}
            <motion.h1
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title block text-5xl md:text-7xl font-bold leading-none"
              style={{ letterSpacing: '-0.04em' }}
            >
              <DecodeText
                text={isReleased ? "What we've built" : isRoadmap ? "Where we're headed" : "What's coming"}
                delay={150}
              />
              <span className="hero-caret" aria-hidden="true" />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              key={`${tab}-subtitle`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
            >
              {isReleased
                ? 'The latest features, enhancements, and improvements from our engineering team.'
                : isRoadmap
                ? `${roadmapItems.length} approved items we're committed to pursuing — grouped by Now, Next, and Later. Expand any card for the payoff and acceptance criteria.`
                : `${upcomingIdeas.length} roadmap ideas for DailyPlan and QuoteGen — expand any card for details and its AI build prompt.`}
            </motion.p>

            {/* Live stats */}
            <motion.div
              key={`${tab}-stats`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-9 flex items-center justify-center gap-6 sm:gap-10"
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-6 sm:gap-10">
                  {i > 0 && <div className="w-px h-8 bg-[rgba(79,142,247,0.2)]" />}
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] text-glow">
                      <StatCounter value={s.value} delay={s.delay} />
                    </div>
                    <div className="terminal text-[9px] tracking-[0.28em] text-[var(--text-secondary)] uppercase mt-1.5">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </header>

        {/* Deploy ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="ticker-wrap glass rounded-lg border border-[rgba(79,142,247,0.12)] py-2 mb-10"
        >
          <div className="ticker">
            {[0, 1].map((dup) => (
              <div
                key={dup}
                aria-hidden={dup === 1}
                className="flex items-center terminal text-[10px] tracking-wider text-[var(--text-secondary)] whitespace-nowrap"
              >
                {tickerItems.map((it, i) => (
                  <span key={`${dup}-${i}`} className="flex items-center">
                    <span className="text-[var(--accent)] mx-5 opacity-70">◆</span>
                    <span className="text-[var(--text-primary)] font-semibold">{it.app.toUpperCase()}</span>
                    {it.featureName && (
                      <>
                        <span className="mx-1.5 opacity-50">·</span>
                        <span>{it.featureName.toUpperCase()}</span>
                      </>
                    )}
                    <span className="mx-2 opacity-40">—</span>
                    <span style={{ color: tickerTagColors[it.tag] ?? 'inherit' }}>{it.tag.toUpperCase()}</span>
                    <span className="mx-2 opacity-40">—</span>
                    <span>{it.date}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col gap-4 mb-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {/* Tab switcher — sliding pill */}
              <div className="flex items-center gap-1 glass rounded-lg p-1">
                {(['released', 'upcoming', 'roadmap'] as Tab[]).map((t) => (
                  <motion.button
                    key={t}
                    onClick={() => setTab(t)}
                    whileTap={{ scale: 0.94 }}
                    className={`relative px-4 py-1.5 rounded-md text-xs font-medium transition-colors duration-150 ${
                      tab === t ? 'text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {tab === t && (
                      <motion.span
                        layoutId="tab-pill"
                        className="absolute inset-0 rounded-md bg-[var(--accent)]"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        style={{ boxShadow: '0 0 20px rgba(79,142,247,0.4)' }}
                      />
                    )}
                    <span className="relative z-10 capitalize inline-flex items-center gap-1.5">
                      {t === 'roadmap' ? 'road map' : t}
                      <span className={`text-[10px] tabular-nums ${tab === t ? 'opacity-80' : 'opacity-50'}`}>
                        {t === 'released' ? features.length : t === 'roadmap' ? roadmapItems.length : upcomingIdeas.length}
                      </span>
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Released-only sort */}
              {isReleased && (
                <motion.button
                  onClick={() => setSort(s => s === 'newest' ? 'oldest' : 'newest')}
                  whileTap={{ scale: 0.94 }}
                  className="flex items-center gap-2 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors glass rounded-lg px-3 py-2"
                >
                  <motion.span
                    animate={{ rotate: sort === 'newest' ? 0 : 180 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 26 }}
                    className="inline-flex"
                  >
                    <ArrowUpDown size={13} />
                  </motion.span>
                  {sort === 'newest' ? 'Newest first' : 'Oldest first'}
                </motion.button>
              )}
            </div>

            {/* Released-only view toggle */}
            {isReleased && (
              <div className="flex items-center gap-1 glass rounded-lg p-1">
                {([
                  { key: 'grid' as ViewMode, icon: <LayoutGrid size={14} /> },
                  { key: 'list' as ViewMode, icon: <List size={14} /> },
                ]).map((v) => (
                  <motion.button
                    key={v.key}
                    onClick={() => setView(v.key)}
                    whileTap={{ scale: 0.88 }}
                    className={`relative p-1.5 rounded-md transition-colors duration-150 ${
                      view === v.key ? 'text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {view === v.key && (
                      <motion.span
                        layoutId="pill-view"
                        className="absolute inset-0 rounded-md bg-[var(--accent)]"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{v.icon}</span>
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          {/* Upcoming control panel — boots up row by row */}
          {isUpcoming && (
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="show"
              className="glass hud-corners rounded-2xl border border-[rgba(79,142,247,0.16)] p-4 sm:p-5 flex flex-col gap-4"
            >
              {/* Panel header */}
              <motion.div variants={panelItem} className="flex items-center gap-3">
                <SlidersHorizontal size={12} className="text-[var(--accent)] flex-shrink-0" />
                <span className="terminal text-[10px] font-semibold tracking-[0.3em] text-[var(--accent)] uppercase">
                  Control Panel
                </span>
                <div className="flex-1 data-stream" />
                <span className="terminal text-[10px] text-[var(--text-secondary)] tracking-widest whitespace-nowrap">
                  <RollingCount value={filteredUpcoming.length} className="text-[var(--text-primary)] font-bold" />
                  <span className="opacity-60">/{upcomingIdeas.length} IDEAS</span>
                </span>
                <AnimatePresence>
                  {anyFilterActive && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={clearFilters}
                      className="flex items-center gap-1.5 text-[10px] terminal font-medium text-[var(--accent)] hover:text-[var(--text-primary)] rounded-md px-2 py-1 border border-[rgba(79,142,247,0.3)] transition-colors uppercase tracking-wider"
                    >
                      <X size={10} />
                      Reset
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Search */}
              <motion.div variants={panelItem} className="relative">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none"
                />
                <input
                  ref={searchRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search ideas — title, description, highlights…"
                  className="w-full glass rounded-lg pl-9 pr-9 py-2.5 text-xs text-[var(--text-primary)] bg-transparent border border-[var(--border)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[rgba(79,142,247,0.55)] focus:shadow-[0_0_24px_rgba(79,142,247,0.18),inset_0_0_18px_rgba(79,142,247,0.05)] transition-all duration-300"
                />
                {query ? (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                ) : (
                  <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 terminal text-[9px] text-[var(--text-secondary)] border border-[var(--border)] rounded px-1.5 py-0.5 opacity-60 hidden sm:block">
                    /
                  </kbd>
                )}
              </motion.div>

              {/* App + type filters */}
              <motion.div variants={panelItem} className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 min-w-0">
                  <div className="terminal text-[9px] tracking-[0.25em] text-[var(--text-secondary)] uppercase mb-1.5 opacity-70">
                    Filter :: App
                  </div>
                  <div className="overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-1 glass rounded-lg p-1 w-max">
                      {appFilters.map((f) => (
                        <FilterChip
                          key={f.key}
                          active={appFilter === f.key}
                          onClick={() => setAppFilter(f.key)}
                          layoutId="pill-app"
                        >
                          {f.label}
                          <RollingCount
                            value={countByApp(f.key)}
                            className={`text-[10px] ${appFilter === f.key ? 'opacity-80' : 'opacity-60'}`}
                          />
                        </FilterChip>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="terminal text-[9px] tracking-[0.25em] text-[var(--text-secondary)] uppercase mb-1.5 opacity-70">
                    Filter :: Type
                  </div>
                  <div className="overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-1 glass rounded-lg p-1 w-max">
                      {tagFilters.map((f) => {
                        const count = countByTag(f.key)
                        if (f.key !== 'all' && count === 0 && tagFilter !== f.key) return null
                        return (
                          <FilterChip
                            key={f.key}
                            active={tagFilter === f.key}
                            onClick={() => setTagFilter(f.key)}
                            layoutId="pill-tag"
                            pillClass="bg-[rgba(245,158,11,0.85)]"
                          >
                            {f.label}
                            <RollingCount
                              value={count}
                              className={`text-[10px] ${tagFilter === f.key ? 'opacity-80' : 'opacity-60'}`}
                            />
                          </FilterChip>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Category filter — wraps so every option stays visible */}
              <motion.div variants={panelItem}>
                <div className="terminal text-[9px] tracking-[0.25em] text-[var(--text-secondary)] uppercase mb-1.5 opacity-70">
                  Filter :: Category
                </div>
                <div className="flex flex-wrap items-center gap-1 glass rounded-lg p-1">
                  <FilterChip
                    active={categoryFilter === 'all'}
                    onClick={() => setCategoryFilter('all')}
                    layoutId="pill-cat"
                    pillClass="bg-[rgba(0,210,140,0.7)]"
                  >
                    All categories
                    <RollingCount
                      value={countByCategory('all')}
                      className={`text-[10px] ${categoryFilter === 'all' ? 'opacity-80' : 'opacity-60'}`}
                    />
                  </FilterChip>
                  {upcomingCategories.map((cat) => {
                    const count = countByCategory(cat)
                    if (count === 0 && categoryFilter !== cat) return null
                    return (
                      <FilterChip
                        key={cat}
                        active={categoryFilter === cat}
                        onClick={() => setCategoryFilter(cat)}
                        layoutId="pill-cat"
                        pillClass="bg-[rgba(0,210,140,0.7)]"
                      >
                        {cat}
                        <RollingCount
                          value={count}
                          className={`text-[10px] ${categoryFilter === cat ? 'opacity-80' : 'opacity-60'}`}
                        />
                      </FilterChip>
                    )
                  })}
                </div>
              </motion.div>

              {/* Complexity filter — power levels */}
              <motion.div variants={panelItem}>
                <div className="terminal text-[9px] tracking-[0.25em] text-[var(--text-secondary)] uppercase mb-1.5 opacity-70">
                  Filter :: Complexity
                </div>
                <div className="flex flex-wrap items-center gap-1 glass rounded-lg p-1">
                  <FilterChip
                    active={complexityFilter === 'all'}
                    onClick={() => setComplexityFilter('all')}
                    layoutId="pill-complexity"
                  >
                    All levels
                    <RollingCount
                      value={countByComplexity('all')}
                      className={`text-[10px] ${complexityFilter === 'all' ? 'opacity-80' : 'opacity-60'}`}
                    />
                  </FilterChip>
                  {complexityLevels.map((cx) => {
                    const count = countByComplexity(cx)
                    if (count === 0 && complexityFilter !== cx) return null
                    return (
                      <FilterChip
                        key={cx}
                        active={complexityFilter === cx}
                        onClick={() => setComplexityFilter(cx)}
                        layoutId="pill-complexity"
                        pillClass={complexityPill[cx]}
                      >
                        {cx}
                        <RollingCount
                          value={count}
                          className={`text-[10px] ${complexityFilter === cx ? 'opacity-80' : 'opacity-60'}`}
                        />
                      </FilterChip>
                    )
                  })}
                </div>
              </motion.div>

              {/* Sort + grouping */}
              <motion.div variants={panelItem}>
                <div className="terminal text-[9px] tracking-[0.25em] text-[var(--text-secondary)] uppercase mb-1.5 opacity-70">
                  Sort :: Options
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="hidden md:flex items-center gap-1 glass rounded-lg p-1">
                    {sortOptions.map((opt) => (
                      <FilterChip
                        key={opt.key}
                        active={upcomingSort === opt.key}
                        onClick={() => setUpcomingSort(opt.key)}
                        layoutId="pill-sort"
                        pillClass="bg-[rgba(79,142,247,0.3)] border border-[rgba(79,142,247,0.4)]"
                      >
                        {opt.label}
                      </FilterChip>
                    ))}
                  </div>
                  <select
                    value={upcomingSort}
                    onChange={(e) => setUpcomingSort(e.target.value as UpcomingSort)}
                    className="md:hidden glass rounded-lg px-3 py-2 text-xs text-[var(--text-primary)] bg-transparent border border-[var(--border)] appearance-none"
                    style={{ backgroundImage: 'none' }}
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.key} value={opt.key} className="bg-[#0a0c18]">
                        {opt.label}
                      </option>
                    ))}
                  </select>

                  <motion.button
                    onClick={() => setGroupByApp(g => !g)}
                    whileTap={{ scale: 0.94 }}
                    disabled={appFilter !== 'all' || upcomingSort !== 'default'}
                    title={
                      appFilter !== 'all' || upcomingSort !== 'default'
                        ? 'Grouping applies with All apps + Default order'
                        : 'Toggle grouping by app'
                    }
                    className={`flex items-center gap-1.5 text-xs font-medium glass rounded-lg px-3 py-2 transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed ${
                      showGrouped
                        ? 'text-[var(--text-primary)] border border-[rgba(79,142,247,0.35)] bg-[rgba(79,142,247,0.15)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]'
                    }`}
                  >
                    <Layers size={13} />
                    Group by app
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {isReleased ? (
            view === 'grid' ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0, x: 24 * dir }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 * dir }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {sorted.map((feature, i) => (
                  <FeatureCard key={feature.id} feature={feature} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: 24 * dir }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 * dir }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative timeline-rail flex flex-col gap-3"
              >
                {sorted.map((feature, i) => (
                  <div key={feature.id} className="relative pl-8">
                    <span className="timeline-node" aria-hidden="true" />
                    <FeatureRow feature={feature} index={i} />
                  </div>
                ))}
              </motion.div>
            )
          ) : isRoadmap ? (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, x: 24 * dir }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 * dir }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-10"
            >
              {roadmapBuckets.map(({ key, label, blurb }) => {
                const items = roadmapByBucket.get(key) ?? []
                if (items.length === 0) return null
                return (
                  <section key={key}>
                    <div className="flex items-center gap-3 mb-4 px-1">
                      <span className="terminal text-[10px] text-[#4dffc3]">▣</span>
                      <h2 className="terminal text-xs font-semibold text-[var(--text-primary)] uppercase tracking-[0.3em]">
                        {label}
                      </h2>
                      <span className="terminal text-[10px] text-[var(--text-secondary)] tracking-widest">
                        {'// '}{blurb}{' · '}{items.length}
                      </span>
                      <div className="flex-1 data-stream" />
                    </div>
                    <div className="flex flex-col gap-3">
                      {items.map((item, i) => (
                        <RoadmapRow key={item.id} item={item} index={Math.min(i, 10)} />
                      ))}
                    </div>
                  </section>
                )
              })}
            </motion.div>
          ) : (
            <motion.div
              key="upcoming"
              initial={{ opacity: 0, x: 24 * dir }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 * dir }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3"
            >
              {filteredUpcoming.length === 0 ? (
                <div className="glass rounded-xl px-6 py-12 text-center">
                  <p className="terminal text-xs tracking-widest text-[var(--text-secondary)] uppercase mb-1">
                    {'// No signal'}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">No ideas match the selected filters.</p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:text-[var(--text-primary)] glass rounded-lg px-3 py-2 border border-[rgba(79,142,247,0.25)] transition-colors"
                  >
                    <X size={12} />
                    Clear all filters
                  </button>
                </div>
              ) : showGrouped ? (
                <div className="flex flex-col gap-10">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {groupedUpcoming.map(([appName, ideas]) => (
                      <motion.section
                        key={appName}
                        layout="position"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                      >
                        <div className="flex items-center gap-3 mb-4 px-1">
                          <span className="terminal text-[10px] text-[var(--accent)]">▣</span>
                          <h2 className="terminal text-xs font-semibold text-[var(--text-primary)] uppercase tracking-[0.3em]">
                            {appName}
                          </h2>
                          <span className="terminal text-[10px] text-[var(--text-secondary)] tracking-widest">
                            {'// '}<RollingCount value={ideas.length} />{' QUEUED'}
                          </span>
                          <div className="flex-1 data-stream" />
                        </div>
                        <div className="flex flex-col gap-3">
                          <AnimatePresence mode="popLayout" initial={false}>
                            {ideas.map((idea, i) => (
                              <UpcomingRow key={idea.id} idea={idea} index={Math.min(i, 10)} />
                            ))}
                          </AnimatePresence>
                        </div>
                      </motion.section>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <AnimatePresence mode="popLayout" initial={false}>
                  {filteredUpcoming.map((idea, i) => (
                    <UpcomingRow key={idea.id} idea={idea} index={Math.min(i, 10)} />
                  ))}
                </AnimatePresence>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 26 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 glass rounded-full pl-3 pr-4 py-3 border border-[rgba(79,142,247,0.35)] terminal text-[10px] tracking-[0.2em] text-[var(--accent)] hover:bg-[rgba(79,142,247,0.12)] transition-colors flex items-center gap-1.5"
            style={{ boxShadow: '0 0 30px rgba(79,142,247,0.25), 0 8px 30px rgba(0,0,0,0.5)' }}
            aria-label="Back to top"
          >
            <ChevronUp size={13} />
            TOP
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

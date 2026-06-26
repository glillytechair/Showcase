'use client'

import { motion } from 'framer-motion'
import { features } from '@/data/features'
import FeatureCard from '@/components/FeatureCard'
import GridBackground from '@/components/GridBackground'
import { Zap } from 'lucide-react'

export default function HomePage() {
  const sorted = [...features].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="relative min-h-screen">
      <GridBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        {/* Header */}
        <header className="pt-20 pb-16 text-center">
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
            className="mt-4 text-lg text-[var(--text-secondary)] max-w-xl mx-auto"
          >
            The latest features, enhancements, and improvements from our engineering team.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="line-accent w-32 mx-auto mt-8"
          />
        </header>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex justify-center gap-8 mb-14"
        >
          {[
            { label: 'Total Updates', value: features.length },
            { label: 'This Month', value: features.filter(f => {
              const d = new Date(f.date)
              const now = new Date()
              return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
            }).length },
            { label: 'New Features', value: features.filter(f => f.tag === 'New Feature').length },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[var(--accent)]">{stat.value}</div>
              <div className="text-[11px] text-[var(--text-secondary)] uppercase tracking-widest mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center text-[11px] text-[var(--text-secondary)]"
        >
          Built by the Tech Department · Updates are live on deploy
        </motion.footer>
      </div>
    </div>
  )
}

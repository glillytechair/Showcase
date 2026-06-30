'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { UpcomingIdea } from '@/types'
import { Lightbulb, ArrowRight, Wrench, Copy, Check } from 'lucide-react'

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

  const handleCopy = async () => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass glass-hover card-shimmer rounded-xl px-4 py-4 sm:px-5 relative group">
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
              {idea.complexity && (
                <>
                  <span className="text-[var(--text-secondary)] text-xs">·</span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-[var(--text-secondary)] font-medium">
                    <Wrench size={10} />
                    {idea.complexity}
                  </span>
                </>
              )}
            </div>

            <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent)] transition-colors duration-200 pr-4 sm:pr-0">
              {idea.title}
            </h3>

            <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
              {idea.subtitle}
            </p>

            {idea.highlights && idea.highlights.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {idea.highlights.slice(0, 4).map((highlight, i) => (
                  <li
                    key={i}
                    className="text-[10px] text-[var(--text-secondary)] bg-[rgba(255,255,255,0.04)] border border-[var(--border)] rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 leading-tight"
                  >
                    {highlight}
                  </li>
                ))}
                {idea.highlights.length > 4 && (
                  <li className="text-[10px] text-[var(--accent)] px-2 py-1">
                    +{idea.highlights.length - 4} more
                  </li>
                )}
              </ul>
            )}

            {/* Copy prompt action */}
            <div className="mt-3 flex items-center justify-end">
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

          {/* Arrow */}
          <ArrowRight
            size={14}
            className="flex-shrink-0 text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200 mt-1"
          />
        </div>

        {/* Bottom glow line on hover */}
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-400" />
      </div>
    </motion.div>
  )
}

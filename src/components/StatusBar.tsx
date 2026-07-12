'use client'

import { useEffect, useState } from 'react'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

/**
 * Fixed terminal status bar pinned to the top of the viewport.
 * Live clock is mounted-gated to avoid hydration mismatch.
 */
export default function StatusBar() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    const tick = () => setNow(new Date())
    const raf = requestAnimationFrame(tick)
    const t = setInterval(tick, 1000)
    return () => {
      cancelAnimationFrame(raf)
      clearInterval(t)
    }
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 z-40 h-8 border-b border-[rgba(79,142,247,0.15)] bg-[rgba(7,8,16,0.75)] backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between terminal text-[10px] tracking-widest">
        <div className="flex items-center gap-2 text-[var(--text-secondary)]">
          <span className="text-[var(--accent)]">NETA</span>
          <span className="opacity-40">::</span>
          <span>TECH</span>
          <span className="opacity-40">/</span>
          <span className="text-[var(--text-primary)]">SHOWCASE</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center gap-2 text-[var(--text-secondary)]">
            <span className="online-dot" />
            <span style={{ color: '#4dffc3' }}>SYSTEMS NOMINAL</span>
          </span>

          <span className="text-[var(--text-secondary)] tabular-nums" suppressHydrationWarning>
            {now ? (
              <>
                {pad(now.getHours())}
                <span className="blink-sep">:</span>
                {pad(now.getMinutes())}
                <span className="blink-sep">:</span>
                {pad(now.getSeconds())}
              </>
            ) : (
              '--:--:--'
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

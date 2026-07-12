'use client'

import { useEffect, useState } from 'react'

const GLYPHS = '!<>-_\\/[]{}=+*^?#·░▒▓'

interface Props {
  text: string
  /** ms before the decode starts */
  delay?: number
  /** total decode duration in ms */
  duration?: number
  className?: string
}

/**
 * Text that scrambles through glyphs and settles left-to-right.
 * SSR-safe: renders the real text until the animation kicks in after mount.
 * `scrambled === null` means "show the real text".
 */
export default function DecodeText({ text, delay = 0, duration = 750, className = '' }: Props) {
  const [scrambled, setScrambled] = useState<string | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let raf = 0
    let start: number | null = null

    const run = (t: number) => {
      if (start === null) start = t
      const p = Math.min(1, (t - start) / duration)
      const settled = Math.floor(p * text.length)

      if (p >= 1) {
        setScrambled(null)
        return
      }

      let out = ''
      for (let i = 0; i < text.length; i++) {
        const ch = text[i]
        if (i < settled || ch === ' ') {
          out += ch
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        }
      }
      setScrambled(out)
      raf = requestAnimationFrame(run)
    }

    const timer = setTimeout(() => {
      raf = requestAnimationFrame(run)
    }, delay)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
      setScrambled(null)
    }
  }, [text, delay, duration])

  return (
    <span className={className} aria-label={text}>
      {scrambled ?? text}
    </span>
  )
}

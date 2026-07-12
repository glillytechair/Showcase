'use client'

import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  /** max tilt in degrees */
  max?: number
  /** border radius class applied to the glare layer */
  radiusClass?: string
}

/**
 * Wraps content in a 3D-tilt container with a cursor-tracking glare.
 * Pure CSS-variable driven — no re-renders on mouse move.
 */
export default function TiltCard({ children, className = '', max = 6, radiusClass = 'rounded-2xl' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty('--rx', `${((0.5 - py) * max).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${((px - 0.5) * max).toFixed(2)}deg`)
    el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
    el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt-card ${className}`}
    >
      {children}
      <div className={`tilt-glare ${radiusClass}`} />
    </div>
  )
}

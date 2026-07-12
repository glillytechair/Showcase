'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

/**
 * Mission-control living background:
 * aurora gradients + faint grid + perspective floor + a particle network
 * canvas whose nodes link up and brighten near the cursor.
 */
export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5)

    let raf = 0
    let w = 0
    let h = 0
    let particles: Particle[] = []
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * DPR)
      canvas.height = Math.floor(h * DPR)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)

      const count = Math.min(85, Math.floor((w * h) / 24000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        r: Math.random() * 1.3 + 0.5,
      }))
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const LINK = 110
    const MOUSE_LINK = 170

    const draw = (animateFrame: boolean) => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        if (animateFrame) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < -20) p.x = w + 20
          if (p.x > w + 20) p.x = -20
          if (p.y < -20) p.y = h + 20
          if (p.y > h + 20) p.y = -20
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(126,184,255,0.4)'
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK * LINK) {
            const alpha = (1 - Math.sqrt(d2) / LINK) * 0.13
            ctx.strokeStyle = `rgba(79,142,247,${alpha.toFixed(3)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        const mdx = a.x - mouse.x
        const mdy = a.y - mouse.y
        const md2 = mdx * mdx + mdy * mdy
        if (md2 < MOUSE_LINK * MOUSE_LINK) {
          const alpha = (1 - Math.sqrt(md2) / MOUSE_LINK) * 0.4
          ctx.strokeStyle = `rgba(94,245,238,${alpha.toFixed(3)})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
    }

    const loop = () => {
      draw(true)
      raf = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)

    if (reduced) {
      // Static constellation — no animation loop
      draw(false)
    } else {
      window.addEventListener('mousemove', onMove)
      window.addEventListener('mouseout', onLeave)
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Faint base grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Aurora gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,142,247,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 45% at 82% 30%, rgba(132,90,223,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 45% 40% at 12% 65%, rgba(0,199,190,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Perspective grid floor */}
      <div className="absolute inset-x-0 bottom-0 h-[38vh] persp-floor" />

      {/* Horizon glow above the floor */}
      <div
        className="absolute inset-x-0 bottom-[36vh] h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(79,142,247,0.35), rgba(94,245,238,0.3), rgba(79,142,247,0.35), transparent)',
          boxShadow: '0 0 24px rgba(79,142,247,0.35)',
          opacity: 0.5,
        }}
      />

      {/* Particle network */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}

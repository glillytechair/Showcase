'use client'

import { motion } from 'framer-motion'

export default function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Radial glow — center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,142,247,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Bottom glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(132,90,223,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(79,142,247,0.09) 0%, transparent 70%)',
          top: '-15%',
          left: '-10%',
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(132,90,223,0.08) 0%, transparent 70%)',
          bottom: '-10%',
          right: '-10%',
        }}
        animate={{ x: [0, -20, 0], y: [0, -25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,210,140,0.055) 0%, transparent 70%)',
          top: '30%',
          right: '-5%',
        }}
        animate={{ x: [0, -18, 0], y: [0, 24, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(79,142,247,0.07) 0%, transparent 70%)',
          top: '55%',
          left: '15%',
        }}
        animate={{ x: [0, 22, 0], y: [0, -18, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Scan line sweeping downward */}
      <div className="scan-line" />
    </div>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react'
import { MediaItem } from '@/types'

interface Props {
  media: MediaItem[]
}

export default function MediaViewer({ media }: Props) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  if (!media.length) return null

  const item = media[current]
  const prev = () => setCurrent((c) => (c - 1 + media.length) % media.length)
  const next = () => setCurrent((c) => (c + 1) % media.length)

  return (
    <>
      {/* Main viewer — fixed height container, image contained inside */}
      <div
        className="relative rounded-2xl overflow-hidden group"
        style={{
          background: 'rgba(255,255,255,0.015)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px rgba(0,0,0,0.4)',
        }}
      >
        {/* Fixed-height stage — all images sit inside this box */}
        <div className="relative w-full h-[560px] flex items-center justify-center p-6">

          {/* Subtle inner border that frames the image */}
          <div
            className="absolute inset-4 rounded-xl pointer-events-none"
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center w-full h-full"
            >
              {item.type === 'video' ? (
                <video
                  key={item.url}
                  src={item.url}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={item.thumbnail}
                  className="max-w-full max-h-full rounded-lg object-contain"
                  style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}
                />
              ) : (
                <img
                  src={item.url}
                  alt={item.caption || `Media ${current + 1}`}
                  className="max-w-full max-h-full rounded-lg object-contain"
                  style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Expand button */}
        {item.type === 'image' && (
          <button
            onClick={() => setLightbox(true)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-sm rounded-full p-2 hover:bg-black/80"
          >
            <Maximize2 size={14} className="text-white" />
          </button>
        )}

        {/* Nav arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-sm rounded-full p-2.5 hover:bg-black/80"
            >
              <ChevronLeft size={18} className="text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-sm rounded-full p-2.5 hover:bg-black/80"
            >
              <ChevronRight size={18} className="text-white" />
            </button>
          </>
        )}

      </div>

      {/* Caption — sits below the image container, never overlaid */}
      {item.caption && (
        <div className="flex items-center justify-between px-1 pt-2.5">
          <p className="text-xs text-[var(--text-secondary)]">{item.caption}</p>
          {media.length > 1 && (
            <span className="text-[10px] text-[var(--text-secondary)] tabular-nums opacity-60">
              {current + 1} / {media.length}
            </span>
          )}
        </div>
      )}

      {/* Thumbnail strip */}
      {media.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {media.map((m, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-200"
              style={{
                border: i === current
                  ? '2px solid var(--accent)'
                  : '2px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
                opacity: i === current ? 1 : 0.5,
                boxShadow: i === current ? '0 0 12px rgba(79,142,247,0.3)' : 'none',
              }}
            >
              {m.type === 'video' ? (
                <video src={m.url} muted className="w-full h-full object-contain" />
              ) : (
                <img src={m.url} alt="" className="w-full h-full object-contain" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)' }}
            onClick={() => setLightbox(false)}
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={item.url}
              alt={item.caption || ''}
              className="max-w-full max-h-full object-contain rounded-xl"
              style={{ boxShadow: '0 20px 80px rgba(0,0,0,0.8)' }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

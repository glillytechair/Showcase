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
      {/* Main viewer */}
      <div className="relative rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.02)] border border-[var(--border)] group">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
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
                className="w-full h-auto"
              />
            ) : (
              <img
                src={item.url}
                alt={item.caption || `Media ${current + 1}`}
                className="w-full h-auto"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Expand button */}
        {item.type === 'image' && (
          <button
            onClick={() => setLightbox(true)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-sm rounded-full p-2 hover:bg-black/80"
          >
            <Maximize2 size={14} className="text-white" />
          </button>
        )}

        {/* Nav arrows (multi-media only) */}
        {media.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-sm rounded-full p-2 hover:bg-black/80"
            >
              <ChevronLeft size={18} className="text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-sm rounded-full p-2 hover:bg-black/80"
            >
              <ChevronRight size={18} className="text-white" />
            </button>
          </>
        )}

        {/* Caption */}
        {item.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
            <p className="text-xs text-white/70">{item.caption}</p>
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {media.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {media.map((m, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative flex-shrink-0 w-20 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === current
                  ? 'border-[var(--accent)] opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-75'
              }`}
            >
              {m.type === 'video' ? (
                <video src={m.url} muted className="w-full h-full object-cover" />
              ) : (
                <img src={m.url} alt="" className="w-full h-full object-cover" />
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(false)}
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={item.url}
              alt={item.caption || ''}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

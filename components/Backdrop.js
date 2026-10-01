'use client'
import { useEffect, useState } from 'react'

// kind="petals": emoji drift upward. kind="stars": twinkling night sky.
export default function Backdrop({ kind = 'petals', emojis }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const list = emojis || (kind === 'stars' ? ['✨', '⭐', '·', '✦'] : ['🌸', '💗', '🌷', '✨', '🌼'])
    const n = kind === 'stars' ? 70 : 16
    setItems(
      Array.from({ length: n }, (_, i) => ({
        id: i,
        e: list[i % list.length],
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 10 + Math.random() * (kind === 'stars' ? 10 : 20),
        delay: Math.random() * 12,
        dur: kind === 'stars' ? 2 + Math.random() * 4 : 12 + Math.random() * 14,
      }))
    )
  }, [kind, emojis])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {items.map((it) =>
        kind === 'stars' ? (
          <span key={it.id} className="absolute text-white" style={{ left: `${it.left}%`, top: `${it.top}%`, fontSize: it.size, animation: `twinkle ${it.dur}s ease-in-out ${it.delay}s infinite` }}>
            {it.e}
          </span>
        ) : (
          <span key={it.id} className="petal" style={{ left: `${it.left}%`, fontSize: it.size, animationDuration: `${it.dur}s`, animationDelay: `-${it.delay}s` }}>
            {it.e}
          </span>
        )
      )}
    </div>
  )
}

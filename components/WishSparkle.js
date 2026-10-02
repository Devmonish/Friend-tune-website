'use client'
import { useState } from 'react'

const EMOJI = ['✨', '⭐', '💖', '🌸', '🌟', '💫']

// Tap the sparkle for a burst of stars.
export default function WishSparkle() {
  const [bits, setBits] = useState([])
  const wish = () => {
    const stamp = Date.now()
    setBits(
      Array.from({ length: 16 }, (_, i) => {
        const a = (i / 16) * Math.PI * 2
        const d = 80 + Math.random() * 90
        return { id: stamp + i, dx: Math.cos(a) * d, dy: Math.sin(a) * d, e: EMOJI[i % EMOJI.length] }
      })
    )
    setTimeout(() => setBits([]), 1000)
  }
  return (
    <button onClick={wish} aria-label="Make a wish" className="relative inline-block text-5xl transition hover:scale-125 active:scale-90">
      ✨
      {bits.map((b) => (
        <span key={b.id} className="spark text-2xl" style={{ '--dx': `${b.dx}px`, '--dy': `${b.dy}px` }}>
          {b.e}
        </span>
      ))}
    </button>
  )
}







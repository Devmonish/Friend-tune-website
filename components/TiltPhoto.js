'use client'
import { useRef, useState } from 'react'
import { sitePath } from './sitePath'

const EMOJI = ['✨', '💖', '🌸', '⭐', '🌷']

/**
 * A photo (or a muted video) in a polaroid / round frame.
 * Hover: 3D tilt that follows the cursor, glossy shine, straightens up, and a sparkle burst.
 * Video: plays while the cursor is on it (tap to play/pause on phones), always muted.
 */
export default function TiltPhoto({
  src,
  video,
  poster,
  alt = '',
  aspect = 'aspect-[3/4]',
  rotate = 0,
  emoji = '🌸',
  variant = 'polaroid', // 'polaroid' | 'round'
  className = '',
}) {
  const frame = useRef(null)
  const vid = useRef(null)
  const [sparks, setSparks] = useState([])
  const [playing, setPlaying] = useState(false)

  const burst = () => {
    const stamp = Date.now()
    setSparks(
      Array.from({ length: 9 }, (_, i) => {
        const a = (i / 9) * Math.PI * 2
        const d = 90 + Math.random() * 50
        return { id: stamp + i, dx: Math.cos(a) * d, dy: Math.sin(a) * d, e: EMOJI[i % EMOJI.length] }
      })
    )
    setTimeout(() => setSparks([]), 950)
  }

  const play = () => {
    const v = vid.current
    if (!v) return
    v.muted = true
    v.play().then(() => setPlaying(true)).catch(() => {})
  }
  const stop = () => {
    const v = vid.current
    if (!v) return
    v.pause()
    v.currentTime = 0
    setPlaying(false)
  }

  const onMove = (e) => {
    const el = frame.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--ry', `${(x - 0.5) * 16}deg`)
    el.style.setProperty('--rx', `${(0.5 - y) * 16}deg`)
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }
  const onEnter = (e) => {
    burst()
    if (video && e.pointerType === 'mouse') play()
  }
  const onLeave = (e) => {
    const el = frame.current
    if (el) {
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }
    if (video && e.pointerType === 'mouse') stop()
  }
  const onDown = (e) => {
    if (video && e.pointerType !== 'mouse') (playing ? stop : play)()
  }

  const round = variant === 'round'
  const shell = round
    ? 'rounded-full bg-gradient-to-br from-marigold via-rose to-lilac p-1.5 shadow-glow'
    : 'rounded-2xl bg-white p-2.5 pb-3 shadow-card'

  return (
    <figure
      ref={frame}
      onPointerMove={onMove}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      onPointerDown={onDown}
      className={`tilt relative ${shell} ${className}`}
      style={{ '--r0': `${rotate}deg` }}
    >
      <div className={`relative overflow-hidden bg-blush ${round ? 'rounded-full' : 'rounded-xl'} ${aspect}`}>
        {video ? (
          <video
            ref={vid}
            src={sitePath(video)}
            poster={poster ? sitePath(poster) : undefined}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        ) : (
         <img
            src={sitePath(src)}
            alt={alt}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover"
          />
        )}
        <div className="shine pointer-events-none absolute inset-0" />
        {video && !playing && (
          <span className="absolute bottom-2 right-2 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-sm text-rose shadow">▶</span>
        )}
      </div>
      {!round && <figcaption className="pt-1.5 text-center text-lg leading-none">{emoji}</figcaption>}
      {sparks.map((s) => (
        <span key={s.id} className="spark text-xl" style={{ '--dx': `${s.dx}px`, '--dy': `${s.dy}px` }}>
          {s.e}
        </span>
      ))}
    </figure>
  )
}







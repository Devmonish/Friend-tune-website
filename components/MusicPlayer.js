'use client'
import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer() {
  const audio = useRef(null)
  const pausedByUser = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [needsTap, setNeedsTap] = useState(false)

  useEffect(() => {
    const a = audio.current
    a.volume = 0.6
    const sync = () => setPlaying(!a.paused)
    a.addEventListener('play', sync)
    a.addEventListener('pause', sync)

    // Try to autoplay; browsers often block it until the first tap.
    a.play().catch(() => setNeedsTap(true))

    // If blocked, the very first interaction anywhere starts the tune.
    const first = () => {
      if (!pausedByUser.current && a.paused) a.play().then(() => setNeedsTap(false)).catch(() => {})
      ;['pointerdown', 'keydown', 'touchstart'].forEach((ev) => window.removeEventListener(ev, first))
    }
    ;['pointerdown', 'keydown', 'touchstart'].forEach((ev) => window.addEventListener(ev, first))

    return () => {
      a.removeEventListener('play', sync)
      a.removeEventListener('pause', sync)
      ;['pointerdown', 'keydown', 'touchstart'].forEach((ev) => window.removeEventListener(ev, first))
    }
  }, [])

  const toggle = () => {
    const a = audio.current
    if (a.paused) {
      pausedByUser.current = false
      a.play().catch(() => {})
    } else {
      pausedByUser.current = true
      a.pause()
    }
  }

  const openSurprise = () => {
    audio.current.play().catch(() => {})
    setNeedsTap(false)
  }

  return (
    <>
      <audio ref={audio} src="/audio/bgm.mp3" loop preload="auto" />

      {needsTap && (
        <button
          onClick={openSurprise}
          className="fixed inset-0 z-[60] grid place-items-center bg-plum/80 backdrop-blur-md"
          aria-label="Open the surprise and start the music"
        >
          <span className="flex flex-col items-center gap-4 text-white">
            <span className="text-7xl animate-bounce">🎁</span>
            <span className="hand text-5xl">Tap to open your surprise</span>
            <span className="text-sm opacity-70">music on 🎶</span>
          </span>
        </button>
      )}

      <button
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        className="fixed right-4 top-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-white/85 text-2xl shadow-card backdrop-blur transition hover:scale-110"
      >
        <span style={playing ? { animation: 'spin 6s linear infinite' } : undefined}>{playing ? '🎵' : '🔇'}</span>
      </button>
    </>
  )
}

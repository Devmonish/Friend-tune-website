'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const pages = [
  { href: '/', label: 'Hello' },
  { href: '/pole-star', label: 'Pole star' },
  { href: '/creation', label: 'Creation' },
  { href: '/moments', label: 'Moments' },
  { href: '/blessings', label: 'Blessings' },
]

export default function PageNav() {
  const path = usePathname()
  const i = Math.max(0, pages.findIndex((p) => p.href === path))
  const prev = pages[i - 1]
  const isLast = i === pages.length - 1
  const next = isLast ? pages[0] : pages[i + 1]

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/85 px-3 py-2 shadow-card backdrop-blur">
      {prev ? (
        <Link href={prev.href} aria-label={`Back to ${prev.label}`} className="grid h-9 w-9 place-items-center rounded-full text-2xl text-plum transition hover:bg-blush">
          ‹
        </Link>
      ) : (
        <span className="w-9" />
      )}
      <div className="flex items-center gap-1.5">
        {pages.map((p, idx) => (
          <Link
            key={p.href}
            href={p.href}
            aria-label={p.label}
            title={p.label}
            className={`h-2.5 rounded-full transition-all ${idx === i ? 'w-6 bg-rose' : 'w-2.5 bg-plum/25 hover:bg-plum/50'}`}
          />
        ))}
      </div>
      <Link href={next.href} className="rounded-full bg-rose px-4 py-1.5 font-semibold text-white transition hover:scale-105">
        {isLast ? 'Start again ↺' : 'Next ›'}
      </Link>
    </nav>
  )
}

import Backdrop from '@/components/Backdrop'
import TiltPhoto from '@/components/TiltPhoto'

// type: 'img' | 'vid'. Videos are muted and play on hover (tap on phones).
const items = [
  { type: 'img', src: '/images/peach.jpg', aspect: 'aspect-[2/3]', rotate: -2, emoji: '🌷' },
  { type: 'vid', src: '/videos/clip1.mp4', poster: '/images/clip1.jpg', aspect: 'aspect-[9/16]', rotate: 3, emoji: '🎬' },
  { type: 'img', src: '/images/garba.jpg', aspect: 'aspect-[3/4]', rotate: 2, emoji: '💃' },
  { type: 'vid', src: '/videos/clip3.mp4', poster: '/images/clip3.jpg', aspect: 'aspect-[9/16]', rotate: -3, emoji: '🎀' },
  { type: 'img', src: '/images/thumbs.jpg', aspect: 'aspect-[3/4]', rotate: -3, emoji: '👍' },
  { type: 'img', src: '/images/hair.jpg', aspect: 'aspect-square', rotate: 4, emoji: '🌿' },
  { type: 'vid', src: '/videos/clip2.mp4', poster: '/images/clip2.jpg', aspect: 'aspect-[9/16]', rotate: 2, emoji: '✨' },
  { type: 'img', src: '/images/fence.jpg', aspect: 'aspect-[3/4]', rotate: -2, emoji: '💫' },
]

export default function Moments() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-mint via-lilac to-blush">
      <Backdrop kind="petals" emojis={['🌼', '🌸', '✨', '💗']} />
      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-36 pt-16">
        <h1 className="hand text-center text-6xl">Little moments</h1>
        <p className="mx-auto mt-3 max-w-sm text-center text-plum/70">Hover over a photo or a video to bring it to life (tap on a phone).</p>

        <div className="mt-12 columns-2 gap-5 sm:gap-8 md:columns-3">
          {items.map((it, i) => (
            <div key={i} className="mb-6 break-inside-avoid sm:mb-8">
              <TiltPhoto
                src={it.type === 'img' ? it.src : undefined}
                video={it.type === 'vid' ? it.src : undefined}
                poster={it.poster}
                aspect={it.aspect}
                rotate={it.rotate}
                emoji={it.emoji}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}







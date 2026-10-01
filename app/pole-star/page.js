import Backdrop from '@/components/Backdrop'
import TiltPhoto from '@/components/TiltPhoto'

const rings = [
  { inset: 'inset-0', dur: '40s', stars: [['⭐', 'left-1/2 -top-3'], ['✨', 'right-4 bottom-10']] },
  { inset: 'inset-[11%]', dur: '26s', reverse: true, stars: [['✨', 'left-0 top-1/2'], ['⭐', 'right-1/4 -bottom-3']] },
  { inset: 'inset-[22%]', dur: '16s', stars: [['💫', 'left-1/2 -top-3'], ['✨', 'left-2 bottom-1/4']] },
]

export default function PoleStar() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1B0B33] via-[#3A1B5E] to-[#6B2F73] text-white">
      <Backdrop kind="stars" />
      <main className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center px-6 pb-32 pt-16 text-center">
        <h1 className="text-5xl font-semibold sm:text-6xl">You are a pole star</h1>

        {/* She stays fixed; the other stars rotate around her. */}
        <div className="relative my-10 h-[20rem] w-[20rem] sm:h-[28rem] sm:w-[28rem]">
          <div className="breathe absolute inset-[25%] rounded-full bg-marigold/40 blur-3xl" />
          {rings.map((r, i) => (
            <div
              key={i}
              className={`absolute ${r.inset} rounded-full border border-white/20`}
              style={{ animation: `orbit ${r.dur} linear infinite ${r.reverse ? 'reverse' : ''}` }}
            >
              {r.stars.map(([s, pos], k) => (
                <span key={k} className={`absolute text-2xl ${pos}`}>{s}</span>
              ))}
            </div>
          ))}
          <div className="absolute inset-0 grid place-items-center">
            <TiltPhoto variant="round" aspect="aspect-square" src="/images/peach.jpg" alt="Smiling in a peach suit" className="w-[38%]" />
          </div>
        </div>

        <p className="hand max-w-md text-3xl leading-snug text-blush sm:text-4xl">
          A bright star that closest to a planet
          <br />
          Stays fixed in night sky
          <br />
          While other stars appear to rotate around it.
        </p>
      </main>
    </div>
  )
}

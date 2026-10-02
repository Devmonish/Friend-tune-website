import Link from 'next/link'
import Backdrop from '@/components/Backdrop'
import BouncyText from '@/components/BouncyText'
import TiltPhoto from '@/components/TiltPhoto'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-lilac via-blush to-petal">
      <Backdrop kind="petals" />
      <main className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-32 pt-20 lg:grid-cols-2">
        <section className="relative text-center lg:text-left">
          {/* slow breathing glow: "take a deep breath" */}
          <div className="breathe absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/40 blur-3xl lg:left-1/3" />
          <div className="relative">
            <h1 className="text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              <BouncyText text="Hello, Beautiful!" />
            </h1>
            <p className="mx-auto mt-6 max-w-md text-xl leading-relaxed text-plum/80 lg:mx-0">
              Welcome to a little space created just for you. Take a deep breath, smile, and let's explore.
            </p>
            <Link
              href="/pole-star"
              className="mt-8 inline-block rounded-full bg-rose px-8 py-3 text-lg font-semibold text-white shadow-card transition hover:scale-105 hover:bg-plum"
            >
              Let's explore
            </Link>
          </div>
        </section>

        <section className="relative mx-auto h-[26rem] w-full max-w-md sm:h-[32rem]">
          <TiltPhoto src="/images/peach.jpg" alt="Smiling in a peach suit" aspect="aspect-[2/3]" rotate={3} emoji="🌷" className="absolute left-[28%] top-0 w-[46%]" />
          <TiltPhoto src="/images/thumbs.jpg" alt="Two thumbs up" rotate={-7} emoji="👍" className="absolute left-0 top-[36%] w-[40%]" />
          <TiltPhoto src="/images/garba.jpg" alt="Dancing garba" rotate={6} emoji="💃" className="absolute right-0 top-[42%] w-[40%]" />
        </section>
      </main>
    </div>
  )
}







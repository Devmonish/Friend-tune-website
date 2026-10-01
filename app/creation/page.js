import Backdrop from '@/components/Backdrop'
import BouncyText from '@/components/BouncyText'
import TiltPhoto from '@/components/TiltPhoto'
import WishSparkle from '@/components/WishSparkle'

export default function Creation() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blush via-petal to-lilac">
      <Backdrop kind="petals" emojis={['✨', '🌸', '💖', '⭐']} />
      <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center px-6 pb-32 pt-16 text-center">
        <p className="hand text-4xl text-plum/80 sm:text-5xl">A small try to cheer you up</p>
        <h1 className="mt-4 text-5xl font-semibold leading-tight sm:text-7xl">
          <BouncyText text="Shristi.... A creation Right!!" />
        </h1>
        <p className="hand mt-6 text-4xl text-rose sm:text-5xl">Gods favorite creation !!!</p>

        <div className="my-12 flex w-full flex-wrap items-start justify-center gap-6">
          <TiltPhoto src="/images/garba.jpg" alt="Dancing garba" rotate={-5} emoji="💃" className="w-44 sm:w-56" />
          <TiltPhoto src="/images/thumbs.jpg" alt="Two thumbs up" rotate={3} emoji="👍" className="mt-8 w-44 sm:w-56" />
          <TiltPhoto src="/images/fence.jpg" alt="Walking by the sports ground" rotate={-2} emoji="🌿" className="w-44 sm:w-56" />
        </div>

        <p className="text-3xl font-medium sm:text-4xl">
          All the wishes comes true <WishSparkle />
        </p>
      </main>
    </div>
  )
}

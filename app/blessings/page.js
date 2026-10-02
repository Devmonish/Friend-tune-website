import Backdrop from '@/components/Backdrop'
import TiltPhoto from '@/components/TiltPhoto'

const mantra = ['Om Krishnaya Vasudevaya', 'Haraye Parmatmae', 'Pranatah Kleshanashaya', 'Govindaya Namo Namah']

export default function Blessings() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-petal via-[#FFD9A8] to-marigold/70">
      <Backdrop kind="petals" emojis={['🌷', '🌼', '✨', '🪷']} />
      <main className="relative z-10 mx-auto max-w-3xl px-6 pb-36 pt-16">
        <section className="relative rounded-[2rem] bg-white/70 p-8 shadow-card backdrop-blur sm:p-12">
          <TiltPhoto src="/images/hair.jpg" alt="Hair blowing in the breeze" aspect="aspect-square" rotate={6} emoji="🌷" className="absolute -right-3 -top-12 w-28 sm:-right-10 sm:w-36" />
          <p className="text-xl leading-relaxed sm:text-2xl">
            Whenever you feel overwhelmed, remember how much light you bring into this world. Your name itself means creation, and you are constantly creating joy, love, and wonderful moments for everyone around you. Keep smiling, keep shining, and know that you are deeply appreciated exactly as you are. You've got this! 🌷
          </p>
        </section>

        <section className="relative mt-16 text-center">
          <div className="breathe absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-marigold blur-3xl" />
          <div className="relative">
            <div className="text-5xl">🪔</div>
            <div className="hand mt-4 space-y-2 text-4xl text-plum sm:text-5xl">
              {mantra.map((l, i) => (
                <p key={l} className="line" style={{ '--i': i }}>{l}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}







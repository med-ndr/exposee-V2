import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Mask, Columns } from './Illustrations'

const title = 'ANTIGONE'.split('')

export default function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const maskY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 140])
  const colsY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 60])
  const fade = useTransform(scrollY, [0, 500], [1, 0])

  const go = () => document.getElementById('auteur')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-obsidian">
      {/* Atmosphère */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_30%,rgba(84,28,43,0.75),transparent_60%)]" />
      <div className="vignette absolute inset-0 -z-10" />

      <motion.div style={{ y: maskY }} className="absolute right-[-12%] top-[8%] -z-10 w-[85vw] max-w-[620px] opacity-45 sm:right-[2%] sm:opacity-70 lg:right-[6%]">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="drop-shadow-[0_0_60px_rgba(198,161,91,0.25)]"
        >
          <Mask className="w-full" />
        </motion.div>
      </motion.div>

      <motion.div style={{ y: colsY }} className="absolute inset-x-0 bottom-0 -z-10 h-[38vh] opacity-60">
        <Columns className="h-full w-full" count={8} />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-obsidian to-transparent" />

      <motion.div style={{ opacity: fade }} className="mx-auto w-full max-w-7xl px-5 pb-24 pt-28 md:px-8">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.4em] text-gold"
        >
          <span className="h-px w-12 bg-gold" /> 1944 · Théâtre de l’Atelier, Paris
        </motion.p>

        <h1 className="font-display text-[clamp(3.2rem,16vw,12rem)] font-medium leading-[0.9] tracking-[0.04em] text-ivory" aria-label="Antigone">
          {title.map((l, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden="true">
              <motion.span
                className="inline-block"
                initial={reduce ? false : { y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.45 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9 }}
          className="mt-8 max-w-xl"
        >
          <p className="font-display text-2xl italic text-gold-soft md:text-3xl">Une tragédie de Jean Anouilh</p>
          <p className="mt-5 text-base text-ivory/75 md:text-lg">
            Une jeune fille face à un roi. Elle veut enterrer son frère, il veut faire respecter sa loi.
            Découvrez l’histoire, les personnages et les idées d’une pièce qui pose encore des questions aujourd’hui.
          </p>

          <motion.button
            onClick={go}
            whileHover={{ x: 6 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-10 inline-flex items-center gap-4 border border-gold px-7 py-4 text-[12px] font-medium uppercase tracking-[0.28em] text-gold transition-colors hover:bg-gold hover:text-obsidian"
          >
            Découvrir l’œuvre
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={go}
        aria-label="Faire défiler vers la section suivante"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-muted"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      >
        Défiler
        <ChevronDown size={18} className="text-gold" />
      </motion.button>
    </section>
  )
}

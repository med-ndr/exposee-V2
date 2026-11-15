import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import { Mask, Columns } from './Illustrations'

const pillars = [
  { t: 'Liberté', d: 'Pouvoir choisir et dire non.' },
  { t: 'Autorité', d: 'Faire respecter l’ordre commun.' },
  { t: 'Responsabilité', d: 'Assumer les conséquences de ses actes.' },
]

export default function Conclusion() {
  const reduce = useReducedMotion()
  return (
    <section id="conclusion" className="relative isolate overflow-hidden bg-obsidian py-28 md:py-44">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_40%,rgba(84,28,43,0.6),transparent_65%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[40%] opacity-40"><Columns className="h-full w-full" count={8} /></div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-obsidian to-transparent" />

      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-6 flex items-center justify-center gap-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-10 bg-gold" /> Conclusion <span className="h-px w-10 bg-gold" />
          </p>
          <motion.div
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="mx-auto mb-10 w-28 drop-shadow-[0_0_40px_rgba(198,161,91,0.3)]"
          >
            <Mask className="w-full" />
          </motion.div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto max-w-3xl text-lg text-ivory/80 md:text-xl">
            Antigone reste une pièce majeure parce qu’elle pose une question toujours actuelle : que faire quand sa conscience s’oppose à la loi ?
            Antigone défend sa liberté jusqu’au bout. Créon défend l’ordre et assume le poids du pouvoir. Aucun des deux ne cède, et la tragédie devient inévitable.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-3xl gap-px bg-gold/25 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={0.1 * i} className="bg-obsidian p-6">
              <h3 className="font-display text-2xl text-gold">{p.t}</h3>
              <p className="mt-2 text-sm text-ivory/70">{p.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20">
          <div className="gold-rule mx-auto mb-12 max-w-md" />
          <blockquote className="font-display text-3xl italic leading-tight text-ivory sm:text-4xl md:text-6xl">
            Antigone nous rappelle que certaines convictions sont plus fortes que la peur.
          </blockquote>
          <div className="gold-rule mx-auto mt-12 max-w-md" />
        </Reveal>
      </div>
    </section>
  )
}

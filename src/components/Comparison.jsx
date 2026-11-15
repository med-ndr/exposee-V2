import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { Balance } from './Illustrations'
import { comparison } from '../data/content'

export default function Comparison() {
  const [index, setIndex] = useState(0)
  const [focus, setFocus] = useState(null)
  const current = comparison[index]
  const tilt = focus === 'a' ? -9 : focus === 'c' ? 9 : 0

  return (
    <section id="comparaison" className="relative overflow-hidden bg-obsidian py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle num="08" kicker="Antigone vs Créon" title="Le duel des idées" intro="Choisissez une opposition, puis survolez ou touchez chaque camp pour faire pencher la balance." />

        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          {/* Sélecteur */}
          <div role="tablist" aria-label="Oppositions" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible no-scrollbar">
            {comparison.map((c, i) => (
              <button
                key={c.a}
                role="tab"
                aria-selected={index === i}
                onClick={() => setIndex(i)}
                className={`shrink-0 border px-5 py-4 text-left transition-colors ${
                  index === i ? 'border-gold bg-gold text-obsidian' : 'border-gold/30 text-ivory hover:border-gold'
                }`}
              >
                <span className="block text-[10px] uppercase tracking-[0.25em] opacity-70">0{i + 1}</span>
                <span className="mt-1 block whitespace-nowrap font-display text-lg lg:whitespace-normal">
                  {c.a} <span className="opacity-60">/</span> {c.c}
                </span>
              </button>
            ))}
          </div>

          {/* Scène */}
          <div>
            <div className="mx-auto mb-6 h-36 w-64 sm:h-44 sm:w-80"><Balance tilt={tilt} /></div>

            <div className="relative grid md:grid-cols-2" onMouseLeave={() => setFocus(null)}>
              <span className="absolute left-1/2 top-0 hidden h-full w-px bg-gold/40 md:block" />
              {[
                { key: 'a', who: 'Antigone', word: current.a, text: current.aText, tone: 'from-burgundy to-burgundy-deep' },
                { key: 'c', who: 'Créon', word: current.c, text: current.cText, tone: 'from-obsidian-soft to-black' },
              ].map((side) => (
                <motion.button
                  key={side.key}
                  type="button"
                  onMouseEnter={() => setFocus(side.key)}
                  onFocus={() => setFocus(side.key)}
                  onBlur={() => setFocus(null)}
                  onClick={() => setFocus(focus === side.key ? null : side.key)}
                  animate={{ opacity: focus && focus !== side.key ? 0.55 : 1 }}
                  transition={{ duration: 0.4 }}
                  className={`relative min-h-[260px] bg-gradient-to-b ${side.tone} p-8 text-left md:p-12`}
                >
                  <p className="text-[11px] uppercase tracking-[0.35em] text-gold">{side.who}</p>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index + side.key}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="mt-6 font-display text-4xl text-ivory md:text-5xl">{side.word}</p>
                      <p className="mt-5 max-w-sm text-ivory/80">{side.text}</p>
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              ))}
              <span className="absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-gold bg-obsidian font-display text-lg text-gold md:flex">
                VS
              </span>
            </div>

            {/* Tableau récapitulatif */}
            <div className="mt-10 overflow-hidden border border-gold/25">
              <table className="w-full text-left text-sm md:text-base">
                <caption className="sr-only">Résumé des oppositions entre Antigone et Créon</caption>
                <thead>
                  <tr className="bg-burgundy-deep/60 text-[11px] uppercase tracking-[0.25em] text-gold">
                    <th scope="col" className="p-4">Antigone</th>
                    <th scope="col" className="p-4">Créon</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((c, i) => (
                    <tr
                      key={c.a}
                      onClick={() => setIndex(i)}
                      className={`cursor-pointer border-t border-gold/15 transition-colors ${index === i ? 'bg-gold/10 text-gold-soft' : 'hover:bg-white/5'}`}
                    >
                      <td className="p-4 font-display text-xl">{c.a}</td>
                      <td className="p-4 font-display text-xl">{c.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

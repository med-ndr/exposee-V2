import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { author } from '../data/content'

export default function Author() {
  return (
    <section id="auteur" className="relative overflow-hidden bg-obsidian py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle num="02" kicker="L’auteur" title="Jean Anouilh" intro="Un homme de théâtre qui a donné une voix moderne aux grandes histoires de l’Antiquité." />

        <div className="grid gap-16 lg:grid-cols-12">
          {/* Portrait symbolique */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 translate-x-4 translate-y-4 border border-gold/30" />
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-burgundy-deep to-obsidian">
                <svg viewBox="0 0 320 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <path d="M40 400V170a120 120 0 0 1 240 0v230Z" fill="#101010" stroke="#C6A15B" strokeOpacity="0.5" />
                  <path d="M62 400V176a98 98 0 0 1 196 0v224Z" fill="none" stroke="#C6A15B" strokeOpacity="0.25" />
                  <text x="160" y="215" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="110" fill="none" stroke="#C6A15B" strokeWidth="1.2">JA</text>
                </svg>
                <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                  <p className="font-display text-2xl text-ivory">1910 — 1987</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-gold">Bordeaux · Lausanne</p>
                </div>
              </div>
              <p className="mt-6 text-center text-xs text-muted">Portrait symbolique : monogramme de l’auteur.</p>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-2xl italic leading-snug text-gold-soft md:text-3xl">{author.fullName}</p>
              <dl className="mt-8 grid grid-cols-2 gap-px bg-gold/20 sm:grid-cols-4">
                {author.facts.map((f) => (
                  <div key={f.label} className="bg-obsidian p-4">
                    <dt className="text-[10px] uppercase tracking-[0.25em] text-muted">{f.label}</dt>
                    <dd className="mt-1 font-display text-xl text-ivory">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <h3 className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">Parcours littéraire</h3>
              <p className="text-ivory/80 md:text-lg">{author.career}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Œuvres principales</h3>
                <ul className="divide-y divide-gold/15 border-y border-gold/15">
                  {author.works.map((w) => (
                    <li key={w.title} className="flex items-baseline justify-between gap-4 py-3">
                      <span className="font-display text-xl text-ivory">{w.title}</span>
                      <span className="text-xs tracking-widest text-gold">{w.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Style littéraire</h3>
                <ul className="space-y-3 text-ivory/80">
                  {author.style.map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Frise chronologique */}
        <div className="mt-24">
          <h3 className="mb-10 text-sm uppercase tracking-[0.3em] text-gold">Chronologie</h3>
          <div className="no-scrollbar -mx-5 overflow-x-auto px-5 pb-4 md:mx-0 md:px-0">
            <ol className="relative flex min-w-[900px] justify-between md:min-w-0">
              <span className="absolute left-0 right-0 top-[7px] h-px bg-gold/40" />
              {author.timeline.map((t, i) => (
                <motion.li
                  key={t.year}
                  className="relative w-40 shrink-0 pr-4 md:w-auto md:flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                >
                  <span className="relative z-10 mb-5 block h-3.5 w-3.5 rotate-45 border border-gold bg-obsidian" />
                  <p className="font-display text-3xl text-gold">{t.year}</p>
                  <p className="mt-2 text-sm text-ivory/70">{t.text}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

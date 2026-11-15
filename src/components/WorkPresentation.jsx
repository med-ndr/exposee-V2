import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { Mask, Laurel } from './Illustrations'
import { work } from '../data/content'

export default function WorkPresentation() {
  return (
    <section id="oeuvre" className="relative overflow-hidden bg-obsidian-soft py-28 md:py-40">
      <div className="meander absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle num="03" kicker="Présentation de l’œuvre" title="Une tragédie moderne" intro="Anouilh reprend un mythe grec et l’adapte à son époque, en 1944." />

        <div className="grid items-start gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="relative border border-gold/30 p-8">
              <Mask className="mx-auto w-40 opacity-90" />
              <Laurel className="mx-auto mt-6 w-40" />
              <dl className="mt-6 space-y-4">
                {work.facts.map((f) => (
                  <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-gold/15 pb-3">
                    <dt className="text-[10px] uppercase tracking-[0.25em] text-muted">{f.label}</dt>
                    <dd className="text-right font-display text-xl text-ivory">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="space-y-10 lg:col-span-8 lg:pl-8">
            {work.context.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article className="grid gap-4 border-t border-gold/25 pt-6 md:grid-cols-[180px_1fr]">
                  <h3 className="font-display text-2xl text-gold">{c.title}</h3>
                  <p className="text-ivory/80 md:text-lg">{c.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20">
          <h3 className="mb-8 text-center font-display text-3xl text-ivory md:text-4xl">{work.difference.title}</h3>
          <div className="grid gap-px bg-gold/25 md:grid-cols-2">
            <div className="bg-obsidian-soft p-8">
              <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-gold">Le mythe et Sophocle</p>
              <ul className="space-y-3 text-ivory/75">
                {work.difference.myth.map((t) => (
                  <li key={t} className="flex gap-3"><span className="mt-2.5 h-px w-5 shrink-0 bg-muted" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-burgundy-deep/50 p-8">
              <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-gold">La pièce d’Anouilh (1944)</p>
              <ul className="space-y-3 text-ivory/85">
                {work.difference.anouilh.map((t) => (
                  <li key={t} className="flex gap-3"><span className="mt-2.5 h-px w-5 shrink-0 bg-gold" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

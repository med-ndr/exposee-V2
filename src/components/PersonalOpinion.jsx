import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { Laurel } from './Illustrations'
import { opinion } from '../data/content'

export default function PersonalOpinion() {
  return (
    <section id="avis" className="relative overflow-hidden bg-obsidian-soft py-28 md:py-40">
      <div className="meander absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle num="09" kicker="Message et avis personnel" title="Ce que la pièce nous dit" />

        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-gold">Le message de la pièce</h3>
            <ul className="space-y-6">
              {opinion.message.map((m, i) => (
                <li key={m} className="flex gap-5">
                  <span className="font-display text-4xl leading-none text-gold">{i + 1}</span>
                  <p className="pt-1 text-lg text-ivory/85">{m}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative border border-gold/30 bg-obsidian p-8 md:p-12">
              <span aria-hidden="true" className="absolute -top-6 left-8 bg-obsidian-soft px-3 font-display text-7xl leading-none text-gold">“</span>
              <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-gold">Mon avis personnel</h3>
              <div className="space-y-5 font-display text-xl leading-relaxed text-ivory/90 md:text-2xl">
                {opinion.personal.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <Laurel className="mt-8 w-32" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

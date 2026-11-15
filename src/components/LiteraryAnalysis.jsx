import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { Balance } from './Illustrations'
import { analysisBlocks } from '../data/content'

export default function LiteraryAnalysis() {
  return (
    <section id="analyse" className="relative overflow-hidden bg-obsidian-soft py-28 md:py-40">
      <div className="meander absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle num="07" kicker="Analyse littéraire" title="Comprendre la tragédie" intro="Six clés de lecture pour analyser la pièce.">
        </SectionTitle>

        {/* Diagramme du conflit */}
        <Reveal className="mb-20">
          <div className="grid items-center gap-8 border border-gold/25 p-6 md:grid-cols-[1fr_260px_1fr] md:p-10">
            <div className="text-center md:text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Force individuelle</p>
              <p className="mt-2 font-display text-4xl text-ivory">Conscience</p>
              <p className="mt-2 text-sm text-muted">Antigone</p>
            </div>
            <div className="mx-auto h-40 w-64"><Balance tilt={-4} /></div>
            <div className="text-center md:text-left">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Force collective</p>
              <p className="mt-2 font-display text-4xl text-ivory">Autorité</p>
              <p className="mt-2 text-sm text-muted">Créon</p>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted">Le conflit central : deux forces qui s’affrontent sans pouvoir s’entendre.</p>
        </Reveal>

        {/* Blocs asymétriques */}
        <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
          {analysisBlocks.map((b, i) => (
            <motion.article
              key={b.n}
              className={`relative border-t border-gold/30 pt-6 ${i % 2 === 1 ? 'md:mt-16' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-display text-5xl text-gold">{b.n}</span>
              <h3 className="mt-3 font-display text-3xl text-ivory md:text-4xl">{b.title}</h3>
              <p className="mt-4 text-ivory/75 md:text-lg">{b.text}</p>
            </motion.article>
          ))}
        </div>

        {/* Schéma de la mécanique tragique */}
        <Reveal className="mt-24">
          <h3 className="mb-8 text-center text-sm uppercase tracking-[0.3em] text-gold">La mécanique de la tragédie</h3>
          <ol className="grid gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-5">
            {['Le conflit éclate', 'Chacun défend sa raison', 'Le dialogue échoue', 'Les morts s’enchaînent', 'Le silence retombe'].map((s, i) => (
              <li key={s} className="relative bg-obsidian-soft p-6 text-center">
                <span className="font-display text-3xl text-gold">{i + 1}</span>
                <p className="mt-2 text-sm text-ivory/80">{s}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

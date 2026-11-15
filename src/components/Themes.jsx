import { motion } from 'framer-motion'
import { Feather, Flame, Crown, Users, Compass, Hourglass, Skull } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { themes } from '../data/themes'

const icons = { Feather, Flame, Crown, Users, Compass, Hourglass, Skull }

// Un traitement visuel différent pour chaque thème
const treatments = [
  'md:col-span-2 bg-gradient-to-br from-obsidian-soft to-burgundy-deep/60',
  'bg-burgundy-deep',
  'bg-obsidian-soft border border-gold/40',
  'bg-obsidian-soft',
  'bg-gradient-to-tr from-burgundy-deep/70 to-obsidian-soft',
  'bg-obsidian-soft border border-gold/20',
  'md:col-span-2 bg-gradient-to-r from-black via-burgundy-deep/50 to-black',
]

export default function Themes() {
  return (
    <section id="themes" className="relative overflow-hidden bg-obsidian py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle num="06" kicker="Les thèmes principaux" title="Sept idées qui traversent la pièce" intro="Chaque thème éclaire un aspect du conflit entre Antigone et Créon." />

        <div className="grid gap-4 md:grid-cols-3">
          {themes.map((t, i) => {
            const Icon = icons[t.icon]
            return (
              <motion.article
                key={t.id}
                className={`group relative overflow-hidden p-8 ${treatments[i]}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <span aria-hidden="true" className="text-outline-gold pointer-events-none absolute -bottom-6 right-2 font-display text-[8rem] leading-none opacity-60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="relative">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center border border-gold/60 text-gold transition-colors group-hover:bg-gold group-hover:text-obsidian">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{t.mood}</p>
                  <h3 className="mt-2 font-display text-3xl text-ivory md:text-4xl">{t.name}</h3>
                  <p className="mt-4 max-w-xl text-ivory/75">{t.text}</p>
                  <p className="mt-5 border-t border-gold/25 pt-4 text-sm text-gold-soft">
                    <span className="mr-2 text-[10px] uppercase tracking-[0.25em] text-muted">Dans la pièce</span>
                    {t.inPlay}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

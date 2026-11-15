import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionTitle from './SectionTitle'
import CharacterModal from './CharacterModal'
import { characters } from '../data/characters'

export default function Characters() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="personnages" className="relative overflow-hidden bg-obsidian-soft py-28 md:py-40">
      <div className="meander absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle num="05" kicker="Les personnages" title="Neuf destins" intro="Cliquez sur un personnage pour découvrir sa personnalité, ses relations et son analyse." />

        <div className="grid gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-3">
          {characters.map((c, i) => (
            <motion.button
              key={c.id}
              onClick={() => setSelected(c)}
              aria-haspopup="dialog"
              className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden bg-obsidian-soft p-7 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              whileHover="hover"
            >
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 bg-burgundy-deep"
                initial={{ opacity: 0 }}
                variants={{ hover: { opacity: 1 } }}
                transition={{ duration: 0.4 }}
              />
              <span
                aria-hidden="true"
                className="text-outline-gold pointer-events-none absolute -right-2 -top-6 font-display text-[9rem] leading-none transition-opacity group-hover:opacity-100"
              >
                {c.initials}
              </span>
              <span className="relative text-[10px] uppercase tracking-[0.3em] text-gold">{c.role}</span>
              <span className="relative">
                <span className="block font-display text-4xl text-ivory md:text-5xl">{c.name}</span>
                <span className="mt-2 block text-sm italic text-muted transition-colors group-hover:text-ivory/80">{c.tagline}</span>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-gold">
                  Voir le profil
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <CharacterModal character={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

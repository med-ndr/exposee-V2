import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { SceneArt } from './Illustrations'
import { story } from '../data/content'

export default function StorySummary() {
  return (
    <section id="resume" className="relative overflow-hidden bg-obsidian py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle num="04" kicker="Résumé de l’histoire" title="Cinq actes d’un destin" intro="De la querelle des frères à la solitude du roi : l’histoire en cinq étapes." />

        <div className="relative">
          <span className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent md:left-1/2" />
          <ol className="space-y-20 md:space-y-28">
            {story.map((s, i) => {
              const right = i % 2 === 1
              return (
                <motion.li
                  key={s.n}
                  className="relative grid items-center gap-8 pl-12 md:grid-cols-2 md:gap-20 md:pl-0"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="absolute left-4 top-3 z-10 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border border-gold bg-obsidian md:left-1/2 md:top-1/2 md:-translate-y-1/2" />
                  <div className={`${right ? 'md:order-2' : ''}`}>
                    <div className="mx-auto aspect-[4/3] max-w-md overflow-hidden">
                      <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.8 }} className="h-full w-full">
                        <SceneArt kind={s.scene} />
                      </motion.div>
                    </div>
                  </div>
                  <div className={`${right ? 'md:order-1 md:text-right' : ''}`}>
                    <p className="font-display text-6xl text-outline-gold md:text-8xl">{s.n}</p>
                    <h3 className="mt-2 font-display text-3xl text-ivory md:text-4xl">{s.title}</h3>
                    <p className="mt-4 text-ivory/75 md:text-lg">{s.text}</p>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

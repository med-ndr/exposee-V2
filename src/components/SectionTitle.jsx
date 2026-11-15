import { motion, useReducedMotion } from 'framer-motion'

export default function SectionTitle({ num, kicker, title, intro, align = 'left' }) {
  const reduce = useReducedMotion()
  const words = title.split(' ')
  return (
    <header className={`relative mb-14 md:mb-20 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'}`}>
      <span
        aria-hidden="true"
        className="text-outline-gold pointer-events-none absolute -top-12 right-0 select-none font-display text-[7rem] leading-none sm:text-[10rem] md:-top-16 md:text-[13rem]"
        style={align === 'center' ? { left: '50%', transform: 'translateX(-50%)' } : undefined}
      >
        {num}
      </span>
      <div className="relative">
        <p className={`mb-5 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-10 bg-gold" /> {kicker}
        </p>
        <h2 className="font-display text-4xl text-ivory sm:text-5xl md:text-7xl">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
              <motion.span
                className="inline-block"
                initial={reduce ? false : { y: '110%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}&nbsp;
              </motion.span>
            </span>
          ))}
        </h2>
        {intro && <p className="mt-6 max-w-2xl text-base text-muted md:text-lg">{intro}</p>}
      </div>
    </header>
  )
}

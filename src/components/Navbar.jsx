import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { sections } from '../data/content'

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const links = sections.filter((s) => s.id !== 'hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id) => {
    setOpen(false)
    // petit délai pour laisser le menu mobile libérer le scroll
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 60)
  }

  return (
    <>
      <nav
        aria-label="Navigation principale"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-gold/20 bg-obsidian/85 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <button
            onClick={() => go('hero')}
            className="font-display text-xl tracking-[0.3em] text-ivory"
            aria-label="Retour à l’accueil"
          >
            ANTIGONE
          </button>

          <ul className="hidden items-center gap-6 xl:flex">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={`relative py-2 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors hover:text-gold ${
                    active === l.id ? 'text-gold' : 'text-ivory/70'
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span layoutId="nav-underline" className="absolute inset-x-0 -bottom-0.5 h-px bg-gold" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="flex h-11 w-11 items-center justify-center text-ivory xl:hidden"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-obsidian"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="vignette absolute inset-0" />
            <div className="relative flex h-16 items-center justify-between px-5">
              <span className="font-display text-xl tracking-[0.3em] text-ivory">ANTIGONE</span>
              <button className="flex h-11 w-11 items-center justify-center text-ivory" onClick={() => setOpen(false)} aria-label="Fermer le menu">
                <X size={26} />
              </button>
            </div>
            <ul className="relative flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-8 pb-10">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <button
                    onClick={() => go(l.id)}
                    className={`flex w-full items-baseline gap-4 py-2 text-left font-display text-3xl ${
                      active === l.id ? 'text-gold' : 'text-ivory'
                    }`}
                  >
                    <span className="text-xs tracking-widest text-gold/70">{String(i + 2).padStart(2, '0')}</span>
                    {l.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

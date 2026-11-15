import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function CharacterModal({ character, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!character) return
    const previous = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        // piège à focus minimal : le bouton fermer reste l’unique élément focusable
        e.preventDefault()
        closeRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus?.()
    }
  }, [character, onClose])

  return (
    <AnimatePresence>
      {character && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm md:items-center md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="char-title"
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92svh] w-full max-w-4xl overflow-y-auto border border-gold/40 bg-obsidian md:max-h-[88vh]"
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Fermer la fiche du personnage"
              className="sticky right-0 top-0 z-20 float-right m-3 flex h-11 w-11 items-center justify-center border border-gold/40 bg-obsidian text-gold transition-colors hover:bg-gold hover:text-obsidian"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-[280px_1fr]">
              <div className="relative overflow-hidden bg-gradient-to-b from-burgundy to-burgundy-deep p-8 md:min-h-[460px]">
                <span aria-hidden="true" className="text-outline-gold absolute -bottom-10 -left-4 font-display text-[14rem] leading-none">
                  {character.initials}
                </span>
                <p className="relative text-[10px] uppercase tracking-[0.3em] text-gold-soft">{character.role}</p>
                <h3 id="char-title" className="relative mt-3 font-display text-5xl text-ivory">{character.name}</h3>
                <p className="relative mt-3 italic text-ivory/80">{character.tagline}</p>
              </div>

              <div className="space-y-8 p-7 md:p-10">
                <p className="text-lg text-ivory/90">{character.summary}</p>

                <div>
                  <h4 className="mb-3 text-[11px] uppercase tracking-[0.3em] text-gold">Personnalité</h4>
                  <ul className="flex flex-wrap gap-2">
                    {character.personality.map((p) => (
                      <li key={p} className="border border-gold/30 px-3 py-1.5 text-sm text-ivory/85">{p}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-[11px] uppercase tracking-[0.3em] text-gold">Relations</h4>
                  <ul className="divide-y divide-gold/15 border-y border-gold/15">
                    {character.relations.map((r) => (
                      <li key={r.with} className="grid gap-1 py-3 sm:grid-cols-[150px_1fr] sm:gap-4">
                        <span className="font-display text-lg text-gold-soft">{r.with}</span>
                        <span className="text-sm text-ivory/75">{r.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-[11px] uppercase tracking-[0.3em] text-gold">Analyse littéraire</h4>
                  <p className="border-l-2 border-gold pl-5 text-ivory/80">{character.analysis}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import useScrollY from '../hooks/useScrollProgress'

export default function BackToTop() {
  const y = useScrollY()
  return (
    <AnimatePresence>
      {y > 700 && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Retour en haut de la page"
          className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center border border-gold bg-obsidian/90 text-gold backdrop-blur transition-colors hover:bg-gold hover:text-obsidian"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

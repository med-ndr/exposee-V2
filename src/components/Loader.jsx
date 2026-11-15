import { motion } from 'framer-motion'
import { Mask } from './Illustrations'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-obsidian"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      role="status"
      aria-label="Chargement"
    >
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="w-20">
        <Mask className="w-full" />
      </motion.div>
      <p className="mt-6 font-display text-2xl tracking-[0.5em] text-ivory">ANTIGONE</p>
      <div className="mt-6 h-px w-40 overflow-hidden bg-gold/20">
        <motion.div className="h-full bg-gold" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.2, ease: 'easeInOut' }} />
      </div>
    </motion.div>
  )
}

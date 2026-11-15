import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Author from './components/Author'
import WorkPresentation from './components/WorkPresentation'
import StorySummary from './components/StorySummary'
import Characters from './components/Characters'
import Themes from './components/Themes'
import LiteraryAnalysis from './components/LiteraryAnalysis'
import Comparison from './components/Comparison'
import PersonalOpinion from './components/PersonalOpinion'
import Quiz from './components/Quiz'
import Conclusion from './components/Conclusion'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Loader from './components/Loader'
import useActiveSection from './hooks/useActiveSection'
import { sections } from './data/content'

export default function App() {
  const [loading, setLoading] = useState(true)
  const ids = useMemo(() => sections.map((s) => s.id), [])
  const active = useActiveSection(ids)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="grain">
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <a
        href="#auteur"
        className="sr-only z-[110] bg-gold px-4 py-2 text-obsidian focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
      >
        Aller au contenu
      </a>
      <Navbar active={active} />
      <main>
        <Hero />
        <Author />
        <WorkPresentation />
        <StorySummary />
        <Characters />
        <Themes />
        <LiteraryAnalysis />
        <Comparison />
        <PersonalOpinion />
        <Quiz />
        <Conclusion />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

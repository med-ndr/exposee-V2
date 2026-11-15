import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, X, RotateCcw, ArrowRight } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { quizQuestions } from '../data/quizQuestions'

const letters = ['A', 'B', 'C', 'D']

function verdict(score, total) {
  const r = score / total
  if (r === 1) return 'Parfait ! Vous connaissez très bien la pièce.'
  if (r >= 0.7) return 'Très bien ! Vous avez bien compris l’essentiel.'
  if (r >= 0.4) return 'Pas mal. Relisez le résumé et les personnages pour progresser.'
  return 'Un bon début. Parcourez à nouveau les sections et réessayez.'
}

export default function Quiz() {
  const total = quizQuestions.length
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = quizQuestions[current]
  const answered = selected !== null

  const choose = (i) => {
    if (answered) return
    setSelected(i)
    if (i === q.answer) setScore((s) => s + 1)
  }

  const next = () => {
    if (current + 1 >= total) setFinished(true)
    else {
      setCurrent((c) => c + 1)
      setSelected(null)
    }
  }

  const restart = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  const progress = ((finished ? total : current + (answered ? 1 : 0)) / total) * 100

  return (
    <section id="quiz" className="relative overflow-hidden bg-obsidian py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionTitle num="10" kicker="Quiz interactif" title="Testez vos connaissances" align="center" intro="Dix questions, quatre réponses possibles. Une explication s’affiche après chaque choix." />

        <div className="border border-gold/30 bg-obsidian-soft">
          {/* Barre de progression */}
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={finished ? total : current + (answered ? 1 : 0)}
            aria-label="Progression du quiz"
            className="h-1 w-full bg-white/10"
          >
            <motion.div className="h-full bg-gold" animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} />
          </div>

          <div className="p-6 md:p-12">
            <AnimatePresence mode="wait">
              {!finished ? (
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-gold">
                    <span>Question {current + 1} / {total}</span>
                    <span>Score : {score}</span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl leading-tight text-ivory md:text-4xl">{q.question}</h3>

                  <ul className="mt-8 space-y-3">
                    {q.options.map((opt, i) => {
                      const isCorrect = i === q.answer
                      const isChosen = i === selected
                      let style = 'border-gold/30 hover:border-gold hover:bg-white/5'
                      if (answered && isCorrect) style = 'border-emerald-400/70 bg-emerald-400/10'
                      else if (answered && isChosen) style = 'border-red-400/70 bg-red-400/10'
                      else if (answered) style = 'border-gold/15 opacity-60'
                      return (
                        <li key={opt}>
                          <button
                            onClick={() => choose(i)}
                            disabled={answered}
                            data-testid={`option-${i}`}
                            className={`flex w-full items-center gap-4 border p-4 text-left transition-colors md:p-5 ${style}`}
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold/50 font-display text-lg text-gold">
                              {answered && isCorrect ? <Check size={18} className="text-emerald-300" /> : answered && isChosen ? <X size={18} className="text-red-300" /> : letters[i]}
                            </span>
                            <span className="text-base text-ivory/90 md:text-lg">{opt}</span>
                            {answered && isCorrect && <span className="sr-only"> (bonne réponse)</span>}
                            {answered && isChosen && !isCorrect && <span className="sr-only"> (réponse incorrecte)</span>}
                          </button>
                        </li>
                      )
                    })}
                  </ul>

                  <div aria-live="polite" className="min-h-[96px]">
                    {answered && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-xl text-sm text-ivory/80 md:text-base">
                          <strong className={`mr-2 font-medium ${selected === q.answer ? 'text-emerald-300' : 'text-red-300'}`}>
                            {selected === q.answer ? 'Bonne réponse !' : 'Pas tout à fait.'}
                          </strong>
                          {q.explanation}
                        </p>
                        <button
                          onClick={next}
                          data-testid="next"
                          className="inline-flex shrink-0 items-center justify-center gap-3 bg-gold px-6 py-3 text-[12px] font-medium uppercase tracking-[0.25em] text-obsidian transition-colors hover:bg-gold-soft"
                        >
                          {current + 1 === total ? 'Voir mon score' : 'Suivante'}
                          <ArrowRight size={16} />
                        </button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div key="result" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="py-6 text-center" data-testid="result">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Résultat final</p>
                  <p className="mt-6 font-display text-8xl text-ivory md:text-9xl">
                    {score}<span className="text-gold/60">/{total}</span>
                  </p>
                  <p className="mt-4 text-xl text-ivory/85">{verdict(score, total)}</p>
                  <p className="mt-2 text-muted">{Math.round((score / total) * 100)} % de bonnes réponses</p>
                  <button
                    onClick={restart}
                    data-testid="restart"
                    className="mt-10 inline-flex items-center gap-3 border border-gold px-7 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-obsidian"
                  >
                    <RotateCcw size={16} /> Recommencer le quiz
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

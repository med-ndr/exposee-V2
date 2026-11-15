import { sections } from '../data/content'

export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <footer className="relative border-t border-gold/20 bg-black pb-10 pt-16">
      <div className="meander absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.3em] text-ivory">ANTIGONE</p>
            <p className="mt-3 max-w-xs text-sm text-muted">Une exposition littéraire interactive sur la tragédie de Jean Anouilh (1944).</p>
          </div>
          <nav aria-label="Pied de page">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:grid-cols-4">
              {sections.filter((s) => s.id !== 'hero').map((s) => (
                <li key={s.id}>
                  <button onClick={() => go(s.id)} className="py-1 text-sm text-ivory/70 transition-colors hover:text-gold">
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-gold/15 pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>Projet scolaire · Français · Lycée</p>
          <p>Jean Anouilh, Antigone · Créée en 1944</p>
        </div>
      </div>
    </footer>
  )
}

import { Mail } from 'lucide-react'

const timeline = [
  ['Sept. → oct. 2026', 'Phase pilote avec des clubs volontaires : tests en conditions réelles, ajustement des critères et de l’outil.'],
  ['Octobre 2026', 'Arrivée de Séances & ressources : créateur de séances, planche tactique, bibliothèque du Comité.'],
  ['24 octobre 2026', 'Ouverture de VIGIE à tous les clubs de l’Hérault.'],
]

export default function About() {
  return (
    <section id="projet" className="section scroll-mt-16 bg-soft text-ink">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <span className="eyebrow-dark">Le projet</span>
          <h2 className="heading-lg mt-4 text-ink">
            Observer pour <span className="text-accent-700">individualiser</span>.
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              VIGIE est conçu et développé par <strong className="text-ink">Enzo Albert</strong>,
              entraîneur et responsable de la filière masculine et de la détection au Comité de
              l'Hérault de Handball.
            </p>
            <p>
              L'idée part du terrain : les entraîneurs de club voient leurs joueurs chaque semaine,
              et ce regard est une richesse pour la détection. Il lui manquait un outil commun.
              VIGIE est aujourd'hui utilisé par le Comité de l'Hérault pour sa mission de détection.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-line bg-white p-5 shadow-card">
            <div className="font-display font-bold text-ink">
              Comité, ligue ou club hors Hérault ?
            </div>
            <p className="mt-1 text-sm text-slate-600">
              Vous souhaitez structurer l'observation de vos jeunes avec VIGIE ? Parlons-en.
            </p>
            <a href="/#contact" className="mt-4 btn bg-primary-700 text-white hover:bg-primary-800">
              <Mail className="h-4 w-4" /> Me contacter
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <h3 className="font-display text-lg font-bold text-ink">Les étapes</h3>
          <ol className="mt-5 relative border-l-2 border-line pl-6 space-y-8">
            {timeline.map(([date, text]) => (
              <li key={date} className="relative">
                <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-soft bg-gold" />
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-600">{date}</div>
                <p className="mt-1 text-ink leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

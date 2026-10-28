import { motion } from 'framer-motion'
import { Smartphone, Monitor, Instagram } from 'lucide-react'
import CtaLink from './CtaLink.jsx'

const steps = [
  {
    n: 1,
    title: "J'ouvre VIGIE",
    body: "J'ouvre le lien, je me connecte (ou je m'inscris la première fois) et je l'ajoute à mon écran d'accueil.",
  },
  {
    n: 2,
    title: 'Je note un joueur',
    body: 'Onglet Évaluation joueurs : je choisis le joueur, la date, et je remplis les 6 champs en suivant la grille affichée.',
  },
  {
    n: 3,
    title: 'Je soumets',
    body: "Je descends tout en bas et je touche Soumettre. C'est terminé : VIGIE compare tout seul.",
  },
]

const homeScreen = [
  {
    icon: Smartphone,
    title: 'iPhone · Safari',
    steps: ['Touchez Partager (carré + flèche)', '« Sur l’écran d’accueil »', 'Ajouter'],
  },
  {
    icon: Smartphone,
    title: 'Android · Chrome',
    steps: ['Menu ⋮ en haut à droite', '« Ajouter à l’écran d’accueil »', 'Ajouter'],
  },
  {
    icon: Monitor,
    title: 'Ordinateur',
    steps: ['Ouvrez le lien dans le navigateur', 'Ctrl/Cmd + D pour l’ajouter aux favoris'],
  },
]

export default function Start() {
  return (
    <section id="demarrer" className="section scroll-mt-16 bg-white text-ink">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow-dark">Démarrer</span>
          <h2 className="heading-lg mt-4 text-ink">
            Votre première évaluation en <span className="text-accent-700">10 minutes</span>.
          </h2>
          <p className="lead mt-4 text-slate-600">
            Pas d'application à télécharger : un lien suffit, sur téléphone comme sur ordinateur.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="card"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-700 font-headline text-lg font-bold text-gold">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <CtaLink className="btn bg-primary-700 text-white hover:bg-primary-800 hover:-translate-y-0.5 shadow-lift" />
          <a href="/guides/entraineur" className="btn-ghost-dark">
            Le guide entraîneur pas à pas
          </a>
        </div>

        {/* Écran d'accueil */}
        <div className="mt-16">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
            VIGIE sur votre écran d'accueil, comme une vraie app
          </h3>
          <p className="mt-2 text-slate-600">10 secondes, une seule fois.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {homeScreen.map((h) => (
              <div key={h.title} className="rounded-2xl border border-line bg-soft p-5">
                <div className="flex items-center gap-2 font-semibold text-ink">
                  <h.icon className="h-4 w-4 text-accent-700" /> {h.title}
                </div>
                <ol className="mt-3 space-y-1.5 text-sm text-slate-600 list-decimal list-inside">
                  {h.steps.map((st) => (
                    <li key={st}>{st}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-3 rounded-2xl border border-gold/40 bg-gold/10 p-4 text-sm text-ink">
            <Instagram className="h-5 w-5 shrink-0 text-gold-600" />
            <p>
              <strong>Vous arrivez d'Instagram ?</strong> Le navigateur d'Instagram ne permet pas
              d'ajouter VIGIE à l'écran d'accueil. Touchez le menu <strong>···</strong> en haut à
              droite, puis « Ouvrir dans le navigateur » (Safari ou Chrome), et suivez les étapes
              ci-dessus.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

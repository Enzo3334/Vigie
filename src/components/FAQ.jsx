import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Comment Vigie s\'articule avec le Comité Hérault FFHandball ?',
    a: 'Vigie est développé en collaboration avec les cadres techniques du Comité Hérault. La bibliothèque de ressources et les batteries de tests sont co-construites avec eux pour rester alignées sur les exigences fédérales.',
  },
  {
    q: 'Plusieurs personnes peuvent-elles noter un même joueur ?',
    a: 'Oui — c\'est même au cœur de la philosophie « notation collective » de Vigie. Coachs, préparateurs physiques, kinés peuvent saisir leurs observations en parallèle, avec une vue consolidée.',
  },
  {
    q: 'Mes données de joueurs sont-elles vraiment protégées ?',
    a: 'Hébergement français, chiffrement AES-256 au repos et en transit, conformité RGPD. Chaque rôle ne voit que les informations strictement nécessaires à sa mission.',
  },
  {
    q: 'Quels tests physiques sont disponibles ?',
    a: 'Vigie propose une batterie pensée pour le handball : tests de course (sprint 20 m, 10 m aller-retour en dribble), tests de saut (saut 2 pieds, multi-bond 2 pieds, saut 1 pied), force du haut du corps (poussée de medecine ball) et souplesse (toucher des pieds assis). Tous sont saisissables depuis le téléphone, avec courbes de progression et alertes.',
  },
  {
    q: 'Faut-il du matériel particulier ?',
    a: 'Non. Un simple smartphone ou une tablette suffit. La saisie terrain est pensée pour aller vite, même au bord du terrain entre deux séries.',
  },
  {
    q: 'Comment se passe l\'arrivée de Vigie dans mon club ?',
    a: 'Une démonstration de 30 min avec votre équipe encadrante, puis un accompagnement à la prise en main. Contactez-nous via le bouton « Demander une démo » et nous reviendrons vers vous sous 48 h ouvrées.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section bg-soft text-ink">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow-dark">Questions fréquentes</span>
          <h2 className="heading-lg mt-4 text-ink">On a déjà répondu à la plupart d'entre elles.</h2>
          <p className="lead mt-4 text-slate-600">
            Une autre question ?{' '}
            <a
              href="mailto:contact@vigie-handball.fr"
              className="text-accent-700 font-semibold underline-offset-4 hover:underline"
            >
              Écrivez-nous
            </a>
            , on répond sous 24h ouvrées.
          </p>
        </div>

        <div className="lg:col-span-8 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className={`rounded-2xl border bg-white transition ${
                  isOpen ? 'border-accent shadow-lift' : 'border-line shadow-card'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="cursor-pointer flex w-full items-start justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display font-semibold text-ink">{f.q}</span>
                  <span
                    className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition ${
                      isOpen ? 'bg-accent text-white border-accent rotate-45' : 'border-line text-slate-500'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-slate-600 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

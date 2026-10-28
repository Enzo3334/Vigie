import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SUPPORT_EMAIL } from '../config.js'

const faqs = [
  {
    q: 'Faut-il télécharger une application ?',
    a: "Non. VIGIE s'ouvre dans le navigateur, sur téléphone, tablette ou ordinateur. Pour l'avoir sous la main comme une app, ajoutez-la à votre écran d'accueil (voir « Démarrer »).",
  },
  {
    q: 'Je ne trouve pas mon joueur.',
    a: "Tapez les 3 ou 4 premières lettres du nom et vérifiez la génération. S'il n'apparaît toujours pas, signalez-le via le formulaire « Contacter l'assistance » de l'onglet Aide.",
  },
  {
    q: "Ma note ne s'enregistre pas.",
    a: 'Tous les champs marqués « Requis » doivent être remplis. Descendez jusqu’au bouton Soumettre et vérifiez votre connexion.',
  },
  {
    q: "Je n'ai pas pu observer un critère.",
    a: 'Mettez 0 (non noté) plutôt qu’une note au hasard. Et notez ce que vous voyez aujourd’hui, pas le potentiel supposé.',
  },
  {
    q: 'Combien de temps prend une évaluation ?',
    a: '5 à 10 minutes par joueur. VIGIE calcule seul la comparaison avec la génération.',
  },
  {
    q: 'Qui voit les évaluations de mes joueurs ?',
    a: 'Chaque club ne voit que ses propres licenciés. Les bilans individuels sont produits par l’équipe technique du Comité et envoyés au club du joueur.',
  },
  {
    q: 'Mes séances sont-elles visibles par les autres ?',
    a: 'Non, elles restent privées. Vous pouvez les partager avec un groupe (votre club, votre formation) ou les proposer à la bibliothèque : rien n’est publié sans validation du Comité.',
  },
  {
    q: 'Je ne retrouve pas mes séances sur un autre appareil.',
    a: 'Connectez-vous avec le même compte (même e-mail). Si vous aviez créé des séances avant d’avoir un compte : Profil → Importer dans mon compte.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section scroll-mt-16 bg-white text-ink">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow-dark">Questions fréquentes</span>
          <h2 className="heading-lg mt-4 text-ink">Un doute, un blocage ?</h2>
          <p className="lead mt-4 text-slate-600">
            Le formulaire « Contacter l'assistance » est dans l'onglet Aide de VIGIE. Vous pouvez
            aussi écrire à Enzo Albert, responsable détection :{' '}
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Assistance%20VIGIE`}
              className="text-accent-700 font-semibold underline-offset-4 hover:underline break-all"
            >
              {SUPPORT_EMAIL}
            </a>
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

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'On a enfin une mémoire commune sur nos joueurs. Les regards du coach, du préparateur et du kiné se croisent dans Vigie — et ça change la manière dont on construit nos séances.',
    name: 'Camille L.',
    role: 'Entraîneuse N1F',
  },
  {
    quote:
      'La notation collective a fait ressortir des profils qu\'on sous-estimait. En trois mois, deux jeunes ont basculé sur l\'effectif première — c\'est concret.',
    name: 'Thierry M.',
    role: 'Manager général · Centre formation',
  },
  {
    quote:
      'Les ressources techniques validées par le Comité, c\'est un vrai plus pour nos jeunes coachs. Plus besoin de réinventer la fiche d\'exercice.',
    name: 'Yanis B.',
    role: 'Responsable technique · Club U18',
  },
]

export default function SocialProof() {
  return (
    <section id="avis" className="section bg-soft text-ink">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow-dark">Témoignages</span>
          <h2 className="heading-lg mt-4 text-ink">
            La parole aux coachs qui font progresser leurs joueurs.
          </h2>
          <p className="lead mt-4 text-slate-600">
            Vigie est en cours de déploiement au sein du Comité Hérault FFHandball.
            Les retours des premiers utilisateurs nourrissent le produit chaque semaine.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="card h-full flex flex-col hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-accent-600">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4" fill="currentColor" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-primary-100" />
              </div>
              <blockquote className="mt-4 text-slate-700 leading-relaxed">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-line">
                <div className="font-semibold text-ink">{t.name}</div>
                <div className="text-xs text-slate-500 mt-0.5">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

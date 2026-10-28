import { motion } from 'framer-motion'
import { Eye, CalendarRange, PenLine, GitCompareArrows, FileCheck2 } from 'lucide-react'

const reasons = [
  {
    icon: Eye,
    title: 'Un même regard',
    body: "Une grille d'observation commune à tous les entraîneurs du département.",
  },
  {
    icon: CalendarRange,
    title: 'Toute la saison',
    body: 'Vous voyez vos joueurs chaque semaine : vos observations enrichissent le suivi du Comité, pas seulement le jour de la détection.',
  },
]

const flow = [
  {
    icon: PenLine,
    title: "J'observe",
    body: 'Je note le joueur sur 5 critères depuis mon téléphone, en 5 à 10 minutes.',
  },
  {
    icon: GitCompareArrows,
    title: 'VIGIE compare',
    body: 'Chaque note est située par rapport à la moyenne de la génération. Aucun calcul à faire.',
  },
  {
    icon: FileCheck2,
    title: 'Le bilan revient',
    body: "L'équipe technique produit une fiche par joueur, envoyée à son club.",
  },
]

export default function Why() {
  return (
    <section id="pourquoi" className="section scroll-mt-16 bg-navy-radial text-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow-gold">Pourquoi VIGIE</span>
          <h2 className="heading-lg mt-4">
            Chaque jeune joueur mérite d'être vu.
          </h2>
          <p className="lead mt-4 text-primary-100/85">
            Le regard des entraîneurs de club est au cœur de la détection. VIGIE lui donne un
            outil commun : une même grille, au même endroit, accessible au bord du terrain.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="card-dark">
              <r.icon className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-display text-xl font-bold">{r.title}</h3>
              <p className="mt-2 text-primary-100/80 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-headline text-2xl sm:text-3xl font-bold">
          Vous observez, VIGIE fait le reste.
        </h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {flow.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl bg-white/[0.06] ring-1 ring-white/10 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-headline text-4xl font-bold text-gold/90">{i + 1}</span>
                <f.icon className="h-5 w-5 text-accent-300" />
              </div>
              <h4 className="mt-3 font-display text-lg font-bold">{f.title}</h4>
              <p className="mt-1.5 text-sm text-primary-100/80 leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

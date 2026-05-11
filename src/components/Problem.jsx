import { motion } from 'framer-motion'
import { Clock, EyeOff, FolderX } from 'lucide-react'

const items = [
  {
    icon: Clock,
    title: 'Trop d\'observations qui se perdent',
    body: 'Notes éparses, captures d\'écran, conversations WhatsApp — l\'information existe, mais elle ne circule pas. Et au moment de décider, elle manque.',
  },
  {
    icon: EyeOff,
    title: 'Une seule paire d\'yeux par joueur',
    body: 'Le coach principal ne peut pas tout voir. Sans vision croisée des encadrants, les profils invisibles passent à la trappe.',
  },
  {
    icon: FolderX,
    title: 'Aucune mémoire de saison',
    body: 'D\'une année sur l\'autre, on repart de zéro. Pas de comparaison, pas de progression mesurée, pas de transmission entre catégories.',
  },
]

export default function Problem() {
  return (
    <section id="probleme" className="section relative bg-white text-ink">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow-dark">Le constat</span>
          <h2 className="heading-lg mt-4 text-ink">
            Observer beaucoup. Décider mieux. <span className="text-accent-700">Trop souvent, ça reste un vœu.</span>
          </h2>
          <p className="lead mt-4 text-slate-600">
            Le suivi joueur reste éclaté entre Excel, papier et discussions de bord de terrain. Vigie remet de l'ordre.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="card hover:-translate-y-1 hover:shadow-lift hover:border-accent/40"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent-700 ring-1 ring-accent/20">
                <it.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{it.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

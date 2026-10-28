import { motion } from 'framer-motion'
import {
  BookOpen,
  CircleCheck,
  Activity,
  FileText,
  ClipboardList,
  Library,
  Smartphone,
} from 'lucide-react'
import CtaLink from './CtaLink.jsx'

const tiles = [
  { icon: CircleCheck, title: 'Évaluer', body: '6 critères' },
  { icon: Activity, title: 'Tester', body: 'Sprint, sauts, force' },
  { icon: FileText, title: 'Bilans', body: 'Une fiche par joueur' },
  { icon: ClipboardList, title: 'Séances', body: 'Créer, imprimer, animer' },
  { icon: Library, title: 'Ressources', body: 'Bibliothèque du Comité' },
  { icon: Smartphone, title: 'Partout', body: 'Téléphone, ordinateur, tablette' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-radial text-white">
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute top-32 -right-32 h-[460px] w-[460px] rounded-full bg-primary-500/25 blur-3xl" />
        <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-50" />
      </div>

      <div className="container-x relative pt-10 pb-16 sm:pt-16 sm:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow-gold"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Ouvert à tous les clubs de l'Hérault
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="heading-xl mt-4 text-white"
          >
            Un même regard sur tous nos jeunes.
          </motion.h1>
          <div className="mt-5 h-1 w-20 rounded-full bg-gold" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-primary-100/90"
          >
            VIGIE est l'outil de détection du Comité de l'Hérault de Handball,
            dans la poche de chaque entraîneur. Évaluer, tester, faire
            progresser : depuis votre téléphone, sans rien installer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <CtaLink className="btn-gold text-base px-6" />
            <a href="#guides" className="btn-ghost text-base px-6">
              <BookOpen className="h-4 w-4" /> Lire les guides
            </a>
          </motion.div>
          <p className="mt-4 text-sm text-primary-100/70">
            Entraîneur de club ? Votre première évaluation prend moins de 10 minutes.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
            {tiles.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + 0.05 * i, duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur p-4 sm:p-5"
              >
                <t.icon className="h-5 w-5 text-gold" strokeWidth={2.2} />
                <div className="mt-3 font-display font-bold text-white">{t.title}</div>
                <div className="mt-0.5 text-[13px] leading-snug text-primary-100/75">{t.body}</div>
              </motion.div>
            ))}
          </div>
          <p className="mt-5 text-center lg:text-left font-display italic text-gold-300">
            « Observer pour individualiser »
          </p>
        </div>
      </div>
    </section>
  )
}

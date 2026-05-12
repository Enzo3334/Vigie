import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import {
  ArrowRight,
  Play,
  Users,
  ShieldCheck,
  Dumbbell,
  BookOpen,
} from 'lucide-react'

// Logo Vigie : tente d'abord ton asset officiel (à déposer dans /public),
// fallback vers le SVG généré si absent.
function VigieLogo({ className }) {
  const [src, setSrc] = useState('/Logo-vigies.png')
  return (
    <img
      src={src}
      alt="Vigie"
      onError={() => setSrc('/logo.svg')}
      className={className}
    />
  )
}

const pillars = [
  {
    icon: Users,
    title: 'Notation collective',
    body: 'Différents entraîneurs de club, du Comité et du parcours de performance fédéral. Les regards se croisent et révèlent les profils sous-estimés.',
  },
  {
    icon: ShieldCheck,
    title: 'Données protégées',
    body: 'Hébergement français, chiffrement AES-256, conformité RGPD. Au standard fédéral.',
  },
  {
    icon: Dumbbell,
    title: 'Tests physiques',
    body: 'Course, saut, force et souplesse : la batterie complète, saisie au bord du terrain.',
  },
  {
    icon: BookOpen,
    title: 'Ressources intégrées',
    body: 'Bibliothèque de fiches et de plans de séance, validés par les cadres techniques du Comité.',
  },
]

export default function Hero() {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  // Suivi du scroll global (window) — déclenche l'anim entre 0 et ~700px
  const { scrollY } = useScroll()

  // Phase 1 : phone rétrécit + remonte légèrement (0 → 600px)
  const phoneScale = useTransform(
    scrollY,
    [0, 600],
    reduced ? [1, 1] : [1, 0.5]
  )
  const phoneY = useTransform(
    scrollY,
    [0, 600],
    reduced ? [0, 0] : [0, -80]
  )

  // Phase 0 : headline fade-out rapide (0 → 250px)
  const headOpacity = useTransform(scrollY, [0, 250], [1, 0])
  const headY = useTransform(scrollY, [0, 250], [0, -40])

  // Phase 2 : features fade-in (350 → 700px)
  const featOpacity = useTransform(scrollY, [350, 700], [0, 1])
  const featY = useTransform(
    scrollY,
    [350, 700],
    reduced ? [0, 0] : [50, 0]
  )

  return (
    <section
      ref={ref}
      className="relative bg-navy-radial text-white"
      style={{ height: '220vh' }}
    >
      {/* Stage sticky */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Décor de fond */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute top-32 -right-32 h-[460px] w-[460px] rounded-full bg-primary-500/25 blur-3xl" />
          <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-50" />
        </div>

        <div className="container-x relative h-full flex flex-col items-center pt-[4%] sm:pt-[5%]">
          {/* HEADLINE — en haut, dans le flux */}
          <motion.div
            style={{ opacity: headOpacity, y: headY }}
            className="relative px-5 max-w-3xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-accent-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Comité Hérault FFHandball
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="heading-xl mt-5 text-white"
            >
              Observer pour{' '}
              <span className="bg-gradient-to-r from-accent-300 via-accent to-accent-600 bg-clip-text text-transparent">
                individualiser.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-primary-100/85"
            >
              La notation collective de vos joueurs, transformée en décisions
              d'entraînement adaptées.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 flex justify-center gap-3 flex-wrap"
            >
              <a
                href="mailto:enzoalbert2003@gmail.com?subject=Démonstration%20Vigie"
                className="btn-primary"
              >
                Demander une démo <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#demo" className="btn-ghost">
                <Play className="h-4 w-4" /> Voir la démo (2 min)
              </a>
            </motion.div>
          </motion.div>

          {/* PHONE — sous la headline, rétrécit au scroll */}
          <motion.div
            style={{ scale: phoneScale, y: phoneY }}
            className="relative mt-4 sm:mt-6 origin-top will-change-transform"
          >
            <PhoneMockup />
          </motion.div>

          {/* FEATURES — bas, fade in */}
          <motion.div
            style={{ opacity: featOpacity, y: featY }}
            className="absolute inset-x-0 bottom-[4%] sm:bottom-[6%] px-5"
          >
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="card-dark ring-1 ring-white/10 hover:bg-white/[0.07] hover:-translate-y-1"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent-300 ring-1 ring-accent/30">
                      <p.icon className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                    <h3 className="mt-3 font-display font-bold text-white text-sm sm:text-base leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] sm:text-[13px] leading-relaxed text-primary-100/75">
                      {p.body}
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 sm:mt-6 text-center text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-bold text-primary-200/70">
                Plus d'observations · De meilleures décisions · Pour chaque
                joueur
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Halo */}
      <div className="absolute -inset-16 -z-10 rounded-[120px] bg-gradient-to-br from-accent/30 via-primary-500/20 to-primary-900/0 blur-3xl" />
      {/* Pulse */}
      <span className="absolute inset-0 -z-10 m-auto h-72 w-72 rounded-full bg-accent/20 animate-pulseRing" />

      <div className="relative animate-float will-change-transform">
        {/* Phone frame */}
        <div className="relative w-[210px] sm:w-[240px] md:w-[260px] rounded-[40px] bg-gradient-to-b from-[#1a2849] via-[#0c1733] to-[#04081a] p-2.5 shadow-phone ring-1 ring-white/15">
          {/* Side buttons */}
          <span className="absolute left-[-3px] top-24 h-12 w-1 rounded-r bg-white/10" />
          <span className="absolute left-[-3px] top-40 h-16 w-1 rounded-r bg-white/10" />
          <span className="absolute right-[-3px] top-32 h-20 w-1 rounded-l bg-white/10" />

          {/* Screen */}
          <div className="relative aspect-[9/18] overflow-hidden rounded-[32px] bg-gradient-to-b from-primary-700 via-primary-800 to-primary-950">
            {/* Notch */}
            <div className="absolute left-1/2 top-2.5 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black/90 ring-1 ring-white/10" />

            {/* Status bar */}
            <div className="relative pt-3 px-6 flex items-center justify-between text-[10px] font-semibold text-white/80">
              <span>9:41</span>
              <span className="opacity-0">.</span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                <span className="h-2 w-3 rounded-sm border border-white/70" />
              </span>
            </div>

            {/* Grille décor */}
            <div className="absolute inset-0 bg-grid-faint [background-size:18px_18px] opacity-30" />

            {/* Logo centré */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <VigieLogo className="w-[150px] sm:w-[170px] md:w-[185px] drop-shadow-[0_8px_24px_rgba(74,143,224,0.45)]" />
              <div className="mt-5 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-bold text-accent-300">
                Observer pour individualiser
              </div>
              <div className="mt-2 max-w-[200px] text-[11px] leading-relaxed text-primary-100/85">
                La notation collective, transformée en décisions d'entraînement.
              </div>
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 h-1 w-28 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </div>
  )
}

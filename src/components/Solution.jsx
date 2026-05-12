import { motion } from 'framer-motion'
import {
  Users,
  ShieldCheck,
  Dumbbell,
  BookOpen,
  ClipboardList,
  TrendingUp,
  Lock,
  HardDrive,
  Zap,
  ChevronsUp,
  Wind,
  GraduationCap,
  Library,
  Mic,
  FileText,
  Lightbulb,
  Wrench,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
}

const blocks = [
  {
    id: 'notation',
    eyebrow: 'Fonctionnalité 01',
    title: 'Notation collective',
    lead: 'Différents entraîneurs de club, du Comité et du parcours de performance fédéral notent le même joueur. Les regards se croisent et révèlent les profils sous-estimés.',
    icon: Users,
    bullets: [
      {
        icon: ClipboardList,
        label: 'Des critères communs',
        desc: 'Une seule grille pour tout l\'encadrement : club, Comité, parcours fédéral.',
      },
      {
        icon: Users,
        label: 'Plusieurs entraîneurs',
        desc: 'Chaque encadrant saisit son regard en parallèle, sans se contraindre.',
      },
      {
        icon: TrendingUp,
        label: 'Vues consolidées',
        desc: 'Des pistes de travail concrètes pour la prochaine séance.',
      },
    ],
    visual: NotationVisual,
  },
  {
    id: 'donnees',
    eyebrow: 'Fonctionnalité 02',
    title: 'Données protégées',
    lead: 'Les fiches joueurs contiennent des informations sensibles. Vigie applique le standard fédéral : hébergement français, chiffrement, RGPD.',
    icon: ShieldCheck,
    bullets: [
      { icon: Lock, label: 'Chiffrement bout-en-bout', desc: 'Au repos comme en transit, sans exception.' },
      { icon: HardDrive, label: 'Hébergement souverain', desc: 'Serveurs en France, conformité RGPD.' },
      { icon: ShieldCheck, label: 'Contrôle des accès', desc: 'Chaque rôle voit ce qu\'il doit voir, rien de plus.' },
    ],
    visual: SecurityVisual,
  },
  {
    id: 'tests',
    eyebrow: 'Fonctionnalité 03',
    title: 'Tests physiques',
    lead: 'Une batterie pensée pour le handball : course, saut, force du haut du corps, souplesse. Saisie au bord du terrain, suivi sur la saison.',
    icon: Dumbbell,
    bullets: [
      {
        icon: Zap,
        label: 'Tests de course',
        desc: 'Sprint 20 m et 10 m aller-retour en dribble.',
      },
      {
        icon: ChevronsUp,
        label: 'Tests de saut',
        desc: 'Saut 2 pieds, multi-bond 2 pieds, saut 1 pied.',
      },
      {
        icon: Dumbbell,
        label: 'Force du haut du corps',
        desc: 'Poussée de medecine ball.',
      },
      {
        icon: Wind,
        label: 'Souplesse',
        desc: 'Toucher des pieds assis.',
      },
    ],
    visual: PhysicalVisual,
  },
  {
    id: 'ressources',
    eyebrow: 'Fonctionnalité 04',
    title: 'Ressources intégrées',
    lead: 'Une bibliothèque éditoriale co-construite avec le Comité Hérault — accessible en un geste depuis le téléphone, sans quitter l\'app.',
    icon: BookOpen,
    bullets: [
      {
        icon: BookOpen,
        label: 'Fiches de séance',
        desc: 'Templates duplicables, ajustables à votre catégorie et vos joueurs.',
      },
      {
        icon: Mic,
        label: 'Interviews',
        desc: 'Échanges avec entraîneurs et experts du parcours de performance.',
      },
      {
        icon: FileText,
        label: 'Études',
        desc: 'Synthèses thématiques et analyses tactiques approfondies.',
      },
      {
        icon: Lightbulb,
        label: 'Astuces',
        desc: 'Conseils de terrain pour la séance, le match et le vestiaire.',
      },
      {
        icon: Wrench,
        label: 'Ressources techniques',
        desc: 'Fiches validées par les cadres techniques fédéraux du Comité.',
      },
    ],
    visual: ResourcesVisual,
  },
]

export default function Solution() {
  return (
    <section id="solution" className="relative bg-soft text-ink">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-700/20 to-transparent" />
      <div className="container-x py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow-dark">La solution</span>
          <h2 className="heading-lg mt-4 text-ink">
            Quatre piliers pour transformer chaque observation en{' '}
            <span className="text-accent-700">décision d'entraînement</span>.
          </h2>
          <p className="lead mt-4 text-slate-600">
            Vigie n'est pas un outil de plus : c'est la colonne vertébrale du suivi joueur dans votre club.
          </p>
        </div>

        <div className="mt-20 space-y-24 sm:space-y-32">
          {blocks.map((b, i) => (
            <FeatureBlock key={b.id} block={b} reverse={i % 2 === 1} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureBlock({ block, reverse, index }) {
  const Visual = block.visual
  const Icon = block.icon

  return (
    <motion.div
      id={block.id}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
    >
      <div className="lg:col-span-6">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent-600">
          <span className="h-px w-8 bg-accent" />
          {block.eyebrow}
        </div>
        <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mt-3 text-ink">
          <span className="inline-flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-700 text-white shadow-lift">
              <Icon className="h-5 w-5" strokeWidth={2.2} />
            </span>
            {block.title}
          </span>
        </h3>
        <p className="lead mt-5 text-slate-600 max-w-lg">{block.lead}</p>

        <ul className="mt-8 space-y-4">
          {block.bullets.map((b) => (
            <li key={b.label} className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-700 ring-1 ring-accent/20">
                <b.icon className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <div>
                <div className="font-semibold text-ink">{b.label}</div>
                <div className="text-sm text-slate-600 leading-relaxed">{b.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-6">
        <Visual />
      </div>
    </motion.div>
  )
}

/* ---------- Visuels par fonctionnalité ---------- */

function VisualFrame({ children }) {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-primary-200/40 via-accent/20 to-transparent blur-2xl" />
      <div className="rounded-3xl border border-line bg-white shadow-lift overflow-hidden">
        {children}
      </div>
    </div>
  )
}

function NotationVisual() {
  const players = [
    { name: 'L. Martin', pos: 'Arrière', score: 7.4, trend: '+0.6' },
    { name: 'A. Bonnet', pos: 'Pivot', score: 8.1, trend: '+0.2' },
    { name: 'K. Diallo', pos: 'Ailier', score: 6.8, trend: '−0.3' },
    { name: 'T. Roche', pos: 'Demi-c.', score: 7.9, trend: '+0.5' },
  ]
  return (
    <VisualFrame>
      <div className="border-b border-line bg-soft px-5 py-3 flex items-center justify-between">
        <div className="font-display font-semibold text-sm text-ink">Notation J12 · Saison 25/26</div>
        <span className="text-[10px] uppercase tracking-wider font-bold text-accent-700 bg-accent/10 px-2 py-1 rounded">
          3 notateurs
        </span>
      </div>
      <div className="p-5 space-y-2.5">
        {players.map((p) => (
          <div key={p.name} className="flex items-center gap-3 rounded-xl border border-line p-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-700 text-white text-xs font-bold">
              {p.name.split(' ')[1][0]}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-ink truncate">{p.name}</div>
              <div className="text-[11px] text-slate-500">{p.pos}</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-24 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent-400 to-accent-700"
                  style={{ width: `${(p.score / 10) * 100}%` }}
                />
              </div>
              <div className="text-sm font-bold text-ink tabular-nums w-9 text-right">{p.score}</div>
              <span
                className={`text-[11px] font-bold w-10 text-right ${
                  p.trend.startsWith('+') ? 'text-emerald-600' : 'text-rose-500'
                }`}
              >
                {p.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
    </VisualFrame>
  )
}

function SecurityVisual() {
  return (
    <VisualFrame>
      <div className="relative aspect-[16/11] bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 p-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint [background-size:24px_24px] opacity-30" />
        {/* Padlock central */}
        <div className="relative h-full grid place-items-center">
          <div className="relative">
            <div className="absolute inset-0 -m-6 rounded-full bg-accent/20 blur-2xl" />
            <div className="relative grid h-28 w-28 place-items-center rounded-3xl bg-white/[0.06] backdrop-blur ring-1 ring-white/15">
              <ShieldCheck className="h-14 w-14 text-accent-300" strokeWidth={1.6} />
            </div>
          </div>
        </div>
        {/* Pills */}
        <div className="absolute top-5 left-5 flex flex-wrap gap-2">
          {['AES-256', 'RGPD', 'Hébergement FR'].map((p) => (
            <span
              key={p}
              className="rounded-full border border-white/15 bg-white/10 backdrop-blur px-2.5 py-1 text-[10px] font-bold text-white"
            >
              {p}
            </span>
          ))}
        </div>
        {/* Roles */}
        <div className="absolute bottom-5 inset-x-5 flex gap-2 justify-between text-[10px] font-semibold text-white/80">
          {['Coach', 'Prépa.', 'Kiné', 'Joueur'].map((r) => (
            <span key={r} className="flex-1 rounded-lg bg-white/5 ring-1 ring-white/10 py-1.5 text-center">
              {r}
            </span>
          ))}
        </div>
      </div>
    </VisualFrame>
  )
}

function PhysicalVisual() {
  const tests = [
    { name: 'Sprint 20 m', cat: 'Course', value: '3.12', unit: 's', trend: 82 },
    { name: '10 m AR dribble', cat: 'Course', value: '4.85', unit: 's', trend: 74 },
    { name: 'Saut 2 pieds', cat: 'Saut', value: '52', unit: 'cm', trend: 78 },
    { name: 'Multi-bond 2 pieds', cat: 'Saut', value: '8.40', unit: 'm', trend: 80 },
    { name: 'Saut 1 pied', cat: 'Saut', value: '38', unit: 'cm', trend: 66 },
    { name: 'Medecine ball', cat: 'Force', value: '6.20', unit: 'm', trend: 88 },
    { name: 'Toucher pieds assis', cat: 'Souplesse', value: '+12', unit: 'cm', trend: 64 },
  ]
  return (
    <VisualFrame>
      <div className="border-b border-line bg-soft px-5 py-3 flex items-center justify-between">
        <div className="font-display font-semibold text-sm text-ink">Tests physiques · L. Martin</div>
        <span className="text-[10px] uppercase tracking-wider font-bold text-primary-700 bg-primary-50 px-2 py-1 rounded">
          T2 · décembre
        </span>
      </div>
      <div className="p-4 grid grid-cols-2 gap-2.5">
        {tests.map((t) => (
          <div key={t.name} className="rounded-xl border border-line p-3">
            <div className="flex items-center justify-between gap-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-accent-600">
                {t.cat}
              </div>
            </div>
            <div className="mt-1 text-[11px] font-semibold text-slate-600 leading-tight">
              {t.name}
            </div>
            <div className="mt-1.5 flex items-baseline gap-1">
              <span className="font-display text-xl font-bold text-ink tabular-nums">{t.value}</span>
              <span className="text-[11px] text-slate-500">{t.unit}</span>
            </div>
            <div className="mt-2.5 h-1 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent-400 to-accent-700"
                style={{ width: `${t.trend}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </VisualFrame>
  )
}

function ResourcesVisual() {
  const cards = [
    { tag: 'Technique · Pivot', title: 'Bloc-écran 2-temps', mins: 12 },
    { tag: 'Tactique · 6-0', title: 'Pression sur l\'arrière fort', mins: 18 },
    { tag: 'Préparation', title: 'Échauffement intermittent', mins: 22 },
    { tag: 'Formation U17', title: 'Lecture de jeu et prises de balle', mins: 30 },
  ]
  return (
    <VisualFrame>
      <div className="border-b border-line bg-soft px-5 py-3 flex items-center justify-between">
        <div className="font-display font-semibold text-sm text-ink">Bibliothèque · 240 fiches</div>
        <span className="text-[10px] uppercase tracking-wider font-bold text-accent-700 bg-accent/10 px-2 py-1 rounded">
          Validé · CTF
        </span>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3">
        {cards.map((c) => (
          <article key={c.title} className="rounded-xl border border-line p-3 hover:border-accent transition cursor-pointer">
            <div className="text-[10px] font-bold uppercase tracking-wider text-accent-600">{c.tag}</div>
            <div className="mt-1 font-display font-semibold text-sm text-ink leading-tight">
              {c.title}
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
              <span>⏱ {c.mins} min</span>
              <span className="text-accent-700 font-bold">Voir →</span>
            </div>
          </article>
        ))}
      </div>
    </VisualFrame>
  )
}

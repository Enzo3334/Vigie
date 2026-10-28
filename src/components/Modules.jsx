import { motion } from 'framer-motion'
import {
  CircleCheck,
  Activity,
  FileText,
  ClipboardList,
  ArrowRight,
  Timer,
  MoveVertical,
  Dumbbell,
  Wind,
  Lock,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function Modules() {
  return (
    <section id="outil" className="scroll-mt-16 bg-soft text-ink">
      <div className="container-x section">
        <div className="max-w-2xl">
          <span className="eyebrow-dark">L'outil</span>
          <h2 className="heading-lg mt-4 text-ink">
            Quatre onglets, <span className="text-accent-700">un seul lien</span>.
          </h2>
          <p className="lead mt-4 text-slate-600">
            Évaluation joueurs, tests physiques, ressources et aide : tout ce dont l'entraîneur a
            besoin, sur téléphone, ordinateur ou tablette.
          </p>
        </div>

        <div className="mt-14 space-y-16 sm:space-y-24">
          <Module
            n="01"
            icon={CircleCheck}
            title="Évaluation joueurs"
            lead="Six notes, une grille commune à tout le département : la morphologie et 5 critères notés de 0 à 5, avec la grille affichée dans l'app au-dessus de chaque champ."
            guide="/guides/entraineur"
            visual={<CriteriaVisual />}
          />
          <Module
            n="02"
            icon={Activity}
            title="Tests physiques"
            lead="Le même protocole partout, pour des mesures comparables d'un club à l'autre. Chaque test affiche son schéma et son protocole ; vous saisissez la valeur mesurée."
            guide="/guides/tests"
            visual={<TestsVisual />}
            reverse
          />
          <Module
            n="03"
            icon={FileText}
            title="Bilans individuels"
            lead="Chaque joueur évalué reçoit sa fiche bilan : pour chaque critère, sa position face à la moyenne de sa génération. Un bilan décrit une observation à un instant donné, ce n'est pas un verdict."
            guide="/guides/bilans"
            visual={<BilanVisual />}
          />
          <Module
            n="04"
            icon={ClipboardList}
            title="Séances & ressources"
            lead="De l'observation à la séance d'entraînement : créez vos séances en blocs et exercices, dessinez la planche tactique, imprimez la fiche ou animez la séance depuis le téléphone, et puisez dans la bibliothèque du Comité."
            guide="/guides/seances"
            visual={<SeancesVisual />}
            reverse
          />
        </div>
      </div>
    </section>
  )
}

function Module({ n, icon: Icon, title, lead, guide, visual, reverse }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={`grid lg:grid-cols-12 gap-8 lg:gap-14 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
    >
      <div className="lg:col-span-5">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent-600">
          <span className="h-px w-8 bg-accent" />
          Module {n}
        </div>
        <h3 className="mt-3 flex items-center gap-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-700 text-gold shadow-lift">
            <Icon className="h-5 w-5" strokeWidth={2.2} />
          </span>
          {title}
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed">{lead}</p>
        <a
          href={guide}
          className="mt-5 inline-flex items-center gap-1.5 font-semibold text-accent-700 hover:gap-2.5 transition-all"
        >
          Lire le guide <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="lg:col-span-7">{visual}</div>
    </motion.div>
  )
}

function Frame({ title, badge, children }) {
  return (
    <div className="rounded-3xl border border-line bg-white shadow-lift overflow-hidden">
      <div className="border-b border-line bg-soft px-5 py-3 flex items-center justify-between gap-3">
        <div className="font-display font-semibold text-sm text-ink">{title}</div>
        {badge && (
          <span className="shrink-0 text-[10px] uppercase tracking-wider font-bold text-accent-700 bg-accent/10 px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

const criteria = [
  'Morphologie',
  'Mental / Combativité',
  'Entraînabilité',
  'Perceptivo-décisionnel',
  'Qualité physique',
  'Habiletés motrices',
]

function CriteriaVisual() {
  return (
    <Frame title="Ce que l'on observe" badge="6 notes">
      <ul className="p-4 grid sm:grid-cols-2 gap-2.5">
        {criteria.map((name) => (
          <li key={name} className="flex items-center gap-3 rounded-xl border border-line px-4 py-3 font-semibold text-ink">
            <CircleCheck className="h-4 w-4 shrink-0 text-accent-600" /> {name}
          </li>
        ))}
      </ul>
      <p className="flex items-center gap-2 px-5 pb-4 text-[13px] text-slate-500">
        <Lock className="h-3.5 w-3.5" /> Le détail de la grille est réservé aux entraîneurs, dans l'app.
      </p>
    </Frame>
  )
}

const tests = [
  { icon: Timer, family: 'Course', unit: 'secondes', items: ['Sprint 20 m', '10 m aller-retour en dribble'] },
  { icon: MoveVertical, family: 'Saut', unit: 'centimètres', items: ['Saut 2 pieds', 'Multibond 2 pieds', '1 pied gauche · 1 pied droit'] },
  { icon: Dumbbell, family: 'Force', unit: null, items: ['Poussée médecine-ball'] },
  { icon: Wind, family: 'Mobilité', unit: null, items: ['Souplesse'] },
]

function TestsVisual() {
  return (
    <Frame title="La batterie de tests" badge="Protocole + schéma">
      <div className="p-4 grid sm:grid-cols-2 gap-3">
        {tests.map((t) => (
          <div key={t.family} className="rounded-2xl border border-line p-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-accent-600">
                <t.icon className="h-4 w-4" /> {t.family}
              </span>
              {t.unit && <span className="text-[11px] text-slate-400">en {t.unit}</span>}
            </div>
            <ul className="mt-2 space-y-1 text-sm font-medium text-ink">
              {t.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="px-5 pb-4 text-[13px] text-slate-500">
        Même échauffement, même surface, mêmes chaussures, en début de séance.
      </p>
    </Frame>
  )
}

const circuit = [
  ['Les entraîneurs saisissent', 'Évaluations et tests dans VIGIE.'],
  ["L'équipe technique produit les fiches", 'Une fiche PDF par joueur, notes sur 5.'],
  ['Les fiches sont classées', 'Par club, puis par catégorie.'],
  ['Chaque club reçoit ses fiches', 'Uniquement celles de ses propres licenciés.'],
]

function BilanVisual() {
  return (
    <Frame title="Le circuit du bilan" badge="Aucun calcul à faire">
      <ol className="p-5 space-y-4">
        {circuit.map(([t, d], i) => (
          <li key={t} className="flex gap-4">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-700 text-sm font-bold text-gold">
              {i + 1}
            </span>
            <div>
              <div className="font-semibold text-ink">{t}</div>
              <div className="text-sm text-slate-600">{d}</div>
            </div>
          </li>
        ))}
      </ol>
      <div className="mx-5 mb-5 rounded-xl bg-soft p-4 text-sm text-slate-600">
        Avec le joueur : commencez par un point fort, puis proposez <strong>un seul</strong> axe de
        travail prioritaire. Toujours en individuel, jamais en affichage collectif.
      </div>
    </Frame>
  )
}

const seances = [
  ['Modèles prêts', 'Séance 1h, 1h30, 2h, BabyHand 3-5 ans ou vos propres modèles.'],
  ['Planche tactique', 'Au doigt, à la souris ou au stylet. Dispositifs 0-6, 1-5, attaque placée.'],
  ['Fiche PDF & mode séance', 'Imprimez la fiche ou animez avec chronomètre, depuis le banc.'],
  ['Bibliothèque du Comité', 'Séances validées, parcours, vidéos, contenus de formation U7 à U13.'],
  ['Groupes', 'Partagez vos séances avec votre club ou votre formation.'],
  ['Privé par défaut', "Rien n'est publié sans validation du Comité."],
]

function SeancesVisual() {
  return (
    <Frame title="Séances & ressources" badge="Synchronisé partout">
      <div className="p-4 grid sm:grid-cols-2 gap-3">
        {seances.map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-line p-4">
            <div className="font-semibold text-ink">{t}</div>
            <div className="mt-1 text-[13px] leading-snug text-slate-600">{d}</div>
          </div>
        ))}
      </div>
    </Frame>
  )
}

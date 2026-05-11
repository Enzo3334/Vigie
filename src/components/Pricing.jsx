import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

const plans = (yearly) => [
  {
    name: 'Club',
    price: yearly ? 19 : 24,
    blurb: 'Pour un club avec une à trois équipes suivies.',
    features: [
      'Jusqu\'à 60 joueurs',
      'Notation collective illimitée',
      '3 notateurs par fiche',
      'Accès bibliothèque ressources',
      'Support email',
    ],
    cta: 'Activer pour mon club',
    href: '#start-club',
    accent: false,
  },
  {
    name: 'Comité',
    price: yearly ? 59 : 75,
    blurb: 'Pour les clubs structurés et les centres de formation.',
    features: [
      'Joueurs illimités',
      'Tests physiques avancés',
      'Notateurs illimités',
      'Plans de séance partagés',
      'Tableaux de bord catégorie',
      'Support prioritaire',
    ],
    cta: 'Démarrer 14 jours d\'essai',
    href: '#start-comite',
    accent: true,
    badge: 'Recommandé · CTF',
  },
  {
    name: 'Fédération',
    price: 'Sur devis',
    blurb: 'Pour les comités, ligues et structures fédérales.',
    features: [
      'Tout Comité inclus',
      'Multi-clubs · multi-catégories',
      'API & exports custom',
      'Onboarding sur site',
      'Conformité RGPD étendue',
      'Account manager dédié',
    ],
    cta: 'Parler au Comité',
    href: '#contact-federation',
    accent: false,
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)
  const list = plans(yearly)

  return (
    <section id="tarifs" className="section bg-white border-y border-line text-ink">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow-dark">Tarifs</span>
          <h2 className="heading-lg mt-4 text-ink">Une formule pour chaque structure.</h2>
          <p className="lead mt-4 text-slate-600">
            14 jours d'essai sans carte bancaire. Sans engagement. Tarifs solidaires pour les clubs du Comité Hérault.
          </p>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-soft p-1">
          <ToggleBtn active={!yearly} onClick={() => setYearly(false)}>Mensuel</ToggleBtn>
          <ToggleBtn active={yearly} onClick={() => setYearly(true)}>
            Annuel{' '}
            <span className="ml-1 rounded-full bg-accent/15 text-accent-700 px-2 py-0.5 text-[10px] font-bold">
              −2 mois
            </span>
          </ToggleBtn>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3 items-stretch">
          {list.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl border p-7 flex flex-col ${
                p.accent
                  ? 'border-primary-700 bg-gradient-to-br from-primary-700 to-primary-900 text-white shadow-lift'
                  : 'border-line bg-white shadow-card'
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-white shadow-lift">
                  <Sparkles className="h-3 w-3" /> {p.badge}
                </span>
              )}

              <h3 className={`font-display text-xl font-bold ${p.accent ? 'text-white' : 'text-ink'}`}>
                {p.name}
              </h3>
              <p className={`mt-1 text-sm ${p.accent ? 'text-primary-100/90' : 'text-slate-500'}`}>
                {p.blurb}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                {typeof p.price === 'number' ? (
                  <>
                    <span className={`font-display text-5xl font-extrabold ${p.accent ? 'text-white' : 'text-ink'}`}>
                      {p.price}€
                    </span>
                    <span className={`text-sm ${p.accent ? 'text-primary-100/80' : 'text-slate-500'}`}>
                      /mois
                    </span>
                  </>
                ) : (
                  <span className={`font-display text-3xl font-extrabold ${p.accent ? 'text-white' : 'text-ink'}`}>
                    {p.price}
                  </span>
                )}
              </div>
              {typeof p.price === 'number' && yearly && (
                <span className={`text-xs mt-1 ${p.accent ? 'text-primary-100/70' : 'text-slate-400'}`}>
                  Facturé annuellement
                </span>
              )}

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        p.accent ? 'bg-accent text-white' : 'bg-accent/15 text-accent-700'
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className={p.accent ? 'text-primary-50' : 'text-slate-700'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={p.href}
                className={`mt-7 ${
                  p.accent
                    ? 'btn bg-accent text-white hover:bg-accent-700 shadow-lift hover:-translate-y-0.5'
                    : 'btn-ghost-dark'
                }`}
              >
                {p.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ToggleBtn({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition ${
        active ? 'bg-white shadow-card text-primary-700' : 'text-slate-500 hover:text-ink'
      }`}
    >
      {children}
    </button>
  )
}

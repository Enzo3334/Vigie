import { useState } from 'react'
import { Instagram, Mail } from 'lucide-react'
import CtaLink from './CtaLink.jsx'
import {
  APP_URL,
  APP_LINKS_ENABLED,
  SEANCES_URL,
  SUPPORT_EMAIL,
  PROJECT_EMAIL,
  INSTAGRAM_URL,
  COMITE_URL,
} from '../config.js'
import { guides } from '../guides.js'

const cols = [
  {
    title: "L'outil",
    links: [
      ...(APP_LINKS_ENABLED
        ? [
            ['Ouvrir VIGIE', APP_URL],
            ['Séances & ressources', SEANCES_URL],
          ]
        : []),
      ['Démarrer', '/#demarrer'],
      ['Nous contacter', '/#contact'],
      ['Le projet', '/#projet'],
    ],
  },
  {
    title: 'Guides',
    links: guides.map((g) => [g.title, `/guides/${g.slug}`]),
  },
  {
    title: 'Contact',
    links: [
      ['Assistance entraîneurs', `mailto:${SUPPORT_EMAIL}?subject=Assistance%20VIGIE`],
      ['Autres structures', `mailto:${PROJECT_EMAIL}?subject=VIGIE%20pour%20notre%20structure`],
      ['Comité de l’Hérault', COMITE_URL],
      ['FFHandball', 'https://www.ffhandball.fr'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-100/80 pb-20 md:pb-0">
      {/* CTA bandeau */}
      <div className="container-x pt-16">
        <div className="rounded-3xl bg-gradient-to-br from-primary-700 to-primary-900 text-white p-7 sm:p-10 grid md:grid-cols-2 gap-6 items-center shadow-lift ring-1 ring-white/10">
          <div>
            <h3 className="font-headline text-3xl sm:text-4xl font-bold leading-tight">
              Prêt à évaluer votre premier joueur ?
            </h3>
            <p className="mt-2 text-primary-100/90 text-sm sm:text-base">
              Un lien, un joueur, six notes, Soumettre. Moins de 10 minutes.
            </p>
          </div>
          <div className="flex flex-wrap md:justify-end gap-3">
            <CtaLink className="btn-gold" />
            <a href="/guides/entraineur" className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20">
              Guide entraîneur
            </a>
          </div>
        </div>
      </div>

      <div className="container-x pt-14 pb-10">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Marque */}
          <div className="md:col-span-5">
            <a href="/" className="inline-flex items-center group" aria-label="VIGIE · accueil">
              <img
                src="/Logo-vigies.png"
                alt="VIGIE"
                className="h-16 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition group-hover:scale-[1.02]"
              />
            </a>

            <p className="mt-5 text-sm leading-relaxed text-primary-100/70 max-w-sm">
              L'outil de détection du Comité de l'Hérault de Handball. Évaluer · Suivre · Faire
              progresser les jeunes.
            </p>

            <div className="mt-5 flex gap-3">
              {INSTAGRAM_URL && (
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-primary-100/80 hover:bg-white/10 hover:text-white transition"
                  aria-label="Instagram VIGIE"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-primary-100/80 hover:bg-white/10 hover:text-white transition"
                aria-label="Écrire à l'assistance"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            {/* Partenaire — Comité Hérault FFHandball */}
            <div className="mt-7">
              <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-primary-100/60">
                Utilisé par
              </div>
              <a
                href={COMITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center rounded-xl bg-white px-4 py-3 shadow-lift transition hover:scale-[1.02]"
                aria-label="Comité de l'Hérault de Handball"
              >
                <ComiteLogo />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-sm font-semibold text-white">{c.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} className="text-sm text-primary-100/70 hover:text-white transition">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-primary-100/60">
          <span>© {new Date().getFullYear()} VIGIE · Enzo Albert</span>
          <span>« Observer pour individualiser »</span>
        </div>
      </div>
    </footer>
  )
}

/* ---------- Logo Comité Hérault FFHandball ----------
   Affiche /comite-herault.png, sinon un repli texte. */
function ComiteLogo() {
  const [errored, setErrored] = useState(false)
  if (errored) {
    return (
      <span className="font-display text-[13px] font-extrabold tracking-tight text-primary-700">
        COMITÉ DE L'HÉRAULT · FFHandball
      </span>
    )
  }
  return (
    <img
      src="/comite-herault.png"
      alt="Comité de l'Hérault de Handball"
      onError={() => setErrored(true)}
      className="h-12 w-auto"
    />
  )
}

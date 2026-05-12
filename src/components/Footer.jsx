import { useState } from 'react'
import { Linkedin, Youtube, Mail, ArrowRight } from 'lucide-react'

const cols = [
  {
    title: 'Produit',
    links: [
      ['Fonctionnalités', '#solution'],
      ['Pourquoi Vigie', '#probleme'],
      ['Démo', 'mailto:enzoalbert2003@gmail.com?subject=Démonstration%20Vigie'],
      ['Bibliothèque', '#ressources'],
    ],
  },
  {
    title: 'Comité',
    links: [
      ['Comité Hérault', 'https://herault-handball.fr'],
      ['FFHandball', 'https://www.ffhandball.fr'],
      ['Cadres techniques', '#'],
      ['Formation', '#'],
    ],
  },
  {
    title: 'Légal',
    links: [
      ['Mentions légales', '#'],
      ['CGU', '#'],
      ['Confidentialité', '#'],
      ['RGPD', '#'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-100/80">
      {/* CTA bandeau */}
      <div className="container-x">
        <div className="-mt-12 rounded-3xl bg-gradient-to-br from-primary-700 to-primary-900 text-white p-8 sm:p-10 grid md:grid-cols-2 gap-6 items-center shadow-lift ring-1 ring-white/10">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
              Plus d'observations. De meilleures décisions.
            </h3>
            <p className="mt-2 text-primary-100/90 text-sm sm:text-base">
              Activez Vigie pour votre club du Comité Hérault. 14 jours d'essai. Sans engagement.
            </p>
          </div>
          <div className="flex flex-wrap md:justify-end gap-3">
            <a
              href="mailto:enzoalbert2003@gmail.com?subject=Démonstration%20Vigie"
              className="btn bg-accent text-white hover:bg-accent-700 hover:-translate-y-0.5 shadow-lift"
            >
              Demander une démo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:enzoalbert2003@gmail.com?subject=Contact%20Vigie"
              className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      <div className="container-x pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a
              href="#"
              className="inline-flex items-center group"
              aria-label="Vigie"
            >
              <img
                src="/Logo-vigies.png"
                alt="Vigie"
                className="h-16 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition group-hover:scale-[1.02]"
              />
            </a>

            <p className="mt-5 text-sm leading-relaxed text-primary-100/70 max-w-sm">
              L'outil qui transforme la notation en décisions d'entraînement
              adaptées à chaque joueur. Plus d'observations · De meilleures
              décisions · Pour chaque joueur.
            </p>

            <div className="mt-5 flex gap-3">
              {[Linkedin, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-primary-100/80 hover:bg-white/10 hover:text-white transition"
                  aria-label="Lien"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Partenaire — Comité Hérault FFHandball */}
            <div className="mt-7">
              <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-primary-100/60">
                En partenariat avec
              </div>
              <a
                href="https://herault-handball.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center rounded-xl bg-white px-4 py-3 shadow-lift transition hover:scale-[1.02]"
                aria-label="Comité Hérault FFHandball"
              >
                <ComiteLogo />
              </a>
            </div>
          </div>

          {/* Cols */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-sm font-semibold text-white">
                  {c.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-sm text-primary-100/70 hover:text-white transition"
                      >
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
          <span>
            © {new Date().getFullYear()} Vigie · Comité Hérault FFHandball
          </span>
          <span>
            Plus d'observations · De meilleures décisions · Pour chaque joueur
          </span>
        </div>
      </div>
    </footer>
  )
}

/* ---------- Logo Comité Hérault FFHandball ----------
   Affiche /comite-herault.png si dispo dans /public,
   sinon fallback texte + rooster SVG approximatif. */
function ComiteLogo() {
  const [errored, setErrored] = useState(false)
  if (errored) return <ComiteLogoFallback />
  return (
    <img
      src="/comite-herault.png"
      alt="Comité Hérault FFHandball"
      onError={() => setErrored(true)}
      className="h-12 w-auto"
    />
  )
}

function ComiteLogoFallback() {
  return (
    <div className="flex items-center gap-3">
      <div className="leading-tight">
        <div className="font-display text-[13px] font-extrabold tracking-tight text-primary-700">
          COMITÉ
        </div>
        <div className="font-display text-[13px] font-extrabold tracking-tight text-primary-700">
          HÉRAULT
        </div>
        <div className="text-[10px] font-bold uppercase tracking-wider text-accent-600">
          FFHandball
        </div>
      </div>
      {/* Coq stylisé */}
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
        <path d="M30 6c2 3 4 5 7 5l-2 4 4 1-3 3 3 2-5 1c-1 4-4 7-9 8-5 1-10-1-13-5l-3 2 1-4-4-1 4-2-1-4 4 1 2-4c4-3 9-4 13-2 0-2 1-3 2-5Z" fill="#D9303B"/>
        <path d="M12 22c2 5 7 9 13 9 4 0 8-2 11-5l-3-2 3-2-3-3 4-1-2-3 3 2c-2 3-6 4-11 4-6 0-12-3-15 1Z" fill="#0F2A5F"/>
        <circle cx="32" cy="16" r="1.5" fill="#fff"/>
      </svg>
    </div>
  )
}

import { Linkedin, Youtube, Mail, ArrowRight } from 'lucide-react'

const cols = [
  {
    title: 'Produit',
    links: [
      ['Fonctionnalités', '#solution'],
      ['Témoignages', '#avis'],
      ['Démo', 'mailto:contact@vigie-handball.fr?subject=Démonstration%20Vigie'],
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
              href="mailto:contact@vigie-handball.fr?subject=Démonstration%20Vigie"
              className="btn bg-accent text-white hover:bg-accent-700 hover:-translate-y-0.5 shadow-lift"
            >
              Demander une démo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:contact@vigie-handball.fr?subject=Contact%20Vigie"
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
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-primary-500 text-white ring-1 ring-white/15">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <circle cx="12" cy="12" r="3" fill="white" />
                  <path d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7Z" stroke="white" strokeWidth="2" />
                </svg>
              </span>
              <div className="leading-tight">
                <div className="font-display text-lg font-extrabold tracking-tight text-white">Vigie</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-accent-300">
                  Comité Hérault FFHandball
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-100/70 max-w-sm">
              L'outil qui transforme la notation en décisions d'entraînement adaptées à chaque joueur.
              Plus d'observations. De meilleures décisions. Pour chaque joueur.
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

            {/* Comité badge */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-3 py-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-700 text-white text-xs font-extrabold">
                FF
              </span>
              <div className="leading-tight">
                <div className="text-[11px] font-extrabold text-primary-700">Comité Hérault</div>
                <div className="text-[9px] uppercase tracking-wider font-bold text-primary-500">
                  FFHandball
                </div>
              </div>
            </div>
          </div>

          {/* Cols */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
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
          <span>© {new Date().getFullYear()} Vigie · Comité Hérault FFHandball</span>
          <span>Plus d'observations · De meilleures décisions · Pour chaque joueur</span>
        </div>
      </div>
    </footer>
  )
}

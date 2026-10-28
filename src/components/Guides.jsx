import { motion } from 'framer-motion'
import { ArrowRight, Download, PlayCircle } from 'lucide-react'
import { guides } from '../guides.js'

export default function Guides() {
  return (
    <section id="guides" className="section scroll-mt-16 bg-white text-ink">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow-dark">Manuels d'utilisation</span>
          <h2 className="heading-lg mt-4 text-ink">
            Les guides, <span className="text-accent-700">pas à pas</span>.
          </h2>
          <p className="lead mt-4 text-slate-600">
            Lisibles sur téléphone, à garder sous la main au bord du terrain.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {guides.map((g, i) => (
            <motion.a
              key={g.slug}
              href={`/guides/${g.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group card flex gap-4 hover:-translate-y-1 hover:shadow-lift hover:border-accent/40"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-700 text-gold">
                <g.icon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-600">
                  {g.audience}
                </div>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">{g.title}</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{g.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 group-hover:gap-2.5 transition-all">
                  Lire le guide <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <a
            href="/guides/guide-seances-ressources-vigie.pdf"
            download
            className="flex items-center gap-3 rounded-2xl border border-line bg-soft p-4 text-sm hover:border-accent/50 transition"
          >
            <Download className="h-5 w-5 text-accent-700" />
            <span>
              <strong className="text-ink">Guide Séances & ressources</strong>
              <span className="text-slate-600"> · PDF à imprimer, 10 pages</span>
            </span>
          </a>
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-soft p-4 text-sm">
            <PlayCircle className="h-5 w-5 text-accent-700" />
            <span className="text-slate-600">
              <strong className="text-ink">Tutoriels vidéo</strong> (téléphone et ordinateur) :
              dans l'onglet <strong className="text-ink">Aide</strong> de l'app.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, Download, Lightbulb, ShieldAlert } from 'lucide-react'
import CtaLink from './CtaLink.jsx'
import { guides } from '../guides.js'
import { SUPPORT_EMAIL } from '../config.js'

export default function GuidePage({ guide }) {
  useEffect(() => {
    document.title = `${guide.title} · VIGIE`
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [guide])

  const others = guides.filter((g) => g.slug !== guide.slug)

  return (
    <div className="bg-white text-ink">
      {/* En-tête */}
      <header className="bg-navy-radial text-white">
        <div className="container-x pt-8 pb-12 sm:pt-12 sm:pb-16">
          <a href="/#guides" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-100/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Tous les guides
          </a>
          <div className="mt-6 eyebrow-gold">
            <guide.icon className="h-4 w-4" /> Manuel d'utilisation · {guide.audience}
          </div>
          <h1 className="heading-xl mt-3">{guide.title}</h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-primary-100/90">{guide.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaLink className="btn-gold" url={guide.appUrl} label={guide.appLabel} />
            {guide.pdf && (
              <a href={guide.pdf} download className="btn-ghost">
                <Download className="h-4 w-4" /> Version PDF
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="container-x py-10 sm:py-14 grid lg:grid-cols-12 gap-10">
        {/* Sommaire */}
        <aside className="lg:col-span-3">
          <nav className="lg:sticky lg:top-24 rounded-2xl border border-line bg-soft p-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Sommaire</div>
            <ol className="mt-3 space-y-1.5 text-sm">
              {guide.sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="flex gap-2 text-slate-600 hover:text-accent-700">
                    <span className="tabular-nums text-slate-400">{i + 1}.</span> {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Sections */}
        <article className="lg:col-span-9 min-w-0 space-y-14">
          {guide.sections.map((s, i) => (
            <Section key={s.id} section={s} index={i} />
          ))}

          <div className="rounded-2xl bg-primary-700 text-white p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold">Un doute, un blocage ?</h2>
            <p className="mt-2 text-primary-100/90">
              Formulaire « Contacter l'assistance » dans l'onglet Aide de VIGIE, ou écrivez à Enzo
              Albert, responsable détection :{' '}
              <a href={`mailto:${SUPPORT_EMAIL}?subject=Assistance%20VIGIE`} className="font-semibold text-gold underline-offset-4 hover:underline break-all">
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>
        </article>
      </div>

      {/* Autres guides */}
      <div className="bg-soft border-t border-line">
        <div className="container-x py-12">
          <h2 className="font-display text-lg font-bold text-ink">Les autres guides</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {others.map((g) => (
              <a key={g.slug} href={`/guides/${g.slug}`} className="group card flex items-start gap-3 hover:border-accent/40 hover:shadow-lift">
                <g.icon className="h-5 w-5 mt-0.5 text-accent-700" />
                <div>
                  <div className="font-semibold text-ink">{g.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{g.summary}</div>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
                    Lire <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({ section: s, index }) {
  return (
    <section id={s.id} className="scroll-mt-24">
      <h2 className="flex items-baseline gap-3 font-headline text-2xl sm:text-3xl font-bold text-ink">
        <span className="text-gold-600">{String(index + 1).padStart(2, '0')}</span>
        {s.title}
      </h2>
      {s.intro && <p className="mt-3 text-slate-600 leading-relaxed">{s.intro}</p>}

      {s.steps && (
        <ol className="mt-5 space-y-3">
          {s.steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-700 text-xs font-bold text-gold">
                {i + 1}
              </span>
              <span className="pt-0.5 text-ink leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      )}

      {s.items && (
        <dl className="mt-5 grid gap-3 sm:grid-cols-2">
          {s.items.map(([label, text]) => (
            <div key={label} className="rounded-xl border border-line p-4">
              <dt className="font-semibold text-ink">{label}</dt>
              <dd className="mt-1 text-sm text-slate-600 leading-relaxed">{text}</dd>
            </div>
          ))}
        </dl>
      )}

      {s.table && (
        <div className="mt-5 overflow-x-auto rounded-xl border border-line">
          <table className="w-full text-sm">
            <thead className="bg-soft text-left">
              <tr>
                {s.table.head.map((h) => (
                  <th key={h} className="px-4 py-2.5 font-semibold text-ink whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {s.table.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-2.5 align-top ${j === 0 ? 'font-medium text-ink' : 'text-slate-600'} ${row.length > 2 && j < 3 ? 'whitespace-nowrap' : ''}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {s.scales && (
        <div className="mt-6 space-y-4">
          {s.scales.map((sc) => (
            <div key={sc.name} className="rounded-2xl border border-line overflow-hidden">
              <div className="bg-soft px-4 py-3">
                <div className="font-display font-bold text-ink">{sc.name}</div>
                <div className="text-sm text-slate-500">{sc.desc}</div>
              </div>
              <ol className="divide-y divide-line">
                {sc.levels.map((lvl, i) => (
                  <li key={i} className="flex gap-3 px-4 py-2.5 text-sm">
                    <span className="w-5 shrink-0 font-bold tabular-nums text-accent-700">{i + 1}</span>
                    <span className="text-slate-700">{lvl}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}

      {s.tip && (
        <div className="mt-5 flex gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4 text-sm text-ink">
          <Lightbulb className="h-5 w-5 shrink-0 text-gold-600" />
          <p>{s.tip}</p>
        </div>
      )}

      {s.note && (
        <div className="mt-5 flex gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4 text-sm text-ink">
          <ShieldAlert className="h-5 w-5 shrink-0 text-accent-700" />
          <p>{s.note}</p>
        </div>
      )}
    </section>
  )
}

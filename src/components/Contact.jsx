import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { SUPPORT_EMAIL } from '../config.js'

// Formulaire Netlify Forms : le formulaire statique jumeau (name="contact") est
// déclaré dans index.html pour que Netlify le détecte au déploiement.
// Les messages arrivent dans Netlify → Forms (notification e-mail réglable là-bas).

const profils = [
  'Entraîneur de club',
  'Dirigeant ou responsable technique de club',
  'Comité, ligue ou fédération',
  'Autre',
]

const encode = (data) => new URLSearchParams(data).toString()

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.target))
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...data }),
      })
      if (!res.ok) throw new Error(res.status)
      setStatus('sent')
      e.target.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section scroll-mt-16 bg-navy-radial text-white">
      <div className="container-x grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <span className="eyebrow-gold">Contact</span>
          <h2 className="heading-lg mt-4">Une question sur VIGIE ?</h2>
          <p className="lead mt-4 text-primary-100/85">
            Entraîneur, club, comité ou ligue : laissez-nous un message, nous vous répondons
            rapidement.
          </p>
        </div>

        <div className="lg:col-span-7">
          {status === 'sent' ? (
            <div className="rounded-2xl bg-white/[0.06] ring-1 ring-white/10 p-8 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
              <h3 className="mt-4 font-display text-xl font-bold">Message envoyé, merci !</h3>
              <p className="mt-2 text-primary-100/80">Nous revenons vers vous très vite.</p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="rounded-2xl bg-white p-6 sm:p-8 text-ink shadow-lift grid gap-4 sm:grid-cols-2"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Ne pas remplir : <input name="bot-field" />
                </label>
              </p>

              <Field label="Nom et prénom" name="nom" required autoComplete="name" />
              <Field label="E-mail" name="email" type="email" required autoComplete="email" />

              <label className="block">
                <span className="text-sm font-semibold">Vous êtes</span>
                <select name="profil" required defaultValue="" className={inputCls}>
                  <option value="" disabled>
                    Choisir…
                  </option>
                  {profils.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </label>
              <Field label="Club ou structure" name="structure" />

              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold">Message</span>
                <textarea name="message" required rows={5} className={inputCls} />
              </label>

              <p className="sm:col-span-2 text-xs text-slate-500">
                Vos informations servent uniquement à vous répondre. Ne transmettez aucune donnée
                sur un joueur (nom, date de naissance…).
              </p>

              {status === 'error' && (
                <p className="sm:col-span-2 rounded-xl bg-rose-50 p-3 text-sm text-rose-700">
                  L'envoi n'a pas fonctionné. Réessayez, ou écrivez directement à{' '}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold underline break-all">
                    {SUPPORT_EMAIL}
                  </a>
                  .
                </p>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn bg-primary-700 text-white hover:bg-primary-800 disabled:opacity-60 w-full sm:w-auto"
                >
                  {status === 'sending' ? 'Envoi…' : 'Envoyer'} <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

const inputCls =
  'mt-1.5 block w-full rounded-xl border border-line bg-soft px-3.5 py-2.5 text-base text-ink focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/30'

function Field({ label, name, type = 'text', required, autoComplete }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <input type={type} name={name} required={required} autoComplete={autoComplete} className={inputCls} />
    </label>
  )
}

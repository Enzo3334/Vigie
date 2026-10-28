import { ArrowUpRight, Mail } from 'lucide-react'
import { APP_LINKS_ENABLED, APP_URL } from '../config.js'

// Bouton principal : ouvre l'app si les liens sont activés, sinon renvoie au formulaire de contact.
export default function CtaLink({ className, url = APP_URL, label = 'Ouvrir VIGIE' }) {
  if (!APP_LINKS_ENABLED) {
    return (
      <a href="/#contact" className={className}>
        Nous contacter <Mail className="h-4 w-4" />
      </a>
    )
  }
  return (
    <a href={url} className={className}>
      {label} <ArrowUpRight className="h-4 w-4" />
    </a>
  )
}

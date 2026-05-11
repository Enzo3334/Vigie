import { motion } from 'framer-motion'

const links = [
  { href: '#probleme', label: 'Pourquoi Vigie' },
  { href: '#solution', label: 'Fonctionnalités' },
  { href: '#avis', label: 'Témoignages' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="sticky top-0 z-40 backdrop-blur bg-primary-900/80 border-b border-white/10"
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a
          href="#"
          className="group flex items-center gap-2 transition hover:opacity-90"
          aria-label="Vigie · Comité Hérault FFHandball"
        >
          <img
            src="/Logo-vigies.png"
            alt="Vigie · Comité Hérault FFHandball"
            className="h-11 sm:h-12 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition group-hover:scale-[1.03]"
          />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-100/80 hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#login"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-primary-100/80 hover:text-white transition"
          >
            Connexion
          </a>
          <a
            href="mailto:contact@vigie-handball.fr?subject=Démonstration%20Vigie"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-bold text-white shadow-lift hover:bg-accent-700 hover:-translate-y-0.5 transition"
          >
            Demander une démo
          </a>
        </div>
      </div>
    </motion.header>
  )
}

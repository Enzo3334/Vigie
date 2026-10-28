import { motion } from 'framer-motion'
import CtaLink from './CtaLink.jsx'

const links = [
  { href: '/#demarrer', label: 'Démarrer' },
  { href: '/#outil', label: "L'outil" },
  { href: '/#guides', label: 'Guides' },
  { href: '/#projet', label: 'Le projet' },
  { href: '/#faq', label: 'FAQ' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="sticky top-0 z-40 backdrop-blur bg-primary-950/85 border-b border-white/10"
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a
          href="/"
          className="group flex items-center gap-2 transition hover:opacity-90"
          aria-label="VIGIE · accueil"
        >
          <img
            src="/Logo-vigies.png"
            alt="VIGIE"
            className="h-11 sm:h-12 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition group-hover:scale-[1.03]"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
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
            href="/#guides"
            className="lg:hidden inline-flex items-center rounded-xl px-3 py-2 text-sm font-semibold text-primary-100/85 hover:text-white transition"
          >
            Guides
          </a>
          <CtaLink className="inline-flex items-center gap-1.5 rounded-xl bg-gold px-4 py-2 text-sm font-bold text-primary-950 shadow-lift hover:bg-gold-400 hover:-translate-y-0.5 transition" />
        </div>
      </div>
    </motion.header>
  )
}

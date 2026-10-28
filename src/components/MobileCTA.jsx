import { useEffect, useState } from 'react'
import CtaLink from './CtaLink.jsx'

// Bouton fixe en bas d'écran sur téléphone (visiteurs arrivant d'Instagram),
// affiché une fois le haut de page dépassé.
export default function MobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-primary-950 via-primary-950/90 to-transparent transition duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <CtaLink className="btn-gold w-full text-base" />
    </div>
  )
}

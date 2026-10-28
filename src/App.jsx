import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Start from './components/Start.jsx'
import Why from './components/Why.jsx'
import Modules from './components/Modules.jsx'
import Guides from './components/Guides.jsx'
import Cadre from './components/Cadre.jsx'
import About from './components/About.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import MobileCTA from './components/MobileCTA.jsx'
import GuidePage from './components/GuidePage.jsx'
import { guides } from './guides.js'

// Routage minimal : /guides/<slug> affiche un guide, tout le reste la page d'accueil.
// Netlify renvoie toutes les URL vers index.html (cf. netlify.toml).
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  const match = path.match(/^\/guides\/([\w-]+)$/)
  const guide = match && guides.find((g) => g.slug === match[1])

  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />
      <main>{guide ? <GuidePage guide={guide} /> : <Home />}</main>
      <Footer />
      <MobileCTA />
    </div>
  )
}

function Home() {
  // Arrivée depuis une page guide avec une ancre (/#guides) : on scrolle une fois rendu
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <>
      <Hero />
      <Start />
      <Why />
      <Modules />
      <Guides />
      <Cadre />
      <About />
      <FAQ />
      <Contact />
    </>
  )
}

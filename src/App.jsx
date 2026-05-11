import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Solution from './components/Solution.jsx'
import SocialProof from './components/SocialProof.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

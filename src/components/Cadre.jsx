import { ShieldCheck, Users, CameraOff, UserRound } from 'lucide-react'

const rules = [
  {
    icon: Users,
    title: 'Chaque club ne voit que ses licenciés',
    body: 'Les évaluations et les bilans restent entre le club et le Comité.',
  },
  {
    icon: ShieldCheck,
    title: 'Un outil au service de la détection',
    body: 'VIGIE est utilisé dans le cadre de la mission de détection confiée au Comité par la Fédération.',
  },
  {
    icon: CameraOff,
    title: "Aucune capture d'écran avec un nom",
    body: "Ne partagez jamais un écran VIGIE sur les réseaux ou dans un groupe de discussion.",
  },
  {
    icon: UserRound,
    title: 'Le bilan se partage en individuel',
    body: 'Avec le joueur et sa famille, jamais en affichage collectif.',
  },
]

export default function Cadre() {
  return (
    <section id="cadre" className="section scroll-mt-16 bg-primary-950 text-white">
      <div className="container-x grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <span className="eyebrow-gold">Le cadre</span>
          <h2 className="heading-lg mt-4">Des données de mineurs, protégées par des règles simples.</h2>
        </div>
        <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
          {rules.map((r) => (
            <div key={r.title} className="card-dark">
              <r.icon className="h-5 w-5 text-gold" />
              <h3 className="mt-3 font-display font-bold">{r.title}</h3>
              <p className="mt-1.5 text-sm text-primary-100/75 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

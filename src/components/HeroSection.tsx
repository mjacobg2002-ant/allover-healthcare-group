import { ArrowRight, Phone, MapPin } from 'lucide-react'
import { ORG, LINKS, IMG } from '../config/site'
import { HERO } from '../config/content'
import { PathwayMotif } from './PathwayMotif'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ivory" aria-labelledby="hero-h1">
      <PathwayMotif className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.55]" />
      {/* soft mineral wash on the right */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary-soft/70 blur-3xl" />

      <div className="container-x relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="reveal">
          <p className="eyebrow text-primary">
            <span className="h-px w-6 bg-primary" aria-hidden="true" />
            {HERO.eyebrow}
          </p>
          <h1 id="hero-h1" className="h1 mt-5 max-w-[15ch] text-ink">
            {HERO.h1}
          </h1>
          <p className="lead mt-6 max-w-prose">{HERO.sub}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={LINKS.makeReferral} className="btn-primary">
              Make a referral <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={LINKS.services} className="btn-outline">
              Explore our services
            </a>
            <a href={ORG.phone.mainTel} className="link-underline ml-1 inline-flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {ORG.phone.main} {ORG.phone.mainExt}
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-body">
            {HERO.reassurance.map((r) => (
              <li key={r} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-health" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* primary visual moment — authentic photo in a refined editorial frame */}
        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-xl">
            <img
              src={IMG.groupSession}
              alt="Adults in a supportive group therapy session, one participant standing and smiling"
              className="aspect-[7/5] w-full object-cover"
              width={700}
              height={466}
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
          </div>

          {/* floating location chip */}
          <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-ivory px-4 py-2 text-sm font-semibold text-ink shadow-md sm:left-6">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            Baltimore, Maryland
          </div>
        </div>
      </div>
    </section>
  )
}

import {
  Brain,
  HandHeart,
  Users2,
  ShieldPlus,
  Puzzle,
  Briefcase,
  ArrowRight,
} from 'lucide-react'
import { SERVICES } from '../config/content'
import { LINKS } from '../config/site'

const icons = [Brain, HandHeart, Users2, ShieldPlus, Puzzle, Briefcase]

export function HealthcareServices() {
  return (
    <section id="services" className="scroll-mt-20 bg-ivory py-16 md:py-24" aria-labelledby="services-h">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-health">Allover Healthcare</p>
          <h2 id="services-h" className="h2 mt-3">
            Personalized support across every stage of care
          </h2>
          <p className="lead mt-4">
            Plain-language pathways for adults, children, adolescents and families — delivered where
            they are most helpful.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = icons[i]
            return (
              <article
                key={s.title}
                className="reveal card group flex flex-col p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-health/10 text-health">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-sage px-3 py-1 text-xs font-semibold text-body">
                    {s.audience}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-body">{s.body}</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4 text-sm">
                  <a href="#pathways" className="link-underline text-primary">
                    Learn about this service
                  </a>
                  <a
                    href={LINKS.makeReferral}
                    className="inline-flex items-center gap-1 font-semibold text-health hover:underline"
                  >
                    Refer <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

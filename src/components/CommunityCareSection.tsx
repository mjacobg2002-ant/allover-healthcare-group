import { Check } from 'lucide-react'
import { COMMUNITY } from '../config/content'
import { IMG } from '../config/site'

export function CommunityCareSection() {
  return (
    <section className="bg-ivory py-16 md:py-24" aria-labelledby="community-h">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="reveal relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[1.5rem] border border-border shadow-lg">
            <img
              src={IMG.consult}
              alt="Two people talking warmly during a supportive conversation"
              className="aspect-[4/3] w-full object-cover object-top"
              width={200}
              height={254}
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 hidden w-40 overflow-hidden rounded-2xl border-4 border-ivory shadow-lg sm:block">
            <img
              src={IMG.counseling}
              alt="A counselor offering reassurance during a home-based session"
              className="aspect-square w-full object-cover"
              width={150}
              height={100}
              loading="lazy"
            />
          </div>
        </div>

        <div className="reveal order-1 lg:order-2">
          <p className="eyebrow text-health">Our approach</p>
          <h2 id="community-h" className="h2 mt-3">
            {COMMUNITY.heading}
          </h2>
          <p className="lead mt-4 max-w-prose">{COMMUNITY.body}</p>
          <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {COMMUNITY.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-body">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-health" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

import { Check, ArrowRight } from 'lucide-react'
import { CAREWARE } from '../config/content'
import { LINKS } from '../config/site'

export function CareWareFeature() {
  return (
    <section
      id="careware"
      className="scroll-mt-28 border-y border-tech/15 bg-tech/[0.04] py-16 md:py-24"
      aria-labelledby="careware-h"
    >
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="reveal">
          <p className="eyebrow text-tech">Allover CareWare</p>
          <h2 id="careware-h" className="h2 mt-3">
            {CAREWARE.heading}
          </h2>
          <p className="lead mt-4 max-w-prose">{CAREWARE.body}</p>
          <ul className="mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {CAREWARE.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-body">
                <Check className="h-4 w-4 shrink-0 text-tech" aria-hidden="true" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LINKS.softwareDemo} className="btn-navy">
              Request a demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={LINKS.softwareDemo}
              className="btn border border-tech/40 text-tech hover:bg-tech/10"
            >
              Explore Allover CareWare
            </a>
          </div>
        </div>

        {/* Conceptual product preview — clearly labeled, not a real UI */}
        <div className="reveal">
          <figure className="overflow-hidden rounded-2xl border border-tech/20 bg-white shadow-xl">
            <div className="flex items-center gap-1.5 border-b border-border bg-navy px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" aria-hidden="true" />
              <span className="ml-3 text-xs font-medium text-white/70">Allover CareWare</span>
            </div>
            <div className="grid grid-cols-3 gap-3 p-5" aria-hidden="true">
              {['Referrals', 'Scheduling', 'Case load'].map((label) => (
                <div key={label} className="rounded-lg bg-tech/5 p-3">
                  <div className="text-[0.6rem] font-semibold uppercase tracking-wide text-tech">{label}</div>
                  <div className="mt-2 h-2 w-3/4 rounded bg-tech/20" />
                  <div className="mt-1.5 h-2 w-1/2 rounded bg-tech/10" />
                </div>
              ))}
              <div className="col-span-3 rounded-lg border border-border p-4">
                <div className="mb-3 h-2 w-1/3 rounded bg-navy/20" />
                {[80, 60, 45].map((w) => (
                  <div key={w} className="mb-2 flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-tech/15" />
                    <div className="h-2 rounded bg-black/10" style={{ width: `${w}%` }} />
                  </div>
                ))}
              </div>
            </div>
            <figcaption className="border-t border-border bg-sage px-4 py-2 text-center text-xs font-medium text-body">
              Product interface preview — conceptual illustration
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

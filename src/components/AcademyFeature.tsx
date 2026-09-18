import { GraduationCap, ArrowRight } from 'lucide-react'
import { ACADEMY } from '../config/content'
import { LINKS } from '../config/site'

export function AcademyFeature() {
  return (
    <section
      id="academy"
      className="scroll-mt-28 bg-academy/[0.06] py-16 md:py-24"
      aria-labelledby="academy-h"
    >
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="reveal">
            <p className="eyebrow text-academy">Allover Academy</p>
            <h2 id="academy-h" className="h2 mt-3">
              {ACADEMY.heading}
            </h2>
            <p className="lead mt-4 max-w-prose">{ACADEMY.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={LINKS.academyPrograms}
                className="btn bg-academy text-ivory hover:bg-academy/90"
              >
                Browse programs <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={LINKS.academyRegister}
                className="btn border border-academy/50 text-academy hover:bg-academy/10"
              >
                Register for a class
              </a>
            </div>
            <p className="mt-5 max-w-prose text-sm text-body">
              Program eligibility and any court, MVA, licensing or insurance requirements should be
              confirmed with Allover Academy before enrolling.
            </p>
          </div>

          <ul className="reveal grid gap-3 sm:grid-cols-2">
            {ACADEMY.programs.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-xl border border-academy/20 bg-white px-4 py-4 text-[0.95rem] font-medium text-ink"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-academy/10 text-academy">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

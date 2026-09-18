import { useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { PATHWAYS } from '../config/content'

export function AudiencePathways() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Home' && e.key !== 'End') return
    e.preventDefault()
    let next = active
    if (e.key === 'ArrowDown') next = (active + 1) % PATHWAYS.length
    if (e.key === 'ArrowUp') next = (active - 1 + PATHWAYS.length) % PATHWAYS.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = PATHWAYS.length - 1
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const current = PATHWAYS[active]

  return (
    <section id="pathways" className="scroll-mt-20 bg-navy py-16 text-ivory md:py-24" aria-labelledby="pathways-h">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-white/70">Find your route</p>
          <h2 id="pathways-h" className="h2 mt-3 text-ivory">
            Find the right next step
          </h2>
          <p className="lead mt-4 text-white/80">
            Tell us who you are and we’ll point you to the most useful actions.
          </p>
        </div>

        <div className="reveal mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Tab list (vertical) */}
          <div
            role="tablist"
            aria-label="Choose who you are"
            aria-orientation="vertical"
            className="flex flex-col gap-2"
            onKeyDown={onKeyDown}
          >
            {PATHWAYS.map((p, i) => {
              const selected = i === active
              return (
                <button
                  key={p.id}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  role="tab"
                  id={`ptab-${p.id}`}
                  aria-selected={selected}
                  aria-controls={`ppanel-${p.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`flex items-center justify-between gap-3 rounded-xl border px-5 py-4 text-left text-[0.98rem] font-medium transition-colors ${
                    selected
                      ? 'border-health bg-white text-ink shadow-sm'
                      : 'border-white/15 bg-white/5 text-white/90 hover:bg-white/10'
                  }`}
                >
                  {p.label}
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition-transform ${selected ? 'text-health' : 'text-white/40'}`}
                    aria-hidden="true"
                  />
                </button>
              )
            })}
          </div>

          {/* Active panel */}
          <div
            role="tabpanel"
            id={`ppanel-${current.id}`}
            aria-labelledby={`ptab-${current.id}`}
            className="rounded-2xl border border-white/15 bg-white/[0.04] p-7"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-health">Your next steps</p>
            <p className="mt-2 font-serif text-2xl text-ivory">{current.label}</p>
            <ul className="mt-6 space-y-3">
              {current.actions.map((a) => (
                <li key={a.label}>
                  <a
                    href={a.href}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white px-5 py-4 font-semibold text-ink transition-colors hover:bg-primary-soft"
                  >
                    {a.label}
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

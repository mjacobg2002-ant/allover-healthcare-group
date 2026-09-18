import { HeartPulse, MonitorCheck, GraduationCap, ArrowRight } from 'lucide-react'
import { DIVISIONS } from '../config/content'

const meta = {
  health: {
    Icon: HeartPulse,
    accent: 'text-health',
    ring: 'border-health/30',
    chip: 'bg-health/10 text-health',
  },
  tech: {
    Icon: MonitorCheck,
    accent: 'text-tech',
    ring: 'border-tech/30',
    chip: 'bg-tech/10 text-tech',
  },
  academy: {
    Icon: GraduationCap,
    accent: 'text-academy',
    ring: 'border-academy/30',
    chip: 'bg-academy/10 text-academy',
  },
} as const

export function DivisionOverview() {
  const [health, tech, academy] = DIVISIONS
  const supporting = [tech, academy]

  return (
    <section className="bg-sage py-16 md:py-24" aria-labelledby="divisions-h">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-primary">One organization</p>
          <h2 id="divisions-h" className="h2 mt-3">
            One organization. Three ways to strengthen communities.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Dominant healthcare panel */}
          <article
            className={`reveal card ${meta.health.ring} relative flex flex-col justify-between overflow-hidden p-8 lg:row-span-2`}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-health/5" />
            <div className="relative">
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${meta.health.chip}`}
              >
                <HeartPulse className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className={`mt-6 block text-xs font-bold uppercase tracking-widest ${meta.health.accent}`}>
                Primary focus
              </span>
              <h3 className="mt-2 font-serif text-3xl text-ink">{health.name}</h3>
              <p className="lead mt-3 max-w-md">{health.line}</p>
            </div>
            <div className="relative mt-8 flex flex-wrap gap-3">
              {health.actions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  className={a.primary ? 'btn-primary' : 'btn-outline'}
                >
                  {a.label}
                  {a.primary && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                </a>
              ))}
            </div>
          </article>

          {/* Two supporting panels */}
          {supporting.map((d) => {
            const m = meta[d.key]
            return (
              <article key={d.key} className={`reveal card ${m.ring} flex flex-col p-7`}>
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${m.chip}`}
                >
                  <m.Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-2xl text-ink">{d.name}</h3>
                <p className="mt-2 flex-1 text-body">{d.line}</p>
                <div className="mt-5">
                  {d.actions.map((a) => (
                    <a key={a.label} href={a.href} className={`link-underline ${m.accent} decoration-current/30`}>
                      {a.label} <ArrowRight className="ml-1 inline h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

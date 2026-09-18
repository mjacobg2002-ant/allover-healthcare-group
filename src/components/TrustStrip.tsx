import { Users, MapPinned, Route, Clock } from 'lucide-react'
import { TRUST_STRIP } from '../config/content'

const icons = [Users, MapPinned, Route, Clock]

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-primary text-ivory" aria-label="What we offer">
      <div className="container-x grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
        {TRUST_STRIP.map((item, i) => {
          const Icon = icons[i]
          return (
            <div key={item} className="flex items-center gap-3 px-2 py-5 sm:px-4">
              <Icon className="h-5 w-5 shrink-0 text-white/80" aria-hidden="true" />
              <span className="text-sm font-medium leading-snug">{item}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

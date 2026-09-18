import { Phone } from 'lucide-react'
import { CRISIS } from '../config/site'

export function CrisisUtilityBar() {
  return (
    <div className="bg-navy text-ivory" role="region" aria-label="Crisis support">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-2 gap-y-1 py-2 text-center text-[0.82rem] leading-snug">
        <Phone className="hidden h-3.5 w-3.5 shrink-0 sm:inline" aria-hidden="true" />
        <span>Need immediate crisis support? Call or text</span>
        <a href={CRISIS.line988} className="font-bold underline underline-offset-2 hover:text-white">
          988
        </a>
        <span aria-hidden="true">·</span>
        <span>If you or someone else is in immediate danger, call</span>
        <a href={CRISIS.line911} className="font-bold underline underline-offset-2 hover:text-white">
          911
        </a>
      </div>
    </div>
  )
}

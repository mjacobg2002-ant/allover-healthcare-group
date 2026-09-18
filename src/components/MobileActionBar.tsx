import { Phone, LayoutGrid, FileText } from 'lucide-react'
import { ORG, LINKS } from '../config/site'

export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-ivory/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-3">
        <a
          href={ORG.phone.mainTel}
          className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold text-ink"
        >
          <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
          Call
        </a>
        <a
          href={LINKS.services}
          className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 border-x border-border py-2 text-xs font-semibold text-ink"
        >
          <LayoutGrid className="h-5 w-5 text-primary" aria-hidden="true" />
          Services
        </a>
        <a
          href={LINKS.makeReferral}
          className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 bg-primary py-2 text-xs font-semibold text-ivory"
        >
          <FileText className="h-5 w-5" aria-hidden="true" />
          Refer
        </a>
      </div>
    </nav>
  )
}

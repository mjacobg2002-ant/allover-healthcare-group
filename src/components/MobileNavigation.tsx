import { useEffect, useRef } from 'react'
import { X, Phone, ArrowRight } from 'lucide-react'
import { ORG, LINKS, IMG } from '../config/site'
import type { NavItem } from './SiteHeader'

interface Props {
  open: boolean
  onClose: () => void
  items: NavItem[]
}

export function MobileNavigation({ open, onClose, items }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  // Focus management, Escape to close, body-scroll lock, focus trap
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        )
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 xl:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-ivory shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <img src={IMG.logo} alt="Allover Healthcare Group" className="h-8 w-auto" />
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="btn-ghost -mr-2 h-11 w-11 rounded-full p-0"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
          <ul>
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-ink hover:bg-primary-soft"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-2 border-t border-border p-4">
          <a href={LINKS.makeReferral} className="btn-primary w-full" onClick={onClose}>
            Make a referral <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={ORG.phone.mainTel} className="btn-outline w-full">
            <Phone className="h-4 w-4" aria-hidden="true" /> Call {ORG.phone.main} {ORG.phone.mainExt}
          </a>
        </div>
      </div>
    </div>
  )
}

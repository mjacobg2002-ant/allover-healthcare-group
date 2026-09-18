import { useEffect, useState } from 'react'
import { Menu, Phone, ArrowRight } from 'lucide-react'
import { ORG, LINKS, IMG } from '../config/site'
import { MobileNavigation } from './MobileNavigation'

export interface NavItem {
  label: string
  href: string
}

const NAV: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Find support', href: '#pathways' },
  { label: 'Referrals', href: '#referrals' },
  { label: 'Technology', href: '#careware' },
  { label: 'Academy', href: '#academy' },
  { label: 'About', href: '#mission' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <header
      className={`sticky top-0 z-40 border-b transition-shadow ${
        scrolled ? 'border-border bg-ivory/95 shadow-sm backdrop-blur' : 'border-transparent bg-ivory'
      }`}
    >
      <div className="container-x flex h-[84px] items-center justify-between gap-4 sm:h-24">
        <a href="#top" className="flex shrink-0 items-center" aria-label={ORG.name}>
          <img
            src={IMG.logo}
            alt="Allover Healthcare Group — Healthcare, Technology, Education Solutions"
            className="h-14 w-auto sm:h-16 lg:h-[72px]"
            width={2166}
            height={704}
          />
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-[0.92rem] font-medium text-ink/85 transition-colors hover:bg-primary-soft hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={ORG.phone.mainTel}
            className="btn-ghost px-3"
            aria-label={`Call main office ${ORG.phone.main} ${ORG.phone.mainExt}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden whitespace-nowrap text-sm font-semibold xl:inline">
              {ORG.phone.main} {ORG.phone.mainExt}
            </span>
          </a>
          <a href={LINKS.makeReferral} className="btn-primary whitespace-nowrap">
            Make a referral <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="btn-ghost h-11 w-11 rounded-full p-0 xl:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </header>

    <MobileNavigation open={open} onClose={() => setOpen(false)} items={NAV} />
    </>
  )
}

import { CONCEPT, ORG, LINKS, IMG } from '../config/site'

const columns = [
  {
    title: 'Healthcare',
    links: [
      { label: 'Outpatient mental health', href: '#services' },
      { label: 'Adult psychiatric rehabilitation', href: '#services' },
      { label: 'Child & adolescent PRP', href: '#services' },
      { label: 'Substance use disorder services', href: '#services' },
      { label: 'Autism waiver support', href: '#services' },
      { label: 'Make a referral', href: LINKS.makeReferral },
    ],
  },
  {
    title: 'Technology & Academy',
    links: [
      { label: 'Allover CareWare', href: '#careware' },
      { label: 'Request a software demo', href: LINKS.softwareDemo },
      { label: 'Allover Academy programs', href: LINKS.academyPrograms },
      { label: 'Register for a class', href: LINKS.academyRegister },
    ],
  },
  {
    title: 'Organization',
    links: [
      { label: 'About & mission', href: '#mission' },
      { label: 'Referrals', href: '#referrals' },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy policy', href: `${ORG.sourceUrl}Home/PrivacyPolicy` },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-ivory/90">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img
            src={IMG.logo}
            alt="Allover Healthcare Group"
            className="h-12 w-auto rounded-lg bg-white px-3 py-2"
            width={2166}
            height={704}
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
            Community-based behavioral-health, rehabilitation, substance-use, autism-waiver and
            community-support services — with connected care-management technology and practical
            education programs.
          </p>
          <p className="mt-4 text-sm text-ivory/70">
            {ORG.address.street}
            <br />
            {ORG.address.city}, {ORG.address.state} {ORG.address.zip}
          </p>
          <p className="mt-3 text-sm">
            <a href={ORG.phone.mainTel} className="font-semibold hover:text-white">
              {ORG.phone.main} {ORG.phone.mainExt}
            </a>
            <br />
            <span className="text-ivory/70">After hours: </span>
            <a href={ORG.phone.afterHoursTel} className="hover:text-white">
              {ORG.phone.afterHours}
            </a>
            <br />
            <a href={ORG.emailHref} className="hover:text-white">
              {ORG.email}
            </a>
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="font-serif text-base text-ivory">{col.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-ivory/75 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-4 text-sm text-ivory/70">
          <p className="rounded-lg bg-white/5 px-4 py-3 text-center">
            Crisis support: call or text <a href="tel:988" className="font-semibold text-white underline">988</a>.
            In an emergency call <a href="tel:911" className="font-semibold text-white underline">911</a>. Allover’s
            after-hours line is not a 24-hour crisis service.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-ivory/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {ORG.name}. All rights reserved.{' '}
            <a href="#contact" className="hover:text-white">
              Accessibility statement
            </a>
          </p>
          {CONCEPT.showFooterConceptLabel && <p className="italic">{CONCEPT.footerConceptLabel}</p>}
        </div>
      </div>
    </footer>
  )
}

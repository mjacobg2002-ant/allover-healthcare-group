import { FileText, Phone, Download, Printer } from 'lucide-react'
import { REFERRAL_STEPS } from '../config/content'
import { ORG, LINKS } from '../config/site'

export function ReferralProcess() {
  return (
    <section id="referrals" className="scroll-mt-20 bg-sage py-16 md:py-24" aria-labelledby="referrals-h">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-primary">Referrals</p>
          <h2 id="referrals-h" className="h2 mt-3">
            A clear path from referral to support
          </h2>
          <p className="lead mt-4">
            For clients, families, providers, courts, schools and social-services partners.
          </p>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REFERRAL_STEPS.map((step) => (
            <li key={step.n} className="reveal card relative p-6">
              <span className="font-serif text-4xl text-primary/25">{String(step.n).padStart(2, '0')}</span>
              <h3 className="mt-2 font-serif text-lg text-ink">{step.title}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-body">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <a href={LINKS.makeReferral} className="btn-primary">
              <FileText className="h-4 w-4" aria-hidden="true" /> Submit a referral
            </a>
            <a href={LINKS.referralForm} className="btn-outline">
              <Download className="h-4 w-4" aria-hidden="true" /> Download referral form
            </a>
            <a href={ORG.phone.mainTel} className="btn-ghost">
              <Phone className="h-4 w-4" aria-hidden="true" /> Call intake
            </a>
          </div>
          <p className="flex items-center gap-2 text-sm text-body">
            <Printer className="h-4 w-4 shrink-0" aria-hidden="true" />
            Fax: {ORG.phone.fax}
          </p>
        </div>
        <p className="reveal mt-4 max-w-prose text-sm text-body">
          Referrals are handled through the organization’s secure process. Please don’t send private
          medical, mental-health or substance-use details through ordinary email.
        </p>
      </div>
    </section>
  )
}

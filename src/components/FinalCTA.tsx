import { FileText, Phone, GraduationCap, ArrowRight } from 'lucide-react'
import { ORG, LINKS } from '../config/site'
import { PathwayMotif } from './PathwayMotif'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-ivory md:py-24" aria-labelledby="final-h">
      <PathwayMotif className="pointer-events-none absolute inset-0 h-full w-full opacity-30" />
      <div className="container-x relative text-center">
        <h2 id="final-h" className="h2 mx-auto max-w-2xl text-ivory">
          Let’s find the right support together
        </h2>
        <p className="lead mx-auto mt-4 max-w-prose text-white/85">
          {ORG.concept}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href={LINKS.makeReferral} className="btn bg-ivory text-primary hover:bg-white">
            <FileText className="h-4 w-4" aria-hidden="true" /> Make a healthcare referral
          </a>
          <a href={ORG.phone.mainTel} className="btn border border-white/50 text-ivory hover:bg-white/10">
            <Phone className="h-4 w-4" aria-hidden="true" /> Call our team
          </a>
          <a href={LINKS.academyPrograms} className="btn border border-white/50 text-ivory hover:bg-white/10">
            <GraduationCap className="h-4 w-4" aria-hidden="true" /> Explore education programs
          </a>
        </div>

        <p className="mt-6 text-sm text-white/80">
          Interested in Allover CareWare?{' '}
          <a href={LINKS.softwareDemo} className="font-semibold text-ivory underline underline-offset-4 hover:text-white">
            Request a demo <ArrowRight className="inline h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  )
}

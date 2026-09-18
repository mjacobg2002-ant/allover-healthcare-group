import { useReveal } from './hooks/useReveal'
import { CONCEPT } from './config/site'
import { CrisisUtilityBar } from './components/CrisisUtilityBar'
import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { TrustStrip } from './components/TrustStrip'
import { DivisionOverview } from './components/DivisionOverview'
import { HealthcareServices } from './components/HealthcareServices'
import { AudiencePathways } from './components/AudiencePathways'
import { ReferralProcess } from './components/ReferralProcess'
import { CommunityCareSection } from './components/CommunityCareSection'
import { CareWareFeature } from './components/CareWareFeature'
import { AcademyFeature } from './components/AcademyFeature'
import { MissionValues } from './components/MissionValues'
import { FinalCTA } from './components/FinalCTA'
import { LocationContact } from './components/LocationContact'
import { SiteFooter } from './components/SiteFooter'
import { MobileActionBar } from './components/MobileActionBar'

export default function App() {
  useReveal()

  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:font-semibold focus:text-ivory"
      >
        Skip to content
      </a>

      {CONCEPT.showConceptBadge && (
        <div className="fixed bottom-20 right-3 z-30 hidden rounded-full border border-border bg-ivory/95 px-3 py-1.5 text-xs font-semibold text-body shadow-md backdrop-blur sm:block lg:bottom-4">
          {CONCEPT.conceptLabel}
        </div>
      )}

      <CrisisUtilityBar />
      <SiteHeader />

      <main id="main" className="pb-16 lg:pb-0">
        <HeroSection />
        <TrustStrip />
        <DivisionOverview />
        <HealthcareServices />
        <AudiencePathways />
        <ReferralProcess />
        <CommunityCareSection />
        <CareWareFeature />
        <AcademyFeature />
        <MissionValues />
        <FinalCTA />
        <LocationContact />
      </main>

      <SiteFooter />
      <MobileActionBar />
    </div>
  )
}

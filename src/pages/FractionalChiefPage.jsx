import ServicePageHero, { SHWord } from '../components/sections/service-page-hero/ServicePageHero'
import TrustedLogos from '../components/sections/trusted-logos'
import TheProblemSection from '../components/sections/the-problem'
import FractionalServiceSection from '../components/sections/fractional-service'
import FractionalSupportSection from '../components/sections/fractional-service/FractionalSupportSection'
import CoverageSection from '../components/sections/coverage'
import ToolsMarqueeSection from '../components/sections/tools-marquee'
import FAQCreativeSection from '../components/sections/fractional-service/FAQCreativeSection'

const FractionalChiefPage = () => (
  <>
    <ServicePageHero
      badge="Fractional Chief Automation"
      heading={
        <>
          99 automation <SHWord>problems?</SHWord>{' '}
          We've got a <SHWord>solution</SHWord> for them all.
        </>
      }
      body="Offload all automation and process headaches onto us. As your Fractional Chief Automation Officers, we'll take complete, proactive ownership of all things automation — at a fraction of the cost of a full-time hire."
    />
    <TrustedLogos />
    <TheProblemSection />
    <FractionalServiceSection />
    <CoverageSection />
    <ToolsMarqueeSection />
    <FractionalSupportSection />
    <FAQCreativeSection />
  </>
)

export default FractionalChiefPage

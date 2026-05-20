import ServicePageHero, { SHWord } from '@/components/sections/service-page-hero/ServicePageHero'
import TrustedSection from '@/components/sections/trusted'
import Testimonials from '@/components/sections/testimonials'
import ToolkitSection from '@/components/sections/toolkit'
import BusinessBelovedSection from '@/components/sections/about/BusinessBelovedSection'
import TeamSection from '@/components/sections/about/TeamSection'
import OurStorySection from '@/components/sections/about/OurStorySection'

const AboutPage = () => (
   <>
      <ServicePageHero
         badge="Startups. Growing teams. Established operations."
         heading={<>
            We make your <SHWord>business</SHWord>
            <br className="hidden sm:block" />
            {' '}run smarter, not <SHWord>harder.</SHWord>
         </>}
      />

      <TrustedSection
         heading="Trusted by teams at every stage of growth"
         hideBottom
      />

      <BusinessBelovedSection />

      <OurStorySection />

      <ToolkitSection badge={null} heading={null} subText={null} />

      <Testimonials
         heading={<>
            500+ clients.{' '}
            <span style={{ color: '#E85C41' }}>500+ reasons<br className="hidden sm:block" /></span>
            {' '}to automate.
         </>}
      />
      <TeamSection />
   </>
)

export default AboutPage

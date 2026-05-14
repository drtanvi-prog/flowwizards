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
         badge="Solopreneurs. Small businesses. Fortune 500 companies."
         heading={<>
            If you have a <SHWord>business,</SHWord>
            <br className="hidden sm:block" />
            {' '}we'll make it more <SHWord>efficient.</SHWord>
         </>}
      />

      <TrustedSection
         heading="Trusted by businesses of every conceivable size"
         hideBottom
      />

      <BusinessBelovedSection />

      <OurStorySection />

      <ToolkitSection badge={null} heading={null} subText={null} />

      <Testimonials
         heading={<>
            Hundreds more{' '}
            <span style={{ color: '#E85C41' }}>5-star<br className="hidden sm:block" /> reviews</span>
            {' '}where these came from.
         </>}
      />
      <TeamSection />
   </>
)

export default AboutPage

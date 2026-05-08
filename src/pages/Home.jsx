import BenefitsSection from '@/components/sections/benefits'
import CaseStudies from '@/components/sections/case-studies'
import Hero from '@/components/sections/hero'
import HowCanWeHelp from '@/components/sections/how-can-we-help'
import ServicesSection from '@/components/sections/services'
import Testimonials from '@/components/sections/testimonials'
import ToolkitSection from '@/components/sections/toolkit'
import TrustedSection from '@/components/sections/trusted'
import WhyChooseUs from '@/components/sections/why-choose-us'

const Home = () => {
   return (
      <div>
         <Hero />
         <TrustedSection />
         <BenefitsSection />
         <HowCanWeHelp />
         <ToolkitSection />
         <ServicesSection />
         <WhyChooseUs />
         <Testimonials />
         <CaseStudies />
      </div>
   )
}

export default Home
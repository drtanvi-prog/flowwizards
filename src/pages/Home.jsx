import BenefitsSection from '@/components/sections/benefits'
import Hero from '@/components/sections/hero'
import HowCanWeHelp from '@/components/sections/how-can-we-help'
import ServicesSection from '@/components/sections/services'
import ToolkitSection from '@/components/sections/toolkit'
import TrustedSection from '@/components/sections/trusted'

const Home = () => {
   return (
      <div>
         <Hero />
         <TrustedSection />
         <BenefitsSection />
         <HowCanWeHelp />
         <ToolkitSection />
         <ServicesSection />
      </div>
   )
}

export default Home
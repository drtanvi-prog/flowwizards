import ServicePageHero, { SHWord } from '@/components/sections/service-page-hero/ServicePageHero'
import PricingSection from '@/components/sections/pricing/PricingSection'
import PremiumQuoteStack from '@/components/sections/quotes'

const PRICING_QUOTES = [
   {
      text: '"This team rocks!"',
      author: '"I\'ve been using Flow Wizards for a good few years now and could not be happier. The automation they create for me has saved hours upon hours and has allowed my business to reach new heights."',
      quoteColor: '#7A8500',
      border: '#7A8500',
      bg: '#FAFCE8',
   },
   {
      text: '"Exceptional team that delivers exceptional service"',
      author: '"The team at Flow Wizards is SO knowledgeable and easy to work with. I love that they walk you through the whole process so now if I need to make updates myself, I\'m able to."',
      quoteColor: '#E86020',
      border: '#E86020',
      bg: '#FFF0EE',
   },
   {
      text: '"A magic wand for automation"',
      author: 'There\'s a fair amount of complexity involved in our business — lots of data to integrate, many moving parts. But no matter what I throw at them, Flow Wizards delivers. I tell them what I want to accomplish, and they make it happen.',
      quoteColor: '#C08000',
      border: '#C08000',
      bg: '#FFF8F0',
   },
]

const PricingPage = () => (
   <>
      <ServicePageHero
         badge="Pricing"
         heading={<>
            How can we <SHWord>make</SHWord> your
            <br className="hidden sm:block" />
            {' '}business more <SHWord>efficient?</SHWord>
         </>}
         body="Whether you need a one-time fix or an always-on automation partner, we have a plan built for where your business is right now."
      />
      <PricingSection />
      <PremiumQuoteStack
         quotes={PRICING_QUOTES}
         containerClass="max-w-6xl px-4 sm:px-6 xl:px-8"
      />
   </>
)

export default PricingPage

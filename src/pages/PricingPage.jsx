import ServicePageHero, { SHWord } from '@/components/sections/service-page-hero/ServicePageHero'
import PricingSection from '@/components/sections/pricing/PricingSection'
import PremiumQuoteStack from '@/components/sections/quotes'

const PRICING_QUOTES = [
   {
      text: 'Best investment we made this year',
      author: "We were hesitant about the cost at first, but within 6 weeks the time savings alone paid for everything. Our team now focuses on actual work instead of copying data between systems all day.",
      quoteColor: '#7A8500',
      border: '#7A8500',
      bg: '#FAFCE8',
   },
   {
      text: 'Finally, automations that actually work',
      author: "We tried building our own workflows twice and failed both times. Flow Wizards came in, understood exactly what we needed, and delivered something clean and reliable that our team trusts every day.",
      quoteColor: '#E86020',
      border: '#E86020',
      bg: '#FFF0EE',
   },
   {
      text: 'They made the complex feel simple',
      author: "Our business has a lot of moving parts — multiple tools, multiple teams, different processes. Flow Wizards mapped it all out and built automations that actually hold up under real pressure.",
      quoteColor: '#C08000',
      border: '#C08000',
      bg: '#FFF8F0',
   },
   {
      text: 'We reclaimed 15+ hours a week',
      author: "I used to spend every Monday morning running manual reports and sending updates. That's completely gone now. The whole process runs overnight and everyone has what they need by the time they log in.",
      quoteColor: '#7A8500',
      border: '#7A8500',
      bg: '#FAFCE8',
   },
   {
      text: 'They think like business owners, not just developers',
      author: "What sets Flow Wizards apart is that they ask why before they ask how. They pushed back on one of our ideas and suggested something better. That kind of thinking saved us a lot of wasted effort.",
      quoteColor: '#E86020',
      border: '#E86020',
      bg: '#FFF0EE',
   },
   {
      text: 'Our onboarding went from 3 days to 4 hours',
      author: "New clients used to require a ton of manual setup from our side. Now it's almost fully automated — forms trigger the whole sequence. It's made scaling feel real for the first time.",
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

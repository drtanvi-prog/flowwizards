import ServicePageHero, { SHWord } from '@/components/sections/service-page-hero/ServicePageHero'
import PricingSection from '@/components/sections/pricing/PricingSection'
import PremiumQuoteStack from '@/components/sections/quotes'
import { openCalendly } from '@/utils/calendly'

const N8N_HIGHLIGHT_CSS = `
  @keyframes n8n-badge-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(234,75,113,0.25); }
    50%       { box-shadow: 0 0 0 8px rgba(234,75,113,0); }
  }
  .n8n-badge-pulse { animation: n8n-badge-pulse 2.4s ease-in-out infinite; }
`

const N8nCallout = () => (
   <section className="bg-[#fdf8f6] border-y border-[#f0e8e4] py-10 sm:py-14">
      <style>{N8N_HIGHLIGHT_CSS}</style>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-8">
         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left: text */}
            <div className="flex-1 text-center lg:text-left">
               <span
                  className="n8n-badge-pulse inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-[12px] font-bold border mb-4"
                  style={{ background: '#fff0f3', borderColor: 'rgba(234,75,113,0.3)', color: '#b8274a' }}
               >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA4B71] animate-pulse shrink-0" />
                  Featured Service
               </span>
               <h2 className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] font-extrabold text-[#1A1A1A] leading-snug mb-3">
                  Expert <span style={{ color: '#EA4B71' }}>n8n Consulting</span>{' '}
                  &amp; Automation
               </h2>
               <p className="text-[13px] sm:text-[14px] text-[#555] leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Our most in-demand service. We design, build, and deploy custom{' '}
                  <strong className="text-[#1A1A1A]">n8n workflows</strong> that automate
                  your entire business - from lead capture to client delivery. Self-hosted
                  or cloud, simple triggers or complex multi-step pipelines, we handle it all.
               </p>
            </div>

            {/* Right: price card */}
            <div
               className="shrink-0 flex flex-col items-center gap-3 px-8 py-7 rounded-2xl border-2 shadow-md"
               style={{ background: '#fff', borderColor: 'rgba(234,75,113,0.25)' }}
            >
               <p className="text-[11px] font-black uppercase tracking-widest text-[#888]">n8n Consulting Rate</p>
               <div className="flex items-baseline gap-1">
                  <span className="text-[3.5rem] font-black text-[#1A1A1A] leading-none">$25</span>
                  <span className="text-[1rem] font-semibold text-[#888] mt-1">/ hour</span>
               </div>
               <p className="text-[12px] text-[#999] -mt-1">Hourly retainers &amp; packages available</p>
               <button
                  onClick={openCalendly}
                  className="mt-2 w-full px-6 py-3 rounded-xl text-[13px] font-bold text-white transition-opacity hover:opacity-90 cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #EA4B71, #c43800)' }}
               >
                  Book a free discovery call
               </button>
               <p className="text-[11px] text-[#bbb]">No commitment required</p>
            </div>
         </div>

         {/* n8n use-case chips */}
         <div className="mt-8 pt-8 border-t border-[#f0e8e4] flex flex-wrap gap-2 justify-center lg:justify-start">
            {[
               'n8n Workflow Design',
               'n8n Self-Hosted Setup',
               'Zapier → n8n Migration',
               'API Integrations',
               'CRM Automation',
               'AI-Powered Pipelines',
               'Slack & Email Automation',
            ].map(chip => (
               <span
                  key={chip}
                  className="px-3 py-1.5 rounded-full text-[11px] sm:text-[12px] font-semibold border"
                  style={{ background: '#fff0f3', borderColor: 'rgba(234,75,113,0.22)', color: '#b8274a' }}
               >
                  {chip}
               </span>
            ))}
         </div>
      </div>
   </section>
)

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
      author: "Our business has a lot of moving parts - multiple tools, multiple teams, different processes. Flow Wizards mapped it all out and built automations that actually hold up under real pressure.",
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
      author: "New clients used to require a ton of manual setup from our side. Now it's almost fully automated - forms trigger the whole sequence. It's made scaling feel real for the first time.",
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
      <N8nCallout />
      <PricingSection />
      <PremiumQuoteStack
         quotes={PRICING_QUOTES}
         containerClass="max-w-6xl px-4 sm:px-6 xl:px-8"
      />
   </>
)

export default PricingPage


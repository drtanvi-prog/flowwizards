import { motion } from 'framer-motion'
import { openCalendly } from '@/utils/calendly'
import { Check, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Chip from '@/components/ui/Chip'
import { SHWord } from '@/components/sections/service-page-hero/ServicePageHero'
import WorkflowFramework from '@/components/sections/workflow-automation/WorkflowFramework'
import PremiumQuoteStack from '@/components/sections/quotes'

const AIRTABLE_QUOTES = [
   {
      text: 'Our Airtable setup finally works the way our business does',
      body: 'We had a messy database that nobody trusted. Flow Wizards rebuilt it from scratch, integrated it with Zapier and Salesforce, and now our whole team actually uses it. The security protocols and clean structure gave us confidence we never had before.',
      bg: '#eef5e0',
      border: '#b5c86a',
      quoteColor: '#7a8c00',
   },
   {
      text: 'We were nervous about outsourcing - we shouldn\'t have been',
      body: 'Handing over access to our Shopify and Airtable felt risky at first. Flow Wizards handled everything securely, kept us in the loop at every step, and delivered something that works better than anything we could have built ourselves.',
      bg: '#ffedef',
      border: '#ff9aaa',
      quoteColor: '#E84040',
   },
   {
      text: 'Our team actually adopted it - that\'s the real win',
      body: 'We\'ve had systems built before that nobody used. Flow Wizards took the time to understand how we actually work and built around that. The transition was smooth, training was minimal, and adoption was instant.',
      bg: '#fff5ef',
      border: '#ffb380',
      quoteColor: '#f07020',
   },
   {
      text: 'Professional, fast, and they didn\'t cut corners',
      body: 'From the first call to the final handoff, everything was handled with care. Every detail aligned with what we asked for - and then some. They flagged things we hadn\'t even thought about and fixed them proactively.',
      bg: '#eef5e0',
      border: '#b5c86a',
      quoteColor: '#7a8c00',
   },
   {
      text: 'I don\'t know how they do it, but it just works',
      body: 'Our Airtable was a nightmare - custom fields everywhere, broken automations, duplicate records. Flow Wizards untangled it all and delivered something clean. They didn\'t stop until every edge case was handled.',
      bg: '#fff0f0',
      border: '#ff9aaa',
      quoteColor: '#E84040',
   },
   {
      text: 'Cut our reporting time from hours to minutes',
      body: 'We were pulling data manually from three different places every week to build one report. Now it all flows into Airtable automatically and the report builds itself. That alone was worth the entire engagement.',
      bg: '#fff5ef',
      border: '#ffb380',
      quoteColor: '#f07020',
   },
]

const AIRTABLE_STEPS = [
   {
      num: '01',
      title: 'Discovery',
      desc: 'We analyze your sales process, challenges, and goals to architect the perfect databases, dashboards, and apps that maximize efficiency and provide unparalleled clarity.',
   },
   {
      num: '02',
      title: 'Implementation',
      desc: 'We integrate Airtable with your existing tools and set up powerful automations, ensuring your data works for you, not against you.',
   },
   {
      num: '03',
      title: 'Optimize',
      desc: <>We conduct periodic reviews to spot any potential problems, troubleshoot issues, and maximize your cost and time savings.<br /><br /><a href="https://calendly.com/tuesdaywizard/30min" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1A1A1A] hover:text-[#ff4f00] transition-colors">Book a free discovery call →</a></>,
   },
]

const ease = [0.22, 1, 0.36, 1]
const fadeUp = (delay = 0) => ({
   initial: { opacity: 0, y: 28 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true },
   transition: { duration: 0.65, delay, ease },
})
const fadeUpAnimate = (delay = 0) => ({
   initial: { opacity: 0, y: 28 },
   animate: { opacity: 1, y: 0 },
   transition: { duration: 0.72, delay, ease },
})

// ── Hero 
const HeroSection = () => (
   <section className="bg-[#FEF6F5] overflow-hidden px-6 sm:px-10 xl:px-16 pt-10 pb-20 sm:pt-16 sm:pb-28">
      <div className="max-w-7xl mx-auto">

         <motion.div
            {...fadeUpAnimate(0.05)}
            className="flex items-center gap-4 mb-8 sm:mb-10"
         >
            <div className="shrink-0 border-[1.5px] border-[#1A1A1A] rounded-lg px-3 py-1 sm:px-5 sm:py-2 bg-[#FEF6F5]">
               <span className="text-[11px] sm:text-[13px] font-medium text-[#1A1A1A] whitespace-nowrap leading-none">
                  Expert Airtable Consultant
               </span>
            </div>
            <div className="hidden sm:block flex-1 h-px bg-[#1A1A1A]" />
         </motion.div>

         <motion.h1
            {...fadeUpAnimate(0.12)}
            className="m-0 font-extrabold text-[#1A1A1A] tracking-tight leading-[1.6] sm:leading-[1.4] text-[1.8rem] sm:text-[3rem] lg:text-[4.5rem]"
         >
            Airtable is <SHWord>fast,</SHWord> flexible,
            <br />
            and incredibly <SHWord>powerful.</SHWord>
         </motion.h1>

         <motion.p
            {...fadeUpAnimate(0.22)}
            className="mt-5 sm:mt-7 text-[#4A4A4A] leading-relaxed max-w-md text-sm sm:text-[0.95rem]"
         >
            But unless you know what you're doing, it's also complicated.
            Are you harnessing the full potential of automations in Airtable?
         </motion.p>

         <motion.div {...fadeUpAnimate(0.32)} className="mt-8 sm:mt-10">
            <Button
               variant="secondary"
               size="md"
               className="text-[11px]! sm:text-sm! px-3! py-2! sm:px-5! sm:py-3!"
               onClick={openCalendly}
            >
               Book a discovery call
            </Button>
         </motion.div>

      </div>
   </section>
)

// ── Nothing beats Airtable ────────────────────────────────────────────────────
const BENEFIT_CARDS = [
   {
      title: 'Centralized Data Management',
      desc: 'Transform scattered information into a single, powerful Airtable database.',
      badge: 'Database', badgeVariant: 'orange',
      bg: '#FFF0EC', iconColor: '#E8521A',
   },
   {
      title: 'Powerful Visualization Tools',
      desc: 'Create dynamic dashboards that enable faster decision-making.',
      badge: 'Analytics', badgeVariant: 'amber',
      bg: '#FFF8E6', iconColor: '#B8860B',
   },
   {
      title: 'Seamless No-Code Automation',
      desc: 'Automate repetitive tasks, saving hours each week on data management.',
      badge: 'Automation', badgeVariant: 'olive',
      bg: '#F5F7E8', iconColor: '#5C6B10',
   },
]

const NothingBeatsSection = () => (
   <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

         <motion.h2
            {...fadeUp(0)}
            className="font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-4 text-[1.8rem] sm:text-[2.5rem] lg:text-[3.5rem] max-w-3xl"
         >
            Nothing beats an Airtable workflow for managing your data
         </motion.h2>

         <motion.p {...fadeUp(0.07)} className="text-[#666] text-sm sm:text-base mb-10 sm:mb-14">
            After all, who wouldn't want to make collaborative, data-driven decisions 10x easier with:
         </motion.p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {BENEFIT_CARDS.map((card, i) => (
               <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5, transition: { duration: 0.22 } }}
                  className="rounded-3xl p-7 sm:p-9 flex flex-col gap-6"
                  style={{ background: card.bg }}
               >
                  {/* Icon circle */}
                  <div
                     className="w-11 h-11 rounded-2xl flex items-center justify-center"
                     style={{ background: `${card.iconColor}18` }}
                  >
                     <Check size={18} strokeWidth={2.5} style={{ color: card.iconColor }} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2.5">
                     <Badge variant={card.badgeVariant} className="self-start">{card.badge}</Badge>
                     <h3 className="font-extrabold text-[#1A1A1A] text-lg sm:text-xl leading-snug m-0">
                        {card.title}
                     </h3>
                     <p className="text-sm text-[#555] leading-relaxed m-0">
                        {card.desc}
                     </p>
                  </div>
               </motion.div>
            ))}
         </div>

      </div>
   </section>
)

// ── Problems ──────────────────────────────────────────────────────────────────
const PROBLEMS = [
   'Disconnected tables creating data silos and redundant entry, wasting time and resources',
   'Poor access controls leading to team chaos and quality control nightmares',
   'Cluttered layouts slowing decision-making and hampering efficient data retrieval',
   "Missed insights from inadequate use of Airtable's reporting and dashboard tools",
   'Performance issues causing slow load times and sync problems as databases grow',
   'Underutilized automations resulting in wasted time on repetitive manual tasks',
]

const ProblemsSection = () => (
   <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

         <motion.h2
            {...fadeUp(0)}
            className="font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-4 text-[1.8rem] sm:text-[2.5rem] lg:text-[3.5rem] max-w-4xl"
         >
            But an unoptimized Airtable database can cripple your business with{' '}
            <span className="text-[#E84040]">
               inefficiencies, stifling your productivity, collaboration
            </span>
            , and <span className="text-[#E84040]">growth.</span>
         </motion.h2>

         <motion.p {...fadeUp(0.07)} className="text-[#666] text-sm sm:text-base mb-10 sm:mb-14">
            And lead to major issues like:
         </motion.p>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-14">
            {PROBLEMS.map((problem, i) => (
               <motion.div
                  key={i}
                  {...fadeUp(i * 0.07)}
                  className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-[#ffb3b3] bg-[#fff5f5]"
               >
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-[#E84040]">
                     <X size={13} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="text-sm sm:text-[0.9rem] text-[#333] leading-relaxed">{problem}</p>
               </motion.div>
            ))}
         </div>

         <motion.p {...fadeUp(0.1)} className="text-[#1A1A1A] text-sm sm:text-base font-medium">
            That's where our team of certified Airtable experts steps in.
         </motion.p>

      </div>
   </section>
)

// ── Productivity / Solutions ───────────────────────────────────────────────────
const SOLUTIONS = [
   {
      num: '01', badge: 'Database', badgeVariant: 'orange',
      title: 'Custom databases built around your business',
      desc: 'Eliminate data silos with tailor-made Airtable databases designed around your unique workflows.',
   },
   {
      num: '02', badge: 'Interface', badgeVariant: 'amber',
      title: 'Intuitive views for effortless data management',
      desc: 'Grid, Kanban, Calendar, Gantt — the right view for every team, configured for how you work.',
   },
   {
      num: '03', badge: 'Analytics', badgeVariant: 'olive',
      title: 'Dynamic dashboards for real-time insights',
      desc: 'Make faster, smarter decisions with live dashboards that surface the metrics that matter most.',
   },
   {
      num: '04', badge: 'No-Code Apps', badgeVariant: 'orange',
      title: 'Custom apps without writing a line of code',
      desc: 'Empower your team with purpose-built Airtable interfaces that automate and streamline daily work.',
   },
   {
      num: '05', badge: 'Integrations', badgeVariant: 'amber',
      title: 'Seamless connections with your existing tools',
      desc: 'Connect Airtable to Zapier, Salesforce, Shopify and more — one unified ecosystem, zero friction.',
   },
   {
      num: '06', badge: 'Security', badgeVariant: 'olive',
      title: 'Robust access controls and data validation',
      desc: 'Ensure data integrity with role-based permissions and validation rules your whole team can trust.',
   },
]

const ProductivitySection = () => (
   <section className="relative bg-[#0f0f0f] py-16 sm:py-20 lg:py-28 overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-[#ff4f00]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

         {/* Top row: chip + heading + subtext | button */}
         <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14 sm:mb-18">
            <div className="flex-1">
               <motion.div {...fadeUp(0)} className="mb-5">
                  <Chip style={{ background: 'rgba(255,79,0,0.15)', color: '#ff6830' }}>
                     The benefits of Airtable automation
                  </Chip>
               </motion.div>
               <motion.h2
                  {...fadeUp(0.07)}
                  className="font-extrabold text-white tracking-tight leading-[1.1] text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] max-w-2xl m-0"
               >
                  Propel your productivity<br />into the stratosphere
               </motion.h2>
               <motion.p {...fadeUp(0.13)} className="text-white/45 text-sm sm:text-base mt-4 max-w-md m-0">
                  As your specialist Airtable partner, we'll help you:
               </motion.p>
            </div>
            <motion.div {...fadeUp(0.18)} className="shrink-0 lg:pt-3">
               <Button variant="primary" size="lg" onClick={openCalendly}>
                  Book a discovery call
               </Button>
            </motion.div>
         </div>

         {/* Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SOLUTIONS.map((s, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="group relative rounded-2xl bg-[#1a1a1a] border border-white/8 p-6 sm:p-8 flex flex-col gap-5 overflow-hidden"
                  style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset' }}
               >
                  {/* Orange top accent + badge row */}
                  <div className="flex items-center gap-3">
                     <div className="w-6 h-0.5 bg-[#ff4f00] rounded-full shrink-0" />
                     <Badge variant={s.badgeVariant}>{s.badge}</Badge>
                  </div>

                  <div className="flex flex-col gap-2.5">
                     <h3 className="font-bold text-white text-base sm:text-lg leading-snug m-0">
                        {s.title}
                     </h3>
                     <p className="text-white/50 text-sm leading-relaxed m-0">
                        {s.desc}
                     </p>
                  </div>
               </motion.div>
            ))}
         </div>

      </div>
   </section>
)

// ── Page ──────────────────────────────────────────────────────────────────────
const AirtableConsultantPage = () => (
   <>
      <HeroSection />
      <WorkflowFramework
         steps={AIRTABLE_STEPS}
         chip="Our Airtable workflow automation process"
         heading="Here's how we take you from spreadsheet chaos to data clarity"
         hideDescription
      />
      <NothingBeatsSection />
      <ProblemsSection />
      <ProductivitySection />
      <PremiumQuoteStack
         quotes={AIRTABLE_QUOTES}
         badge="What clients say about our Airtable automation"
         heading={`How we've turned\nthe (air)tables on\nour client's growth`}
      />
   </>
)

export default AirtableConsultantPage

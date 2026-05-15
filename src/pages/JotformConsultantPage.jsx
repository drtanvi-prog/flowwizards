import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import Chip from '@/components/ui/Chip'
import { SHWord } from '@/components/sections/service-page-hero/ServicePageHero'
import WorkflowFramework from '@/components/sections/workflow-automation/WorkflowFramework'

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

         <motion.div {...fadeUpAnimate(0.05)} className="flex items-center gap-4 mb-8 sm:mb-10">
            <div className="shrink-0 border-[1.5px] border-[#1A1A1A] rounded-lg px-3 py-1 sm:px-5 sm:py-2 bg-[#FEF6F5]">
               <span className="text-[11px] sm:text-[13px] font-medium text-[#1A1A1A] whitespace-nowrap leading-none">
                  Expert Jotform Consultant
               </span>
            </div>
            <div className="hidden sm:block flex-1 h-px bg-[#1A1A1A]" />
         </motion.div>

         <motion.h1
            {...fadeUpAnimate(0.12)}
            className="m-0 font-extrabold text-[#1A1A1A] tracking-tight leading-[1.6] sm:leading-[1.4] text-[1.8rem] sm:text-[3rem] lg:text-[4.5rem]"
         >
            Get your <SHWord>business</SHWord>
            <br />in top <SHWord>form</SHWord>
         </motion.h1>

         <motion.p {...fadeUpAnimate(0.22)} className="mt-5 sm:mt-7 text-[#4A4A4A] leading-relaxed max-w-md text-sm sm:text-[0.95rem]">
            Drowning in paperwork? Customers frustrated by outdated PDFs? Wasting precious hours on manual data entry?{' '}
            <strong>It's time to unleash the power of smart forms.</strong>
         </motion.p>

         <motion.div {...fadeUpAnimate(0.32)} className="mt-8 sm:mt-10">
            <Button variant="secondary" size="md" className="text-[11px]! sm:text-sm! px-3! py-2! sm:px-5! sm:py-3!">
               Book a free discovery call with a Jotform expert
            </Button>
         </motion.div>

      </div>
   </section>
)

// ── Problems: two-card connected layout
const PROBLEMS_LEFT = [
   "You're opening yourself up to human error and lost data",
   "You're making your employees' jobs more tedious",
   "You're forcing customers to do more work than they need to",
]
const PROBLEMS_RIGHT = [
   "You're not getting the information needed to better service customers",
   "Your team spends more time on data entry than the job you hired them for",
   "You lose out on potential leads and discourage repeat business",
]

const ProblemsSection = () => (
   <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

         <motion.div {...fadeUp(0)} className="mb-5">
            <Chip style={{ background: '#fff0ec', color: '#E8521A' }}>
               Without an online form builder, you rely on
            </Chip>
         </motion.div>

         <motion.h2
            {...fadeUp(0.07)}
            className="font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-3 text-[1.8rem] sm:text-[2.5rem] lg:text-[3.5rem] max-w-3xl"
         >
            Paper forms, PDFs, and manual follow-ups?
         </motion.h2>

         <motion.p {...fadeUp(0.12)} className="text-[#666] text-sm sm:text-base mb-10 sm:mb-14">
            That's a recipe for disaster, and here's why:
         </motion.p>

         {/* Two-card connected layout */}
         <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0 mb-10 sm:mb-14">

            {/* Left card — problems */}
            <motion.div
               {...fadeUp(0.1)}
               className="w-full lg:w-[42%] rounded-2xl border-2 border-[#ff4f00] bg-[#fff8f5] p-6 sm:p-8 flex flex-col gap-0"
            >
               {PROBLEMS_LEFT.map((item, i) => (
                  <div key={i}>
                     <div className="flex items-start gap-3 py-4">
                        <div className="w-6 h-6 rounded-full border-2 border-[#ff4f00] flex items-center justify-center shrink-0 mt-0.5">
                           <X size={11} className="text-[#ff4f00]" strokeWidth={3} />
                        </div>
                        <p className="text-sm text-[#333] leading-relaxed m-0">{item}</p>
                     </div>
                     {i < PROBLEMS_LEFT.length - 1 && <div className="h-px bg-[#f0e8e4]" />}
                  </div>
               ))}
            </motion.div>

            {/* Connector */}
            <motion.div
               {...fadeUp(0.18)}
               className="shrink-0 flex items-center justify-center lg:w-[16%]"
            >
               <div className="bg-[#ff4f00] text-white font-bold px-4 py-2 rounded-xl text-sm whitespace-nowrap shadow-lg">
                  Which means →
               </div>
            </motion.div>

            {/* Right card — consequences */}
            <motion.div
               {...fadeUp(0.22)}
               className="w-full lg:w-[42%] rounded-2xl bg-[#ff4f00] p-6 sm:p-8 flex flex-col gap-0"
            >
               {PROBLEMS_RIGHT.map((item, i) => (
                  <div key={i}>
                     <div className="flex items-start gap-3 py-4">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                           <Check size={11} className="text-white" strokeWidth={3} />
                        </div>
                        <p className="text-sm text-white/90 leading-relaxed m-0">{item}</p>
                     </div>
                     {i < PROBLEMS_RIGHT.length - 1 && <div className="h-px bg-white/15" />}
                  </div>
               ))}
            </motion.div>

         </div>

         <motion.p {...fadeUp(0.2)} className="text-[#1A1A1A] text-sm sm:text-base">
            But there's a simple solution:<br />
            <span className="font-semibold">Jotform's intelligent forms + Flow Wizards' expert Jotform implementation</span>
         </motion.p>

      </div>
   </section>
)

// ── Benefits grid
const BENEFITS = [
   'Eliminate manual data entry and human error to ensure clear, accurate data integration',
   'Set up real-time notifications and customizable approval processes',
   'Ensure your customers can easily fill out forms on any device, increasing completion rates',
   'Use form customization to segment and target customers based on their responses, personalizing their experience',
   'Integrate forms seamlessly with your existing tools and software, creating a more efficient document workflow',
   'Protect your sensitive information, ensuring compliance and giving you peace of mind',
]

const BenefitsSection = () => (
   <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

         <motion.div {...fadeUp(0)} className="mb-5">
            <Chip style={{ background: '#fff0ec', color: '#E8521A' }}>
               The benefits of Jotform integration
            </Chip>
         </motion.div>

         <motion.h2
            {...fadeUp(0.07)}
            className="font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-4 text-[1.8rem] sm:text-[2.5rem] lg:text-[3.5rem] max-w-3xl"
         >
            Forget data collection.<br />Think business revolution.
         </motion.h2>

         <motion.p {...fadeUp(0.12)} className="text-[#666] text-sm sm:text-base mb-10 sm:mb-14 max-w-2xl">
            As your specialist Jotform integration consultants, we'll harness the combined power
            of Jotform + automation to send your efficiency and customer satisfaction soaring.
         </motion.p>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {BENEFITS.map((text, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-[#ebebeb] p-6 sm:p-7 flex flex-col items-center text-center gap-4"
                  style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
               >
                  <div className="w-9 h-9 rounded-full border-2 border-[#ff4f00] flex items-center justify-center shrink-0">
                     <Check size={15} className="text-[#ff4f00]" strokeWidth={2.5} />
                  </div>
                  <p className="text-sm text-[#444] leading-relaxed m-0">{text}</p>
               </motion.div>
            ))}
         </div>

      </div>
   </section>
)

// ── Process steps
const JOTFORM_STEPS = [
   {
      num: '01',
      title: 'Discovery',
      desc: 'We review your sales process, challenges, and goals to determine the most effective Jotform setup and integrations for your business.',
   },
   {
      num: '02',
      title: 'Implementation',
      desc: 'We set up your Jotform automations and integrate them with your other apps, creating workflows that do exactly what you need, every time, without fail.',
   },
   {
      num: '03',
      title: 'Optimization',
      desc: <>We conduct periodic reviews to identify potential issues, troubleshoot problems, and maximize your cost and time savings.<br /><br /><a href="#" className="font-bold text-[#1A1A1A] hover:text-[#ff4f00] transition-colors">Book a free discovery call →</a></>,
   },
]

// ── Page
const JotformConsultantPage = () => (
   <>
      <HeroSection />
      <ProblemsSection />
      <BenefitsSection />
      <WorkflowFramework
         steps={JOTFORM_STEPS}
         chip="Our Jotform implementation process"
         heading="From frustration to flow — here's how it works"
         hideDescription
      />
   </>
)

export default JotformConsultantPage

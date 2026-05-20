import { motion } from 'framer-motion'
import Chip from '@/components/ui/Chip'

const OurStorySection = () => (
   <section className="relative w-full overflow-hidden py-20 sm:py-28" style={{ background: '#0C0C0C' }}>

      {/* Dot grid */}
      <div
         className="absolute inset-0 pointer-events-none"
         style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
         }}
      />

      {/* Ambient glow */}
      <div
         className="absolute pointer-events-none"
         style={{
            top: '-5%', left: '50%', transform: 'translateX(-50%)',
            width: '900px', height: '400px',
            background: 'radial-gradient(ellipse, rgba(232,92,65,0.09) 0%, transparent 65%)',
            filter: 'blur(60px)',
         }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 xl:px-16">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">

            {/* Left — badge + heading */}
            <div>
               <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-5 sm:mb-7"
               >
                  <Chip style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.12)' }}>
                     Our story
                  </Chip>
               </motion.div>

               <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.08 }}
                  className="font-extrabold leading-[1.08] tracking-tight"
                  style={{ fontSize: 'clamp(1.8rem, 5vw, 3.8rem)', letterSpacing: '-0.03em' }}
               >
                  <span style={{ color: '#fff' }}>Built by operators,</span>
                  <br />
                  <span style={{ color: '#E85C41' }}>for teams who are<br className="hidden sm:block" /> done doing it manually.</span>
               </motion.h2>
            </div>

            {/* Right — story paragraphs */}
            <div className="flex flex-col gap-5 sm:gap-6">
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.14 }}
                  className="leading-relaxed text-sm sm:text-base"
                  style={{ color: 'rgba(255,255,255,0.72)' }}
               >
                  Flow Wizards was born from a simple frustration: too much time spent on work that software should be doing. Our founders spent years inside operations-heavy businesses watching talented people waste hours on repetitive, manual tasks — and decided to fix that.
               </motion.p>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.22 }}
                  className="leading-relaxed text-sm sm:text-base"
                  style={{ color: 'rgba(255,255,255,0.72)' }}
               >
                  What started as a small team helping clients untangle their tool stacks has grown into a full automation practice. Today, Flow Wizards works with businesses across industries — connecting their tools, eliminating the manual steps in between, and building the kind of systems that let teams focus on the work that actually matters. We're not a software company. We're the people who make your software work together.
               </motion.p>
            </div>

         </div>
      </div>
   </section>
)

export default OurStorySection

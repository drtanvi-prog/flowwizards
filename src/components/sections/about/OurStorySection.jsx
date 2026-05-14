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
                     Record scratch
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
                  <span style={{ color: '#fff' }}>You're probably</span>
                  <br />
                  <span style={{ color: '#E85C41' }}>wondering how we<br className="hidden sm:block" /> got here.</span>
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
                  Like most businesses, Flow Wizards got its start out of necessity. A decade ago,
                  our founder was the Director of Operations for an NYC-based agency. Frustrated by
                  how tedious and time-consuming so many necessary business tasks were, he had this
                  nagging feeling that there had to be a better way.
               </motion.p>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.22 }}
                  className="leading-relaxed text-sm sm:text-base"
                  style={{ color: 'rgba(255,255,255,0.72)' }}
               >
                  That's when he discovered the burgeoning world of SaaS tools that helped the
                  company operate more efficiently. Tools like Zapier, Keap (formerly Infusionsoft),
                  and Pipedrive — it was love at first click. Originally launched as a one-man side
                  project, Flow Wizards now employs 15+ experts (and counting) helping hundreds of
                  companies optimize their business processes and workflows by choosing, implementing
                  and automating the right software for their business. In a world that's only getting
                  more fast-paced and tech-reliant, we provide much-needed clarity, efficiency, and simplicity.
               </motion.p>
            </div>

         </div>
      </div>
   </section>
)

export default OurStorySection

import { motion } from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import anim from '@/assets/lottie/anim1.lottie?url'
import Chip from '@/components/ui/Chip'
import AIServicesAccordion from '../ai-services-accordion'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease },
})

const AIValueProp = () => (
  <section className="bg-white px-6 sm:px-10 xl:px-16 py-16 sm:py-24">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

        {/* ── Left: Text ── */}
        <div className="flex-1 min-w-0">

          <motion.div {...fadeUp(0)} className="mb-5">
            <Chip>Why Teams Work With Us</Chip>
          </motion.div>

          <motion.h2
            {...fadeUp(0.07)}
            className="text-[1.3rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-[#1A1A1A] leading-tight sm:leading-[1.12] m-0 mb-6"
            style={{ letterSpacing: '-0.03em' }}
          >
            Your team shouldn't be the glue holding your tech stack together.
          </motion.h2>

          {/* Body */}
          <motion.p
            {...fadeUp(0.14)}
            className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#4A4A4A] leading-relaxed m-0 max-w-md"
          >
            When your tools don't talk to each other, your team fills the gap - manually. Copying data, chasing approvals, re-entering the same info in three places. We build the connections that make that work disappear, so your people spend time on things that actually require a human.
          </motion.p>
        </div>

        {/* ── Right: Lottie animation ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="flex-1 min-w-0 flex justify-center lg:justify-end"
        >
          <div className="w-full" style={{ maxWidth: 520 }}>
            <DotLottieReact src={anim} loop autoplay />
          </div>
        </motion.div>

      </div>

      {/* ── Accordion ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease }}
        className="mt-14 sm:mt-20"
      >
        <AIServicesAccordion />
      </motion.div>
    </div>
  </section>
)

export default AIValueProp

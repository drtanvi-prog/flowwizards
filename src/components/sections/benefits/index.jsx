import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Chip from '@/components/ui/Chip'
import { AutomationDashboard } from './AutomationDashboard'

const CHECKS = [
  { title: 'Custom strategy',       desc: 'Automation tailored to your exact business processes and goals.' },
  { title: 'Seamless integration',  desc: 'Works with the tools you already use — no ripping and replacing.' },
  { title: 'Ongoing support',       desc: 'Dedicated account management, optimisation & continuous improvement.' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const BenefitsSection = ({ image }) => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const blobY = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 sm:py-24 overflow-hidden relative">

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[320px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #ff4f00 0%, transparent 70%)', y: blobY }}
      />

      <div className="max-w-360 mx-auto px-5 sm:px-8 xl:px-16 relative z-10">

        {/* ── Header — centered ── */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <motion.div {...fadeUp(0)} className="mb-4">
            <Chip>Benefits of automation</Chip>
          </motion.div>

          <motion.h2
            {...fadeUp(0.08)}
            className="text-[1.3rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold leading-tight sm:leading-[1.12] max-w-3xl"
            style={{ color: '#111111', letterSpacing: '-0.03em' }}
          >
            Turn your business into a{' '}
            <span style={{
              background: 'linear-gradient(90deg, #ff4f00, #FC6E32)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              lean, mean
            </span>{' '}
            productivity machine
          </motion.h2>

          <motion.p
            {...fadeUp(0.15)}
            className="text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed mt-5 max-w-xl"
            style={{ color: '#6B6B6B' }}
          >
            We do so much more than automate your processes - we understand your big picture,
            strategise the best solutions, and implement them seamlessly so you move faster than ever.
          </motion.p>
        </div>

        {/* ── Automation visual card ── */}
        <motion.div {...fadeUp(0.2)} className="mb-10 sm:mb-14">
          {image
            ? <img src={image} alt="Benefits illustration" className="w-full max-w-3xl mx-auto object-contain" />
            : <AutomationDashboard />
          }
        </motion.div>

        {/* ── 3-column feature cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CHECKS.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3 p-5 rounded-2xl"
              style={{ background: '#FAFAFA', border: '1.5px solid #F0EDE8' }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #ff4f00, #FC6E32)' }}
                >
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-[13px] sm:text-[14px] font-bold text-[#1A1A1A]">{title}</p>
              </div>
              <p className="text-[12px] sm:text-[13px] leading-relaxed" style={{ color: '#777' }}>{desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BenefitsSection

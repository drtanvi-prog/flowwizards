import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Chip from '../../ui/Chip'
import { AutomationDashboard } from './AutomationDashboard'

const CHECKS = [
  'Custom automation strategy tailored to your business',
  'Seamless integration with your existing tools & software',
  'Ongoing support, optimisation & dedicated account management',
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const BenefitsSection = ({ image }) => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const blobY     = useTransform(scrollYProgress, [0, 1], [-40, 40])
  const blobScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95])

  return (
    <section ref={sectionRef} className="w-full bg-white py-24 overflow-hidden relative">

      {/* Top-right background glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-130 h-130 rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #ff4f00 0%, transparent 70%)', y: blobY, scale: blobScale }}
      />

      <div className="max-w-360 mx-auto px-8 xl:px-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-28">

          {/* ── Left — text ── */}
          <div className="flex-1 min-w-0 max-w-xl">

            <motion.div {...fadeUp(0)}>
              <Chip className="mb-6">Benefits of automation</Chip>
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="font-extrabold leading-[1.12] mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', color: '#111111', letterSpacing: '-0.03em' }}
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
              {...fadeUp(0.18)}
              className="text-base leading-relaxed mb-10"
              style={{ color: '#6B6B6B', maxWidth: '480px' }}
            >
              As business ops and automation experts, we do so much more than automate your
              processes — we understand your big picture, strategise the best solutions, and
              implement them seamlessly so you can streamline productivity like never before.
            </motion.p>

            {/* Premium checklist */}
            <div className="flex flex-col gap-4 mb-10">
              {CHECKS.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #ff4f00, #FC6E32)' }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <p className="text-sm font-medium" style={{ color: '#333', lineHeight: 1.55 }}>{text}</p>
                </motion.div>
              ))}
            </div>


          </div>

          {/* ── Right — live dashboard ── */}
          <div className="flex-1 flex items-center justify-center min-w-0">
            {image
              ? <motion.img src={image} alt="Benefits illustration"
                  className="w-full max-w-md object-contain"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} />
              : <AutomationDashboard />
            }
          </div>

        </div>
      </div>
    </section>
  )
}

export default BenefitsSection

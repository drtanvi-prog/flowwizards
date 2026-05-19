import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Chip from '@/components/ui/Chip'
import { STEPS } from '../../../data/aiFrameworkData'
import ShapeEl from './ShapeEl'
import MobileLayout from './MobileLayout'

const SNAKE_PATH =
  'M 0 480' +
  ' C 167 443, 333 260, 500 260' +
  ' C 667 260, 833 430, 1000 480' +
  ' C 1167 530, 1333 560, 1500 560' +
  ' C 1667 560, 1833 530, 2000 480' +
  ' C 2167 430, 2333 260, 2500 260' +
  ' C 2667 260, 2833 430, 3000 480' +
  ' C 3167 530, 3333 560, 3500 560' +
  ' C 3667 560, 3833 530, 4000 480' +
  ' C 4167 430, 4333 260, 4500 260' +
  ' C 4667 260, 4833 430, 5000 480' +
  ' C 5167 530, 5333 560, 5500 560' +
  ' C 5667 560, 5833 530, 6000 480'

const AIAutomationFramework = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0vw', `-${(STEPS.length - 1) * 100}vw`]
  )

  return (
    <>
      <MobileLayout />

      <section
        ref={ref}
        className="hidden lg:block relative bg-[#FEF6F5]"
        style={{ height: `${STEPS.length * 100}vh` }}
      >
        <div className="sticky top-20 xl:top-25 h-[calc(100vh-5rem)] xl:h-[calc(100vh-6.25rem)] overflow-hidden flex flex-col">

          <div className="px-6 sm:px-10 xl:px-16 pt-5 sm:pt-6 pb-2 sm:pb-3 shrink-0">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-3 sm:mb-4"
              >
                <Chip>How We Work</Chip>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-[1.3rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-[#1A1A1A] leading-tight sm:leading-[1.12] m-0 mb-2 sm:mb-3"
                style={{ letterSpacing: '-0.03em' }}
              >
                We don't start by building. We start by listening.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#4A4A4A] leading-relaxed m-0 max-w-2xl"
              >
                Most automation projects fail because someone skipped the discovery. We've seen it enough times to know: the best-built workflow for the wrong problem is still a waste. Our process is designed to get the diagnosis right before a single trigger is written.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="mt-2 sm:mt-3"
              >
                <svg width="90" height="18" viewBox="0 0 90 18" fill="none">
                  <circle cx="6" cy="9" r="5" stroke="#ff4f00" strokeWidth="1.5" fill="none" />
                  <line x1="11" y1="9" x2="78" y2="9" stroke="#1a1a1a" strokeWidth="1.5" />
                  <circle cx="84" cy="9" r="5" stroke="#ff4f00" strokeWidth="1.5" fill="none" />
                  <motion.polygon
                    points="0,4.5 9,9 0,13.5"
                    fill="#ff4f00"
                    animate={{ x: [11, 69] }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse' }}
                  />
                </svg>
              </motion.div>
            </div>
          </div>

          <div className="flex-1 relative overflow-hidden">
            <motion.div
              className="flex h-full relative"
              style={{ width: `${STEPS.length * 100}vw`, x }}
            >
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox={`0 0 ${STEPS.length * 1000} 565`}
                preserveAspectRatio="none"
              >
                <path d={SNAKE_PATH} stroke="#1a1a1a" strokeWidth="12" fill="none" strokeLinecap="round" />
              </svg>

              {STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className="shrink-0 relative overflow-hidden h-full"
                  style={{ width: '100vw' }}
                >
                  <div
                    className="absolute top-0 left-6 sm:left-10 xl:left-16 select-none pointer-events-none z-0"
                    style={{
                      fontSize: 'clamp(5rem, 15vw, 18rem)',
                      fontWeight: 900,
                      color: 'rgba(255,79,0,0.07)',
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </div>

                  <div
                    className="absolute z-10 px-6 sm:px-10 xl:px-16"
                    style={{ top: '22%', left: 0, right: 0 }}
                  >
                    <div className="max-w-7xl mx-auto">
                      <div
                        className="flex items-center gap-6 sm:gap-10"
                        style={{ maxWidth: 'clamp(320px, 62%, 860px)' }}
                      >
                        <div className="flex-1 min-w-0">
                          <p
                            className="font-bold text-[#ff4f00] m-0 mb-1.5 tracking-wide"
                            style={{ fontSize: 'clamp(0.62rem, 1vw, 0.82rem)' }}
                          >
                            Step {step.num}
                          </p>
                          <h3
                            className="font-bold text-[#1A1A1A] leading-tight m-0 mb-2 sm:mb-3"
                            style={{ fontSize: 'clamp(1rem, 1.85vw, 1.65rem)' }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="text-[#4A4A4A] leading-relaxed m-0"
                            style={{ fontSize: 'clamp(0.68rem, 1.1vw, 0.86rem)' }}
                          >
                            {step.desc}
                          </p>
                        </div>

                        <div
                          className="shrink-0"
                          style={{
                            width: 'clamp(100px, 11vw, 180px)',
                            height: 'clamp(100px, 11vw, 180px)',
                          }}
                        >
                          <ShapeEl index={i} uid="d" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>
    </>
  )
}

export default AIAutomationFramework

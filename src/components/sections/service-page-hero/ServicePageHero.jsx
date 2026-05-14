import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = (delay = 0, y = 28) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease },
})

export const SHWord = ({ children }) => (
  <span className="shword relative inline-flex px-1.5 sm:px-5 py-0.5 sm:py-2 mx-0 sm:mx-0.5 align-baseline">
    <span className="absolute inset-0 rounded-md sm:rounded-xl bg-[#ff4f00] border-2 sm:border-[2.5px] border-[#1A1A1A]" />
    <span className="relative z-10 text-white leading-none">{children}</span>
  </span>
)

const ServicePageHero = ({ badge, heading, body, ctaText, centered }) => (
  <section className="bg-[#FEF6F5] overflow-hidden px-6 sm:px-10 xl:px-16 pt-6 pb-20 sm:pt-18 sm:pb-28">
    <div className={`max-w-7xl mx-auto ${centered ? 'flex flex-col items-center text-center' : ''}`}>

      {/* Badge */}
      <motion.div {...fadeUp(0.05)} className={`flex items-center gap-4 mb-7 sm:mb-9 ${centered ? 'justify-center' : ''}`}>
        <div className="relative z-10 shrink-0 border-[1.5px] border-[#1A1A1A] rounded-lg px-2.5 py-0.5 sm:px-5 sm:py-2 bg-[#FEF6F5]">
          <span className="whitespace-nowrap text-[10px] sm:text-[13px] font-medium text-[#1A1A1A] leading-none">
            {badge}
          </span>
        </div>
        {!centered && <div className="hidden sm:block flex-1 h-px bg-[#1A1A1A]" />}
      </motion.div>

      {/* Heading */}
      <motion.h1
        {...fadeUp(0.15, 36)}
        className="m-0 font-extrabold text-[#1A1A1A] tracking-tight leading-[1.6] sm:leading-[1.4] text-[1.4rem] sm:text-[2rem] lg:text-[3.2rem] xl:text-[4.5rem]"
      >
        {heading}
      </motion.h1>

      {/* Body */}
      <motion.p
        {...fadeUp(0.28, 16)}
        className="m-0 text-[#4A4A4A] leading-relaxed mt-5 sm:mt-8"
        style={{ fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)', maxWidth: '560px' }}
      >
        {body}
      </motion.p>

      {/* CTA */}
      {ctaText && (
        <motion.div {...fadeUp(0.38, 14)} className="mt-8 sm:mt-12 flex md:block items-center justify-center">
          <Button variant="secondary"
            size="md"
            className="
            sm:px-5! sm:py-3!
            text-[11px]! sm:text-sm!
            px-3! py-1.5!
                   "
          >{ctaText}</Button>
        </motion.div>
      )}

    </div>
  </section>
)

export default ServicePageHero

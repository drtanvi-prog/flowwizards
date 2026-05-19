import { motion } from 'framer-motion'
import { QUOTES } from '../../../data/quotesData'
import QuoteCard from './QuoteCard'
import Chip from '@/components/ui/Chip'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const PremiumQuoteStack = ({
  quotes = QUOTES,
  badge,
  heading,
  subheading,
  ctaHeading,
  ctaLabel,
  ctaHref = '#',
  containerClass = 'max-w-360 px-5 sm:px-8 xl:px-16',
}) => (
  <section
    className="relative w-full bg-white"
    style={{ paddingTop: '2rem', paddingBottom: '1.5rem' }}
  >
    <div className={`${containerClass} mx-auto`}>

      {/* Optional header */}
      {(badge || heading) && (
        <div className="mb-14 flex flex-col items-start">
          {badge && (
            <motion.div {...fadeUp(0)} className="mb-4">
              <Chip>{badge}</Chip>
            </motion.div>
          )}
          {heading && (
            <motion.h2
              {...fadeUp(0.07)}
              className="text-[1.3rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-[#1A1A1A] leading-tight sm:leading-[1.12]"
              style={{ letterSpacing: '-0.03em' }}
              dangerouslySetInnerHTML={{ __html: heading }}
            />
          )}
          {subheading && (
            <motion.p
              {...fadeUp(0.13)}
              className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#666] leading-relaxed mt-4 max-w-2xl"
            >
              {subheading}
            </motion.p>
          )}
        </div>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {quotes.map((q, i) => (
          <QuoteCard key={i} q={q} i={i} total={quotes.length} />
        ))}
      </div>

      {/* Optional CTA footer */}
      {ctaHeading && (
        <motion.div {...fadeUp(0.2)} className="mt-16">
          <p
            className="font-extrabold text-[#1a1a1a] mb-3"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
          >
            {ctaHeading}
          </p>
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] hover:gap-3 transition-all duration-200"
          >
            {ctaLabel}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      )}

    </div>
  </section>
)

export default PremiumQuoteStack


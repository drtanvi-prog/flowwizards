import { motion } from 'framer-motion'
import { QUOTES } from '../../../data/quotesData'
import QuoteCard from './QuoteCard'
import Chip from '../../ui/Chip'

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
  ctaHeading,
  ctaLabel,
  ctaHref = '#',
}) => (
  <section
    className="relative w-full bg-white"
    style={{ paddingTop: '2rem', paddingBottom: '1.5rem' }}
  >
    <div className="max-w-360 mx-auto px-8 xl:px-16">

      {/* Optional header */}
      {(badge || heading) && (
        <div className="mb-14">
          {badge && (
            <motion.div {...fadeUp(0)} className="mb-4">
              <Chip className="border border-[#ff4f00]">{badge}</Chip>
            </motion.div>
          )}
          {heading && (
            <motion.h2
              {...fadeUp(0.07)}
              className="font-extrabold text-[#1A1A1A] leading-[1.1] whitespace-pre-line"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)' }}
            >
              {heading}
            </motion.h2>
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


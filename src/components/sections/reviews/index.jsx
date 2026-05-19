import { motion } from 'framer-motion'
import Chip from '../../ui/Chip'

const CARD_COLORS = [
  { bg: '#F0F7E0', border: '#7A9A01', quoteColor: '#7A9A01' },
  { bg: '#FFF0EE', border: '#E85C41', quoteColor: '#E85C41' },
  { bg: '#FFF5E8', border: '#D97706', quoteColor: '#D97706' },
  { bg: '#F0F7E0', border: '#7A9A01', quoteColor: '#7A9A01' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const ReviewCard = ({ review, index }) => {
  const color = CARD_COLORS[index % CARD_COLORS.length]
  return (
    <div
      style={{
        position: 'sticky',
        top: `${72 + index * 28}px`,
        zIndex: index + 1,
        background: color.bg,
        border: `2px solid ${color.border}`,
        borderRadius: '16px',
        padding: '56px 48px',
        marginBottom: '16px',
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div
          className="font-black leading-none mb-6 select-none"
          style={{ fontSize: '3.5rem', color: color.quoteColor }}
          aria-hidden="true"
        >
          &#8220;
        </div>
        <p
          className="font-extrabold text-[#1a1a1a] leading-[1.3] mb-6"
          style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.65rem)' }}
        >
          {review.quote}
        </p>
        <p className="text-sm text-[#555]">{review.author}</p>
      </div>
    </div>
  )
}

const defaultReviews = [
  {
    quote:
      "The team at Flow Wizards is the best I've worked with. They handle every challenge with real expertise. Their communication is clear and consistent, they bring fresh ideas, streamline processes, and provide practical solutions. I can't recommend Flow Wizards highly enough.",
    author: 'Austin Nimmo',
  },
  {
    quote:
      'Flow Wizards did an amazing job setting up my CRM system and automations. They understood exactly what my business needed and made the process seamless from start to finish.',
    author: '- Gavriel F.',
  },
  {
    quote:
      "Working with Flow Wizards has been an absolute game-changer for my business. They stepped in, analyzed all my CRM platforms, and immediately found issues I didn't even realize were costing me money.",
    author: '- Barry P.',
  },
  {
    quote:
      'Excellent service from start to finish - professional, responsive, and delivered great results. Highly recommended!',
    author: '- Christine R.',
  },
]

const ReviewsSection = ({
  badge = '"Absolute Rockstars"',
  heading = 'And 500+ (and counting) other\n5-star reviews',
  reviews = defaultReviews,
  ctaHeading = 'Want results like these?',
  ctaLabel = 'Start with a Discovery Call',
  ctaHref = '#',
}) => (
  <section className="bg-white px-6 sm:px-10 xl:px-16 py-16 sm:py-24">
    <div className="max-w-4xl mx-auto">

      <motion.div {...fadeUp(0)} className="mb-4">
        <Chip className="border border-[#ff4f00]">{badge}</Chip>
      </motion.div>

      <motion.h2
        {...fadeUp(0.07)}
        className="font-extrabold text-[#1A1A1A] leading-[1.1] mb-14 whitespace-pre-line"
        style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)' }}
      >
        {heading}
      </motion.h2>

      {/* Stacked sticky cards */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} index={i} />
        ))}
      </motion.div>

      {/* CTA footer */}
      {ctaHeading && (
        <motion.div
          {...fadeUp(0.2)}
          className="mt-16"
        >
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

export default ReviewsSection

import { motion } from 'framer-motion'
import Chip from '@/components/ui/Chip'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease },
})

const SectionLabel = ({ children, color }) => (
  <span
    className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-2.5 py-1 rounded-full mb-1"
    style={{ background: color, color: '#1a1a1a' }}
  >
    {children}
  </span>
)

const ResultItem = ({ children, accentColor }) => (
  <li className="flex items-start gap-2.5 text-[13px] font-semibold text-[#1a1a1a] leading-snug">
    <span
      className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
      style={{ background: accentColor }}
    >
      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
        <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
    {children}
  </li>
)

const cases = [
  {
    stat: '146%',
    statLabel: 'Sales Growth',
    bg: '#FFE4E4',
    border: '#E53535',
    accentColor: '#E53535',
    labelBg: '#FFCECE',
    title: '146% Sales Growth with Airtable Automation + AI',
    problem:
      'GuideMe Japan operates a two-sided marketplace connecting travelers with local guides. As demand grew, onboarding new guides, coordinating schedules, and managing payroll required hours of manual work and constant coordination across tools. Growth wasn\'t breaking the business, but it was stretching the operation thin and slowing execution.',
    built:
      'Flow Wizards automated core operational workflows across onboarding, scheduling, internal coordination, and access to operational data. Key processes that previously required manual steps and back-and-forth were connected into a single, reliable system that handled volume without extra oversight.',
    results: [
      '146% increase in sales',
      '166% increase in bookings',
      'Guide onboarding reduced from 2+ hours to 15 minutes',
    ],
  },
  {
    stat: '128%',
    statLabel: 'Revenue Growth',
    bg: '#FFF5DC',
    border: '#D97706',
    accentColor: '#D97706',
    labelBg: '#FEEFC3',
    title: 'Thousands of E-Commerce Orders Processed Automatically',
    problem:
      'A fast-growing e-commerce brand processed thousands of monthly orders, but product details were buried inside unstructured descriptions. Operations teams manually extracted, cleaned, and reformatted order data before production could begin. As order volume increased, this manual step became a massive bottleneck.',
    built:
      'Flow Wizards implemented AI-driven automation that reads incoming orders, extracts required details, standardizes the data, and routes it directly into production workflows without manual cleanup.',
    results: [
      '128% increase in monthly revenue',
      '55% increase in order volume',
      '26,000+ order line items processed automatically per month',
    ],
  },
]

const CaseCard = ({ card, index }) => (
  <motion.div
    {...fadeUp(0.1 + index * 0.12)}
    whileHover={{ y: -6, transition: { duration: 0.3, ease } }}
    className="relative flex flex-col rounded-xl overflow-hidden"
    style={{
      background: card.bg,
      border: `2.5px solid ${card.border}`,
      boxShadow: `0 4px 32px 0 ${card.border}22`,
    }}
  >
    {/* Decorative oversized stat */}
    <div className="px-8 pt-8 pb-0 select-none pointer-events-none">
      <div
        className="font-black leading-none tracking-tight opacity-[0.13]"
        style={{ fontSize: 'clamp(5rem, 14vw, 9rem)', color: card.border, lineHeight: 1 }}
        aria-hidden="true"
      >
        {card.stat}
      </div>
    </div>

    {/* Card content */}
    <div className="px-8 pt-0 pb-8 flex flex-col flex-1 -mt-6">
      {/* Stat pill */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ background: card.border, color: '#fff' }}
        >
          {card.stat} {card.statLabel}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-extrabold text-[#1A1A1A] leading-[1.15] mb-6"
        style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
      >
        {card.title}
      </h3>

      {/* Divider */}
      <div className="w-10 h-1 rounded-full mb-6" style={{ background: card.border }} />

      {/* The Problem */}
      <div className="mb-5">
        <SectionLabel color={card.labelBg}>The Problem</SectionLabel>
        <p className="text-[13px] text-[#3a3a3a] leading-relaxed mt-2">{card.problem}</p>
      </div>

      {/* What We Built */}
      <div className="mb-5">
        <SectionLabel color={card.labelBg}>What We Built</SectionLabel>
        <p className="text-[13px] text-[#3a3a3a] leading-relaxed mt-2">{card.built}</p>
      </div>

      {/* The Results */}
      <div className="mb-7">
        <SectionLabel color={card.labelBg}>The Results</SectionLabel>
        <ul className="mt-3 flex flex-col gap-2.5">
          {card.results.map((r, i) => (
            <ResultItem key={i} accentColor={card.border}>{r}</ResultItem>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-auto">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-[13px] font-bold transition-all duration-200 hover:gap-3"
          style={{ color: card.border }}
        >
          Read the full case study
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  </motion.div>
)

const AICaseStudies = () => (
  <section className="bg-white px-6 sm:px-10 xl:px-16 py-16 sm:py-24">
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex flex-col items-start mb-14">
        <motion.div {...fadeUp(0)} className="mb-4">
          <Chip>AI Automation Case Studies</Chip>
        </motion.div>
        <motion.h2
          {...fadeUp(0.07)}
          className="text-[1.3rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-[#1A1A1A] leading-tight sm:leading-[1.12]"
          style={{ letterSpacing: '-0.03em' }}
        >
          Real Results of AI-Powered Growth
        </motion.h2>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cases.map((card, i) => (
          <CaseCard key={i} card={card} index={i} />
        ))}
      </div>

    </div>
  </section>
)

export default AICaseStudies

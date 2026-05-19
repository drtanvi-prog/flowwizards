import { motion } from 'framer-motion'
import { ScanSearch, Zap, RefreshCw } from 'lucide-react'
import Chip from '@/components/ui/Chip'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease },
})

const ENGAGEMENTS = [
  {
    icon: ScanSearch,
    title: 'Automation Audit & Roadmap',
    accent: '#D42B2B',
    iconBg: '#FEF5F5',
    borderColor: '#D42B2B',
    bestFor: 'Teams that want a clear picture before committing budget to a build.',
    description: 'We walk through your workflows, map where time is leaking, and deliver a prioritized roadmap with specific recommendations - so you know exactly what to do next and why.',
    engagementType: 'Fixed Scope',
  },
  {
    icon: Zap,
    title: 'Dedicated Build Sprints',
    accent: '#C27D00',
    iconBg: '#FFFBF0',
    borderColor: '#F59E0B',
    bestFor: 'Teams with a defined problem and ready to move.',
    description: 'We scope a focused block of work, build the workflows, test them, and hand them off running. No drawn-out timelines - you see results in weeks, not quarters.',
    engagementType: 'Hourly Packages',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Automation Partner',
    accent: '#5A7A00',
    iconBg: '#F6FAE8',
    borderColor: '#7A9A01',
    bestFor: 'Growing teams that want automation to keep pace as the business changes.',
    description: 'A dedicated monthly engagement where we continue expanding, optimizing, and maintaining your automation stack as your tools, team, and processes evolve.',
    engagementType: 'Monthly Retainer',
  },
]

const EngagementCard = ({ card, index }) => {
  const Icon = card.icon
  return (
    <motion.div
      {...fadeUp(0.1 + index * 0.12)}
      whileHover={{ y: -6, transition: { duration: 0.3, ease } }}
      className="flex flex-col rounded-2xl bg-white overflow-hidden"
      style={{
        border: `1.5px solid ${card.borderColor}30`,
        boxShadow: `0 2px 20px 0 ${card.borderColor}12`,
        borderTop: `4px solid ${card.borderColor}`,
      }}
    >
      <div className="px-7 pt-7 pb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
          style={{ background: card.iconBg }}
        >
          <Icon size={22} color={card.accent} strokeWidth={2} />
        </div>
        <h3
          className="font-extrabold text-[#1A1A1A] leading-[1.2] m-0"
          style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)' }}
        >
          {card.title}
        </h3>
      </div>

      {/* Divider */}
      <div className="mx-7" style={{ height: '1px', background: `${card.borderColor}20` }} />

      <div className="flex flex-col flex-1 px-7 py-5">
        {/* Best for */}
        <div className="flex gap-3 mb-4">
          <div
            className="shrink-0 w-1 rounded-full self-stretch"
            style={{ background: card.accent }}
          />
          <p className="text-[14px] font-semibold text-[#1a1a1a] leading-snug m-0">
            Best for {card.bestFor}
          </p>
        </div>

        <p className="text-[13px] text-[#666] leading-relaxed m-0 flex-1">
          {card.description}
        </p>

        <div className="mt-6 pt-5" style={{ borderTop: `1px solid ${card.borderColor}20` }}>
          <span
            className="inline-flex items-center gap-2 text-[12px] font-semibold px-3 py-1.5 rounded-full"
            style={{ background: card.iconBg, color: card.accent }}
          >
            {card.engagementType}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

const AIEngagements = () => (
  <section className="bg-white px-6 sm:px-10 xl:px-16 pt-4 pb-16 sm:pt-6 sm:pb-24">
    <div className="max-w-7xl mx-auto">

      <div className="flex flex-col items-start mb-12">
        <motion.div {...fadeUp(0)} className="mb-4">
          <Chip>Engagement Models</Chip>
        </motion.div>
        <motion.h2
          {...fadeUp(0.07)}
          className="text-[1.3rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-[#1A1A1A] leading-tight sm:leading-[1.12]"
          style={{ letterSpacing: '-0.03em' }}
        >
          Pick the engagement that fits where you are right now.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ENGAGEMENTS.map((card, i) => (
          <EngagementCard key={i} card={card} index={i} />
        ))}
      </div>

    </div>
  </section>
)

export default AIEngagements

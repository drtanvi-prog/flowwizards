import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from '@/components/ui/Button'
import Chip from '@/components/ui/Chip'

const ease = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0, y = 28) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease },
})

const services = [
  {
    title: 'AI Automation Consulting',
    description:
      'Process discovery, workflow mapping, and ROI modeling to identify where automation can bring you the most impact.',
  },
  {
    title: 'Business Process Automation',
    description:
      'Automating handoffs, approvals, follow-ups, and internal workflows across teams.',
  },
  {
    title: 'Systems, CRM, and Data Integration',
    description:
      'Connecting tools and creating a reliable source of truth across platforms.',
  },
  {
    title: 'AI-Assisted Workflows',
    description:
      'Using AI for routing, classification, summarization, extraction, and structured decision support.',
  },
  {
    title: 'Governance and Secure Implementation',
    description:
      'Clear permissions, audit logs, monitoring, and quality control built into every workflow.',
  },
]

const AIAutomationCover = () => (
  <section className="bg-white px-6 sm:px-10 xl:px-16 py-16 sm:py-24">
    <div className="max-w-7xl mx-auto">

      {/* Header — centered */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
        <motion.div {...fadeUp(0)} className="mb-4">
          <Chip>What We Cover</Chip>
        </motion.div>
        <motion.h2
          {...fadeUp(0.07)}
          className="text-[1.3rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-[#1A1A1A] leading-tight sm:leading-[1.12]"
          style={{ letterSpacing: '-0.03em' }}
        >
          What AI Automation Services Cover
        </motion.h2>
      </div>

      {/* Body copy — centered */}
      <motion.div {...fadeUp(0.1)} className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
        <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-[#1A1A1A] m-0 mb-3">
          Business growth starts with operations that can handle it.
        </p>
        <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#4A4A4A] leading-relaxed m-0 mb-4">
          As volume increases, teams rely on manual steps, disconnected systems, and workarounds
          that slow execution and create gaps — making it harder to scale without adding headcount.
        </p>
        <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#4A4A4A] leading-relaxed m-0">
          Our work typically includes:
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-12 sm:mb-16">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            {...fadeUp(0.1 + i * 0.08)}
            whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
            className="border border-gray-200 rounded-2xl p-8 sm:p-10 flex flex-col"
          >
            {/* Check icon — top left */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease }}
              className="w-10 h-10 rounded-full bg-[#ff4f00] flex items-center justify-center mb-8 shrink-0"
            >
              <Check size={18} color="white" strokeWidth={2.5} />
            </motion.div>

            {/* Title & description — centered */}
            <p className="text-[15px] sm:text-[16px] font-semibold text-[#1A1A1A] m-0 mb-3 text-center">
              {service.title}
            </p>
            <p className="text-[13px] sm:text-[14px] text-[#4A4A4A] leading-relaxed m-0 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div {...fadeUp(0.3)} className="flex justify-center">
        <Button variant="secondary" size="lg" className="text-[11px]! px-3! py-1.5! sm:text-base! sm:px-7! sm:py-3!">Book a Discovery Call</Button>
      </motion.div>

    </div>
  </section>
)

export default AIAutomationCover

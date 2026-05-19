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
    title: 'Workflow Discovery & Opportunity Mapping',
    description:
      'We dig into how your team actually works — not how the org chart says it does — to find where time is being lost and where automation pays off fastest.',
  },
  {
    title: 'Cross-Team Process Automation',
    description:
      'Sales handoffs, approval chains, follow-up sequences, internal routing — we automate the in-between steps that nobody owns but everyone touches.',
  },
  {
    title: 'Tool & Data Integration',
    description:
      'We wire your existing stack together so data moves where it needs to go, automatically, without manual exports or copy-paste between platforms.',
  },
  {
    title: 'AI-Powered Decision Layers',
    description:
      'We add AI where rules alone fall short — reading emails, classifying tickets, pulling key details from documents, and surfacing what needs attention.',
  },
  {
    title: 'Safe, Auditable Deployment',
    description:
      'Every workflow we build includes error handling, access controls, and logging — so you always know what ran, what changed, and who touched what.',
  },
]

const AIAutomationCover = () => (
  <section className="bg-white px-6 sm:px-10 xl:px-16 py-16 sm:py-24">
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex flex-col items-start mb-10 sm:mb-14">
        <motion.div {...fadeUp(0)} className="mb-4">
          <Chip>What We Cover</Chip>
        </motion.div>
        <motion.h2
          {...fadeUp(0.07)}
          className="text-[1.3rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-[#1A1A1A] leading-tight sm:leading-[1.12]"
          style={{ letterSpacing: '-0.03em' }}
        >
          Here's what we actually build for you.
        </motion.h2>
      </div>

      {/* Body copy */}
      <motion.div {...fadeUp(0.1)} className="max-w-2xl mb-10 sm:mb-14">
        <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-[#1A1A1A] m-0 mb-3">
          Every engagement is scoped around your actual bottlenecks - not a template.
        </p>
        <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#4A4A4A] leading-relaxed m-0 mb-4">
          We've seen enough operations to know that no two teams break the same way. So before we build anything, we spend time understanding where your process actually falls apart - then design around that.
        </p>
        <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#4A4A4A] leading-relaxed m-0">
          Most projects touch some combination of these areas:
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
            <p className="text-[15px] sm:text-[16px] font-semibold text-[#1A1A1A] m-0 mb-3">
              {service.title}
            </p>
            <p className="text-[13px] sm:text-[14px] text-[#4A4A4A] leading-relaxed m-0">
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

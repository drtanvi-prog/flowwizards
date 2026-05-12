import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Chip from '../../ui/Chip'

const problems = [
  {
    text: "An avalanche of manual tasks is slowing down your momentum.",
  },
  {
    text: "Aligning workflow needs across teams is becoming an impossible challenge.",
  },
  {
    text: "Inconsistent processes are causing confusion and costly errors.",
  },
]

const TheProblemSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-8 xl:px-16">
      <div className="max-w-360 mx-auto">

        {/* Label Chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <Chip>
            The problem
          </Chip>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[1.75rem] sm:text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-[#1A1A1A] leading-[1.1] mb-12 md:mb-16"
          style={{ fontWeight: 800 }}
        >
          Your business is making headway.<br />
          It's also giving you headaches.
        </motion.h2>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="w-10 h-10 md:w-12 md:h-12 bg-[#FF5A5F] rounded-full flex items-center justify-center mb-6"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={3} />
              </motion.div>
              <p className="text-[#1A1A1A] text-base md:text-lg leading-relaxed font-medium">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="text-[#1A1A1A] text-lg md:text-xl lg:text-2xl leading-relaxed">
            You need a dedicated, available team to take complete ownership and help you scale,{' '}
            <span className="font-bold">without draining your resources</span>.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default TheProblemSection

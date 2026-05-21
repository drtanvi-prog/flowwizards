import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { openCalendly } from '@/utils/calendly'

const services = [
  {
    title: "Custom-built automation solutions",
    description: "designed to streamline your workflows with tailored strategies, no-code/low-code development, API integration, and comprehensive documentation.",
  },
  {
    title: "Ongoing support and optimization",
    description: "from a dedicated project manager, ensuring proactive monitoring, unlimited maintenance, and continuous improvements to keep everything running smoothly.",
  },
  {
    title: "Hands-on execution and maintenance",
    description: "with unlimited support, real-time issue resolution, and scheduled Zoom sessions, evolving with your business needs.",
  },
]

const FractionalServiceSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#1A1A1A] via-[#1E1E1E] to-[#0F0F0F] py-20 md:py-32 px-8 xl:px-16 relative overflow-hidden">

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-360 mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[1.25rem] sm:text-[1.8rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[4.25rem] font-bold leading-[1.1] mb-8 md:mb-16"
          style={{ fontWeight: 800 }}
        >
          <span className="text-white">With our </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]">
            Fractional Chief
          </span>
          <span className="text-white"> Automation service, you get:</span>
        </motion.h2>

        {/* Services List */}
        <div className="space-y-5 md:space-y-8 mb-8 md:mb-16 max-w-4xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex gap-4 md:gap-6 group"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.2,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-shadow duration-300"
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={3} />
              </motion.div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  <span className="font-bold">{service.title}</span>{' '}
                  <span className="text-gray-300">{service.description}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Tagline */}
          <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
            All at less cost than a full-time hire
          </h3>

          <motion.div
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button
              variant="primary"
              size="md"
              onClick={openCalendly}
              className="
                           self-start
                           text-[11px]! sm:text-sm!
                           px-3! py-1.5!
                           sm:px-5! sm:py-3!"
            >
              Book a discovery call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

          </motion.div>
        </motion.div>

      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

    </section>
  )
}

export default FractionalServiceSection

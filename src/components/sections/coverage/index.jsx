import { motion } from 'framer-motion'
import {
  RefreshCw,
  AlertCircle,
  Bell,
  Bug,
  TrendingUp,
  Zap,
  Link2,
  Users
} from 'lucide-react'

const coverageItems = [
  {
    icon: RefreshCw,
    title: "Evolving processes",
    description: "CRM needs updating as you grow? We automate it, so you can focus on sales.",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    icon: AlertCircle,
    title: "Error fixing",
    description: "Zapier glitch causing data loss? We troubleshoot and fix it fast.",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: Bell,
    title: "Constant updates",
    description: "Email marketing platform changed again? We keep your campaigns running smoothly.",
    gradient: "from-orange-600 to-red-500",
  },
  {
    icon: Bug,
    title: "Bug squashing",
    description: "Pesky bugs in your automations? We hunt them down and eliminate them.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Scaling up",
    description: "Customer support tickets doubling? We automate responses to save you time.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Zap,
    title: "Optimization",
    description: "A/B testing revealing new insights? We fine-tune your workflows for maximum impact.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Link2,
    title: "Multiple integrations",
    description: "Struggling to link your CRM, marketing, and support tools? We make them play nice.",
    gradient: "from-orange-600 to-pink-600",
  },
  {
    icon: Users,
    title: "Resource constraints",
    description: "Team drowning in manual data entry? We automate it, so they can tackle the big stuff.",
    gradient: "from-pink-600 to-purple-600",
  },
]

const CoverageSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-orange-50/30 py-20 md:py-32 px-8 xl:px-16 relative overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-360 mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[1.25rem] sm:text-[1.8rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[4.25rem] font-bold text-[#1A1A1A] leading-[1.1] mb-8 md:mb-16 text-center"
          style={{ fontWeight: 800 }}
        >
          We've got you covered for<br />
          anything that comes up:
        </motion.h2>

        {/* Coverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {coverageItems.map((item, index) => {
            const Icon = item.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white border-2 border-orange-200/50 group-hover:border-orange-300 rounded-3xl p-8 lg:p-10 h-full overflow-hidden shadow-lg shadow-orange-100/50 hover:shadow-2xl hover:shadow-orange-300/40 transition-all duration-500">

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.08 + 0.2,
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                      className="mb-6"
                    >
                      <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${item.gradient} p-3.5 lg:p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <Icon className="w-full h-full text-white" strokeWidth={2.5} />
                      </div>
                    </motion.div>

                    <h3 className="text-base md:text-xl lg:text-2xl font-bold text-[#1A1A1A] mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600 transition-all duration-300">
                      {item.title}
                    </h3>

                    <p className="text-[#4A4A4A] text-sm md:text-base lg:text-lg leading-relaxed">
                      {item.description}
                    </p>

                    {/* Decorative corner accent */}
                    <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full`} />
                  </div>
                </div>

                {/* Floating animation on alternating cards */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    y: isEven ? [0, -5, 0] : [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default CoverageSection

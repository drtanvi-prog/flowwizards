import { motion } from 'framer-motion'
import { logos } from './constant'
import MarqueeRow from './MarqueeRow'

const reversedLogos = [...logos].reverse()

const row1 = [...logos, ...logos]
const row2 = [...reversedLogos, ...reversedLogos]

const ToolsMarqueeSection = () => {
  return (
    <section className="relative overflow-hidden pt-8 md:pt-20 pb-20 md:pb-28">
      <div className="max-w-[1700px] mx-auto">
        {/* Heading */}
        <div className="px-6 md:px-10 mb-8 md:mb-20">
          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
                      text-center
                      font-black
                      tracking-[-0.05em]
                      leading-none
                      text-[#171717]
                      text-2xl sm:text-3xl md:text-3xl lg:text-4xl
            "
          >
            Tools we work (and play) with:
          </motion.h2>
        </div>

        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 md:w-40 bg-gradient-to-r from-[#F3F3F3] to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 md:w-40 bg-gradient-to-l from-[#F3F3F3] to-transparent" />

        {/* Row 1 */}
        <div className="mb-[1px]">
          <MarqueeRow
            items={row1}
            direction="left"
            duration={35}
          />
        </div>

        {/* Row 2 */}
        <MarqueeRow
          items={row2}
          direction="right"
          duration={40}
        />
      </div>
    </section>
  )
}

export default ToolsMarqueeSection
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Chip from '@/components/ui/Chip'
import { services } from '../../../data/howCanWeHelpData'
import { AccordionItem } from './AccordionItem'

const HowCanWeHelp = () => {
  const [openId, setOpenId] = useState(1)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section className="relative py-10 sm:py-24 overflow-hidden bg-white w-full">
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,82,26,0.05) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(122,139,31,0.05) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="relative max-w-360 mx-auto px-8 xl:px-16">

        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Chip>Our workflow automation services</Chip>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 sm:mb-14 leading-tight"
          style={{ color: '#1a1a1a', letterSpacing: '-0.03em' }}
        >
          How can we help?
        </motion.h2>

        <div className="flex flex-col md:flex-row md:gap-10 lg:gap-16">
          {/* Left column*/}
          <div className="hidden md:block md:w-5/12 lg:w-2/5 flex-shrink-0" />

          {/* Right accordion */}
          <div className="flex-1">
            <div className="flex flex-col">
              {services.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  index={index}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: '#1a1a1a' }}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                View all services
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight size={15} />
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowCanWeHelp

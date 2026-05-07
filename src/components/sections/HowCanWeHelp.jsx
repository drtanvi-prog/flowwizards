import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, Quote } from 'lucide-react'
import Badge from '../ui/Badge'
import { services } from '../../data/howCanWeHelpData'

const AccordionItem = ({ item, index, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="relative overflow-hidden rounded-xl cursor-pointer"
        style={{
          boxShadow: isOpen ? '0 8px 40px rgba(0,0,0,0.07), 0 2px 10px rgba(0,0,0,0.04)' : 'none',
          background: isOpen ? '#ffffff' : 'transparent',
        }}
        transition={{ duration: 0.3 }}
        onClick={onToggle}
      >
        {/* Left accent bar on open */}
        {isOpen && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1"
            style={{ background: `linear-gradient(180deg, ${item.gradientFrom}, ${item.gradientTo})` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        <div className="flex items-start gap-4 px-4 sm:px-6 py-5">

          <motion.div
            animate={{ scale: isOpen ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 mt-0.5"
          >
            <Quote
              size={36}
              fill={item.quoteColor}
              stroke="none"
              style={{ color: item.quoteColor }}
            />
          </motion.div>

          <div className="flex-1 min-w-0">
            <p
              className="text-base sm:text-lg font-semibold leading-snug"
              style={{ color: '#1a1a1a', letterSpacing: '-0.01em' }}
            >
              {item.text}
            </p>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0, y: -6 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: '#555555' }}>
                    {item.description}
                  </p>

                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="mt-4 mb-1"
                  >
                    <motion.span
                      whileHover={{ scale: 1.03, x: 3 }}
                      whileTap={{ scale: 0.97 }}
                      style={{ display: 'inline-block' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Badge
                        variant="orange"
                        style={{
                          background: item.ctaBg,
                          color: item.ctaColor,
                          borderColor: item.ctaBorder,
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          padding: '8px 18px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        {item.cta}
                        <ArrowRight size={13} />
                      </Badge>
                    </motion.span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex-shrink-0 mt-0.5"
          >
            <div
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center"
              style={{
                borderColor: isOpen ? item.quoteColor : '#cccccc',
                color: isOpen ? item.quoteColor : '#666666',
                transition: 'border-color 0.3s, color 0.3s',
              }}
            >
              <ChevronDown size={16} />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="h-px"
        style={{ background: '#e0e0e0' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      />
    </motion.div>
  )
}

const HowCanWeHelp = () => {
  const [openId, setOpenId] = useState(1)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-white">
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Badge variant="orange">Our workflow automation services</Badge>
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

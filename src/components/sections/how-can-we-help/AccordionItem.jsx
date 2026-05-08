import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, Quote } from 'lucide-react'
import Badge from '../../ui/Badge'

export const AccordionItem = ({ item, index, isOpen, onToggle }) => {
  const [ctaHovered, setCtaHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="relative overflow-hidden cursor-pointer"
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
                      onHoverStart={() => setCtaHovered(true)}
                      onHoverEnd={() => setCtaHovered(false)}
                    >
                      <Badge
                        variant="orange"
                        style={{
                          background: ctaHovered ? '#ff4f00' : item.ctaBg,
                          color: ctaHovered ? '#ffffff' : item.ctaColor,
                          borderColor: ctaHovered ? '#ff4f00' : item.ctaBorder,
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          padding: '8px 18px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
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

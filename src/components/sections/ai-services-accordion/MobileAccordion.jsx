import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { ITEMS } from '../../../data/aiServicesAccordionData'

const ease = [0.22, 1, 0.36, 1]

const MobileAccordion = ({ activeId, setActiveId }) => (
  <div className="lg:hidden flex flex-col gap-3">
    {ITEMS.map((item, i) => {
      const isOpen = activeId === item.id
      return (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.07, ease }}
          className="rounded-2xl overflow-hidden"
          style={{ border: `1.5px solid ${item.border}` }}
        >
          <button
            onClick={() => setActiveId(isOpen ? null : item.id)}
            className="w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer"
            style={{ background: isOpen ? item.bg : 'white' }}
          >
            <span
              className="text-[11px] font-black tracking-widest shrink-0"
              style={{ color: item.border }}
            >
              {item.num}
            </span>
            <span className="flex-1 text-[14px] font-semibold text-[#1A1A1A] leading-snug">
              {item.title}
            </span>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={18} color={item.border} />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.38, ease }}
                style={{ background: item.bg }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 pt-2 flex flex-col gap-4">
                  {item.intro && (
                    <p className="text-[13px] font-semibold text-[#2A2A2A] leading-relaxed m-0 pb-3 border-b border-black/10">
                      {item.intro}
                    </p>
                  )}
                  {item.services.map((s) => (
                    <div key={s.name} className="flex gap-3">
                      <div
                        className="w-1 rounded-full shrink-0 mt-1"
                        style={{ background: item.border, minHeight: 14 }}
                      />
                      <div>
                        <p className="text-[13px] font-bold text-[#1A1A1A] m-0 mb-0.5">{s.name}</p>
                        <p className="text-[12px] text-[#4A4A4A] leading-relaxed m-0">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )
    })}
  </div>
)

export default MobileAccordion

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ITEMS } from '../../../data/aiServicesAccordionData'

const ease = [0.22, 1, 0.36, 1]

const DesktopAccordion = ({ activeId, setActiveId }) => {
  const active = ITEMS.find(i => i.id === activeId)

  return (
    <div className="hidden lg:grid grid-cols-[360px_1fr] gap-6 xl:gap-10 items-start">

      {/* Left: Selector list */}
      <div className="flex flex-col gap-2 sticky top-24">
        {ITEMS.map((item, i) => {
          const isActive = activeId === item.id
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease }}
              className="group relative w-full text-left px-5 py-4 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden"
              style={{
                background: isActive ? item.bg : 'transparent',
                border: `1.5px solid ${isActive ? item.border : 'transparent'}`,
              }}
            >
              {!isActive && (
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: item.bg }}
                />
              )}

              <div className="relative flex items-center gap-4">
                <span
                  className="text-[11px] font-black tracking-widest shrink-0 transition-colors duration-200"
                  style={{ color: isActive ? item.border : '#bbb' }}
                >
                  {item.num}
                </span>
                <span
                  className="text-[14px] font-semibold leading-snug transition-colors duration-200 flex-1"
                  style={{ color: isActive ? '#1A1A1A' : '#555' }}
                >
                  {item.title}
                </span>
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <ArrowRight size={15} color={item.border} />
                </motion.div>
              </div>

              {isActive && (
                <p className="relative text-[12px] text-[#666] leading-relaxed mt-1.5 ml-[2.4rem]">
                  {item.subtitle}
                </p>
              )}
            </motion.button>
          )
        })}
      </div>

      {/* Right: Content panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.42, ease }}
          className="rounded-2xl p-8 xl:p-10"
          style={{ background: active.bg, border: `1.5px solid ${active.border}` }}
        >
          <div className="flex items-start gap-4 mb-6">
            <span
              className="text-[11px] font-black tracking-widest mt-1.5 shrink-0"
              style={{ color: active.border }}
            >
              {active.num}
            </span>
            <div>
              <h3 className="text-[1.25rem] xl:text-[1.5rem] font-extrabold text-[#1A1A1A] leading-snug m-0 mb-1">
                {active.title}
              </h3>
              <p className="text-[13px] text-[#666] m-0">{active.subtitle}</p>
            </div>
          </div>

          {active.intro && (
            <p className="text-[14px] font-semibold text-[#2A2A2A] leading-relaxed mb-6 pb-6 border-b border-black/10">
              {active.intro}
            </p>
          )}

          <div className="flex flex-col gap-5">
            {active.services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: i * 0.09, ease }}
                className="flex gap-4"
              >
                <div
                  className="w-1.5 rounded-full shrink-0 mt-1"
                  style={{ background: active.border, minHeight: 16 }}
                />
                <div>
                  <p className="text-[14px] font-bold text-[#1A1A1A] m-0 mb-1">{s.name}</p>
                  <p className="text-[13px] text-[#4A4A4A] leading-relaxed m-0">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default DesktopAccordion

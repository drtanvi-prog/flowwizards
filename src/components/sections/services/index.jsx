import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { serviceCategories } from '../../../data/servicesData'
import Tab, { ICONS } from './Tab'
import ExampleItem from './ExampleItem'
import WorkflowItem from './WorkflowItem'

const ease = [0.22, 1, 0.36, 1]

const ServicesSection = ({
  categories = serviceCategories,
  badge,
  heading,
  subheading,
  variant = 'dark',
}) => {
  const [activeId, setActiveId] = useState(categories[0].id)
  const active = categories.find(s => s.id === activeId) ?? categories[0]
  const Icon = active.icon ?? ICONS[active.id]
  const activeIndex = categories.findIndex(s => s.id === activeId)
  const watermarkNum = String(activeIndex + 1).padStart(2, '0')

  const isDark = variant === 'dark'

  const resolvedBadge = badge ?? 'What workflow automation consultants can do for you'
  const resolvedHeading = heading ?? "Which business process would you\nprefer not to think about?"
  const resolvedSubheading = subheading ?? "We'll put your business operations into a Flow state — automating them all so you barely have to lift a finger."

  return (
    <>
      <style>{`
        .svc-tabs::-webkit-scrollbar { height: 3px; }
        .svc-tabs::-webkit-scrollbar-track { background: rgba(255,255,255,0.06); border-radius: 100px; }
        .svc-tabs::-webkit-scrollbar-thumb { background: rgba(232,82,26,0.65); border-radius: 100px; }
      `}</style>

      <section
        className="w-full py-8 sm:py-20 lg:py-28 overflow-hidden relative"
        style={{ background: isDark ? '#0D0D0F' : '#fff' }}
      >

        {/* Ambient glow — dark only */}
        {isDark && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`glow-${activeId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 90% 55% at 50% 0%, ${active.color}14, transparent 65%)`,
              }}
            />
          </AnimatePresence>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-16 relative">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex justify-center"
          >
            <span
              className="inline-block rounded-lg font-poppins font-bold"
              style={{
                background: isDark ? 'rgba(232,82,26,0.15)' : '#FFF5F0',
                color: isDark ? '#E8521A' : '#ff4f00',
                border: isDark ? '1px solid rgba(232,82,26,0.35)' : '1px solid #ffd4b8',
                fontSize: 'clamp(0.6rem, 2.5vw, 0.875rem)',
                padding: 'clamp(4px, 1vw, 8px) clamp(8px, 2vw, 16px)',
              }}
            >
              {resolvedBadge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold leading-[1.12] mb-3 text-center"
            style={{
              letterSpacing: '-0.03em',
              color: isDark ? '#fff' : '#1A1A1A',
              whiteSpace: 'pre-line',
            }}
          >
            {resolvedHeading}
          </motion.h2>

          {/* Subheading */}
          {resolvedSubheading && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[14px] sm:text-[15px] lg:text-[16px] max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 text-center"
              style={{ color: isDark ? 'rgba(255,255,255,0.42)' : '#4A4A4A' }}
            >
              {resolvedSubheading}
            </motion.p>
          )}

          {/* Tab row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="svc-tabs flex gap-2 sm:gap-2.5 overflow-x-auto sm:flex-wrap mb-6 sm:mb-8 pb-2.5 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(232,82,26,0.65) rgba(255,255,255,0.06)' }}
          >
            {categories.map(s => (
              <Tab key={s.id} service={s} isActive={activeId === s.id} onClick={() => setActiveId(s.id)} variant={variant} />
            ))}
          </motion.div>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease }}
              className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] rounded-xl overflow-hidden"
              style={isDark
                ? {
                  border: `1px solid ${active.color}35`,
                  boxShadow: `0 0 80px ${active.color}12, 0 1px 0 ${active.color}20 inset`,
                }
                : {
                  border: '1px solid #e5e7eb',
                }
              }
            >
              {/* Left panel */}
              <div
                className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-8 relative overflow-hidden"
                style={isDark
                  ? { background: `linear-gradient(145deg, ${active.color}18 0%, rgba(255,255,255,0.02) 100%)` }
                  : { background: '#fff' }
                }
              >
                {isDark && (
                  <span
                    className="absolute -bottom-4 -right-2 font-black select-none pointer-events-none leading-none"
                    style={{ fontSize: 'clamp(5rem, 12vw, 10rem)', color: `${active.color}12`, letterSpacing: '-0.05em' }}
                  >
                    {watermarkNum}
                  </span>
                )}

                <div className="relative">
                  {isDark && Icon && (
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-5 sm:mb-7"
                      style={{ background: `${active.color}22`, border: `1px solid ${active.color}45` }}
                    >
                      <Icon size={20} color={active.color} strokeWidth={1.75} />
                    </div>
                  )}

                  <h3
                    className="font-extrabold leading-[1.15] mb-4"
                    style={{
                      fontSize: isDark ? 'clamp(1.25rem, 3.5vw, 2.1rem)' : 'clamp(1.4rem, 2.5vw, 2rem)',
                      letterSpacing: '-0.025em',
                      color: isDark ? '#fff' : '#1A1A1A',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {active.heading}
                  </h3>

                  <p
                    className="text-[13px] sm:text-[14px] leading-[1.85]"
                    style={{ color: isDark ? 'rgba(255,255,255,0.48)' : '#4A4A4A' }}
                  >
                    {active.description}
                  </p>
                </div>

                {isDark && !active.workflows && (
                  <div className="relative">
                    <motion.a
                      href="#"
                      className="text-sm font-semibold inline-flex items-center gap-1.5"
                      style={{ color: 'rgba(255,255,255,0.38)' }}
                      whileHover={{ color: 'rgba(255,255,255,0.75)' }}
                      transition={{ duration: 0.15 }}
                    >
                      Learn more <ArrowRight size={13} />
                    </motion.a>
                  </div>
                )}
              </div>

              {/* Right panel */}
              <div
                className="p-6 sm:p-8 lg:p-10"
                style={isDark
                  ? {
                    background: 'rgba(255,255,255,0.018)',
                    borderTop: `1px solid ${active.color}25`,
                    borderLeft: `1px solid ${active.color}20`,
                  }
                  : {
                    background: '#FFF8F5',
                    borderLeft: '1px solid #e5e7eb',
                  }
                }
              >
                {active.workflows ? (
                  <>
                    <div className="flex items-center gap-3 mb-2">
                      {isDark && <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${active.color}70, transparent)` }} />}
                      <p
                        className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] shrink-0"
                        style={{ color: isDark ? active.color : '#666' }}
                      >
                        Sample Workflows
                      </p>
                      {isDark && <div className="h-px flex-1" style={{ background: `linear-gradient(270deg, ${active.color}70, transparent)` }} />}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                      {active.workflows.map((wf, i) => (
                        <WorkflowItem key={wf.title} workflow={wf} index={i} variant={variant} />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${active.color}70, transparent)` }} />
                      <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] shrink-0" style={{ color: active.color }}>
                        Examples of what we can do
                      </p>
                      <div className="h-px flex-1" style={{ background: `linear-gradient(270deg, ${active.color}70, transparent)` }} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                      {(active.examples ?? []).map((ex, i) => (
                        <ExampleItem key={ex} text={ex} index={i} color={active.color} />
                      ))}
                    </div>
                  </>
                )}
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </>
  )
}

export default ServicesSection

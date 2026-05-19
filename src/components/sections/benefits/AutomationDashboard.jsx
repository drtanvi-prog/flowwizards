import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Database, Mail, Users, Star, CheckCheck } from 'lucide-react'

const STEPS = [
  { icon: Globe,    label: 'Lead Detected', sub: 'via web form'  },
  { icon: Database, label: 'CRM Record',    sub: 'auto-created'  },
  { icon: Mail,     label: 'Email Sent',    sub: 'personalised'  },
  { icon: Users,    label: 'Team Notified', sub: 'via Slack'     },
  { icon: Star,     label: 'Deal Opened',   sub: 'in pipeline'   },
]

const METRICS = [
  { value: '18 hrs', label: 'saved / week' },
  { value: '99%',    label: 'success rate' },
  { value: '2,400+', label: 'flows built'  },
]

export const AutomationDashboard = () => {
  const [active, setActive] = useState(0)
  const [done,   setDone]   = useState([])

  useEffect(() => {
    if (active < STEPS.length) {
      const t = setTimeout(() => {
        setDone(p => [...p, active])
        setActive(p => p + 1)
      }, 900)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => { setDone([]); setActive(0) }, 2200)
    return () => clearTimeout(t)
  }, [active])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl bg-white border border-[#EBEBEB] overflow-hidden"
      style={{ boxShadow: '0 2px 24px rgba(0,0,0,0.06)' }}
    >

      {/* ── Top bar ── */}
      <div
        className="flex items-center justify-between px-5 py-3.5 border-b border-[#F0F0F0]"
        style={{ background: '#FAFAFA' }}
      >
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"
          />
          <span className="text-[12px] font-semibold text-[#1A1A1A] tracking-tight">
            Workflow automation in action
          </span>
        </div>
        <span className="text-[11px] text-[#999] font-medium">5 steps · 0.3s avg</span>
      </div>

      {/* ── Steps ── */}
      <div className="px-5 py-6">
        <div className="flex items-start justify-between">
          {STEPS.map((step, i) => {
            const isDone    = done.includes(i)
            const isActive  = active === i
            const isPending = !isDone && !isActive

            return (
              <div key={step.label} className="flex-1 flex flex-col items-center relative">

                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div
                    className="absolute"
                    style={{ top: 16, left: '50%', right: '-50%', height: 1, zIndex: 0 }}
                  >
                    <div className="w-full h-full" style={{ background: '#EBEBEB' }} />
                    <motion.div
                      className="absolute inset-0 origin-left"
                      style={{ background: '#ff4f00' }}
                      animate={{ scaleX: isDone ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                )}

                {/* Icon circle */}
                <div className="relative z-10 mb-2.5">
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: '1.5px solid #ff4f00' }}
                      animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
                      transition={{ duration: 1.0, repeat: Infinity, ease: 'easeOut' }}
                    />
                  )}
                  <motion.div
                    animate={{
                      background: isDone ? '#ff4f00' : isActive ? '#FFF1EB' : '#F5F5F5',
                      borderColor: isDone ? '#ff4f00' : isActive ? '#ff4f00' : '#E5E5E5',
                    }}
                    transition={{ duration: 0.35 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center border"
                    style={{ opacity: isPending ? 0.38 : 1 }}
                  >
                    <AnimatePresence mode="wait">
                      {isDone ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 24 }}
                        >
                          <CheckCheck size={13} color="#fff" strokeWidth={2.5} />
                        </motion.div>
                      ) : (
                        <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <step.icon
                            size={13}
                            color={isActive ? '#ff4f00' : '#ADADAD'}
                            strokeWidth={1.8}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Labels */}
                <motion.p
                  animate={{ opacity: isPending ? 0.3 : 1 }}
                  className="text-[10px] sm:text-[11px] font-semibold text-[#1A1A1A] text-center leading-tight"
                >
                  {step.label}
                </motion.p>
                <motion.p
                  animate={{ opacity: isPending ? 0.3 : 1 }}
                  className="text-[9px] sm:text-[10px] text-[#999] text-center mt-0.5 leading-tight"
                >
                  {step.sub}
                </motion.p>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Metrics row ── */}
      <div
        className="flex items-center divide-x divide-[#F0F0F0] border-t border-[#F0F0F0]"
        style={{ background: '#FAFAFA' }}
      >
        {METRICS.map(({ value, label }) => (
          <div key={label} className="flex-1 flex flex-col items-center py-3.5 gap-0.5">
            <span className="text-[13px] sm:text-[14px] font-extrabold text-[#1A1A1A] tracking-tight">
              {value}
            </span>
            <span className="text-[10px] text-[#999] font-medium">{label}</span>
          </div>
        ))}
      </div>

    </motion.div>
  )
}

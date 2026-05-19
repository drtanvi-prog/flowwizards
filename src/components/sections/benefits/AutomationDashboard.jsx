import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Globe, Database, Mail, Users, Star, Clock, TrendingUp, Zap, CheckCheck } from 'lucide-react'
import CountUp from './CountUp'

const STEPS = [
  { icon: Globe,    label: 'Lead Detected', color: '#ff4f00', glow: 'rgba(255,79,0,0.18)'   },
  { icon: Database, label: 'CRM Created',   color: '#4F6BFF', glow: 'rgba(79,107,255,0.18)' },
  { icon: Mail,     label: 'Email Sent',    color: '#22C55E', glow: 'rgba(34,197,94,0.18)'  },
  { icon: Users,    label: 'Team Notified', color: '#A855F7', glow: 'rgba(168,85,247,0.18)' },
  { icon: Star,     label: 'Deal Opened',   color: '#F59E0B', glow: 'rgba(245,158,11,0.18)' },
]

const METRICS = [
  { icon: Clock,      end: 18,   suffix: ' hrs', label: 'saved per week',  color: '#ff4f00', bg: '#FFF5F0' },
  { icon: TrendingUp, end: 99,   suffix: '%',    label: 'success rate',    color: '#22C55E', bg: '#F0FDF4' },
  { icon: Zap,        end: 2400, suffix: '+',    label: 'flows automated', color: '#4F6BFF', bg: '#EEF2FF' },
]

export const AutomationDashboard = () => {
  const [active, setActive] = useState(0)
  const [done,   setDone]   = useState([])

  useEffect(() => {
    if (active < STEPS.length) {
      const t = setTimeout(() => {
        setDone(p => [...p, active])
        setActive(p => p + 1)
      }, 1000)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => { setDone([]); setActive(0) }, 2400)
    return () => clearTimeout(t)
  }, [active])

  const currentStep  = STEPS[Math.min(active, STEPS.length - 1)]
  const fillPct      = done.length === 0 ? 0 : (done.length / (STEPS.length - 1)) * 100
  const dotLeftPct   = Math.min(active, STEPS.length - 1) / (STEPS.length - 1) * 100

  return (
    <div className="relative">

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,79,0,0.06) 0%, transparent 70%)', filter: 'blur(55px)' }} />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,107,255,0.06) 0%, transparent 70%)', filter: 'blur(45px)' }} />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >

        {/* ── Header ── */}
        <div className="flex items-center justify-between pt-2 pb-6">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: '#F0FDF4' }}>
              <motion.span
                animate={{ opacity: [1, 0.25, 1] }}
                transition={{ duration: 1.3, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"
              />
              <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Live</span>
            </div>
            <span className="text-[14px] font-semibold text-[#1A1A1A]">
              Workflow automation in action
            </span>
          </div>
          <div className="hidden sm:flex px-3 py-1.5 rounded-full text-[11px] font-semibold"
            style={{ background: '#FFF5F0', color: '#ff4f00', border: '1px solid rgba(255,79,0,0.15)' }}>
            5 steps · 0.3s avg
          </div>
        </div>

        {/* ── Horizontal flow ── */}
        <div className="pb-6">
          <div className="relative flex justify-between items-start">

            {/* ── Connector line (sits at vertical centre of icons) ── */}
            <div
              className="absolute"
              style={{ top: 20, left: '9%', right: '9%', height: 2, zIndex: 0 }}
            >
              {/* Track */}
              <div className="w-full h-full rounded-full" style={{ background: '#F0EDE8' }} />

              {/* Fill */}
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${STEPS[0].color}, ${currentStep.color})`,
                  transformOrigin: 'left center',
                }}
                animate={{ scaleX: fillPct / 100 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              />

              {/* Glowing travelling dot */}
              {active < STEPS.length && (
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                  style={{
                    background: currentStep.color,
                    boxShadow: `0 0 10px ${currentStep.color}, 0 0 22px ${currentStep.glow}`,
                    marginLeft: -6,
                  }}
                  animate={{ left: `${dotLeftPct}%` }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </div>

            {/* ── Step nodes ── */}
            {STEPS.map((step, i) => {
              const isDone    = done.includes(i)
              const isActive  = active === i
              const isPending = !isDone && !isActive

              return (
                <motion.div
                  key={step.label}
                  className="relative z-10 flex flex-col items-center gap-2"
                  style={{ width: '20%' }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Icon bubble */}
                  <div className="relative">
                    {/* Pulse ring */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-xl sm:rounded-2xl"
                        style={{ border: `2px solid ${step.color}` }}
                        animate={{ scale: [1, 1.75], opacity: [0.65, 0] }}
                        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeOut' }}
                      />
                    )}

                    <motion.div
                      animate={{
                        background: isDone
                          ? step.color
                          : isActive
                          ? step.glow
                          : '#F5F5F5',
                        boxShadow: isDone
                          ? `0 4px 16px ${step.glow}`
                          : isActive
                          ? `0 0 22px ${step.glow}`
                          : 'none',
                        opacity: isPending ? 0.4 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                      className="w-10 h-10 rounded-xl sm:rounded-2xl flex items-center justify-center"
                    >
                      {isDone ? (
                        <motion.div
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: 'spring', stiffness: 480, damping: 22 }}
                        >
                          <CheckCheck size={17} color="#fff" strokeWidth={2.5} />
                        </motion.div>
                      ) : (
                        <step.icon
                          size={17}
                          color={isActive ? step.color : '#C0C0C0'}
                          strokeWidth={1.75}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Label */}
                  <motion.p
                    animate={{
                      opacity: isPending ? 0.32 : 1,
                      color: isDone ? step.color : '#1A1A1A',
                    }}
                    transition={{ duration: 0.35 }}
                    className="text-[9px] sm:text-[11px] font-semibold text-center leading-tight"
                    style={{ maxWidth: 68 }}
                  >
                    {step.label}
                  </motion.p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ── Metric badges ── */}
        <div
          className="flex flex-wrap gap-2.5 pt-5 pb-2"
          style={{ borderTop: '1px solid rgba(0,0,0,0.06)', marginTop: 8 }}
        >
          {METRICS.map(({ icon: Icon, end, suffix, label, color, bg }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: bg, border: `1px solid ${color}22` }}
            >
              <Icon size={12} color={color} strokeWidth={2.5} />
              <span className="text-[12px] font-extrabold" style={{ color, letterSpacing: '-0.02em' }}>
                <CountUp end={end} duration={2} formattingFn={v => `${Math.round(v)}${suffix}`} />
              </span>
              <span className="text-[11px] font-medium" style={{ color: `${color}99` }}>
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

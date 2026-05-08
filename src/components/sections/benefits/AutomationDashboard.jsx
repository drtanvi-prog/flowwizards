import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Mail, CalendarCheck, Database, Send, Bell,
} from 'lucide-react'
import { GearLogo } from './GearLogo'
import CountUp from './CountUp'

const STEPS = [
  { Icon: Mail, label: 'Lead captured from website', color: '#4F6BFF', bg: '#EEF2FF' },
  { Icon: CheckCircle2, label: 'Lead qualified & scored', color: '#22C55E', bg: '#F0FDF4' },
  { Icon: Send, label: 'Welcome email sent', color: '#ff4f00', bg: '#FFF5F0' },
  { Icon: Database, label: 'CRM contact created', color: '#A855F7', bg: '#FAF5FF' },
  { Icon: CalendarCheck, label: 'Discovery call scheduled', color: '#14B8A6', bg: '#F0FDFA' },
  { Icon: Bell, label: 'Sales team notified', color: '#F59E0B', bg: '#FFFBEB' },
]

export const STEP_MS = 700 // ms per step

/* ── Live automation feed card ── */
export const AutomationDashboard = () => {
  const [current, setCurrent] = useState(0)
  const [done, setDone] = useState([])

  useEffect(() => {
    if (current < STEPS.length) {
      const t = setTimeout(() => {
        setDone(prev => [...prev, current])
        setCurrent(prev => prev + 1)
      }, STEP_MS)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => { setDone([]); setCurrent(0) }, 1000)
      return () => clearTimeout(t)
    }
  }, [current])

  const completedCount = done.length
  const progressPct = Math.round((completedCount / STEPS.length) * 100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-full sm:max-w-sm rounded-2xl p-6 bg-white"
      style={{ boxShadow: '0 8px 48px rgba(255,79,0,0.10), 0 2px 12px rgba(0,0,0,0.06)', border: '1.5px solid #FFE8D0' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <GearLogo />
          <div>
            <p className="text-xs sm:text-sm font-bold text-[#111] leading-none whitespace-nowrap">Live Automation</p>
            <p className="text-[9px] sm:text-[10px] text-[#999] mt-0.5 whitespace-nowrap">Flow Wizard Engine</p>
          </div>
        </div>
        <span
          className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-sm font-semibold whitespace-nowrap"
          style={{ background: '#F0FDF4', color: '#16A34A' }}
        >
          <motion.span
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"
          />
          Running
        </span>
      </div>

      {/* Overall progress bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-semibold text-[#AAA] uppercase tracking-wide">Progress</span>
          <span className="text-[10px] font-bold" style={{ color: '#ff4f00' }}>{progressPct}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-[#F0EDE8] overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #ff4f00, #FC6E32)' }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-2">
        {STEPS.map((s, i) => {
          const isDone = done.includes(i)
          const isActive = i === current && current < STEPS.length
          const isPending = !isDone && !isActive
          return (
            <div
              key={i}
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl overflow-hidden"
              style={{
                background: isActive ? s.bg : isDone ? '#FAFAFA' : '#F5F5F5',
                transition: 'background 0.25s ease',
              }}
            >
              {/* Step fill progress bar (runs for STEP_MS on active) */}
              {isActive && (
                <motion.div
                  key={`bar-${i}`}
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{ background: s.color, opacity: 0.08, transformOrigin: 'left center' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: STEP_MS / 1000, ease: 'linear' }}
                />
              )}

              {/* Icon */}
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: isActive || isDone ? s.bg : '#EEEEEE',
                  transition: 'background 0.25s ease',
                }}
              >
                <s.Icon size={13} color={isActive || isDone ? s.color : '#BDBDBD'} strokeWidth={2} />
              </div>

              {/* Label */}
              <span
                className="text-xs font-medium flex-1"
                style={{ color: isPending ? '#BDBDBD' : '#222', transition: 'color 0.25s ease' }}
              >
                {s.label}
              </span>

              {/* Status */}
              <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                {isDone && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                  >
                    <CheckCircle2 size={16} color="#22C55E" strokeWidth={2.5} />
                  </motion.div>
                )}
                {isActive && (
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 border-t-transparent"
                    style={{ borderColor: s.color, borderTopColor: 'transparent' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                  />
                )}
                {isPending && <div className="w-1.5 h-1.5 rounded-full bg-[#E0E0E0]" />}
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer stats */}
      <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
        {[
          { end: 1247, label: 'Tasks / day', color: '#111', formattingFn: v => v.toLocaleString() },
          { end: 99, label: 'Success rate', color: '#22C55E', formattingFn: v => `${v}%` },
          { end: -80, label: 'Time saved', color: '#ff4f00', formattingFn: v => `${v}%` },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-base font-extrabold" style={{ color: stat.color, letterSpacing: '-0.02em' }}>
              <CountUp end={stat.end} duration={1.8} formattingFn={stat.formattingFn} />
            </p>
            <p className="text-[9px] font-semibold text-[#AAA] uppercase tracking-wide mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

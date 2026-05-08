import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { reasons } from '../../../data/whyChooseUsData'
import Chip from '../../ui/Chip'

import anim1 from '../../../assets/lottie/anim1.lottie?url'
import anim2 from '../../../assets/lottie/anim2.lottie?url'
import anim3 from '../../../assets/lottie/anim3.lottie?url'
import anim4 from '../../../assets/lottie/anim4.lottie?url'

const ANIMS = { 1: anim1, 2: anim2, 3: anim3, 4: anim4 }
const ease = [0.22, 1, 0.36, 1]

const WhyChooseUs = () => {
  const [activeId, setActiveId] = useState(1)
  const active = reasons.find(r => r.id === activeId)

  return (
    <section
      className="relative w-full overflow-hidden py-24 sm:py-32"
      style={{ background: '#F8F7F5' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Animated color glow */}
      <AnimatePresence>
        <motion.div
          key={`glow-${activeId}`}
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            background: `radial-gradient(ellipse 55% 65% at 72% 50%, ${active.color}12, transparent 70%)`,
          }}
        />
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-6 xl:px-16">

        {/* ── Header ── */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex justify-center sm:justify-start"
          >
            <Chip>Why choose Flow Digital as your workflow consultants</Chip>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-extrabold leading-[1.08]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', letterSpacing: '-0.035em', color: '#1a1a1a' }}
          >
            We turn messy manual tasks{' '}
            <motion.span
              animate={{ color: active.color }}
              transition={{ duration: 0.5 }}
              style={{ display: 'inline-block' }}
            >
              into flow
            </motion.span>
          </motion.h2>
        </div>

        {/* ── Main layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-5 xl:gap-8 items-start">

          {/* Left selector list */}
          <div className="relative">
            {/* Vertical connector line */}
            <div
              className="absolute left-8 top-7 bottom-7 w-px hidden lg:block"
              style={{ background: 'rgba(0,0,0,0.08)' }}
            />

            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-1 lg:pb-0 -mx-1 px-1">
              {reasons.map((r, index) => {
                const isActive = activeId === r.id
                return (
                  <motion.button
                    key={r.id}
                    onClick={() => setActiveId(r.id)}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="relative flex items-center gap-3 px-3 py-3.5 rounded-md text-left shrink-0 lg:w-full"
                    style={{
                      background: isActive ? '#fff' : 'transparent',
                      border: `1px solid ${isActive ? r.color + '38' : 'transparent'}`,
                      boxShadow: isActive ? `0 4px 20px rgba(0,0,0,0.06)` : 'none',
                      transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
                    }}
                  >
                    {/* Numbered dot */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-black text-[11px] shrink-0 relative z-10"
                      style={{
                        background: isActive ? r.color : '#E8E8E5',
                        color: isActive ? '#fff' : 'rgba(0,0,0,0.25)',
                        boxShadow: isActive ? `0 0 22px ${r.color}50` : 'none',
                        transition: 'background 0.3s, box-shadow 0.3s, color 0.3s',
                      }}
                    >
                      {String(r.id).padStart(2, '0')}
                    </div>

                    {/* Label */}
                    <p
                      className="text-[12px] font-semibold leading-snug hidden lg:block flex-1"
                      style={{
                        color: isActive ? '#1a1a1a' : 'rgba(0,0,0,0.28)',
                        transition: 'color 0.3s',
                      }}
                    >
                      {r.title}
                    </p>

                    {/* Arrow */}
                    {isActive && (
                      <motion.div
                        layoutId="sel-arrow"
                        className="hidden lg:block shrink-0"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      >
                        <ChevronRight size={13} style={{ color: r.color }} />
                      </motion.div>
                    )}
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Right glass panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.985 }}
              transition={{ duration: 0.38, ease }}
              className="rounded-md overflow-hidden"
              style={{
                background: '#ffffff',
                border: `1px solid ${active.color}28`,
                boxShadow: `0 0 0 1px ${active.color}15, 0 32px 80px ${active.color}10, 0 4px 20px rgba(0,0,0,0.05)`,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr]">

                {/* Lottie stage */}
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{
                    minHeight: '340px',
                    background: `linear-gradient(140deg, ${active.color}10 0%, ${active.color}04 100%)`,
                    borderRight: `1px solid ${active.color}15`,
                    borderBottom: `1px solid ${active.color}15`,
                  }}
                >
                  {/* Inner dot grid */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(rgba(0,0,0,0.055) 1px, transparent 1px)`,
                      backgroundSize: '22px 22px',
                    }}
                  />

                  {/* Glow orb */}
                  <div
                    className="absolute w-64 h-64 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${active.color}20, transparent 65%)` }}
                  />

                  {/* Watermark */}
                  <span
                    className="absolute bottom-3 left-5 font-black leading-none select-none pointer-events-none"
                    style={{ fontSize: '7.5rem', color: `${active.color}10`, letterSpacing: '-0.05em' }}
                  >
                    {String(active.id).padStart(2, '0')}
                  </span>

                  <DotLottieReact
                    src={ANIMS[activeId]}
                    loop
                    autoplay
                    style={{ width: 290, height: 290, position: 'relative', zIndex: 1 }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-7 sm:p-10">

                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-2 mb-6 self-start px-3 py-1.5 rounded-md"
                    style={{
                      background: `${active.color}12`,
                      border: `1px solid ${active.color}30`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: active.color }} />
                    <span
                      className="text-[9px] font-extrabold uppercase tracking-[0.2em]"
                      style={{ color: active.color }}
                    >
                      {String(active.id).padStart(2, '0')} / {String(reasons.length).padStart(2, '0')}
                    </span>
                  </div>

                  <h3
                    className="font-extrabold text-[#1a1a1a] leading-[1.22] mb-4"
                    style={{ fontSize: 'clamp(1.2rem, 2.1vw, 1.65rem)', letterSpacing: '-0.022em' }}
                  >
                    {active.title}
                  </h3>

                  <div className="w-8 h-0.5 rounded-full mb-5" style={{ background: active.color }} />

                  <p
                    className="text-[13px] sm:text-[14px] leading-[1.9] mb-8"
                    style={{ color: '#777' }}
                  >
                    {active.description}
                  </p>

                  {/* Pill dots */}
                  <div className="flex items-center gap-2">
                    {reasons.map(r => (
                      <button
                        key={r.id}
                        onClick={() => setActiveId(r.id)}
                        className="rounded-full"
                        style={{
                          width: activeId === r.id ? '22px' : '6px',
                          height: '6px',
                          background: activeId === r.id ? active.color : 'rgba(0,0,0,0.12)',
                          transition: 'width 0.3s ease, background 0.3s ease',
                        }}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
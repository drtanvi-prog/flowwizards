import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { caseStudies } from '../../../data/caseStudiesData'
import Chip from '@/components/ui/Chip'
import CaseStudyCard from './CaseStudyCard'

const SCALES = [1, 0.84, 0.70]
const OPACITIES = [1, 0.48, 0.22]
const BLURS = [0, 1, 2.5]

const CaseStudies = () => {
  const [active, setActive] = useState(1)
  const [entered, setEntered] = useState(false)
  const [dims, setDims] = useState({ cardW: 380, cardH: 420, offset: 290 })
  const sectionRef = useRef(null)

  /* Detect viewport to drive responsive card size + fan offset */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      setDims({
        cardW: w < 640 ? Math.min(340, w - 48) : 380,
        cardH: w < 640 ? 400 : 420,
        offset: w < 640 ? 148 : w < 1024 ? 235 : 290,
      })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  /* Entrance trigger — cards spread from center on scroll into view */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setEntered(true), 180) },
      { threshold: 0.25 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const prev = () => setActive(i => Math.max(0, i - 1))
  const next = () => setActive(i => Math.min(caseStudies.length - 1, i + 1))

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -70) next()
    else if (info.offset.x > 70) prev()
  }

  const { cardW, cardH, offset } = dims
  const containerH = cardH + 48

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 sm:py-32"
      style={{ background: '#ffffff' }}
    >

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '5%', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(232,92,65,0.07) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-6 xl:px-16 text-center mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex justify-center"
        >
          <Chip>"Genius" automation consultants</Chip>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-extrabold"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            letterSpacing: '-0.035em',
            color: '#1a1a1a',
          }}
        >
          Case studies
        </motion.h2>
      </div>

      {/* Fan carousel */}
      <div className="relative" style={{ height: containerH + 72 }}>

        {/* Drag capture layer */}
        <motion.div
          className="absolute inset-x-0 z-30"
          style={{ top: 0, height: containerH, cursor: 'grab' }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.05}
          whileTap={{ cursor: 'grabbing' }}
          onDragEnd={handleDragEnd}
        />

        {/* Cards */}
        {caseStudies.map((study, index) => {
          const distance = index - active
          const abs = Math.abs(distance)
          if (abs > 2) return null

          const dir = distance > 0 ? 1 : -1
          const xFromCenter = abs === 0 ? 0 : dir * ([0, offset, offset * 1.83][abs])

          return (
            <motion.div
              key={study.id}
              onClick={() => abs > 0 && setActive(index)}
              style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                width: cardW,
                height: cardH,
                zIndex: 10 - abs,
                cursor: abs > 0 ? 'pointer' : 'default',
                originX: 0.5,
                originY: 0.5,
              }}
              initial={{ x: -cardW / 2, opacity: 0, scale: 1 }}
              animate={{
                x: -cardW / 2 + xFromCenter,
                scale: SCALES[abs],
                opacity: entered ? OPACITIES[abs] : 0,
                filter: `blur(${BLURS[abs]}px)`,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 32,
                delay: entered ? abs * 0.07 : 0,
              }}
            >
              <CaseStudyCard study={study} isActive={abs === 0} />
            </motion.div>
          )
        })}

        {/* Nav row: arrow + dots + arrow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4 z-40"
          style={{ top: containerH + 20 }}
        >
          {/* Prev */}
          <motion.button
            onClick={prev}
            disabled={active === 0}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="flex items-center justify-center rounded-full"
            style={{
              width: 40, height: 40,
              background: active === 0 ? 'rgba(0,0,0,0.06)' : '#fff',
              border: `1px solid ${active === 0 ? 'transparent' : 'rgba(0,0,0,0.1)'}`,
              boxShadow: active === 0 ? 'none' : '0 2px 10px rgba(0,0,0,0.08)',
              color: active === 0 ? '#ccc' : '#1a1a1a',
              cursor: active === 0 ? 'not-allowed' : 'pointer',
            }}
          >
            <ChevronLeft size={18} />
          </motion.button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: active === i ? 22 : 6,
                  height: 6,
                  borderRadius: 9999,
                  background: active === i ? '#E85C41' : 'rgba(0,0,0,0.15)',
                  transition: 'width 0.3s ease, background 0.3s ease',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>

          {/* Next */}
          <motion.button
            onClick={next}
            disabled={active === caseStudies.length - 1}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="flex items-center justify-center rounded-full"
            style={{
              width: 40, height: 40,
              background: active === caseStudies.length - 1 ? 'rgba(0,0,0,0.06)' : '#fff',
              border: `1px solid ${active === caseStudies.length - 1 ? 'transparent' : 'rgba(0,0,0,0.1)'}`,
              boxShadow: active === caseStudies.length - 1 ? 'none' : '0 2px 10px rgba(0,0,0,0.08)',
              color: active === caseStudies.length - 1 ? '#ccc' : '#1a1a1a',
              cursor: active === caseStudies.length - 1 ? 'not-allowed' : 'pointer',
            }}
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

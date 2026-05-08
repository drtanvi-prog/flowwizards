import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'
import TestimonialCard from './TestimonialCard'
import EdgeOverlay from './EdgeOverlay'

const MarqueeRow = ({ items, direction, speed = 0.45 }) => {
  const trackRef = useRef(null)
  const isDragging = useRef(false)
  const halfW = useRef(0)
  const x = useMotionValue(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const compute = () => {
      if (!trackRef.current) return
      const w = trackRef.current.offsetWidth / 2
      halfW.current = w
      if (direction === 'right') x.set(-w)
      setIsMobile(window.innerWidth < 640)
    }
    const t = setTimeout(compute, 60)
    window.addEventListener('resize', compute)
    return () => { clearTimeout(t); window.removeEventListener('resize', compute) }
  }, [direction, x])

  useAnimationFrame(() => {
    if (isDragging.current || halfW.current === 0) return
    let cur = x.get()
    if (direction === 'left') {
      cur -= speed
      if (cur < -halfW.current) cur = 0
    } else {
      cur += speed
      if (cur > 0) cur = -halfW.current
    }
    x.set(cur)
  })

  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden w-full">
      <EdgeOverlay side="left" />
      <EdgeOverlay side="right" />
      <motion.div
        ref={trackRef}
        className="t-track flex gap-4"
        style={{ x, width: 'max-content' }}
        drag={isMobile ? false : 'x'}
        dragMomentum={false}
        onDragStart={() => { isDragging.current = true }}
        onDragEnd={() => {
          isDragging.current = false
          const w = halfW.current
          if (w > 0) {
            let v = x.get() % w
            if (v > 0) v -= w
            x.set(v)
          }
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} />
        ))}
      </motion.div>
    </div>
  )
}

export default MarqueeRow

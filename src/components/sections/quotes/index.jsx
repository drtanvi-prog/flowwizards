import { useRef, useCallback, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { QUOTES } from '../../../data/quotesData'
import Chip from '@/components/ui/Chip'

/* ── per-card position + style config ─────────────────────────── */
const CARD_CONFIG = [
  { left: '2%',  top: '6%',  rotate: -3,   floatDur: 5.2, floatAmp: 10, accentColor: '#E85C41' },
  { left: '30%', top: '2%',  rotate:  2,   floatDur: 6.8, floatAmp:  8, accentColor: '#6b9f3a' },
  { left: '62%', top: '8%',  rotate: -1.5, floatDur: 5.8, floatAmp: 12, accentColor: '#f59e0b' },
  { left: '8%',  top: '54%', rotate:  2.5, floatDur: 7.1, floatAmp:  9, accentColor: '#6366f1' },
  { left: '38%', top: '56%', rotate: -2.5, floatDur: 6.0, floatAmp: 11, accentColor: '#ec4899' },
  { left: '68%', top: '50%', rotate:  1.5, floatDur: 5.5, floatAmp:  8, accentColor: '#14b8a6' },
]

/* ── single floating card ────────────────────────────────────── */
const FloatingCard = ({ q, config, index, containerRef }) => {
  const cardRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 140, damping: 18 })
  const sy = useSpring(my, { stiffness: 140, damping: 18 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      const card = cardRef.current
      if (!card) return
      const cr = card.getBoundingClientRect()
      const cardCX = cr.left + cr.width  / 2
      const cardCY = cr.top  + cr.height / 2
      const dx = e.clientX - cardCX
      const dy = e.clientY - cardCY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const radius = 280
      if (dist < radius) {
        const strength = ((1 - dist / radius) ** 1.5) * 28
        mx.set((dx / dist) * strength)
        my.set((dy / dist) * strength)
      } else {
        mx.set(0)
        my.set(0)
      }
    }

    const handleMouseLeave = () => { mx.set(0); my.set(0) }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mx, my, containerRef])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.82, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'absolute',
        left: config.left,
        top:  config.top,
        x: sx,
        y: sy,
        rotate: config.rotate,
        zIndex: 1,
        width: 'clamp(220px, 22vw, 290px)',
        animation: `float-${index} ${config.floatDur}s ease-in-out infinite`,
      }}
      whileHover={{
        rotate: 0,
        scale: 1.06,
        zIndex: 20,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <div
        style={{
          background: '#fff',
          border: '1px solid #e8e8e8',
          borderRadius: '18px',
          overflow: 'hidden',
          boxShadow: '0 8px 30px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.05)',
          transition: 'box-shadow 0.3s ease',
          cursor: 'default',
        }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.15), 0 6px 16px rgba(0,0,0,0.08)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.05)' }}
      >
        {/* Accent top bar */}
        <div style={{ height: '3px', background: config.accentColor }} />

        <div style={{ padding: '1.25rem 1.4rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', position: 'relative' }}>

          {/* Ghost quote mark */}
          <span style={{
            position: 'absolute',
            top: '0.25rem',
            right: '0.9rem',
            fontSize: '4.5rem',
            lineHeight: 1,
            color: config.accentColor,
            opacity: 0.07,
            fontFamily: 'Georgia, serif',
            fontWeight: 900,
            userSelect: 'none',
            pointerEvents: 'none',
          }}>
            "
          </span>

          <p style={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#18181b',
            lineHeight: 1.6,
            position: 'relative',
            zIndex: 1,
            margin: 0,
          }}>
            "{q.text}"
          </p>

          {(q.body || q.author) && (
            <p style={{
              fontSize: '0.775rem',
              fontWeight: 400,
              color: '#6b7280',
              lineHeight: 1.65,
              position: 'relative',
              zIndex: 1,
              margin: 0,
              paddingTop: '0.6rem',
              borderTop: '1px solid #f0f0f0',
            }}>
              {q.body || q.author}
            </p>
          )}

          {/* <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            paddingTop: '0.75rem',
            borderTop: '1px solid #f3f4f6',
          }}>
            <div style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${config.accentColor}, ${config.accentColor}88)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 700,
              color: '#fff',
              flexShrink: 0,
            }}>
              {(q.author || 'A').charAt(0)}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#18181b', lineHeight: 1.3 }}>
                {q.author || 'Anonymous'}
              </div>
              {q.company && (
                <div style={{ fontSize: '10px', color: '#9ca3af' }}>{q.company}</div>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Section ─────────────────────────────────────────────────── */
const PremiumQuoteStack = ({
  quotes = QUOTES,
  badge,
  heading,
  subheading,
  ctaHeading,
  ctaLabel,
  ctaHref = '#',
  containerClass = 'max-w-360 px-5 sm:px-8 xl:px-16',
}) => {
  const containerRef = useRef(null)
  const cards = quotes.slice(0, CARD_CONFIG.length)

  return (
    <section style={{ background: '#fafaf9', overflow: 'hidden', paddingTop: 'clamp(4rem, 7vw, 6rem)', paddingBottom: 'clamp(4rem, 7vw, 6rem)' }}>
      <div className={`${containerClass} mx-auto`}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)' }}
        >
          {badge && <div style={{ marginBottom: '1rem' }}><Chip>{badge}</Chip></div>}

          {heading ? (
            <h2
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, color: '#18181b', letterSpacing: '-0.03em', lineHeight: 1.15 }}
              dangerouslySetInnerHTML={{ __html: heading }}
            />
          ) : (
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, color: '#18181b', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              What we hear{' '}
              <span style={{ color: '#E85C41', position: 'relative', display: 'inline-block' }}>
                every day
                <svg viewBox="0 0 160 10" fill="none" style={{ position: 'absolute', bottom: '-5px', left: 0, width: '100%', height: '7px' }}>
                  <path d="M2 7 C40 2, 90 8, 158 4" stroke="#E85C41" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
                </svg>
              </span>
            </h2>
          )}

          <p style={{ color: '#6b7280', marginTop: '0.875rem', fontSize: '1rem', maxWidth: '460px', margin: '0.875rem auto 0' }}>
            {subheading || 'Real words from business owners who came to us frustrated.'}
          </p>
        </motion.div>

        {/* Desktop floating canvas — 1280px+ */}
        <div
          ref={containerRef}
          className="magnetic-canvas"
          style={{ position: 'relative', height: 'clamp(600px, 68vw, 780px)', width: '100%' }}
        >
          {cards.map((q, i) => (
            <FloatingCard key={i} q={q} config={CARD_CONFIG[i]} index={i} containerRef={containerRef} />
          ))}
        </div>

        {/* Tablet grid — 640px–1279px */}
        <div className="tablet-quotes" style={{ display: 'none', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
          {cards.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#fff',
                border: '1px solid #e8e8e8',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
              }}
            >
              <div style={{ height: '3px', background: CARD_CONFIG[i].accentColor }} />
              <div style={{ padding: '1.4rem 1.6rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#18181b', lineHeight: 1.5, margin: 0 }}>"{q.text}"</p>
                {(q.body || q.author) && (
                  <p style={{ fontSize: '0.825rem', color: '#6b7280', lineHeight: 1.65, margin: 0, paddingTop: '0.65rem', borderTop: '1px solid #f0f0f0' }}>
                    {q.body || q.author}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile stack — below 640px */}
        <div className="mobile-quotes" style={{ display: 'none', flexDirection: 'column', gap: '1rem' }}>
          {cards.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#fff',
                border: '1px solid #e8e8e8',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ height: '3px', background: CARD_CONFIG[i].accentColor }} />
              <div style={{ padding: '1.25rem 1.4rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#18181b', lineHeight: 1.55, margin: 0 }}>"{q.text}"</p>
                {(q.body || q.author) && (
                  <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.6, margin: 0, paddingTop: '0.6rem', borderTop: '1px solid #f0f0f0' }}>
                    {q.body || q.author}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {ctaHeading && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ marginTop: '2rem', textAlign: 'center' }}
          >
            <p style={{ fontWeight: 700, color: '#18181b', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', marginBottom: '1rem' }}>{ctaHeading}</p>
            <a href={ctaHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 600, color: '#E85C41', textDecoration: 'none' }}>
              {ctaLabel}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>

      <style>{`
        @keyframes float-0 { 0%,100%{transform:translateY(0px) rotate(-3deg)}   50%{transform:translateY(-10px) rotate(-2deg)} }
        @keyframes float-1 { 0%,100%{transform:translateY(0px) rotate(2deg)}    50%{transform:translateY(-8px)  rotate(1.2deg)} }
        @keyframes float-2 { 0%,100%{transform:translateY(0px) rotate(-1.5deg)} 50%{transform:translateY(-12px) rotate(-0.8deg)} }
        @keyframes float-3 { 0%,100%{transform:translateY(0px) rotate(2.5deg)}  50%{transform:translateY(-9px)  rotate(1.8deg)} }
        @keyframes float-4 { 0%,100%{transform:translateY(0px) rotate(-2.5deg)} 50%{transform:translateY(-11px) rotate(-1.5deg)} }
        @keyframes float-5 { 0%,100%{transform:translateY(0px) rotate(1.5deg)}  50%{transform:translateY(-8px)  rotate(0.8deg)} }

        @media (max-width: 639px) {
          .magnetic-canvas { display: none !important; }
          .tablet-quotes   { display: none !important; }
          .mobile-quotes   { display: flex !important; }
        }
        @media (min-width: 640px) and (max-width: 1279px) {
          .magnetic-canvas { display: none !important; }
          .tablet-quotes   { display: grid !important; }
          .mobile-quotes   { display: none !important; }
        }
        @media (min-width: 1280px) {
          .magnetic-canvas { display: block !important; }
          .tablet-quotes   { display: none !important; }
          .mobile-quotes   { display: none !important; }
        }
      `}</style>
    </section>
  )
}

export default PremiumQuoteStack

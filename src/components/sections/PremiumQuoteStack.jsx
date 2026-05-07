import { useState } from 'react'
import { Quote } from 'lucide-react'
import { QUOTES } from '../../data/quotesData'

const QuoteCard = ({ q, i }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        position: 'sticky',
        // Each card sticks 20px lower than the previous, creating the peek stack
        top: `${112 + i * 20}px`,
        // Later cards sit on top of earlier ones
        zIndex: i + 1,
        width: 'min(95vw, 1100px)',
        marginBottom: '1.5rem',
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: '1.5rem',
          border: `2px solid ${hovered ? q.quoteColor : q.border}`,
          background: q.bg,
          boxShadow: hovered
            ? `0 24px 64px rgba(0,0,0,0.11), 0 0 0 1px ${q.border}55`
            : '0 4px 28px rgba(60,60,40,0.07)',
          padding: '2.75rem clamp(1.5rem, 6vw, 4rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'default',
          transition: 'box-shadow 0.35s ease, border-color 0.35s ease',
        }}
      >
        <div style={{ marginBottom: '1.2rem' }}>
          <Quote
            size={52}
            color={q.quoteColor}
            style={{ filter: `drop-shadow(0 3px 10px ${q.border}bb)` }}
          />
        </div>

        <span
          style={{
            display: 'block',
            textAlign: 'center',
            fontSize: 'clamp(1.1rem, 2vw, 1.65rem)',
            fontWeight: 800,
            color: '#1e1e1e',
            lineHeight: 1.35,
            letterSpacing: '-0.01em',
            maxWidth: '780px',
          }}
        >
          {q.text}
        </span>
      </div>
    </div>
  )
}

const PremiumQuoteStack = ({ quotes = QUOTES }) => (
  <section
    className="relative w-full bg-white px-4"
    style={{ paddingTop: '120px', paddingBottom: '6rem' }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {quotes.map((q, i) => (
        <QuoteCard key={i} q={q} i={i} total={quotes.length} />
      ))}
    </div>
  </section>
)

export default PremiumQuoteStack

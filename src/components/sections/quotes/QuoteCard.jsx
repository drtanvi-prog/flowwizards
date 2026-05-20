import { useState } from 'react'
import { Quote } from 'lucide-react'

const QuoteCard = ({ q, i }) => {
  const [hovered, setHovered] = useState(false)
  const hasBody = !!q.author

  return (
    <div
      style={{
        position: 'sticky',
        top: `${112 + i * 20}px`,
        zIndex: i + 1,
        width: '100%',
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
          padding: '3rem clamp(1.5rem, 6vw, 4rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'default',
          transition: 'box-shadow 0.35s ease, border-color 0.35s ease',
        }}
      >
        {/* Quote icon */}
        <Quote
          size={48}
          color={q.quoteColor}
          style={{ filter: `drop-shadow(0 3px 10px ${q.border}bb)`, flexShrink: 0 }}
        />

        {/* Main text — headline or pain point */}
        <span
          style={{
            display: 'block',
            textAlign: 'center',
            fontSize: hasBody
              ? 'clamp(1.2rem, 2vw, 1.6rem)'
              : 'clamp(1.35rem, 2.4vw, 2rem)',
            fontWeight: 800,
            color: '#1e1e1e',
            lineHeight: 1.35,
            letterSpacing: '-0.02em',
            maxWidth: '820px',
          }}
        >
          {q.text}
        </span>

        {/* Body — only shown on pages like pricing that pass full review text */}
        {hasBody && (
          <p
            style={{
              textAlign: 'center',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              fontWeight: 400,
              color: '#555',
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: 0,
            }}
          >
            {q.author}
          </p>
        )}
      </div>
    </div>
  )
}

export default QuoteCard

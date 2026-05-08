import { Star } from 'lucide-react'

export const Stars = ({ color, size = 11 }) => (
  <div className="flex items-center gap-0.5">
    {[0, 1, 2, 3, 4].map(i => (
      <Star key={i} size={size} fill={color} stroke="none" />
    ))}
  </div>
)

const TestimonialCard = ({ t }) => (
  <div
    className="shrink-0 rounded-md overflow-hidden"
    style={{
      width: 'min(420px, calc(100vw - 24px))',
      background: '#131313',
      border: '1px solid rgba(255,255,255,0.07)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.45)',
    }}
  >
    <div className="h-0.75 w-full" style={{ background: t.color }} />

    <div className="p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <Stars color="#FBBF24" />
        <span className="font-black text-[10px]" style={{ color: '#FBBF24', letterSpacing: '-0.01em' }}>
          5.0
        </span>
      </div>

      <p
        className="font-bold leading-snug"
        style={{ fontSize: '0.86rem', color: '#fff', letterSpacing: '-0.015em' }}
      >
        "{t.title}"
      </p>

      <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.44)', lineHeight: '1.8' }}>
        {t.body}
      </p>

      <div
        className="flex items-center gap-2.5 pt-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center font-extrabold shrink-0"
          style={{
            background: `${t.color}1e`,
            color: t.color,
            fontSize: '0.6rem',
            letterSpacing: '0.04em',
            border: `1px solid ${t.color}28`,
          }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-semibold" style={{ fontSize: '0.72rem', color: '#fff' }}>{t.name}</p>
          <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.32)' }}>{t.role} · {t.company}</p>
        </div>
      </div>
    </div>
  </div>
)

export default TestimonialCard

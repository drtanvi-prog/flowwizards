const CaseStudyCard = ({ study, isActive }) => (
  <div
    className="flex flex-col h-full"
    style={{
      background: '#fff',
      border: `1.5px solid ${isActive ? '#E85C41' : '#f0c4ba'}`,
      borderRadius: '18px',
      padding: '32px',
      boxShadow: isActive
        ? '0 24px 64px rgba(232,92,65,0.14), 0 4px 20px rgba(0,0,0,0.07)'
        : '0 4px 16px rgba(0,0,0,0.05)',
      userSelect: 'none',
      pointerEvents: 'none',
    }}
  >
    <h3
      className="font-extrabold leading-snug mb-5"
      style={{ fontSize: '1.02rem', color: '#1a1a1a', letterSpacing: '-0.018em' }}
    >
      {study.title}
    </h3>

    <ul className="flex flex-col gap-2 flex-1">
      {study.stats.map((s, i) => (
        <li key={i} className="flex items-start gap-2" style={{ fontSize: '0.82rem', color: '#555' }}>
          <span style={{ color: '#E85C41', marginTop: '1px', flexShrink: 0 }}>•</span>
          <span>
            <strong style={{ color: '#1a1a1a' }}>{s.value}</strong> {s.label}
          </span>
        </li>
      ))}
    </ul>

    <div className="mb-5" style={{ height: '1px', background: 'rgba(0,0,0,0.09)' }} />

    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <div
          className="flex items-center justify-center rounded-full shrink-0 font-extrabold"
          style={{
            width: 38, height: 38,
            background: `${study.author.color}18`,
            color: study.author.color,
            fontSize: '0.58rem',
            letterSpacing: '0.04em',
            border: `1px solid ${study.author.color}28`,
          }}
        >
          {study.author.initials}
        </div>
        <div>
          <p className="font-bold" style={{ fontSize: '0.76rem', color: '#1a1a1a', margin: 0 }}>
            {study.author.name}
          </p>
          <p style={{ fontSize: '0.65rem', color: '#999', margin: 0 }}>
            {study.author.role}
          </p>
        </div>
      </div>
      <span className="font-extrabold" style={{ fontSize: '0.72rem', color: '#bbb', letterSpacing: '-0.01em' }}>
        {study.company}
      </span>
    </div>
  </div>
)

export default CaseStudyCard

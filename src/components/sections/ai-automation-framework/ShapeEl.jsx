const ShapeEl = ({ index, uid = '' }) => {
  if (index === 0) return (
    <svg viewBox="0 0 200 240" className="w-full h-full" style={{ filter: 'drop-shadow(0 12px 32px rgba(255,79,0,0.35))' }}>
      <polygon points="100,18 180,92 154,208 46,208 20,92" fill="#ff4f00" />
      <polygon points="100,18 180,92 100,66" fill="rgba(255,255,255,0.28)" />
      <polygon points="100,18 20,92 100,66" fill="rgba(0,0,0,0.1)" />
      <polygon points="100,66 180,92 154,208 100,155" fill="rgba(0,0,0,0.18)" />
      <polygon points="100,66 20,92 46,208 100,155" fill="rgba(255,255,255,0.08)" />
    </svg>
  )
  if (index === 1) return (
    <svg viewBox="0 0 200 200" className="w-full h-full" style={{ filter: 'drop-shadow(0 12px 32px rgba(220,80,20,0.35))' }}>
      <defs>
        <radialGradient id={`sg1${uid}`} cx="36%" cy="33%" r="68%">
          <stop offset="0%" stopColor="#FFBA88" />
          <stop offset="100%" stopColor="#d94f18" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="88" fill={`url(#sg1${uid})`} />
      <ellipse cx="100" cy="100" rx="88" ry="26" fill="none" stroke="#1a1a1a" strokeWidth="4.5" />
      <ellipse cx="100" cy="100" rx="50" ry="88" fill="none" stroke="#1a1a1a" strokeWidth="4.5" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="#1a1a1a" strokeWidth="4.5" />
    </svg>
  )
  if (index === 2) return (
    <svg viewBox="0 0 220 220" className="w-full h-full" style={{ filter: 'drop-shadow(0 12px 32px rgba(255,79,0,0.35))' }}>
      <polygon points="110,18 200,78 200,162 110,202 20,162 20,78" fill="#ff4f00" />
      <polygon points="110,18 200,78 110,108 20,78" fill="rgba(255,255,255,0.22)" />
      <polygon points="110,108 200,78 200,162 110,202" fill="rgba(0,0,0,0.22)" />
      <polygon points="110,108 20,78 20,162 110,202" fill="rgba(0,0,0,0.1)" />
      <circle cx="110" cy="193" r="13" fill="#1a1a1a" />
      <circle cx="110" cy="193" r="6" fill="#ff4f00" />
    </svg>
  )
  if (index === 3) return (
    <svg viewBox="0 0 200 200" className="w-full h-full" style={{ filter: 'drop-shadow(0 12px 32px rgba(50,150,70,0.35))' }}>
      <defs>
        <radialGradient id={`sg4${uid}`} cx="36%" cy="36%" r="68%">
          <stop offset="0%" stopColor="#b5e070" />
          <stop offset="100%" stopColor="#3a8a32" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="88" fill={`url(#sg4${uid})`} />
      <ellipse cx="100" cy="100" rx="88" ry="30" fill="none" stroke="#1a1a1a" strokeWidth="5" />
      <ellipse cx="100" cy="100" rx="88" ry="30" fill="none" stroke="#1a1a1a" strokeWidth="5" transform="rotate(50 100 100)" />
      <ellipse cx="100" cy="100" rx="88" ry="30" fill="none" stroke="#1a1a1a" strokeWidth="5" transform="rotate(-50 100 100)" />
      <ellipse cx="100" cy="100" rx="50" ry="88" fill="none" stroke="#1a1a1a" strokeWidth="5" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="#1a1a1a" strokeWidth="5" />
    </svg>
  )
  if (index === 4) return (
    <svg viewBox="0 0 200 200" className="w-full h-full" style={{ filter: 'drop-shadow(0 12px 32px rgba(210,90,20,0.35))' }}>
      <defs>
        <radialGradient id={`sg5${uid}`} cx="36%" cy="33%" r="68%">
          <stop offset="0%" stopColor="#FFD0A0" />
          <stop offset="100%" stopColor="#c85418" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="88" fill={`url(#sg5${uid})`} />
      <ellipse cx="100" cy="100" rx="88" ry="26" fill="none" stroke="#1a1a1a" strokeWidth="4.5" />
      <ellipse cx="100" cy="100" rx="50" ry="88" fill="none" stroke="#1a1a1a" strokeWidth="4.5" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="#1a1a1a" strokeWidth="4.5" />
    </svg>
  )
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" style={{ filter: 'drop-shadow(0 12px 32px rgba(195,150,0,0.35))' }}>
      <polygon points="100,12 186,86 100,188 14,86" fill="#d4a017" />
      <polygon points="100,12 186,86 100,86" fill="rgba(255,255,255,0.28)" />
      <polygon points="100,12 14,86 100,86" fill="rgba(0,0,0,0.08)" />
      <polygon points="100,86 186,86 100,188" fill="rgba(0,0,0,0.22)" />
      <polygon points="100,86 14,86 100,188" fill="rgba(255,255,255,0.08)" />
      <line x1="100" y1="12" x2="100" y2="188" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      <line x1="14" y1="86" x2="186" y2="86" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
    </svg>
  )
}

export default ShapeEl

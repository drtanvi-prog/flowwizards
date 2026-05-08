import { motion } from 'framer-motion'

/* ── Pre-computed single gear SVG path (14 teeth, 200×200 viewBox) ── */
const GEAR_PATH = (() => {
  const [cx, cy, R, r, n] = [100, 100, 65, 53, 14]
  const step = (2 * Math.PI) / n
  const pt = (radius, angle) =>
    `${(cx + radius * Math.cos(angle)).toFixed(2)} ${(cy + radius * Math.sin(angle)).toFixed(2)}`
  let d = ''
  for (let i = 0; i < n; i++) {
    const mid = i * step - Math.PI / 2
    const tw = step * 0.17
    const ge = mid - step * 0.35
    const ts = mid - tw
    const te = mid + tw
    const gs = mid + step * 0.35
    d += i === 0 ? `M ${pt(r, ge)} ` : `A ${r} ${r} 0 0 1 ${pt(r, ge)} `
    d += `L ${pt(R, ts)} L ${pt(R, te)} L ${pt(r, gs)} `
  }
  d += `A ${r} ${r} 0 0 1 ${pt(r, -Math.PI / 2 - step * 0.35)} Z`
  return d
})()

/* ── Animated single-gear logo matching reference ── */
export const GearLogo = () => (
  <svg
    viewBox="0 0 200 200"
    width={68} height={68}
    xmlns="http://www.w3.org/2000/svg"
    style={{ overflow: 'visible', flexShrink: 0 }}
  >
    <defs>
      <radialGradient id="glHubGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stopColor="white" />
        <stop offset="65%"  stopColor="#FFE4D0" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#FC6E32" stopOpacity="0.45" />
      </radialGradient>
    </defs>

    {/* Outer orbit ring + 4 coloured dots — all rotate together */}
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '100px 100px' }}
    >
      <circle cx={100} cy={100} r={86}
        stroke="#FC6E32" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
      {/* 12 o'clock — deep orange */}
      <circle cx={100} cy={14}  r={5.5} fill="#ff4f00" />
      {/* 3 o'clock — dark burnt orange */}
      <circle cx={186} cy={100} r={4.5} fill="#C2410C" />
      {/* 6 o'clock — peach target */}
      <circle cx={100} cy={186} r={12}  fill="#FFD4B3" />
      <circle cx={100} cy={186} r={6}   fill="#EA580C" />
      {/* 9 o'clock — light peach */}
      <circle cx={14}  cy={100} r={6}   fill="#FDBA74" />
    </motion.g>

    {/* Gear body — rotates clockwise */}
    <motion.path
      d={GEAR_PATH}
      fill="#FFE0CC"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '100px 100px' }}
    />

    {/* Inner dashed ring + orange dot — counter-rotates */}
    <motion.g
      animate={{ rotate: -360 }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '100px 100px' }}
    >
      <circle cx={100} cy={100} r={48}
        stroke="#FC6E32" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
      {/* Orange dot on inner ring (3 o'clock) */}
      <circle cx={148} cy={100} r={5} fill="#ff4f00" />
    </motion.g>

    {/* Center gradient hub — static, covers gear centre */}
    <circle cx={100} cy={100} r={36} fill="url(#glHubGrad)" />
  </svg>
)

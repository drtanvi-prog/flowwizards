import { motion } from 'framer-motion'

export const TOOLTIP_W = 272
export const MOBILE_TOOLTIP_W = 190
export const TOOLTIP_GAP = 10

export const FloatingTooltip = ({ tool, pos }) => (
  <div style={{
    position: 'absolute',
    top: pos.top,
    left: pos.left,
    transform: 'translateY(-50%)',
    width: pos.width ?? TOOLTIP_W,
    zIndex: 100,
    pointerEvents: 'none',
  }}>
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: '#fff',
        borderRadius: '0.75rem',
        border: '1.5px solid #E5E7EB',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        padding: '0.875rem 1rem',
      }}
    >
      <p style={{ fontSize: 12, lineHeight: 1.75, color: '#444', margin: 0 }}>
        {tool.description}
      </p>
    </motion.div>
  </div>
)

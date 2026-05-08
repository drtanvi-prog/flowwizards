const EdgeOverlay = ({ side }) => (
  <div
    className="absolute top-0 bottom-0 z-10 pointer-events-none"
    style={{
      [side]: 0,
      width: '80px',
      background: `linear-gradient(to ${side === 'left' ? 'right' : 'left'}, #0C0C0C 0%, transparent 100%)`,
    }}
  />
)

export default EdgeOverlay

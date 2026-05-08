export const CursorSVG = ({ color }) => (
   <svg width="22" height="30" viewBox="0 0 22 30" fill="none">
      <path d="M1.5 1.5L1.5 24L7.5 18L12 27.5L15.5 26L11 16.5L19.5 16.5L1.5 1.5Z"
         fill={color} stroke="#120B0C" strokeWidth="1.3" strokeLinejoin="round" />
   </svg>
)

export const Cursor = ({ id, color, name, top, left }) => (
   <div className={`cur-${id} absolute pointer-events-none z-30 hidden lg:block`} style={{ top, left }}>
      <CursorSVG color={color} />
      <span
         className="absolute top-7 left-3 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-md whitespace-nowrap"
         style={{ background: id === 'ruben' ? '#000' : color }}
      >
         {name}
      </span>
   </div>
)

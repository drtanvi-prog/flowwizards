const INIT_TRANSFORM = {
   business: 'translateY(-640px) rotate(-8deg) scale(0.94)',
   everyone: 'translateY(-640px) rotate(9deg) scale(0.94)',
}

export const HWord = ({ children, id, innerRef }) => (
   <span
      className={`hw-word-${id} relative inline-flex px-4 sm:px-5 py-1.5 sm:py-2 mx-1 overflow-hidden`}
      ref={innerRef}
      style={{
         opacity: 0,
         transform: INIT_TRANSFORM[id] ?? 'translateY(-640px)',
         willChange: 'transform, opacity, filter',
         background: 'transparent',
      }}
   >
      <span
         className={`hw-box-${id} absolute inset-0 rounded-xl bg-[#ff4f00] border-[2.5px] border-[#1A1A1A]`}
         style={{ transform: 'scaleX(0)' }}
      />
      <span className={`hw-txt-${id} relative z-10 text-[#1A1A1A]`}>{children}</span>
      <span
         className={`hw-fill-${id} absolute inset-0 z-20 px-4 sm:px-5 py-1.5 sm:py-2 text-white pointer-events-none select-none`}
         aria-hidden="true"
         style={{ visibility: 'hidden' }}
      >
         {children}
      </span>
   </span>
)


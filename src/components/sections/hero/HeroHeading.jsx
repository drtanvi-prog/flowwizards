export const HWord = ({ children, id, innerRef }) => (
   <span className="relative inline-flex px-4 sm:px-5 py-1.5 sm:py-2 mx-1" ref={innerRef}>
      <span className={`hw-box-${id} absolute inset-0 rounded-xl bg-[#ff4f00] border-[2.5px] border-[#1A1A1A]`} />
      <span className={`hw-txt-${id} relative z-10`}>{children}</span>
   </span>
)

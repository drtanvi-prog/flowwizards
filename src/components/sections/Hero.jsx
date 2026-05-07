import { useRef, useState, useCallback, useEffect } from 'react'

import Button from '../ui/Button'
import './Hero.css'

const HWord = ({ children, id, innerRef }) => (
   <span className="relative inline-flex" ref={innerRef}>
      <span className={`hw-box-${id} absolute -inset-x-3 -inset-y-1 rounded-lg bg-[#ff4f00] border-[2.5px] border-[#1A1A1A]`} />
      <span className={`hw-txt-${id} relative z-10`}>{children}</span>
   </span>
)

const CursorSVG = ({ color }) => (
   <svg width="22" height="30" viewBox="0 0 22 30" fill="none">
      <path d="M1.5 1.5L1.5 24L7.5 18L12 27.5L15.5 26L11 16.5L19.5 16.5L1.5 1.5Z"
         fill={color} stroke="#120B0C" strokeWidth="1.3" strokeLinejoin="round" />
   </svg>
)

const Cursor = ({ id, color, name, top, left }) => (
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

const Hero = () => {
   const sectionRef = useRef(null)
   const badgeRef = useRef(null)
   const bizRef = useRef(null)
   const eveRef = useRef(null)
   const contentRef = useRef(null)

   const [svg, setSvg] = useState({ vb: '0 0 375 600', l1: '', l2: '' })

   // const recalc = useCallback(() => {
   //    const S  = sectionRef.current?.getBoundingClientRect()
   //    const B  = badgeRef.current?.getBoundingClientRect()
   //    const Bz = bizRef.current?.getBoundingClientRect()
   //    const Ev = eveRef.current?.getBoundingClientRect()
   //    if (!S || !B || !Bz || !Ev) return

   //    const r = rect => ({
   //       l:  rect.left   - S.left,
   //       r:  rect.right  - S.left,
   //       t:  rect.top    - S.top,
   //       b:  rect.bottom - S.top,
   //       cx: (rect.left  + rect.right)  / 2 - S.left,
   //       cy: (rect.top   + rect.bottom) / 2 - S.top,
   //    })

   //    const bdg = r(B)
   //    const biz = r(Bz)
   //    const eve = r(Ev)

   //    const W = S.width

   //    const CR  = 10
   //    const GAP = 12

   //    /* l1 — left horizontal from screen edge to badge left */
   //    const l1 = `M 0 ${bdg.cy} H ${bdg.l - GAP}`

   //    /* l2 — S-curve: badge-right → right of business → left of everyone
   //             → centre of everyone → downward arrow                      */
   //    const xRight    = Math.min(biz.r + GAP, W - 16)
   //    const xLeft     = eve.l - GAP
   //    const yAboveBiz = bdg.b  + GAP
   //    const yBelowBiz = biz.b  + GAP
   //    const yBelowEve = eve.b  + 8
   //    const yArrow    = yBelowEve + 20

   //    const l2 = [
   //       `M ${bdg.r + GAP} ${bdg.cy}`,
   //       `V ${yAboveBiz - CR}`,
   //       `Q ${bdg.r + GAP} ${yAboveBiz} ${bdg.r + GAP + CR} ${yAboveBiz}`,
   //       `H ${xRight - CR}`,
   //       `Q ${xRight} ${yAboveBiz} ${xRight} ${yAboveBiz + CR}`,
   //       `V ${yBelowBiz - CR}`,
   //       `Q ${xRight} ${yBelowBiz} ${xRight - CR} ${yBelowBiz}`,
   //       `H ${xLeft + CR}`,
   //       `Q ${xLeft} ${yBelowBiz} ${xLeft} ${yBelowBiz + CR}`,
   //       `V ${yBelowEve - CR}`,
   //       `Q ${xLeft} ${yBelowEve} ${xLeft + CR} ${yBelowEve}`,
   //       `H ${eve.cx - CR}`,
   //       `Q ${eve.cx} ${yBelowEve} ${eve.cx} ${yBelowEve + CR}`,
   //       `V ${yArrow}`,
   //    ].join(' ')

   //    setSvg({ vb: `0 0 ${W} ${S.height}`, l1, l2 })
   // }, [])

   // useEffect(() => {
   //    const id = requestAnimationFrame(() => requestAnimationFrame(recalc))
   //    window.addEventListener('resize', recalc)
   //    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', recalc) }
   // }, [recalc])

   return (
      <section ref={sectionRef}
         className="bg-[#FEF6F5] relative overflow-hidden flex items-center justify-center pt-10 pb-16 sm:pt-14 sm:pb-20 px-5 sm:px-8 xl:px-16">

         {/* Static connector lines — mobile / tablet only */}
         <svg
            className="absolute inset-0 w-full h-full pointer-events-none lg:hidden"
            style={{ zIndex: 5, overflow: 'visible' }}
            viewBox={svg.vb}
            fill="none"
         >
            <defs>
               <marker id="ha" markerWidth="10" markerHeight="8"
                  refX="9" refY="4" orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M1 1 L9 4 L1 7" stroke="#1A1A1A" strokeWidth="1.5"
                     fill="none" strokeLinecap="round" strokeLinejoin="round" />
               </marker>
            </defs>
            <path d={svg.l1} stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" />
            <path d={svg.l2} stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round"
               markerEnd="url(#ha)" />
         </svg>

         {/* Cursors — desktop only */}
         <Cursor id="ruben" color="#ff4f00" name="Ruben" top="37%" left="69%" />
         <Cursor id="james" color="#FC6E32" name="James" top="54%" left="22%" />

         {/* Content */}
         <div ref={contentRef} className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-6">

            {/* Badge */}
            <div ref={badgeRef}
               className="inline-flex items-center border-2 border-[#1A1A1A] rounded-lg px-5 py-2.5 bg-white">
               <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-[#1A1A1A]">
                  Your business process &amp; workflow automation consultants
               </span>
            </div>

            {/* Heading — 1.5 rem on mobile keeps both lines single-row at 375 px+ */}
            <h1 className="text-[1.5rem] sm:text-[2.2rem] lg:text-[3.4rem] xl:text-[3.8rem] font-extrabold leading-[1.2] text-[#1A1A1A] m-0 tracking-tight">
               <span className="block">
                  Become the{' '}
                  <HWord id="business" innerRef={bizRef}>business</HWord>
               </span>
               <span className="block mt-5 sm:mt-8 lg:mt-10">
                  <HWord id="everyone" innerRef={eveRef}>everyone</HWord>
                  {' '}wants to beat
               </span>
            </h1>

            {/* Body copy */}
            <p className="text-[13px] sm:text-[15px] lg:text-[17px] text-[#4A4A4A] max-w-[90vw] sm:max-w-xl leading-relaxed m-0">
               <strong className="text-[#1A1A1A]">Your software tools should help you work smarter.</strong>{' '}
               Or you risk getting lost in the noise. We'll fine-tune your tech stack so you can
               start moving faster, wowing your customers — and worrying your competition.
            </p>

            {/* CTA */}
            <div className="mt-2 w-full sm:w-auto">
               <Button variant="secondary" size="md" className="w-full sm:w-auto">
                  Schedule a free discovery session
               </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-2 mt-1">
               <span className="text-[22px] leading-none">⭐</span>
               <span className="font-extrabold text-[15px] text-[#1A1A1A]">5.0</span>
               <span className="text-[11px] sm:text-[13px] lg:text-[14px] text-[#4A4A4A]">
                  500+ five-star client reviews across partner directories
               </span>
            </div>

         </div>
      </section>
   )
}

export default Hero

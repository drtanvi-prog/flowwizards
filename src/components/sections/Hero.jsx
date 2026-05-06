import React, { useRef, useEffect, useState, useCallback } from 'react'

import Button from '../ui/Button'

const HWord = ({ children, id, innerRef }) => (
   <span className="relative inline-flex" ref={innerRef}>
      <span className={`hw-box-${id} absolute -inset-x-3 -inset-y-1 rounded-2xl bg-[#E8283F]`} />
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
      <span className="absolute top-7 left-3 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-md whitespace-nowrap"
         style={{ background: color }}>
         {name}
      </span>
   </div>
)

const Hero = () => {
   const sectionRef  = useRef(null)
   const badgeRef    = useRef(null)
   const bizRef      = useRef(null)
   const eveRef      = useRef(null)
   const contentRef  = useRef(null)

   const [svg, setSvg] = useState({ vb: '0 0 1440 800', l1: '', l2: '' })

   const recalc = useCallback(() => {
      const S  = sectionRef.current?.getBoundingClientRect()
      const B  = badgeRef.current?.getBoundingClientRect()
      const Bz = bizRef.current?.getBoundingClientRect()
      const Co = contentRef.current?.getBoundingClientRect()
      const Ev = eveRef.current?.getBoundingClientRect()
      if (!S || !B || !Bz || !Co || !Ev) return

      const r = rect => ({
         l: rect.left   - S.left,
         r: rect.right  - S.left,
         t: rect.top    - S.top,
         b: rect.bottom - S.top,
         cx: (rect.left + rect.right)  / 2 - S.left,
         cy: (rect.top  + rect.bottom) / 2 - S.top,
      })

      const bdg     = r(B)
      const biz     = r(Bz)
      const content = r(Co)
      const eve     = r(Ev)

      const W = S.width
      const H = S.height

      const CR = 22

      const l1 = `M ${-W * 0.08} ${bdg.cy} H ${bdg.l}`

      /*
        xOut = just past whichever is further right: the "business" highlight
        box edge OR the content column right edge. Also capped at W-16 so the
        vertical segment never clips outside the section.
      */
      const xOut = Math.min(Math.max(biz.r + 16, content.r + 16), W - 16)
      const yEnd = eve.b + 22

      const l2 = [
         `M ${bdg.r} ${bdg.cy}`,
         `H ${xOut - CR}`,
         `Q ${xOut} ${bdg.cy} ${xOut} ${bdg.cy + CR}`,
         `V ${yEnd - CR}`,
         `Q ${xOut} ${yEnd} ${xOut - CR} ${yEnd}`,
         `H ${eve.cx + 6}`,
      ].join(' ')

      setSvg({ vb: `0 0 ${W} ${H}`, l1, l2 })
   }, [])

   useEffect(() => {
      const id = requestAnimationFrame(() => requestAnimationFrame(recalc))
      window.addEventListener('resize', recalc)
      return () => { cancelAnimationFrame(id); window.removeEventListener('resize', recalc) }
   }, [recalc])

   return (
      <section ref={sectionRef}
         className="bg-[#FEF6F5] relative overflow-hidden flex items-center justify-center pt-10 pb-16 sm:pt-14 sm:pb-20 px-4 xl:px-6">

         {/* SVG lines — behind text (z-5), pixel-accurate coords */}
         <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-5 hidden lg:block"
            viewBox={svg.vb}
            fill="none"
            style={{ overflow: 'visible' }}
         >
            <defs>
               <marker id="ha" markerWidth="10" markerHeight="8"
                  refX="9" refY="4" orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M1 1 L9 4 L1 7" stroke="#1A1A1A" strokeWidth="1.5"
                     fill="none" strokeLinecap="round" strokeLinejoin="round" />
               </marker>
            </defs>

            {/* Line 1: far-left → badge left side */}
            <path className="svgl1" d={svg.l1}
               stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"
               pathLength="1" />

            {/* Line 2: badge right → S-curve → below "everyone", arrowhead */}
            <path className="svgl2" d={svg.l2}
               stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"
               pathLength="1" markerEnd="url(#ha)" />
         </svg>

         {/* Cursors */}
         <Cursor id="ruben" color="#E8283F" name="Ruben" top="37%" left="69%" />
         <Cursor id="james" color="#FC6E32" name="James" top="54%" left="22%" />

         {/* Content */}
         <div ref={contentRef} className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-6">

            <div ref={badgeRef}
               className="inline-flex items-center border-2 border-[#1A1A1A] rounded-lg px-5 py-2.5 bg-white">
               <span className="text-[13px] sm:text-[14px] font-medium text-[#1A1A1A]">
                  Your business process &amp; workflow automation consultants
               </span>
            </div>

            <h1 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] xl:text-[3.8rem] font-extrabold leading-[1.2] text-[#1A1A1A] m-0 tracking-tight">
               <span className="block">
                  Become the{' '}
                  <HWord id="business" innerRef={bizRef}>business</HWord>
               </span>
               <span className="block mt-2">
                  <HWord id="everyone" innerRef={eveRef}>everyone</HWord>
                  {' '}wants to beat
               </span>
            </h1>

            <p className="text-[15px] sm:text-[17px] text-[#4A4A4A] max-w-xl leading-relaxed m-0">
               <strong className="text-[#1A1A1A]">Your software tools should help you work smarter.</strong>{' '}
               Or you risk getting lost in the noise. We'll fine-tune your tech stack so you can
               start moving faster, wowing your customers — and worrying your competition.
            </p>

            <div className="mt-2">
               <Button variant="secondary" size="md">
                  Schedule a free discovery session
               </Button>
            </div>

            <div className="flex items-center gap-2 mt-1">
               <span className="text-[22px] leading-none">⭐</span>
               <span className="font-extrabold text-[15px] text-[#1A1A1A]">5.0</span>
               <span className="text-[13px] sm:text-[14px] text-[#4A4A4A]">
                  500+ five-star client reviews across partner directories
               </span>
            </div>
         </div>

         <style>{`
            /* ── "business" box ─────────────────── */
            @keyframes hwBoxBiz {
               0%,21%   { transform:scaleX(0); opacity:0; transform-origin:right center; }
               21.5%    { transform:scaleX(.02); opacity:1; transform-origin:right center; animation-timing-function:linear; }
               30%      { transform:scaleX(1);  opacity:1; transform-origin:right center; }
               82%      { transform:scaleX(1);  opacity:1; transform-origin:right center; animation-timing-function:ease-in; }
               89%      { transform:scaleX(0);  opacity:0; transform-origin:right center; }
               100%     { transform:scaleX(0);  opacity:0; transform-origin:right center; }
            }
            .hw-box-business { animation:hwBoxBiz 14s linear infinite; }

            @keyframes hwTxtBiz {
               0%,21%   { color:#1A1A1A; }
               23%,88%  { color:#fff; }
               90%,100% { color:#1A1A1A; }
            }
            .hw-txt-business { animation:hwTxtBiz 14s linear infinite; }

            /* ── "everyone" box ─────────────────── */
            @keyframes hwBoxEve {
               0%,53%   { transform:scaleX(0); opacity:0; transform-origin:left center; }
               53.5%    { transform:scaleX(.02); opacity:1; transform-origin:left center; animation-timing-function:linear; }
               62%      { transform:scaleX(1);  opacity:1; transform-origin:left center; }
               82%      { transform:scaleX(1);  opacity:1; transform-origin:left center; animation-timing-function:ease-in; }
               89%      { transform:scaleX(0);  opacity:0; transform-origin:left center; }
               100%     { transform:scaleX(0);  opacity:0; transform-origin:left center; }
            }
            .hw-box-everyone { animation:hwBoxEve 14s linear infinite; }

            @keyframes hwTxtEve {
               0%,53%   { color:#1A1A1A; }
               55%,88%  { color:#fff; }
               90%,100% { color:#1A1A1A; }
            }
            .hw-txt-everyone { animation:hwTxtEve 14s linear infinite; }

            /* ── Ruben cursor ───────────────────── */
            @keyframes curRuben {
               0%,10%   { transform:translate(420px,-210px); opacity:0; animation-timing-function:cubic-bezier(.16,1,.3,1); }
               21%      { transform:translate(65px,0);       opacity:1; animation-timing-function:linear; }
               30%      { transform:translate(-250px,0);     opacity:1; animation-timing-function:ease-in-out; }
               58%      { transform:translate(-242px,-7px);  opacity:1; }
               63%      { transform:translate(-250px,0);     opacity:1; }
               82%      { transform:translate(-250px,0);     opacity:1; animation-timing-function:cubic-bezier(.7,0,.84,0); }
               90%      { transform:translate(-500px,260px); opacity:0; }
               91%,100% { transform:translate(420px,-210px); opacity:0; }
            }
            .cur-ruben { animation:curRuben 14s linear infinite; }

            /* ── James cursor ───────────────────── */
            @keyframes curJames {
               0%,40%   { transform:translate(-420px,230px); opacity:0; animation-timing-function:cubic-bezier(.16,1,.3,1); }
               53%      { transform:translate(-55px,0);      opacity:1; animation-timing-function:linear; }
               62%      { transform:translate(280px,0);      opacity:1; animation-timing-function:ease-in-out; }
               74%      { transform:translate(287px,-6px);   opacity:1; }
               79%      { transform:translate(280px,0);      opacity:1; }
               82%      { transform:translate(280px,0);      opacity:1; animation-timing-function:cubic-bezier(.7,0,.84,0); }
               90%      { transform:translate(500px,-230px); opacity:0; }
               91%,100% { transform:translate(-420px,230px); opacity:0; }
            }
            .cur-james { animation:curJames 14s linear infinite; }

            /* ── SVG lines — appear AFTER both highlights (63%+) ── */
            /* pathLength="1" → dasharray/offset in range [0,1] */
            @keyframes l1Anim {
               0%,62%  { stroke-dashoffset:1; opacity:0; }
               63%     { stroke-dashoffset:1; opacity:1; animation-timing-function:ease-out; }
               73%     { stroke-dashoffset:0; opacity:1; }
               82%     { stroke-dashoffset:0; opacity:1; animation-timing-function:ease-in; }
               89%     { stroke-dashoffset:1; opacity:0; }
               100%    { stroke-dashoffset:1; opacity:0; }
            }
            .svgl1 { stroke-dasharray:1; stroke-dashoffset:1; animation:l1Anim 14s linear infinite; }

            @keyframes l2Anim {
               0%,68%  { stroke-dashoffset:1; opacity:0; }
               69%     { stroke-dashoffset:1; opacity:1; animation-timing-function:ease-out; }
               80%     { stroke-dashoffset:0; opacity:1; }
               82%     { stroke-dashoffset:0; opacity:1; animation-timing-function:ease-in; }
               89%     { stroke-dashoffset:1; opacity:0; }
               100%    { stroke-dashoffset:1; opacity:0; }
            }
            .svgl2 { stroke-dasharray:1; stroke-dashoffset:1; animation:l2Anim 14s linear infinite; }
         `}</style>
      </section>
   )
}

export default Hero

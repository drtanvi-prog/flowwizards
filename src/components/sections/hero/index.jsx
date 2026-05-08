import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../../ui/Button'
import { Cursor } from './HeroCursors'
import { HWord } from './HeroHeading'
import './hero.css'

const ease = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0, distance = 32) => ({
   initial: { opacity: 0, y: distance },
   animate: { opacity: 1, y: 0 },
   transition: { duration: 0.75, delay, ease },
})

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
            <motion.div
               ref={badgeRef}
               {...fadeUp(0.05)}
               className="inline-flex items-center border-2 border-[#1A1A1A] rounded-lg px-3 py-1.5 sm:px-5 sm:py-2.5 bg-white"
            >
               <span className="whitespace-nowrap text-[10px] sm:text-[13px] lg:text-[14px] font-medium text-[#1A1A1A]">
                  Your business process &amp; workflow automation consultants
               </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
               {...fadeUp(0.18, 40)}
               className="text-[1.5rem] sm:text-[2.2rem] lg:text-[3.4rem] xl:text-[3.8rem] font-extrabold leading-[1.2] text-[#1A1A1A] m-0 tracking-tight"
            >
               <span className="block">
                  Become the{' '}
                  <HWord id="business" innerRef={bizRef}>business</HWord>
               </span>
               <span className="block mt-5 sm:mt-8 lg:mt-10">
                  <HWord id="everyone" innerRef={eveRef}>everyone</HWord>
                  {' '}wants to beat
               </span>
            </motion.h1>

            {/* Body copy */}
            <motion.p
               {...fadeUp(0.32)}
               className="text-[13px] sm:text-[15px] lg:text-[17px] text-[#4A4A4A] max-w-[78vw] sm:max-w-xl leading-relaxed m-0"
            >
               <strong className="text-[#1A1A1A]">Your software tools should help you work smarter.</strong>{' '}
               Or you risk getting lost in the noise. We'll fine-tune your tech stack so you can
               start moving faster, wowing your customers — and worrying your competition.
            </motion.p>

            {/* CTA */}
            <motion.div {...fadeUp(0.44)} className="mt-2">
               <Button variant="secondary" size="md">
                  Schedule a free discovery session
               </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div {...fadeUp(0.54)} className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-1">
               <span className="text-[22px] leading-none">⭐</span>
               <span className="font-extrabold text-[15px] text-[#1A1A1A]">5.0</span>
               <span className="text-[11px] sm:text-[13px] lg:text-[14px] text-[#4A4A4A] text-center sm:text-left">
                  500+ five-star client reviews across partner directories
               </span>
            </motion.div>

         </div>
      </section>
   )
}

export default Hero

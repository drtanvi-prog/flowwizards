import { useState } from 'react'
import { openCalendly } from '@/utils/calendly'
import PlanColumn from './PlanColumn'
import Button from '@/components/ui/Button'
import { PLANS } from '@/data/plansData'

const IncludesContent = ({ content, dotColor }) => {
   if (!content) return null
   return (
      <div className="space-y-2.5 mt-3">
         {content.intro && <p className="text-xs sm:text-sm text-[#1A1A1A] font-semibold">{content.intro}</p>}
         {content.items.map((item, i) =>
            item.or ? (
               <p key={i} className="text-xs font-bold text-[#888] pl-1">- OR -</p>
            ) : item.groupLabel ? (
               <p key={i} className="text-xs sm:text-sm font-bold text-[#1A1A1A] pt-1">{item.groupLabel}</p>
            ) : (
               <div key={i} className="flex gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: dotColor }} />
                  <div>
                     {item.title && <p className="text-xs sm:text-sm font-semibold text-[#1A1A1A] leading-snug">{item.title}</p>}
                     {item.desc && <p className="text-xs text-[#666] leading-relaxed mt-0.5">{item.desc}</p>}
                     {item.label && <p className="text-xs sm:text-sm text-[#555] leading-relaxed">{item.label}</p>}
                  </div>
               </div>
            )
         )}
      </div>
   )
}

const DesktopTable = ({ expanded, toggle }) => (
   <div className="hidden lg:block border-2 border-[#1A1A1A] rounded-xl overflow-hidden shadow-lg">
      <div className="grid grid-cols-3 divide-x-2 divide-[#1A1A1A]">
         {PLANS.map((plan) => (
            <div key={plan.name} className="px-7 py-7 flex items-center justify-center text-center" style={{ background: plan.color }}>
               <h3 className="text-white font-extrabold text-lg leading-snug">{plan.name}</h3>
            </div>
         ))}
      </div>
      <div className="grid grid-cols-3 divide-x-2 divide-[#1A1A1A] border-t-2 border-[#1A1A1A]">
         {PLANS.map((plan) => (
            <div key={plan.name} className="px-7 py-7">
               <p className="text-[11px] font-black uppercase tracking-widest text-[#1A1A1A] mb-4">Who typically chooses this?</p>
               <ul className="space-y-3">
                  {plan.audience.map((item, i) => (
                     <li key={i} className="flex gap-3 text-sm text-[#444] leading-relaxed">
                        <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: plan.dotColor }} />
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
         ))}
      </div>
      <div className="grid grid-cols-3 divide-x-2 divide-[#1A1A1A] border-t-2 border-[#1A1A1A]">
         {PLANS.map((plan, idx) => (
            <div key={plan.name} className="flex flex-col">
               {/* Includes toggle + expandable content */}
               <div className="px-7 py-6">
                  <button onClick={() => toggle(idx)} className="w-full flex items-center justify-between group mb-1">
                     <span className="text-[11px] font-black uppercase tracking-widest text-[#1A1A1A] group-hover:opacity-70 transition-opacity">
                        {plan.includesLabel}
                     </span>
                     <span className="text-xs font-semibold" style={{ color: plan.dotColor }}>
                        {expanded[idx] ? 'See less ↑' : 'See more ↓'}
                     </span>
                  </button>
                  {expanded[idx] && <IncludesContent content={plan.includesContent} dotColor={plan.dotColor} />}
               </div>
               {/* Price + CTA - flows directly below includes */}
               <div className="px-7 py-7 border-t-2 border-[#1A1A1A]">
                  {plan.taskInfo && (
                     <div className="mb-5 border-l-[3px] pl-3" style={{ borderColor: plan.dotColor }}>
                        <p className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">*Tasks Turnaround</p>
                        <p className="text-sm text-[#555]">{plan.taskInfo}</p>
                     </div>
                  )}
                  {plan.pricePrefix && (
                     <p className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wide mb-1">{plan.pricePrefix}</p>
                  )}
                  {plan.price && (
                     <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-5xl font-black text-[#1A1A1A] tracking-tight">{plan.price}</span>
                        {plan.priceUnit && <span className="text-sm text-[#888]">{plan.priceUnit}</span>}
                     </div>
                  )}
                  {plan.priceSub && <p className="text-xs text-[#999] mb-4">{plan.priceSub}</p>}
                  <Button variant="secondary" size="lg" className="mt-4 w-full! whitespace-nowrap! leading-snug! text-xs! sm:text-sm!" onClick={openCalendly}>
                     {plan.cta}
                  </Button>
               </div>
            </div>
         ))}
      </div>
   </div>
)

const MobileCards = ({ expanded, toggle }) => (
   <div className="lg:hidden space-y-4">
      {PLANS.map((plan, idx) => (
         <PlanColumn key={plan.name} plan={plan} expanded={expanded[idx]} onToggle={() => toggle(idx)} IncludesContent={IncludesContent} />
      ))}
   </div>
)

const PricingSection = () => {
   const [expanded, setExpanded] = useState({ 0: false, 1: false, 2: false })
   const toggle = idx => setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }))
   return (
      <section className="bg-white py-12 md:py-16 lg:py-20">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-8">
            <DesktopTable expanded={expanded} toggle={toggle} />
            <MobileCards expanded={expanded} toggle={toggle} />
         </div>
      </section>
   )
}

export default PricingSection

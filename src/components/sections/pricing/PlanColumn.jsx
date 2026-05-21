import Button from '../../ui/Button'
import { openCalendly } from '@/utils/calendly'

/* Mobile-only plan card — rendered by PricingSection */
const PlanColumn = ({ plan, expanded, onToggle, IncludesContent }) => (
   <div className="border-2 border-[#1A1A1A] rounded-xl overflow-hidden flex flex-col">

      {/* Header */}
      <div className="px-5 py-5" style={{ background: plan.color }}>
         <h3 className="text-white font-extrabold text-base leading-snug">{plan.name}</h3>
      </div>

      {/* Audience */}
      <div className="px-5 py-5 border-b border-gray-200">
         <p className="font-bold text-xs text-[#1A1A1A] mb-3">Who typically chooses this?</p>
         <ul className="space-y-3">
            {plan.audience.map((item, i) => (
               <li key={i} className="flex gap-2.5 text-xs text-[#4A4A4A] leading-relaxed">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: plan.dotColor }} />
                  {item}
               </li>
            ))}
         </ul>
      </div>

      {/* Includes — expandable */}
      <div className="px-5 py-5 border-b border-gray-200">
         <p className="font-semibold text-xs text-[#1A1A1A] mb-1">{plan.includesLabel}</p>
         {expanded && <IncludesContent content={plan.includesContent} dotColor={plan.dotColor} />}
         <button
            onClick={onToggle}
            className="text-xs font-semibold mt-2 hover:underline"
            style={{ color: plan.dotColor }}
         >
            {expanded ? 'See less' : 'See more'}
         </button>
      </div>

      {/* Price + CTA */}
      <div className="px-5 py-5">
         {plan.taskInfo && (
            <div className="mb-4">
               <p className="text-xs text-[#4A4A4A] italic mb-1">*Tasks Turnaround:</p>
               <div className="flex gap-2 text-xs text-[#4A4A4A]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: plan.dotColor }} />
                  {plan.taskInfo}
               </div>
            </div>
         )}
         {plan.pricePrefix && <p className="text-xs font-semibold text-[#1A1A1A] mb-1">{plan.pricePrefix}</p>}
         {plan.price && (
            <div className="flex items-baseline gap-2 mb-0.5">
               <span className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight">{plan.price}</span>
               {plan.priceUnit && <span className="text-xs text-[#4A4A4A]">{plan.priceUnit}</span>}
            </div>
         )}
         {plan.priceSub && <p className="text-xs text-[#4A4A4A] mb-3">{plan.priceSub}</p>}
         <Button variant="secondary" size="sm" className="mt-3 w-full! whitespace-normal! leading-snug!" onClick={openCalendly}>
            {plan.cta}
         </Button>
      </div>
   </div>
)

export default PlanColumn

import Chip from '@/components/ui/Chip'
import { STEPS } from '../../../data/aiFrameworkData'
import ShapeEl from './ShapeEl'

const MobileLayout = () => (
  <div className="lg:hidden bg-[#FEF6F5]">
    <div className="px-6 pt-12 pb-8">
      <Chip className="mb-4 border border-[#ff4f00]">Our AI Automation Delivery Framework</Chip>
      <h2
        className="font-extrabold text-[#1A1A1A] leading-tight m-0 mb-3"
        style={{ fontSize: 'clamp(1.75rem, 7.5vw, 2.2rem)' }}
      >
        Effective automation follows a system.
      </h2>
      <p className="text-[#4A4A4A] leading-relaxed m-0 text-[0.88rem]">
        Without one, workflows become difficult to manage and hard to scale. We follow a proven,
        structured delivery framework designed to move from clarity to execution, while keeping
        outcomes and accountability front and center.
      </p>
    </div>

    {STEPS.map((step, i) => (
      <div
        key={step.num}
        className="relative overflow-hidden"
        style={{ minHeight: (i === 0 || i === 2) ? 600 : 500 }}
      >
        <div
          className="absolute top-2 left-3 select-none pointer-events-none z-0"
          style={{ fontSize: '42vw', fontWeight: 900, color: 'rgba(255,79,0,0.09)', lineHeight: 1 }}
        >
          {step.num}
        </div>

        <div
          className="absolute z-10"
          style={{ top: (i === 0 || i === 2) ? '15%' : '18%', left: '43%', right: '20px' }}
        >
          <h3
            className="font-bold text-[#1A1A1A] leading-snug m-0 mb-2.5"
            style={{ fontSize: 'clamp(1rem, 4.5vw, 1.2rem)' }}
          >
            {step.title}
          </h3>
          <p
            className="text-[#4A4A4A] leading-relaxed m-0"
            style={{ fontSize: 'clamp(0.78rem, 3.2vw, 0.88rem)' }}
          >
            {step.desc}
          </p>
        </div>

        <div
          className="absolute z-10 flex justify-center"
          style={{ bottom: 40, left: 0, right: 0 }}
        >
          <div style={{ width: '54vw', height: '54vw', maxWidth: 220, maxHeight: 220 }}>
            <ShapeEl index={i} uid="m" />
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default MobileLayout

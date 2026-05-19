import Chip from '@/components/ui/Chip'
import { STEPS } from '../../../data/aiFrameworkData'
import ShapeEl from './ShapeEl'

const MobileLayout = () => (
  <div className="lg:hidden bg-[#FEF6F5]">
    <div className="px-6 pt-12 pb-8">
      <Chip className="mb-4">How We Work</Chip>
      <h2
        className="text-[1.3rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-[#1A1A1A] leading-tight sm:leading-[1.12] m-0 mb-3"
        style={{ letterSpacing: '-0.03em' }}
      >
        We don't start by building. We start by listening.
      </h2>
      <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#4A4A4A] leading-relaxed m-0">
        Most automation projects fail because someone skipped the discovery. We've seen it enough times to know: the best-built workflow for the wrong problem is still a waste. Our process is designed to get the diagnosis right before a single trigger is written.
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

import { motion } from 'framer-motion'
import { testimonials } from '../../../data/testimonialsData'
import Chip from '@/components/ui/Chip'
import { Stars } from './TestimonialCard'
import MarqueeRow from './MarqueeRow'
import './testimonials.css'

const row1 = testimonials
const row2 = [...testimonials.slice(3), ...testimonials.slice(0, 3)]

const Testimonials = ({ heading }) => (
  <section
    className="relative w-full overflow-hidden py-24 sm:py-32"
    style={{ background: '#0C0C0C' }}
  >
    {/* Dot grid */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    />

    {/* Ambient glow */}
    <div
      className="absolute pointer-events-none"
      style={{
        top: '-5%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '900px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(232,92,65,0.09) 0%, transparent 65%)',
        filter: 'blur(60px)',
      }}
    />

    {/* Header */}
    <div className="relative max-w-7xl mx-auto px-6 xl:px-16 mb-14 sm:mb-16">
      <div className="flex flex-col items-center text-center gap-5">

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Chip style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.55)' }}>
            What our clients say
          </Chip>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold leading-[1.12]"
          style={{ letterSpacing: '-0.03em', color: '#fff' }}
        >
          {heading ?? (
            <><span style={{ color: '#E85C41' }}>"Genius"</span>{' '}automation consultants</>
          )}
        </motion.h2>

        {/* Rating + hint */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-2"
        >
          <div
            className="inline-flex items-center gap-3 px-4 py-2.5 rounded-md"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.09)',
            }}
          >
            <span className="font-black" style={{ fontSize: '1.1rem', color: '#fff', letterSpacing: '-0.03em' }}>
              5.0
            </span>
            <Stars color="#E85C41" size={12} />
            <span
              className="font-medium"
              style={{
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.38)',
                borderLeft: '1px solid rgba(255,255,255,0.1)',
                paddingLeft: '12px',
              }}
            >
              100+ verified reviews
            </span>
          </div>
        </motion.div>

      </div>
    </div>

    {/* Marquee rows */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.22 }}
      className="flex flex-col gap-4"
    >
      <MarqueeRow items={row1} direction="left" speed={0.7} />
      <div className="hidden sm:block">
        <MarqueeRow items={row2} direction="right" speed={0.6} />
      </div>
    </motion.div>
  </section>
)

export default Testimonials

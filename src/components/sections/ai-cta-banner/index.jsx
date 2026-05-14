import { motion } from 'framer-motion'
import bgFooter from '@assets/bg-footer.png'

const ease = [0.22, 1, 0.36, 1]

const AICTABanner = ({
  heading = "Ready to automate what's slowing you down?",
  buttonLabel = 'Book a Free Discovery Call',
  showSubtext = true,
  showImage = false,
}) => (
  <section className="relative overflow-hidden" style={{ background: '#ff4f00' }}>

    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 xl:px-16 py-16 sm:py-20">
      {!showImage && showSubtext && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-white/75 font-semibold text-[12px] tracking-widest uppercase m-0 mb-3"
        >
          Let's get to work
        </motion.p>
      )}

      {!showImage && (
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.07, ease }}
          className="font-extrabold text-white leading-[1.12] m-0 mb-8"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', maxWidth: 700 }}
        >
          {heading}
        </motion.h2>
      )}

      <motion.button
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.16, ease }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="
                  inline-flex items-center gap-1.5
                  px-3 py-1.5
                  sm:px-6 sm:py-3.5
                  rounded-md
                  font-bold
                  text-[11px] sm:text-[15px]
                  text-white
                  whitespace-nowrap
                  cursor-pointer
                 border-none
                "
        style={{ background: '#1a1a1a' }}
      >
        {buttonLabel}
      </motion.button>
    </div>

    {/* Right-side image (only when showImage=true) */}
    {showImage && (
      <img
        src={bgFooter}
        alt=""
        aria-hidden
        className="absolute top-0 right-0 bottom-0 pointer-events-none select-none"
        style={{
          width: '65%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'right top',
          zIndex: 0,
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 18%)',
        }}
      />
    )}
  </section>
)

export default AICTABanner

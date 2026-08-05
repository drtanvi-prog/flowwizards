import { motion } from 'framer-motion'
import bgFooter from '../../assets/bg-footer.png'
import { openCalendly } from '@/utils/calendly'


const FooterCTA = ({ heading, subtext, buttonText }) => (
   <section
      className="relative overflow-hidden"
      style={{ background: '#F07020' }}
   >
      <div className="relative z-10 max-w-360 mx-auto px-5 sm:px-8 xl:px-16 pt-10 pb-8 sm:pb-16" style={{ minHeight: '0' }}>
         <div className="max-w-lg">
            <motion.h2
               initial={{ opacity: 0, y: 24 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
               className="font-extrabold text-white mb-6 leading-[1.15]"
               style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.8rem)', letterSpacing: '-0.025em' }}
            >
               {heading}
            </motion.h2>

            <motion.p
               initial={{ opacity: 0, y: 16 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.55, delay: 0.1 }}
               className="text-white mb-8"
               style={{ fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.88 }}
            >
               {subtext}
            </motion.p>

            <motion.button
               initial={{ opacity: 0, y: 12 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.45, delay: 0.18 }}
               whileHover={{ scale: 1.03 }}
               whileTap={{ scale: 0.97 }}
               onClick={openCalendly}
               className="px-3 py-1.5 sm:px-6 sm:py-3.5 rounded-md font-bold text-white text-[11px] sm:text-[0.88rem] whitespace-nowrap hover:bg-[#E04200]! hover:text-white! transition-colors duration-200"
               style={{ background: '#1a1a1a', cursor: 'pointer', border: 'none' }}
            >
               {buttonText}
            </motion.button>
         </div>
      </div>

      {/* Mobile image - full width below text */}
      <div
         className="block sm:hidden w-full"
         style={{ height: '220px', overflow: 'hidden' }}
      >
         <img
            src={bgFooter}
            alt=""
            aria-hidden
            className="w-full h-full pointer-events-none select-none"
            style={{
               objectFit: 'cover',
               objectPosition: 'center top',
               WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)',
               maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)',
            }}
         />
      </div>

      {/* Desktop image - absolute right side */}
      <img
         src={bgFooter}
         alt=""
         aria-hidden
         className="hidden sm:block absolute top-0 right-0 bottom-0 pointer-events-none select-none"
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
   </section>
)

export default FooterCTA

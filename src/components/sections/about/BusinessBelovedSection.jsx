import { motion } from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import anim from '@assets/lottie/anim4.lottie'

const BusinessBelovedSection = () => (
   <section className="bg-white py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-16">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left — text */}
            <div className="text-center lg:text-left">
               <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="font-extrabold leading-[1.1] tracking-tight mb-4 sm:mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)' }}
               >
                  <span className="text-[#1A1A1A] line-through decoration-[3px]">
                     Just another agency
                  </span>
                  <br />
                  <span style={{ color: '#F07020' }}>Your automation partner</span>
               </motion.h2>

               <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.12 }}
                  className="text-[#4A4A4A] leading-relaxed mx-auto lg:mx-0 max-w-md"
                  style={{ fontSize: 'clamp(0.88rem, 1.5vw, 1.05rem)' }}
               >
                  From solo operators to scaling teams, our clients keep coming back because we don't just set things up and disappear — we build systems that genuinely change how work gets done.
               </motion.p>
            </div>

            {/* Right*/}
            <motion.div
               initial={{ opacity: 0, x: 28 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, delay: 0.1 }}
            >
               <div className="rounded-2xl bg-[#F0F5FF] overflow-hidden flex items-center justify-center mt-5 sm:mt-6">
                  <DotLottieReact src={anim} loop autoplay />
               </div>
            </motion.div>

         </div>
      </div>
   </section>
)

export default BusinessBelovedSection

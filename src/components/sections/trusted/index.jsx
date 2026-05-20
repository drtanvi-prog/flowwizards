import { motion } from 'framer-motion'
import PremiumQuoteStack from '../quotes'
import Chip from '@/components/ui/Chip'
import imgCashApp from '@assets/trusted-platform/cash-app.jpg'
import imgSodexo from '@assets/trusted-platform/sodexo.jpg'
import imgFullFocus from '@assets/trusted-platform/full-focus.jpg'
import imgIHeartMedia from '@assets/trusted-platform/iheart-media.jpg'
import imgDiscovery from "@assets/trusted-platform/discovery.jpg"

const brands = [
   { name: 'Cash App', img: imgCashApp },
   { name: 'Sodexo', img: imgSodexo },
   { name: 'Full Focus', img: imgFullFocus },
   { name: 'iHeart Media', img: imgIHeartMedia },
   { name: 'Discovery', img: imgDiscovery },
]

const ease = [0.22, 1, 0.36, 1]

const TrustedSection = ({ hideBottom = false }) => (
   <section className="w-full bg-white">

      {/* ── Logo bar ── */}
      <div className="w-full border-t border-gray-100 py-10 sm:py-14 px-5 sm:px-8 xl:px-16">
         <div className="max-w-360 mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16 lg:gap-x-20">
               {brands.map((brand, i) => (
                  <motion.img
                     key={brand.name}
                     src={brand.img}
                     alt={brand.name}
                     initial={{ opacity: 0, y: 8 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.4, delay: i * 0.06, ease }}
                     className="h-14 sm:h-18 lg:h-20 w-auto object-contain select-none
                        grayscale opacity-60 hover:grayscale-0 hover:opacity-100
                        transition-all duration-300 cursor-pointer"
                  />
               ))}
            </div>
         </div>
      </div>

      {/* {!hideBottom && (
         <>
            <div className="w-full border-t border-gray-100 py-10 sm:py-20 lg:py-24 px-4 sm:px-8 xl:px-16">
               <div className="max-w-360 mx-auto">

                  <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.4, ease }}
                     className="mb-3 sm:mb-4 flex justify-center"
                  >
                     <Chip>The problem</Chip>
                  </motion.div>

                  <div className="flex flex-col gap-5 max-w-3xl mx-auto text-center">

                     <motion.h3
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease }}
                        className="text-[1.3rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem]
                           font-extrabold text-[#1A1A1A] leading-[1.25] sm:leading-[1.12] m-0 text-balance"
                        style={{ letterSpacing: '-0.02em' }}
                     >
                        You know automation is no longer a nice-to-have
                     </motion.h3>

                     <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease }}
                        className="flex flex-col gap-4"
                     >
                        <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#555] leading-relaxed m-0">
                           If only you knew where to start. Worse still, all the apps that promised to
                           streamline your business only make things more complicated.
                        </p>
                        <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#555] leading-relaxed m-0">
                           The days of siloed processes, lost hours, and less-than-perfect customer
                           experiences are over.
                        </p>
                     </motion.div>

                  </div>
               </div>
            </div>

         </>
      )} */}
      <PremiumQuoteStack />

   </section>
)

export default TrustedSection

import { motion } from 'framer-motion'
import PremiumQuoteStack from '../quotes'
import imgCashApp from '../../../assets/trusted-platform/cash-app.jpg'
import imgSodexo from '../../../assets/trusted-platform/sodexo.jpg'
import imgFullFocus from '../../../assets/trusted-platform/full-focus.jpg'
import imgIHeartMedia from '../../../assets/trusted-platform/iheart-media.jpg'
import imgDiscovery from '../../../assets/trusted-platform/discovery.jpg'

const brands = [
   { name: 'Cash App', img: imgCashApp },
   { name: 'Sodexo', img: imgSodexo },
   { name: 'Full Focus', img: imgFullFocus },
   { name: 'iHeart Media', img: imgIHeartMedia },
   { name: 'Discovery', img: imgDiscovery },
]

const TrustedSection = () => (
   <section className="w-full flex flex-col items-center bg-white">

      {/* ── Logo bar ── */}
      <div className="w-full pt-10 pb-4 px-8 xl:px-16 border-t border-gray-100">
         <div className="max-w-360 mx-auto flex flex-col items-center gap-10">
            <motion.p
               initial={{ opacity: 0, y: 12 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
               className="text-[15px] sm:text-[17px] md:text-[20px] font-semibold tracking-widest text-[#1E1E1E]"
            >
               Trusted by big and small
            </motion.p>

            {/* Logos — desktop */}
            <div className="hidden md:flex items-center justify-center gap-14 lg:gap-20 w-full flex-wrap">
               {brands.map((brand, i) => (
                  <motion.div
                     key={brand.name}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                     whileHover={{ scale: 1.08 }}
                  >
                     <img
                        src={brand.img}
                        alt={brand.name}
                        className="h-28 w-auto object-contain select-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                     />
                  </motion.div>
               ))}
            </div>

            {/* Logos — mobile 2-col */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-8 w-full max-w-xs md:hidden">
               {brands.map((brand, i) => (
                  <motion.div
                     key={brand.name}
                     initial={{ opacity: 0, y: 16 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                     className="flex items-center justify-center"
                  >
                     <img
                        src={brand.img}
                        alt={brand.name}
                        className="h-20 w-auto object-contain select-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                     />
                  </motion.div>
               ))}
            </div>

         </div>
      </div>

      {/* ── Two-column copy ── */}
      <div className="w-full max-w-360 mx-auto flex flex-col md:flex-row items-start px-8 xl:px-16 pt-6 pb-6 md:pt-8 md:pb-10">

         <div className="w-full md:w-[55%] shrink-0 min-w-0">
            <h3
               className="text-[1.6rem] sm:text-[1.9rem] md:text-[3.2rem] lg:text-[3.8rem] xl:text-[4.2rem] font-bold text-[#1A1A1A] leading-[1.15] m-0"
               style={{ fontWeight: 800 }}
            >
               You know automation is no longer a nice-to-have
            </h3>
         </div>

         <div className="w-full md:flex-1 flex md:justify-end mt-8 md:mt-0">
            <div className="w-full max-w-xs">
               <p className="text-[15px] text-[#4A4A4A] leading-relaxed mb-5">
                  If only you knew where to start. Worse still, all the apps that promised to
                  streamline your business only make things more complicated.
               </p>
               <p className="text-[15px] text-[#4A4A4A] leading-relaxed m-0">
                  The days of siloed processes, lost hours, and less-than-perfect customer
                  experiences are over.
               </p>
            </div>
         </div>
      </div>

      {/* ── Quote stack ── */}
      <PremiumQuoteStack />

   </section>
)

export default TrustedSection

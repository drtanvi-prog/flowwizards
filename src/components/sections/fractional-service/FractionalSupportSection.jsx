import { motion } from 'framer-motion'
import Button from '../../ui/Button'

const FractionalSupportSection = () => {
   return (
      <section className="w-full bg-gradient-to-br from-[#1A1A1A] via-[#1E1E1E] to-[#0F0F0F] py-20 md:py-32 px-4 md:px-8 xl:px-16 relative overflow-hidden">
         {/* Subtle background pattern */}
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)',
               backgroundSize: '40px 40px'
            }} />
         </div>
         <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center px-4">
            <motion.h2
               initial={{ opacity: 0, x: -80 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
               className="text-white font-extrabold leading-tight mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
               Need automation <span className="text-orange-500">support ASAP</span>,<br />
               but not ready for a long-term<br />
               commitment?
            </motion.h2>
            <motion.div
               initial={{ opacity: 0, x: 80 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
               className="bg-[#181818] bg-opacity-90 rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-xl border border-orange-900/20 mx-auto"
            >
               <p className="text-white text-base md:text-lg mb-6">
                  Hey, we get it. Maybe your automation wishlist is limited in scope—or you want to get your feet wet before diving in headfirst. We've got your back with our <a href="#" className="underline text-orange-400 hover:text-orange-500 transition">hourly packages</a>. You'll get the same high-level automation support from our team of experts, just with a cap on the hours.
               </p>
               <Button
                  variant="primary"
                  size="md"
                  className="text-base px-6 py-2 font-semibold bg-orange-500 hover:bg-orange-600 border-0"
               >
                  Explore Other Packages
               </Button>
            </motion.div>
         </div>
      </section>
   )
}

export default FractionalSupportSection

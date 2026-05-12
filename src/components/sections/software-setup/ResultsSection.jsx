import React from 'react';
import { motion } from 'framer-motion';
import {
   Rocket,
   RefreshCcw,
   HeartHandshake,
   Lock,
   ShieldCheck,
   BarChart2,
   FileCheck,
   TrendingUp,
} from 'lucide-react';

const iconClass = "text-[#FF8800]";

/* Animation Variants */
const containerVariants = {
   hidden: {},
   show: {
      transition: {
         staggerChildren: 0.12,
      },
   },
};

const cardVariants = {
   hidden: {
      opacity: 0,
      y: 40,
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.7,
         ease: [0.22, 1, 0.36, 1],
      },
   },
};

const headingVariants = {
   hidden: {
      opacity: 0,
      y: 40,
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.8,
         ease: [0.22, 1, 0.36, 1],
      },
   },
};

const results = [
   {
      icon: <Rocket size={16} strokeWidth={2.3} className={iconClass} />,
      title: 'Boost employee productivity',
   },
   {
      icon: <RefreshCcw size={16} strokeWidth={2.3} className={iconClass} />,
      title: 'Streamline operations',
   },
   {
      icon: <HeartHandshake size={16} strokeWidth={2.3} className={iconClass} />,
      title: 'Improve customer satisfaction',
   },
   {
      icon: <Lock size={16} strokeWidth={2.3} className={iconClass} />,
      title: 'Enhance data security',
   },
   {
      icon: <ShieldCheck size={16} strokeWidth={2.3} className={iconClass} />,
      title: 'Reduce errors and redundancies',
   },
   {
      icon: <BarChart2 size={16} strokeWidth={2.3} className={iconClass} />,
      title: 'Boost lead conversion',
   },
   {
      icon: <FileCheck size={16} strokeWidth={2.3} className={iconClass} />,
      title: 'Ensure regulatory compliance',
   },
   {
      icon: <TrendingUp size={16} strokeWidth={2.3} className={iconClass} />,
      title: 'Increase revenue',
   },
];

const ResultsSection = () => {
   return (
      <section className="w-full py-14 md:py-20 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

            {/* Heading */}
            <motion.h2
               variants={headingVariants}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.3 }}
               className="
                  text-[1.5rem]
                  sm:text-[2.5rem]
                  md:text-[3rem]
                  font-extrabold
                  leading-[0.95]
                  tracking-[-0.04em]
                  text-[#1b1b1b]
                  max-w-6xl
                  mb-10
                  md:mb-16
               "
            >
               Results our clients have seen with our software setup
            </motion.h2>

            {/* Cards Grid */}
            {/* Cards Grid */}
            <motion.div
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.15 }}
               variants={{
                  hidden: {},
                  show: {
                     transition: {
                        staggerChildren: 0.12,
                     },
                  },
               }}
               className="
      grid
      grid-cols-2
      sm:grid-cols-2
      lg:grid-cols-4
      gap-3
      md:gap-5
   "
            >

               {results.map((item, i) => (
                  <motion.div
                     key={i}
                     variants={{
                        hidden: {
                           opacity: 0,
                           scale: 0.75,
                           rotate: -8,
                           y: 80,
                           filter: "blur(10px)",
                        },
                        show: {
                           opacity: 1,
                           scale: 1,
                           rotate: 0,
                           y: 0,
                           filter: "blur(0px)",
                           transition: {
                              duration: 0.9,
                              ease: [0.16, 1, 0.3, 1],
                           },
                        },
                     }}
                     whileHover={{
                        y: -10,
                        scale: 1.03,
                        rotate: -1,
                        transition: {
                           duration: 0.3,
                        },
                     }}
                     className="
            relative
            overflow-hidden
            group
            border
            border-[#b8b8b8]
            rounded-[20px]
            bg-white
            min-h-[150px]
            md:h-[170px]
            px-6
            md:px-8
            py-6
            md:py-7
            flex
            flex-col
            transition-all
            duration-300
            hover:shadow-[0_20px_50px_rgba(255,136,0,0.12)]
            hover:border-[#FF8800]
         "
                  >

                     {/* Animated Glow */}
                     <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.35 }}
                        className="
               absolute
               inset-0
               bg-gradient-to-br
               from-[#FFF4E8]
               via-transparent
               to-[#FFF8F0]
               pointer-events-none
            "
                     />

                     {/* Floating Background Circle */}
                     <motion.div
                        animate={{
                           y: [0, -8, 0],
                        }}
                        transition={{
                           duration: 4,
                           repeat: Infinity,
                           ease: "easeInOut",
                        }}
                        className="
               absolute
               -right-8
               -top-8
               w-24
               h-24
               rounded-full
               bg-[#FFF4E8]
               opacity-40
            "
                     />

                     {/* Icon */}
                     <motion.div
                        whileHover={{
                           scale: 1.18,
                           rotate: 10,
                        }}
                        transition={{
                           type: "spring",
                           stiffness: 300,
                        }}
                        className="
               relative
               z-10
               w-8
               h-8
               rounded-md
               bg-[#FFF3E6]
               flex
               items-center
               justify-center
               mb-6
               md:mb-8
            "
                     >
                        {item.icon}
                     </motion.div>

                     {/* Title */}
                     <motion.h3
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                           delay: 0.2 + i * 0.05,
                           duration: 0.5,
                        }}
                        className="
               relative
               z-10
               text-[1rem]
               sm:text-[1.15rem]
               leading-[1.3]
               font-medium
               text-[#202020]
               tracking-[-0.02em]
               max-w-[220px]
            "
                     >
                        {item.title}
                     </motion.h3>

                  </motion.div>
               ))}

            </motion.div>

            {/* Bottom CTA */}
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
               }}
               className="mt-20 md:mt-28 max-w-5xl"
            >

               <h3
                  className="
                     text-[2rem]
                     sm:text-[3rem]
                     md:text-4xl
                     font-extrabold
                     leading-[1.05]
                     tracking-[-0.04em]
                     text-[#1b1b1b]
                     mb-8
                     md:mb-10
                  "
               >
                  How can software setup accelerate your business? Get in touch and let’s find out.
               </h3>

               <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="
                     inline-flex
                     items-center
                     gap-3
                     text-lg
                     md:text-xl
                     font-semibold
                     text-[#222]
                     hover:text-[#FF8800]
                     transition-colors
                  "
               >
                  Book a discovery call
                  <span>→</span>
               </motion.a>

            </motion.div>

         </div>
      </section>
   );
};

export default ResultsSection;
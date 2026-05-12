import React from 'react';
import { motion } from 'framer-motion';
import {
   Check
} from 'lucide-react';

const features = [
   {
      iconBg: 'bg-[#FFE5E8]',
      iconColor: 'text-[#F43F5E]',
      border: 'border-[#F43F5E]',
      title: 'We integrate and optimize for your specific needs',
      question: '"Will the new software really fit into our current workflow?"',
      answer:
         'Absolutely. We tailor the setup to your unique business processes, ensuring a seamless fit that enhances productivity with minimal disruption and secure data migration.',
   },
   {
      iconBg: 'bg-[#FFF1D9]',
      iconColor: 'text-[#F59E0B]',
      border: 'border-[#F59E0B]',
      title: 'We teach you to use it confidently',
      question: '"I’m worried my team won’t adapt to the new software."',
      answer:
         'We provide hands-on training and clear documentation so your team feels confident using every tool effectively from day one.',
   },
   {
      iconBg: 'bg-[#EEF2C7]',
      iconColor: 'text-[#7A8500]',
      border: 'border-[#7A8500]',
      title: 'We ensure your long-term success',
      question: '"What if we encounter issues after the setup?"',
      answer:
         'Our support continues after launch with ongoing assistance, optimization guidance, and maintenance options to keep everything running smoothly.',
   },
];

const cardVariants = {
   hidden: {
      opacity: 0,
      y: 40,
   },
   visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
         delay: i * 0.15,
         duration: 0.7,
         ease: [0.22, 1, 0.36, 1],
      },
   }),
};

const PremiumFeatureSection = () => {
   return (
      <section className="w-full py-8 md:py-20 bg-white overflow-hidden">

         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

            <motion.h2
               initial={{ opacity: 0, y: 24 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
               className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center mb-6 text-[#181818]"
               style={{ letterSpacing: '-0.02em' }}
            >
               We don’t just set and forget
            </motion.h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

               {features.map((f, i) => (
                  <motion.div
                     key={i}
                     custom={i}
                     variants={cardVariants}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.2 }}
                     whileHover={{
                        y: -8,
                     }}
                     transition={{ duration: 0.3 }}
                     className={`
                        rounded-[22px]
                        border-[3px]
                        ${f.border}
                        bg-white
                        p-6
                        md:p-8
                        min-h-[430px]
                        transition-all
                        duration-300
                     `}
                  >

                     {/* Top Icon */}
                     <div
                        className={`
                           w-12
                           h-12
                           rounded-full
                           flex
                           items-center
                           justify-center
                           mb-8
                           ${f.iconBg}
                        `}
                     >
                        <Check
                           size={20}
                           strokeWidth={3}
                           className={f.iconColor}
                        />
                     </div>

                     {/* Title */}
                     <h3
                        className="
                           text-[1.2rem]
                           sm:text-[1.8rem]
                           md:text-[2rem]
                           font-bold
                           leading-[1.12]
                           tracking-[-0.03em]
                           text-[#111]
                           mb-8
                        "
                     >
                        {f.title}
                     </h3>

                     {/* Question */}
                     <p
                        className="
                           text-[0.8rem]
                           md:text-[1.08rem]
                           leading-[1.7]
                           text-[#111]
                           mb-8
                        "
                     >
                        {f.question}
                     </p>

                     {/* Answer */}
                     <p
                        className="
                           text-[0.9rem]
                           md:text-[1.05rem]
                           leading-[1.9]
                           text-[#222]
                           opacity-90
                        "
                     >
                        {f.answer}
                     </p>

                  </motion.div>
               ))}

            </div>

         </div>

      </section>
   );
};

export default PremiumFeatureSection;
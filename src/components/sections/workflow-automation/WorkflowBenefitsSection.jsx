import React from "react";
import { motion } from "framer-motion";
import {
   Rocket,
   FileCheck,
   Users,
   BarChart2,
   Settings2,
   ThumbsUp,
} from "lucide-react";

const iconClass = "text-[#FF8800]";

const workflowBenefits = [
   {
      icon: (
         <Rocket
            size={18}
            strokeWidth={2.2}
            className={iconClass}
         />
      ),
      title: "Remove bottlenecks that slow teams down",
      desc:
         "By triggering actions automatically and eliminating unnecessary handoffs, work moves forward without waiting on people to push it along.",
   },
   {
      icon: (
         <FileCheck
            size={18}
            strokeWidth={2.2}
            className={iconClass}
         />
      ),
      title: "Eliminate manual errors and improve accuracy",
      desc:
         "Manual processes lead to missed steps and outdated data. Automated workflows ensure work is completed consistently across systems.",
   },
   {
      icon: (
         <ThumbsUp
            size={18}
            strokeWidth={2.2}
            className={iconClass}
         />
      ),
      title: "Do more with less",
      desc:
         "Automation reduces the amount of hands-on work required to run your business while handling more volume with less effort.",
   },
   {
      icon: (
         <Settings2
            size={18}
            strokeWidth={2.2}
            className={iconClass}
         />
      ),
      title: "Integrate with your existing tools",
      desc:
         "Let data flow automatically between your tools and systems, reducing duplicated effort and improving visibility.",
   },
   {
      icon: (
         <BarChart2
            size={18}
            strokeWidth={2.2}
            className={iconClass}
         />
      ),
      title: "Turn data into actionable insights",
      desc:
         "Track activity, performance, and outcomes with cleaner data and real-time updates for better business decisions.",
   },
   {
      icon: (
         <Users
            size={18}
            strokeWidth={2.2}
            className={iconClass}
         />
      ),
      title: "Improve the employee experience",
      desc:
         "By removing repetitive tasks, employees can focus on meaningful work with higher productivity and less frustration.",
   },
];

/* Faster + Premium Animation */
const containerVariants = {
   hidden: {},
   show: {
      transition: {
         staggerChildren: 0.06,
      },
   },
};

const WorkflowBenefitsSection = () => {
   return (
      <section className="w-full py-14 md:py-20 bg-white overflow-hidden">

         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

            {/* Small Intro */}
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{
                  duration: 0.5,
               }}
               className="
                  text-[1rem]
                  sm:text-[1.15rem]
                  md:text-[1.35rem]
                  font-semibold
                  leading-[1.5]
                  text-[#222]
                  max-w-5xl
                  mb-5
                  "
            >
               Workflow automation helps businesses automate and streamline
               manual, repetitive processes so work flows automatically between
               your tools, teams, and systems.
            </motion.p>

            {/* Heading */}
            <motion.h2
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{
                  duration: 0.6,
               }}
               className="
                  text-[1.5rem]
                  sm:text-[2.8rem]
                  md:text-[4rem]
                  lg:text-[4rem]
                  font-extrabold
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-[#1b1b1b]
                  max-w-5xl
                  mb-10
                  md:mb-14
                  "
            >
               How can workflow automation services help me?
            </motion.h2>

            {/* Cards */}
            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.1 }}
               className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-4
                  gap-4
                  md:gap-5
                  "
            >

               {workflowBenefits.map((item, i) => (
                  <motion.div
                     key={i}
                     variants={{
                        hidden: {
                           opacity: 0,
                           y: 50,
                           scale: 0.92,
                        },

                        show: {
                           opacity: 1,
                           y: 0,
                           scale: 1,

                           transition: {
                              duration: 0.5,
                              ease: [0.16, 1, 0.3, 1],
                           },
                        },
                     }}
                     whileHover={{
                        y: -8,
                        rotateX: 4,
                        rotateY: -4,
                        scale: 1.02,
                        transition: {
                           duration: 0.22,
                        },
                     }}
                     style={{
                        transformStyle: "preserve-3d",
                     }}
                     className="
                              relative
                              overflow-hidden
                              group
                              border
                              border-[#cfcfcf]
                              rounded-[22px]
                              bg-white
                              min-h-[290px]
                              md:min-h-[320px]
                              px-5
                              md:px-7
                              py-5
                              md:py-7
                              flex
                              flex-col
                              transition-all
                              duration-300
                              hover:border-[#FF8800]
                              hover:shadow-[0_25px_80px_rgba(255,136,0,0.16)]
                              "
                  >

                     {/* Animated Beam */}
                     <motion.div
                        animate={{
                           x: ["-120%", "220%"],
                        }}
                        transition={{
                           duration: 2.8,
                           repeat: Infinity,
                           ease: "linear",
                        }}
                        className="
                              absolute
                              top-0
                              left-0
                              w-[40%]
                              h-full
                              bg-gradient-to-r
                              from-transparent
                              via-white/50
                              to-transparent
                              skew-x-[-20deg]
                              pointer-events-none
                              "
                     />

                     {/* Glow Blob */}
                     <motion.div
                        animate={{
                           scale: [1, 1.15, 1],
                           opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                           duration: 5,
                           repeat: Infinity,
                           ease: "easeInOut",
                        }}
                        className="
                           absolute
                           -top-10
                           -right-10
                           w-32
                           h-32
                           rounded-full
                           bg-[#FFE7CC]
                           blur-3xl
                           "
                     />

                     {/* Hover Overlay */}
                     <div
                        className="
                              absolute
                              inset-0
                              opacity-0
                              group-hover:opacity-100
                              bg-gradient-to-br
                              from-[#FFF6EC]
                              via-transparent
                              to-[#FFF3E5]
                              transition-opacity
                              duration-300
                              "
                     />

                     {/* Icon */}
                     <motion.div
                        whileHover={{
                           scale: 1.18,
                           y: -2,
                        }}
                        transition={{
                           type: "spring",
                           stiffness: 300,
                        }}
                        className="
                              relative
                              z-10
                              w-11
                              h-11
                              rounded-xl
                              bg-[#FFF3E6]
                              flex
                              items-center
                              justify-center
                              mb-6
                              shadow-sm
                              "
                     >
                        {item.icon}
                     </motion.div>

                     {/* Title */}
                     <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                           delay: 0.1,
                           duration: 0.35,
                        }}
                        className="
                              relative
                              z-10
                              text-[1.2rem]
                              sm:text-[1.2rem]
                              md:text-[1.35rem]
                              leading-[1.35]
                              font-semibold
                              text-[#202020]
                              tracking-[-0.02em]
                              mb-5
                           "
                     >
                        {item.title}
                     </motion.h3>

                     {/* Description */}
                     <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                           delay: 0.16,
                           duration: 0.35,
                        }}
                        className="
                              relative
                              z-10
                              text-[0.75rem]
                              sm:text-[1rem]
                              md:text-[1.02rem]
                              leading-[1.8]
                              text-[#555]
                           "
                     >
                        {item.desc}
                     </motion.p>

                     {/* Bottom Accent Line */}
                     <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{
                           delay: 0.2,
                           duration: 0.5,
                        }}
                        className="
                                 absolute
                                 bottom-0
                                 left-0
                                 h-[3px]
                                 bg-gradient-to-r
                                 from-[#FF8800]
                                 to-[#FFC27A]
                              "
                     />

                  </motion.div>
               ))}

            </motion.div>

         </div>

      </section>
   );
};

export default WorkflowBenefitsSection;
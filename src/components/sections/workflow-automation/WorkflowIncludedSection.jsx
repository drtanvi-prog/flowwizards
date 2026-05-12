import React from "react";
import { motion } from "framer-motion";

const workflowSteps = [
   {
      title: "Workflow audit & process mapping",
      desc: "We map your current workflows, tools, and handoffs to surface bottlenecks and build a clear automation backlog.",
      deliverable: "Deliverable(s): Process maps; Prioritized automation backlog",
      border: "border-[#F43F5E]",
      bg: "",
   },
   {
      title: "Automation strategy & design",
      desc: "We prioritize what to automate first, define the logic and exceptions, and sequence the work so nothing breaks downstream.",
      deliverable: "Deliverable: Automation Roadmap",
      border: "border-[#F6A700]",
      bg: "",
   },
   {
      title: "Automation Build",
      desc: "We design and implement workflows using no-code, low-code, or API-based integrations across your tools.",
      deliverable: "",
      border: "border-[#7A8500]",
      bg: "",
   },
   {
      title: "Testing, QA & monitoring",
      desc: "We put safeguards in place so failures, errors, or data issues are flagged early instead of breaking quietly in the background.",
      deliverable: "",
      border: "border-[#F43F5E]",
      bg: "",
   },
   {
      title: "Documentation & team handoff",
      desc: "We document every workflow and walk your team through how it works, what triggers it, and what to check if something breaks.",
      deliverable: "",
      border: "border-[#F6A700]",
      bg: "",
   },
   {
      title: "Ongoing maintenance & optimization",
      desc: "We maintain and refine automations as tools, processes, and requirements change.",
      deliverable: "",
      border: "border-[#7A8500]",
      bg: "",
   },
];

const cardVariants = {
   hidden: { opacity: 0, y: 40, scale: 0.97 },
   visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
         delay: i * 0.09,
         duration: 0.7,
         ease: [0.22, 1, 0.36, 1],
      },
   }),
};

const WorkflowIncludedSection = () => (
   <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
         <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10 md:mb-14 text-[#181818]"
            style={{ letterSpacing: "-0.03em" }}
         >
            What's included in our workflow automation services
         </motion.h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {workflowSteps.map((item, i) => (
               <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  className={`relative rounded-2xl border-2 ${item.border} shadow-md p-7 md:p-8 flex flex-col transition-all duration-300 group hover:shadow-xl hover:scale-[1.025]`}
               >
                  <h3 className="font-bold text-lg md:text-xl text-[#181818] mb-3 leading-snug">{item.title}</h3>
                  <p className="text-base md:text-[1.07rem] text-[#444] opacity-90 leading-relaxed mb-2">{item.desc}</p>
                  {item.deliverable && (
                     <p className="text-xs md:text-sm text-[#222] font-semibold mt-2 opacity-80">{item.deliverable}</p>
                  )}
               </motion.div>
            ))}
         </div>
      </div>
   </section>
);

export default WorkflowIncludedSection;

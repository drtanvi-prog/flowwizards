import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
   {
      question: "What types of automations are included?",
      answer:
         "We handle all types of automations-from streamlining workflows and integrating CRMs to enhancing marketing efforts and managing data. Have a specific requirement? We can explore it during your consultation.",
   },
   {
      question: "How fast do you solve requests?",
      answer:
         "Our global team operates across time zones to address your requests within two business days. Quick and effective support is our commitment.",
   },
   {
      question:
         "Is there a limit to how many automation tasks you can handle each month?",
      answer:
         "Absolutely not! We are here to support your growth without any limits on the number of automations. We handle tasks one at a time to ensure thoroughness and quality.",
   },
   {
      question: "How does billing work?",
      answer:
         "Our billing is simple and predictable. You'll pay a fixed monthly fee for full access to our services, with no hidden costs. We support several payment methods including credit card, debit card, and ACH, all billed automatically each month.",
   },
];

const FAQCreativeSection = () => {
   const [open, setOpen] = useState(null);

   const toggleAccordion = (idx) => {
      setOpen(open === idx ? null : idx);
   };

   return (
      <section className="w-full py-20 md:py-24 bg-white">
         <div className="max-w-4xl mx-auto px-4 md:px-0">
            <motion.h2
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
               className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 md:mb-12 text-gray-900"
            >
               Your questions, answered
            </motion.h2>

            <div className="flex flex-col gap-4">
               {faqs.map((faq, idx) => {
                  const isOpen = open === idx;

                  return (
                     <motion.div
                        key={idx}
                        layout
                        transition={{
                           layout: {
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                           },
                        }}
                        className={`rounded-2xl border overflow-hidden cursor-pointer shadow-sm ${isOpen
                           ? "border-orange-300 bg-orange-50"
                           : "border-orange-200 bg-white"
                           }`}
                     >
                        <button
                           onClick={() => toggleAccordion(idx)}
                           className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                        >
                           <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                              {faq.question}
                           </span>

                           <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                           >
                              <ChevronDown className="text-orange-500" />
                           </motion.div>
                        </button>

                        <motion.div
                           initial={false}
                           animate={{
                              height: isOpen ? "auto" : 0,
                              opacity: isOpen ? 1 : 0,
                           }}
                           transition={{
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                           }}
                           className="overflow-hidden"
                        >
                           <div className="px-6 pb-5">
                              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                 {faq.answer}
                              </p>
                           </div>
                        </motion.div>
                     </motion.div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default FAQCreativeSection;
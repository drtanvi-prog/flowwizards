import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const tools = [
   { name: 'Zapier', logo: '/src/assets/software/s2.svg' },
   { name: 'HubSpot', logo: '/src/assets/software/s3.webp' },
   { name: 'Pipedrive', logo: '/src/assets/software/s4.webp' },
   { name: 'Airtable', logo: '/src/assets/software/s5.webp' },
   { name: 'Jotform', logo: '/src/assets/software/s6.webp' },
   { name: 'n8n', logo: '/src/assets/software/s7.webp' },
   { name: 'Monday.com', logo: '/src/assets/software/monday.svg' },
   { name: 'Gumloop', logo: '/src/assets/software/Gumloop.svg' },
];

const faqs = [
   {
      q: "What types of workflows can you automate?",
      a: "We can automate sales, marketing, support, operations, and more—across nearly any business tool or platform.",
   },
   {
      q: "Which tools do you work with?",
      a: "We work with 100+ leading SaaS tools, including Zapier, HubSpot, Airtable, n8n, and more.",
   },
   {
      q: "Do you offer ongoing support?",
      a: "Yes! We provide ongoing support, optimization, and maintenance for all automations we build.",
   },
   {
      q: "How fast can you start?",
      a: "We can typically start within a week, depending on your requirements.",
   },
   {
      q: "How do you handle security and access?",
      a: "We use secure, best-practice methods for all integrations and never store your credentials.",
   },
   {
      q: "What’s the difference between workflow automation and BPA?",
      a: "Workflow automation focuses on automating specific processes, while BPA (Business Process Automation) is a broader approach to automating entire business operations.",
   },
];

const ease = [0.22, 1, 0.36, 1];

export function ToolsWeAutomate() {
   return (
      <section className="py-14 md:py-20 bg-white text-center">
         <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold mb-2">Our specialists build high-impact workflow automations across nearly 100 of the leading business tools and platforms, including:</h2>
            <div className="font-bold text-base xs:text-lg md:text-xl mb-6 mt-2">Tools We Automate</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-10 items-center justify-center">
               {tools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center">
                     <img src={tool.logo} alt={tool.name} className="h-7 xs:h-8 md:h-10 mb-1.5 sm:mb-2" />
                     <span className="font-semibold text-xs xs:text-sm sm:text-base text-[#222]">{tool.name}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export function WorkflowFAQ() {
   const [active, setActive] = useState(null);
   const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);

   useEffect(() => {
      const mq = window.matchMedia("(max-width: 1023px)");
      const handler = (e) => setIsMobile(e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
   }, []);

   return (
      <section className="py-14 md:py-20 bg-white">
         <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10">Workflow Automation Services FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {faqs.map((faq, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 28 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: i * 0.06, ease }}
                     className="border rounded-xl p-5 bg-white shadow-sm"
                  >
                     <button
                        className="w-full text-left font-semibold text-lg flex justify-between items-center focus:outline-none"
                        onClick={() => setActive(active === i ? null : i)}
                        aria-expanded={active === i}
                     >
                        {faq.q}
                        <span className="ml-2 text-xl">{active === i ? '−' : '+'}</span>
                     </button>
                     <div
                        className={`overflow-hidden transition-all duration-300 ${active === i ? 'max-h-40 mt-3' : 'max-h-0'}`}
                        aria-hidden={active !== i}
                     >
                        <div className="text-base text-[#444]">{faq.a}</div>
                     </div>
                  </motion.div>
               ))}
            </div>
            <div className="text-center mt-10">
               <a href="#" className="font-semibold text-[#ff4f00] hover:underline text-lg inline-flex items-center gap-1 transition-colors">
                  Book a Free Discovery Call <span aria-hidden>→</span>
               </a>
            </div>
         </div>
      </section>
   );
}

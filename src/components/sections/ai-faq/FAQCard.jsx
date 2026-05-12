import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1]

function FAQCard({ faq, isOpen, isMirror, onClick, color }) {
  const expanded = isOpen || isMirror;

  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(0,0,0,0.07)' }}
      transition={{ duration: 0.22 }}
      className={`h-full rounded-2xl border p-7 cursor-pointer transition-colors duration-300 ${color}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-5">
        <h3 className="text-[18px] sm:text-[20px] leading-[1.35] font-bold text-black max-w-[85%]">
          {faq.question}
        </h3>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease }}
          className="min-w-[40px] h-[40px] rounded-full border-2 border-black flex items-center justify-center shrink-0"
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>

      <div
        className={`grid ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        style={{
          transitionProperty: "grid-template-rows, margin-top",
          transitionDuration: "0.38s",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          marginTop: expanded ? 20 : 0,
        }}
      >
        <div className="overflow-hidden">
          <motion.p
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.22, delay: isOpen ? 0.18 : 0, ease: "easeInOut" }}
            className="text-[15px] sm:text-[16px] leading-[1.7] text-[#3d3d3d]"
          >
            {faq.answer}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default FAQCard;

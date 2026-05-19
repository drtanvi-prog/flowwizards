import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Chip from "@/components/ui/Chip";

const ease = [0.22, 1, 0.36, 1];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease },
});

const DEFAULT_COLORS = [
  { bg: "#FFF5F0", border: "#ff9aaa" },
  { bg: "#FFFBEB", border: "#b5c86a" },
  { bg: "#FFF7ED", border: "#f5d5b0" },
  { bg: "#F7FEE7", border: "#b5c86a" },
];

/**
 * TwoColumnFAQ
 *
 * Props:
 *   faqs        — array of { q, a }
 *   chip        — string label for the chip badge
 *   heading     — heading text / node
 *   subheading  — subheading text / node
 *   chipStyle   — optional style object for Chip
 *   colors      — optional array of { bg, border } (cycles through)
 *   className   — optional extra class on <section>
 */
export default function TwoColumnFAQ({
  faqs,
  chip = "Frequently Asked Questions",
  heading = "FAQs",
  subheading,
  chipStyle,
  colors = DEFAULT_COLORS,
  className = "",
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const leftCol = faqs.filter((_, i) => i % 2 === 0);
  const rightCol = faqs.filter((_, i) => i % 2 === 1);

  const renderCard = (faq, colIndex) => {
    const i = faqs.indexOf(faq);
    const color = colors[colIndex % colors.length];
    const isOpen = openIndex === i;

    return (
      <motion.div
        key={i}
        {...fadeUp(i * 0.05)}
        className="rounded-2xl border-2 overflow-hidden cursor-pointer"
        style={{ borderColor: color.border, background: color.bg }}
      >
        <button
          onClick={() => setOpenIndex(isOpen ? null : i)}
          className="w-full flex items-start gap-4 p-6 text-left cursor-pointer"
        >
          <p className="flex-1 font-bold text-[#1A1A1A] text-sm sm:text-base leading-snug m-0">
            {faq.q}
          </p>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease }}
            className="shrink-0 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center mt-0.5"
          >
            <ChevronDown size={16} className="text-[#1A1A1A]" strokeWidth={2} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <div className="h-px mb-4" style={{ background: color.border }} />
                <p className="text-sm sm:text-[15px] text-[#444] leading-relaxed m-0">{faq.a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section className={`bg-white py-16 sm:py-20 lg:py-28 px-6 sm:px-10 xl:px-16 ${className}`}>
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <motion.div {...fadeUp(0)} className="mb-4">
            <Chip style={chipStyle}>{chip}</Chip>
          </motion.div>

          <motion.h2
            {...fadeUp(0.07)}
            className="font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-4 text-[1.8rem] sm:text-[2.5rem] lg:text-[3.5rem]"
          >
            {heading}
          </motion.h2>

          {subheading && (
            <motion.p {...fadeUp(0.12)} className="text-[#666] text-sm sm:text-base max-w-2xl">
              {subheading}
            </motion.p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
          <div className="flex-1 w-full flex flex-col gap-4 sm:gap-5">
            {leftCol.map((faq, j) => renderCard(faq, j * 2))}
          </div>
          <div className="flex-1 w-full flex flex-col gap-4 sm:gap-5">
            {rightCol.map((faq, j) => renderCard(faq, j * 2 + 1))}
          </div>
        </div>

      </div>
    </section>
  );
}

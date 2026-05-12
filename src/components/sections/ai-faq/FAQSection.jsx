import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { faqData } from "../../../data/aiFaqSectionData";
import FAQCard from "./FAQCard";

const ease = [0.22, 1, 0.36, 1]

const leftFaqs = faqData.filter((item) => item.side === "left");
const rightFaqs = faqData.filter((item) => item.side === "right");

const LEFT_COLORS = ["border-[#ff4f00] bg-[#FFF5F0]", "border-[#f59e0b] bg-[#FFFBEB]"];
const RIGHT_COLORS = ["border-[#fb923c] bg-[#FFF7ED]", "border-[#84cc16] bg-[#F7FEE7]"];

const rows = Math.max(leftFaqs.length, rightFaqs.length);

export default function FAQSection() {
  const [activeRow, setActiveRow] = useState(null);
  const [activeSide, setActiveSide] = useState(null);
  const [activeMobileId, setActiveMobileId] = useState(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleClick = (row, side) => {
    if (activeRow === row && activeSide === side) {
      setActiveRow(null);
      setActiveSide(null);
    } else {
      setActiveRow(row);
      setActiveSide(side);
    }
  };

  const handleMobileClick = (id) => {
    setActiveMobileId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-10 lg:py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="text-[2rem] lg:text-[70px] leading-none font-black tracking-tight text-black m-0">
              FAQs
            </h2>
          </motion.div>
          <div className="hidden lg:block h-[90px]" />
        </div>

        <div className="mt-8 lg:ml-[232px] flex flex-col gap-6">
          {Array.from({ length: rows }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
            >
              {leftFaqs[i] ? (
                <FAQCard
                  faq={leftFaqs[i]}
                  isOpen={isMobile ? activeMobileId === leftFaqs[i].id : activeRow === i && activeSide === "left"}
                  isMirror={isMobile ? false : activeRow === i && activeSide === "right"}
                  onClick={isMobile ? () => handleMobileClick(leftFaqs[i].id) : () => handleClick(i, "left")}
                  color={LEFT_COLORS[i % LEFT_COLORS.length]}
                />
              ) : (
                <div />
              )}

              {rightFaqs[i] ? (
                <FAQCard
                  faq={rightFaqs[i]}
                  isOpen={isMobile ? activeMobileId === rightFaqs[i].id : activeRow === i && activeSide === "right"}
                  isMirror={isMobile ? false : activeRow === i && activeSide === "left"}
                  onClick={isMobile ? () => handleMobileClick(rightFaqs[i].id) : () => handleClick(i, "right")}
                  color={RIGHT_COLORS[i % RIGHT_COLORS.length]}
                />
              ) : (
                <div />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

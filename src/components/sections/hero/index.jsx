import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
// import { Cursor } from "./HeroCursors";
import { HWord } from "./HeroHeading";
import "./hero.css";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0, distance = 32) => ({
  initial: { opacity: 0, y: distance },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease },
});

const stats = [
  { value: "500+", label: "5-star reviews" },
  { value: "2,400+", label: "Workflows built" },
  { value: "18 hrs", label: "Saved per week" },
];

const Hero = () => {
  const sectionRef = useRef(null);
  const bizRef = useRef(null);
  const eveRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FEF6F5] relative overflow-hidden flex items-center justify-center
        px-5 sm:px-10 xl:px-16
        min-h-[calc(100vh-80px)] xl:min-h-[calc(100vh-100px)]
        py-16 sm:py-20"
    >
      {/* Blobs */}
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[560px] h-[320px] bg-[#ff4f00]/6 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4  w-56 h-56 bg-[#ff4f00]/5 rounded-full blur-[70px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-[#ff4f00]/5 rounded-full blur-[70px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#ff4f00 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#FEF6F5] via-transparent to-[#FEF6F5]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#FEF6F5] via-transparent to-[#FEF6F5]" />

      {/* Cursors — desktop only */}
      {/* <Cursor id="ruben" color="#ff4f00" name="Ruben" top="37%" left="69%" /> */}
      {/* <Cursor id="james" color="#FC6E32" name="James" top="54%" left="22%" /> */}

      {/* Content */}
      <div className="relative z-10 w-full max-w-[680px] lg:max-w-4xl mx-auto flex flex-col items-center text-center gap-5 sm:gap-6 lg:gap-7">
        {/* Badge */}
        <motion.div {...fadeUp(0.05)}>
          <span className="inline-flex items-center gap-2 bg-white border border-[#ff4f00]/20 rounded-md px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm">
            <span className="text-[10px] sm:text-[12px] lg:text-[13px] font-semibold text-[#1A1A1A] leading-snug">
              Business Process &amp; Workflow Automation Consultants
            </span>
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.15, 40)}
          className="text-[2rem] xs:text-[2.3rem] sm:text-[3rem] lg:text-[3.8rem] xl:text-[4.4rem]
            font-extrabold leading-[1.12] text-[#1A1A1A] m-0 tracking-tight"
        >
          <span className="block">
            Become the{" "}
            <HWord id="business" innerRef={bizRef}>
              business
            </HWord>
          </span>
          <span className="block mt-3 sm:mt-4 lg:mt-5">
            <HWord id="everyone" innerRef={eveRef}>
              everyone
            </HWord>{" "}
            wants to beat
          </span>
        </motion.h1>

        {/* Body */}
        <motion.p
          {...fadeUp(0.28)}
          className="text-[13px] sm:text-[15px] lg:text-[17px] text-[#555]
            max-w-[300px] sm:max-w-md lg:max-w-2xl leading-relaxed m-0"
        >
          <strong className="text-[#1A1A1A]">
            Your software tools should help you work smarter.
          </strong>{" "}
          We fine-tune your tech stack so you move faster, wow your customers -
          and leave the competition scrambling.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.38)}
          className="flex flex-wrap items-center justify-center gap-3 mt-1"
        >
          <Button
            variant="secondary"
            size="md"
            className="px-5! py-2.5! sm:px-6! sm:py-3.5! text-[13px]! sm:text-[14px]! font-semibold!"
          >
            Schedule a free discovery session
          </Button>
        </motion.div>

        {/* Stats — always 3 col grid, never wraps */}
        <motion.div
          {...fadeUp(0.48)}
          className="grid grid-cols-3 w-full max-w-[300px] sm:max-w-sm lg:max-w-md mt-2 sm:mt-3 pt-5 sm:pt-6 border-t border-[#1A1A1A]/10"
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-1 ${i > 0 ? "border-l border-[#1A1A1A]/10" : ""}`}
            >
              <span className="text-[1.2rem] sm:text-[1.5rem] lg:text-[1.75rem] font-extrabold text-[#1A1A1A] leading-none">
                {value}
              </span>
              <span className="text-[9px] sm:text-[11px] lg:text-[12px] text-[#777] leading-snug text-center px-1">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

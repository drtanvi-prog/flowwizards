import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { openCalendly } from '@/utils/calendly';
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Chip from "@/components/ui/Chip";
import { SHWord } from "@/components/sections/service-page-hero/ServicePageHero";
import PremiumQuoteStack from "@/components/sections/quotes";

// ── Data ──────────────────────────────────────────────────────────────────────

const HUBSPOT_QUOTES = [
  {
    text: "Flow Digital completely transformed how we use HubSpot. They built out our entire lead nurturing and deal pipeline automations, and our sales team now closes deals 40% faster. The ROI was clear within the first month.",
    author: "Rachel Kim, VP of Sales, GrowthLoop",
    bg: "#eef5e0",
    border: "#b5c86a",
    quoteColor: "#7a8c00",
  },
  {
    text: "We had HubSpot for two years and barely scratched the surface. Flow Digital came in, audited our setup, and built workflows we didn't even know were possible. Our marketing team now runs campaigns that used to take days — in minutes.",
    author: "James Whitfield, Marketing Director, Kova Labs",
    bg: "#ffedef",
    border: "#ff9aaa",
    quoteColor: "#E84040",
  },
  {
    text: "The CRM migration from Salesforce was something we had been putting off for years. Flow Digital made it seamless — our data came over clean, our workflows were rebuilt better than before, and the whole team was up and running in under two weeks.",
    author: "Sarah Okonkwo, COO, Meridian Partners",
    bg: "#fff8f0",
    border: "#f5d5b0",
    quoteColor: "#f07020",
  },
];

const STATS = [
  {
    value: "129%",
    label:
      "more inbound leads with smart nurturing and automation fully built out",
  },
  {
    value: "36%",
    label:
      "more deals closed when lead scoring, routing, and follow-up are properly configured",
  },
  {
    value: "53%",
    label: "more leads for companies working with a certified HubSpot partner",
  },
];

const FEATURES = [
  {
    num: "01",
    badge: "Lead Nurturing",
    badgeVariant: "orange",
    title: "Smarter lead nurturing - on autopilot",
    desc: "Automatically score leads, trigger personalized follow-ups, and alert sales the moment a prospect is ready to buy.",
    bullets: [
      "Automatically score leads based on behavior",
      "Trigger personalized follow-ups without manual effort",
      "Send tailored emails at exactly the right time",
      "Alert sales the moment a prospect is ready to buy",
      "Keep every lead moving without anyone dropping the ball",
    ],
  },
  {
    num: "02",
    badge: "Collaboration",
    badgeVariant: "amber",
    title: "Seamless team collaboration",
    desc: "Give marketing, sales, and service a shared view of every contact and deal - eliminating silos at every touchpoint.",
    bullets: [
      "Give marketing, sales, and service access to the same data",
      "Eliminate silos with shared contact and deal visibility",
      "Keep everyone aligned with a unified customer view",
      "Deliver a smoother experience across every touchpoint",
    ],
  },
  {
    num: "03",
    badge: "Automation",
    badgeVariant: "olive",
    title: "Custom workflows for your unique needs",
    desc: "Automate lead assignment, onboarding, and follow-ups with workflows built around your exact processes.",
    bullets: [
      "Automate lead assignment, onboarding, and follow-ups",
      "Build workflows tailored to your exact processes",
      "Eliminate repetitive manual tasks",
      "Reduce missed handoffs with smarter HubSpot automations",
    ],
  },
  {
    num: "04",
    badge: "Data Quality",
    badgeVariant: "orange",
    title: "Clean, reliable data you can trust",
    desc: "Automatically remove duplicates, enforce field formats, and keep contact and deal info up to date.",
    bullets: [
      "Automatically remove duplicates and bad records",
      "Enforce consistent naming and field formats",
      "Keep contact and deal info up to date",
      "Ensure accurate targeting across sales and marketing",
      "Trust your CRM to reflect what's actually happening",
    ],
  },
  {
    num: "05",
    badge: "Reporting",
    badgeVariant: "amber",
    title: "Real-time insights and easy reporting",
    desc: "Track performance with live dashboards, monitor campaign impact, and spot bottlenecks instantly.",
    bullets: [
      "Track performance with live dashboards",
      "Monitor campaign impact and deal progress in one place",
      "Spot bottlenecks instantly",
      "Share reports without exporting or wrangling data",
    ],
  },
  {
    num: "06",
    badge: "Scalability",
    badgeVariant: "olive",
    title: "A platform that grows with your business",
    desc: "Add integrations, expand workflows, and customize HubSpot for new products or services.",
    bullets: [
      "Add new features and integrations as you scale",
      "Customize workflows for new products or services",
      "Stay flexible without rebuilding your tech stack",
      "Future-proof your operations inside HubSpot",
    ],
  },
];

const WHY_POINTS = [
  {
    title: "Gold HubSpot Solutions Partner",
    desc: "Officially recognized at the Gold tier - meaning we've proven results across dozens of HubSpot implementations.",
  },
  {
    title: "Proven RevOps & GTM automation track record",
    desc: "We've designed revenue operations and go-to-market automations for growth-stage companies across industries.",
  },
  {
    title: "Hundreds of 5-star reviews",
    desc: "Our clients speak for us. From small teams to scaling enterprises, Flow Digital consistently delivers.",
  },
  {
    title: "Full-stack engineering capability",
    desc: "Complex builds? No problem. Our engineers handle custom JavaScript, APIs, and AI integrations inside HubSpot.",
  },
  {
    title: "Direct HubSpot partner support",
    desc: "As a Solutions Partner, we get early access to new features and a direct line to HubSpot's partner team.",
  },
  {
    title: "20-person cross-functional team",
    desc: "Marketing strategists, automation engineers, data specialists - all working together on your HubSpot success.",
  },
];

const MIGRATION_POINTS = [
  "Cleanly mapping and transferring all your contacts, deals, and history",
  "Rebuilding workflows and automations to match - or improve on - what you had",
  "Setting up your new HubSpot instance for long-term scale and success",
];

const RESULT_STATS = [
  {
    value: "150%",
    title: "Increase in average deal size",
    desc: "From better targeting, cleaner handoffs, and fewer manual tasks.",
  },
  {
    value: "57%",
    title: "Faster ticket resolution",
    desc: "With automated routing, workflows, and internal notifications.",
  },
  {
    value: "3x",
    title: "More deals closed",
    desc: "For companies that fully automate their sales and onboarding flows.",
  },
];

// ── Animation helpers ──────────────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease },
});
const fadeUpAnimate = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease },
});

// ── Hero ──────────────────────────────────────────────────────────────────────

const HeroSection = () => (
  <section className="bg-[#FEF6F5] overflow-hidden px-6 sm:px-10 xl:px-16 pt-10 pb-20 sm:pt-16 sm:pb-28">
    <div className="max-w-7xl mx-auto">
      <motion.div
        {...fadeUpAnimate(0.05)}
        className="flex items-center gap-4 mb-8 sm:mb-10"
      >
        <div className="shrink-0 border-[1.5px] border-[#1A1A1A] rounded-lg px-3 py-1 sm:px-5 sm:py-2 bg-[#FEF6F5]">
          <span className="text-[11px] sm:text-[13px] font-medium text-[#1A1A1A] whitespace-nowrap leading-none">
            Expert HubSpot Consultant
          </span>
        </div>
        <div className="hidden sm:block flex-1 h-px bg-[#1A1A1A]" />
      </motion.div>

      <motion.h1
        {...fadeUpAnimate(0.12)}
        className="m-0 font-extrabold text-[#1A1A1A] tracking-tight leading-[1.6] sm:leading-[1.4] text-[1.8rem] sm:text-[3rem] lg:text-[4.5rem]"
      >
        There's a reason <SHWord>high-growth</SHWord>
        <br />
        companies <SHWord>choose</SHWord> HubSpot
      </motion.h1>

      <motion.p
        {...fadeUpAnimate(0.22)}
        className="mt-5 sm:mt-7 text-[#4A4A4A] leading-relaxed max-w-lg text-sm sm:text-[0.95rem]"
      >
        We help you build the backend to scale with it. Most teams only scratch
        the surface of what HubSpot can do.{" "}
        <strong>
          Flow Digital builds the workflows, logic, and structure that unlock
          its full potential — and yours.
        </strong>
      </motion.p>

      <motion.div {...fadeUpAnimate(0.32)} className="mt-8 sm:mt-10">
        <Button
          variant="secondary"
          size="md"
          className="text-[11px]! sm:text-sm! px-3! py-2! sm:px-5! sm:py-3!"
        >
          Talk with a HubSpot specialist
        </Button>
      </motion.div>
    </div>
  </section>
);

// ── Stats ─────────────────────────────────────────────────────────────────────

const StatsSection = () => (
  <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#f0f0f0]">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">
      <motion.p
        {...fadeUp(0)}
        className="text-[#666] text-sm sm:text-base mb-10 sm:mb-14 max-w-xl"
      >
        As a top HubSpot automation agency, Flow Digital helps growth-focused
        businesses unlock the full power of HubSpot — through clean automation,
        intelligent integrations, and proven RevOps strategies.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            className="flex flex-col gap-3 p-7 sm:p-8 rounded-2xl bg-[#fff8f5] border border-[#ffe0d5]"
          >
            <span
              className="font-extrabold text-[#ff4f00] leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
            >
              {stat.value}
            </span>
            <p className="text-sm text-[#555] leading-relaxed m-0">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Features (dark) ───────────────────────────────────────────────────────────

const FeaturesSection = () => (
  <section className="relative bg-[#0f0f0f] py-16 sm:py-20 lg:py-28 overflow-hidden">
    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-[#ff4f00]/10 rounded-full blur-3xl" />

    <div className="relative max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14 sm:mb-18">
        <div className="flex-1">
          <motion.div {...fadeUp(0)} className="mb-5">
            <Chip
              style={{ background: "rgba(255,79,0,0.15)", color: "#ff6830" }}
            >
              What we unlock inside HubSpot
            </Chip>
          </motion.div>
          <motion.h2
            {...fadeUp(0.07)}
            className="font-extrabold text-white tracking-tight leading-[1.1] text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] max-w-2xl m-0"
          >
            Every feature.
            <br />
            Fully unleashed.
          </motion.h2>
          <motion.p
            {...fadeUp(0.13)}
            className="text-white/45 text-sm sm:text-base mt-4 max-w-md m-0"
          >
            Here's what Flow Digital builds for you inside HubSpot:
          </motion.p>
        </div>
        <motion.div {...fadeUp(0.18)} className="shrink-0 lg:pt-3">
          <Button variant="primary" size="lg" onClick={openCalendly}>
            Book a discovery call
          </Button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {FEATURES.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group relative rounded-2xl bg-[#1a1a1a] border border-white/8 p-6 sm:p-8 flex flex-col gap-5 overflow-hidden"
            style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-0.5 bg-[#ff4f00] rounded-full shrink-0" />
              <Badge variant={f.badgeVariant}>{f.badge}</Badge>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-white text-base sm:text-lg leading-snug m-0">
                {f.title}
              </h3>
              <ul className="flex flex-col gap-2 m-0 p-0 list-none">
                {f.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff4f00] shrink-0 mt-1.5" />
                    <span className="text-white/50 text-sm leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Why Choose ────────────────────────────────────────────────────────────────

const WhyChooseSection = () => (
  <section className="bg-white py-16 sm:py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">
      <motion.div {...fadeUp(0)} className="mb-5">
        <Chip style={{ background: "#fff0ec", color: "#E8521A" }}>
          Top-Rated HubSpot Solutions Partner
        </Chip>
      </motion.div>

      <motion.h2
        {...fadeUp(0.07)}
        className="font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-4 text-[1.8rem] sm:text-[2.5rem] lg:text-[3.5rem] max-w-3xl"
      >
        Why choose Flow Digital as your HubSpot partner
      </motion.h2>

      <motion.p
        {...fadeUp(0.12)}
        className="text-[#666] text-sm sm:text-base mb-10 sm:mb-14 max-w-2xl"
      >
        We're certified workflow, sales, and marketing automation specialists
        helping businesses unlock the full power of HubSpot to simplify their
        processes, streamline operations, and scale their profits.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {WHY_POINTS.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl border border-[#ebebeb] p-6 sm:p-7 flex flex-col gap-4"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
          >
            <div className="w-9 h-9 rounded-full border-2 border-[#ff4f00] flex items-center justify-center shrink-0">
              <Check size={15} className="text-[#ff4f00]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-bold text-[#1A1A1A] text-base leading-snug m-0">
                {point.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed m-0">
                {point.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Migration ─────────────────────────────────────────────────────────────────

const MigrationSection = () => (
  <section className="bg-[#FEF6F5] py-16 sm:py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
        <div className="flex-1">
          <motion.div {...fadeUp(0)} className="mb-5">
            <Chip style={{ background: "#fff0ec", color: "#E8521A" }}>
              HubSpot Migration Services
            </Chip>
          </motion.div>

          <motion.h2
            {...fadeUp(0.07)}
            className="font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-4 text-[1.8rem] sm:text-[2.5rem] lg:text-[3.2rem]"
          >
            Thinking about
            <br />
            migrating to HubSpot?
          </motion.h2>

          <motion.p
            {...fadeUp(0.12)}
            className="text-[#555] text-sm sm:text-base mb-8 max-w-lg leading-relaxed"
          >
            Most CRM migrations are messy and stressful. We make them smooth and
            strategic, so you hit the ground running with HubSpot from day one.
            Whether you're coming from Salesforce, Zoho, Pipedrive, or any other
            CRM, Flow Digital handles the entire migration process.
          </motion.p>

          <motion.div {...fadeUp(0.18)}>
            <Button
              variant="secondary"
              size="md"
              className="text-[11px]! sm:text-sm! px-3! py-2! sm:px-5! sm:py-3!"
            >
              Start your migration
            </Button>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.1)}
          className="flex-1 rounded-2xl border-2 border-[#ff4f00] bg-white p-7 sm:p-9 flex flex-col gap-0"
        >
          <p className="text-sm font-semibold text-[#ff4f00] uppercase tracking-widest mb-6">
            What's included
          </p>
          {MIGRATION_POINTS.map((point, i) => (
            <div key={i}>
              <div className="flex items-start gap-4 py-4">
                <div className="w-7 h-7 rounded-full bg-[#ff4f00] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={13} className="text-white" strokeWidth={3} />
                </div>
                <p className="text-sm text-[#333] leading-relaxed m-0">
                  {point}
                </p>
              </div>
              {i < MIGRATION_POINTS.length - 1 && (
                <div className="h-px bg-[#f0e8e4]" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

// ── Results (animated vertical timeline) ─────────────────────────────────────

const ResultsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.25"] });
  const line1 = useTransform(scrollYProgress, [0.05, 0.5], [0, 1]);
  const line2 = useTransform(scrollYProgress, [0.5, 0.95], [0, 1]);
  const lineMotions = [line1, line2];

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-36" style={{ background: "#fddede" }}>
      <div className="max-w-3xl mx-auto px-6 sm:px-10 xl:px-16">
        <div className="grid" style={{ gridTemplateColumns: "20px 1fr", columnGap: "2rem" }}>
          {RESULT_STATS.flatMap((stat, i) => {
            const isLast = i === RESULT_STATS.length - 1;
            return [
              <div key={`line-${i}`} className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border-2 border-[#E84040] shrink-0 z-10"
                  style={{ background: "#fddede" }}
                />
                {!isLast && (
                  <div className="flex-1 relative" style={{ width: "2px", minHeight: "48px" }}>
                    <div className="absolute inset-0 bg-black/10" />
                    <motion.div
                      className="absolute inset-0 bg-[#E84040] origin-top"
                      style={{ scaleY: lineMotions[i] }}
                    />
                  </div>
                )}
              </div>,

              <motion.div key={`stat-${i}`} {...fadeUp(i * 0.12)} className={isLast ? "" : "pb-16 sm:pb-20 lg:pb-24"}>
                <span
                  className="block font-extrabold text-[#1A1A1A] leading-[0.9] mb-4"
                  style={{ fontSize: "clamp(4rem, 9vw, 7rem)" }}
                >
                  {stat.value}
                </span>
                <h3 className="font-bold text-[#1A1A1A] text-xl sm:text-2xl leading-snug m-0 mb-2">
                  {stat.title}
                </h3>
                <p className="text-[#666] text-sm sm:text-base leading-relaxed m-0 max-w-sm">
                  {stat.desc}
                </p>
              </motion.div>,
            ];
          })}
        </div>
      </div>
    </section>
  );
};

// ── CTA ───────────────────────────────────────────────────────────────────────

const CTASection = () => (
  <section className="bg-[#0f0f0f] py-20 sm:py-28 overflow-hidden relative">
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="w-150 h-75 bg-[#ff4f00]/8 rounded-full blur-3xl" />
    </div>
    <div className="relative max-w-4xl mx-auto px-6 sm:px-10 xl:px-16 text-center">
      <motion.p
        {...fadeUp(0)}
        className="text-[#ff4f00] text-sm font-semibold uppercase tracking-widest mb-5"
      >
        Ready to get started?
      </motion.p>
      <motion.h2
        {...fadeUp(0.07)}
        className="font-extrabold text-white tracking-tight leading-[1.1] text-[1.8rem] sm:text-[2.8rem] lg:text-[3.5rem] mb-6"
      >
        You already invested in HubSpot.
        <br />
        <span className="text-[#ff4f00]">Let us help you get the most out of it.</span>
      </motion.h2>
      <motion.p
        {...fadeUp(0.14)}
        className="text-white/50 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed"
      >
        We're certified workflow, sales, and marketing automation specialists
        helping businesses unleash the power of automation to simplify their
        processes, streamline their operations, and scale their profits.
      </motion.p>
      <motion.div {...fadeUp(0.2)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="primary" size="lg" onClick={openCalendly}>
          Schedule your free discovery session
        </Button>
      </motion.div>
    </div>
  </section>
);

// ── Page ──────────────────────────────────────────────────────────────────────

const HubspotConsultantPage = () => (
  <>
    <HeroSection />
    <StatsSection />
    <FeaturesSection />
    <WhyChooseSection />
    <MigrationSection />
    <ResultsSection />
  </>
);

export default HubspotConsultantPage;

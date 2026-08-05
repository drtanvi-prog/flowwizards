import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, X } from "lucide-react";
import { openCalendly } from '@/utils/calendly';
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Chip from "@/components/ui/Chip";
import { SHWord } from "@/components/sections/service-page-hero/ServicePageHero";
import WorkflowFramework from "@/components/sections/workflow-automation/WorkflowFramework";
import PremiumQuoteStack from "@/components/sections/quotes";

// ── Data ──────────────────────────────────────────────────────────────────────

const PIPEDRIVE_QUOTES = [
  {
    text: "ROI was clear from day one",
    body: "We connected Pipedrive with Asana and eliminated an entire layer of manual coordination. Our team stopped duplicating work between systems and started actually closing deals. Worth the investment many times over.",
    bg: "#eef5e0",
    border: "#b5c86a",
    quoteColor: "#7a8c00",
  },
  {
    text: "Sales increased threefold after automation",
    body: "We used to send PDFs manually - leads would print, sign, scan, and email them back. That entire process is now fully automated inside our CRM. The time we saved went straight into selling, and the results showed up immediately.",
    bg: "#f0faf5",
    border: "#86efac",
    quoteColor: "#16a34a",
  },
  {
    text: "Finally, a pipeline we actually trust",
    body: "Flow Wizards helped us rethink our entire sales process inside Pipedrive - not just set up fields, but actually map how we sell. Our team finally has a system they use consistently, and our pipeline data is accurate for the first time.",
    bg: "#fff8f0",
    border: "#f5d5b0",
    quoteColor: "#f07020",
  },
  {
    text: "Leads stop falling through the cracks",
    body: "Before, a lead could sit for days before anyone followed up. Now Pipedrive triggers the next step automatically - the right email, the right task, assigned to the right person. Nothing gets missed.",
    bg: "#eef5e0",
    border: "#b5c86a",
    quoteColor: "#7a8c00",
  },
  {
    text: "Our sales team works smarter, not harder",
    body: "They used to spend an hour every morning updating deal stages and logging notes. Flow Wizards automated all of that. Now they start the day selling instead of doing admin, and morale has genuinely improved.",
    bg: "#f0faf5",
    border: "#86efac",
    quoteColor: "#16a34a",
  },
  {
    text: "We can see exactly where every deal stands",
    body: "Reporting used to mean pulling data manually and building a spreadsheet. Now our Pipedrive dashboard updates in real time and every manager has the visibility they need without asking anyone for anything.",
    bg: "#fff8f0",
    border: "#f5d5b0",
    quoteColor: "#f07020",
  },
];

const PIPEDRIVE_STEPS = [
  {
    num: "01",
    title: "Diagnose",
    desc: "We analyze your sales workflow and tailor Pipedrive automations specifically for your business needs.",
  },
  {
    num: "02",
    title: "Implement",
    desc: "We develop seamless integrations and workflows within Pipedrive that reduce repetitive tasks and streamline your process.",
  },
  {
    num: "03",
    title: "Optimize",
    desc: "We continuously redefine your Pipedrive implementation to maximize performance and enhance your return on investment.",
  },
  {
    num: "04",
    title: "The Result",
    desc: <>
      Pipedrive marketing automation that works tirelessly behind the scenes, nurturing leads, streamlining processes, and boosting your close rates.{" "}
      <br /><br />
      <a href="https://calendly.com/tuesdaywizard/30min" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1A1A1A] hover:text-[#ff4f00] transition-colors">
        Book a free discovery call →
      </a>
    </>,
  },
];

const PROBLEMS_LEFT = [
  "Mistakes when manually entering customer information into Pipedrive",
  "Too much time spent manually updating and moving deals in your pipeline",
  "Difficulty seeing the big picture of your sales systems and processes",
];

const PROBLEMS_RIGHT = [
  "Potential customers falling through the cracks in your funnels",
  "Important follow-ups and tasks getting forgotten or delayed",
  "Deals stagnating in early pipeline stages, leading to fewer closed deals",
];

const FEATURES = [
  {
    badge: "Follow-Ups",
    badgeVariant: "orange",
    title: "Never miss a follow-up again",
    desc: "Automated sequences ensure every lead gets the right touchpoint at the right time - without anyone on your team lifting a finger.",
  },
  {
    badge: "Data Entry",
    badgeVariant: "amber",
    title: "Say goodbye to manual data entry",
    desc: "Auto-populate fields, sync contacts from forms and emails, and eliminate the human errors that cost you deals.",
  },
  {
    badge: "Lead Capture",
    badgeVariant: "olive",
    title: "Catch every lead before they fall through",
    desc: "Smart routing and instant notifications make sure no prospect gets lost in the shuffle, no matter how busy your team gets.",
  },
  {
    badge: "Insights",
    badgeVariant: "orange",
    title: "Real-time insights into sales performance",
    desc: "Live dashboards and automated reporting give your leadership team the visibility they need to make faster, smarter decisions.",
  },
  {
    badge: "Proposals",
    badgeVariant: "amber",
    title: "Always send proposals on time",
    desc: "Automated proposal workflows ensure your team sends the right documents at exactly the right stage - every time.",
  },
  {
    badge: "Scalability",
    badgeVariant: "olive",
    title: "Scale your sales process as you grow",
    desc: "Build once, scale forever. Your automated Pipedrive setup handles more leads and deals without adding headcount.",
  },
];

const ROI_STATS = [
  {
    value: "3x",
    title: "Quicker lead response time",
    desc: "Automated triggers respond to new leads instantly - no more delays that cost you the deal.",
  },
  {
    value: "27%",
    title: "Faster sales cycle",
    desc: "Streamlined pipelines and automated follow-ups move deals through stages at record speed.",
  },
  {
    value: "34%",
    title: "Year-on-year profit boost",
    desc: "Companies with fully optimized Pipedrive setups report consistent double-digit profit growth.",
  },
  {
    value: "30%",
    title: "Better conversion rate",
    desc: "Better lead nurturing, fewer missed touchpoints, and smarter routing close more deals from the same pipeline.",
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

      <motion.div {...fadeUpAnimate(0.05)} className="flex items-center gap-4 mb-8 sm:mb-10">
        <div className="shrink-0 border-[1.5px] border-[#1A1A1A] rounded-lg px-3 py-1 sm:px-5 sm:py-2 bg-[#FEF6F5]">
          <span className="text-[11px] sm:text-[13px] font-medium text-[#1A1A1A] whitespace-nowrap leading-none">
            Expert Pipedrive Consultant
          </span>
        </div>
        <div className="hidden sm:block flex-1 h-px bg-[#1A1A1A]" />
      </motion.div>

      <motion.h1
        {...fadeUpAnimate(0.12)}
        className="m-0 font-extrabold text-[#1A1A1A] tracking-tight leading-[1.6] sm:leading-[1.4] text-[1.8rem] sm:text-[3rem] lg:text-[4.5rem]"
      >
        Pipedrive is <SHWord>simple.</SHWord>
        <br />We'll make it <SHWord>powerful.</SHWord>
      </motion.h1>

      <motion.p {...fadeUpAnimate(0.22)} className="mt-5 sm:mt-7 text-[#4A4A4A] leading-relaxed max-w-lg text-sm sm:text-[0.95rem]">
        Just about anyone can set up Pipedrive. But transforming it into a{" "}
        <strong>deal-devouring, revenue-multiplying machine?</strong>{" "}
        That's our specialty.
      </motion.p>

      <motion.div {...fadeUpAnimate(0.32)} className="mt-8 sm:mt-10">
        <Button variant="secondary" size="md" className="text-[11px]! sm:text-sm! px-3! py-2! sm:px-5! sm:py-3!" onClick={openCalendly}>
          Book a discovery call
        </Button>
      </motion.div>

    </div>
  </section>
);

// ── Problems ──────────────────────────────────────────────────────────────────

const ProblemsSection = () => (
  <section className="bg-white py-16 sm:py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

      {/* <motion.div {...fadeUp(0)} className="mb-5">
        <Chip style={{ background: "#fff0ec", color: "#E8521A" }}>
          Pipedrive CRM is one of the world's favourites
        </Chip>
      </motion.div> */}

      <motion.h2
        {...fadeUp(0.07)}
        className="font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-3 text-[1.8rem] sm:text-[2.5rem] lg:text-[3.5rem] max-w-3xl"
      >
        Pipedrive CRM is one of the world's favorite{" "}
      </motion.h2>

      <motion.p {...fadeUp(0.12)} className="text-[#666] text-sm sm:text-base mb-10 sm:mb-14">
        But relying solely on manual input results in lackluster lead management.
      </motion.p>

      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0 mb-10 sm:mb-14">

        {/* Left card */}
        <motion.div
          {...fadeUp(0.1)}
          className="w-full lg:w-[42%] rounded-2xl border-2 border-[#ff4f00] bg-[#fff8f5] p-6 sm:p-8 flex flex-col gap-0"
        >
          {PROBLEMS_LEFT.map((item, i) => (
            <div key={i}>
              <div className="flex items-start gap-3 py-4">
                <div className="w-6 h-6 rounded-full border-2 border-[#ff4f00] flex items-center justify-center shrink-0 mt-0.5">
                  <X size={11} className="text-[#ff4f00]" strokeWidth={3} />
                </div>
                <p className="text-sm text-[#333] leading-relaxed m-0">{item}</p>
              </div>
              {i < PROBLEMS_LEFT.length - 1 && <div className="h-px bg-[#f0e8e4]" />}
            </div>
          ))}
        </motion.div>

        {/* Connector */}
        <motion.div {...fadeUp(0.18)} className="shrink-0 flex items-center justify-center lg:w-[16%]">
          <div className="bg-[#ff4f00] text-white font-bold px-4 py-2 rounded-xl text-sm whitespace-nowrap shadow-lg">
            Which means →
          </div>
        </motion.div>

        {/* Right card */}
        <motion.div
          {...fadeUp(0.22)}
          className="w-full lg:w-[42%] rounded-2xl bg-[#ff4f00] p-6 sm:p-8 flex flex-col gap-0"
        >
          {PROBLEMS_RIGHT.map((item, i) => (
            <div key={i}>
              <div className="flex items-start gap-3 py-4">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} className="text-white" strokeWidth={3} />
                </div>
                <p className="text-sm text-white/90 leading-relaxed m-0">{item}</p>
              </div>
              {i < PROBLEMS_RIGHT.length - 1 && <div className="h-px bg-white/15" />}
            </div>
          ))}
        </motion.div>

      </div>

      <motion.p {...fadeUp(0.2)} className="text-[#1A1A1A] text-sm sm:text-base">
        The fix is simple:<br />
        <span className="font-semibold">Expert Pipedrive automation + Flow Wizards' certified implementation</span>
      </motion.p>

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
            <Chip style={{ background: "rgba(255,79,0,0.15)", color: "#ff6830" }}>
              The benefit of Pipedrive automation
            </Chip>
          </motion.div>
          <motion.h2
            {...fadeUp(0.07)}
            className="font-extrabold text-white tracking-tight leading-[1.1] text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] max-w-2xl m-0"
          >
            But what if a team of<br />Pipedrive experts could help you?
          </motion.h2>
          <motion.p {...fadeUp(0.13)} className="text-white/45 text-sm sm:text-base mt-4 max-w-md m-0">
            ...all while skyrocketing your team's productivity, maximizing your close rate, and never letting an opportunity slip away.
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
            <div className="flex flex-col gap-2.5">
              <h3 className="font-bold text-white text-base sm:text-lg leading-snug m-0">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed m-0">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

// ── ROI Stats (animated vertical timeline) ────────────────────────────────────

const ROISection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.25"] });
  const line1 = useTransform(scrollYProgress, [0.05, 0.38], [0, 1]);
  const line2 = useTransform(scrollYProgress, [0.38, 0.67], [0, 1]);
  const line3 = useTransform(scrollYProgress, [0.67, 0.95], [0, 1]);
  const lineMotions = [line1, line2, line3];

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-36" style={{ background: "#e8f7ef" }}>
      <div className="max-w-3xl mx-auto px-6 sm:px-10 xl:px-16">

        <motion.div {...fadeUp(0)} className="mb-5">
          <Chip style={{ background: "rgba(22,163,74,0.12)", color: "#16a34a" }}>
            The ROI of Pipedrive
          </Chip>
        </motion.div>
        <motion.h2
          {...fadeUp(0.07)}
          className="font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-3 text-[1.8rem] sm:text-[2.5rem] lg:text-[3rem]"
        >
          More than a CRM platform.<br />
          <span style={{ color: "#16a34a" }}>A system for transformative growth.</span>
        </motion.h2>
        <motion.p {...fadeUp(0.12)} className="text-[#555] text-sm sm:text-base mb-14 sm:mb-18">
          More than 100,000 businesses use Pipedrive. Companies with an optimised Pipedrive report:
        </motion.p>

        <div className="grid" style={{ gridTemplateColumns: "20px 1fr", columnGap: "2rem" }}>
          {ROI_STATS.flatMap((stat, i) => {
            const isLast = i === ROI_STATS.length - 1;
            return [
              /* Timeline cell */
              <div key={`line-${i}`} className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border-2 border-[#16a34a] shrink-0 mt-3 z-10"
                  style={{ background: "#e8f7ef" }}
                />
                {!isLast && (
                  <div className="flex-1 mt-2 relative" style={{ width: "2px", minHeight: "48px" }}>
                    <div className="absolute inset-0 bg-black/10" />
                    <motion.div
                      className="absolute inset-0 origin-top"
                      style={{ scaleY: lineMotions[i], background: "#16a34a" }}
                    />
                  </div>
                )}
              </div>,

              /* Content cell */
              <motion.div key={`stat-${i}`} {...fadeUp(i * 0.1)} className={`pt-3 ${isLast ? "" : "pb-16 sm:pb-20 lg:pb-24"}`}>
                <span
                  className="block font-extrabold text-[#1A1A1A] leading-[0.9] mb-4"
                  style={{ fontSize: "clamp(4rem, 9vw, 7rem)" }}
                >
                  {stat.value}
                </span>
                <h3 className="font-bold text-[#1A1A1A] text-xl sm:text-2xl leading-snug m-0 mb-2">
                  {stat.title}
                </h3>
                <p className="text-[#555] text-sm sm:text-base leading-relaxed m-0 max-w-sm">
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

// ── Final CTA ─────────────────────────────────────────────────────────────────

const CtaSection = () => (
  <section className="py-16 sm:py-20 lg:py-24" style={{ background: "#0f2318" }}>
    <div className="max-w-4xl mx-auto px-6 sm:px-10 xl:px-16 text-center">

      <motion.h2
        {...fadeUp(0)}
        className="font-extrabold text-white leading-tight text-[1.6rem] sm:text-[2.2rem] lg:text-[2.8rem] mb-4"
      >
        Your CRM tool is a sleeping giant.
        <br />
        <span style={{ color: "#4ade80" }}>Now let's turn it into a deal-closing machine.</span>
      </motion.h2>

      <motion.p {...fadeUp(0.1)} className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto">
        Schedule your free discovery session and see what a fully optimised Pipedrive can do for your revenue.
      </motion.p>

      <motion.div {...fadeUp(0.18)}>
        <Button variant="primary" size="lg" onClick={openCalendly}>
          Schedule your free discovery session
        </Button>
      </motion.div>

    </div>
  </section>
);

// ── Page ──────────────────────────────────────────────────────────────────────

const PipedriveConsultantPage = () => (
  <>
    <HeroSection />
    <ProblemsSection />
    <FeaturesSection />
    {/* <ROISection /> */}
    <WorkflowFramework
      steps={PIPEDRIVE_STEPS}
      chip="Our Pipedrive implementation process"
      heading="Let's turn Pipedrive into your most powerful sales asset"
      hideDescription
    />
    <PremiumQuoteStack
      quotes={PIPEDRIVE_QUOTES}
      badge="What clients say about Pipedrive automation"
      heading={`“Sales have <br /> increased 3x!”`}
      subheading="Here's what our clients say after we unleash Pipedrive's full potential."
    />
  </>
);

export default PipedriveConsultantPage;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown } from "lucide-react";
import TwoColumnFAQ from "@/components/sections/faq/TwoColumnFAQ";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Chip from "@/components/ui/Chip";
import { SHWord } from "@/components/sections/service-page-hero/ServicePageHero";
import WorkflowFramework from "@/components/sections/workflow-automation/WorkflowFramework";
import PremiumQuoteStack from "@/components/sections/quotes";

// ── Data ──────────────────────────────────────────────────────────────────────

const ZAPIER_QUOTES = [
  {
    text: "Nathan was so helpful with my Zaps with Kustomer. He was very good at asking questions to help figure out what I was looking to do with my Zapier connections and was very patient and took the time to explain things. Would definitely work with Nathan again!",
    author: "Julianne G.",
    bg: "#eef5e0",
    border: "#b5c86a",
    quoteColor: "#7a8c00",
  },
  {
    text: "Nathan was SUPER helpful with helping us fixing our automation issues which has been a BIG issue for months (and he did it in less than 20 mins). Highly recommend!",
    author: "Apollonia P.",
    bg: "#ffedef",
    border: "#ff9aaa",
    quoteColor: "#E84040",
  },
  {
    text: "Nathan is incredibly talented in translating complex business processes into simple automation tasks. His friendly approach and timely communication make it amazing to work with him.",
    author: "Selçuk Can G.",
    bg: "#fff8f0",
    border: "#f5d5b0",
    quoteColor: "#f07020",
  },
  {
    text: "I would consider my project to be complicated and time-consuming. I needed it in a rush, like 'in a day' type of rush… Nathan went above and beyond to ensure it was set up properly and on time. I highly recommend utilizing automation in a business, and when you do, this is the place.",
    author: "Sol B.",
    bg: "#f0faf5",
    border: "#86efac",
    quoteColor: "#16a34a",
  },
];

const ZAPIER_STEPS = [
  {
    num: "01",
    title: "Audit + Planning",
    desc: "We take a thorough look at your business and help you figure out where we can utilize Zapier to get rid of manual labor and time-sucking, repetitive tasks.",
  },
  {
    num: "02",
    title: "Build",
    desc: "We fix broken zaps and solve your thorniest problems with seamless flows that do exactly what you need, every time.",
  },
  {
    num: "03",
    title: "Handoff + Monitoring",
    desc: "Once your automation is live, we'll conduct periodic maintenance reviews to spot any potential problems, fix broken zaps, and maximize cost and time savings.",
  },
];

const SERVICES = [
  {
    badge: "Implementation",
    badgeVariant: "orange",
    title: "Zapier implementation (new or improved workflows)",
    desc: "Designing and building new Zaps that connect your tools and remove manual steps from your day-to-day operations.",
  },
  {
    badge: "Troubleshooting",
    badgeVariant: "amber",
    title: "Fixing broken Zaps & troubleshooting",
    desc: "Diagnosing failed automations, cleaning up logic errors, fixing delays, and getting things back online fast.",
  },
  {
    badge: "Optimization",
    badgeVariant: "olive",
    title: "Optimization & performance tuning",
    desc: "Improving speed, reliability, and error handling so automations don't quietly fail in the background.",
  },
  {
    badge: "Advanced",
    badgeVariant: "orange",
    title: "Advanced workflows (webhooks, APIs, multi-step logic)",
    desc: "Handling more complex use cases when native Zapier actions aren't enough.",
  },
  {
    badge: "Training",
    badgeVariant: "amber",
    title: "Documentation & team training",
    desc: "Clear documentation and walkthroughs so your team understands what was built and how to maintain it.",
  },
  {
    badge: "Retainers",
    badgeVariant: "olive",
    title: "Ongoing optimization & maintenance",
    desc: "Retainer support for teams that rely on automation and need someone actively monitoring and improving it.",
  },
];

const RESULTS = [
  {
    stat: "80%",
    title: "Boost Efficiency",
    desc: "No more bottlenecks and backlogs, as repetitive tasks no longer require human intervention.",
  },
  {
    stat: "500hrs",
    title: "Reclaim hundreds of hours a year",
    desc: "Teams with optimized Zapier workflows regain at least 500 hours of productive work - per employee.",
  },
  {
    stat: "95%",
    title: "Reduce manual errors",
    desc: "Less reliance on manual handling means fewer breakdowns as volume increases.",
  },
  {
    stat: "7x",
    title: "Accelerate response time, boost conversions",
    desc: "Teams with fast, automated lead qualifying are 7x more likely to convert.",
  },
  {
    stat: "∞",
    title: "Get your tools talking",
    desc: "Work arrives ready to act on, without endless back-and-forth between apps.",
  },
  {
    stat: "0%",
    title: "Growth, not growing pains",
    desc: "Scale exponentially without increasing operational overhead.",
  },
];

const CASE_STUDIES = [
  {
    chipVariant: "orange",
    title: "Ecommerce Zapier Consulting",
    headline: "26,000 line items processed. Zero manual hours spent.",
    industry: "E-Commerce",
    problem:
      "An eCommerce brand selling handcrafted products had messy product data buried in order descriptions - someone had to manually reformat every single order before production could begin.",
    tools: ["Shopify", "Zapier AI", "Monday.com"],
    results: [
      "Eliminated manual data parsing entirely",
      "Saved dozens of hours per week across operations",
      "54.62% increase in orders handled",
    ],
  },
  {
    chipVariant: "amber",
    title: "SaaS Zapier Consulting",
    headline: "2,000 tasks automated. No more missed leads.",
    industry: "SaaS",
    problem:
      "Every lead a global SaaS company received required manual review, routing, CRM entry, and follow-up - resulting in inefficient focus and prospects constantly slipping through the cracks.",
    tools: ["Gravity Forms", "Pipedrive", "Autopilot", "Slack"],
    results: [
      "800+ minutes saved monthly (and counting)",
      "Zero leads lost to manual handoff errors",
      "Sales team freed from data entry to focus on closing",
    ],
  },
  {
    chipVariant: "olive",
    title: "Travel Zapier Consulting",
    headline: "Making luxury travel even more luxurious (and automating 125,000 tasks in the process)",
    industry: "Luxury Travel",
    problem:
      "A luxury travel company planning once-in-a-lifetime trips had hundreds of details per trip requiring manual tracking before, during, and after travel.",
    tools: ["Pipedrive CRM", "Zapier", "8+ apps via custom API"],
    results: [
      "125,000+ tasks automated monthly",
      "Transformed CRM from pre-sale to full journey management",
      "Team freed to focus on personalization",
    ],
  },
];

const AUTOMATIONS = [
  {
    tab: "Sales Process",
    label: "Zapier-\nEnhanced\nSales",
    title: "Lead capture to instant sales handoff",
    color: "#c0392b",
    steps: [
      "Website form submission triggers contact enrichment via Clearbit (company size, industry, tech stack)",
      "Enriched data creates or updates HubSpot contact with full profile and lead score",
      "Instant Slack notification to sales team with context",
      "Follow-up sequence begins automatically based on lead qualification tier",
    ],
  },
  {
    tab: "Finance",
    label: "Zapier-\nEnhanced\nFinance",
    title: "Payment to accounting closed loop",
    color: "#d97706",
    steps: [
      "Stripe payment confirmation triggers QuickBooks invoice generation with line items",
      "Invoice auto-syncs to accounting system with proper categorization and tags",
      "Customer receives professional receipt email with invoice attached",
      "Payment recorded in CRM deal timeline",
    ],
  },
  {
    tab: "Sales Meetings",
    label: "Zapier-\nEnhanced\nSales Meetings",
    title: "Appointment booked to show-up ready",
    color: "#ea580c",
    steps: [
      "Calendly booking creates calendar event and sends confirmation email instantly",
      "Asana prep checklist auto-generates with meeting-specific tasks assigned to team",
      "Automated reminder sequence sends prep materials and meeting link at intervals",
      "No-show triggers rescheduling sequence; attended meetings log notes to CRM",
    ],
  },
  {
    tab: "Customer Support",
    label: "Zapier-\nEnhanced\nCustomer Support",
    title: "Support request to tracked resolution",
    color: "#4d7c0f",
    steps: [
      "Form submission creates help desk ticket with customer history pulled automatically",
      "AI or rules-based routing assigns ticket by issue type, priority, and team capacity",
      "SLA tracking begins — auto-escalation kicks in if unresolved after 24 hours",
      "Resolution closes ticket, updates customer, and logs satisfaction score",
    ],
  },
  {
    tab: "Data",
    label: "Zapier-\nEnhanced\nData",
    title: "Spreadsheet entry to system of record",
    color: "#dc2626",
    steps: [
      "New Google Sheets row triggers Airtable record creation with mapped fields",
      "Data syncs across platforms — one source of truth, multiple views",
      "Team gets Slack notification with relevant details and link to full record",
      "Dashboard updates in real-time so leadership sees current state without manual reports",
    ],
  },
  {
    tab: "Customer Success",
    label: "Zapier-\nEnhanced\nCustomer Success",
    title: "Deal won to customer activated",
    color: "#b45309",
    steps: [
      "CRM deal marked 'won' triggers personalized contract generation with deal terms",
      "DocuSign sends for signature with auto-reminders until completed",
      "Signed contract kicks off welcome email sequence and onboarding task assignment",
      "Customer success gets notified with account context for seamless handoff",
    ],
  },
];

const PRICING_PLANS = [
  {
    label: "Implementation Session",
    badge: "Perfect For: Quick fixes and/or Zapier strategy",
    price: "$297",
    period: "per session",
    features: [
      "Live troubleshooting or strategy session",
      "Fix broken Zaps or optimize workflows",
      "Expert guidance on automation roadmap",
      "Immediate problem-solving",
    ],
    cta: "Book an Implementation Session",
    featured: false,
  },
  {
    label: "Hourly Packages",
    badge: "Perfect For: Teams with specific automation needs",
    price: "$1,950",
    period: "starting at",
    features: [
      "Workflow design & implementation",
      "AI-powered automation",
      "API integrations",
      "Documentation & training",
      "Dedicated project lead",
      "Shared progress portal",
    ],
    cta: "Book a Discovery Call",
    featured: true,
  },
  {
    label: "Monthly Retainers",
    badge: "Perfect For: Teams with ongoing automation needs",
    price: "Custom",
    period: "tailored to your team",
    features: [
      "Priority project scheduling",
      "Proactive monitoring & maintenance",
      "Dedicated project manager",
      "Private Slack channel",
      "Scheduled strategy sessions",
    ],
    cta: "Talk to Sales",
    featured: false,
  },
];

const GOODBYE_ITEMS = ["Stunted growth", "Wasted time and energy", "Frustrated employees"];
const HELLO_ITEMS = ["Easy automation", "Headache-free growth", "Increased profits"];

const FAQ_COLORS = [
  { bg: "#ffedef", border: "#ff9aaa" },
  { bg: "#eef5e0", border: "#b5c86a" },
  { bg: "#fff8f0", border: "#f5d5b0" },
];

const FAQS = [
  {
    q: "How soon can you start?",
    a: "Most projects can start within 1-5 business days after the discovery call, depending on scope and access.",
  },
  {
    q: "Can you fix broken Zaps quickly?",
    a: "Yes. For many issues, broken or failing Zaps can be addressed during a paid 75-minute implementation session. If the issue requires additional investigation or rebuilding, our team will assess the scope and recommend the right path forward.",
  },
  {
    q: "Do you work with existing accounts?",
    a: "Yes. We regularly work inside existing Zapier accounts - including auditing and fixing broken Zaps, optimizing performance and error handling, refactoring complex workflows, and documenting existing automations for your internal team.",
  },
  {
    q: "What access do you need?",
    a: "At minimum, we typically need Zapier credentials or a seat, plus access to the connected apps involved in the workflows (e.g. CRM, forms, support tools).",
  },
  {
    q: "Do you document and train the team?",
    a: "Absolutely. We provide documentation for the automations we build so your team understands how everything works. We also offer training sessions to walk through the workflows, explain key logic, and answer questions as part of the handoff or ongoing support.",
  },
  {
    q: "What's the difference between Zapier and Make?",
    a: "Both are automation platforms with different strengths. Zapier is simpler, easier to set up, and great for straightforward workflows and business apps. Make (formerly Integromat) offers more complex logic, conditional paths, and data transformations - useful for advanced integrations.",
  },
  {
    q: "What if something breaks after you build it?",
    a: "We build automations to be reliable and include error handling to catch issues before they become problems. If something does break, we're available to diagnose and fix it. Clients on ongoing support packages get proactive monitoring; project-based clients have access to hourly support after launch.",
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
            Expert Zapier Consultant
          </span>
        </div>
        <div className="hidden sm:block flex-1 h-px bg-[#1A1A1A]" />
      </motion.div>

      <motion.h1
        {...fadeUpAnimate(0.12)}
        className="m-0 font-extrabold text-[#1A1A1A] tracking-tight leading-[1.3] sm:leading-[1.2] text-[2rem] sm:text-[3rem] lg:text-[4.5rem]"
      >
        Zap your way to <SHWord>happiness</SHWord>
      </motion.h1>

      <motion.p {...fadeUpAnimate(0.26)} className="mt-4 sm:mt-6 text-[#4A4A4A] leading-relaxed max-w-lg text-sm sm:text-[0.95rem]">
        Zapier is a powerhouse automation tool, but mastering it is not for the fainthearted - or the busy.{" "}
        <strong>Leave the zapping to the experts (that's us). So you can focus on what you do best.</strong>
      </motion.p>

      <motion.div {...fadeUpAnimate(0.34)} className="mt-8 sm:mt-10">
        <Button variant="secondary" size="md" className="text-[11px]! sm:text-sm! px-3! py-2! sm:px-5! sm:py-3!">
          Book a free discovery call with a Zapier expert
        </Button>
      </motion.div>

    </div>
  </section>
);

// ── Services ──────────────────────────────────────────────────────────────────

const ServicesSection = () => (
  <section className="relative bg-[#0f0f0f] py-16 sm:py-20 lg:py-28 overflow-hidden">

    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-[#ff4f00]/10 rounded-full blur-3xl" />

    <div className="relative max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14 sm:mb-18">
        <div className="flex-1">
          <motion.div {...fadeUp(0)} className="mb-5">
            <Chip style={{ background: "rgba(255,79,0,0.15)", color: "#ff6830" }}>
              Zapier services we deliver
            </Chip>
          </motion.div>
          <motion.h2
            {...fadeUp(0.07)}
            className="font-extrabold text-white tracking-tight leading-[1.1] text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] max-w-2xl m-0"
          >
            Get Zapier working<br />the way it's supposed to
          </motion.h2>
          <motion.p {...fadeUp(0.13)} className="text-white/45 text-sm sm:text-base mt-4 max-w-md m-0">
            Reliably, cleanly, and without constant babysitting.
          </motion.p>
        </div>
        <motion.div {...fadeUp(0.18)} className="shrink-0 lg:pt-3">
          <Button variant="primary" size="lg">
            Book a discovery call
          </Button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {SERVICES.map((s, i) => (
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
              <Badge variant={s.badgeVariant}>{s.badge}</Badge>
            </div>
            <div className="flex flex-col gap-2.5">
              <h3 className="font-bold text-white text-base sm:text-lg leading-snug m-0">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed m-0">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

// ── Results ───────────────────────────────────────────────────────────────────

const ResultsSection = () => (
  <section className="bg-white py-16 sm:py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

      <motion.div {...fadeUp(0)} className="mb-5">
        <Chip style={{ background: "#fff0ec", color: "#E8521A" }}>
          Results You Can Expect
        </Chip>
      </motion.div>

      <motion.h2
        {...fadeUp(0.07)}
        className="font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-4 text-[1.8rem] sm:text-[2.5rem] lg:text-[3.5rem] max-w-3xl"
      >
        Automation magic + our Zapier expertise<br />= your business transformed
      </motion.h2>

      <motion.p {...fadeUp(0.12)} className="text-[#666] text-sm sm:text-base mb-10 sm:mb-14 max-w-2xl">
        Zapier's thousands of integrations provide nearly endless opportunities to improve your workflow efficiency. Pair that with the world's premier Zapier consultants and here's what your business ops look like:
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {RESULTS.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl border border-[#ebebeb] p-6 sm:p-7 flex flex-col gap-3"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
          >
            <span
              className="font-extrabold text-[#ff4f00] leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              {r.stat}
            </span>
            <h3 className="font-bold text-[#1A1A1A] text-base leading-snug m-0">{r.title}</h3>
            <p className="text-sm text-[#666] leading-relaxed m-0">{r.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

// ── Case Studies ──────────────────────────────────────────────────────────────

const CaseStudiesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#FEF6F5] py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

        <motion.div {...fadeUp(0)} className="mb-5">
          <Chip style={{ background: "#fff0ec", color: "#E8521A" }}>
            Zapier Case Studies
          </Chip>
        </motion.div>

        <motion.h2
          {...fadeUp(0.07)}
          className="font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-4 text-[1.8rem] sm:text-[2.5rem] lg:text-[3.5rem] max-w-3xl"
        >
          Real businesses. Real results.
        </motion.h2>

        <motion.p {...fadeUp(0.12)} className="text-[#666] text-sm sm:text-base mb-10 sm:mb-14 max-w-2xl">
          Here's what happens when expert Zapier automation meets the right business processes.
        </motion.p>

        <motion.div {...fadeUp(0.16)} className="flex flex-col divide-y divide-[#e0e0e0] border-t border-[#e0e0e0]">
          {CASE_STUDIES.map((cs, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                {/* Accordion trigger */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start gap-5 py-7 sm:py-8 text-left group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="mb-3">
                      <Badge variant={cs.chipVariant}>{cs.title}</Badge>
                    </div>
                    <p className="font-bold text-[#1A1A1A] text-base sm:text-lg lg:text-xl leading-snug m-0 pr-4">
                      {cs.headline}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="shrink-0 mt-1"
                  >
                    <ChevronDown size={22} className="text-[#1A1A1A]" strokeWidth={2} />
                  </motion.div>
                </button>

                {/* Accordion content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 sm:pb-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left: problem */}
                        <div>
                          <p className="text-xs font-semibold text-[#aaa] uppercase tracking-widest mb-3">The Challenge</p>
                          <p className="text-sm sm:text-base text-[#555] leading-relaxed m-0">{cs.problem}</p>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {cs.tools.map((t, j) => (
                              <span
                                key={j}
                                className="text-xs font-medium text-[#666] bg-white border border-[#e0e0e0] rounded-full px-3 py-1"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Right: results */}
                        <div>
                          <p className="text-xs font-semibold text-[#aaa] uppercase tracking-widest mb-4">Key Results</p>
                          <div className="flex flex-col gap-3">
                            {cs.results.map((r, j) => (
                              <div key={j} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#ff4f00] flex items-center justify-center shrink-0 mt-0.5">
                                  <Check size={10} className="text-white" strokeWidth={3} />
                                </div>
                                <p className="text-sm text-[#333] leading-snug m-0">{r}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

// ── Common Automations ────────────────────────────────────────────────────────

const AutomationsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = AUTOMATIONS[activeTab];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

        <motion.div {...fadeUp(0)} className="mb-5">
          <Chip style={{ background: "#fff0ec", color: "#E8521A" }}>
            Common Zapier Automations We Build
          </Chip>
        </motion.div>

        <motion.p {...fadeUp(0.07)} className="font-bold text-[#1A1A1A] text-base sm:text-lg mb-2 max-w-3xl">
          From sales to customer support to finance, we build high-impact, AI-powered automation workflows that reshape your operations.
        </motion.p>

        <motion.p {...fadeUp(0.12)} className="text-[#666] text-sm sm:text-base mb-8 sm:mb-10">
          Some examples of Flow Digital's workflow-boosting wizardry:
        </motion.p>

        {/* Tab buttons */}
        <motion.div {...fadeUp(0.16)} className="flex flex-wrap gap-2 mb-6">
          {AUTOMATIONS.map((a, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white transition-all duration-200"
              style={{
                background: a.color,
                boxShadow:
                  activeTab === i
                    ? `0 0 0 2px white, 0 0 0 4px ${a.color}`
                    : "none",
                opacity: activeTab === i ? 1 : 0.75,
              }}
            >
              {a.tab}
            </button>
          ))}
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease }}
            className="rounded-2xl border border-[#e8e8e8] overflow-hidden flex flex-col lg:flex-row"
            style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}
          >
            {/* Left: category label */}
            <div className="lg:w-56 xl:w-64 shrink-0 bg-white p-8 sm:p-10 flex items-start lg:items-center border-b lg:border-b-0 lg:border-r border-[#e8e8e8]">
              <h3
                className="font-extrabold text-[#1A1A1A] leading-[1.1] whitespace-pre-line m-0"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
              >
                {active.label}
              </h3>
            </div>

            {/* Right: step grid */}
            <div className="flex-1 bg-[#fff8f5] p-7 sm:p-8">
              <p className="font-semibold text-[#1A1A1A] text-sm sm:text-base mb-6 m-0">
                {active.title}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {active.steps.map((step, j) => (
                  <div
                    key={j}
                    className={`py-5 px-1 sm:px-3 ${
                      j < active.steps.length - 2 ? "border-b border-[#e8e8e8]" : ""
                    } ${j % 2 === 0 ? "sm:border-r sm:border-[#e8e8e8] sm:pr-6" : "sm:pl-6"}`}
                  >
                    <p className="text-sm text-[#555] leading-relaxed m-0">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

// ── Pricing ───────────────────────────────────────────────────────────────────

const PricingSection = () => (
  <section className="bg-white py-16 sm:py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

      <motion.div {...fadeUp(0)} className="mb-5">
        <Chip style={{ background: "#fff0ec", color: "#E8521A" }}>
          Zapier Automation Pricing
        </Chip>
      </motion.div>

      <motion.h2
        {...fadeUp(0.07)}
        className="font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-12 text-[1.8rem] sm:text-[2.5rem] lg:text-[3.5rem] max-w-3xl"
      >
        Simple, transparent pricing
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
        {PRICING_PLANS.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            className={`rounded-2xl p-7 sm:p-8 flex flex-col gap-6 ${
              plan.featured
                ? "bg-[#1A1A1A] border-2 border-[#ff4f00]"
                : "bg-[#fafafa] border border-[#e8e8e8]"
            }`}
            style={{
              boxShadow: plan.featured
                ? "0 8px 40px rgba(255,79,0,0.18)"
                : "0 2px 16px rgba(0,0,0,0.04)",
            }}
          >
            <div>
              <p className="text-xs font-semibold text-[#ff4f00] uppercase tracking-widest mb-2">
                {plan.badge}
              </p>
              <h3
                className={`font-bold text-xl leading-snug m-0 ${
                  plan.featured ? "text-white" : "text-[#1A1A1A]"
                }`}
              >
                {plan.label}
              </h3>
            </div>

            <div>
              <span
                className={`block font-extrabold leading-none ${
                  plan.featured ? "text-white" : "text-[#1A1A1A]"
                }`}
                style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}
              >
                {plan.price}
              </span>
              <p
                className={`text-sm mt-1 m-0 ${
                  plan.featured ? "text-white/45" : "text-[#999]"
                }`}
              >
                {plan.period}
              </p>
            </div>

            <div className="flex flex-col gap-2.5 flex-1">
              {plan.features.map((f, j) => (
                <div key={j} className="flex items-start gap-2.5">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      plan.featured ? "bg-[#ff4f00]" : "border-2 border-[#ff4f00]"
                    }`}
                  >
                    <Check
                      size={10}
                      className={plan.featured ? "text-white" : "text-[#ff4f00]"}
                      strokeWidth={3}
                    />
                  </div>
                  <p
                    className={`text-sm leading-snug m-0 ${
                      plan.featured ? "text-white/65" : "text-[#555]"
                    }`}
                  >
                    {f}
                  </p>
                </div>
              ))}
            </div>

            <Button
              variant={plan.featured ? "primary" : "secondary"}
              size="md"
              className="text-sm!"
            >
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

// ── FAQ ───────────────────────────────────────────────────────────────────────

const FaqSection = () => (
  <TwoColumnFAQ
    faqs={FAQS}
    chip="Zapier FAQs"
    heading="Everything you need to know"
    subheading="Common questions about our Zapier consulting and automation services."
    chipStyle={{ background: "#fff0ec", color: "#E8521A" }}
    colors={FAQ_COLORS}
  />
);

// ── Final CTA ─────────────────────────────────────────────────────────────────

const CtaSection = () => (
  <section className="bg-white py-16 sm:py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

      <motion.div {...fadeUp(0)} className="mb-5">
        <Chip style={{ background: "#fff0ec", color: "#E8521A" }}>
          Unlock effortless scale with Zapier
        </Chip>
      </motion.div>

      <motion.h2
        {...fadeUp(0.07)}
        className="font-extrabold text-[#1A1A1A] leading-[1.05] mb-14 sm:mb-20 max-w-3xl"
        style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
      >
        No-code. No headache.
      </motion.h2>

      {/* Cards + SVG connector */}
      <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-0 mb-12 sm:mb-16">

        {/* Left card */}
        <motion.div
          {...fadeUp(0.12)}
          className="w-full sm:flex-1 rounded-2xl border-2 border-[#ff4f00] bg-[#fff3ee] p-7 sm:p-8"
        >
          <p className="font-bold text-[#1A1A1A] text-sm sm:text-base mb-4 m-0">Say g'bye to:</p>
          {GOODBYE_ITEMS.map((item, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 py-4">
                <div className="w-6 h-6 rounded-full border-2 border-[#ff4f00] flex items-center justify-center shrink-0">
                  <X size={10} className="text-[#ff4f00]" strokeWidth={2.5} />
                </div>
                <p className="text-sm text-[#333] m-0">{item}</p>
              </div>
              {i < GOODBYE_ITEMS.length - 1 && <div className="h-px bg-[#f0d0c0]" />}
            </div>
          ))}
        </motion.div>

        {/* SVG S-curve connector — desktop only */}
        <div className="hidden sm:block shrink-0" style={{ width: 90 }}>
          <svg width="90" height="240" viewBox="0 0 90 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 0 125 C 45 125, 45 205, 90 205"
              stroke="#1A1A1A"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="0" cy="125" r="7" fill="white" stroke="#1A1A1A" strokeWidth="2" />
            <circle cx="90" cy="205" r="7" fill="white" stroke="#1A1A1A" strokeWidth="2" />
          </svg>
        </div>

        {/* Right card — offset down on desktop */}
        <motion.div
          {...fadeUp(0.22)}
          className="w-full sm:flex-1 sm:mt-20 rounded-2xl bg-[#ff4f00] p-7 sm:p-8"
          style={{ boxShadow: "5px 5px 0px #c0392b" }}
        >
          <p className="font-bold text-white text-sm sm:text-base mb-4 m-0">And say hi to:</p>
          {HELLO_ITEMS.map((item, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 py-4">
                <div className="w-6 h-6 rounded-full border-2 border-white/60 flex items-center justify-center shrink-0">
                  <Check size={10} className="text-white" strokeWidth={2.5} />
                </div>
                <p className="text-sm text-white/90 m-0">{item}</p>
              </div>
              {i < HELLO_ITEMS.length - 1 && <div className="h-px bg-white/20" />}
            </div>
          ))}
        </motion.div>

      </div>

      {/* CTA Button */}
      <motion.div {...fadeUp(0.3)} className="flex justify-center">
        <Button variant="secondary" size="md">
          Book a free discovery call
        </Button>
      </motion.div>

    </div>
  </section>
);

// ── Page ──────────────────────────────────────────────────────────────────────

const ZapierConsultantPage = () => (
  <>
    <HeroSection />
    <ServicesSection />
    <ResultsSection />
    <CaseStudiesSection />
    <PremiumQuoteStack
      quotes={ZAPIER_QUOTES}
      badge="What Clients Say About Zapier Automation"
      heading={`We're Zapier's #1 rated\nautomation experts\nfor a reason`}
      subheading="Here's a small selection of our hundreds of five-star reviews"
    />
    <WorkflowFramework
      steps={ZAPIER_STEPS}
      chip="Our Zapier workflow automation process"
      heading="Get Zapping (without snapping)"
      hideDescription
    />
    <AutomationsSection />
    <PricingSection />
    <FaqSection />
    <CtaSection />
  </>
);

export default ZapierConsultantPage;

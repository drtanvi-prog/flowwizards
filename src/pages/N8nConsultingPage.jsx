import { useState } from "react";
import { openCalendly } from '@/utils/calendly';
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

const N8N_QUOTES = [
  {
    text: "Finally moved off Zapier - wish we'd done it sooner",
    body: "We were hitting Zapier's task limits every month and paying a fortune. Flow Wizards migrated all our workflows to n8n in under two weeks. Everything runs faster, we own our data, and our bill dropped dramatically.",
    bg: "#f0f4ff",
    border: "#93b4ff",
    quoteColor: "#2563eb",
  },
  {
    text: "Complex multi-step pipelines built cleanly and fast",
    body: "We needed an n8n workflow that touched our CRM, a custom API, two databases, and Slack. Flow Wizards designed and deployed the whole thing in a few days. The documentation they handed over was genuinely useful.",
    bg: "#fff0f3",
    border: "#ff9aaa",
    quoteColor: "#E84040",
  },
  {
    text: "Self-hosted n8n set up properly - no drama",
    body: "We wanted to self-host n8n on our own server and couldn't figure out the SSL, reverse proxy, and credential setup. Flow Wizards sorted everything from scratch. Rock-solid, secure, and running smoothly.",
    bg: "#fff8f0",
    border: "#f5d5b0",
    quoteColor: "#f07020",
  },
  {
    text: "Best decision we made for our ops team",
    body: "Our ops team was drowning in manual handoffs between tools. Flow Wizards built n8n automations that handle the entire chain - from intake to delivery - without anyone touching a thing. Saves us 20+ hours a week.",
    bg: "#f0faf5",
    border: "#86efac",
    quoteColor: "#16a34a",
  },
  {
    text: "AI-powered workflows that actually work in production",
    body: "We needed GPT to categorize and route incoming support tickets automatically. Flow Wizards built the full pipeline in n8n - form → AI → routing → ticketing system. It's been running flawlessly for three months.",
    bg: "#f0f4ff",
    border: "#93b4ff",
    quoteColor: "#2563eb",
  },
  {
    text: "Zapier → n8n migration done without a hitch",
    body: "We had 40+ active Zaps and were nervous about migrating. Flow Wizards audited everything, rebuilt the workflows in n8n, tested thoroughly, and cut over with zero downtime. Couldn't have done it without them.",
    bg: "#fff0f3",
    border: "#ff9aaa",
    quoteColor: "#E84040",
  },
];

const N8N_STEPS = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We review your current tools, data flows, and manual processes to identify exactly where n8n can deliver the biggest impact.",
  },
  {
    num: "02",
    title: "Workflow Design",
    desc: "We design your n8n workflows end-to-end - mapping triggers, logic, error handling, and integrations before a single node is placed.",
  },
  {
    num: "03",
    title: "Build & Test",
    desc: "We build your workflows in n8n, test every edge case, and set up monitoring so problems get caught before they affect your business.",
  },
  {
    num: "04",
    title: "Handoff & Documentation",
    desc: "You get clean documentation, a walkthrough of what was built, and the confidence to maintain it - or we can stay on as your automation partner.",
  },
];

const SERVICES = [
  {
    badge: "Consulting",
    badgeVariant: "orange",
    title: "n8n workflow consulting & strategy",
    desc: "We assess your business, map your processes, and design an n8n automation strategy tailored to your goals - before a single line of code is written.",
  },
  {
    badge: "Implementation",
    badgeVariant: "amber",
    title: "n8n workflow design & implementation",
    desc: "From simple triggers to complex multi-step pipelines, we build n8n workflows that connect your tools and eliminate manual work reliably.",
  },
  {
    badge: "Self-Hosted",
    badgeVariant: "olive",
    title: "n8n self-hosted setup & configuration",
    desc: "We deploy and configure n8n on your own server or cloud infrastructure - including SSL, reverse proxy, credential management, and security hardening.",
  },
  {
    badge: "Migration",
    badgeVariant: "orange",
    title: "Zapier / Make → n8n migration",
    desc: "We audit your existing automations, rebuild them in n8n, and manage the cutover - so you keep your workflows and cut your per-task costs.",
  },
  {
    badge: "AI Pipelines",
    badgeVariant: "amber",
    title: "AI-powered n8n automation",
    desc: "We connect OpenAI, Claude, and other AI models into your n8n workflows - for intelligent routing, classification, content generation, and more.",
  },
  {
    badge: "Maintenance",
    badgeVariant: "olive",
    title: "Ongoing support & maintenance",
    desc: "Retainer support for teams that rely on n8n - proactive monitoring, updates, new workflows, and fast fixes when something breaks.",
  },
];

const RESULTS = [
  {
    stat: "0¢",
    title: "Per-task fees eliminated",
    desc: "n8n has no per-task pricing. Run a million executions a month and pay the same flat rate.",
  },
  {
    stat: "100%",
    title: "Data ownership",
    desc: "Self-hosted n8n means your data never leaves your infrastructure. Full control, full compliance.",
  },
  {
    stat: "10x",
    title: "More integrations possible",
    desc: "n8n supports custom HTTP requests and full code nodes - connect anything with an API, not just pre-built connectors.",
  },
  {
    stat: "80%",
    title: "Reduction in manual work",
    desc: "Teams with properly designed n8n workflows eliminate the majority of their manual, repetitive operational tasks.",
  },
  {
    stat: "~2 wks",
    title: "Average time to first automation",
    desc: "Most clients go from discovery call to live, production-ready workflows within two weeks.",
  },
  {
    stat: "$25",
    title: "Starting rate per hour",
    desc: "Expert n8n consulting and automation starting at $25/hr - flexible hourly packages available.",
  },
];

const CASE_STUDIES = [
  {
    chipVariant: "orange",
    title: "SaaS Lead Routing - n8n Automation",
    headline: "4,000+ leads routed automatically. Zero manual triage.",
    industry: "SaaS",
    problem:
      "A SaaS company had sales reps manually reviewing every inbound lead, copying data into their CRM, and assigning follow-up tasks. With growing volume, leads were slipping through daily.",
    tools: ["Typeform", "n8n", "HubSpot", "Slack"],
    results: [
      "Eliminated 15+ hours/week of manual lead triage",
      "100% of leads now auto-enriched, scored, and routed",
      "Response time cut from hours to under 3 minutes",
    ],
  },
  {
    chipVariant: "amber",
    title: "Agency Client Reporting - n8n Automation",
    headline: "Weekly reports delivered automatically. No spreadsheets touched.",
    industry: "Marketing Agency",
    problem:
      "A digital marketing agency was manually pulling data from Google Ads, Meta, and GA4 every week, compiling reports in spreadsheets, and emailing them to clients - taking 6–8 hours per week per account manager.",
    tools: ["Google Ads API", "Meta API", "Google Analytics", "n8n", "Notion"],
    results: [
      "Saved 30+ hours/week across account management team",
      "Reports delivered automatically every Monday at 8am",
      "Error rate dropped to zero - no more copy-paste mistakes",
    ],
  },
  {
    chipVariant: "olive",
    title: "E-commerce Order Processing - n8n Automation",
    headline: "8,000 orders/month processed without a single manual step.",
    industry: "E-Commerce",
    problem:
      "An e-commerce brand had a complex fulfilment process requiring order data from Shopify to be reformatted, split by vendor, and sent to three separate suppliers - all done manually by staff.",
    tools: ["Shopify", "n8n", "Google Sheets", "SendGrid"],
    results: [
      "Fully automated order-to-supplier pipeline",
      "Processing time reduced from 4hrs/day to under 5 minutes",
      "Scaled from 2,000 to 8,000 orders/month without hiring",
    ],
  },
];

const AUTOMATIONS = [
  {
    tab: "Lead Management",
    label: "n8n\nPowered\nLead Flow",
    title: "Form submission to CRM - fully enriched",
    color: "#EA4B71",
    steps: [
      "Form submission triggers n8n workflow and pulls enrichment data via Clearbit or Apollo",
      "Lead is scored based on company size, industry, and behaviour signals",
      "HubSpot or Pipedrive contact created/updated with full profile and score",
      "Sales team notified via Slack with lead summary and one-click meeting link",
    ],
  },
  {
    tab: "AI Support Triage",
    label: "n8n\nPowered\nAI Support",
    title: "Ticket received to resolved - AI-routed",
    color: "#7C3AED",
    steps: [
      "Support email or form submission triggers n8n workflow",
      "GPT-4 classifies ticket by category, urgency, and sentiment",
      "Ticket automatically created in Intercom/Zendesk and routed to correct team",
      "SLA timer starts - auto-escalation kicks in if ticket is unresolved after threshold",
    ],
  },
  {
    tab: "Finance Ops",
    label: "n8n\nPowered\nFinance",
    title: "Payment received to books reconciled",
    color: "#D97706",
    steps: [
      "Stripe payment confirmation triggers n8n workflow",
      "Invoice generated in QuickBooks with correct line items and categories",
      "Customer receives PDF receipt via email automatically",
      "Payment logged to CRM deal and Slack notification sent to finance channel",
    ],
  },
  {
    tab: "Client Onboarding",
    label: "n8n\nPowered\nOnboarding",
    title: "Deal won to client fully onboarded",
    color: "#059669",
    steps: [
      "CRM deal marked 'Closed Won' triggers n8n onboarding workflow",
      "Welcome email sequence initiated and client added to project management tool",
      "DocuSign contract sent automatically with deal-specific terms populated",
      "Internal team notified with client context - kickoff call scheduled automatically",
    ],
  },
  {
    tab: "Data Sync",
    label: "n8n\nPowered\nData Sync",
    title: "One source of truth across all tools",
    color: "#2563EB",
    steps: [
      "Record created or updated in primary system triggers n8n sync workflow",
      "Data validated, transformed, and pushed to all connected platforms",
      "Conflicts detected and flagged with resolution logic applied automatically",
      "Audit log updated - every change tracked with timestamp and source",
    ],
  },
  {
    tab: "Reporting",
    label: "n8n\nPowered\nReporting",
    title: "Automated reports delivered on schedule",
    color: "#EA580C",
    steps: [
      "Scheduled n8n trigger fires at configured time (daily, weekly, monthly)",
      "Data pulled from APIs - Google Analytics, Ads, CRM, finance tools",
      "Report compiled, formatted, and pushed to Notion, Google Sheets, or Slack",
      "Stakeholders receive email summary with key metrics and trend annotations",
    ],
  },
];

const PRICING_PLANS = [
  {
    label: "Strategy Session",
    badge: "Perfect For: Quick audit or n8n advice",
    price: "$297",
    period: "per session (75 min)",
    features: [
      "Live strategy or troubleshooting session",
      "n8n workflow audit & recommendations",
      "Migration planning from Zapier/Make",
      "Expert guidance on your automation roadmap",
    ],
    cta: "Book a Strategy Session",
    featured: false,
  },
  {
    label: "Hourly Packages",
    badge: "Perfect For: Teams with specific n8n needs",
    price: "$25",
    period: "per hour - packages from $500",
    features: [
      "n8n workflow design & implementation",
      "AI-powered automation pipelines",
      "API & webhook integrations",
      "Self-hosted n8n setup & config",
      "Documentation & team handoff",
      "Dedicated project lead",
    ],
    cta: "Book a Discovery Call",
    featured: true,
  },
  {
    label: "Monthly Retainers",
    badge: "Perfect For: Teams with ongoing n8n needs",
    price: "Custom",
    period: "tailored to your team",
    features: [
      "Priority project scheduling",
      "Proactive monitoring & maintenance",
      "Dedicated automation engineer",
      "Private Slack channel",
      "Scheduled strategy sessions",
    ],
    cta: "Talk to Sales",
    featured: false,
  },
];

const GOODBYE_ITEMS = ["Per-task fees eating your budget", "Data locked in third-party servers", "Workflows breaking silently"];
const HELLO_ITEMS = ["Unlimited executions, flat cost", "Full data ownership & compliance", "Reliable automations with error alerts"];

const FAQ_COLORS = [
  { bg: "#f0f4ff", border: "#93b4ff" },
  { bg: "#fff0f3", border: "#ff9aaa" },
  { bg: "#fff8f0", border: "#f5d5b0" },
];

const FAQS = [
  {
    q: "What is n8n and how is it different from Zapier?",
    a: "n8n is an open-source workflow automation platform. Unlike Zapier, it charges a flat monthly rate (or free if self-hosted) rather than per-task - so there are no surprise bills as your volume grows. It also supports custom code nodes, complex branching logic, and connects to any API, making it far more powerful for advanced use cases.",
  },
  {
    q: "Do I need to host n8n myself?",
    a: "No. n8n offers a cloud-hosted option (n8n.cloud) so you can get started immediately without managing any infrastructure. Self-hosting is available for teams that want full data control, custom environments, or lower long-term costs - and we handle the full setup if you go that route.",
  },
  {
    q: "Can you migrate our existing Zapier or Make workflows to n8n?",
    a: "Yes, migration is one of our most common services. We audit all your existing automations, rebuild them cleanly in n8n, test thoroughly, and manage the cutover - so your operations stay uninterrupted throughout.",
  },
  {
    q: "How soon can you start?",
    a: "Most projects can begin within 1–5 business days after the discovery call, depending on scope and access requirements.",
  },
  {
    q: "Can you connect n8n to tools that don't have native integrations?",
    a: "Yes. n8n's HTTP Request node and Code node allow us to connect to virtually any tool with an API - even internal systems, custom databases, or less common SaaS products that aren't in any integration library.",
  },
  {
    q: "Do you provide documentation and training?",
    a: "Absolutely. Every project includes documentation covering what was built, how it works, and how to maintain it. We also offer walkthrough sessions for your team as part of the handoff - or ongoing support if you'd rather leave the maintenance to us.",
  },
  {
    q: "What if something breaks after you build it?",
    a: "We build with error handling and alerting built in - so issues surface immediately rather than failing silently. If something breaks, clients on retainers get proactive monitoring and fast fixes. Project-based clients have access to hourly support after launch.",
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

// ── Accent colour ─────────────────────────────────────────────────────────────
// n8n brand is a deep pink/red - we use it as the page accent alongside the
// site's primary orange so the page feels distinct but consistent.
const ACCENT = "#EA4B71";

// ── Hero ──────────────────────────────────────────────────────────────────────

const HeroSection = () => (
  <section className="bg-[#FEF6F5] overflow-hidden px-6 sm:px-10 xl:px-16 pt-10 pb-20 sm:pt-16 sm:pb-28">
    <div className="max-w-7xl mx-auto">

      <motion.div {...fadeUpAnimate(0.05)} className="flex items-center gap-4 mb-8 sm:mb-10">
        <div className="shrink-0 border-[1.5px] border-[#1A1A1A] rounded-lg px-3 py-1 sm:px-5 sm:py-2 bg-[#FEF6F5]">
          <span className="text-[11px] sm:text-[13px] font-medium text-[#1A1A1A] whitespace-nowrap leading-none">
            Expert n8n Consultants
          </span>
        </div>
        <div className="hidden sm:block flex-1 h-px bg-[#1A1A1A]" />
      </motion.div>

      <motion.h1
        {...fadeUpAnimate(0.12)}
        className="m-0 font-extrabold text-[#1A1A1A] tracking-tight leading-[1.3] sm:leading-[1.2] text-[2rem] sm:text-[3rem] lg:text-[4.5rem]"
      >
        n8n automation that{" "}
        <SHWord>actually</SHWord>{" "}works
      </motion.h1>

      <motion.p {...fadeUpAnimate(0.26)} className="mt-4 sm:mt-6 text-[#4A4A4A] leading-relaxed max-w-xl text-sm sm:text-[0.95rem]">
        n8n is the most powerful workflow automation platform available - but configuring it properly takes real expertise.{" "}
        <strong>Leave the nodes and logic to us, so you get clean, reliable automations that run without babysitting.</strong>
      </motion.p>

      {/* Pricing pill */}
      <motion.div {...fadeUpAnimate(0.32)} className="mt-5 sm:mt-6 inline-flex items-center gap-0 rounded-full overflow-hidden"
        style={{ outline: `1.5px solid rgba(234,75,113,0.3)`, background: "#fff9f7", boxShadow: "0 1px 6px rgba(234,75,113,0.1)" }}
      >
        <div className="flex items-center gap-2 px-4 py-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EA4B71] animate-pulse shrink-0" />
          <span className="text-[12px] sm:text-[13px] font-semibold text-[#6b2500] whitespace-nowrap">
            n8n Consulting &amp; Automation
          </span>
        </div>
        <div style={{ width: "1.5px", alignSelf: "stretch", background: "rgba(234,75,113,0.3)" }} />
        <div className="px-4 py-2 flex items-center" style={{ background: ACCENT }}>
          <span className="text-[13px] sm:text-[14px] text-white whitespace-nowrap" style={{ fontWeight: 600 }}>
            $25/hr
          </span>
        </div>
      </motion.div>

      <motion.div {...fadeUpAnimate(0.4)} className="mt-8 sm:mt-10">
        <Button variant="secondary" size="md" className="text-[11px]! sm:text-sm! px-3! py-2! sm:px-5! sm:py-3!" onClick={openCalendly}>
          Book a free n8n discovery call
        </Button>
      </motion.div>

    </div>
  </section>
);

// ── Services ──────────────────────────────────────────────────────────────────

const ServicesSection = () => (
  <section className="relative bg-[#0f0f0f] py-16 sm:py-20 lg:py-28 overflow-hidden">

    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full blur-3xl"
      style={{ background: `${ACCENT}18` }} />

    <div className="relative max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14 sm:mb-18">
        <div className="flex-1">
          <motion.div {...fadeUp(0)} className="mb-5">
            <Chip style={{ background: "rgba(234,75,113,0.15)", color: "#EA4B71" }}>
              n8n services we deliver
            </Chip>
          </motion.div>
          <motion.h2
            {...fadeUp(0.07)}
            className="font-extrabold text-white tracking-tight leading-[1.1] text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] max-w-2xl m-0"
          >
            Get n8n working<br />the way it's supposed to
          </motion.h2>
          <motion.p {...fadeUp(0.13)} className="text-white/45 text-sm sm:text-base mt-4 max-w-md m-0">
            Reliably, securely, and without constant firefighting.
          </motion.p>
        </div>
        <motion.div {...fadeUp(0.18)} className="shrink-0 lg:pt-3">
          <Button variant="primary" size="lg" onClick={openCalendly}>
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
              <div className="w-6 h-0.5 rounded-full shrink-0" style={{ background: ACCENT }} />
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
        <Chip style={{ background: "#fff0f3", color: ACCENT }}>
          Results You Can Expect
        </Chip>
      </motion.div>

      <motion.h2
        {...fadeUp(0.07)}
        className="font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-4 text-[1.8rem] sm:text-[2.5rem] lg:text-[3.5rem] max-w-3xl"
      >
        n8n's power + our expertise<br />= your operations transformed
      </motion.h2>

      <motion.p {...fadeUp(0.12)} className="text-[#666] text-sm sm:text-base mb-10 sm:mb-14 max-w-2xl">
        n8n gives you more flexibility than any other automation platform - and when paired with experts who know it inside-out, here's what that looks like for your business:
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
              className="font-extrabold leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: ACCENT }}
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
          <Chip style={{ background: "#fff0f3", color: ACCENT }}>
            n8n Case Studies
          </Chip>
        </motion.div>

        <motion.h2
          {...fadeUp(0.07)}
          className="font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-4 text-[1.8rem] sm:text-[2.5rem] lg:text-[3.5rem] max-w-3xl"
        >
          Real businesses. Real results.
        </motion.h2>

        <motion.p {...fadeUp(0.12)} className="text-[#666] text-sm sm:text-base mb-10 sm:mb-14 max-w-2xl">
          Here's what happens when expert n8n automation meets the right business processes.
        </motion.p>

        <motion.div {...fadeUp(0.16)} className="flex flex-col divide-y divide-[#e0e0e0] border-t border-[#e0e0e0]">
          {CASE_STUDIES.map((cs, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
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
                        <div>
                          <p className="text-xs font-semibold text-[#aaa] uppercase tracking-widest mb-3">The Challenge</p>
                          <p className="text-sm sm:text-base text-[#555] leading-relaxed m-0">{cs.problem}</p>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {cs.tools.map((t, j) => (
                              <span key={j} className="text-xs font-medium text-[#666] bg-white border border-[#e0e0e0] rounded-full px-3 py-1">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#aaa] uppercase tracking-widest mb-4">Key Results</p>
                          <div className="flex flex-col gap-3">
                            {cs.results.map((r, j) => (
                              <div key={j} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                  style={{ background: ACCENT }}>
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
          <Chip style={{ background: "#fff0f3", color: ACCENT }}>
            Common n8n Automations We Build
          </Chip>
        </motion.div>

        <motion.p {...fadeUp(0.07)} className="font-bold text-[#1A1A1A] text-base sm:text-lg mb-2 max-w-3xl">
          From lead management to AI-powered support, we build high-impact n8n workflows that reshape your operations.
        </motion.p>

        <motion.p {...fadeUp(0.12)} className="text-[#666] text-sm sm:text-base mb-8 sm:mb-10">
          Some examples of what we build for our clients:
        </motion.p>

        <motion.div {...fadeUp(0.16)} className="flex flex-wrap gap-2 mb-6">
          {AUTOMATIONS.map((a, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white transition-all duration-200"
              style={{
                background: a.color,
                boxShadow: activeTab === i ? `0 0 0 2px white, 0 0 0 4px ${a.color}` : "none",
                opacity: activeTab === i ? 1 : 0.75,
              }}
            >
              {a.tab}
            </button>
          ))}
        </motion.div>

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
            <div className="lg:w-56 xl:w-64 shrink-0 bg-white p-8 sm:p-10 flex items-start lg:items-center border-b lg:border-b-0 lg:border-r border-[#e8e8e8]">
              <h3
                className="font-extrabold text-[#1A1A1A] leading-[1.1] whitespace-pre-line m-0"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
              >
                {active.label}
              </h3>
            </div>
            <div className="flex-1 p-7 sm:p-8" style={{ background: "#fff9f7" }}>
              <p className="font-semibold text-[#1A1A1A] text-sm sm:text-base mb-6 m-0">
                {active.title}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {active.steps.map((step, j) => (
                  <div
                    key={j}
                    className={`py-5 px-1 sm:px-3 ${j < active.steps.length - 2 ? "border-b border-[#e8e8e8]" : ""} ${j % 2 === 0 ? "sm:border-r sm:border-[#e8e8e8] sm:pr-6" : "sm:pl-6"}`}
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
  <section className="bg-[#fafafa] py-16 sm:py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

      <motion.div {...fadeUp(0)} className="mb-5">
        <Chip style={{ background: "#fff0f3", color: ACCENT }}>
          n8n Consulting Pricing
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
                ? "bg-[#1A1A1A] border-2"
                : "bg-white border border-[#e8e8e8]"
            }`}
            style={{
              borderColor: plan.featured ? ACCENT : undefined,
              boxShadow: plan.featured
                ? `0 8px 40px ${ACCENT}30`
                : "0 2px 16px rgba(0,0,0,0.04)",
            }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
                {plan.badge}
              </p>
              <h3 className={`font-bold text-xl leading-snug m-0 ${plan.featured ? "text-white" : "text-[#1A1A1A]"}`}>
                {plan.label}
              </h3>
            </div>

            <div>
              <span
                className={`block font-extrabold leading-none ${plan.featured ? "text-white" : "text-[#1A1A1A]"}`}
                style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}
              >
                {plan.price}
              </span>
              <p className={`text-sm mt-1 m-0 ${plan.featured ? "text-white/45" : "text-[#999]"}`}>
                {plan.period}
              </p>
            </div>

            <div className="flex flex-col gap-2.5 flex-1">
              {plan.features.map((f, j) => (
                <div key={j} className="flex items-start gap-2.5">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      plan.featured ? "" : "border-2"
                    }`}
                    style={{
                      background: plan.featured ? ACCENT : "transparent",
                      borderColor: plan.featured ? "transparent" : ACCENT,
                    }}
                  >
                    <Check size={10} className={plan.featured ? "text-white" : ""} style={{ color: plan.featured ? "white" : ACCENT }} strokeWidth={3} />
                  </div>
                  <p className={`text-sm leading-snug m-0 ${plan.featured ? "text-white/65" : "text-[#555]"}`}>
                    {f}
                  </p>
                </div>
              ))}
            </div>

            <Button
              variant={plan.featured ? "primary" : "secondary"}
              size="md"
              className="text-sm!"
              onClick={openCalendly}
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
    chip="n8n FAQs"
    heading="Everything you need to know"
    subheading="Common questions about our n8n consulting and automation services."
    chipStyle={{ background: "#fff0f3", color: ACCENT }}
    colors={FAQ_COLORS}
  />
);

// ── Final CTA ─────────────────────────────────────────────────────────────────

const CtaSection = () => (
  <section className="bg-white py-16 sm:py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

      <motion.div {...fadeUp(0)} className="mb-5">
        <Chip style={{ background: "#fff0f3", color: ACCENT }}>
          Unlock effortless scale with n8n
        </Chip>
      </motion.div>

      <motion.h2
        {...fadeUp(0.07)}
        className="font-extrabold text-[#1A1A1A] leading-[1.05] mb-14 sm:mb-20 max-w-3xl"
        style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
      >
        No per-task fees.<br />No compromises.
      </motion.h2>

      <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-0 mb-12 sm:mb-16">

        <motion.div
          {...fadeUp(0.12)}
          className="w-full sm:flex-1 rounded-2xl border-2 p-7 sm:p-8"
          style={{ borderColor: ACCENT, background: "#fff5f7" }}
        >
          <p className="font-bold text-[#1A1A1A] text-sm sm:text-base mb-4 m-0">Say g'bye to:</p>
          {GOODBYE_ITEMS.map((item, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 py-4">
                <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0" style={{ borderColor: ACCENT }}>
                  <X size={10} strokeWidth={2.5} style={{ color: ACCENT }} />
                </div>
                <p className="text-sm text-[#333] m-0">{item}</p>
              </div>
              {i < GOODBYE_ITEMS.length - 1 && <div className="h-px" style={{ background: "rgba(234,75,113,0.15)" }} />}
            </div>
          ))}
        </motion.div>

        <div className="hidden sm:block shrink-0" style={{ width: 90 }}>
          <svg width="90" height="240" viewBox="0 0 90 240" fill="none">
            <path d="M 0 125 C 45 125, 45 205, 90 205" stroke="#1A1A1A" strokeWidth="2" fill="none" />
            <circle cx="0" cy="125" r="7" fill="white" stroke="#1A1A1A" strokeWidth="2" />
            <circle cx="90" cy="205" r="7" fill="white" stroke="#1A1A1A" strokeWidth="2" />
          </svg>
        </div>

        <motion.div
          {...fadeUp(0.22)}
          className="w-full sm:flex-1 sm:mt-20 rounded-2xl p-7 sm:p-8"
          style={{ background: ACCENT, boxShadow: "5px 5px 0px #b8274a" }}
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

      <motion.div {...fadeUp(0.3)} className="flex justify-center">
        <Button variant="secondary" size="md" onClick={openCalendly}>
          Book a free n8n discovery call
        </Button>
      </motion.div>

    </div>
  </section>
);

// ── Page ──────────────────────────────────────────────────────────────────────

const N8nConsultingPage = () => (
  <>
    <HeroSection />
    <ServicesSection />
    <ResultsSection />
    <CaseStudiesSection />
    <PremiumQuoteStack
      quotes={N8N_QUOTES}
      badge="What Clients Say About n8n Automation"
      heading={`We build n8n workflows\nthat run reliably\nin production`}
      subheading="Here's what clients say about working with us"
    />
    <WorkflowFramework
      steps={N8N_STEPS}
      chip="Our n8n automation process"
      heading="From brief to live automation"
      hideDescription
    />
    <AutomationsSection />
    <PricingSection />
    <FaqSection />
    <CtaSection />
  </>
);

export default N8nConsultingPage;

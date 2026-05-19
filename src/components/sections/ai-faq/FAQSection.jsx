import { faqData } from "../../../data/aiFaqSectionData";
import TwoColumnFAQ from "@/components/sections/faq/TwoColumnFAQ";

const faqs = faqData.map((item) => ({ q: item.question, a: item.answer }));

const AI_COLORS = [
  { bg: "#ffedef", border: "#ff9aaa" },
  { bg: "#eef5e0", border: "#b5c86a" },
  { bg: "#fff8f0", border: "#f5d5b0" },
];

export default function FAQSection() {
  return (
    <TwoColumnFAQ
      faqs={faqs}
      chip="Frequently Asked Questions"
      heading="FAQs"
      subheading="Everything you need to know about our AI automation services."
      colors={AI_COLORS}
    />
  );
}

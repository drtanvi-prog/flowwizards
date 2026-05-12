import ServicePageHero, { SHWord } from '../components/sections/service-page-hero/ServicePageHero'
import AIValueProp from '../components/sections/ai-value-prop'
import AIAutomationCover from '../components/sections/ai-automation-cover'
import AIAutomationFramework from '../components/sections/ai-automation-framework'
import AICaseStudies from '../components/sections/ai-case-studies'
import AIEngagements from '../components/sections/ai-engagements'
import PremiumQuoteStack from '../components/sections/quotes'
import ToolkitSection from '../components/sections/toolkit'
import FAQSection from '@/components/sections/ai-faq/FAQSection'
import AICTABanner from '../components/sections/ai-cta-banner'
import ServicesSection from '../components/sections/services'
import { useCaseCategories } from '../data/aiUseCasesData'
import { aiTools, aiCells, aiMobileCells, aiBadgeMap } from '../data/aiToolkitData'
import { aiReviews } from '../data/aiReviewsData'

const AIAutomationPage = () => (
  <>
    <ServicePageHero
      badge="AI Automation Services"
      heading={
        <>
          <SHWord>AI consulting</SHWord>, implementation,{' '}
          and ongoing <SHWord>optimization</SHWord>{' '}
          for revenue, operations,{' '}
          and data workflows.
        </>
      }
      body="Your team is doing work that AI can do. At Flow Wizards, we design and implement custom AI automations and workflows that eliminate manual work, accelerate operations, and deliver measurable ROI across sales, ops, support, and internal systems."
    />
    <AIAutomationCover />
    <AIAutomationFramework />
    <AIValueProp />
    <AICTABanner showImage />
    <ServicesSection
      categories={useCaseCategories}
      badge="AI Automation Use Cases"
      heading={"From sales to ops to finance,\nwe'll help you put AI to work."}
      subheading=""
      variant="dark"
    />
    <AICTABanner showImage />
    <AICaseStudies />
    <PremiumQuoteStack
      quotes={aiReviews}
      badge='"Absolute Rockstars"'
      heading={'And 500+ (and counting) other\n5-star reviews'}
      ctaHeading="Want results like these?"
      ctaLabel="Start with a Discovery Call"
    />
    <ToolkitSection
      badge="Automation Platforms & AI Stack"
      heading={<>If you've got any of these tools (and a whole lot more), we can make your workflow more efficient</>}
      subText={null}
      descriptionContent={
        <div className="max-w-2xl">
          <p className="text-sm font-bold text-[#1a1a1a] mb-2">Custom Workflow Automation Integrations</p>
          <p className="text-sm text-[#555] leading-relaxed mb-2">
            At Flow Wizards, our approach is simple: design workflows around how your business operates, not around forcing you into a specific platform.
          </p>
          <p className="text-sm text-[#555] leading-relaxed">
            When off-the-shelf integrations aren't enough, we work with custom APIs and internal systems to automate complex, business-specific workflows.
          </p>
        </div>
      }
      toolsList={aiTools}
      badgeMap={aiBadgeMap}
      cells={aiCells}
      mobileCells={aiMobileCells}
      desktopCols={8}
      mobileCols={3}
      ctaLabel="Explore all integrations"
    />
    <AIEngagements />
    <AICTABanner
      heading="But first, let’s get to know each other."
      buttonLabel="Book a Discovery Call"
      showSubtext={false} />
    <FAQSection />
    <AICTABanner
      heading="AI is just a tool. Better operations are the outcome."
      buttonLabel="It starts with a Discovery Call"
      showSubtext={false}
    />
  </>
)

export default AIAutomationPage

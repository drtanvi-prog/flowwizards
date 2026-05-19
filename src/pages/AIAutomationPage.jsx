import ServicePageHero, { SHWord } from '@/components/sections/service-page-hero/ServicePageHero'
import AIValueProp from '@/components/sections/ai-value-prop'
import AIAutomationCover from '@/components/sections/ai-automation-cover'
import AIAutomationFramework from '@/components/sections/ai-automation-framework'
import AICaseStudies from '@/components/sections/ai-case-studies'
import AIEngagements from '@/components/sections/ai-engagements'
import PremiumQuoteStack from '@/components/sections/quotes'
import ToolkitSection from '@/components/sections/toolkit'
import FAQSection from '@/components/sections/ai-faq/FAQSection'
import AICTABanner from '@/components/sections/ai-cta-banner'
import FooterCTA from '@/components/common/FooterCTA'
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
          Stop doing <SHWord>manually</SHWord> what{' '}
          AI can handle <SHWord>automatically</SHWord>{' '}
          - faster, smarter,{' '}
          and without the overhead.
        </>
      }
      body="Most teams are still running on spreadsheets, copy-paste workflows, and manual handoffs that eat hours every week. Flow Wizards builds AI-powered systems that take that work off your plate - freeing your team to focus on what actually moves the needle."
    />
    <AIAutomationCover />
    <AIAutomationFramework />
    <AIValueProp />
    <AICTABanner showImage />
    <ServicesSection
      categories={useCaseCategories}
      badge="AI Automation Use Cases"
      heading={"From sales to ops to finance -\nhere's where we've seen AI make the biggest dent."}
      subheading=""
      variant="dark"
    />
    <AICTABanner showImage />
    <AICaseStudies />
    <PremiumQuoteStack
      quotes={aiReviews}
      badge='"Absolute Rockstars"'
      heading={'And 500+ (and counting) other\n5-star reviews'}
      // ctaHeading="Want results like these?"
      // ctaLabel="Start with a Discovery Call"
    />
    <ToolkitSection
      badge="Automation Platforms & AI Stack"
      heading={<>Already using some of these? Good - we know them well.</>}
      subText={null}
      descriptionContent={
        <p className="text-sm text-[#555] leading-relaxed max-w-sm">
          We build around your stack. If native connectors run short, we use APIs and webhooks to fill the gap.
        </p>
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
      heading="Before we scope anything, we want to understand your operation."
      buttonLabel="Book a Discovery Call"
      showSubtext={false} />
    <FAQSection />
    <FooterCTA
      heading="The goal isn’t more automation. It’s a business that runs without you babysitting it."
      subtext="Let’s map out what that looks like for your operation."
      buttonText="Let’s talk about what that looks like"
    />
  </>
)

export default AIAutomationPage

import ServicePageHero, { SHWord } from '@/components/sections/service-page-hero/ServicePageHero'
import WorkflowBenefitsSection from '@/components/sections/workflow-automation/WorkflowBenefitsSection';
import WorkflowQuoteStack from '@/components/sections/workflow-automation/WorkflowQuoteStack';
import WorkflowFramework from '@/components/sections/workflow-automation/WorkflowFramework';
import TrustedSection from '@/components/sections/trusted';
import CustomIntegrationsSection from '@/components/sections/workflow-automation/CustomIntegrationsSection';
import AllToolsSection from '@/components/sections/workflow-automation/AllToolsSection';
import TeamExamplesSection from '@/components/sections/workflow-automation/TeamExamplesSection';
import AICTABanner from '@/components/sections/ai-cta-banner';
import { ToolsWeAutomate } from '@/components/sections/workflow-automation/WorkflowToolsAndFAQ';
import WorkflowIncludedSection from '@/components/sections/workflow-automation/WorkflowIncludedSection';
import TwoColumnFAQ from '@/components/sections/faq/TwoColumnFAQ';

const steps = [
  {
    num: '01',
    title: 'Discovery & Workflow Audit',
    desc: 'We review your existing workflows to identify manual steps, bottlenecks, and points of failure.'
  },
  {
    num: '02',
    title: 'Process Mapping & Prioritization',
    desc: 'Workflows are mapped end-to-end and prioritized based on business impact and feasibility.'
  },
  {
    num: '03',
    title: 'Automation Design & Implementation',
    desc: 'We get to work designing and building automations.'
  },
  {
    num: '04',
    title: 'Launch and Refine',
    desc: 'Workflows go live with monitoring in place and are refined as your business evolves.'
  },
  {
    num: '05',
    title: 'Monitoring & Ongoing Optimization',
    desc: 'We monitor performance and continuously improve workflows as tools and needs change.'
  },
]

const WorkflowAutomationPage = () => (
  <>
    <ServicePageHero
      badge="Workflow Automation Services"
      heading={
        <>
          Workflow trouble <SHWord>never</SHWord> sleeps,{' '}
          but <SHWord>with us,</SHWord> you can.
        </>
      }
      body="Let Flow Wizards design and implement AI-powered workflow automation services across your CRM, marketing, support, and operations - so your processes run automatically, reliably, and securely."
    />
    <WorkflowBenefitsSection />
    <TrustedSection hideBottom heading="Trusted by hundreds of businesses globally" />
    <AICTABanner
      heading="Book a Free Discovery Session"
      buttonLabel="Book a Free Discovery Call"
      showSubtext={false}
      showImage={false}
    />
    <WorkflowIncludedSection />
    <WorkflowFramework
      chip="Our Workflow Automation Process"
      heading="Our Workflow Automation Process"
      description="We use a proven, structured delivery process to move from clarity to execution, keeping outcomes and accountability front and center."
      hideHeading
      hideDescription
      steps={steps}
    />
    <ToolsWeAutomate />
    <TwoColumnFAQ
      chip="FAQ"
      heading="Workflow Automation Services FAQ"
      faqs={[
        { q: "What types of workflows can you automate?", a: "We can automate sales, marketing, support, operations, and more-across nearly any business tool or platform." },
        { q: "Which tools do you work with?", a: "We work with 100+ leading SaaS tools, including Zapier, HubSpot, Airtable, n8n, and more." },
        { q: "Do you offer ongoing support?", a: "Yes! We provide ongoing support, optimization, and maintenance for all automations we build." },
        { q: "How fast can you start?", a: "We can typically start within a week, depending on your requirements." },
        { q: "How do you handle security and access?", a: "We use secure, best-practice methods for all integrations and never store your credentials." },
        { q: "What's the difference between workflow automation and BPA?", a: "Workflow automation focuses on automating specific processes, while BPA (Business Process Automation) is a broader approach to automating entire business operations." },
      ]}
    />
    <AllToolsSection />
    <CustomIntegrationsSection />
    <TeamExamplesSection />
    <WorkflowQuoteStack />

    <AICTABanner
      heading="Ready for results like theirs?"
      buttonLabel="Book a Free Discovery Call"
      showSubtext={false}
      showImage={false}
    />
  </>
)

export default WorkflowAutomationPage

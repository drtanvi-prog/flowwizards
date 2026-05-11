import ServicePageHero, { SHWord } from '../components/sections/service-page-hero/ServicePageHero'

const AIAutomationPage = () => (
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
)

export default AIAutomationPage

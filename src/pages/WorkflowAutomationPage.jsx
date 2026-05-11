import ServicePageHero, { SHWord } from '../components/sections/service-page-hero/ServicePageHero'

const WorkflowAutomationPage = () => (
  <ServicePageHero
    badge="Workflow Automation Services"
    heading={
      <>
        Workflow trouble <SHWord>never</SHWord> sleeps,{' '}
        but <SHWord>with us,</SHWord> you can.
      </>
    }
    body="Let Flow Wizards design and implement AI-powered workflow automation services across your CRM, marketing, support, and operations — so your processes run automatically, reliably, and securely."
  />
)

export default WorkflowAutomationPage

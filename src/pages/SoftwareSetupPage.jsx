import ServicePageHero, { SHWord } from '../components/sections/service-page-hero/ServicePageHero'

const SoftwareSetupPage = () => (
  <ServicePageHero
    badge="Software Setup Services"
    heading={
      <>
        The setup is half <SHWord>the battle.</SHWord>{' '}
        With <SHWord>Flow Digital,</SHWord>{' '}
        you've already won.
      </>
    }
    body="We'll handle it start to finish — you just get ready for efficiency like you've never seen before. Not sure if software setup is what you need?"
    ctaText="Set up and optimize my software"
  />
)

export default SoftwareSetupPage

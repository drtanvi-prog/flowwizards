import ServicePageHero, { SHWord } from '../components/sections/service-page-hero/ServicePageHero'

const FractionalChiefPage = () => (
  <ServicePageHero
    badge="Fractional Chief Automation"
    heading={
      <>
        99 automation <SHWord>problems?</SHWord>{' '}
        We've got a <SHWord>solution</SHWord> for them all.
      </>
    }
    body="Offload all automation and process headaches onto us. As your Fractional Chief Automation Officers, we'll take complete, proactive ownership of all things automation — at a fraction of the cost of a full-time hire."
  />
)

export default FractionalChiefPage

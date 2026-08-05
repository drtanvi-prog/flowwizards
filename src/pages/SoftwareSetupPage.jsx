import ServicePageHero, { SHWord } from '@/components/sections/service-page-hero/ServicePageHero';
import SoftwareSetupSection from '@/components/sections/Software-setup-section';
import ToolkitSection from '@/components/sections/toolkit';
import PremiumFeatureSection from '@/components/sections/software-setup/PremiumFeatureSection';
import ResultsSection from '@/components/sections/software-setup/ResultsSection';
import QuoteSection from '@/components/sections/software-setup/QuoteSection';
import { customTools } from '@/data/customToolkitData';
import { CUSTOM_BADGE_MAP } from '@/components/sections/toolkit/CustomBadges';
import { CUSTOM_CELLS, CUSTOM_MOBILE_CELLS } from '@/components/sections/toolkit/customGridConfig';

const SoftwareSetupPage = () => (
  <>
    <ServicePageHero
      badge="Software Setup Services"
      heading={
        <>
          The setup is half <SHWord>the battle.</SHWord>{' '}
          With <SHWord>Flow Wizards,</SHWord>{' '}
          you've already won.
        </>
      }
      body="We'll handle it start to finish - you just get ready for efficiency like you've never seen before. Not sure if software setup is what you need?"
      ctaText="Set up and optimize my software"
      disableHover={true}
    />
    <SoftwareSetupSection />
    <ToolkitSection
      badge="Software we set up for you"
      heading={<><span style={{ color: '#FF8800' }}>What can we set up for you?</span></>}
      subText="Don’t see your tool here? Get in touch and tell us about your specific needs."
      toolsList={customTools}
      badgeMap={CUSTOM_BADGE_MAP}
      cells={CUSTOM_CELLS}
      mobileCells={CUSTOM_MOBILE_CELLS}
      disableHover={true}
    />
    <PremiumFeatureSection />
    <ResultsSection />
    <QuoteSection />
  </>
);

export default SoftwareSetupPage;

import { motion } from 'framer-motion'
import ServicePageHero, { SHWord } from '@/components/sections/service-page-hero/ServicePageHero'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease },
})

const H2 = ({ children }) => (
  <h2 className="font-extrabold text-[#1A1A1A] mt-10 mb-3" style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)' }}>
    {children}
  </h2>
)

const H3 = ({ children }) => (
  <h3 className="font-bold text-[#1A1A1A] mt-6 mb-2" style={{ fontSize: '1rem' }}>
    {children}
  </h3>
)

const P = ({ children, className = '' }) => (
  <p className={`text-[#444] leading-relaxed mb-3 ${className}`} style={{ fontSize: '0.9rem' }}>
    {children}
  </p>
)

const UL = ({ children }) => (
  <ul className="mb-4 pl-1 flex flex-col gap-1.5">{children}</ul>
)

const LI = ({ children }) => (
  <li className="flex items-start gap-2.5 text-[#444] leading-relaxed" style={{ fontSize: '0.9rem' }}>
    <span className="mt-1.75 shrink-0 rounded-full bg-[#ff4f00]" style={{ width: 5, height: 5 }} />
    <span>{children}</span>
  </li>
)

const HR = () => <div className="my-8 h-px bg-[#ebebeb]" />

const SectionBadge = ({ label, date, accent }) => (
  <div className="flex flex-wrap items-center gap-3 mb-8">
    <span
      className="inline-block rounded-lg px-4 py-1.5 font-medium"
      style={{
        fontSize: '0.78rem',
        border: `1px solid ${accent ? '#ff4f00' : '#1A1A1A'}`,
        color: accent ? '#ff4f00' : '#1A1A1A',
        background: accent ? 'white' : '#FEF6F5',
      }}
    >
      {label}
    </span>
    {date && (
      <span className="text-[#888]" style={{ fontSize: '0.8rem' }}>
        {date}
      </span>
    )}
  </div>
)

/* ── Responsive table wrapper ──────────────────────────────────────────────── */
const TableWrap = ({ children }) => (
  <div className="overflow-x-auto rounded-2xl border border-[#ebebeb] mt-4 mb-6">
    <table className="w-full" style={{ borderCollapse: 'collapse' }}>
      {children}
    </table>
  </div>
)

const TH = ({ children, width }) => (
  <th
    className="bg-[#FEF6F5] text-left font-bold text-[#1A1A1A] px-4 py-3 border-b border-[#ebebeb]"
    style={{ fontSize: '0.8rem', width }}
  >
    {children}
  </th>
)

const TD = ({ children, highlight }) => (
  <td
    className="px-4 py-3 align-top border-b border-[#ebebeb] text-[#444]"
    style={{ fontSize: '0.83rem', lineHeight: 1.6 }}
  >
    {highlight ? (
      <span
        className="inline-block px-2 py-0.5 rounded-full font-semibold"
        style={{
          fontSize: '0.73rem',
          background: children === 'YES' ? '#FFF5F0' : '#f5f5f5',
          color: children === 'YES' ? '#ff4f00' : '#888',
        }}
      >
        {children}
      </span>
    ) : (
      children
    )}
  </td>
)

const PrivacyPolicyPage = () => (
  <>
    <ServicePageHero
      badge="Privacy and legal"
      heading={<>Privacy and <SHWord>legal</SHWord></>}
      body="Flow Wizards Inc. respects your privacy and is committed to protecting it through our compliance with this policy."
    />

    {/* ══════════════════════════════════════════════════════════════════════
        SECTION 1 — GENERAL PRIVACY POLICY
    ══════════════════════════════════════════════════════════════════════ */}
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 xl:px-12">
        <motion.div {...fadeUp(0.05)}>
          <SectionBadge label="Flow Wizards Privacy Policy" date="Last Modified: June 18, 2025" />

          <P>
            Flow Wizards Inc. ("Company" or "We") respects your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website https://www.flowwizards.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </P>
          <P>This policy applies to information we collect:</P>
          <UL>
            <LI>On this Website.</LI>
            <LI>In email, text, and other electronic messages between you and this Website.</LI>
            <LI>Through mobile and desktop applications you download from this Website, which provide dedicated non-browser-based interaction between you and this Website.</LI>
            <LI>When you interact with our advertising and applications on third-party websites and services, if those applications or advertising include links to this policy.</LI>
          </UL>
          <P>This policy does not apply to information collected by:</P>
          <UL>
            <LI>Us offline or through any other means, including on any other website operated by Company or any third party; or</LI>
            <LI>Any third party, including through any application or content (including advertising) that may link to or be accessible from or through the Website.</LI>
          </UL>
          <P>
            Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy. This policy may change from time to time (see Changes to Our Privacy Policy). Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.
          </P>
        </motion.div>

        <HR />

        {/* Children */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Children Under the Age of 16</H2>
          <P>
            Our Website is not intended for children under 16 years of age. No one under age 16 may provide any information to or on the Website. We do not knowingly collect personal information from children under 16. If you are under 16, do not use or provide any information on this Website or through any of its features, register on the Website, make any purchases through the Website, use any of the interactive or public comment features of this Website, or provide any information about yourself to us, including your name, address, telephone number, email address, or any screen name or user name you may use. If we learn we have collected or received personal information from a child under 16 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 16, please contact us at{' '}
            <a href="mailto:privacy@flowwizards.com" className="text-[#ff4f00] hover:underline font-medium">privacy@flowwizards.com</a>.
          </P>
        </motion.div>

        <HR />

        {/* Information We Collect */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Information We Collect About You and How We Collect It</H2>
          <P>We collect several types of information from and about users of our Website, including information:</P>
          <UL>
            <LI>By which you may be personally identified, such as name, postal address, email address and telephone number ("<strong>personal information</strong>");</LI>
            <LI>That is about you but individually does not identify you, such as hashed IP addresses, session durations and website navigation; About your internet connection, the equipment you use to access our Website, and usage details;</LI>
            <LI>Payment credentials when you make a payment; and</LI>
            <LI>Log-in credentials on third-party platforms.</LI>
          </UL>
          <P>We collect this information:</P>
          <UL>
            <LI>Directly from you when you provide it to us.</LI>
            <LI>Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons and other tracking technologies.</LI>
            <LI>From third parties, for example, our business partners.</LI>
          </UL>
        </motion.div>

        <HR />

        {/* Information You Provide */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Information You Provide to Us</H2>
          <P>The information we collect on or through our Website may include:</P>
          <UL>
            <LI>Information that you provide by filling in forms on our Website. This includes information provided at the time of registering to use our Website, subscribing to our service or requesting further services. We may also ask you for information when you report a problem with our Website.</LI>
            <LI>Records and copies of your correspondence (including email addresses), if you contact us.</LI>
            <LI>Details of transactions you carry out through our Website and of the fulfillment of your orders. You may be required to provide financial information before placing an order through our Website.</LI>
            <LI>Your search queries on the Website.</LI>
          </UL>
        </motion.div>

        <HR />

        {/* Automatic Data Collection */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Information We Collect Through Automatic Data Collection Technologies</H2>
          <P>As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:</P>
          <UL>
            <LI>Details of your visits to our Website, including traffic data, location data, logs and other communication data and the resources that you access and use on the Website.</LI>
            <LI>Information about your computer and internet connection, including your IP address, operating system, and browser type.</LI>
          </UL>
          <P>
            We also may use these technologies to collect information about your online activities over time and across third-party websites or other online services (behavioral tracking). Our website contains a default setting that does not allow cookies, however you can accept cookies by selecting the option to choose them on our website.
          </P>
          <P>The information we collect automatically may include personal information, and we may maintain it or associate it with personal information we collect in other ways or receive from third parties. It helps us to improve our Website and to deliver a better and more personalized service, including by enabling us to:</P>
          <UL>
            <LI>Estimate our audience size and usage patterns.</LI>
            <LI>Store information about your preferences, allowing us to customize our Website according to your individual interests.</LI>
            <LI>Speed up your searches. Recognize you when you return to our Website.</LI>
          </UL>
          <P>The technologies we use for this automatic data collection may include:</P>
          <UL>
            <LI><strong>Cookies (or browser cookies).</strong> A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting, you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website. For information about managing your privacy and security settings for cookies, see Choices About How We Use and Disclose Your Information.</LI>
            <LI><strong>Web Beacons.</strong> Pages of our Website and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).</LI>
          </UL>
        </motion.div>

        <HR />

        {/* Third-Party Cookies */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Third-Party Use of Cookies</H2>
          <P>
            Some content or applications, including advertisements, on the Website are served by third-parties, including advertisers, ad networks and servers, content providers, and application providers. These third parties may use cookies, alone or in conjunction with web beacons or other tracking technologies, to collect information about you when you use our website. The information they collect may be associated with your personal information or they may collect information, including personal information, about your online activities over time and across different websites and other online services. They may use this information to provide you with interest-based (behavioral) advertising or other targeted content.
          </P>
          <P>
            We do not control these third parties' tracking technologies or how they may be used. If you have any questions about an advertisement or other targeted content, you should contact the responsible provider directly. For information about how you can opt out of receiving targeted advertising from many providers, see Choices About How We Use and Disclose Your Information.
          </P>
        </motion.div>

        <HR />

        {/* How We Use */}
        <motion.div {...fadeUp(0.05)}>
          <H2>How We Use Your Information</H2>
          <P>We use information that we collect about you or that you provide to us, including any personal information:</P>
          <UL>
            <LI>To present our Website and its contents to you.</LI>
            <LI>To provide you with information, products, or services that you request from us.</LI>
            <LI>To fulfill any other purpose for which you provide it.</LI>
            <LI>To provide you with notices about your [account/subscription], including expiration and renewal notices.</LI>
            <LI>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.</LI>
            <LI>To notify you about changes to our Website or any products or services we offer or provide though it.</LI>
            <LI>In any other way we may describe when you provide the information.</LI>
            <LI>For any other purpose with your consent.</LI>
          </UL>
          <P>
            We may also use your information to contact you about goods and services that may be of interest to you. If you do not want us to use your information in this way, please follow the unsubscribe link appearing each marketing communication we send to adjust your preferences. For more information, see Choices About How We Use and Disclose Your Information.
          </P>
        </motion.div>

        <HR />

        {/* Disclosure */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Disclosure of Your Information</H2>
          <P>We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:</P>
          <UL>
            <LI>To our subsidiaries and affiliates.</LI>
            <LI>To contractors, service providers, and other third parties we use to support our business.</LI>
            <LI>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Flow Wizards Inc.'s assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by Flow Wizards Inc. about our Website users is among the assets transferred.</LI>
            <LI>To fulfill the purpose for which you provide it. For any other purpose disclosed by us when you provide the information.</LI>
            <LI>With your consent.</LI>
          </UL>
          <P>We may also disclose your personal information:</P>
          <UL>
            <LI>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</LI>
            <LI>To enforce or apply our terms of use /terms-of-service and other agreements, including for billing and collection purposes.</LI>
            <LI>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Flow Wizards Inc., our customers, or others.</LI>
          </UL>
        </motion.div>

        <HR />

        {/* Choices */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Choices About How We Use and Disclose Your Information</H2>
          <P>We strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the following control over your information:</P>
          <UL>
            <LI><strong>Tracking Technologies and Advertising.</strong> You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly.</LI>
            <LI><strong>Promotional Offers from the Company.</strong> If you do not wish to have your contact information used by the Company to promote our own or third parties' products or services, you can opt-out by following the unsubscribe link contained in each of our marketing communications to adjust your preferences.</LI>
          </UL>
          <P>
            We do not control third parties' collection or use of your information to serve interest-based advertising. However, these third parties may provide you with ways to choose not to have your information collected or used in this way. You can opt out of receiving targeted ads from members of the Network Advertising Initiative ("<strong>NAI</strong>") on the NAI's website.
          </P>
        </motion.div>

        <HR />

        {/* Accessing and Correcting */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Accessing and Correcting Your Information</H2>
          <P>
            If you have an account, you can review and change your personal information by logging into the Website and visiting your account profile page. You may also send us an email at{' '}
            <a href="mailto:privacy@flowwizards.com" className="text-[#ff4f00] hover:underline font-medium">privacy@flowwizards.com</a>{' '}
            to request access to, correct, or delete any personal information that you have provided to us. Alternatively, you can submit a formal Data Subject Access Request using our{' '}
            <a href="/privacy-choices" target="_blank" rel="noopener noreferrer" className="text-[#ff4f00] hover:underline font-medium">online form</a>.{' '}
            We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.
          </P>
        </motion.div>

        <HR />

        {/* State Privacy Rights */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Your State Privacy Rights</H2>
          <P>
            State consumer privacy laws may provide their residents with additional rights regarding our use of their personal information. California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, and Virginia provide (now or in the future) their state residents with rights to:
          </P>
          <UL>
            <LI>Confirm whether we process their personal information.</LI>
            <LI>Access and delete certain personal information.</LI>
            <LI>Correct inaccuracies in their personal information, taking into account the information's nature processing purpose (excluding Iowa and Utah).</LI>
            <LI>Data portability.</LI>
            <LI>Opt-out of personal data processing for: targeted advertising (excluding Iowa); sales; or profiling in furtherance of decisions that produce legal or similarly significant effects (excluding Iowa and Utah).</LI>
            <LI>Either limit (opt-out of) or require consent to process sensitive personal data.</LI>
          </UL>
          <P>
            The exact scope of these rights may vary by state. To exercise any of these rights, please e-mail us at{' '}
            <a href="mailto:privacy@flowwizards.com" className="text-[#ff4f00] hover:underline font-medium">privacy@flowwizards.com</a>.
          </P>
        </motion.div>

        <HR />

        {/* Data Security */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Data Security</H2>
          <P>
            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
          </P>
          <P>
            Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website.
          </P>
        </motion.div>

        <HR />

        {/* Changes */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Changes to Our Privacy Policy</H2>
          <P>
            It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes.
          </P>
        </motion.div>

        <HR />

        {/* Contact */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Contact Information</H2>
          <P>
            To ask questions about this privacy policy and our privacy practices, or to register a complaint or concern, contact us at:{' '}
            <a href="mailto:privacy@flowwizards.com" className="text-[#ff4f00] hover:underline font-medium">privacy@flowwizards.com</a>.
          </P>
        </motion.div>
      </div>
    </section>

    {/* ══════════════════════════════════════════════════════════════════════
        SECTION 2 — CALIFORNIA PRIVACY POLICY
    ══════════════════════════════════════════════════════════════════════ */}
    <section className="bg-[#FEF6F5] py-14 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 xl:px-12">
        <motion.div {...fadeUp(0.05)}>
          <SectionBadge
            label="Flow Wizards Inc.'s Privacy Policy for California Residents"
            date="Effective: June 18, 2025 · Last Updated: June 18, 2025"
            accent
          />
          <P>
            This California Privacy Policy describes how Flow Wizards Inc. and its subsidiaries, affiliates, and related entities (collectively, "Flow Wizards," "Company," "we," or "us") collect and process personal information about our consumers who reside in California. The California Consumer Privacy Act ("CCPA") requires us to provide our California consumers with a privacy policy that contains a comprehensive description of our online and offline practices regarding our collection, use, sale, sharing, and retention of their personal information, along with a description of the rights they have regarding their personal information.
          </P>
          <P>
            This Privacy Policy provides the information the CCPA requires, together with other useful information regarding our collection and use of personal information. Any terms defined in the CCPA have the same meaning when used in this policy.
          </P>
        </motion.div>

        <HR />

        {/* Personal Information Collected */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Personal Information Collected</H2>
          <P>
            We collect and use information that identifies, relates to, describes, references, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household ("personal information").
          </P>
          <P>Personal information does not include:</P>
          <UL>
            <LI>Publicly available information, including from government records, through widely distributed media, or that the consumer made publicly available without restricting it to a specific audience.</LI>
            <LI>Lawfully obtained, truthful information that is a matter of public concern.</LI>
            <LI>Deidentified or aggregated consumer information.</LI>
          </UL>
        </motion.div>

        {/* PI Categories Chart */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Personal Information Categories Chart</H2>
          <P>
            The chart below identifies which categories of personal information we collected from our consumers within the last 12 months and the expected retention period.
          </P>
          <TableWrap>
            <thead>
              <tr>
                <TH width="30%">Category</TH>
                <TH width="40%">Examples</TH>
                <TH width="15%">Collected</TH>
                <TH width="15%">Retention Period</TH>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  cat: 'A. Identifiers',
                  ex: 'A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name or other similar identifiers.',
                  col: 'YES', ret: 'Indefinite',
                },
                {
                  cat: 'B. Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)) ("California Customer Records")',
                  ex: 'A name, signature, address, telephone number, bank account number, credit card number, debit card number, or any other financial information. Some personal information included in this category may overlap with other categories.',
                  col: 'YES', ret: 'Indefinite',
                },
                {
                  cat: 'C. Protected classification characteristics under California or federal law ("Protected Classes")',
                  ex: 'Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, reproductive health decision making, military and veteran status, or genetic information.',
                  col: 'NO', ret: 'N/A',
                },
                {
                  cat: 'D. Commercial information',
                  ex: 'Records of products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.',
                  col: 'YES', ret: 'Indefinite',
                },
                {
                  cat: 'E. Biometric information',
                  ex: 'Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data.',
                  col: 'NO', ret: 'N/A',
                },
                {
                  cat: 'F. Internet or other similar network activity',
                  ex: 'Activity on our websites, mobile apps, or other digital systems, such as internet browsing history, search history, system usage, electronic communications with us, postings on our social media sites.',
                  col: 'YES', ret: 'Indefinite',
                },
                {
                  cat: 'G. Geolocation data',
                  ex: 'Physical location or movements, such as the time and physical location related to use of our internet website, application, or device, and GPS location data from mobile devices of consumers who visit our websites or use our mobile apps.',
                  col: 'NO', ret: 'N/A',
                },
                {
                  cat: 'H. Sensory data',
                  ex: 'Audio, electronic, visual, thermal, olfactory, or similar information.',
                  col: 'NO', ret: 'N/A',
                },
                {
                  cat: 'I. Professional or employment-related information',
                  ex: 'Current or past job history.',
                  col: 'NO', ret: 'N/A',
                },
                {
                  cat: 'J. Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)) ("FERPA Information")',
                  ex: 'Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.',
                  col: 'NO', ret: 'N/A',
                },
                {
                  cat: 'K. Inferences drawn from other personal information',
                  ex: "Profile reflecting a person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.",
                  col: 'NO', ret: 'N/A',
                },
                {
                  cat: 'L. Sensitive personal information',
                  ex: 'Further identified in the chart below.',
                  col: 'NO', ret: 'N/A',
                },
              ].map((row) => (
                <tr key={row.cat} className="border-b border-[#ebebeb] bg-white">
                  <TD>{row.cat}</TD>
                  <TD>{row.ex}</TD>
                  <TD highlight>{row.col}</TD>
                  <TD>{row.ret}</TD>
                </tr>
              ))}
            </tbody>
          </TableWrap>
        </motion.div>

        {/* Sensitive PI Chart */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Sensitive Personal Information Categories Chart</H2>
          <P>
            Sensitive personal information is a subtype of personal information consisting of the specific information categories listed in the chart below. Importantly, the CCPA only treats this information as sensitive personal information when we collect or use it to infer characteristics about a consumer. The chart below identifies which sensitive personal information categories, if any, we have collected from consumers to infer characteristics about them in the last 12 months.
          </P>
          <TableWrap>
            <thead>
              <tr>
                <TH width="60%">Sensitive Personal Information Category</TH>
                <TH width="20%">Collected to Infer Characteristics?</TH>
                <TH width="20%">Retention Period</TH>
              </tr>
            </thead>
            <tbody>
              {[
                'L.1. Government identifiers, such as your Social Security number (SSN), driver\'s license, state identification card, or passport number.',
                'L.2. Complete account access credentials, such as usernames, account logins, account numbers, or card numbers combined with required access/security code or password.',
                'L.3. Precise geolocation, such as physical store visits or physical locations when visiting websites or using mobile apps.',
                'L.4. Racial or ethnic origin.',
                'L.5. Citizenship or immigration status.',
                'L.6. Religious or philosophical beliefs.',
                'L.7. Union membership.',
                'L.8. Mail, email, or text messages not directed to the Company.',
                'L.9. Genetic data.',
                'L.10. Neural Data, such as information generated by measuring a consumer\'s central or peripheral nervous system\'s activity that is not inferred from nonneural information.',
                'L.11. Unique identifying biometric information.',
                'L.12. Health information.',
                'L.13. Sex life or sexual orientation information.',
              ].map((cat) => (
                <tr key={cat} className="border-b border-[#ebebeb] bg-white">
                  <TD>{cat}</TD>
                  <TD highlight>NO</TD>
                  <TD>N/A</TD>
                </tr>
              ))}
            </tbody>
          </TableWrap>
        </motion.div>

        <HR />

        {/* Sources */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Sources of Personal Information</H2>
          <P>We obtain the categories of personal information listed above from the following categories of sources:</P>
          <UL>
            <LI>Directly from you, such as from the forms or other information you provide to the Company. Indirectly from you, such as from your interactions with the Company's websites and mobile applications.</LI>
            <LI>From our service providers.</LI>
          </UL>
        </motion.div>

        <HR />

        {/* How We Use PI */}
        <motion.div {...fadeUp(0.05)}>
          <H2>How We Use Personal Information</H2>
          <H3>Personal Information Collection, Use, and Disclosure Purposes</H3>
          <P>We may use and disclose the personal information we collect to advance the Company's business and commercial purposes, specifically to:</P>
          <UL>
            <LI>Develop, offer, and provide you with our products and services.</LI>
            <LI>Meet our obligations and enforce our rights arising from any contracts with you, including for billing or collections, or to comply with legal requirements.</LI>
            <LI>Fulfil the purposes for which you provided your personal information or that were described to you at collection, and as the CCPA otherwise permits.</LI>
            <LI>Improve our products or services, marketing, or customer relationships and experiences.</LI>
            <LI>Notify you about changes to our products or services. Administer our systems and conduct internal operations, including for troubleshooting, data analysis, testing, research, statistical, and survey purposes.</LI>
            <LI>Protect our Company, employees, or operations.</LI>
            <LI>Measure or understand the effectiveness of the advertising we serve to you and others, and to deliver relevant advertising to you.</LI>
            <LI>Make suggestions and recommendations to you and other consumers about our goods or services that may interest you or them, including developing profiles.</LI>
            <LI>Manage your consumer relationship with us, including for: online account creation, maintenance, and security; reaching you, when needed, about your account.</LI>
            <LI>Perform data analytics and benchmarking.</LI>
            <LI>Administer and maintain the Company's systems and operations, including for safety purposes.</LI>
            <LI>Engage in corporate transactions requiring review of consumer records, such as for evaluating potential Company mergers and acquisitions.</LI>
            <LI>Comply with all applicable laws and regulations.</LI>
            <LI>Exercise or defend the legal rights of the Company and its employees, affiliates, customers, contractors, and agents.</LI>
            <LI>Respond to law enforcement requests and as required by applicable law or court order.</LI>
          </UL>
        </motion.div>

        <HR />

        {/* Sensitive PI Use */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Sensitive Personal Information Use and Disclosure Purposes</H2>
          <P>We may use or disclose sensitive personal information for the following statutorily approved reasons (<strong>Permitted SPI Purposes</strong>):</P>
          <UL>
            <LI>Performing actions that are necessary for our consumer relationship and that an average consumer in a relationship with us would reasonably expect.</LI>
            <LI>Preventing, detecting, and investigating security incidents that compromise the availability, authenticity, integrity, or confidentiality of stored or transmitted personal information.</LI>
            <LI>Defending against and prosecuting those responsible for malicious, deceptive, fraudulent, or illegal actions directed at the Company.</LI>
            <LI>Ensuring physical safety.</LI>
            <LI>Short-term, transient use, such as non-personalized advertising shown as part of your current interactions with us, where we do not: disclose the sensitive personal information to another third party; or use it to build a profile about you or otherwise alter your experience outside your current interaction with the Company.</LI>
            <LI>Services performed for the Company, including maintaining or servicing accounts, processing or fulfilling transactions, verifying consumer information, processing payments, or providing financing, analytic services, storage, or similar services for the Company.</LI>
            <LI>Activities required to: verify or maintain the quality or safety of a product, service, or device that we own, manufacture, had manufactured, or control; or improve, upgrade, or enhance the service or device that we own, manufacture, had manufactured, or controlled.</LI>
            <LI>Collecting or processing sensitive personal information that we do not use for the purpose of inferring characteristics about a consumer.</LI>
          </UL>
          <P>
            We do not use or disclose sensitive personal information for purposes other than the Permitted SPI Purposes. For more on your right to limit these additional sensitive personal information use purposes, see Your Rights and Choices.
          </P>
        </motion.div>

        <HR />

        {/* Additional Categories */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Additional Categories or Other Purposes</H2>
          <P>
            We will not collect additional categories of personal information or use the personal information we collected for materially different, unrelated, or incompatible purposes without providing you notice. If required by law, we will also seek your consent before using your personal information for a new or unrelated purpose. We may collect, process, and disclose aggregated or deidentified consumer information for any purpose, without restriction. When we collect, process, or disclose aggregated or deidentified consumer information, we will maintain and use it in deidentified form and will not to attempt to reidentify the information, except to determine whether our deidentification processes satisfies any applicable legal requirements.
          </P>
        </motion.div>

        <HR />

        {/* Disclosing / Selling */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Disclosing, Selling or Sharing Personal Information</H2>
          <H3>Business Purpose Disclosures</H3>
          <P>
            We may disclose the personal information we collect to third parties for the business purposes described in the Personal Information Collection, use and Disclosure Purposes section and in the table below, such as to engage third parties to support our business functions. We only make these business purpose disclosures under written contracts that describe the purposes, require the recipient to keep the personal information confidential, prohibit using the disclosed information for any purpose except performing the contract, and meet the CCPA's other contract requirements for engaging service providers or contractors. The chart below identifies the categories of entities to whom we have disclosed our consumers' personal information for a business purpose over the preceding 12 months, along with the personal information categories disclosed and the disclosure's business purposes.
          </P>
          <H3>Business Purposes Disclosure Recipient Category, Personal Information Category, and Purposes Chart</H3>
          <TableWrap>
            <thead>
              <tr>
                <TH width="30%">Category of Business Purpose Disclosure Recipients</TH>
                <TH width="22%">Personal Information Categories Disclosed</TH>
                <TH width="22%">Sensitive Personal Information Categories Disclosed</TH>
                <TH width="26%">Business Purpose Disclosures</TH>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <TD>Implementation of revenue operations work flows</TD>
                <TD>Identifiers</TD>
                <TD>N/A</TD>
                <TD>To provide business services and learn more about our customers.</TD>
              </tr>
            </tbody>
          </TableWrap>

          <H3>Selling or Sharing Personal Information</H3>
          <P>
            We do not sell your personal information to third parties and have not sold it in the preceding 12 months. We do not share your personal information with third parties for cross-context behavioral advertising purposes and have not shared your personal information in the preceding 12 months.
          </P>
          <P>Our personal information sales and sharing does not include information about consumers we know are under age 16.</P>
          <TableWrap>
            <thead>
              <tr>
                <TH width="34%">Category of Third Parties We Shared Personal Data With</TH>
                <TH width="22%">Personal Information Shared</TH>
                <TH width="22%">Sensitive Personal Information Shared</TH>
                <TH width="22%">Commercial or Business Purpose</TH>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <TD>CRM, database, iPaaS, payment processors, scheduling tools, recovery tools, Google Workspace, time tracking, accounting and internal communication tools</TD>
                <TD>PI and business notes regarding customers</TD>
                <TD>N/A</TD>
                <TD>To provide services to our customers.</TD>
              </tr>
            </tbody>
          </TableWrap>
        </motion.div>

        <HR />

        {/* Your Rights */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Your Rights and Choices</H2>
          <P>If you are a California resident, the CCPA grants you the following rights regarding your personal information:</P>

          <H3>Right to Know and Data Portability Requests</H3>
          <P>
            You have the right to request that we disclose certain information to you about our collection and use of your personal information (the "<strong>right to know</strong>"), including the specific pieces of personal information we have collected about you (a "<strong>data portability request</strong>"). Our response will cover the 12-month period preceding the request, although we will honor requests to cover a longer period that do not extend past January 1, 2022, unless doing so would be impossible or involves disproportionate effort. You may exercise your right to know <strong>twice</strong> within in any 12-month period. Once we receive your request and confirm your identity (see How to Exercise Your Rights), we will disclose to you:
          </P>
          <UL>
            <LI>The categories of: personal information we collected about you; and sources from which we collected your personal information.</LI>
            <LI>The business or commercial purpose for collecting your personal information and, if applicable, selling or sharing your personal information.</LI>
            <LI>If applicable, the categories of persons, including third parties, to whom we disclosed your personal information, including separate disclosures identifying the categories of your personal information that we: disclosed for a business purpose to each category of persons; and sold or shared to each category of third parties.</LI>
            <LI>When your right to know submission includes a data portability request, a copy of your personal information subject to any permitted redactions.</LI>
          </UL>

          <H3>Right to Delete and Right to Correct</H3>
          <P>
            You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions and limitations (the "<strong>right to delete</strong>"). Once we receive your request and confirm your identity, we will delete your personal information from our systems unless an exception allows us to retain it and notify our service providers to take appropriate action.
          </P>
          <P>
            You also have the right to request correction of personal information we maintain about you that you believe is inaccurate (the "<strong>right to correct</strong>"). We may require you to provide documentation, if needed, to confirm your identity and support your claim that the information is inaccurate. Unless an exception applies, we will correct personal information that our review determines is inaccurate and notify our service providers to take appropriate action.
          </P>

          <H3>Right to Limit Sensitive Personal Information Use and Disclosure to Permitted SPI Purposes</H3>
          <P>
            You have a right to ask businesses that use or disclose your sensitive personal information to limit those actions to just the CCPA's Permitted SPI Purposes (the "right to limit"). For more on the Permitted SPI Purposes, see Sensitive Personal Information Use and Disclosure Purposes.
          </P>

          <H3>Personal Information Sharing Opt-Out and Opt-In Rights</H3>
          <P>
            You have the right to request that businesses stop sharing your personal information at any time (the "right to opt-out"), including through a user-enabled opt-out preference signal. Similarly, the CCPA prohibits businesses from selling or sharing the personal information of consumers it actually knows are under 16 years old without first obtaining consent from consumers who are between 13 and 15 years old or the consumer's parent or guardian for consumers under age 13 (the "right to opt-in").
          </P>
          <P>
            We cannot share your personal information after we receive your request to opt-out unless you later consent to the sharing of your personal information.
          </P>

          <H3>Right to Non-Discrimination</H3>
          <P>
            You have the right not to be discriminated or retaliated against for exercising any of your privacy rights under the CCPA.
          </P>
        </motion.div>

        <HR />

        {/* How to Exercise */}
        <motion.div {...fadeUp(0.05)}>
          <H2>How to Exercise Your Rights</H2>

          <H3>Exercising the Rights to Know, Delete or Correct</H3>
          <P>
            To exercise the right to know, data portability, delete or correct described above, please submit a verifiable request to us by emailing us at{' '}
            <a href="mailto:privacy@flowwizards.com" className="text-[#ff4f00] hover:underline font-medium">privacy@flowwizards.com</a>.
            {' '}Please describe your request with sufficient detail so we can properly understand, evaluate, and respond to it. You or your authorized agent may only submit a request to know, including for data portability, twice within a 12-month period.
          </P>

          <H3>Exercising the Right to Limit or Opt-Out</H3>
          <P>
            You can submit your request to limit or opt-out through by emailing us at{' '}
            <a href="mailto:privacy@flowwizards.com" className="text-[#ff4f00] hover:underline font-medium">privacy@flowwizards.com</a>.
          </P>

          <H3>Verification Process and Authorized Agents</H3>
          <P>
            Only you, or someone legally authorized to act on your behalf, may make a request to know, delete, or correct related to your personal information. To designate an authorized agent, please e-mail us at{' '}
            <a href="mailto:privacy@flowwizards.com" className="text-[#ff4f00] hover:underline font-medium">privacy@flowwizards.com</a>.
            {' '}We cannot respond to your request to know, delete or correct if we cannot verify your identity or authority to make the request and confirm the personal information relating to you. For requests to limit or opt-out, we ask for the information necessary to complete the request, which may include, for example, the consumer's name, email address, or account username.
          </P>

          <H3>Responding to Your Requests to Know, Delete or Correct</H3>
          <P>
            We will confirm receipt of your request within ten business days. If you do not receive confirmation within the ten-day timeframe, please e-mail us at{' '}
            <a href="mailto:privacy@flowwizards.com" className="text-[#ff4f00] hover:underline font-medium">privacy@flowwizards.com</a>.
            {' '}We endeavor to substantively respond to a verifiable request within 45 days of its receipt. If we require more time (up to another 45 days), we will inform you of the reason and extension period in writing. We will deliver our written response to your verified email address. Our substantive response will tell you whether or not we have complied with your request. If we cannot comply with your request in whole or in part, we will explain the reason, subject to any legal or regulatory restrictions. Applicable law may allow or require us to refuse to provide you with access to some or all of the personal information that we hold about you, or we may have destroyed, deleted, or made your personal information anonymous in compliance with our record retention policies and obligations.
          </P>
          <P>
            Any disclosures we provide will cover information for the 12-month period preceding the request's receipt date. We will consider requests to provide a longer disclosure period that do not extend past January 1, 2022, unless providing the longer timeframe would be impossible or involves disproportionate effort. For data portability requests, we will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance.
          </P>
          <P>
            We do not charge a fee to process or respond to your verifiable request unless it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.
          </P>

          <H3>Response and Timing on Rights to Limit or Opt-Out</H3>
          <P>
            In response to your request to limit or opt-out, we will process your request, as soon as feasibly possible, but no later than 15 business days from the date we receive the request. We will only use personal information provided from your request to comply with the request. We may deny opt-out requests if we have a good-faith, reasonable, and documented belief that the request is fraudulent and will clearly explain our denial decision to the requestor. Once you make a request to limit or opt-out, we will wait at least 12 months before asking you to reauthorize personal information sharing. However, you may change your mind and opt back in at any time by e-mailing us at{' '}
            <a href="mailto:privacy@flowwizards.com" className="text-[#ff4f00] hover:underline font-medium">privacy@flowwizards.com</a>.
          </P>
        </motion.div>

        <HR />

        {/* CA Data Security */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Data Security</H2>
          <P>
            We have implemented reasonable measures designed to secure your personal information from accidental loss or destruction and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our websites, mobile apps, or any other company systems, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
          </P>
          <P>
            Unfortunately, the transmission of information through the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our websites, mobile apps, or other company systems. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on our systems.
          </P>
        </motion.div>

        <HR />

        {/* CA Policy Changes */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Privacy Policy Changes</H2>
          <P>
            We reserve the right to update this Privacy Policy at any time. If we make any material changes to this Privacy Policy, we will update the policy's effective date and post the updated policy on our website at www.flowwizards.com.
          </P>
        </motion.div>

        <HR />

        {/* CA Contact */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Contact Information</H2>
          <P>If you have any questions or comments about this policy, the ways in which we collect and use your information described here, or your choices and rights regarding such use:</P>
          <div className="rounded-2xl border border-[#ebebeb] bg-white p-6 mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <p className="font-semibold text-[#1A1A1A] mb-1 text-sm">Website</p>
                <a href="https://www.flowwizards.com" target="_blank" rel="noopener noreferrer" className="text-[#ff4f00] hover:underline" style={{ fontSize: '0.9rem' }}>
                  www.flowwizards.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A] mb-1 text-sm">Email</p>
                <a href="mailto:privacy@flowwizards.com" className="text-[#ff4f00] hover:underline" style={{ fontSize: '0.9rem' }}>
                  privacy@flowwizards.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A] mb-1 text-sm">Postal Address</p>
                <p className="text-[#444]" style={{ fontSize: '0.9rem' }}>
                  Flow Wizards Inc.<br />
                  300 Kent Avenue #9<br />
                  Brooklyn, NY 11249
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A] mb-1 text-sm">Alternative Formats</p>
                <p className="text-[#555]" style={{ fontSize: '0.875rem' }}>
                  If you need to access this Privacy Policy in an alternative format due to a disability, please e-mail us at{' '}
                  <a href="mailto:privacy@flowwizards.com" className="text-[#ff4f00] hover:underline">privacy@flowwizards.com</a>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ══════════════════════════════════════════════════════════════════════
        SECTION 3 — NOTICE AT COLLECTION
    ══════════════════════════════════════════════════════════════════════ */}
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 xl:px-12">
        <motion.div {...fadeUp(0.05)}>
          <SectionBadge label="Flow Wizards Inc.'s Notice at Collection" />

          <P>
            Flow Wizards Inc. collects the following personal information (PI) categories: identifiers and commercial information.
          </P>
          <P>We collect this PI for the following business purposes:</P>
          <UL>
            <LI>To fulfill or meet the reason you provided the information. For example, if you share your name and contact information to request a price quote or ask a question about our products or services, we will use that personal information to respond to your inquiry. If you provide your personal information to purchase a product or service, we will use that information to process your payment and facilitate delivery. We may also save your information to facilitate new product orders or process returns.</LI>
            <LI>To provide, support, personalize, and develop our Website, products, and services.</LI>
            <LI>To create, maintain, customize, and secure your account with us.</LI>
            <LI>To process your requests, purchases, transactions, and payments and prevent transactional fraud.</LI>
            <LI>To provide you with support and to respond to your inquiries, including to investigate and address your concerns and monitor and improve our responses.</LI>
            <LI>To personalize your Website experience and to deliver content and product and service offerings relevant to your interests, including targeted offers and ads through our Website, third-party sites, and via email or text message (with your consent, where required by law).</LI>
            <LI>To help maintain the safety, security, and integrity of our Website, products and services, databases and other technology assets, and business.</LI>
            <LI>For testing, research, analysis, and product development, including to develop and improve our Website, products, and services.</LI>
            <LI>To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.</LI>
            <LI>As described to you when collecting your personal information or as otherwise set forth in the CCPA.</LI>
            <LI>To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by us about our Website users is among the assets transferred.</LI>
          </UL>

          <P>
            To opt-out of PI sales, visit section entitled Personal Information Sales Opt-Out and Opt-In Rights.
          </P>
          <P>
            To view our full Website Privacy Policy or the Privacy Policy for California Residents, visit{' '}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#ff4f00] hover:underline font-medium">
              /privacy-policy
            </a>
          </P>
          <P>
            If you have any questions about this Notice or need to access it in an alternative format due to having a disability, please contact Flow Wizards Inc. at{' '}
            <a href="mailto:privacy@flowwizards.com" className="text-[#ff4f00] hover:underline font-medium">
              privacy@flowwizards.com
            </a>.
          </P>
        </motion.div>
      </div>
    </section>
  </>
)

export default PrivacyPolicyPage

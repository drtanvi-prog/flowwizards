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

const P = ({ children, className = '' }) => (
  <p className={`text-[#444] leading-relaxed mb-3 ${className}`} style={{ fontSize: '0.9rem' }}>
    {children}
  </p>
)

const UL = ({ children }) => (
  <ul className="list-disc pl-5 mb-4 flex flex-col gap-1.5 text-[#444]" style={{ fontSize: '0.9rem' }}>
    {children}
  </ul>
)

const TermsPage = () => (
  <>
    <ServicePageHero
      badge="Legal"
      heading={<>Terms of <SHWord>Service</SHWord></>}
    />

    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div {...fadeUp(0)}>
          <P className="text-[#888]">Last Modified: June 2026</P>

          <H2>Acceptance of the Terms of Use</H2>
          <P>
            These Terms of Service are entered into by and between you and Flow Wizards,
            a Company of Tuesday Wizard ("Company," "we," "us," or "our").
          </P>
          <P>
            The following terms and conditions govern your access to and use of
            https://flowwizards.io, including any content, functionality, automations,
            consulting services, systems, software workflows, integrations, and services
            offered on or through the Website (the "Website"), whether as a guest, client,
            or registered user.
          </P>
          <P>Please read these Terms of Service carefully before using the Website.</P>
          <P>
            By using the Website, you accept and agree to be bound and abide by these
            Terms of Service and our Privacy Policy located at: https://flowwizards.io/privacy-policy
          </P>
          <P>If you do not agree to these Terms of Service, you must not access or use the Website.</P>
          <P>By using this Website, you represent and warrant that:</P>
          <UL>
            <li>You are of legal age to form a binding contract with the Company</li>
            <li>You have authority to enter into these Terms</li>
            <li>You will comply with all applicable laws and regulations</li>
          </UL>

          <H2>Changes to These Terms</H2>
          <P>We reserve the right to revise and update these Terms of Service at any time in our sole discretion.</P>
          <P>All changes are effective immediately when posted.</P>
          <P>Your continued use of the Website following the posting of revised Terms constitutes acceptance of the updated Terms.</P>

          <H2>Services</H2>
          <P>Flow Wizards, a Company of Tuesday Wizard, provides services including but not limited to:</P>
          <UL>
            <li>Workflow automation consulting</li>
            <li>monday.com implementation services</li>
            <li>Zapier and Make.com automation development</li>
            <li>CRM and operational systems consulting</li>
            <li>AI workflow implementation</li>
            <li>Systems integration services</li>
            <li>Process optimization</li>
            <li>Automation architecture</li>
            <li>Project management systems</li>
            <li>Technical consulting</li>
            <li>Training and onboarding services</li>
          </UL>

          <H2>Intellectual Property Rights</H2>
          <P>
            The Website and all content, features, functionality, workflows, documentation,
            templates, systems, graphics, logos, software structures, automations, and
            materials are owned by Flow Wizards, a Company of Tuesday Wizard, its licensors,
            or service providers and are protected by copyright, trademark, intellectual
            property, and proprietary rights laws.
          </P>
          <P>You may not:</P>
          <UL>
            <li>Reproduce or redistribute Website content</li>
            <li>Copy automation frameworks</li>
            <li>Republish proprietary documentation</li>
            <li>Sell or sublicense Company materials</li>
            <li>Reverse engineer proprietary workflows or systems</li>
            <li>Use Company branding without written permission</li>
          </UL>
          <P>Limited personal and non-commercial use is permitted only as expressly authorized.</P>

          <H2>Client Responsibilities</H2>
          <P>Clients agree to:</P>
          <UL>
            <li>Provide accurate project information</li>
            <li>Maintain required platform subscriptions</li>
            <li>Grant necessary software access for implementation</li>
            <li>Review deliverables promptly</li>
            <li>Maintain backup copies of critical business data</li>
            <li>Use systems and automations responsibly</li>
          </UL>
          <P>The Company is not responsible for delays caused by:</P>
          <UL>
            <li>Missing access</li>
            <li>Third-party platform limitations</li>
            <li>Delayed approvals</li>
            <li>Incomplete client information</li>
            <li>Third-party outages</li>
          </UL>

          <H2>Third-Party Platforms &amp; Integrations</H2>
          <P>Our services may integrate with third-party platforms including but not limited to:</P>
          <UL>
            <li>monday.com</li>
            <li>Zapier</li>
            <li>Make.com</li>
            <li>HubSpot</li>
            <li>Salesforce</li>
            <li>Google Workspace</li>
            <li>Microsoft 365</li>
            <li>QuickBooks</li>
            <li>Calendly</li>
            <li>JotForm</li>
            <li>Slack</li>
            <li>Airtable</li>
            <li>Notion</li>
            <li>OpenAI</li>
            <li>Other APIs and SaaS platforms</li>
          </UL>
          <P>We are not responsible for:</P>
          <UL>
            <li>Third-party outages</li>
            <li>API limitations</li>
            <li>Pricing changes</li>
            <li>Platform policy changes</li>
            <li>Security breaches originating from third-party providers</li>
            <li>Losses caused by third-party system failures</li>
          </UL>
          <P>Use of third-party platforms remains subject to their own terms and conditions.</P>

          <H2>Payment Terms</H2>
          <P>Unless otherwise agreed in writing:</P>
          <UL>
            <li>All invoices are due upon receipt</li>
            <li>Late payments may pause active work</li>
            <li>Deposits and milestone payments may be required</li>
            <li>Subscription software costs remain the client's responsibility</li>
            <li>Payments made are non-refundable once work has commenced</li>
          </UL>
          <P>For ongoing support retainers or weekly billing agreements:</P>
          <UL>
            <li>Hours worked are billable based on agreed rates</li>
            <li>Administrative or support fees may apply separately</li>
            <li>Work performed outside Upwork or external marketplaces may be invoiced directly</li>
          </UL>

          <H2>Confidentiality</H2>
          <P>We agree to maintain confidentiality regarding proprietary client information shared during engagements.</P>
          <P>Clients acknowledge that:</P>
          <UL>
            <li>Workflow logic and automation architecture developed by Flow Wizards may include proprietary implementation methods</li>
            <li>Internal frameworks, SOPs, templates, and automation structures remain Company intellectual property unless otherwise agreed in writing</li>
          </UL>

          <H2>Prohibited Uses</H2>
          <P>You may not use the Website or services:</P>
          <UL>
            <li>For unlawful purposes</li>
            <li>To distribute malicious software</li>
            <li>To interfere with Website operations</li>
            <li>To attempt unauthorized access</li>
            <li>To exploit vulnerabilities</li>
            <li>To violate intellectual property rights</li>
            <li>To transmit spam or harmful communications</li>
          </UL>

          <H2>Disclaimer of Warranties</H2>
          <P>THE WEBSITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE."</P>
          <P>WE MAKE NO GUARANTEES THAT:</P>
          <UL>
            <li>SERVICES WILL BE UNINTERRUPTED</li>
            <li>ALL AUTOMATIONS WILL OPERATE ERROR-FREE</li>
            <li>THIRD-PARTY INTEGRATIONS WILL ALWAYS FUNCTION</li>
            <li>BUSINESS RESULTS WILL BE ACHIEVED</li>
          </UL>
          <P>TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING:</P>
          <UL>
            <li>MERCHANTABILITY</li>
            <li>FITNESS FOR A PARTICULAR PURPOSE</li>
            <li>NON-INFRINGEMENT</li>
            <li>DATA ACCURACY</li>
            <li>SYSTEM AVAILABILITY</li>
          </UL>
          <P>
            Automation systems may occasionally fail due to third-party API changes, outages,
            software updates, or platform limitations.
          </P>

          <H2>Limitation of Liability</H2>
          <P>TO THE FULLEST EXTENT PERMITTED BY LAW:</P>
          <P>FLOW WIZARDS, A COMPANY OF TUESDAY WIZARD, SHALL NOT BE LIABLE FOR:</P>
          <UL>
            <li>INDIRECT DAMAGES</li>
            <li>CONSEQUENTIAL DAMAGES</li>
            <li>LOST PROFITS</li>
            <li>BUSINESS INTERRUPTION</li>
            <li>DATA LOSS</li>
            <li>LOST REVENUE</li>
            <li>SYSTEM FAILURES</li>
            <li>THIRD-PARTY PLATFORM FAILURES</li>
          </UL>
          <P>
            TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID TO THE COMPANY FOR SERVICES
            IN THE PRECEDING THREE (3) MONTHS.
          </P>

          <H2>Indemnification</H2>
          <P>
            You agree to indemnify and hold harmless Flow Wizards, a Company of Tuesday Wizard,
            including its affiliates, contractors, employees, and partners from any claims,
            damages, liabilities, costs, or expenses arising from:
          </P>
          <UL>
            <li>Your use of the Website</li>
            <li>Your misuse of services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of third-party rights</li>
          </UL>

          <H2>Governing Law</H2>
          <P>
            These Terms shall be governed by and construed in accordance with the laws of the
            State of California, without regard to conflict of law principles.
          </P>
          <P>Any disputes shall be resolved in the courts located in California.</P>

          <H2>Arbitration</H2>
          <P>
            At the Company's discretion, disputes may be resolved through binding arbitration
            in accordance with the rules of the American Arbitration Association.
          </P>

          <H2>Limitation on Claims</H2>
          <P>
            Any claim arising from these Terms or the Website must be brought within one (1)
            year after the cause of action arises.
          </P>

          <H2>Termination</H2>
          <P>We reserve the right to suspend or terminate access to the Website or services at any time for:</P>
          <UL>
            <li>Violations of these Terms</li>
            <li>Non-payment</li>
            <li>Fraudulent activity</li>
            <li>Abuse of services</li>
            <li>Security concerns</li>
          </UL>

          <H2>Privacy Policy</H2>
          <P>
            All information collected through the Website is governed by our Privacy Policy:
            https://flowwizards.io/privacy-policy
          </P>

          <H2>Entire Agreement</H2>
          <P>
            These Terms of Service and the Privacy Policy constitute the entire agreement
            between you and Flow Wizards, a Company of Tuesday Wizard.
          </P>

          <H2>Contact Information</H2>
          <P>
            Flow Wizards, a Company of Tuesday Wizard<br />
            Diddly LLC<br />
            31500 Grape St Ste 3-118<br />
            Lake Elsinore, CA 92532<br /><br />
            Website: https://flowwizards.io<br />
            Email: sales@tuesdaywizards.com
          </P>
          <P className="text-[#888]">© 2026 Flow Wizards, a Company of Tuesday Wizard. All Rights Reserved.</P>
        </motion.div>
      </div>
    </section>
  </>
)

export default TermsPage

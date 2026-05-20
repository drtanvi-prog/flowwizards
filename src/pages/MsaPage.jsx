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
  <ul className="list-disc pl-5 mb-4 flex flex-col gap-1.5 text-[#444]" style={{ fontSize: '0.9rem' }}>
    {children}
  </ul>
)

const MsaPage = () => (
  <>
    <ServicePageHero
      badge="Legal"
      heading={<>Master Consulting <SHWord>Services Agreement</SHWord></>}
    />

    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div {...fadeUp(0)}>
          <P className="text-[#888]">Last Updated: June 2026</P>

          <P>
            This Master Consulting Services Agreement ("Agreement") is effective as of the
            effective date identified in the applicable signed Order Form ("Order Form" and
            "Effective Date"), by and between:
          </P>
          <P>
            Flow Wizards, a Company of Tuesday Wizard<br />
            Diddly LLC<br />
            31500 Grape St Ste 3-118<br />
            Lake Elsinore, CA 92532<br />
            https://flowwizards.io<br />
            ("Consultant," "Company," "we," or "us")
          </P>
          <P>and</P>
          <P>The client identified in the applicable Order Form ("Client").</P>
          <P>
            Each individually referred to as a "Party" and collectively as the "Parties."
          </P>
          <P>
            The applicable Order Form is incorporated into this Agreement by reference.
            In the event of any conflict between this Agreement and an Order Form, the
            Order Form shall control.
          </P>

          <H2>Section 1. Definitions</H2>

          <H3>"Services"</H3>
          <P>
            Means all consulting, implementation, workflow automation, systems integration,
            project management, CRM configuration, AI workflow development, operational
            consulting, technical support, training, and related professional services
            provided by Consultant.
          </P>

          <H3>"Deliverables"</H3>
          <P>
            Means all work product, automations, workflows, documentation, configurations,
            dashboards, integrations, SOPs, and implementation outputs delivered by Consultant.
          </P>

          <H3>"Client Materials"</H3>
          <P>
            Means all materials, credentials, data, software, content, documents, systems,
            APIs, and information provided by Client.
          </P>

          <H3>"Work Product"</H3>
          <P>
            Means any Deliverables, systems, automations, workflows, documentation,
            templates, integrations, or related implementation materials created by
            Consultant in connection with the Services.
          </P>

          <H3>"Underlying Software"</H3>
          <P>Means third-party software platforms including but not limited to:</P>
          <UL>
            <li>monday.com</li>
            <li>Zapier</li>
            <li>Make.com</li>
            <li>HubSpot</li>
            <li>Salesforce</li>
            <li>Google Workspace</li>
            <li>Microsoft 365</li>
            <li>QuickBooks</li>
            <li>Slack</li>
            <li>Calendly</li>
            <li>JotForm</li>
            <li>Airtable</li>
            <li>Notion</li>
            <li>OpenAI</li>
            <li>Third-party APIs</li>
            <li>Other SaaS platforms</li>
          </UL>

          <H2>Section 2. Engagement of Consultant</H2>

          <H3>2.1 Services</H3>
          <P>Consultant agrees to provide the Services outlined in the applicable Order Form.</P>

          <H3>2.2 Changes to Scope</H3>
          <P>Either Party may request changes to the Services through written or verbal communication.</P>
          <P>Consultant reserves the right to:</P>
          <UL>
            <li>Adjust timelines</li>
            <li>Adjust pricing</li>
            <li>Issue revised estimates</li>
            <li>Pause work pending approval</li>
          </UL>
          <P>Any material scope changes may require an updated Order Form or Change Order.</P>

          <H3>2.3 Project Management</H3>
          <P>Each Party shall designate a primary point of contact responsible for:</P>
          <UL>
            <li>Approvals</li>
            <li>Communication</li>
            <li>Feedback</li>
            <li>Project coordination</li>
          </UL>

          <H3>2.4 Training</H3>
          <P>
            Consultant may provide onboarding, training, Loom walkthroughs, SOP documentation,
            and support sessions as needed.
          </P>

          <H3>2.5 Assignment of Personnel</H3>
          <P>
            Consultant may assign employees, contractors, subcontractors, or affiliates at
            its sole discretion.
          </P>

          <H2>Section 3. Client Obligations</H2>

          <H3>3.1 Platform Access</H3>
          <P>Client agrees to provide:</P>
          <UL>
            <li>Platform access</li>
            <li>Admin permissions</li>
            <li>API credentials</li>
            <li>Software licenses</li>
            <li>Necessary documentation</li>
            <li>Testing participation</li>
          </UL>

          <H3>3.2 Cooperation</H3>
          <P>Client shall:</P>
          <UL>
            <li>Respond promptly to requests</li>
            <li>Participate in review meetings</li>
            <li>Test Deliverables</li>
            <li>Provide operational information</li>
            <li>Approve workflows in a timely manner</li>
          </UL>

          <H3>3.3 Delays</H3>
          <P>Consultant shall not be responsible for delays caused by:</P>
          <UL>
            <li>Client non-responsiveness</li>
            <li>Missing access</li>
            <li>Third-party outages</li>
            <li>API limitations</li>
            <li>Delayed approvals</li>
            <li>Missing information</li>
          </UL>
          <P>Project timelines may be extended accordingly.</P>

          <H3>3.4 Acceptance</H3>
          <P>
            Deliverables shall be deemed accepted within seven (7) calendar days unless
            Client provides written notice of material deficiencies.
          </P>

          <H2>Section 4. Fees &amp; Payment</H2>

          <H3>4.1 Fees</H3>
          <P>Client shall pay all fees outlined in the applicable Order Form or invoice.</P>

          <H3>4.2 Hourly Services</H3>
          <P>Unless otherwise agreed:</P>
          <UL>
            <li>Services are billed hourly</li>
            <li>Additional scope beyond estimates is billable</li>
            <li>Ongoing support may be billed weekly or monthly</li>
          </UL>

          <H3>4.3 Payment Terms</H3>
          <P>
            Invoices are due within fourteen (14) calendar days of receipt unless otherwise specified.
          </P>

          <H3>4.4 Late Payments</H3>
          <P>Late payments may incur:</P>
          <UL>
            <li>1.5% monthly interest</li>
            <li>Suspension of Services</li>
            <li>Removal of system access</li>
            <li>Collection costs and legal fees</li>
          </UL>

          <H3>4.5 Weekly Support Billing</H3>
          <P>For ongoing support agreements:</P>
          <UL>
            <li>Weekly billing may occur outside Upwork or marketplace platforms</li>
            <li>Administrative/support fees may apply separately</li>
          </UL>

          <H3>4.6 Non-Refundable Work</H3>
          <P>Payments for:</P>
          <UL>
            <li>Consulting</li>
            <li>Discovery</li>
            <li>Implementation</li>
            <li>Automation development</li>
            <li>Strategy work</li>
            <li>Custom workflows</li>
          </UL>
          <P>are non-refundable once work has commenced.</P>

          <H2>Section 5. Intellectual Property</H2>

          <H3>5.1 Client Ownership</H3>
          <P>Client owns:</P>
          <UL>
            <li>Client data</li>
            <li>Client-specific configurations</li>
            <li>Client content</li>
            <li>Approved final Deliverables upon full payment</li>
          </UL>

          <H3>5.2 Consultant Ownership</H3>
          <P>Consultant retains ownership of:</P>
          <UL>
            <li>Proprietary frameworks</li>
            <li>SOP templates</li>
            <li>Internal methodologies</li>
            <li>Automation architecture methods</li>
            <li>Reusable code</li>
            <li>Workflow structures</li>
            <li>General know-how</li>
            <li>Proprietary implementation processes</li>
          </UL>

          <H3>5.3 Portfolio Rights</H3>
          <P>
            Unless otherwise prohibited in writing, Consultant may reference Client generally
            in portfolio materials without disclosing confidential information.
          </P>

          <H2>Section 6. Warranties Disclaimer</H2>
          <P>ALL SERVICES, DELIVERABLES, SOFTWARE, AUTOMATIONS, AND WORK PRODUCT ARE PROVIDED "AS IS."</P>
          <P>CONSULTANT DISCLAIMS ALL WARRANTIES INCLUDING:</P>
          <UL>
            <li>MERCHANTABILITY</li>
            <li>FITNESS FOR A PARTICULAR PURPOSE</li>
            <li>NON-INFRINGEMENT</li>
            <li>SYSTEM AVAILABILITY</li>
            <li>ERROR-FREE PERFORMANCE</li>
          </UL>
          <P>Third-party platform changes may affect workflows or integrations.</P>
          <P>Consultant does not guarantee uninterrupted functionality of:</P>
          <UL>
            <li>APIs</li>
            <li>Automations</li>
            <li>Third-party integrations</li>
            <li>SaaS platforms</li>
          </UL>

          <H2>Section 7. Confidentiality</H2>
          <P>Each Party agrees to maintain confidentiality regarding:</P>
          <UL>
            <li>Proprietary business information</li>
            <li>Client systems</li>
            <li>Credentials</li>
            <li>Operational workflows</li>
            <li>Financial information</li>
            <li>Trade secrets</li>
          </UL>
          <P>Confidential information excludes information that:</P>
          <UL>
            <li>Is publicly available</li>
            <li>Was independently developed</li>
            <li>Was lawfully obtained from another source</li>
          </UL>
          <P>
            Consultant may retain internal project records, notes, and backups as reasonably
            necessary for legal and operational purposes.
          </P>

          <H2>Section 8. Term &amp; Termination</H2>

          <H3>8.1 Term</H3>
          <P>This Agreement remains effective until terminated.</P>

          <H3>8.2 Termination Without Cause</H3>
          <P>Either Party may terminate with seven (7) calendar days written notice.</P>

          <H3>8.3 Immediate Termination</H3>
          <P>Consultant may immediately suspend or terminate Services for:</P>
          <UL>
            <li>Non-payment</li>
            <li>Abuse</li>
            <li>Fraud</li>
            <li>Unauthorized access</li>
            <li>Violation of these terms</li>
          </UL>

          <H3>8.4 Outstanding Fees</H3>
          <P>All unpaid fees become immediately due upon termination.</P>

          <H2>Section 9. Limitation of Liability</H2>
          <P>TO THE FULLEST EXTENT PERMITTED BY LAW:</P>
          <P>CONSULTANT SHALL NOT BE LIABLE FOR:</P>
          <UL>
            <li>Lost profits</li>
            <li>Lost revenue</li>
            <li>Lost business opportunities</li>
            <li>Data loss</li>
            <li>System downtime</li>
            <li>API failures</li>
            <li>Third-party outages</li>
            <li>Indirect or consequential damages</li>
          </UL>
          <P>
            TOTAL LIABILITY SHALL NOT EXCEED THE TOTAL FEES PAID TO CONSULTANT DURING
            THE THREE (3) MONTHS PRECEDING THE CLAIM.
          </P>

          <H2>Section 10. Indemnification</H2>
          <P>
            Client agrees to indemnify and hold harmless Consultant and its affiliates
            from claims arising from:
          </P>
          <UL>
            <li>Client misuse</li>
            <li>Client data</li>
            <li>Client violations of law</li>
            <li>Third-party platform misuse</li>
            <li>Unauthorized access caused by Client</li>
          </UL>

          <H2>Section 11. Non-Solicitation</H2>
          <P>
            During the term of this Agreement and for one (1) year thereafter, neither
            Party shall directly solicit employees or contractors of the other Party
            without written consent.
          </P>

          <H2>Section 12. Data Privacy &amp; Security</H2>
          <P>Client is solely responsible for:</P>
          <UL>
            <li>HIPAA compliance</li>
            <li>GDPR compliance</li>
            <li>Privacy law compliance</li>
            <li>Data handling requirements</li>
          </UL>
          <P>Consultant does not represent itself as:</P>
          <UL>
            <li>HIPAA certified</li>
            <li>SOC 2 certified</li>
          </UL>
          <P>unless expressly stated in writing.</P>
          <P>Client acknowledges that third-party SaaS systems may process data externally.</P>

          <H2>Section 13. Force Majeure</H2>
          <P>Neither Party shall be liable for delays caused by:</P>
          <UL>
            <li>Natural disasters</li>
            <li>Government actions</li>
            <li>Platform outages</li>
            <li>Internet failures</li>
            <li>SaaS provider outages</li>
            <li>Pandemics</li>
            <li>Labor disruptions</li>
            <li>Cybersecurity incidents beyond reasonable control</li>
          </UL>

          <H2>Section 14. Governing Law</H2>
          <P>This Agreement shall be governed by the laws of the State of California.</P>
          <P>
            Any disputes shall be resolved through binding arbitration in California under
            the rules of the American Arbitration Association.
          </P>
          <P>Consultant reserves the right to seek injunctive relief in courts of competent jurisdiction.</P>

          <H2>Section 15. Miscellaneous</H2>
          <UL>
            <li>This Agreement constitutes the entire agreement between the Parties.</li>
            <li>Amendments must be in writing.</li>
            <li>Electronic signatures are valid and enforceable.</li>
            <li>Invalid provisions shall not affect remaining provisions.</li>
            <li>Neither Party may assign this Agreement without written consent.</li>
          </UL>

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

export default MsaPage

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

const PrivacyPolicyPage = () => (
  <>
    <ServicePageHero
      badge="Legal"
      heading={<>Privacy <SHWord>Policy</SHWord></>}
    />

    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div {...fadeUp(0)}>
          <P className="text-[#888]">Effective Date: May 19th, 2026</P>

          <P>
            Flow Wizards, a Company of Tuesday Wizard ("Company," "We," "Us," or "Our") respects your
            privacy and is committed to protecting it through our compliance with this Privacy Policy.
          </P>
          <P>
            This Privacy Policy describes the types of information we may collect from you or that you
            may provide when you visit https://flowwizards.io (the "Website") and our practices for
            collecting, using, maintaining, protecting, and disclosing that information.
          </P>
          <P>
            By accessing or using our Website, services, automations, forms, systems, or applications,
            you agree to this Privacy Policy.
          </P>

          <H2>1. Information We Collect</H2>
          <P>We may collect several types of information from and about users of our Website, including:</P>

          <H3>Personal Information</H3>
          <P>Including but not limited to:</P>
          <UL>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business information</li>
            <li>Billing information</li>
            <li>Mailing address</li>
            <li>Company details</li>
          </UL>

          <H3>Technical Information</H3>
          <P>Including:</P>
          <UL>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Usage data</li>
            <li>Website interaction analytics</li>
          </UL>

          <H3>Project &amp; Workflow Data</H3>
          <P>If engaging our services, we may also collect:</P>
          <UL>
            <li>Workflow requirements</li>
            <li>Automation data</li>
            <li>CRM information</li>
            <li>Operational data</li>
            <li>Form submissions</li>
            <li>Integration details</li>
            <li>Uploaded documents or files</li>
          </UL>

          <H2>2. How We Collect Information</H2>
          <P>We collect information:</P>
          <UL>
            <li>Directly from you when you provide it to us</li>
            <li>Automatically through cookies and analytics tools</li>
            <li>Through forms, integrations, workflows, automations, and connected applications</li>
            <li>Through communications via email, phone, or scheduling tools</li>
          </UL>

          <H2>3. How We Use Your Information</H2>
          <P>We use collected information to:</P>
          <UL>
            <li>Provide services and support</li>
            <li>Deliver automation and consulting services</li>
            <li>Respond to inquiries</li>
            <li>Improve our Website and services</li>
            <li>Process billing and payments</li>
            <li>Manage client relationships</li>
            <li>Send communications and updates</li>
            <li>Analyze usage and improve operations</li>
            <li>Maintain security and prevent fraud</li>
          </UL>

          <H2>4. Sharing of Information</H2>
          <P>We do not sell your personal information.</P>
          <P>We may share information with:</P>
          <UL>
            <li>Trusted service providers</li>
            <li>Automation and integration platforms</li>
            <li>Payment processors</li>
            <li>CRM and project management platforms</li>
            <li>Legal or regulatory authorities if required by law</li>
          </UL>
          <P>Third-party tools may include:</P>
          <UL>
            <li>monday.com</li>
            <li>Zapier</li>
            <li>Make.com</li>
            <li>HubSpot</li>
            <li>Google Workspace</li>
            <li>Microsoft 365</li>
            <li>Calendly</li>
            <li>JotForm</li>
            <li>Stripe</li>
            <li>QuickBooks</li>
            <li>Other approved operational systems</li>
          </UL>

          <H2>5. Cookies &amp; Tracking Technologies</H2>
          <P>We may use:</P>
          <UL>
            <li>Cookies</li>
            <li>Analytics tools</li>
            <li>Tracking pixels</li>
            <li>Session monitoring</li>
            <li>Website performance tools</li>
          </UL>
          <P>These technologies help us improve user experience and analyze Website traffic.</P>
          <P>You may disable cookies through your browser settings.</P>

          <H2>6. Data Security</H2>
          <P>
            We implement reasonable administrative, technical, and organizational safeguards designed
            to protect your information.
          </P>
          <P>However, no internet transmission or storage platform can be guaranteed to be 100% secure.</P>

          <H2>7. Data Retention</H2>
          <P>We retain personal information only for as long as necessary to:</P>
          <UL>
            <li>Fulfill the purposes outlined in this policy</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes</li>
            <li>Enforce agreements</li>
          </UL>

          <H2>8. Third-Party Services</H2>
          <P>Our Website and services may contain links or integrations with third-party platforms.</P>
          <P>We are not responsible for the privacy practices of third-party websites or services.</P>
          <P>Users should review the privacy policies of those platforms independently.</P>

          <H2>9. Your Rights</H2>
          <P>Depending on your jurisdiction, you may have rights to:</P>
          <UL>
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Restrict processing</li>
            <li>Object to certain processing activities</li>
            <li>Withdraw consent where applicable</li>
          </UL>
          <P>To exercise these rights, contact us at: <a href="mailto:sales@tuesdaywizards.com" className="text-[#1A1A1A] underline hover:text-[#444] transition-colors">sales@tuesdaywizards.com</a></P>

          <H2>10. California Privacy Rights</H2>
          <P>
            If you are a California resident, you may have additional rights under the California
            Consumer Privacy Act (CCPA), including:
          </P>
          <UL>
            <li>Right to know what personal data is collected</li>
            <li>Right to request deletion</li>
            <li>Right to opt out of certain data sharing</li>
            <li>Right to non-discrimination for exercising privacy rights</li>
          </UL>
          <P>Requests may be submitted to: <a href="mailto:sales@tuesdaywizards.com" className="text-[#1A1A1A] underline hover:text-[#444] transition-colors">sales@tuesdaywizards.com</a></P>

          <H2>11. International Users</H2>
          <P>
            If you access our Website outside the United States, you understand your information may
            be transferred to and processed in the United States.
          </P>

          <H2>12. Children's Privacy</H2>
          <P>Our Website and services are not intended for children under 13 years of age.</P>
          <P>We do not knowingly collect personal information from children.</P>

          <H2>13. Changes to This Privacy Policy</H2>
          <P>We may update this Privacy Policy periodically.</P>
          <P>Changes will be posted on this page with an updated effective date.</P>
          <P>Continued use of the Website after changes constitutes acceptance of the updated policy.</P>

          <H2>14. Contact Information</H2>
          <P>
            If you have questions about this Privacy Policy or our privacy practices, contact us at:
          </P>
          <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-6 space-y-4">
            <div>
              <p className="text-[#1A1A1A] font-semibold text-sm">Flow Wizards, a Company of Tuesday Wizard</p>
              <p className="text-[#666] text-sm">Diddly LLC</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#666] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <a
                href="https://maps.google.com/?q=31500+Grape+St+Ste+3-118+Lake+Elsinore+CA+92532"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#444] hover:text-[#1A1A1A] transition-colors text-sm leading-relaxed"
              >
                31500 Grape St Ste 3-118<br />Lake Elsinore, CA 92532
              </a>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-[#666] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              <a href="https://flowwizards.io" target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-[#1A1A1A] transition-colors text-sm">flowwizards.io</a>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-[#666] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <a href="mailto:sales@tuesdaywizards.com" className="text-[#444] hover:text-[#1A1A1A] transition-colors text-sm">sales@tuesdaywizards.com</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </>
)

export default PrivacyPolicyPage

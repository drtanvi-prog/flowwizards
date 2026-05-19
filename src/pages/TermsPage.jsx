import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ServicePageHero, { SHWord } from '@/components/sections/service-page-hero/ServicePageHero'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease },
})

const H2 = ({ children }) => (
  <h2
    className="font-extrabold text-[#1A1A1A] mt-10 mb-3"
    style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)' }}
  >
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

const Callout = ({ children }) => (
  <div
    className="rounded-2xl px-5 py-4 mb-4"
    style={{ background: '#FEF6F5', border: '1px solid #ffd6c4' }}
  >
    <p className="text-[#444] leading-relaxed m-0" style={{ fontSize: '0.88rem' }}>
      {children}
    </p>
  </div>
)

const TermsPage = () => (
  <>
    <ServicePageHero
      badge="Legal"
      heading={
        <>
          Terms of <SHWord>Use</SHWord>
        </>
      }
      body="These Terms of Use govern your access to and use of the Flow Wizards website and services. Please read them carefully."
    />

    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 xl:px-12">

        {/* Intro badge */}
        <motion.div {...fadeUp(0.05)}>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span
              className="inline-block rounded-lg px-4 py-1.5 font-medium"
              style={{
                fontSize: '0.78rem',
                border: '1px solid #1A1A1A',
                color: '#1A1A1A',
                background: '#FEF6F5',
              }}
            >
              Flow Wizards Inc. — Terms of Use
            </span>
            <span className="text-[#888]" style={{ fontSize: '0.8rem' }}>
              Last Modified: January 1, 2025
            </span>
          </div>

          <P>
            Welcome to Flow Wizards. These Terms of Use (<strong>"Terms"</strong>) are a legally
            binding agreement between you and <strong>Flow Wizards Inc.</strong>{' '}
            (<strong>"Company," "we," "us,"</strong> or <strong>"our"</strong>) governing your
            access to and use of{' '}
            <a href="https://www.flowwizards.com" className="text-[#ff4f00] hover:underline font-medium">
              www.flowwizards.com
            </a>{' '}
            and any related content, features, or services we make available (collectively, the{' '}
            <strong>"Website"</strong>).
          </P>
          <P>
            By accessing or using the Website, you confirm that you are at least 18 years of age,
            have the legal capacity to enter into a binding agreement, and agree to be bound by
            these Terms and our{' '}
            <a href="/privacy-policy" className="text-[#ff4f00] hover:underline font-medium">
              Privacy Policy
            </a>
            , which is incorporated herein by reference. If you do not agree, please do not use
            the Website.
          </P>
        </motion.div>

        <HR />

        {/* 1. Changes */}
        <motion.div {...fadeUp(0.05)}>
          <H2>1. Changes to These Terms</H2>
          <P>
            We reserve the right to update or revise these Terms at any time at our sole
            discretion. When we do, we will update the "Last Modified" date at the top of this
            page. Material changes will be communicated via a notice on our homepage or by email
            where reasonably practicable.
          </P>
          <P>
            Your continued use of the Website after any change becomes effective constitutes your
            acceptance of the revised Terms. We encourage you to review this page periodically
            so you are always aware of the current terms.
          </P>
        </motion.div>

        <HR />

        {/* 2. Intellectual Property */}
        <motion.div {...fadeUp(0.05)}>
          <H2>2. Intellectual Property</H2>
          <P>
            The Website and all of its content — including text, graphics, logos, photography,
            audio and video clips, software, and the overall look and feel — are owned by or
            licensed to Flow Wizards Inc. and are protected by applicable copyright, trademark,
            patent, and other intellectual property laws.
          </P>
          <P>
            We grant you a limited, non-exclusive, non-transferable, revocable licence to access
            and use the Website for your own personal, non-commercial purposes. This licence
            does not include:
          </P>
          <UL>
            <LI>Reproducing, distributing, or publicly displaying Website content without our prior written consent.</LI>
            <LI>Modifying, creating derivative works from, or reverse-engineering any part of the Website.</LI>
            <LI>Using any data mining, scraping, or similar automated data-gathering tools.</LI>
            <LI>Removing, obscuring, or altering any copyright or proprietary notices.</LI>
          </UL>
          <P>
            Any use of the Website beyond this limited licence automatically terminates the
            permissions granted here and may violate applicable law.
          </P>
        </motion.div>

        <HR />

        {/* 3. Trademarks */}
        <motion.div {...fadeUp(0.05)}>
          <H2>3. Trademarks</H2>
          <P>
            "Flow Wizards," our logo, and all related product and service names, design marks,
            and slogans are trademarks or service marks of Flow Wizards Inc. All other
            trademarks, service marks, and logos appearing on the Website belong to their
            respective owners.
          </P>
          <P>
            You may not use any Flow Wizards trademark without our prior written permission.
            Nothing in these Terms grants you any right or licence to use any trademark displayed
            on the Website.
          </P>
        </motion.div>

        <HR />

        {/* 4. Acceptable Use */}
        <motion.div {...fadeUp(0.05)}>
          <H2>4. Acceptable Use</H2>
          <P>
            You agree to use the Website only for lawful purposes and in a manner that does not
            infringe the rights of others. You must not:
          </P>
          <UL>
            <LI>Use the Website in any way that violates applicable local, national, or international law or regulation.</LI>
            <LI>Transmit or upload any material that is unlawful, harmful, defamatory, obscene, or otherwise objectionable.</LI>
            <LI>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</LI>
            <LI>Send unsolicited commercial messages or engage in any form of spam.</LI>
            <LI>Introduce viruses, trojans, worms, or any other malicious or technologically harmful code.</LI>
            <LI>Attempt to gain unauthorized access to any part of the Website, the server on which it is hosted, or any server, computer, or database connected to the Website.</LI>
            <LI>Conduct any denial-of-service attack or interfere with other users' enjoyment of the Website.</LI>
            <LI>Use automated means to access, monitor, or copy any part of the Website without our prior written consent.</LI>
          </UL>
          <P>
            We reserve the right to report any illegal activity to the relevant law-enforcement
            authorities and to cooperate fully with any investigation.
          </P>
        </motion.div>

        <HR />

        {/* 5. Monitoring & Termination */}
        <motion.div {...fadeUp(0.05)}>
          <H2>5. Monitoring and Enforcement</H2>
          <P>
            We have the right — though not the obligation — to monitor the Website and its use.
            We may, without prior notice:
          </P>
          <UL>
            <LI>Remove or refuse to post any content for any reason at our sole discretion.</LI>
            <LI>Take appropriate legal action against anyone who uses the Website in violation of these Terms.</LI>
            <LI>Terminate or suspend your access to all or part of the Website for any violation of these Terms.</LI>
            <LI>Disclose information about you to law enforcement or other authorities where required by law or where we believe it is necessary to protect our rights or the rights of others.</LI>
          </UL>
        </motion.div>

        <HR />

        {/* 6. Content Accuracy */}
        <motion.div {...fadeUp(0.05)}>
          <H2>6. Accuracy of Information</H2>
          <P>
            The content on the Website is provided for general informational purposes only. While
            we make reasonable efforts to keep information accurate and up to date, we make no
            representations or warranties of any kind — express or implied — about the
            completeness, accuracy, reliability, or suitability of any information on the Website.
          </P>
          <P>
            Any reliance you place on such information is strictly at your own risk. We expressly
            disclaim liability for any errors or omissions in the content and for any losses or
            damages arising from your reliance on it.
          </P>
        </motion.div>

        <HR />

        {/* 7. Third-Party Links */}
        <motion.div {...fadeUp(0.05)}>
          <H2>7. Third-Party Links</H2>
          <P>
            The Website may contain links to external websites operated by third parties. These
            links are provided for your convenience only. We have no control over the content of
            those sites and accept no responsibility for them or for any loss or damage that may
            arise from your use of them.
          </P>
          <P>
            Linking to a third-party site does not imply our endorsement of its content, products,
            or services. We encourage you to review the terms and privacy policies of any
            third-party site you visit.
          </P>
        </motion.div>

        <HR />

        {/* 8. Linking to Us */}
        <motion.div {...fadeUp(0.05)}>
          <H2>8. Linking to Our Website</H2>
          <P>
            You may link to our homepage provided the link is fair and lawful and does not damage
            our reputation or take advantage of it. You must not:
          </P>
          <UL>
            <LI>Suggest any form of association, approval, or endorsement by us without our express written consent.</LI>
            <LI>Frame any page of the Website on another site without our prior written permission.</LI>
            <LI>Create deep links to any page other than the homepage without our express permission.</LI>
          </UL>
          <P>
            We reserve the right to withdraw linking permission at any time without notice.
          </P>
        </motion.div>

        <HR />

        {/* 9. Privacy */}
        <motion.div {...fadeUp(0.05)}>
          <H2>9. Your Privacy</H2>
          <P>
            All information collected through the Website is handled in accordance with our{' '}
            <a href="/privacy-policy" className="text-[#ff4f00] hover:underline font-medium">
              Privacy Policy
            </a>
            . By using the Website, you consent to our collection and use of your information
            as described therein. Our Privacy Policy is incorporated into these Terms by reference.
          </P>
        </motion.div>

        <HR />

        {/* 10. Disclaimers */}
        <motion.div {...fadeUp(0.05)}>
          <H2>10. Disclaimer of Warranties</H2>
          <Callout>
            THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE
            ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </Callout>
          <P>
            We do not warrant that the Website will be uninterrupted, error-free, or free of
            viruses or other harmful components. You are responsible for implementing sufficient
            safeguards and maintaining appropriate backups of any data you interact with through
            the Website.
          </P>
        </motion.div>

        <HR />

        {/* 11. Liability */}
        <motion.div {...fadeUp(0.05)}>
          <H2>11. Limitation of Liability</H2>
          <P>
            To the fullest extent permitted by applicable law, Flow Wizards Inc., its affiliates,
            officers, directors, employees, and agents will not be liable for any indirect,
            incidental, special, consequential, or punitive damages — including lost profits,
            loss of data, business interruption, or loss of goodwill — arising out of or in
            connection with your use of, or inability to use, the Website.
          </P>
          <P>
            This limitation applies regardless of the legal theory asserted and whether or not
            we have been advised of the possibility of such damages. Our total aggregate liability
            to you for any claim arising under these Terms will not exceed the greater of (a) the
            amount you paid us in the twelve months preceding the claim, or (b) USD $100.
          </P>
          <P>
            Some jurisdictions do not allow the exclusion or limitation of certain damages, so the
            above limitations may not apply to you in full.
          </P>
        </motion.div>

        <HR />

        {/* 12. Indemnification */}
        <motion.div {...fadeUp(0.05)}>
          <H2>12. Indemnification</H2>
          <P>
            You agree to defend, indemnify, and hold harmless Flow Wizards Inc. and its
            affiliates, officers, directors, employees, and agents from and against any claims,
            liabilities, damages, judgments, awards, losses, costs, and expenses (including
            reasonable attorneys' fees) arising out of or relating to:
          </P>
          <UL>
            <LI>Your breach of these Terms.</LI>
            <LI>Your use of the Website in a manner not authorized by these Terms.</LI>
            <LI>Any content you submit or transmit through the Website.</LI>
            <LI>Your violation of any applicable law or the rights of any third party.</LI>
          </UL>
        </motion.div>

        <HR />

        {/* 13. Governing Law */}
        <motion.div {...fadeUp(0.05)}>
          <H2>13. Governing Law and Dispute Resolution</H2>
          <P>
            These Terms are governed by and construed in accordance with the laws of the State
            of New York, without regard to its conflict-of-laws rules.
          </P>
          <H3>Informal Resolution</H3>
          <P>
            Before initiating any formal proceeding, you agree to first contact us at{' '}
            <a href="mailto:legal@flowwizards.com" className="text-[#ff4f00] hover:underline font-medium">
              legal@flowwizards.com
            </a>{' '}
            and give us thirty (30) days to attempt to resolve the dispute informally.
          </P>
          <H3>Arbitration</H3>
          <P>
            If informal resolution fails, any dispute arising out of or relating to these Terms
            will be resolved by binding arbitration administered by the American Arbitration
            Association under its Commercial Arbitration Rules, conducted in New York, New York.
            The arbitrator's award will be final and binding and may be entered as a judgment in
            any court of competent jurisdiction.
          </P>
          <H3>Class Action Waiver</H3>
          <P>
            You agree that any arbitration or legal proceeding will be conducted solely on an
            individual basis and not as a class, collective, or representative action. You waive
            any right to participate in a class action lawsuit or class-wide arbitration.
          </P>
          <H3>Time Limitation on Claims</H3>
          <P>
            Any cause of action or claim you may have arising out of or relating to these Terms
            or the Website must be commenced within one (1) year after the cause of action
            accrues. Failure to do so will permanently bar such claim.
          </P>
        </motion.div>

        <HR />

        {/* 14. Geographic */}
        <motion.div {...fadeUp(0.05)}>
          <H2>14. Geographic Restrictions</H2>
          <P>
            The Website is intended for users located in the United States. We make no
            representation that the Website or its content is appropriate or available in other
            locations. If you access the Website from outside the United States, you do so at
            your own initiative and are responsible for compliance with local laws.
          </P>
        </motion.div>

        <HR />

        {/* 15. General */}
        <motion.div {...fadeUp(0.05)}>
          <H2>15. General Provisions</H2>
          <H3>Entire Agreement</H3>
          <P>
            These Terms, together with our Privacy Policy and any applicable Order Form or
            Master Consulting Services Agreement, constitute the entire agreement between you
            and Flow Wizards Inc. regarding the Website and supersede all prior agreements,
            representations, and understandings.
          </P>
          <H3>Waiver and Severability</H3>
          <P>
            Our failure to enforce any provision of these Terms does not constitute a waiver of
            our right to enforce it later. If any provision is found to be invalid or
            unenforceable, that provision will be limited or eliminated to the minimum extent
            necessary, and the remaining provisions will continue in full force.
          </P>
          <H3>No Agency</H3>
          <P>
            Nothing in these Terms creates any agency, partnership, joint venture, or employment
            relationship between you and Flow Wizards Inc.
          </P>
        </motion.div>

        <HR />

        {/* 16. Copyright Infringement */}
        <motion.div {...fadeUp(0.05)}>
          <H2>16. Copyright Infringement - DMCA Policy</H2>
          <P>
            Flow Wizards Inc. respects the intellectual property rights of others. If you
            believe that material on the Website infringes your copyright, please send a written
            notice to the address below containing:
          </P>
          <UL>
            <LI>A physical or electronic signature of the copyright owner or an authorized agent.</LI>
            <LI>Identification of the copyrighted work claimed to have been infringed.</LI>
            <LI>The URL or other specific location on the Website of the allegedly infringing material.</LI>
            <LI>Your name, address, telephone number, and email address.</LI>
            <LI>A statement that you have a good-faith belief that the use is not authorized by the copyright owner, its agent, or the law.</LI>
            <LI>A statement, made under penalty of perjury, that the information in the notice is accurate and that you are the copyright owner or authorized to act on the owner's behalf.</LI>
          </UL>
          <P>
            Repeated or egregious infringement may result in permanent termination of access to
            the Website.
          </P>
        </motion.div>

        <HR />

        {/* Contact */}
        <motion.div {...fadeUp(0.05)}>
          <H2>17. Contact Us</H2>
          <P>
            Questions about these Terms, requests related to copyright infringement notices, or
            any other legal inquiries should be directed to:
          </P>
          <div className="rounded-2xl border border-[#ebebeb] bg-[#FEF6F5] p-6 mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <p className="font-semibold text-[#1A1A1A] mb-1 text-sm">Legal &amp; General Inquiries</p>
                <a
                  href="mailto:legal@flowwizards.com"
                  className="text-[#ff4f00] hover:underline"
                  style={{ fontSize: '0.9rem' }}
                >
                  legal@flowwizards.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A] mb-1 text-sm">Privacy Inquiries</p>
                <a
                  href="mailto:privacy@flowwizards.com"
                  className="text-[#ff4f00] hover:underline"
                  style={{ fontSize: '0.9rem' }}
                >
                  privacy@flowwizards.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A] mb-1 text-sm">Mailing Address</p>
                <p className="text-[#444]" style={{ fontSize: '0.9rem' }}>
                  Flow Wizards Inc.
                  <br />
                  300 Kent Avenue #9
                  <br />
                  Brooklyn, NY 11249
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A] mb-1 text-sm">Related Documents</p>
                <div className="flex flex-col gap-1">
                  <Link to="/privacy-policy" className="text-[#ff4f00] hover:underline" style={{ fontSize: '0.9rem' }}>
                    Privacy Policy
                  </Link>
                  <Link to="/msa" className="text-[#ff4f00] hover:underline" style={{ fontSize: '0.9rem' }}>
                    Master Consultant Service Agreement
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  </>
)

export default TermsPage

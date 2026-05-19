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
  <p
    className={`text-[#444] leading-relaxed mb-3 ${className}`}
    style={{ fontSize: '0.9rem' }}
  >
    {children}
  </p>
)

const UL = ({ children }) => (
  <ul className="mb-4 pl-1 flex flex-col gap-1.5">{children}</ul>
)

const LI = ({ children }) => (
  <li
    className="flex items-start gap-2.5 text-[#444] leading-relaxed"
    style={{ fontSize: '0.9rem' }}
  >
    <span
      className="mt-1.75 shrink-0 rounded-full bg-[#ff4f00]"
      style={{ width: 5, height: 5 }}
    />
    <span>{children}</span>
  </li>
)

const HR = () => <div className="my-8 h-px bg-[#ebebeb]" />

const SectionNum = ({ num, title }) => (
  <div className="flex items-baseline gap-3 mt-10 mb-3">
    <span
      className="shrink-0 font-extrabold text-[#ff4f00]"
      style={{ fontSize: '0.78rem' }}
    >
      {num}
    </span>
    <h2
      className="font-extrabold text-[#1A1A1A]"
      style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)' }}
    >
      {title}
    </h2>
  </div>
)

const SubNum = ({ num, title }) => (
  <div className="flex items-baseline gap-2.5 mt-6 mb-2">
    <span
      className="shrink-0 font-semibold text-[#ff4f00]"
      style={{ fontSize: '0.78rem' }}
    >
      {num}
    </span>
    <h3 className="font-bold text-[#1A1A1A]" style={{ fontSize: '1rem' }}>
      {title}
    </h3>
  </div>
)

const MsaPage = () => (
  <>
    <ServicePageHero
      badge="Legal"
      heading={
        <>
          Master Consultant <SHWord>Service Agreement</SHWord>
        </>
      }
      body="This Master Consulting Services Agreement governs all engagements between Flow Wizards Inc. and its clients. Please read it carefully before ordering any services."
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
              Flow Wizards Inc. — Master Consulting Services Agreement
            </span>
            <span className="text-[#888]" style={{ fontSize: '0.8rem' }}>
              Effective: January 1, 2025
            </span>
          </div>

          <P>
            This Master Consulting Services Agreement (this <strong>"Agreement"</strong>) is entered
            into between <strong>Flow Wizards Inc.</strong> ("<strong>Consultant</strong>") and the
            client identified in the applicable Order Form ("<strong>Client</strong>"). This Agreement
            governs each Order Form executed by the parties and sets out the terms under which
            Consultant will deliver automation and workflow consulting services to Client.
          </P>
          <P>
            By executing an Order Form or by accepting services under this Agreement, Client agrees
            to be bound by the terms herein. If you do not agree, do not execute an Order Form or
            accept any services.
          </P>
        </motion.div>

        <HR />

        {/* Section 1 */}
        <motion.div {...fadeUp(0.05)}>
          <SectionNum num="1." title="Definitions" />
          <P>As used in this Agreement, the following terms have the meanings set out below:</P>
          <UL>
            <LI>
              <strong>"Action"</strong> means any claim, action, cause of action, demand, lawsuit,
              arbitration, inquiry, audit, notice of violation, proceeding, litigation, citation,
              summons, subpoena, or investigation of any nature.
            </LI>
            <LI>
              <strong>"Affiliate"</strong> means any entity that controls, is controlled by, or is
              under common control with a party, where "control" means ownership of more than 50% of
              the voting securities of such entity.
            </LI>
            <LI>
              <strong>"Client Materials"</strong> means all documents, data, software, credentials,
              and other materials provided by Client to Consultant for use in performing the Services.
            </LI>
            <LI>
              <strong>"Deliverables"</strong> means all tangible and intangible work product
              specifically created for Client and expressly identified as such in an Order Form.
            </LI>
            <LI>
              <strong>"Consultant Personnel"</strong> means all employees, subcontractors, and
              agents engaged by Consultant in the performance of Services.
            </LI>
            <LI>
              <strong>"Documentation"</strong> means any written materials, guides, or specifications
              Consultant provides describing the Services or Deliverables.
            </LI>
            <LI>
              <strong>"Intellectual Property Rights"</strong> means all patents, copyrights,
              trademarks, trade secrets, and other proprietary rights recognized in any jurisdiction.
            </LI>
            <LI>
              <strong>"Law"</strong> means all applicable federal, state, local, and international
              laws, regulations, rules, orders, and ordinances.
            </LI>
            <LI>
              <strong>"Losses"</strong> means all losses, damages, liabilities, deficiencies, claims,
              actions, judgments, settlements, interest, awards, penalties, fines, costs, and expenses,
              including reasonable attorneys' fees.
            </LI>
            <LI>
              <strong>"Order Form"</strong> means a written or electronic statement of work, proposal,
              or purchase order referencing this Agreement and executed by both parties.
            </LI>
            <LI>
              <strong>"Work Product"</strong> means all Deliverables and other output created by
              Consultant specifically for Client in connection with the Services.
            </LI>
          </UL>
        </motion.div>

        <HR />

        {/* Section 2 */}
        <motion.div {...fadeUp(0.05)}>
          <SectionNum num="2." title="Engagement of Consultant" />

          <SubNum num="2.1" title="Services" />
          <P>
            Client hereby engages Consultant, and Consultant hereby accepts such engagement, to
            deliver the services set out in the applicable Order Form (the <strong>"Services"</strong>
            ). Consultant will perform the Services in a professional and workmanlike manner consistent
            with industry standards.
          </P>

          <SubNum num="2.2" title="Changes to Scope of Work" />
          <P>
            Either party may request changes to the scope of Services by providing a written change
            request. The receiving party will respond within seven (7) calendar days with an assessment
            of the impact on timeline, fees, and deliverables. No change becomes effective until both
            parties sign a written amendment to the applicable Order Form.
          </P>

          <SubNum num="2.3" title="Project Management" />
          <P>
            Each party will designate a project manager to serve as the primary point of contact for
            day-to-day communications. Either party may replace its project manager upon written notice
            to the other party.
          </P>

          <SubNum num="2.4" title="Training" />
          <P>
            Consultant will provide training on tools, workflows, and Deliverables on an as-needed
            basis as reasonably specified in the Order Form. Additional training beyond the scope of
            an Order Form is subject to Consultant's then-current hourly rates.
          </P>

          <SubNum num="2.5" title="Reports" />
          <P>
            Consultant will deliver written summaries of Services performed upon Client's reasonable
            request or at Consultant's own initiative where Consultant deems a summary to be material
            to Client's understanding of the Services.
          </P>

          <SubNum num="2.6" title="Assignment of Personnel" />
          <P>
            Consultant will assign Consultant Personnel in its sole discretion to deliver the Services.
            Consultant reserves the right to substitute Consultant Personnel without notice, provided
            that any replacement personnel are reasonably qualified to perform the relevant Services.
          </P>
        </motion.div>

        <HR />

        {/* Section 3 */}
        <motion.div {...fadeUp(0.05)}>
          <SectionNum num="3." title="Client Obligations" />

          <SubNum num="3.1" title="Underlying Software" />
          <P>
            Prior to the commencement of Services, Client will provide Consultant with all
            documentation, licenses, login credentials, and API access necessary for Consultant to
            access and operate the software platforms identified in the Order Form.
          </P>

          <SubNum num="3.2" title="Client Resources and Cooperation" />
          <P>Client agrees to:</P>
          <UL>
            <LI>Procure and maintain all third-party software subscriptions and API access required for the Services.</LI>
            <LI>Participate in scheduled meetings and provide timely feedback on Deliverables.</LI>
            <LI>Authorize Consultant to record meetings for documentation and quality-assurance purposes.</LI>
            <LI>Designate an authorized representative with sufficient authority to make decisions regarding the Services.</LI>
          </UL>

          <SubNum num="3.3" title="Effect of Client's Failure or Delay" />
          <P>
            Consultant will not be held liable for any delay or failure to perform the Services to
            the extent that such delay or failure was caused directly or indirectly by Client's failure
            to provide timely cooperation, materials, access, or approvals. Any agreed-upon deadlines
            will be extended by the duration of Client's delay.
          </P>

          <SubNum num="3.4" title="Acceptance of Services" />
          <P>
            Client will have seven (7) calendar days following delivery of any Deliverable to provide
            written notice of rejection specifying the basis for rejection. If Client does not provide
            such notice within the acceptance period, the Deliverable will be deemed accepted. Client
            may not reject a Deliverable that substantially conforms to the specifications in the Order
            Form on the basis of minor, non-material deviations.
          </P>
        </motion.div>

        <HR />

        {/* Section 4 */}
        <motion.div {...fadeUp(0.05)}>
          <SectionNum num="4." title="Fees and Payment" />

          <SubNum num="4.1" title="Fees" />
          <P>
            Client will pay Consultant the fees set out in the applicable Order Form. All fees are
            stated in US dollars and are exclusive of applicable taxes.
          </P>

          <SubNum num="4.2" title="Taxes" />
          <P>
            Client is responsible for all sales, use, excise, and similar taxes imposed on the
            Services by any governmental authority, excluding taxes based solely on Consultant's
            net income.
          </P>

          <SubNum num="4.3" title="Payment Terms" />
          <UL>
            <LI>
              <strong>Hourly packages:</strong> Pre-purchased hourly packages are billed upfront and
              are non-refundable. Unused hours in a pre-purchased package expire twelve (12) months
              after purchase unless otherwise agreed in the Order Form.
            </LI>
            <LI>
              <strong>Subsequent invoices:</strong> Fees for Services exceeding a pre-purchased
              package, or billed on a time-and-materials basis, will be invoiced monthly or upon
              completion of the applicable milestone. Invoices are due within fourteen (14) calendar
              days of the invoice date.
            </LI>
            <LI>
              <strong>Late payment:</strong> Overdue amounts will accrue interest at the rate of
              1.3% per month (or the maximum rate permitted by Law, whichever is lower) on the
              outstanding principal from the due date until paid in full.
            </LI>
            <LI>
              <strong>Credit card authorization:</strong> If an invoice remains unpaid for more than
              thirty (30) calendar days, Client authorizes Consultant to charge any credit card on
              file for the outstanding balance plus accrued interest.
            </LI>
          </UL>

          <SubNum num="4.4" title="No Deduction or Setoff" />
          <P>
            Client will make all payments without withholding, deduction, or setoff of any kind,
            whether for taxes, disputed amounts, or otherwise, unless expressly required by applicable
            Law. If Client is required by Law to withhold any amount, Client will gross up the payment
            so that Consultant receives the full invoiced amount.
          </P>
        </motion.div>

        <HR />

        {/* Section 5 */}
        <motion.div {...fadeUp(0.05)}>
          <SectionNum num="5." title="Intellectual Property Rights" />
          <P>
            Subject to full payment of all fees owed under the applicable Order Form, all right, title,
            and interest in and to (a) the Work Product and (b) all works, inventions, and developments
            that are specifically created for Client and expressly identified as Deliverables in an
            Order Form shall vest in and belong to Client upon delivery and acceptance.
          </P>
          <P>
            Notwithstanding the foregoing, Consultant retains all right, title, and interest in and to:
          </P>
          <UL>
            <LI>Consultant's pre-existing methodologies, tools, frameworks, templates, and know-how.</LI>
            <LI>Any generic or general-purpose components developed during the engagement that are not specific to Client's business.</LI>
            <LI>Copies of Work Product retained by Consultant solely for archival, legal, or quality-assurance purposes.</LI>
          </UL>
          <P>
            Client grants Consultant a limited, non-exclusive, royalty-free license to use Client
            Materials solely for the purpose of performing the Services during the term of this
            Agreement.
          </P>
        </motion.div>

        <HR />

        {/* Section 6 */}
        <motion.div {...fadeUp(0.05)}>
          <SectionNum num="6." title="Representations and Warranties" />

          <SubNum num="6.1" title="Mutual Representations" />
          <P>Each party represents and warrants to the other that:</P>
          <UL>
            <LI>It has full power and authority to enter into and perform its obligations under this Agreement.</LI>
            <LI>This Agreement has been duly authorized, executed, and delivered by such party.</LI>
            <LI>The execution and performance of this Agreement do not violate any applicable Law or any agreement to which such party is a party.</LI>
          </UL>
          <P>
            Consultant additionally warrants that it will perform the Services competently and in a
            professional manner. Client additionally warrants that Client Materials do not infringe
            any third-party Intellectual Property Rights.
          </P>

          <SubNum num="6.2" title="Disclaimer of Warranties" />
          <P>
            EXCEPT AS EXPRESSLY SET FORTH IN SECTION 6.1, ALL SERVICES, WORK PRODUCT, AND
            DELIVERABLES ARE PROVIDED "AS IS." CONSULTANT EXPRESSLY DISCLAIMS ALL OTHER WARRANTIES,
            EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, NON-INFRINGEMENT, OR TITLE. CONSULTANT DOES NOT WARRANT THAT THE
            SERVICES WILL MEET CLIENT'S REQUIREMENTS OR THAT ANY THIRD-PARTY PLATFORMS INTEGRATED AS
            PART OF THE SERVICES WILL OPERATE WITHOUT INTERRUPTION OR ERROR.
          </P>
        </motion.div>

        <HR />

        {/* Section 7 */}
        <motion.div {...fadeUp(0.05)}>
          <SectionNum num="7." title="Confidentiality" />

          <SubNum num="7.1" title="Confidential Information" />
          <P>
            Each party (as a "Receiving Party") acknowledges that it may receive or have access to
            information of the other party (the "Disclosing Party") that is proprietary or
            confidential, including technology, trade secrets, business plans, financial data,
            personnel information, and the terms of this Agreement (collectively,
            <strong> "Confidential Information"</strong>). Confidential Information does not include
            information that:
          </P>
          <UL>
            <LI>Is or becomes publicly available through no act or omission of the Receiving Party.</LI>
            <LI>Was rightfully known to the Receiving Party before disclosure without restriction.</LI>
            <LI>Is independently developed by the Receiving Party without use of or reference to the Disclosing Party's Confidential Information.</LI>
            <LI>Is received from a third party without restriction and without breach of any obligation of confidentiality.</LI>
          </UL>

          <SubNum num="7.2" title="Obligations of Protection" />
          <P>
            The Receiving Party will: (a) use the Disclosing Party's Confidential Information solely
            to perform its obligations or exercise its rights under this Agreement; (b) disclose
            Confidential Information only to its representatives who have a need to know and are bound
            by confidentiality obligations no less protective than those in this Agreement; and (c)
            maintain commercially reasonable safeguards to protect Confidential Information from
            unauthorized access or disclosure.
          </P>

          <SubNum num="7.3" title="Compelled Disclosures" />
          <P>
            If a Receiving Party is required by Law or court order to disclose Confidential
            Information, the Receiving Party will, to the extent permitted by Law: (a) promptly notify
            the Disclosing Party of such requirement; (b) cooperate with the Disclosing Party in
            seeking a protective order or other appropriate relief; and (c) disclose only that portion
            of Confidential Information that is strictly required by the applicable order or Law.
          </P>
        </motion.div>

        <HR />

        {/* Section 8 */}
        <motion.div {...fadeUp(0.05)}>
          <SectionNum num="8." title="Term and Termination" />

          <SubNum num="8.1" title="Term" />
          <P>
            This Agreement commences on the date of execution of the first Order Form referencing
            it and continues until all Services under all Order Forms have been completed or the
            Agreement is earlier terminated in accordance with this Section 8.
          </P>

          <SubNum num="8.2" title="Termination Without Cause" />
          <P>
            Either party may terminate this Agreement or any Order Form for any reason or no reason
            upon seven (7) calendar days' prior written notice to the other party. In the event of
            such termination, Client will pay Consultant for all Services performed and expenses
            incurred up to the effective date of termination.
          </P>

          <SubNum num="8.3" title="Termination for Cause" />
          <P>
            Either party may terminate this Agreement immediately upon written notice if the other
            party: (a) materially breaches this Agreement and fails to cure such breach within ten
            (10) calendar days of receiving written notice specifying the breach; or (b) becomes
            insolvent, makes an assignment for the benefit of creditors, or is the subject of
            bankruptcy or similar proceedings. Client's failure to pay any undisputed invoice
            constitutes a material breach.
          </P>

          <SubNum num="8.4" title="Effect of Termination" />
          <P>Upon termination or expiration of this Agreement:</P>
          <UL>
            <LI>Consultant will promptly return all Client Materials in its possession and erase Client's Confidential Information from its systems, except as required by Law or retained for archival purposes.</LI>
            <LI>If Consultant terminates for cause, all fees due under outstanding Order Forms become immediately due and payable.</LI>
            <LI>Client will pay all outstanding invoices within fourteen (14) calendar days of termination.</LI>
            <LI>The following provisions survive termination: Sections 3.3, 4, 5, 6.2, 7, 8.4, 9, 10, 11, and 13.</LI>
          </UL>
        </motion.div>

        <HR />

        {/* Section 9 */}
        <motion.div {...fadeUp(0.05)}>
          <SectionNum num="9." title="Indemnification" />

          <SubNum num="9.1" title="Consultant Indemnification" />
          <P>
            Consultant will defend, indemnify, and hold harmless Client and its officers, directors,
            and employees from and against any third-party Action arising from any allegation that the
            Deliverables, when used by Client in accordance with this Agreement, infringe any
            third-party Intellectual Property Rights, except to the extent such Action arises from
            Client Materials or Client-directed specifications.
          </P>

          <SubNum num="9.2" title="Client Indemnification" />
          <P>
            Client will defend, indemnify, and hold harmless Consultant and its officers, directors,
            and employees from and against any third-party Action arising from: (a) Client Materials;
            (b) specifications or directions provided by Client that Consultant followed; (c) Client's
            breach of this Agreement; or (d) Client's use of the Services or Deliverables in a manner
            not authorized by this Agreement.
          </P>

          <SubNum num="9.3" title="Indemnification Procedure" />
          <P>
            The indemnified party will: (a) promptly notify the indemnifying party in writing of any
            Action for which indemnification is sought; (b) grant the indemnifying party sole control
            of the defense and settlement of such Action; and (c) provide reasonable cooperation at
            the indemnifying party's expense. The indemnifying party will not settle any Action in a
            manner that imposes any obligation, restriction, or liability on the indemnified party
            without the indemnified party's prior written consent.
          </P>
        </motion.div>

        <HR />

        {/* Section 10 */}
        <motion.div {...fadeUp(0.05)}>
          <SectionNum num="10." title="Limitations of Liability" />

          <SubNum num="10.1" title="Exclusion of Consequential Damages" />
          <P>
            IN NO EVENT WILL CONSULTANT BE LIABLE TO CLIENT FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, LOSS OF
            REVENUE, LOSS OF DATA, OR COST OF SUBSTITUTE SERVICES, ARISING OUT OF OR RELATED TO
            THIS AGREEMENT, REGARDLESS OF WHETHER CONSULTANT HAS BEEN ADVISED OF THE POSSIBILITY
            OF SUCH DAMAGES AND REGARDLESS OF THE THEORY OF LIABILITY.
          </P>

          <SubNum num="10.2" title="Aggregate Liability Cap" />
          <P>
            THE COLLECTIVE AGGREGATE LIABILITY OF CONSULTANT AND ITS AFFILIATES ARISING OUT OF OR
            RELATED TO THIS AGREEMENT WILL NOT EXCEED THE TOTAL FEES ACTUALLY PAID BY CLIENT TO
            CONSULTANT UNDER THE APPLICABLE ORDER FORM DURING THE TWELVE (12) MONTHS IMMEDIATELY
            PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
          </P>
          <P>
            The foregoing limitations will not apply to a party's indemnification obligations under
            Section 9, a party's fraud or willful misconduct, or Client's payment obligations under
            Section 4.
          </P>
        </motion.div>

        <HR />

        {/* Section 11 */}
        <motion.div {...fadeUp(0.05)}>
          <SectionNum num="11." title="Non-Solicitation" />
          <P>
            During the term of this Agreement and for one (1) year thereafter, neither party will,
            directly or indirectly, solicit for employment or hire any employee or independent
            contractor of the other party who was involved in the performance or receipt of Services
            under this Agreement, without the prior written consent of the other party.
          </P>
          <P>
            A violation of this Section 11 by either party will entitle the non-breaching party to
            liquidated damages in an amount equal to six (6) months of the solicited individual's
            then-current total compensation, which the parties agree represents a reasonable estimate
            of the harm caused by such breach and not a penalty.
          </P>
        </motion.div>

        <HR />

        {/* Section 12 */}
        <motion.div {...fadeUp(0.05)}>
          <SectionNum num="12." title="Data Privacy" />
          <P>
            Each party is responsible for ensuring its own compliance with applicable data privacy
            Laws in connection with its activities under this Agreement, including the California
            Consumer Privacy Act and, where applicable, the General Data Protection Regulation.
          </P>
          <P>
            To the extent Consultant accesses personal information as part of the Services, Consultant
            will process such personal information only as necessary to perform the Services and in
            accordance with Client's reasonable written instructions. Consultant does not operate as a
            HIPAA-compliant service provider. If Client operates in a regulated healthcare environment
            and requires HIPAA-compliant handling of protected health information, Client must notify
            Consultant in writing prior to commencement of Services so the parties can negotiate an
            appropriate Business Associate Agreement.
          </P>
        </motion.div>

        <HR />

        {/* Section 13 */}
        <motion.div {...fadeUp(0.05)}>
          <SectionNum num="13." title="Miscellaneous" />

          <SubNum num="13.1" title="General" />
          <UL>
            <LI>
              <strong>Independent contractor.</strong> Consultant is an independent contractor. Nothing
              in this Agreement creates an employment, partnership, joint venture, or agency
              relationship between the parties.
            </LI>
            <LI>
              <strong>Entire agreement.</strong> This Agreement, together with all Order Forms,
              constitutes the entire agreement between the parties with respect to its subject matter
              and supersedes all prior and contemporaneous agreements, representations, and
              understandings.
            </LI>
            <LI>
              <strong>Assignment.</strong> Client may not assign this Agreement or any rights or
              obligations hereunder without Consultant's prior written consent. Consultant may assign
              this Agreement to an Affiliate or in connection with a merger, acquisition, or sale of
              substantially all of its assets. Any purported assignment in violation of this provision
              is void.
            </LI>
            <LI>
              <strong>Amendments.</strong> No amendment to this Agreement is effective unless made
              in writing and signed by authorized representatives of both parties.
            </LI>
            <LI>
              <strong>Severability.</strong> If any provision of this Agreement is held invalid or
              unenforceable, the remaining provisions will continue in full force and effect.
            </LI>
          </UL>

          <SubNum num="13.2" title="Notices" />
          <P>
            All notices under this Agreement must be in writing and will be deemed delivered: (a)
            when delivered by hand; (b) one (1) business day after being sent by a nationally
            recognized overnight courier; or (c) on the date of transmission when sent by email with
            confirmation of receipt, to the addresses set out in the applicable Order Form.
          </P>

          <SubNum num="13.3" title="Force Majeure" />
          <P>
            Neither party will be liable for any failure or delay in performance caused by
            circumstances beyond its reasonable control, including natural disasters, pandemic,
            government action, or internet outages (<strong>"Force Majeure Event"</strong>). The
            affected party will promptly notify the other party and use commercially reasonable
            efforts to resume performance. If a Force Majeure Event continues for more than sixty
            (60) consecutive calendar days, either party may terminate the affected Order Form upon
            written notice without further liability.
          </P>

          <SubNum num="13.4" title="Governing Law and Dispute Resolution" />
          <P>
            This Agreement is governed by and construed in accordance with the internal laws of the
            State of New York, without regard to its conflict-of-laws principles. Any dispute arising
            out of or relating to this Agreement that cannot be resolved by good-faith negotiation
            within thirty (30) days will be submitted to binding arbitration in New York, New York,
            administered by the American Arbitration Association under its Commercial Arbitration
            Rules. The prevailing party in any arbitration or litigation will be entitled to recover
            its reasonable attorneys' fees and costs.
          </P>

          <SubNum num="13.5" title="Survival" />
          <P>
            The following Sections survive expiration or termination of this Agreement for any reason:
            Sections 3.3, 4, 5, 6.2, 7, 8.4, 9, 10, 11, 12, and 13.
          </P>
        </motion.div>

        <HR />

        {/* Contact */}
        <motion.div {...fadeUp(0.05)}>
          <H2>Questions About This Agreement</H2>
          <P>
            If you have any questions about this Agreement or need to discuss its terms before
            executing an Order Form, please contact us at{' '}
            <a
              href="mailto:legal@flowwizards.com"
              className="text-[#ff4f00] hover:underline font-medium"
            >
              legal@flowwizards.com
            </a>
            .
          </P>
          <div className="rounded-2xl border border-[#ebebeb] bg-[#FEF6F5] p-6 mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <p className="font-semibold text-[#1A1A1A] mb-1 text-sm">Legal Inquiries</p>
                <a
                  href="mailto:legal@flowwizards.com"
                  className="text-[#ff4f00] hover:underline"
                  style={{ fontSize: '0.9rem' }}
                >
                  legal@flowwizards.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A] mb-1 text-sm">General Contact</p>
                <a
                  href="/contact"
                  className="text-[#ff4f00] hover:underline"
                  style={{ fontSize: '0.9rem' }}
                >
                  flowwizards.com/contact
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
                <p className="font-semibold text-[#1A1A1A] mb-1 text-sm">Privacy Policy</p>
                <a
                  href="/privacy-policy"
                  className="text-[#ff4f00] hover:underline"
                  style={{ fontSize: '0.9rem' }}
                >
                  View Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </>
)

export default MsaPage

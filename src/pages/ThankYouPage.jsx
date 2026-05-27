import React from "react";

const questions = [
  {
    title: "Where are you spending too much time manually?",
    description:
      "This could be follow-ups, lead intake, client onboarding, reporting, reminders, scheduling, CRM updates, or repetitive admin work.",
  },
  {
    title: "What systems are you currently using?",
    description:
      "For example: GoHighLevel, HubSpot, Monday.com, Airtable, Google Sheets, Zapier, Make, Calendly, Stripe, QuickBooks, email tools, forms, or your CRM.",
  },
  {
    title: "What would you love to automate first?",
    description:
      "The clearer we are on your biggest pain point, the faster we can recommend the right solution.",
  },
];

const preparationItems = [
  "A quick overview of your business",
  "The main process you want to improve",
  "Any tools or platforms you currently use",
  "Examples of tasks you or your team repeat often",
  "Your biggest goal for automation",
];

export default function ThankYouPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f4]">
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="bg-white lg:border lg:border-gray-200 lg:shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          {/* HERO */}
          <section className="border-b border-gray-100">
            <div className="px-5 py-8 sm:px-8 sm:py-12 lg:px-14 lg:py-16">
              {/* Status */}
              <div className="flex items-start gap-4 mb-10 sm:mb-12">
                <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-gray-400 font-semibold">
                    Booking Confirmed
                  </p>

                  <p className="text-sm sm:text-base text-gray-500 mt-1">
                    Your strategy call has been scheduled
                  </p>
                </div>
              </div>

              {/* Heading */}
              <div className="max-w-5xl">
                <h1 className="text-[38px] leading-[0.95] tracking-[-0.04em] font-bold text-[#111827] break-words sm:text-5xl lg:text-6xl xl:text-[72px] xl:leading-[0.92]">
                  You’re Booked - Let’s Build Smarter Workflows Together
                </h1>

                <div className="max-w-3xl mt-8 sm:mt-10 space-y-5 sm:space-y-6">
                  <p className="text-base sm:text-lg lg:text-[19px] text-gray-600 leading-relaxed">
                    Thanks for scheduling your Flow Wizards Strategy Call. We’re
                    excited to learn more about your business, your current
                    processes, and where automation can help you save time,
                    capture more leads, and scale with less manual work.
                  </p>

                  <p className="text-[15px] sm:text-base text-gray-500 leading-relaxed">
                    Your appointment has been confirmed, and a calendar invite
                    should be on its way to your inbox.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* MAIN CONTENT */}
          <section>
            <div className="px-5 py-8 sm:px-8 sm:py-12 lg:px-14 lg:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-12 lg:gap-16">
                {/* LEFT CONTENT */}
                <div className="min-w-0">
                  {/* Intro */}
                  <div className="mb-14 lg:mb-16">
                    <p className="max-w-3xl text-base sm:text-lg text-gray-600 leading-relaxed">
                      During our call, we’ll walk through your current workflow,
                      identify bottlenecks, and look for practical automation
                      opportunities that can help your business run smoother.
                    </p>
                  </div>

                  {/* Questions */}
                  <div className="mb-14 lg:mb-16">
                    <h2 className="max-w-3xl text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-[#111827] leading-tight mb-8 sm:mb-10">
                      To make the most of our time together, take a few minutes
                      before the call to think about:
                    </h2>

                    <div className="border-t border-gray-100">
                      {questions.map((item, index) => (
                        <div
                          key={item.title}
                          className={`py-7 sm:py-8 ${
                            index !== questions.length - 1
                              ? "border-b border-gray-100"
                              : ""
                          }`}
                        >
                          <div className="flex gap-4 sm:gap-5">
                            {/* Number */}
                            <div className="w-6 shrink-0 pt-1">
                              <span className="text-sm font-semibold text-gray-400">
                                0{index + 1}
                              </span>
                            </div>

                            {/* Content */}
                            <div className="min-w-0">
                              <h3 className="text-lg sm:text-xl font-semibold text-[#111827] leading-snug mb-3">
                                {item.title}
                              </h3>

                              <p className="text-[15px] sm:text-base text-gray-600 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Closing */}
                  <div className="border-t border-gray-100 pt-12 sm:pt-14">
                    <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-gray-400 font-semibold mb-5">
                      What Happens Next?
                    </p>

                    <div className="max-w-3xl">
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10">
                        On the call, we’ll help you uncover where automation can
                        create the biggest impact in your business. If Flow
                        Wizards is a good fit, we’ll walk you through the best
                        next steps and show you how we can help turn your
                        workflow into a smoother, faster, more scalable system.
                      </p>

                      <a
                        href="https://flowwizards.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-[#111827] text-white text-sm font-medium px-6 py-4 hover:bg-black transition-colors duration-200 w-full sm:w-auto"
                      >
                        Visit FlowWizards.io
                        <svg
                          className="w-4 h-4 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 7l-10 10m0-10h10v10"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* SIDEBAR */}
                <div className="min-w-0">
                  <div className="border border-gray-200 bg-[#fafafa] p-6 sm:p-8 lg:sticky lg:top-8">
                    <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-gray-400 font-semibold mb-4">
                      Before the Call
                    </p>

                    <h2 className="text-2xl font-bold text-[#111827] leading-tight mb-8">
                      Please have ready:
                    </h2>

                    <div className="space-y-6">
                      {preparationItems.map((item, index) => (
                        <div
                          key={item}
                          className="flex gap-4 pb-6 border-b border-gray-200 last:border-none last:pb-0"
                        >
                          {/* Number */}
                          <div className="w-5 shrink-0">
                            <span className="text-sm font-semibold text-gray-400">
                              {index + 1}
                            </span>
                          </div>

                          {/* Text */}
                          <p className="text-[15px] sm:text-base text-gray-700 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

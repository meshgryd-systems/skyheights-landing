import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
import ContactForm from "../../components/ContactFormWrapper";
import Image from "next/image";

export const metadata = {
  title: "Admissions | Private School Admission in Lugbe Abuja",
  description:
    "Apply for admission into Skyheights Academy, a private school in Lugbe Abuja offering Creche to Secondary education. Clear 5-step admission process."
};

export default function AdmissionsPage() {
  return (
    <>
      {/* ADMISSIONS HERO SECTION - Phase 4: Reassure + guide, not pressure */}
      <section style={{ backgroundImage: "url('/pics/14902.jpg')", backgroundSize: "cover", backgroundPosition: "top" }} className="relative bg-[#eee5b5] text-white py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container relative z-10">
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight text-white!">
            Admissions at Skyheights Academy
          </h1>
          <p className="text-lg font-light md:text-xl text-white/95! max-w-3xl leading-relaxed mb-10">
            We welcome pupils into a structured, nurturing, and academically
            focused learning environment designed to help every child thrive.
          </p>
          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#apply" variant="secondary" size="lg">
              Apply for Admission
            </Button>
            <Button href="#enquiry" variant="outline" size="lg">
              Make an Enquiry
            </Button>
          </div>
        </div>
      </section>

      {/* ADMISSIONS OVERVIEW - Phase 4: Signals selectivity, not exclusion */}
      <SectionContainer background="white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-playfair font-bold text-deep-navy mb-6 leading-tight">
            A Clear and Thoughtful Admission Process
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg leading-relaxed text-text-grey">
            At Skyheights Academy, our admissions process is designed to
            identify pupils who will benefit most from our academic environment
            and values. We admit students into Creche, Nursery, Primary, and
            Secondary levels, subject to availability and assessment.
          </p>
        </div>
      </SectionContainer>

      {/* WHO CAN APPLY - Entry Levels */}
      <SectionContainer background="light">
        <SectionHeader title="Entry Levels" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {[
            {
              level: "Creche",
              description: "Early childhood learners",
              age: "6 months - 2 years"
            },
            {
              level: "Nursery",
              description: "Foundation stage pupils",
              age: "2 - 5 years"
            },
            {
              level: "Primary",
              description: "Entry into lower and upper primary",
              age: "6 - 11 years"
            },
            {
              level: "Secondary",
              description: "Junior and senior secondary levels",
              age: "12 - 17 years"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px] p-6 text-center border border-divider-grey"
              style={{
                boxShadow:
                  "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)"
              }}
            >
              <h3 className="text-2xl font-playfair font-bold text-deep-navy mb-2">
                {item.level}
              </h3>
              <p className="text-sm text-royal-blue mb-3 font-medium">
                {item.age}
              </p>
              <p className="text-text-grey text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-text-grey italic bg-white p-4 rounded-lg border border-divider-grey">
            Placement is determined by age, previous academic exposure, and
            assessment performance.
          </p>
        </div>
      </SectionContainer>

      {/* ADMISSION PROCESS - Phase 4: 5-Step Visual Flow */}
      <SectionContainer background="white">
        <SectionHeader
          title="Our Admission Process"
          subtitle="A structured, transparent journey from enquiry to enrollment"
          centered
        />
        {/* Phase 4: 5-Step Horizontal/Vertical Flow */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Connection line (hidden on mobile) */}
            <div
              className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-divider-grey"
              style={{ width: "calc(100% - 80px)", marginLeft: "40px" }}
            ></div>

            {[
              {
                step: "1",
                title: "Enquiry",
                description:
                  "Parents contact the school via online enquiry form, phone, or visit.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                )
              },
              {
                step: "2",
                title: "Application",
                description:
                  "Purchase or collect admission form. Submit required documents.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                )
              },
              {
                step: "3",
                title: "Assessment",
                description:
                  "Academic assessment (age-appropriate). Informal interaction for younger pupils.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                )
              },
              {
                step: "4",
                title: "Interview (If Required)",
                description:
                  "Parent and pupil interaction. Alignment with school values.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                )
              },
              {
                step: "5",
                title: "Offer & Enrollment",
                description:
                  "Admission offer issued. Fee payment. Student onboarding.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                {/* Step number and icon */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 bg-heritage-brown rounded-full flex items-center justify-center mb-3 relative z-10">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <div className="w-10 h-10 bg-royal-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-playfair font-bold text-lg">
                      {item.step}
                    </span>
                  </div>
                </div>
                {/* Step content */}
                <div className="text-center">
                  <h3 className="font-playfair font-bold text-lg text-deep-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-grey text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-text-grey italic">
              This structure builds confidence and demonstrates our commitment
              to thoughtful student placement.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* ADMISSION REQUIREMENTS - Phase 4: Checklist UI */}
      <SectionContainer background="light">
        <SectionHeader title="Required Documents" centered />
        <div className="max-w-3xl mx-auto">
          <div
            className="bg-white rounded-[14px] p-8 md:p-10"
            style={{
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)"
            }}
          >
            <p className="text-text-grey mb-6 text-center">
              Please ensure all documents are ready before submitting your
              application.
            </p>
            <ul className="space-y-4">
              {[
                "Completed admission form",
                "Copy of birth certificate",
                "Previous school report (where applicable)",
                "Passport photographs (4 copies)",
                "Medical records and immunization card",
                "Parent/guardian valid identification"
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start p-4 bg-light-grey rounded-lg hover:bg-cream/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-royal-blue rounded-md flex items-center justify-center mr-4 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-deep-navy font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-royal-blue/10 rounded-lg border border-royal-blue/20">
              <p className="text-sm text-deep-navy">
                <strong>Note:</strong> Additional documents may be requested
                based on the specific entry level and circumstances.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Entry Levels */}
      <SectionContainer background="light">
        <SectionHeader title="Entry Levels & Requirements" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {[
            {
              level: "Creche & Nursery",
              ages: "6 months - 5 years",
              requirements: [
                "Birth certificate",
                "Immunization records",
                "Passport photographs (4 copies)",
                "Medical fitness certificate",
                "Parent/guardian valid ID"
              ]
            },
            {
              level: "Primary School",
              ages: "Primary 1 - Primary 6",
              requirements: [
                "Birth certificate",
                "Last school report (if applicable)",
                "Transfer certificate (if applicable)",
                "Immunization records",
                "Passport photographs (4 copies)",
                "Entrance assessment"
              ]
            },
            {
              level: "Secondary School",
              ages: "JSS1 - SS3",
              requirements: [
                "Birth certificate",
                "Common Entrance result (for JSS1)",
                "Last school report card",
                "Transfer certificate",
                "Passport photographs (4 copies)",
                "Entrance examination"
              ]
            },
            {
              level: "Mid-Year Entry",
              ages: "All levels",
              requirements: [
                "All standard documents",
                "Current school report",
                "Reason for transfer letter",
                "Assessment to determine placement",
                "Parent interview"
              ]
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-divider-grey hover:border-heritage-brown hover:shadow-xl transition-all duration-300 p-8 group"
            >
              <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-3">
                {item.level}
              </h3>
              <p className="text-sm text-royal-blue font-medium mb-4">
                {item.ages}
              </p>
              <h4 className="font-semibold text-deep-navy mb-3">
                Required Documents:
              </h4>
              <ul className="space-y-2">
                {item.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-heritage-brown mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-text-grey text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* ACADEMIC CALENDAR SNAPSHOT - Phase 4 */}
      <SectionContainer background="white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Academic Year" centered />
          <p className="text-center text-text-grey mb-10 max-w-2xl mx-auto leading-relaxed">
            Our academic year follows a structured term-based calendar in line
            with approved educational standards.
          </p>
          <div
            className="bg-white rounded-[14px] overflow-hidden"
            style={{
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)"
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-divider-grey">
              <div className="p-8 text-center">
                <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-3">
                  First Term
                </h3>
                <p className="text-text-grey mb-1">September - December</p>
                <p className="text-sm text-heritage-brown font-medium">
                  13 weeks
                </p>
              </div>
              <div className="p-8 text-center bg-light-grey">
                <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-3">
                  Second Term
                </h3>
                <p className="text-text-grey mb-1">January - April</p>
                <p className="text-sm text-heritage-brown font-medium">
                  12 weeks
                </p>
              </div>
              <div className="p-8 text-center">
                <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-3">
                  Third Term
                </h3>
                <p className="text-text-grey mb-1">April - July</p>
                <p className="text-sm text-heritage-brown font-medium">
                  11 weeks
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center p-4 bg-light-grey rounded-lg">
            <p className="text-sm text-deep-navy">
              <strong>Note:</strong> Exact dates can be found in the complete
              academic calendar. Admissions are accepted at the beginning of
              each term.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* STRONG CTA SECTION - Phase 4: Conversion Point */}
      <section className="bg-cream py-20 md:py-24" id="apply">
        <div className="container text-center">
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-playfair font-bold text-deep-navy mb-6 leading-tight">
            Begin Your Child&apos;s Journey at Skyheights Academy
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg text-text-grey mb-10 max-w-2xl mx-auto leading-relaxed">
            Our admissions team is available to guide you through every step of
            the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#enquiry" variant="primary" size="lg">
              Start Application
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Phase 4: Highly Recommended */}
      <SectionContainer background="white">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Short, reassuring answers to common concerns"
          centered
        />
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              question: "Do you offer all three curricula at every level?",
              answer:
                "We integrate elements of Nigerian, British, and Montessori approaches throughout our programs. The Montessori method is emphasized in early years (Creche and Nursery), while Primary and Secondary levels follow Nigerian curriculum with British educational standards."
            },
            {
              question: "Is there an entrance examination?",
              answer:
                "Yes, age-appropriate assessments are conducted for all applicants. For younger pupils (Creche and Nursery), we use informal interaction-based assessments. Primary and Secondary applicants undergo academic assessments in core subjects."
            },
            {
              question: "What is the age requirement for each level?",
              answer:
                "Creche: 6 months - 2 years; Nursery: 2 - 5 years; Primary: 6 - 11 years; Secondary: 12 - 17 years. Placement is ultimately determined by age, assessment performance, and previous academic exposure."
            },
            {
              question: "Are transfers from other schools accepted?",
              answer:
                "Yes, we welcome transfer students at all levels, subject to space availability and successful completion of our assessment process. Previous school reports are required for evaluation."
            },
            {
              question: "Is the school environment secure?",
              answer:
                "Absolutely. Our campus features 24-hour CCTV surveillance, trained security personnel, controlled access points, and comprehensive safety protocols. Student safety is our top priority."
            }
          ].map((faq, index) => (
            <details
              key={index}
              className="group bg-light-grey rounded-[10px] p-6 hover:bg-cream/50 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="font-playfair font-bold text-lg text-deep-navy pr-4">
                  {faq.question}
                </h3>
                <svg
                  className="w-6 h-6 text-heritage-brown group-open:rotate-180 transition-transform shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="text-text-grey mt-4 leading-relaxed text-sm">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </SectionContainer>

      {/* ENQUIRY FORM - Phase 4: Minimal fields, clear next steps */}
      <SectionContainer background="light" id="enquiry">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Submit Your Enquiry"
            subtitle="Our admissions team will respond within 24 hours with next steps and additional information"
            centered
          />
          <div
            className="bg-white rounded-[14px] p-8 md:p-12"
            style={{
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)"
            }}
          >
            <div className="mb-6 p-4 bg-royal-blue/10 rounded-lg border border-royal-blue/20">
              <p className="text-sm text-deep-navy">
                <strong>What happens next:</strong> After submission,
                you&apos;ll receive an automatic confirmation email, followed by
                a personal response from our admissions team within one business
                day.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </SectionContainer>

      {/* FINAL CTA - Phase 4: CTAs repeated every ~2 scroll lengths */}
      <SectionContainer background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-playfair font-bold text-deep-navy mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg text-text-grey mb-8 leading-relaxed">
            Our admissions team is here to guide you. Schedule a campus visit or
            speak with us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Schedule a Visit
            </Button>
            <Button href="tel:+234" variant="secondary" size="lg">
              Call Admissions Office
            </Button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

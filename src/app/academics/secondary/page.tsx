import SectionContainer from "../../../components/SectionContainer";
import SectionHeader from "../../../components/SectionHeader";
import Button from "../../../components/Button";
import Image from "next/image";
import {
  HiBookOpen,
  HiCalculator,
  HiBuildingLibrary,
  HiComputerDesktop
} from "react-icons/hi2";

export const metadata = {
  title: "Secondary School in Lugbe Abuja | Skyheights Academy",
  description:
    "Secondary School in Lugbe, Abuja for ages 12-17. WAEC/NECO preparation, Science, Commercial, and Arts tracks. Secure learning environment."
};

export default function SecondaryPage() {
  return (
    <>
      {/* SECONDARY HERO - Phase 5: Prove academic depth & future readiness */}
      <section className="relative bg-heritage-brown text-white py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/pics/14935.jpg"
            alt="Skyheights Academy Secondary School"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container relative z-10">
          <div className="inline-block px-4 py-2 bg-cream/20 rounded-full mb-4">
            <span className="text-cream text-sm font-medium">
              Ages 12 - 17 years (JSS1 - SS3)
            </span>
          </div>
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            Secondary School Programme
          </h1>
          <p className="text-lg md:text-xl text-cream/95 max-w-4xl leading-relaxed">
            Our Secondary School programme prepares students for higher
            education and future careers through rigorous academics, discipline,
            and character development.
          </p>
        </div>
      </section>

      {/* CORE SUBJECTS - Academic tracks */}
      <SectionContainer background="white">
        <SectionHeader
          title="Core Subjects & Academic Tracks"
          subtitle="Students choose specialization tracks based on interests and career goals"
        />
        <div className="max-w-5xl">
          {/* Core subjects for all students */}
          <div className="mb-10">
            <h3 className="text-xl font-playfair font-bold text-deep-navy mb-4">
              Core Subjects (All Students)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { subject: "English Language", icon: HiBookOpen },
                { subject: "Mathematics", icon: HiCalculator },
                { subject: "Civic Education", icon: HiBuildingLibrary },
                { subject: "Computer Studies", icon: HiComputerDesktop }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-light-grey rounded-[10px] p-4 text-center"
                  >
                    <div className="w-10 h-10 mx-auto mb-2 text-heritage-brown flex items-center justify-center">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <p className="text-sm font-semibold text-deep-navy">
                      {item.subject}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic Tracks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                track: "Science Track",
                subjects: [
                  "Physics",
                  "Chemistry",
                  "Biology",
                  "Further Mathematics",
                  "Computer Science"
                ],
                career:
                  "Prepares for: Medicine, Engineering, Computer Science, Sciences",
                color: "royal-blue"
              },
              {
                track: "Commercial Track",
                subjects: [
                  "Economics",
                  "Accounting",
                  "Commerce",
                  "Business Studies",
                  "Financial Accounting"
                ],
                career:
                  "Prepares for: Business, Accounting, Economics, Management",
                color: "heritage-brown"
              },
              {
                track: "Arts Track",
                subjects: [
                  "Literature in English",
                  "Government",
                  "History",
                  "CRS/IRS",
                  "Geography"
                ],
                career:
                  "Prepares for: Law, Humanities, Social Sciences, Education",
                color: "royal-blue"
              }
            ].map((track, index) => (
              <div
                key={index}
                className="bg-white rounded-[14px] p-6 border-2 border-divider-grey hover:border-heritage-brown transition-colors"
                style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
              >
                <h4 className="font-playfair font-bold text-xl text-deep-navy mb-4">
                  {track.track}
                </h4>
                <ul className="space-y-2 mb-4">
                  {track.subjects.map((subject, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-text-grey"
                    >
                      <svg
                        className="w-4 h-4 text-royal-blue mr-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {subject}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-divider-grey pt-3">
                  <p className="text-xs text-heritage-brown font-semibold">
                    {track.career}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* CURRICULUM */}
      <SectionContainer background="light">
        <SectionHeader title="Examination Preparation" />
        <div className=" flex justify-center flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div
              className="bg-white rounded-[10px] p-6"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
            >
              <h4 className="font-playfair font-bold text-lg text-deep-navy mb-3">
                Nigerian Curriculum Alignment
              </h4>
              <p className="text-text-grey text-sm mb-4 leading-relaxed">
                Complete coverage of WAEC and NECO syllabi with structured
                revision programmes and mock examinations.
              </p>
              <ul className="space-y-1">
                {[
                  "WAEC preparation",
                  "NECO preparation",
                  "JAMB readiness",
                  "Mock examinations"
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-text-grey flex items-center"
                  >
                    <svg
                      className="w-3 h-3 text-royal-blue mr-2 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bg-white rounded-[10px] p-6"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
            >
              <h4 className="font-playfair font-bold text-lg text-deep-navy mb-3">
                British Standards Integration
              </h4>
              <p className="text-text-grey text-sm mb-4 leading-relaxed">
                Teaching methods inspired by Cambridge approaches, emphasizing
                deep understanding and analytical skills.
              </p>
              <ul className="space-y-1">
                {[
                  "Critical analysis",
                  "Research methods",
                  "Essay writing",
                  "Problem-solving"
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-text-grey flex items-center"
                  >
                    <svg
                      className="w-3 h-3 text-royal-blue mr-2 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-royal-blue/10 rounded-[10px] p-6 text-center">
            <p className="text-deep-navy font-semibold">
              Exam-Focused Preparation: Our teachers are experienced in
              preparing students for success in WAEC, NECO, and JAMB
              examinations through targeted instruction and regular practice.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* STUDENT OUTCOMES */}
      <SectionContainer background="white">
        <SectionHeader
          title="Student Outcomes"
          subtitle="Measurable results and future readiness"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              outcome: "Strong Academic Results",
              description:
                "Consistently high performance in WAEC and NECO examinations with excellent distinction rates.",
              stat: "100%",
              label: "Pass Rate"
            },
            {
              outcome: "Leadership Development",
              description:
                "Prefect system, student council, and leadership training programs develop confident future leaders.",
              stat: "50+",
              label: "Student Leaders"
            },
            {
              outcome: "Career Awareness",
              description:
                "Career guidance, university counseling, and exposure to various professions prepare students for informed decisions.",
              stat: "100%",
              label: "University Placement"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-light-grey rounded-[14px] p-8 text-center"
            >
              <div className="text-4xl font-playfair font-bold text-heritage-brown mb-2">
                {item.stat}
              </div>
              <h4 className="font-playfair font-bold text-lg text-deep-navy mb-3">
                {item.outcome}
              </h4>
              <p className="text-text-grey text-sm leading-relaxed">
                {item.description}
              </p>
              <p className="text-xs text-royal-blue mt-3 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA - Phase 5: Repeated CTA */}
      <SectionContainer background="light">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] font-playfair font-bold text-deep-navy mb-6 leading-tight">
            Prepare for University Success
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg text-text-grey mb-8 leading-relaxed">
            Enroll in our Secondary School programme for rigorous academic
            preparation and character development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/admissions" variant="primary" size="lg">
              Apply for Admission
            </Button>
            <Button href="/academics" variant="secondary" size="lg">
              View All Programmes
            </Button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

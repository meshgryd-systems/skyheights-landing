import SectionContainer from "../../../components/SectionContainer";
import SectionHeader from "../../../components/SectionHeader";
import Button from "../../../components/Button";
import Curriculum from "../../../components/Curriculum";
import {
  HiBookOpen,
  HiCalculator,
  HiBeaker,
  HiGlobeAlt,
  HiComputerDesktop,
  HiPaintBrush,
  HiChatBubbleLeftRight,
  HiChartBar,
  HiAcademicCap,
  HiBookmark,
  HiHome,
  HiSparkles
} from "react-icons/hi2";

export const metadata = {
  title: "Primary School in Lugbe Abuja | Skyheights Academy",
  description:
    "Quality Primary School in Lugbe, Abuja for ages 6-11. Nigerian and British curriculum, strong academic foundation, and character development."
};

export default function PrimaryPage() {
  return (
    <>
      {/* PRIMARY HERO - Phase 5: Establish academic seriousness */}
      <section className="bg-deep-navy text-white py-20 md:py-28">
        <div className="container">
          <div className="inline-block px-4 py-2 bg-heritage-brown/30 rounded-full mb-4">
            <span className="text-cream text-sm font-medium">
              Ages 6 - 11 years (Primary 1-6)
            </span>
          </div>
          <div className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            Primary School Programme
          </div>
          <p className="text-lg md:text-xl text-cream/95 max-w-4xl leading-relaxed">
            The Primary School programme at Skyheights Academy lays a strong
            academic foundation, equipping pupils with critical thinking skills,
            discipline, and a love for learning.
          </p>
        </div>
      </section>

      {/* CORE SUBJECTS - Phase 5: Academic seriousness */}
      <SectionContainer background="white">
        <SectionHeader
          title="Core Subjects"
          subtitle="A comprehensive curriculum covering all essential academic areas"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { subject: "English Language", icon: HiBookOpen },
            { subject: "Mathematics", icon: HiCalculator },
            { subject: "Basic Science & Technology", icon: HiBeaker },
            { subject: "Social Studies", icon: HiGlobeAlt },
            { subject: "ICT (Computer Studies)", icon: HiComputerDesktop },
            { subject: "Creative Arts", icon: HiPaintBrush },
            { subject: "Verbal Reasoning", icon: HiChatBubbleLeftRight },
            { subject: "Quantitative Reasoning", icon: HiChartBar },
            { subject: "Physical Education", icon: HiAcademicCap },
            { subject: "Religious Studies", icon: HiBookmark },
            { subject: "Home Economics", icon: HiHome },
            { subject: "Agricultural Science", icon: HiSparkles }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-light-grey rounded-[10px] p-4 text-center hover:bg-cream/50 transition-colors"
              >
                <div className="w-10 h-10 mx-auto mb-2 text-heritage-brown flex items-center justify-center">
                  <IconComponent className="w-10 h-10" />
                </div>
                <p className="text-sm font-medium text-deep-navy">
                  {item.subject}
                </p>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* CURRICULUM BLEND */}
      <SectionContainer background="light">
        <SectionHeader title="Curriculum Framework" />
        <Curriculum />
      </SectionContainer>

      {/* STUDENT DEVELOPMENT */}
      <SectionContainer background="white">
        <SectionHeader
          title="Student Development"
          subtitle="Beyond academics, we nurture character and values"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {[
            {
              focus: "Academic Excellence",
              description:
                "Rigorous instruction in core subjects with emphasis on understanding, not just memorization.",
              outcomes: [
                "Strong literacy",
                "Mathematical proficiency",
                "Scientific curiosity",
                "Critical thinking"
              ]
            },
            {
              focus: "Moral Instruction",
              description:
                "Character education integrated into daily lessons, teaching integrity, respect, and responsibility.",
              outcomes: [
                "Good citizenship",
                "Ethical behavior",
                "Respect for others",
                "Personal responsibility"
              ]
            },
            {
              focus: "Co-Curricular Activities",
              description:
                "Sports, arts, clubs, and enrichment programs develop well-rounded, confident individuals.",
              outcomes: [
                "Teamwork skills",
                "Leadership qualities",
                "Physical fitness",
                "Creative expression"
              ]
            }
          ].map((area, index) => (
            <div key={index} className="bg-light-grey rounded-[10px] p-6">
              <h4 className="font-playfair text-start font-bold text-lg text-deep-navy mb-3 text-center">
                {area.focus}
              </h4>
              <p className="text-text-grey text-sm mb-4 leading-relaxed">
                {area.description}
              </p>
              <ul className="space-y-1">
                {area.outcomes.map((outcome, idx) => (
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
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* LEARNING OUTCOMES */}
      <SectionContainer background="light">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader title="Programme Outcomes" centered />
          <div
            className="bg-white rounded-[14px] p-8 md:p-10"
            style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
          >
            <p className="text-lg text-deep-navy leading-relaxed mb-6">
              Upon completion of our Primary School programme, students
              demonstrate:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                "Strong foundation in literacy and numeracy",
                "Critical and analytical thinking abilities",
                "Effective communication skills (oral and written)",
                "Problem-solving and reasoning capabilities",
                "Sound moral character and discipline",
                "Readiness for secondary-level academic rigour"
              ].map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 bg-light-grey rounded-lg"
                >
                  <svg
                    className="w-5 h-5 text-royal-blue mr-3 shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-deep-navy text-sm font-medium">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* CTA - Phase 5: Repeated CTA */}
      <SectionContainer background="white">
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-[2.5rem] font-playfair font-bold text-deep-navy mb-6 leading-tight">
            Enroll in Our Primary Programme
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg text-text-greytext-center mb-8 leading-relaxed">
            Give your child the strong academic foundation they need for future
            success.
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

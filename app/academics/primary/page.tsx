import SectionContainer from "../../../components/SectionContainer";
import SectionHeader from "../../../components/SectionHeader";
import Button from "../../../components/Button";

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
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="inline-block px-4 py-2 bg-heritage-brown/30 rounded-full mb-4">
            <span className="text-cream text-sm font-medium">
              Ages 6 - 11 years (Primary 1-6)
            </span>
          </div>
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            Primary School Programme
          </h1>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl">
          {[
            { subject: "English Language", icon: "📖" },
            { subject: "Mathematics", icon: "🔢" },
            { subject: "Basic Science & Technology", icon: "🔬" },
            { subject: "Social Studies", icon: "🌍" },
            { subject: "ICT (Computer Studies)", icon: "💻" },
            { subject: "Creative Arts", icon: "🎨" },
            { subject: "Verbal Reasoning", icon: "🗣️" },
            { subject: "Quantitative Reasoning", icon: "🧮" },
            { subject: "Physical Education", icon: "⚽" },
            { subject: "Religious Studies", icon: "📚" },
            { subject: "Home Economics", icon: "🍽️" },
            { subject: "Agricultural Science", icon: "🌱" }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-light-grey rounded-[10px] p-4 text-center hover:bg-cream/50 transition-colors"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-sm font-medium text-deep-navy">
                {item.subject}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CURRICULUM BLEND */}
      <SectionContainer background="light">
        <SectionHeader title="Curriculum Framework" />
        <div className="max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div
              className="bg-white rounded-[10px] p-6"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
            >
              <div className="w-14 h-14 bg-heritage-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🇳🇬</span>
              </div>
              <h4 className="font-playfair font-bold text-lg text-deep-navy mb-3 text-center">
                Nigerian Curriculum
              </h4>
              <p className="text-text-grey text-sm text-center">
                Full alignment with NERDC standards and Nigerian National
                Curriculum for all core subjects.
              </p>
            </div>
            <div
              className="bg-white rounded-[10px] p-6"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
            >
              <div className="w-14 h-14 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🇬🇧</span>
              </div>
              <h4 className="font-playfair font-bold text-lg text-deep-navy mb-3 text-center">
                British Curriculum
              </h4>
              <p className="text-text-grey text-sm text-center">
                Cambridge-inspired teaching methods emphasizing critical
                thinking and analytical skills.
              </p>
            </div>
            <div
              className="bg-white rounded-[10px] p-6"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
            >
              <div className="w-14 h-14 bg-heritage-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h4 className="font-playfair font-bold text-lg text-deep-navy mb-3 text-center">
                Continuous Assessment
              </h4>
              <p className="text-text-grey text-sm text-center">
                Regular evaluations track progress and identify areas for
                improvement and support.
              </p>
            </div>
          </div>
          <div className="bg-heritage-brown/10 rounded-[10px] p-6 border-l-4 border-heritage-brown">
            <p className="text-deep-navy text-sm leading-relaxed">
              <strong>Curriculum Integration:</strong> Our blended approach
              ensures students meet Nigerian educational standards while
              developing the analytical thinking and problem-solving skills
              emphasized in British education. This prepares them for both local
              and international academic success.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* STUDENT DEVELOPMENT */}
      <SectionContainer background="white">
        <SectionHeader
          title="Student Development"
          subtitle="Beyond academics, we nurture character and values"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
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
              <h4 className="font-playfair font-bold text-lg text-deep-navy mb-3 text-center">
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
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] font-playfair font-bold text-deep-navy mb-6 leading-tight">
            Enroll in Our Primary Programme
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg text-text-grey mb-8 leading-relaxed">
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

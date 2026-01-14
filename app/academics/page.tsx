import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
import Link from "next/link";

export const metadata = {
  title: "Academics | Creche, Nursery, Primary & Secondary School in Lugbe",
  description:
    "Explore the academic programmes at Skyheights Academy including Creche, Nursery, Primary and Secondary education in Lugbe, Abuja."
};

export default function AcademicsPage() {
  return (
    <>
      {/* ACADEMICS LANDING PAGE HERO - Phase 5: Methodical, calm, authoritative */}
      <section className="bg-heritage-brown text-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            Our Academic Programmes
          </h1>
          <p className="text-lg md:text-xl text-cream/95 max-w-4xl leading-relaxed">
            Skyheights Academy offers a comprehensive academic structure from
            early childhood through secondary education, combining Nigerian,
            British, and Montessori curricula to develop confident, capable, and
            well-rounded learners.
          </p>
        </div>
      </section>

      {/* QUICK ACCESS TILES - Phase 5: Overview before diving into levels */}
      <SectionContainer background="white">
        <SectionHeader
          title="Academic Levels"
          subtitle="Select a programme to learn more about curriculum, teaching approach, and learning outcomes"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              level: "Creche",
              focus:
                "Safe, nurturing environment with early sensory development",
              icon: (
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ),
              href: "/academics/creche",
              ages: "6 months - 2 years"
            },
            {
              level: "Nursery",
              focus:
                "Montessori-inspired foundations for literacy and numeracy",
              icon: (
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              href: "/academics/nursery",
              ages: "2 - 5 years"
            },
            {
              level: "Primary",
              focus: "Strong academic foundation with critical thinking skills",
              icon: (
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              ),
              href: "/academics/primary",
              ages: "6 - 11 years"
            },
            {
              level: "Secondary",
              focus:
                "Rigorous preparation for examinations and higher education",
              icon: (
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              ),
              href: "/academics/secondary",
              ages: "12 - 17 years"
            }
          ].map((program, index) => (
            <Link key={index} href={program.href}>
              <div
                className="bg-white rounded-[14px] border-2 border-divider-grey hover:border-heritage-brown transition-all duration-300 p-8 text-center h-full group"
                style={{
                  boxShadow:
                    "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)"
                }}
              >
                <div className="w-20 h-20 bg-heritage-brown/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-heritage-brown transition-colors">
                  <div className="text-heritage-brown group-hover:text-white transition-colors">
                    {program.icon}
                  </div>
                </div>
                <h3 className="text-2xl md:text-[28px] font-playfair font-bold text-deep-navy mb-2">
                  {program.level}
                </h3>
                <p className="text-sm text-royal-blue font-medium mb-4">
                  {program.ages}
                </p>
                <p className="text-text-grey text-sm mb-6 leading-relaxed">
                  {program.focus}
                </p>
                <div className="text-heritage-brown font-medium text-sm flex items-center justify-center group-hover:text-heritage-brown">
                  View Programme
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionContainer>

      {/* CURRICULUM INTEGRATION - Phase 5: Intellectual credibility */}
      <SectionContainer background="light">
        <SectionHeader
          title="Our Curriculum Approach"
          subtitle="A thoughtfully integrated blend of proven educational frameworks"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              system: "Nigerian Curriculum",
              flag: "🇳🇬",
              benefit: "Local Academic Strength",
              description:
                "Full alignment with NERDC standards ensures students excel in national examinations and understand their cultural context.",
              outcomes: [
                "WAEC/NECO excellence",
                "Common Entrance success",
                "National competitiveness"
              ]
            },
            {
              system: "British Curriculum",
              flag: "🇬🇧",
              benefit: "Global Standards",
              description:
                "Cambridge-inspired methods emphasize critical thinking, inquiry-based learning, and international perspectives.",
              outcomes: [
                "Analytical thinking",
                "Research skills",
                "Global awareness"
              ]
            },
            {
              system: "Montessori Principles",
              flag: "🎨",
              benefit: "Independent Thinking",
              description:
                "Child-centered approach in early years promotes self-directed learning, practical life skills, and intrinsic motivation.",
              outcomes: [
                "Self-confidence",
                "Problem-solving",
                "Love for learning"
              ]
            }
          ].map((curriculum, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px] p-8"
              style={{
                boxShadow:
                  "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)"
              }}
            >
              <div className="text-5xl text-center mb-4">{curriculum.flag}</div>
              <h3 className="text-xl font-playfair font-bold text-deep-navy mb-2 text-center">
                {curriculum.system}
              </h3>
              <p className="text-heritage-brown text-sm font-semibold mb-4 text-center">
                {curriculum.benefit}
              </p>
              <p className="text-text-grey text-sm mb-4 leading-relaxed">
                {curriculum.description}
              </p>
              <div className="border-t border-divider-grey pt-4 mt-4">
                <p className="text-xs font-semibold text-deep-navy mb-2">
                  Key Outcomes:
                </p>
                <ul className="space-y-1">
                  {curriculum.outcomes.map((outcome, idx) => (
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
            </div>
          ))}
        </div>
        <div
          className="mt-12 max-w-3xl mx-auto text-center p-6 bg-white rounded-[14px]"
          style={{
            boxShadow:
              "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)"
          }}
        >
          <p className="text-deep-navy leading-relaxed">
            This integrated approach ensures our students are{" "}
            <strong>academically competitive</strong>,
            <strong> globally aware</strong>, and{" "}
            <strong>independently capable</strong> — prepared not just for
            examinations, but for lifelong success.
          </p>
        </div>
      </SectionContainer>

      {/* CTA SECTION - Phase 5: Repeated CTA */}
      <SectionContainer background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-playfair font-bold text-deep-navy mb-6 leading-tight">
            Enroll in Our Academic Programmes
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg text-text-grey mb-8 leading-relaxed">
            Give your child the foundation for lifelong academic success and
            personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/admissions" variant="primary" size="lg">
              Apply for Admission
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

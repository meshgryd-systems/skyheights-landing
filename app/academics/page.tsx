import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
import Link from "next/link";
import { HiShieldCheck, HiGlobeAlt, HiSparkles } from "react-icons/hi2";

export const metadata = {
  title: "Academics | Creche, Nursery, Primary & Secondary School in Lugbe",
  description:
    "Explore the academic programmes at Skyheights Academy including Creche, Nursery, Primary and Secondary education in Lugbe, Abuja."
};

export default function AcademicsPage() {
  return (
    <>
      {/* ACADEMICS LANDING PAGE HERO - Phase 5: Methodical, calm, authoritative */}
      <section className="bg-[#eee5b5] text-white py-20 md:py-28">
        <div className="container">
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            Our Academic Programmes
          </h1>
          <p className="text-lg font-light md:text-xl text-cream/95 max-w-4xl leading-relaxed">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container">
          {[
            {
              level: "Creche",
              ages: "6 months - 2 years",
              description:
                "Our Creche programme provides a warm, secure, and nurturing environment where children take their first steps into structured learning through guided play and care. With small class sizes, trained caregivers, and 24-hour CCTV monitoring, we ensure your child receives individualized attention in a safe, stimulating setting that supports early motor skills, social interaction, and emotional development.",
              href: "/academics/creche"
            },
            {
              level: "Nursery",
              ages: "2 - 5 years",
              description:
                "Our Nursery programme introduces foundational academic skills while nurturing curiosity, creativity, and confidence in young learners. Through Montessori principles combined with Nigerian and British early learning standards, children develop early literacy, numeracy, phonics, and social skills. By the end of the programme, pupils demonstrate readiness for formal primary education with a genuine love for learning.",
              href: "/academics/nursery"
            },
            {
              level: "Primary",
              ages: "6 - 11 years",
              description:
                "The Primary School programme at Skyheights Academy lays a strong academic foundation, equipping pupils with critical thinking skills, discipline, and a love for learning. Our blended Nigerian and British curriculum covers core subjects including English, Mathematics, Science, Social Studies, and ICT, while continuous assessment ensures ongoing progress. Students develop not only academic excellence but also moral character and co-curricular engagement.",
              href: "/academics/primary"
            },
            {
              level: "Secondary",
              ages: "12 - 17 years",
              description:
                "Our Secondary School programme prepares students for higher education and future careers through rigorous academics, discipline, and character development. Students choose from Science, Commercial, or Arts tracks while receiving comprehensive WAEC and NECO preparation. With a 98% pass rate and 100% university placement record, we ensure students are ready for both examinations and life beyond school.",
              href: "/academics/secondary"
            }
          ].map((program, index) => (
            <Link key={index} href={program.href}>
              <div
                className="bg-white rounded-[14px] border-2 border-divider-grey hover:border-heritage-brown transition-all duration-300 p-8 h-full group"
                style={{
                  boxShadow:
                    "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)"
                }}
              >
                <h3 className="text-2xl md:text-[28px] font-playfair font-bold text-deep-navy mb-3">
                  {program.level}
                </h3>
                <p className="text-sm text-royal-blue font-medium mb-4">
                  {program.ages}
                </p>
                <p className="text-text-grey text-sm mb-6 leading-relaxed">
                  {program.description}
                </p>
                <div className="text-heritage-brown font-medium text-sm flex items-center group-hover:text-heritage-brown">
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
              icon: HiShieldCheck,
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
              icon: HiGlobeAlt,
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
              icon: HiSparkles,
              benefit: "Independent Thinking",
              description:
                "Child-centered approach in early years promotes self-directed learning, practical life skills, and intrinsic motivation.",
              outcomes: [
                "Self-confidence",
                "Problem-solving",
                "Love for learning"
              ]
            }
          ].map((curriculum, index) => {
            const IconComponent = curriculum.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[14px] p-8"
                style={{
                  boxShadow:
                    "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)"
                }}
              >
                <div className="w-16 h-16 bg-heritage-brown/10 rounded-full flex items-center justify-center mx-auto mb-4 text-heritage-brown">
                  <IconComponent className="w-12 h-12" />
                </div>
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
            );
          })}
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

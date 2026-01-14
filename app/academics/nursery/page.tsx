import SectionContainer from "../../../components/SectionContainer";
import SectionHeader from "../../../components/SectionHeader";
import Button from "../../../components/Button";

export const metadata = {
  title: "Nursery School in Lugbe Abuja | Skyheights Academy",
  description:
    "Montessori-inspired Nursery school in Lugbe, Abuja for ages 2-5. Foundational literacy, numeracy, and character development in a secure environment."
};

export default function NurseryPage() {
  return (
    <>
      {/* NURSERY HERO - Phase 5: Show structure + gentle academics */}
      <section className="bg-royal-blue text-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-4">
            <span className="text-white text-sm font-medium">
              Ages 2 - 5 years
            </span>
          </div>
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            Nursery Programme
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-4xl leading-relaxed">
            Our Nursery programme introduces foundational academic skills while
            nurturing curiosity, creativity, and confidence in young learners.
          </p>
        </div>
      </section>

      {/* LEARNING AREAS */}
      <SectionContainer background="white">
        <SectionHeader
          title="Learning Areas"
          subtitle="Building essential skills through structured, engaging activities"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {[
            {
              area: "Early Literacy and Numeracy",
              description:
                "Introduction to letters, sounds, numbers, and basic counting through multi-sensory activities and Montessori materials.",
              skills: [
                "Letter recognition",
                "Phonemic awareness",
                "Number concepts",
                "Counting skills"
              ]
            },
            {
              area: "Phonics and Language Development",
              description:
                "Systematic phonics instruction builds reading readiness while rich language experiences expand vocabulary and communication skills.",
              skills: [
                "Sound-letter relationships",
                "Vocabulary building",
                "Listening skills",
                "Oral expression"
              ]
            },
            {
              area: "Creative Arts",
              description:
                "Art, music, and creative expression foster imagination, fine motor skills, and emotional development.",
              skills: [
                "Painting & drawing",
                "Music & movement",
                "Dramatic play",
                "Crafts & construction"
              ]
            },
            {
              area: "Social Skills",
              description:
                "Group activities, sharing experiences, and guided interactions teach cooperation, empathy, and positive peer relationships.",
              skills: [
                "Sharing & turn-taking",
                "Emotional regulation",
                "Conflict resolution",
                "Friendship building"
              ]
            }
          ].map((area, index) => (
            <div key={index} className="bg-light-grey rounded-[10px] p-6">
              <h3 className="text-xl font-playfair font-bold text-deep-navy mb-3">
                {area.area}
              </h3>
              <p className="text-text-grey text-sm mb-4 leading-relaxed">
                {area.description}
              </p>
              <div className="border-t border-divider-grey pt-4">
                <p className="text-xs font-semibold text-deep-navy mb-2">
                  Skills Developed:
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {area.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-xs text-text-grey"
                    >
                      <svg
                        className="w-3 h-3 text-royal-blue mr-2 shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CURRICULUM */}
      <SectionContainer background="light">
        <SectionHeader title="Curriculum Framework" />
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div
              className="bg-white p-6 rounded-[10px] text-center"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
            >
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-playfair font-bold text-deep-navy mb-2">
                Montessori Principles
              </h4>
              <p className="text-text-grey text-sm">
                Child-centered, hands-on learning at individual pace
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-[10px] text-center"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
            >
              <div className="text-4xl mb-3">🇳🇬</div>
              <h4 className="font-playfair font-bold text-deep-navy mb-2">
                Nigerian Early Years Framework
              </h4>
              <p className="text-text-grey text-sm">
                Alignment with national early childhood standards
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-[10px] text-center"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
            >
              <div className="text-4xl mb-3">🇬🇧</div>
              <h4 className="font-playfair font-bold text-deep-navy mb-2">
                British Early Learning Standards
              </h4>
              <p className="text-text-grey text-sm">
                Foundation stage goals for comprehensive development
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* OUTCOME */}
      <SectionContainer background="white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader title="Learning Outcome" centered />
          <div className="bg-light-grey rounded-[14px] p-8 md:p-10">
            <p className="text-xl font-playfair text-deep-navy mb-4 leading-relaxed">
              "Pupils develop readiness for formal primary education."
            </p>
            <p className="text-text-grey leading-relaxed">
              By the end of the Nursery programme, children demonstrate
              age-appropriate literacy and numeracy skills, social confidence,
              emotional maturity, and a genuine love for learning. They
              transition smoothly into Primary 1 with the skills and mindset
              needed for academic success.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* CTA - Phase 5: Repeated CTA */}
      <SectionContainer background="light">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] font-playfair font-bold text-deep-navy mb-6 leading-tight">
            Enroll in Our Nursery Programme
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg text-text-grey mb-8 leading-relaxed">
            Build a strong foundation for your child's academic journey with our
            Montessori-inspired approach.
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

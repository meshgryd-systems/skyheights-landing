import SectionContainer from "../../../components/SectionContainer";
import SectionHeader from "../../../components/SectionHeader";
import Button from "../../../components/Button";

export const metadata = {
  title: "Creche School in Lugbe Abuja | Skyheights Academy",
  description:
    "Quality Creche programme in Lugbe, Abuja for children aged 6 months to 2 years. Secure, nurturing environment with 24-hour CCTV surveillance."
};

export default function CrechePage() {
  return (
    <>
      {/* CRECHE HERO - Phase 5: Reassure parents of care, safety, early development */}
      <section className="bg-heritage-brown text-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="inline-block px-4 py-2 bg-cream/20 rounded-full mb-4">
            <span className="text-cream text-sm font-medium">
              Ages 6 months - 2 years
            </span>
          </div>
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            Creche Programme
          </h1>
          <p className="text-lg md:text-xl text-cream/95 max-w-4xl leading-relaxed">
            Our Creche programme provides a warm, secure, and nurturing
            environment where children take their first steps into structured
            learning through guided play and care.
          </p>
        </div>
      </section>

      {/* KEY FOCUS AREAS */}
      <SectionContainer background="white">
        <SectionHeader title="Key Focus Areas" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {[
            {
              title: "Safe and Stimulating Environment",
              description:
                "Our Creche facilities are designed with safety as the primary concern. All areas are CCTV-monitored, childproofed, and maintained to the highest hygiene standards.",
              icon: (
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              )
            },
            {
              title: "Social Interaction and Emotional Development",
              description:
                "Through guided group activities and individual attention, children develop early social skills, emotional regulation, and confidence.",
              icon: (
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              )
            },
            {
              title: "Early Motor Skills",
              description:
                "Age-appropriate activities promote both fine and gross motor development through play, exploration, and structured movement exercises.",
              icon: (
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              )
            },
            {
              title: "Routine and Care",
              description:
                "Structured daily routines provide security and predictability, including feeding times, nap schedules, and age-appropriate learning activities.",
              icon: (
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )
            }
          ].map((focus, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-light-grey rounded-[10px]"
            >
              <div className="shrink-0 text-royal-blue">{focus.icon}</div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-deep-navy mb-2">
                  {focus.title}
                </h3>
                <p className="text-text-grey text-sm leading-relaxed">
                  {focus.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CURRICULUM APPROACH */}
      <SectionContainer background="light">
        <SectionHeader title="Curriculum Approach" />
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                approach: "Montessori-Inspired Early Learning",
                description: "Child-led exploration with adult guidance"
              },
              {
                approach: "Play-Based Activities",
                description: "Learning through structured play and discovery"
              },
              {
                approach: "Sensory Development",
                description: "Stimulating all five senses for cognitive growth"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-[10px] text-center"
                style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
              >
                <h4 className="font-playfair font-bold text-deep-navy mb-2">
                  {item.approach}
                </h4>
                <p className="text-text-grey text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-text-grey leading-relaxed">
            Our Creche curriculum follows Montessori principles adapted for the
            youngest learners. Every activity is designed to support natural
            development milestones while providing a foundation for future
            learning.
          </p>
        </div>
      </SectionContainer>

      {/* CLASS ENVIRONMENT */}
      <SectionContainer background="white">
        <SectionHeader title="Class Environment" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {[
            {
              feature: "Small Class Sizes",
              detail:
                "Maximum 8-10 children per caregiver ensuring individualized attention and care."
            },
            {
              feature: "Caring, Trained Caregivers",
              description:
                "All staff are certified in early childhood care with continuous professional development."
            },
            {
              feature: "24-Hour CCTV Monitoring",
              detail:
                "Complete coverage of all Creche areas for safety, security, and parent peace of mind."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-light-grey p-6 rounded-[10px] text-center"
            >
              <h4 className="font-playfair font-bold text-lg text-deep-navy mb-3">
                {item.feature}
              </h4>
              <p className="text-text-grey text-sm leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-3xl mx-auto p-6 bg-heritage-brown/10 rounded-[10px] border-l-4 border-heritage-brown">
          <div className="flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-heritage-brown shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0110 1.944 11.954 11.954 0 0117.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h4 className="font-playfair font-bold text-deep-navy mb-2">
                Parent Communication
              </h4>
              <p className="text-text-grey text-sm leading-relaxed">
                We maintain daily communication with parents through updates on
                feeding, sleeping, activities, and developmental milestones.
                Regular parent-caregiver conferences ensure collaborative
                support for each child's growth.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* CTA - Phase 5: Repeated CTA */}
      <SectionContainer background="light">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] font-playfair font-bold text-deep-navy mb-6 leading-tight">
            Enroll in Our Creche Programme
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg text-text-grey mb-8 leading-relaxed">
            Give your child a secure, nurturing start to their educational
            journey.
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

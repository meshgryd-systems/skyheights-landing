import SectionContainer from "../../../components/SectionContainer";
import SectionHeader from "../../../components/SectionHeader";
import Button from "../../../components/Button";
import Image from "next/image";

export const metadata = {
  title: "Creche School in Lugbe Abuja | Skyheights Academy",
  description:
    "Quality Creche programme in Lugbe, Abuja for children aged 6 months to 2 years. Secure, nurturing environment with 24-hour CCTV surveillance."
};

export default function CrechePage() {
  return (
    <>
      {/* CRECHE HERO - Phase 5: Reassure parents of care, safety, early development */}
      <section className="relative bg-heritage-brown text-white py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/pics/14920.jpg"
            alt="Skyheights Academy Creche"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container relative z-10">
          <div className="inline-block px-4 py-2 bg-cream/20 rounded-full mb-4">
            <span className="text-cream text-sm font-medium">
              Ages 6 months - 2 years
            </span>
          </div>
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            Creche Programme
          </h1>
          <p className="text-lg font-light md:text-xl text-cream/95 max-w-4xl leading-relaxed">
            Our Creche programme provides a warm, secure, and nurturing
            environment where children take their first steps into structured
            learning through guided play and care.
          </p>
        </div>
      </section>

      {/* KEY FOCUS AREAS */}
      <SectionContainer background="white" className="max-w-6xl mx-auto">
        <SectionHeader title="Key Focus Areas" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {[
            {
              title: "Safe and Stimulating Environment",
              description:
                "Our Creche facilities are designed with safety as the primary concern. All areas are CCTV-monitored, childproofed, and maintained to the highest hygiene standards."
            },
            {
              title: "Social Interaction and Emotional Development",
              description:
                "Through guided group activities and individual attention, children develop early social skills, emotional regulation, and confidence."
            },
            {
              title: "Early Motor Skills",
              description:
                "Age-appropriate activities promote both fine and gross motor development through play, exploration, and structured movement exercises."
            },
            {
              title: "Routine and Care",
              description:
                "Structured daily routines provide security and predictability, including feeding times, nap schedules, and age-appropriate learning activities."
            }
          ].map((focus, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-light-grey rounded-[10px]"
            >
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
        <div className="max-w-4xl mx-auto">
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
                <h4 className="font-playfair font-bold text-deep-navy text-start mb-2">
                  {item.approach}
                </h4>
                <p className="text-text-grey text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-text-grey leading-relaxed text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
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
                support for each child&apos;s growth.
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

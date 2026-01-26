import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
import Image from "next/image";

export const metadata = {
  title: "School Facilities & Safety | Private School in Lugbe Abuja",
  description:
    "Discover modern classrooms, ICT labs, science labs and 24-hour CCTV security at Skyheights Academy in Lugbe, Abuja. Secure learning environment."
};

export default function FacilitiesPage() {
  return (
    <>
      {/* HERO - Phase 7: Answer silent parent concerns */}
      <section className="relative bg-royal-blue text-white py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/pics/14910.jpg"
            alt="Skyheights Academy Facilities"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container relative z-10">
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            Our Facilities & Safety Standards
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-4xl leading-relaxed">
            Skyheights Academy provides a secure, well-equipped, and
            student-friendly environment designed to support effective learning
            and holistic development.
          </p>
        </div>
      </section>

      {/* LEARNING ENVIRONMENT OVERVIEW - Phase 7: Well-designed environment */}
      <SectionContainer background="white">
        <SectionHeader title="A Purpose-Built Learning Environment" />
        <div className=" flex justify-center">
          <p className="text-lg text-center max-w-4xl text-text-grey leading-relaxed">
            We believe that a well-designed environment plays a vital role in a
            child&apos;s academic success. Our facilities are thoughtfully
            developed to promote focus, safety, and positive learning
            experiences at every level.
          </p>
        </div>
      </SectionContainer>

      {/* ACADEMIC FACILITIES - Phase 7: Structured cards, icon-led blocks */}
      <SectionContainer background="light">
        <SectionHeader title="Academic Facilities" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              facility: "Classrooms",
              description:
                "Spacious, well-ventilated classrooms designed to encourage focus, interaction, and effective teaching.",
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              )
            },
            {
              facility: "Library",
              description:
                "A calm and resource-rich library that supports reading culture, research skills, and independent learning.",
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              )
            },
            {
              facility: "Science Laboratory",
              description:
                "Well-equipped laboratories that provide students with hands-on scientific learning and practical experimentation.",
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
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              )
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px] p-8 text-center"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
            >
              <div className="w-20 h-20 bg-royal-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-royal-blue">{item.icon}</div>
              </div>
              <h3 className="font-playfair font-bold text-xl text-deep-navy mb-3">
                {item.facility}
              </h3>
              <p className="text-text-grey text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* TECHNOLOGY & INNOVATION - Phase 7: ICT & Digital Learning */}
      <SectionContainer background="white">
        <SectionHeader title="ICT & Digital Learning" />
        <div className=" flex justify-center flex-col items-center">
          <p className="text-lg text-center max-w-4xl text-text-grey leading-relaxed mb-8">
            Our ICT and computer laboratory equips students with essential
            digital skills, supporting modern teaching methods and technological
            literacy from an early age.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                point: "Computer-Based Learning",
                detail:
                  "Access to computers for research, assignments, and digital literacy development"
              },
              {
                point: "Guided ICT Instruction",
                detail:
                  "Structured lessons in computer skills, software usage, and technology fundamentals"
              },
              {
                point: "Safe and Supervised Usage",
                detail:
                  "All technology use is monitored to ensure appropriate and secure digital engagement"
              }
            ].map((item, index) => (
              <div key={index} className="bg-light-grey rounded-[10px] p-6">
                <h4 className="font-semibold text-deep-navy mb-2">
                  {item.point}
                </h4>
                <p className="text-text-grey text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* SAFETY & SECURITY - Phase 7: VERY IMPORTANT, serious and explicit */}
      <SectionContainer background="light">
        <SectionHeader
          title="Student Safety & Security"
          subtitle="Our commitment to a secure learning environment"
          centered
        />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                measure: "24-Hour CCTV Surveillance",
                description:
                  "The school premises are monitored round-the-clock to ensure the safety and security of all pupils and staff.",
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )
              },
              {
                measure: "Controlled Environment",
                description:
                  "Access to school facilities is managed to maintain a secure and orderly learning environment.",
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                )
              },
              {
                measure: "Supervised School Culture",
                description:
                  "Trained staff members provide consistent supervision, ensuring students are safe at all times.",
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[14px] p-8 text-center"
                style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
              >
                <div className="w-20 h-20 bg-heritage-brown/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-heritage-brown">{item.icon}</div>
                </div>
                <h3 className="font-playfair font-bold text-xl text-deep-navy mb-3">
                  {item.measure}
                </h3>
                <p className="text-text-grey text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Safety callout box */}
          <div className="bg-heritage-brown/10 rounded-[14px] p-8 border-l-4 border-heritage-brown">
            <div className="flex items-start space-x-4">
              <svg
                className="w-8 h-8 text-heritage-brown shrink-0 mt-1"
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
                <h4 className="font-playfair font-bold text-deep-navy mb-2 text-lg">
                  Our Safety Commitment
                </h4>
                <p className="text-text-grey leading-relaxed">
                  Student safety is our top priority. Every measure we have put
                  in place is designed to provide parents with peace of mind and
                  students with a secure environment where they can focus on
                  learning and personal growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* OUTDOOR & RECREATIONAL - Phase 7: Playground & Recreational Areas */}
      <SectionContainer background="white">
        <SectionHeader title="Playground & Recreational Areas" />
        <div className=" flex justify-center">
          <p className="text-lg text-center max-w-4xl text-text-grey leading-relaxed">
            Our playground and outdoor spaces support physical development,
            social interaction, and balanced student growth in a safe and
            supervised environment.
          </p>
        </div>
      </SectionContainer>

      {/* FACILITIES SUMMARY - Phase 7: Trust recap, structured checklist */}
      <SectionContainer background="light">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Facilities Overview"
            subtitle="A comprehensive learning environment"
            centered
          />
          <div
            className="bg-white rounded-[14px] p-8 md:p-12"
            style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Modern classrooms",
                "ICT / Computer laboratory",
                "Library",
                "Science laboratory",
                "Playground",
                "24-hour CCTV surveillance"
              ].map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-light-grey rounded-lg"
                >
                  <svg
                    className="w-6 h-6 text-royal-blue mr-3 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-deep-navy font-medium">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* CLOSING CTA - Phase 7: Confidence-based */}
      <SectionContainer background="white">
        <div className="max-w-4xl mx-auto bg-light-grey rounded-[14px] p-8 md:p-12 text-center">
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-playfair font-bold text-deep-navy mb-6 leading-tight">
            A Safe Environment for Meaningful Learning
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg text-text-grey mb-8 leading-relaxed max-w-2xl mx-auto">
            We are committed to providing students with facilities that support
            excellence, safety, and personal development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/academics" variant="primary" size="lg">
              Explore Our Academics
            </Button>
            <Button href="/admissions" variant="secondary" size="lg">
              Apply for Admission
            </Button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
import Image from "next/image";
import {
  HiSun,
  HiHeart,
  HiUserGroup,
  HiShieldCheck,
  HiAcademicCap,
  HiSparkles,
  HiBookOpen,
  HiUsers,
  HiHandRaised,
  HiPuzzlePiece
} from "react-icons/hi2";

export const metadata = {
  title: "Student Life | Skyheights Academy",
  description:
    "Experience vibrant student life at Skyheights Academy — morning circles, clubs, counselling, gender equality programmes, and inclusive support for every learner."
};

export default function StudentLifePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative text-white py-20 md:py-28 overflow-hidden"
        style={{
          backgroundImage: "url('/pics/14915.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/40 to-black/15"></div>
        <div className="container relative z-10">
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-4 !text-white">
            Student Life
          </h1>
          <p className="text-xl md:text-2xl !text-white/90 max-w-3xl leading-relaxed font-light">
            A vibrant, inclusive community where every child grows academically,
            emotionally, and socially — every single day.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <SectionContainer background="white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Beyond the Classroom"
            subtitle="At Skyheights Academy, education extends far beyond textbooks. We nurture well-rounded individuals through structured daily routines, enriching co-curricular programmes, emotional support services, and an inclusive culture where every pupil belongs."
            centered
          />
        </div>
      </SectionContainer>

      {/* MORNING CIRCLE */}
      <SectionContainer background="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-heritage-brown flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <HiSun className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-heritage-brown uppercase tracking-widest">Daily Ritual</span>
            </div>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-deep-navy mb-6">
              Morning Circle
            </h2>
            <p className="text-text-grey text-lg leading-relaxed mb-6">
              Each school day at Skyheights Academy begins with the Morning
              Circle — a structured, whole-class gathering that sets the tone
              for focused, positive learning. Students come together to share
              affirmations, discuss current events appropriate to their level,
              review the day&apos;s agenda, and engage in brief mindfulness
              exercises.
            </p>
            <p className="text-text-grey leading-relaxed mb-6">
              Morning Circle builds a sense of community and belonging,
              develops public speaking confidence, and helps pupils transition
              smoothly into the academic day. It is one of the quiet pillars of
              our school culture — a daily investment in every child&apos;s
              emotional readiness and social confidence.
            </p>
            <ul className="space-y-2">
              {[
                "Daily affirmations and positive self-talk",
                "Age-appropriate current affairs discussions",
                "Mindfulness and breathing exercises",
                "Goal-setting and day planning",
                "Celebration of pupil achievements"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-grey">
                  <svg className="w-5 h-5 text-heritage-brown shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden relative h-[420px] bg-light-grey">
            <Image
              src="/pics/14875.jpg"
              alt="Students during Morning Circle at Skyheights Academy"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </SectionContainer>

      {/* CLUBS & CO-CURRICULAR ACTIVITIES */}
      <SectionContainer background="light">
        <SectionHeader
          title="Clubs & Co-Curricular Activities"
          subtitle="From science to sports, from debate to drama — every pupil finds their passion"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Sports & Athletics",
              description:
                "Football, basketball, athletics, and table tennis. Building teamwork, discipline, and physical fitness through competitive and recreational sport.",
              icon: HiSparkles,
              color: "text-royal-blue"
            },
            {
              title: "Science & Technology Club",
              description:
                "Robotics, coding projects, STEM competitions, and practical science experiments that foster innovation and analytical thinking.",
              icon: HiAcademicCap,
              color: "text-heritage-brown"
            },
            {
              title: "Debate & Public Speaking",
              description:
                "Oratory competitions, inter-school debates, and communication workshops that build confidence and critical reasoning.",
              icon: HiUsers,
              color: "text-royal-blue"
            },
            {
              title: "Music & Performing Arts",
              description:
                "Choir, drama productions, musical instruments, and annual concerts that showcase pupil creativity and stage presence.",
              icon: HiSparkles,
              color: "text-heritage-brown"
            },
            {
              title: "Creative Arts & Craft",
              description:
                "Painting, drawing, pottery, and design projects that encourage self-expression and develop aesthetic sensibility.",
              icon: HiBookOpen,
              color: "text-royal-blue"
            },
            {
              title: "Literary & Reading Club",
              description:
                "Book clubs, creative writing circles, poetry slams, and literary competitions that nurture a lifelong love of reading.",
              icon: HiBookOpen,
              color: "text-heritage-brown"
            },
            {
              title: "Mathematics Club",
              description:
                "Math Olympiad preparation, problem-solving challenges, and peer learning sessions for mathematically inclined pupils.",
              icon: HiAcademicCap,
              color: "text-royal-blue"
            },
            {
              title: "Environmental Club",
              description:
                "School garden projects, recycling initiatives, nature walks, and sustainability awareness campaigns.",
              icon: HiHeart,
              color: "text-heritage-brown"
            },
            {
              title: "Home Economics & Life Skills",
              description:
                "Practical cooking, nutrition education, budgeting basics, and essential life skills for independent, confident living.",
              icon: HiUsers,
              color: "text-royal-blue"
            }
          ].map((club, index) => {
            const Icon = club.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-divider-grey hover:border-heritage-brown hover:shadow-md transition-[border-color,box-shadow] duration-300"
              >
                <div className={`mb-3 ${club.color}`} aria-hidden="true">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-deep-navy mb-2">
                  {club.title}
                </h3>
                <p className="text-text-grey text-sm leading-relaxed">
                  {club.description}
                </p>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* COUNSELLING & WELLBEING */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-xl overflow-hidden relative h-[400px] bg-light-grey">
            <Image
              src="/pics/14872.jpg"
              alt="Student counselling and wellbeing support at Skyheights Academy"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-royal-blue flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <HiHeart className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-royal-blue uppercase tracking-widest">Wellbeing</span>
            </div>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-deep-navy mb-6">
              Counselling Sessions
            </h2>
            <p className="text-text-grey text-lg leading-relaxed mb-6">
              The emotional health of every pupil is as important to us as
              their academic performance. Our trained school counsellors offer
              regular one-on-one and group counselling sessions across all
              levels — from early years through secondary.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Individual Counselling",
                  detail:
                    "Confidential one-on-one sessions for pupils navigating personal, social, or academic challenges."
                },
                {
                  title: "Group Therapy Sessions",
                  detail:
                    "Structured small-group discussions that help pupils develop social skills and emotional regulation."
                },
                {
                  title: "Academic Stress Management",
                  detail:
                    "Strategies for managing examination pressure, study anxiety, and performance expectations."
                },
                {
                  title: "Parent–Counsellor Collaboration",
                  detail:
                    "Regular updates and co-sessions with parents to ensure holistic, continuous support at home and school."
                },
                {
                  title: "Peer Support Network",
                  detail:
                    "Trained senior student peer mentors provide relatable support and positive role modelling."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-royal-blue-soft rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-royal-blue rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-deep-navy mb-1">{item.title}</h4>
                    <p className="text-text-grey text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* GENDER EQUALITY & ASSEMBLIES */}
      <SectionContainer background="light">
        <SectionHeader
          title="Gender Equality & Inclusivity Programmes"
          subtitle="Building a generation of young people who champion fairness, dignity, and equal opportunity"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Gender Equality Support */}
          <div className="bg-white rounded-xl p-8 border border-divider-grey">
            <div className="w-12 h-12 rounded-full bg-heritage-brown/10 flex items-center justify-center mb-5" aria-hidden="true">
              <HiHandRaised className="w-6 h-6 text-heritage-brown" />
            </div>
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
              Gender Equality Support Initiatives
            </h3>
            <p className="text-text-grey leading-relaxed mb-5">
              Skyheights Academy actively promotes gender equity across all
              aspects of school life. Our initiatives ensure that every pupil —
              regardless of gender — has equal access to academic opportunities,
              leadership positions, and extracurricular activities.
            </p>
            <ul className="space-y-3">
              {[
                "Equal representation in student leadership roles",
                "Girls in STEM encouragement programmes",
                "Workshops on gender rights and respectful relationships",
                "Inclusive sports and club participation policies",
                "Safe reporting channels for gender-based concerns"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-grey">
                  <svg className="w-4 h-4 text-heritage-brown shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Gender-Based Assemblies */}
          <div className="bg-white rounded-xl p-8 border border-divider-grey">
            <div className="w-12 h-12 rounded-full bg-royal-blue/10 flex items-center justify-center mb-5" aria-hidden="true">
              <HiUserGroup className="w-6 h-6 text-royal-blue" />
            </div>
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
              Gender-Based Assemblies
            </h3>
            <p className="text-text-grey leading-relaxed mb-5">
              Our structured gender-based assemblies create safe, focused spaces
              where pupils can discuss age-appropriate topics related to identity,
              health, relationships, and personal development with trained
              facilitators and counsellors.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-royal-blue-soft rounded-lg">
                <h4 className="font-playfair font-bold text-deep-navy mb-1">Boys&apos; Assembly</h4>
                <p className="text-sm text-text-grey">Guided conversations on responsibility, respectful masculinity, emotional expression, and healthy relationships.</p>
              </div>
              <div className="p-4 bg-cream rounded-lg">
                <h4 className="font-playfair font-bold text-deep-navy mb-1">Girls&apos; Assembly</h4>
                <p className="text-sm text-text-grey">Empowering discussions on confidence, ambition, body awareness, safety, and navigating social pressures.</p>
              </div>
              <div className="p-4 bg-light-grey rounded-lg">
                <h4 className="font-playfair font-bold text-deep-navy mb-1">Joint Assemblies</h4>
                <p className="text-sm text-text-grey">Combined sessions focused on mutual respect, collaboration, and building an equitable school community.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* INCLUSIVE EDUCATION & REMEDIAL SUPPORT */}
      <SectionContainer background="white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Inclusive Education & Learning Support"
            subtitle="Every child learns differently. We meet every pupil where they are."
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-1">
              <div className="bg-heritage-brown text-white rounded-xl p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-5" aria-hidden="true">
                    <HiPuzzlePiece className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-playfair font-bold text-2xl mb-4">
                    Our Commitment
                  </h3>
                  <p className="text-white/85 leading-relaxed">
                    Skyheights Academy is committed to providing an inclusive
                    learning environment where pupils with diverse needs receive
                    the targeted support they require to thrive academically and
                    socially.
                  </p>
                </div>
                <p className="text-white/70 text-sm mt-6 italic">
                  &ldquo;No child is left behind. Every learner matters.&rdquo;
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Remedial Literacy Programme",
                  description:
                    "Structured, small-group reading and writing sessions for pupils who need additional support with foundational literacy skills. Delivered by specialist teachers using evidence-based methods.",
                  icon: HiBookOpen
                },
                {
                  title: "Numeracy Support Sessions",
                  description:
                    "Targeted one-on-one and small-group numeracy intervention for pupils who struggle with mathematical concepts, using visual and practical learning approaches.",
                  icon: HiAcademicCap
                },
                {
                  title: "Differentiated Learning Plans",
                  description:
                    "Individualised learning plans developed in collaboration with parents and specialists to accommodate a range of learning styles, paces, and abilities.",
                  icon: HiShieldCheck
                },
                {
                  title: "Special Needs Inclusion",
                  description:
                    "Compassionate support for pupils with identified learning differences including dyslexia, dyscalculia, and attention challenges, with regular progress reviews and parent communication.",
                  icon: HiHeart
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-light-grey rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full bg-heritage-brown/15 flex items-center justify-center mb-4" aria-hidden="true">
                      <Icon className="w-5 h-5 text-heritage-brown" />
                    </div>
                    <h4 className="font-playfair font-bold text-lg text-deep-navy mb-2">
                      {item.title}
                    </h4>
                    <p className="text-text-grey text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-heritage-brown/8 border-l-4 border-heritage-brown rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-deep-navy leading-relaxed">
              <strong>How to access support:</strong> Parents who believe their child may benefit from our learning support programmes are encouraged to speak directly with the class teacher or school counsellor. All referrals are handled with complete confidentiality and care.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* CHARACTER DEVELOPMENT */}
      <SectionContainer background="cream">
        <SectionHeader title="Character & Moral Development" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Weekly Assemblies",
              description: "Moral lessons, value education, and character talks that reinforce the school's core values of integrity, respect, and responsibility.",
              icon: HiUsers
            },
            {
              title: "Leadership Training",
              description: "Prefect system, student council, and leadership workshops that equip pupils with the skills to lead with confidence and humility.",
              icon: HiAcademicCap
            },
            {
              title: "Community Service",
              description: "Regular outreach programmes and social responsibility projects that build empathy and a spirit of contribution to society.",
              icon: HiHeart
            },
            {
              title: "Mentorship Programmes",
              description: "One-on-one guidance from experienced teachers and peer mentors to support every pupil's personal and academic growth.",
              icon: HiHandRaised
            },
            {
              title: "Ethics & Values Education",
              description: "Dedicated lessons on honesty, integrity, good citizenship, and the importance of making ethical choices in daily life.",
              icon: HiShieldCheck
            },
            {
              title: "Cultural Awareness",
              description: "Celebrations of Nigeria's diverse heritage, cultural days, and intercultural learning that build pride and respect for all backgrounds.",
              icon: HiSparkles
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-heritage-brown rounded-full flex items-center justify-center" aria-hidden="true">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl text-deep-navy mb-2">{item.title}</h3>
                  <p className="text-text-grey text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* ANNUAL EVENTS */}
      <SectionContainer background="light">
        <SectionHeader title="Annual Events & Celebrations" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {[
            { event: "Inter-House Sports Competition", month: "October" },
            { event: "Cultural Day & Food Festival", month: "November" },
            { event: "Annual Carol Service", month: "December" },
            { event: "Speech & Prize Giving Day", month: "July" },
            { event: "Science & Technology Fair", month: "March" },
            { event: "Literary & Arts Week", month: "April" },
            { event: "Career Day", month: "May" },
            { event: "Graduation Ceremony", month: "July" },
            { event: "Parents Open Day", month: "Every Term" }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border-l-4 border-royal-blue"
            >
              <h4 className="font-playfair font-bold text-lg text-deep-navy mb-1">
                {item.event}
              </h4>
              <p className="text-sm text-royal-blue font-medium">{item.month}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA */}
      <section className="bg-deep-navy py-20">
        <div className="container text-center">
          <h2 className="font-playfair font-bold text-[2.5rem] md:text-[2.75rem] text-white mb-6 leading-tight">
            Join Our Vibrant Community
          </h2>
          <p className="text-lg text-white/75 mb-10 max-w-3xl mx-auto leading-relaxed">
            Give your child the opportunity to learn, grow, and thrive in a
            supportive, enriching, and inclusive school environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/admissions" variant="primary" size="lg">
              Apply for Admission
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Make an Enquiry
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

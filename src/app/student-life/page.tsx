import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import Card from "../../components/Card";
import Button from "../../components/Button";
import {
  HiShieldCheck,
  HiUserGroup,
  HiDocumentText,
  HiSparkles,
  HiHeart,
  HiUsers
} from "react-icons/hi2";

export const metadata = {
  title: "Student Life | Skyheights Academy",
  description:
    "Discover student life at Skyheights Academy - co-curricular activities, clubs, sports, and character development programs."
};

export default function StudentLifePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-heritage-brown to-royal-blue text-white py-20 md:py-28">
        <div className="container">
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-2">
            Student Life
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl">
            A vibrant community where students grow academically, socially, and
            morally
          </p>
        </div>
      </section>

      {/* Introduction */}
      <SectionContainer background="white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle centered>Beyond the Classroom</SectionTitle>
          <p className="text-lg text-text-grey leading-relaxed">
            At Skyheights Academy, education extends far beyond textbooks and
            classrooms. We believe in nurturing well-rounded individuals through
            a rich variety of co-curricular activities, character development
            programs, and opportunities for personal growth. Our students engage
            in sports, arts, leadership training, and community service,
            developing the skills and values needed to excel in life.
          </p>
        </div>
      </SectionContainer>

      {/* Co-Curricular Activities */}
      <SectionContainer background="light">
        <SectionTitle
          centered
          subtitle="Explore your interests and develop new skills through our diverse programs"
        >
          Co-Curricular Activities
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Sports & Athletics",
              description:
                "Football, basketball, athletics, table tennis, and more. Developing teamwork, discipline, and physical fitness.",
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
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )
            },
            {
              title: "Music & Performing Arts",
              description:
                "Choir, drama club, musical instruments, dance, and annual performances showcasing student talents.",
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
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              )
            },
            {
              title: "Debate & Public Speaking",
              description:
                "Developing communication skills, critical thinking, and confidence through debates and oratory competitions.",
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              )
            },
            {
              title: "Science & Technology Club",
              description:
                "Robotics, coding, science projects, and STEM competitions fostering innovation and problem-solving.",
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              )
            },
            {
              title: "Creative Arts",
              description:
                "Painting, drawing, crafts, and visual arts projects encouraging creativity and self-expression.",
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              )
            },
            {
              title: "Literary & Reading Club",
              description:
                "Book clubs, creative writing, poetry, and literary competitions nurturing a love for reading.",
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
              )
            },
            {
              title: "Mathematics Club",
              description:
                "Math competitions, problem-solving challenges, and olympiad preparation for mathematically gifted students.",
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
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              )
            },
            {
              title: "Home Economics & Culinary",
              description:
                "Cooking classes, nutrition education, and practical life skills for independent living.",
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              )
            },
            {
              title: "Environmental Club",
              description:
                "Gardening, recycling projects, and environmental awareness programs promoting sustainability.",
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )
            }
          ].map((activity, index) => (
            <Card
              key={index}
              title={activity.title}
              description={activity.description}
              icon={activity.icon}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Character Development */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle>Character & Moral Development</SectionTitle>
            <p className="text-text-grey text-lg mb-6 leading-relaxed">
              We place strong emphasis on character formation and moral values.
              Through our character development program, students learn
              integrity, responsibility, respect, empathy, and leadership.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Weekly Assemblies",
                  description:
                    "Moral lessons, value education, and character talks"
                },
                {
                  title: "Leadership Training",
                  description:
                    "Prefect system, student council, and leadership workshops"
                },
                {
                  title: "Community Service",
                  description:
                    "Outreach programs and social responsibility projects"
                },
                {
                  title: "Mentorship Programs",
                  description:
                    "One-on-one guidance from teachers and senior students"
                },
                {
                  title: "Ethics & Values Education",
                  description:
                    "Regular lessons on integrity, honesty, and good citizenship"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-light-grey rounded-lg"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-heritage-brown rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-lg text-deep-navy mb-1">
                      {item.title}
                    </h4>
                    <p className="text-text-grey text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-cream rounded-lg p-12 flex items-center justify-center min-h-[500px]">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 text-heritage-brown">
                <svg
                  className="w-24 h-24"
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
              </div>
              <p className="text-2xl font-playfair font-bold text-deep-navy">
                Building Character,
                <br />
                Shaping Leaders
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* School Culture */}
      <SectionContainer background="cream">
        <SectionTitle centered>Our School Culture</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Respect & Discipline",
              description:
                "We maintain high standards of discipline while fostering mutual respect between students, teachers, and staff. Our code of conduct emphasizes responsibility and good behavior.",
              icon: HiShieldCheck
            },
            {
              title: "Diversity & Inclusion",
              description:
                "We celebrate diversity and create an inclusive environment where every student feels valued, regardless of background, ethnicity, or ability.",
              icon: HiUserGroup
            },
            {
              title: "Academic Integrity",
              description:
                "We promote honesty, originality, and ethical academic conduct. Students learn the importance of doing their own work and giving proper credit.",
              icon: HiDocumentText
            },
            {
              title: "Environmental Consciousness",
              description:
                "We teach students to care for the environment through recycling programs, green initiatives, and sustainability education.",
              icon: HiSparkles
            },
            {
              title: "Health & Wellness",
              description:
                "We prioritize physical and mental health through sports, counseling services, health education, and a supportive school environment.",
              icon: HiHeart
            },
            {
              title: "Parent-School Partnership",
              description:
                "We maintain strong partnerships with parents through regular communication, PTA meetings, and collaborative support of student development.",
              icon: HiUsers
            }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 mb-4 text-heritage-brown flex items-center justify-center">
                  <IconComponent className="w-12 h-12" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-deep-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-text-grey">{item.description}</p>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Special Events */}
      <SectionContainer background="white">
        <SectionTitle centered>Annual Events & Celebrations</SectionTitle>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-light-grey p-6 rounded-lg border-l-4 border-royal-blue"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-playfair font-bold text-lg text-deep-navy mb-2">
                      {item.event}
                    </h4>
                    <p className="text-heritage-brown font-medium">
                      {item.month}
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 text-royal-blue flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Student Support */}
      <SectionContainer background="light">
        <SectionTitle
          centered
          subtitle="Comprehensive support systems for student welfare and success"
        >
          Student Support Services
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Academic Support",
              description:
                "Extra lessons, tutoring, and homework assistance for students who need additional help.",
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              )
            },
            {
              title: "Counseling Services",
              description:
                "Professional guidance for personal, social, and emotional challenges.",
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              )
            },
            {
              title: "Career Guidance",
              description:
                "University counseling, career exploration, and future planning support.",
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              )
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-royal-blue mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="font-playfair font-bold text-xl text-deep-navy mb-3">
                {service.title}
              </h3>
              <p className="text-text-grey">{service.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-deep-navy mb-6">
            Join Our Vibrant Community
          </h2>
          <p className="text-xl text-text-grey mb-8">
            Give your child the opportunity to thrive in a supportive, enriching
            environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/admissions" variant="primary" size="lg">
              Apply for Admission
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

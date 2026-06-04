import Curriculum from "@/components/Curriculum";
import Button from "../components/Button";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import TestimonialsSection from "../components/TestimonialsSection";
import Image from "next/image";
import {
  HiBuildingOffice,
  HiComputerDesktop,
  HiBookOpen,
  HiBeaker,
  HiTrophy,
  HiShieldCheck
} from "react-icons/hi2";
import {
  LuSun,
  LuPalette,
  LuMessageCircle,
  LuUsers,
  LuHeartHandshake,
  LuGraduationCap
} from "react-icons/lu";

export default function Home() {
  return (
    <>
      {/* HERO SECTION - Above the Fold */}
      {/* Phase 3: NO gradients - solid heritage brown */}
      <section
        className="relative min-h-[85vh] flex items-center bg-[#eee5b5] text-white overflow-hidden"
        style={{ backgroundImage: "url('/pics/14872.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Overlay - directional, warmer on left for text legibility */}
        <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/40 to-black/15 z-10"></div>

        {/* Content */}
        <div className="relative container py-20 md:py-24 w-full z-20">
          <div className="max-w-4xl">
            {/* Hero Headline - Phase 3: 56-64px (3.5-4rem) */}
            <h1 className="font-playfair font-bold text-[3.5rem] md:text-[4rem] mb-6 leading-tight animate-fade-in !text-white drop-shadow-lg">
              Nurturing Excellence.
              <br />
              Shaping Future Leaders.
            </h1>

            {/* Hero Subtext */}
            <p className="text-lg md:text-xl lg:text-2xl !text-white/95 mb-10 max-w-3xl leading-relaxed font-light drop-shadow-md">
              Skyheights Academy is a private co-educational institution
              offering Nigerian, British, and Montessori curricula — committed
              to raising confident, disciplined, and well-rounded learners.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                href="/admissions"
                variant="primary"
                size="lg"
                className="shadow-xl"
              >
                Apply for Admission
              </Button>
              <Button
                href="/academics"
                variant="secondary"
                size="lg"
                className="shadow-lg"
              >
                Explore Our Academics
              </Button>
            </div>
          </div>
        </div>

        {/* Subtle bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* STATS / ACHIEVEMENTS STRIP */}
      <section className="bg-heritage-brown py-14">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "2017", label: "Est." },
              { value: "4", label: "Academic Levels" },
              { value: "3", label: "Curricula Offered" },
              { value: "98%", label: "Exam Pass Rate" }
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`text-white text-center py-6 px-4 ${i < 3 ? "md:border-r border-white/20" : ""} ${i < 2 ? "border-b md:border-b-0 border-white/20" : ""}`}
              >
                <div className="text-4xl md:text-5xl font-playfair font-bold mb-2 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs text-white/65 font-medium uppercase tracking-[0.15em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SIGNAL STRIP */}
      <section className="bg-white border-b border-divider-grey py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-heritage-brown shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-deep-navy font-medium text-sm md:text-base">
                Established 2017
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-heritage-brown shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-deep-navy font-medium text-sm md:text-base">
                Creche to Secondary
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-heritage-brown shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-deep-navy font-medium text-sm md:text-base">
                3 Curriculum Options
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-heritage-brown shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-deep-navy font-medium text-sm md:text-base">
                24-Hour CCTV
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT SECTION */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-deep-navy mb-6">
              Welcome to Skyheights Academy
            </h2>
            <p className="text-text-grey text-lg leading-relaxed mb-6">
              Skyheights Academy is a private educational institution located in
              Lugbe, Abuja, dedicated to fostering academic excellence, strong
              character, and lifelong learning. Since our founding in 2017, we
              have remained committed to nurturing each child&apos;s potential
              in a secure, stimulating, and values-driven environment.
            </p>
            <Button
              href="/about"
              variant="outline"
              className="border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white"
            >
              Learn More About Us →
            </Button>
          </div>

          <div className="rounded-lg overflow-hidden relative h-[400px]">
            <Image
              src="/pics/14875.jpg"
              alt="Skyheights Academy Learning Environment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end">
              <div className="p-5">
                <p className="text-2xl font-playfair font-bold !text-white drop-shadow-lg">
                  Excellence Since 2017
                </p>
                <p className="text-sm opacity-90 !text-white drop-shadow-md">
                  Building Future Leaders
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ACADEMIC LEVELS (PROGRAMS) SECTION */}
      <SectionContainer background="light">
        <SectionHeader
          title="Our Academic Structure"
          subtitle="Building strong foundations at every stage of learning"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-lg border border-divider-grey hover:border-l-4 hover:border-l-heritage-brown hover:border-heritage-brown hover:shadow-xl transition-[border-color,border-left-width,box-shadow] duration-300 p-8 group cursor-pointer">
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-3">
              Creche
            </h3>
            <p className="text-sm text-royal-blue font-medium mb-4">
              Ages 6 months - 2 years
            </p>
            <p className="text-text-grey mb-4 leading-relaxed">
              Our Creche programme provides a warm, secure, and nurturing
              environment where children take their first steps into structured
              learning through guided play and care. With small class sizes,
              trained caregivers, and 24-hour CCTV monitoring, we ensure your
              child receives individualized attention in a safe, stimulating
              setting that supports early motor skills, social interaction, and
              emotional development.
            </p>
            <a
              href="/academics/creche"
              className="text-heritage-brown font-medium hover:underline inline-flex items-center"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-white rounded-lg border border-divider-grey hover:border-l-4 hover:border-l-heritage-brown hover:border-heritage-brown hover:shadow-xl transition-[border-color,border-left-width,box-shadow] duration-300 p-8 group cursor-pointer">
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-3">
              Nursery
            </h3>
            <p className="text-sm text-royal-blue font-medium mb-4">
              Ages 2 - 5 years
            </p>
            <p className="text-text-grey mb-4 leading-relaxed">
              Our Nursery programme introduces foundational academic skills
              while nurturing curiosity, creativity, and confidence in young
              learners. Through Montessori principles combined with Nigerian and
              British early learning standards, children develop early literacy,
              numeracy, phonics, and social skills. By the end of the programme,
              pupils demonstrate readiness for formal primary education with a
              genuine love for learning.
            </p>
            <a
              href="/academics/nursery"
              className="text-heritage-brown font-medium hover:underline inline-flex items-center"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-white rounded-lg border border-divider-grey hover:border-l-4 hover:border-l-heritage-brown hover:border-heritage-brown hover:shadow-xl transition-[border-color,border-left-width,box-shadow] duration-300 p-8 group cursor-pointer">
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-3">
              Primary
            </h3>
            <p className="text-sm text-royal-blue font-medium mb-4">
              Ages 6 - 11 years
            </p>
            <p className="text-text-grey mb-4 leading-relaxed">
              The Primary School programme at Skyheights Academy lays a strong
              academic foundation, equipping pupils with critical thinking
              skills, discipline, and a love for learning. Our blended Nigerian
              and British curriculum covers core subjects including English,
              Mathematics, Science, Social Studies, and ICT, while continuous
              assessment ensures ongoing progress. Students develop not only
              academic excellence but also moral character and co-curricular
              engagement.
            </p>
            <a
              href="/academics/primary"
              className="text-heritage-brown font-medium hover:underline inline-flex items-center"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-white rounded-lg border border-divider-grey hover:border-l-4 hover:border-l-heritage-brown hover:border-heritage-brown hover:shadow-xl transition-[border-color,border-left-width,box-shadow] duration-300 p-8 group cursor-pointer">
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-3">
              Secondary
            </h3>
            <p className="text-sm text-royal-blue font-medium mb-4">
              Ages 12 - 17 years
            </p>
            <p className="text-text-grey mb-4 leading-relaxed">
              Our Secondary School programme prepares students for higher
              education and future careers through rigorous academics,
              discipline, and character development. Students choose from
              Science, Commercial, or Arts tracks while receiving comprehensive
              WAEC and NECO preparation. With a 98% pass rate and 100%
              university placement record, we ensure students are ready for both
              examinations and life beyond school.
            </p>
            <a
              href="/academics/secondary"
              className="text-heritage-brown font-medium hover:underline inline-flex items-center"
            >
              Learn More →
            </a>
          </div>
        </div>
      </SectionContainer>

      {/* CURRICULUM OFFERING SECTION */}
      <SectionContainer background="white">
        <SectionHeader title="A Well-Rounded, Global Curriculum" centered />
        <Curriculum />
      </SectionContainer>

      {/* FACILITIES & SAFETY SECTION */}
      <SectionContainer background="cream">
        <SectionHeader
          title="Modern Facilities. Secure Environment."
          centered
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {[
            { icon: HiBuildingOffice, label: "Modern Classrooms" },
            { icon: HiComputerDesktop, label: "ICT Laboratory" },
            { icon: HiBookOpen, label: "School Library" },
            { icon: HiBeaker, label: "Science Labs" },
            { icon: HiTrophy, label: "Sports Ground" },
            { icon: HiShieldCheck, label: "24-Hour CCTV" }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-3 text-heritage-brown flex items-center justify-center" aria-hidden="true">
                  <IconComponent className="w-12 h-12" />
                </div>
                <p className="text-sm font-medium text-deep-navy">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 max-w-3xl mx-auto bg-heritage-brown/10 border-l-4 border-heritage-brown p-6 rounded-lg">
          <div className="flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-heritage-brown shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h4 className="font-playfair font-bold text-deep-navy mb-2">
                Safety is Our Priority
              </h4>
              <p className="text-text-grey">
                All facilities are monitored 24/7 with CCTV surveillance. Our
                campus features controlled access points, trained security
                personnel, and comprehensive safety protocols to ensure every
                child&apos;s wellbeing.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* WHY SKYHEIGHTS ACADEMY SECTION */}
      <SectionContainer background="white">
        <SectionHeader title="Why Parents Choose Skyheights Academy" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Qualified and Dedicated Educators",
              description:
                "Our teaching staff comprises experienced, certified professionals committed to nurturing each child's academic and personal growth."
            },
            {
              title: "Strong Moral and Character Formation",
              description:
                "We emphasize integrity, respect, responsibility, and leadership alongside academic excellence, shaping well-rounded individuals."
            },
            {
              title: "Safe, Disciplined Learning Environment",
              description:
                "With 24-hour CCTV surveillance, trained security, and clear behavioral standards, we provide peace of mind for every parent."
            },
            {
              title: "Focus on Academic and Life Success",
              description:
                "Our holistic approach prepares students not just for exams, but for university, career, and meaningful contribution to society."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-light-grey rounded-lg"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-heritage-brown text-white flex items-center justify-center font-playfair font-bold text-lg">
                {index + 1}
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-deep-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-text-grey">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* STUDENT LIFE HIGHLIGHTS */}
      <SectionContainer background="white">
        <SectionHeader
          title="A Richer School Experience"
          subtitle="Beyond academics — every child at Skyheights Academy participates in a full, purposeful school life"
          centered
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-10">
          {[
            { label: "Morning Circle", Icon: LuSun, desc: "Daily" },
            { label: "Clubs & Activities", Icon: LuPalette, desc: "9+ Clubs" },
            { label: "Counselling", Icon: LuMessageCircle, desc: "All Levels" },
            { label: "Gender Equality", Icon: LuUsers, desc: "Inclusive" },
            { label: "Inclusive Education", Icon: LuHeartHandshake, desc: "Remedial Support" },
            { label: "Annual Events", Icon: LuGraduationCap, desc: "9 Events" }
          ].map((item) => (
            <a
              key={item.label}
              href="/student-life"
              className="bg-light-grey rounded-xl p-5 text-center hover:bg-cream hover:shadow-md transition-[background-color,box-shadow] duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heritage-brown"
            >
              <div className="flex justify-center mb-3" aria-hidden="true">
                <item.Icon className="w-7 h-7 text-heritage-brown" />
              </div>
              <p className="font-playfair font-bold text-sm text-deep-navy leading-tight mb-1">{item.label}</p>
              <p className="text-xs text-text-grey">{item.desc}</p>
            </a>
          ))}
        </div>
        <div className="text-center">
          <Button href="/student-life" variant="outline">
            Discover Student Life →
          </Button>
        </div>
      </SectionContainer>

      {/* GALLERY TEASER */}
      <section className="bg-deep-navy py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-white/60 uppercase tracking-widest font-medium mb-3">Life at Skyheights</p>
              <h2 className="font-playfair font-bold text-[2.25rem] md:text-[2.75rem] text-white mb-6 leading-tight">
                See Our School in Action
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                From Montessori classrooms to sports day, morning circles to
                graduation — our gallery captures the vibrant, daily life of
                Skyheights Academy. Photos of our facilities, activities, and
                student achievements are regularly updated.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/gallery" variant="primary" size="lg">
                  View Gallery
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Book a School Visit
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: "/pics/14872.jpg", alt: "School campus at Skyheights Academy" },
                { src: "/pics/14875.jpg", alt: "Learning environment at Skyheights Academy" },
                { src: "/pics/14915.jpg", alt: "Student activities at Skyheights Academy" },
                { src: "/pics/14920.jpg", alt: "Creche programme at Skyheights Academy" }
              ].map((img, i) => (
                <div key={i} className={`relative overflow-hidden rounded-xl bg-white/10 ${i === 0 ? "row-span-2" : "h-32"}`} style={{ minHeight: i === 0 ? "264px" : "128px" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* CALL TO ACTION (ADMISSIONS PUSH) */}
      <section className="bg-deep-navy py-20 md:py-24">
        <div className="container text-center">
          <h2 className="font-playfair font-bold text-[2.5rem] md:text-[2.75rem] text-white mb-6 leading-tight">
            Give Your Child a Strong Start
          </h2>
          <p className="text-lg text-center md:text-xl text-white/75 mb-10 leading-relaxed max-w-3xl mx-auto">
            Admissions are open for qualified pupils across all academic levels.
            Begin your child&apos;s journey toward excellence today.
          </p>
          <Button href="/admissions" variant="secondary" size="lg">
            Start Admission Process →
          </Button>
        </div>
      </section>
    </>
  );
}

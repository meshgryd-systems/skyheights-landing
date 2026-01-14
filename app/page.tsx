import Button from "../components/Button";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO SECTION - Above the Fold */}
      {/* Phase 3: NO gradients - solid heritage brown */}
      <section className="relative min-h-[85vh] flex items-center bg-heritage-brown text-white overflow-hidden">
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24 w-full">
          <div className="max-w-4xl">
            {/* Hero Headline - Phase 3: 56-64px (3.5-4rem) */}
            <h1 className="font-playfair font-bold text-[3.5rem] md:text-[4rem] mb-6 leading-tight animate-fade-in">
              Nurturing Excellence.
              <br />
              Shaping Future Leaders.
            </h1>

            {/* Hero Subtext */}
            <p className="text-lg md:text-xl lg:text-2xl text-cream/95 mb-10 max-w-3xl leading-relaxed font-light">
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
        <div className="absolute bottom-0 left-0 right-0">
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

      {/* TRUST SIGNAL STRIP */}
      <section className="bg-white border-b border-divider-grey py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-heritage-brown flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
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
                className="w-6 h-6 text-heritage-brown flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
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
                className="w-6 h-6 text-heritage-brown flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
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
                className="w-6 h-6 text-heritage-brown flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
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

          <div className="bg-cream/30 rounded-lg p-12 flex items-center justify-center min-h-[400px] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-64 h-64 relative">
                <Image
                  src="/favicon.ico"
                  alt="Skyheights Academy Crest"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="relative text-center">
              <div className="text-7xl mb-4">🏫</div>
              <p className="text-xl font-playfair font-bold text-deep-navy">
                Excellence Since 2017
              </p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-lg border border-divider-grey hover:border-heritage-brown hover:shadow-xl transition-all duration-300 p-8 text-center group">
            <div className="w-16 h-16 bg-heritage-brown/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-heritage-brown transition-colors">
              <svg
                className="w-8 h-8 text-heritage-brown group-hover:text-white transition-colors"
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
            </div>
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-2">
              Creche
            </h3>
            <p className="text-text-grey mb-4">
              Safe, nurturing environment for our youngest learners aged 6
              months to 2 years.
            </p>
            <a
              href="/academics#creche"
              className="text-heritage-brown font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-white rounded-lg border border-divider-grey hover:border-heritage-brown hover:shadow-xl transition-all duration-300 p-8 text-center group">
            <div className="w-16 h-16 bg-royal-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-blue transition-colors">
              <svg
                className="w-8 h-8 text-royal-blue group-hover:text-white transition-colors"
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
            </div>
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-2">
              Nursery
            </h3>
            <p className="text-text-grey mb-4">
              Montessori-inspired learning building confidence and curiosity for
              ages 2-5.
            </p>
            <a
              href="/academics#nursery"
              className="text-heritage-brown font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-white rounded-lg border border-divider-grey hover:border-heritage-brown hover:shadow-xl transition-all duration-300 p-8 text-center group">
            <div className="w-16 h-16 bg-heritage-brown/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-heritage-brown transition-colors">
              <svg
                className="w-8 h-8 text-heritage-brown group-hover:text-white transition-colors"
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
            </div>
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-2">
              Primary
            </h3>
            <p className="text-text-grey mb-4">
              Strong academic foundation with comprehensive curriculum for ages
              6-11.
            </p>
            <a
              href="/academics#primary"
              className="text-heritage-brown font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-white rounded-lg border border-divider-grey hover:border-heritage-brown hover:shadow-xl transition-all duration-300 p-8 text-center group">
            <div className="w-16 h-16 bg-royal-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-blue transition-colors">
              <svg
                className="w-8 h-8 text-royal-blue group-hover:text-white transition-colors"
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
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-2">
              Secondary
            </h3>
            <p className="text-text-grey mb-4">
              Exam preparation and university readiness for students ages 12-17.
            </p>
            <a
              href="/academics#secondary"
              className="text-heritage-brown font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        </div>
      </SectionContainer>

      {/* CURRICULUM OFFERING SECTION */}
      <SectionContainer background="white">
        <SectionHeader title="A Well-Rounded, Global Curriculum" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          <div className="bg-light-grey p-8 rounded-lg">
            <div className="w-16 h-16 bg-heritage-brown rounded-full flex items-center justify-center mb-6">
              <span className="text-white text-2xl font-bold">🇳🇬</span>
            </div>
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
              Nigerian Curriculum
            </h3>
            <p className="text-text-grey mb-4">
              Full alignment with NERDC standards, ensuring students excel in
              WAEC, NECO, and Common Entrance examinations.
            </p>
            <p className="text-sm text-heritage-brown font-semibold">
              Academic Benefit: National competitiveness and local relevance
            </p>
          </div>

          <div className="bg-light-grey p-8 rounded-lg">
            <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mb-6">
              <span className="text-white text-2xl font-bold">🇬🇧</span>
            </div>
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
              British Curriculum
            </h3>
            <p className="text-text-grey mb-4">
              Cambridge-inspired methods emphasizing critical thinking,
              inquiry-based learning, and international standards.
            </p>
            <p className="text-sm text-heritage-brown font-semibold">
              Academic Benefit: Global perspective and analytical skills
            </p>
          </div>

          <div className="bg-light-grey p-8 rounded-lg">
            <div className="w-16 h-16 bg-heritage-brown rounded-full flex items-center justify-center mb-6">
              <span className="text-white text-2xl font-bold">🎨</span>
            </div>
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
              Montessori Approach
            </h3>
            <p className="text-text-grey mb-4">
              Child-centered learning in early years promoting independence,
              natural development, and hands-on exploration.
            </p>
            <p className="text-sm text-heritage-brown font-semibold">
              Academic Benefit: Strong foundational skills and love for learning
            </p>
          </div>
        </div>
        <p className="text-center text-lg text-deep-navy max-w-4xl mx-auto">
          Our blended curriculum ensures students are{" "}
          <strong>academically competitive</strong>,{" "}
          <strong>globally aware</strong>, and{" "}
          <strong>practically grounded</strong>.
        </p>
      </SectionContainer>

      {/* FACILITIES & SAFETY SECTION */}
      <SectionContainer background="cream">
        <SectionHeader
          title="Modern Facilities. Secure Environment."
          centered
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {[
            { icon: "🏫", label: "Modern Classrooms" },
            { icon: "💻", label: "ICT Laboratory" },
            { icon: "📚", label: "School Library" },
            { icon: "🔬", label: "Science Labs" },
            { icon: "⚽", label: "Sports Ground" },
            { icon: "🛡️", label: "24-Hour CCTV" }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-sm font-medium text-deep-navy">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-3xl mx-auto bg-heritage-brown/10 border-l-4 border-heritage-brown p-6 rounded-lg">
          <div className="flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-heritage-brown flex-shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
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
                child's wellbeing.
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
              <div className="flex-shrink-0 w-12 h-12 bg-royal-blue rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
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
                <h3 className="font-playfair font-bold text-xl text-deep-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-text-grey">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CALL TO ACTION (ADMISSIONS PUSH) */}
      {/* Phase 3: NO gradients - solid deep navy */}
      <section className="bg-deep-navy text-white py-20 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="font-playfair font-bold text-[2.5rem] md:text-[2.75rem] mb-6 leading-tight">
            Give Your Child a Strong Start
          </h2>
          <p className="text-lg md:text-xl text-cream/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Admissions are open for qualified pupils across all academic levels.
            Begin your child's journey toward excellence today.
          </p>
          <Button href="/admissions" variant="secondary" size="lg">
            Start Admission Process →
          </Button>
        </div>
      </section>
    </>
  );
}

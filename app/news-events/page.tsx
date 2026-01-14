import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";

export const metadata = {
  title: "News & Events | Private School in Lugbe Abuja",
  description:
    "Stay informed about school updates, academic activities, and events at Skyheights Academy in Lugbe, Abuja."
};

export default function NewsEventsPage() {
  // Phase 8: News items - formal, calm, informative
  const newsItems = [
    {
      id: 1,
      title: "First Term Resumption Notice",
      date: "2024-09-10",
      excerpt:
        "The school will resume for the first term academic session on Monday, September 16, 2024. All students are expected to report by 8:00 AM.",
      category: "Announcement"
    },
    {
      id: 2,
      title: "Inter-House Sports Competition Results",
      date: "2024-08-25",
      excerpt:
        "The annual inter-house sports competition concluded successfully with outstanding performances from all participating houses.",
      category: "Sports"
    },
    {
      id: 3,
      title: "Academic Excellence Awards 2023/2024",
      date: "2024-07-15",
      excerpt:
        "Skyheights Academy celebrates the exceptional academic achievements of students who demonstrated outstanding performance during the 2023/2024 session.",
      category: "Academic"
    },
    {
      id: 4,
      title: "Parent-Teacher Conference Schedule",
      date: "2024-10-20",
      excerpt:
        "The second term parent-teacher conferences will be held from November 5-7, 2024. Parents are encouraged to schedule appointments with class teachers.",
      category: "Announcement"
    },
    {
      id: 5,
      title: "Cultural Day Celebration",
      date: "2024-10-01",
      excerpt:
        "Students showcased the rich cultural heritage of Nigeria through traditional attire, performances, and presentations during the annual cultural day.",
      category: "Events"
    },
    {
      id: 6,
      title: "Science Fair 2024",
      date: "2024-11-15",
      excerpt:
        "Primary and secondary students will present innovative projects at the annual science fair, demonstrating practical applications of scientific concepts.",
      category: "Academic"
    }
  ];

  // Phase 8: Upcoming events - demonstrate planning and coordination
  const upcomingEvents = [
    {
      id: 1,
      title: "Mid-Term Assessment",
      date: "2024-11-04 - 2024-11-08",
      description:
        "Mid-term assessments for all classes across all academic levels."
    },
    {
      id: 2,
      title: "End of Term Examination",
      date: "2024-12-09 - 2024-12-13",
      description: "First term examinations for Primary and Secondary students."
    },
    {
      id: 3,
      title: "Carol Service & End of Year Celebration",
      date: "2024-12-18",
      description:
        "Annual carol service followed by end of year celebration and prize-giving ceremony."
    },
    {
      id: 4,
      title: "Second Term Resumption",
      date: "2025-01-13",
      description:
        "School resumes for the second term of the 2024/2025 academic session."
    }
  ];

  return (
    <>
      {/* HERO - Phase 8: Show school is alive, structured, current */}
      <section className="bg-royal-blue text-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            News & Events
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-4xl leading-relaxed">
            Stay informed about school updates, academic activities, and
            important notices.
          </p>
        </div>
      </section>

      {/* NEWS SECTION - Phase 8: Formal, calm, informative */}
      <SectionContainer background="white">
        <SectionHeader
          title="News & Announcements"
          subtitle="Recent updates from Skyheights Academy"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="bg-light-grey rounded-[14px] overflow-hidden"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
            >
              <div className="p-6">
                {/* Category badge */}
                <div className="inline-block px-3 py-1 bg-royal-blue/10 rounded-full mb-4">
                  <span className="text-royal-blue text-xs font-semibold">
                    {news.category}
                  </span>
                </div>

                {/* Date - Phase 8: Dates always visible */}
                <p className="text-sm text-text-grey mb-3">
                  {new Date(news.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </p>

                {/* Title - Phase 8: No ALL CAPS, no emojis */}
                <h3 className="font-playfair font-bold text-xl text-deep-navy mb-3 leading-tight">
                  {news.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-grey text-sm leading-relaxed mb-4">
                  {news.excerpt}
                </p>

                {/* Read More */}
                <button className="text-heritage-brown font-medium text-sm hover:text-heritage-brown-dark transition-colors flex items-center">
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* EVENTS SECTION - Phase 8: Structure & planning */}
      <SectionContainer background="light">
        <SectionHeader
          title="Upcoming Events"
          subtitle="School calendar and scheduled activities"
        />
        <div className="max-w-4xl mx-auto space-y-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-[14px] p-6 md:p-8 flex items-start space-x-6"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
            >
              {/* Date icon */}
              <div className="shrink-0 w-16 h-16 bg-heritage-brown/10 rounded-[10px] flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-heritage-brown"
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

              <div className="flex-1">
                {/* Event title */}
                <h3 className="font-playfair font-bold text-xl text-deep-navy mb-2">
                  {event.title}
                </h3>

                {/* Date - Phase 8: Always visible */}
                <p className="text-sm text-royal-blue font-semibold mb-3">
                  {event.date}
                </p>

                {/* Description */}
                <p className="text-text-grey text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* COMBINED CTA - Phase 8: Never leave parents without next step */}
      <SectionContainer background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-playfair font-bold text-deep-navy mb-6 leading-tight">
            Experience the Skyheights Difference
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg text-text-grey mb-8 leading-relaxed">
            Join a community of learners engaged in meaningful education and
            structured growth.
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

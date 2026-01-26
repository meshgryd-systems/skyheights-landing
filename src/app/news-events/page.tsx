"use client";

import Link from "next/link";
import Image from "next/image";
import { useGetNewsQuery } from "@/store/services/newsSlice";
import { useGetUpcomingEventsQuery } from "@/store/services/eventsSlice";
import { EVENT_STATUS } from "@/types";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";

export default function NewsEventsPage() {
  const { data: newsData, isLoading: newsLoading, error: newsError } =
    useGetNewsQuery({
      page: 1,
      limit: 6,
    });

  const { data: eventsData, isLoading: eventsLoading, error: eventsError } =
    useGetUpcomingEventsQuery({
      page: 1,
      limit: 10,
      status: EVENT_STATUS.PUBLISHED
    });



  const formatEventDate = (event: any) => {
    const startDate = new Date(event.startDate);
    const endDate = event.endDate ? new Date(event.endDate) : null;

    const formatDate = (date: Date) => {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };

    if (endDate && startDate.getTime() !== endDate.getTime()) {
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    } else {
      return formatDate(startDate);
    }
  };

  const upcomingEvents = eventsData?.data || [];

  return (
    <>
      {/* HERO - Phase 8: Show school is alive, structured, current */}
      <section className="relative bg-[#eee5b5] text-white py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/pics/14890.jpg"
            alt="Skyheights Academy News & Events"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container relative z-10">
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            News & Events
          </h1>
          <p className="text-lg font-light md:text-xl text-white/95 max-w-4xl leading-relaxed">
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
        {newsLoading ? (
          <div className="text-center py-12">
            <p className="text-text-grey">Loading news...</p>
          </div>
        ) : newsError ? (
          <div className="text-center py-12">
            <p className="text-text-grey">
              Unable to load news. Please try again later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container">
            {newsData?.data?.map((news: any) => (
              <div
                key={news.id}
                className="bg-light-grey rounded-[14px] overflow-hidden"
                style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
              >
                <div className="p-6">
                  {/* Category badge */}
                  {news.tags && news.tags.length > 0 && (
                    <div className="inline-block px-3 py-1 bg-royal-blue/10 rounded-full mb-4">
                      <span className="text-royal-blue text-xs font-semibold">
                        {news.tags[0]}
                      </span>
                    </div>
                  )}

                  {/* Date - Phase 8: Dates always visible */}
                  <p className="text-sm text-text-grey mb-3">
                    {news.publishedAt
                      ? new Date(news.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })
                      : news.createdAt
                        ? new Date(news.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })
                        : ""}
                  </p>

                  {/* Title - Phase 8: No ALL CAPS, no emojis */}
                  <h3 className="font-playfair font-bold text-xl text-deep-navy mb-3 leading-tight">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-text-grey text-sm leading-relaxed mb-4">
                    {news.excerpt || news.content?.substring(0, 150) + "..."}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/news-events/${news.slug || news.id}`}
                    className="text-heritage-brown font-medium text-sm hover:text-heritage-brown-dark transition-colors flex items-center"
                  >
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </SectionContainer>

      {/* EVENTS SECTION - Phase 8: Structure & planning */}
      <SectionContainer background="light">
        <SectionHeader
          title="Upcoming Events"
          subtitle="School calendar and scheduled activities"
        />
        {eventsLoading ? (
          <div className="text-center py-12">
            <p className="text-text-grey">Loading events...</p>
          </div>
        ) : eventsError ? (
          <div className="text-center py-12">
            <p className="text-text-grey">
              Unable to load events. Please try again later.
            </p>
          </div>
        ) : upcomingEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-grey">
              No upcoming events scheduled at this time.
            </p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {upcomingEvents.map((event: any) => (
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
                    {formatEventDate(event)}
                    {event.startTime && (
                      <span className="ml-2">
                        {event.startTime}
                        {event.endTime && ` - ${event.endTime}`}
                      </span>
                    )}
                  </p>

                  {/* Location */}
                  {event.location && (
                    <p className="text-sm text-text-grey mb-2">
                      Location: {event.location}
                    </p>
                  )}

                  {/* Description */}
                  {event.description && (
                    <p className="text-text-grey text-sm leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
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

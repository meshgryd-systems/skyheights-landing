"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useGetNewsBySlugQuery, useGetNewsByIdQuery } from "@/store/services/newsSlice";
import SectionContainer from "../../../components/SectionContainer";
import Button from "../../../components/Button";

export default function NewsDetailPage() {
  const params = useParams();
  const slugOrId = params?.slug as string;

  // Check if it looks like an ID (all numeric or UUID pattern)
  const isLikelyId = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(slugOrId) || /^\d+$/.test(slugOrId);

  // Use appropriate query based on whether it's an ID or slug
  const {
    data: newsBySlug,
    isLoading: loadingBySlug,
    error: errorBySlug
  } = useGetNewsBySlugQuery(slugOrId, {
    skip: !slugOrId || isLikelyId
  });

  const {
    data: newsById,
    isLoading: loadingById,
    error: errorById
  } = useGetNewsByIdQuery(slugOrId, {
    skip: !slugOrId || !isLikelyId
  });

  const news = newsBySlug || newsById;
  const isLoading = isLikelyId ? loadingById : loadingBySlug;
  const error = isLikelyId ? errorById : errorBySlug;

  if (isLoading) {
    return (
      <>
        <section className="bg-[#eee5b5] text-white py-20 md:py-28">
          <div className="container">
            <div className="animate-pulse">
              <div className="h-12 bg-white/20 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-white/20 rounded w-1/2"></div>
            </div>
          </div>
        </section>
        <SectionContainer background="white">
          <div className="text-center py-12">
            <p className="text-text-grey">Loading article...</p>
          </div>
        </SectionContainer>
      </>
    );
  }

  if (!isLoading && (error || !news)) {
    // Show not found state
    return (
      <>
        <section className="bg-[#eee5b5] text-white py-20 md:py-28">
          <div className="container">
            <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
              News Article Not Found
            </h1>
            <p className="text-lg font-light md:text-xl text-cream/95 max-w-4xl leading-relaxed">
              The news article you&apos;re looking for doesn&apos;t exist or has been
              removed.
            </p>
          </div>
        </section>
        <SectionContainer background="white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-text-grey mb-8">
              Please check the URL or return to the news directory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/news-events" variant="primary" size="lg">
                View All News
              </Button>
              <Button href="/" variant="secondary" size="lg">
                Go Home
              </Button>
            </div>
          </div>
        </SectionContainer>
      </>
    );
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <>
      {/* NEWS HERO */}
      <section className="bg-[#eee5b5] text-white py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Category/Tags */}
            {news?.tags && news?.tags.length > 0 && (
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-white/20 rounded-full">
                  <span className="text-sm font-semibold">{news?.tags[0]}</span>
                </div>
              </div>
            )}

            {/* Date */}
            <p className="text-sm text-cream/80 mb-4">
              {formatDate(news?.publishedAt) || formatDate(news?.createdAt)}
            </p>

            {/* Title */}
            <h1 className="text-[3rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
              {news?.title}
            </h1>

            {/* Excerpt */}
            {news?.excerpt && (
              <p className="text-lg md:text-xl text-cream/95 leading-relaxed">
                {news?.excerpt}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      {news?.featuredImage?.url && (
        <SectionContainer background="white">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-[14px] overflow-hidden">
              <Image
                src={news?.featuredImage.url}
                alt={news?.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
              />
            </div>
          </div>
        </SectionContainer>
      )}

      {/* NEWS CONTENT */}
      <SectionContainer background="white">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {/* Content */}
            <div
              className="text-text-grey leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: news?.content || news?.excerpt || ""
              }}
            />

            {/* Tags */}
            {news?.tags && news?.tags.length > 1 && (
              <div className="mt-12 pt-8 border-t border-divider-grey">
                <h3 className="font-playfair font-bold text-xl text-deep-navy mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {news?.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-light-grey rounded-full text-sm text-text-grey"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Metadata */}
            <div className="mt-12 pt-8 border-t border-divider-grey flex flex-wrap gap-6 text-sm text-text-grey">
              {news?.viewsCount !== undefined && (
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
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
                  <span>{news?.viewsCount} views</span>
                </div>
              )}
              {news?.publishedAt && (
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
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
                  <span>Published {formatDate(news?.publishedAt)}</span>
                </div>
              )}
            </div>
          </article>
        </div>
      </SectionContainer>

      {/* NAVIGATION CTA */}
      <SectionContainer background="light">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/news-events" variant="secondary" size="lg">
              Back to News & Events
            </Button>
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

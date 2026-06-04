"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { useGetGalleryQuery } from "@/store/services/gallerySlice";
import { GALLERY_STATUS, GALLERY_TYPE, GalleryItem } from "@/types";
import SectionContainer from "../../components/SectionContainer";
import Button from "../../components/Button";
import {
  HiBookOpen,
  HiBuildingOffice,
  HiCalendar,
  HiUserGroup
} from "react-icons/hi2";

const ITEMS_PER_PAGE = 12;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [allItems, setAllItems] = useState<GalleryItem[]>([]);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { data: galleryData, isLoading, error, isFetching } = useGetGalleryQuery(
    {
      page: currentPage,
      limit: ITEMS_PER_PAGE,
      status: GALLERY_STATUS.PUBLISHED,
      type: GALLERY_TYPE.IMAGE,
      ...(activeCategory !== "all" && { category: activeCategory })
    }
  );

  useEffect(() => {

    setTimeout(() => {
      setCurrentPage(1);
      setAllItems([]);
    }, 1000);

  }, [activeCategory]);

  useEffect(() => {
    if (galleryData?.data) {
      if (currentPage === 1) {
        setTimeout(() => {
          setAllItems(galleryData.data);
        }, 1000);
      } else {
        setTimeout(() => {
          setAllItems((prev) => {
            const existingIds = new Set(prev.map((item) => item.id));
            const newItems = galleryData.data.filter(
              (item) => !existingIds.has(item.id)
            );
            return [...prev, ...newItems];
          });
        }, 1000);
      }
    }
  }, [galleryData?.data, currentPage]);

  const hasMore = useMemo(() => {
    return galleryData?.meta?.hasMore === true;
  }, [galleryData?.meta?.hasMore]);

  useEffect(() => {
    if (!hasMore || isFetching || isLoading) return;

    const currentRef = loadMoreRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasMore && !isFetching && !isLoading) {
          setCurrentPage((prev) => prev + 1);
        }
      },
      {
        rootMargin: "200px"
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [hasMore, isFetching, isLoading]);

  const categories = [
    { id: "all", name: "All Photos" },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return allItems;
    }
    return allItems.filter((item) => item.category === activeCategory);
  }, [allItems, activeCategory]);

  return (
    <>
      <section
        className="relative bg-[#eee5b5] text-white py-20 md:py-28 overflow-hidden"
        style={{ backgroundImage: "url('/pics/14895.jpg')", backgroundSize: "cover", backgroundPositionY: "-150px" }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container relative z-10">
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight !text-white drop-shadow-lg">
            Gallery
          </h1>
          <p className="text-lg font-light md:text-xl !text-white/95 max-w-4xl leading-relaxed drop-shadow-md">
            A glimpse into life, learning, and growth at Skyheights Academy.
          </p>
        </div>
      </section>

      {/* GALLERY CATEGORIES - Phase 8: Filterable tabs (not dropdowns) */}
      <SectionContainer background="white">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-[10px] font-medium text-sm transition-all duration-250 ${activeCategory === category.id
                ? "bg-heritage-brown text-white"
                : "bg-light-grey text-deep-navy hover:bg-divider-grey"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* GALLERY GRID - Phase 8: Clean presentation, lazy loading ready */}
        {isLoading && currentPage === 1 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="rounded overflow-hidden bg-light-grey animate-pulse" style={{ aspectRatio: "4/3" }}></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-text-grey">
              Unable to load gallery. Please try again later.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div
                    className="relative bg-light-grey rounded overflow-hidden"
                    style={{ aspectRatio: "4/3" }}
                  >
                    {/* Actual image or placeholder */}
                    {item.media?.url ? (
                      <Image
                        src={item.media.url}
                        alt={item.title || item.description || "Gallery image"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-text-grey text-sm">{item.title}</p>
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-deep-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* SHORT CAPTION ONLY - Phase 8: No emojis, no slang */}
                  <p className="text-sm text-text-grey text-start">
                    {item.description || item.title}
                  </p>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && !isLoading && (
              <div className="text-center py-20 max-w-2xl mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-light-grey flex items-center justify-center" aria-hidden="true">
                  <svg className="w-10 h-10 text-text-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-3">
                  Photos Coming Soon
                </h3>
                <p className="text-text-grey leading-relaxed mb-8">
                  We are currently curating photos of our school activities,
                  facilities, events, and student life. Check back soon — our
                  gallery will be filled with moments from Skyheights Academy.
                </p>
                <div className="bg-light-grey rounded-xl p-6 text-left max-w-md mx-auto mb-8">
                  <p className="text-sm font-semibold text-deep-navy mb-3">Coming to the gallery:</p>
                  <ul className="space-y-2 text-sm text-text-grey">
                    {[
                      "Montessori room & Early Years activities",
                      "Science laboratory & ICT sessions",
                      "Playground & sports day events",
                      "School garden & Environmental Club",
                      "Annual events, assemblies & graduation"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-heritage-brown shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-text-grey">
                  Want to see the school for yourself?{" "}
                  <a href="/contact" className="text-heritage-brown font-medium hover:underline">
                    Book a campus visit →
                  </a>
                </p>
              </div>
            )}

            {/* Infinite scroll trigger */}
            {hasMore && (
              <div ref={loadMoreRef} className="py-8 min-h-[100px]">
                {isFetching && (
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-heritage-brown"></div>
                    <p className="text-text-grey mt-4">Loading more...</p>
                  </div>
                )}
              </div>
            )}

            {/* End of results */}
            {!hasMore && filteredItems.length > 0 && (
              <div className="text-center py-8">
                <p className="text-text-grey text-sm">
                  You&apos;ve reached the end of the gallery
                </p>
              </div>
            )}
          </>
        )}
      </SectionContainer>

      {/* COMBINED CTA - Phase 8: Never leave parents without next step */}
      <SectionContainer background="light">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-playfair font-bold text-deep-navy mb-6 leading-tight">
            Experience the Skyheights Difference
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg text-text-grey mb-8 leading-relaxed">
            Visit our campus to see our learning environment and facilities
            firsthand.
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

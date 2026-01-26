"use client";

import { useState } from "react";
import Image from "next/image";
import { useGetGalleryQuery } from "@/store/services/gallerySlice";
import { GALLERY_STATUS, GALLERY_TYPE } from "@/types";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
import {
  HiBookOpen,
  HiBuildingOffice,
  HiCalendar,
  HiUserGroup
} from "react-icons/hi2";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const { data: galleryData, isLoading, error } = useGetGalleryQuery({
    page: 1,
    limit: 50,
    status: GALLERY_STATUS.PUBLISHED,
    type: GALLERY_TYPE.IMAGE,
    ...(activeCategory !== "all" && { category: activeCategory })
  });

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "classrooms", name: "Classrooms & Learning" },
    { id: "facilities", name: "Facilities" },
    { id: "events", name: "Events & Activities" },
    { id: "student-life", name: "Student Life" }
  ];

  // Use API data or fallback to placeholder
  const galleryItems = galleryData?.data || [
    {
      id: 1,
      category: "classrooms",
      title: "Primary classroom learning session",
      caption: "Students engaged in interactive learning"
    },
    {
      id: 2,
      category: "classrooms",
      title: "Science practical lesson",
      caption: "Hands-on laboratory work"
    },
    {
      id: 3,
      category: "facilities",
      title: "School library",
      caption: "Quiet reading and research area"
    },
    {
      id: 4,
      category: "facilities",
      title: "Computer laboratory",
      caption: "Modern ICT facilities"
    },
    {
      id: 5,
      category: "facilities",
      title: "Science laboratory",
      caption: "Well-equipped for practicals"
    },
    {
      id: 6,
      category: "events",
      title: "Inter-house sports day",
      caption: "Annual sporting competition"
    },
    {
      id: 7,
      category: "events",
      title: "Cultural day celebration",
      caption: "Students in traditional attire"
    },
    {
      id: 8,
      category: "events",
      title: "Academic awards ceremony",
      caption: "Recognizing excellence"
    },
    {
      id: 9,
      category: "student-life",
      title: "Morning assembly",
      caption: "Students gathered for assembly"
    },
    {
      id: 10,
      category: "student-life",
      title: "Break time activities",
      caption: "Supervised recreation"
    },
    {
      id: 11,
      category: "student-life",
      title: "Club activities",
      caption: "Extra-curricular engagement"
    },
    {
      id: 12,
      category: "classrooms",
      title: "Group study session",
      caption: "Collaborative learning"
    }
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item: any) => item.category === activeCategory);

  return (
    <>
      {/* HERO - Phase 8: Let parents see the environment */}
      <section className="bg-[#eee5b5] text-white py-20 md:py-28">
        <div className="container">
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            Gallery
          </h1>
          <p className="text-lg font-light md:text-xl text-cream/95 max-w-4xl leading-relaxed">
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
              className={`px-6 py-3 rounded-[10px] font-medium text-sm transition-all duration-250 ${
                activeCategory === category.id
                  ? "bg-heritage-brown text-white"
                  : "bg-light-grey text-deep-navy hover:bg-divider-grey"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* GALLERY GRID - Phase 8: Clean presentation, lazy loading ready */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-text-grey">Loading gallery...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-text-grey">
              Unable to load gallery. Please try again later.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item: any) => (
                <div key={item.id} className="group cursor-pointer">
                  <div
                    className="relative bg-light-grey rounded-[14px] overflow-hidden"
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
                        <div className="text-center p-6">
                          <div className="w-16 h-16 mx-auto mb-4 text-heritage-brown flex items-center justify-center">
                            {item.category === "classrooms" && (
                              <HiBookOpen className="w-16 h-16" />
                            )}
                            {item.category === "facilities" && (
                              <HiBuildingOffice className="w-16 h-16" />
                            )}
                            {item.category === "events" && (
                              <HiCalendar className="w-16 h-16" />
                            )}
                            {item.category === "student-life" && (
                              <HiUserGroup className="w-16 h-16" />
                            )}
                          </div>
                          <p className="text-text-grey text-sm">{item.title}</p>
                        </div>
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
                  <p className="text-sm text-text-grey mt-3 text-center">
                    {item.description || item.title}
                  </p>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-text-grey">
                  No photos available in this category yet.
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

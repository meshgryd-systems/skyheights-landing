"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useGetStaffBySlugQuery, useGetStaffByIdQuery } from "@/store/services/staffSlice";
import { StaffMember, STAFF_TYPE } from "@/types";
import SectionContainer from "../../../components/SectionContainer";
import Button from "../../../components/Button";

export default function StaffDetailPage() {
  const params = useParams();
  const staffIdOrSlug = params?.staffId as string;

  // Check if it looks like an ID (UUID or numeric)
  const isLikelyId = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    staffIdOrSlug
  ) || /^\d+$/.test(staffIdOrSlug);

  // Use appropriate query based on whether it's an ID or slug
  const {
    data: staffBySlug,
    isLoading: loadingBySlug,
    error: errorBySlug
  } = useGetStaffBySlugQuery(staffIdOrSlug, {
    skip: !staffIdOrSlug || isLikelyId
  });

  const {
    data: staffById,
    isLoading: loadingById,
    error: errorById
  } = useGetStaffByIdQuery(staffIdOrSlug, {
    skip: !staffIdOrSlug || !isLikelyId
  });

  const staff = (staffBySlug || staffById) as StaffMember | undefined;
  const isLoading = isLikelyId ? loadingById : loadingBySlug;
  const error = isLikelyId ? errorById : errorBySlug;

  // Compute properties from backend data
  const fullName = staff ? `${staff.firstName} ${staff.lastName}`.trim() : "";

  // Map STAFF_TYPE to category for display
  const getCategoryFromType = (type?: STAFF_TYPE): "leadership" | "teaching" | "support" => {
    if (!type) return "support";
    switch (type) {
      case STAFF_TYPE.LEADERSHIP:
        return "leadership";
      case STAFF_TYPE.TEACHER:
        return "teaching";
      case STAFF_TYPE.ADMINISTRATION:
      case STAFF_TYPE.STAFF:
      default:
        return "support";
    }
  };

  const category = staff?.type
    ? getCategoryFromType(staff.type)
    : staff?.metadata?.category ||
    (staff?.position?.toLowerCase().includes("principal") ||
      staff?.position?.toLowerCase().includes("head")
      ? "leadership"
      : staff?.position?.toLowerCase().includes("teacher") ||
        staff?.position?.toLowerCase().includes("lecturer")
        ? "teaching"
        : "support");
  const department = staff?.metadata?.department;

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "leadership":
        return "bg-royal-blue";
      case "teaching":
        return "bg-heritage-brown";
      case "support":
        return "bg-royal-blue";
      default:
        return "bg-royal-blue";
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "leadership":
        return "Leadership Team";
      case "teaching":
        return "Teaching Staff";
      case "support":
        return "Support Staff";
      default:
        return "Staff";
    }
  };

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
            <p className="text-text-grey">Loading staff member...</p>
          </div>
        </SectionContainer>
      </>
    );
  }

  if (error || !staff) {
    return (
      <>
        <section className="bg-[#eee5b5] text-white py-20 md:py-28">
          <div className="container">
            <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
              Staff Member Not Found
            </h1>
            <p className="text-lg font-light md:text-xl text-cream/95 max-w-4xl leading-relaxed">
              The staff member you&apos;re looking for doesn&apos;t exist or has been
              removed.
            </p>
          </div>
        </section>
        <SectionContainer background="white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-text-grey mb-8">
              Please check the URL or return to the staff directory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/staff" variant="primary" size="lg">
                View All Staff
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

  return (
    <>
      {/* STAFF DETAIL HERO */}
      <section className="bg-[#eee5b5] text-white py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Staff Photo/Avatar */}
              <div className="shrink-0">
                {staff.photo?.url ? (
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                    <Image
                      src={staff.photo.url}
                      alt={fullName}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-32 h-32 md:w-40 md:h-40 ${getCategoryColor(
                      category
                    )} rounded-full flex items-center justify-center`}
                  >
                    <svg
                      className="w-16 h-16 md:w-20 md:h-20 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Staff Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm mb-4">
                    {getCategoryLabel(category)}
                  </span>
                </div>
                <h1 className="text-[3rem] md:text-[4rem] font-playfair font-bold mb-4 leading-tight">
                  {fullName}
                </h1>
                <p className="text-xl md:text-2xl text-cream/95 mb-2 font-semibold">
                  {staff.position}
                </p>
                {department && (
                  <p className="text-lg text-cream/90 mb-4">{department}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAFF DETAILS */}
      <SectionContainer background="white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Qualifications */}
            {staff.metadata?.qualifications && (
              <div
                className="bg-light-grey rounded-[14px] p-6"
                style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
              >
                <h3 className="font-playfair font-bold text-lg text-deep-navy mb-4">
                  Qualifications
                </h3>
                <p className="text-text-grey">
                  {staff.metadata.qualifications}
                </p>
              </div>
            )}

            {/* Experience */}
            {staff.metadata?.experience && (
              <div
                className="bg-light-grey rounded-[14px] p-6"
                style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
              >
                <h3 className="font-playfair font-bold text-lg text-deep-navy mb-4">
                  Experience
                </h3>
                <p className="text-text-grey">{staff.metadata.experience}</p>
              </div>
            )}

            {/* Specialization */}
            {staff.metadata?.specialization && (
              <div
                className="bg-light-grey rounded-[14px] p-6"
                style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
              >
                <h3 className="font-playfair font-bold text-lg text-deep-navy mb-4">
                  Specialization
                </h3>
                <p className="text-text-grey">
                  {staff.metadata.specialization}
                </p>
              </div>
            )}

            {/* Contact Information */}
            {(staff.email || staff.phoneNumber) && (
              <div
                className="bg-light-grey rounded-[14px] p-6"
                style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
              >
                <h3 className="font-playfair font-bold text-lg text-deep-navy mb-4">
                  Contact
                </h3>
                <div className="space-y-2">
                  {staff.email && (
                    <p className="text-text-grey text-sm">
                      <a
                        href={`mailto:${staff.email}`}
                        className="hover:text-royal-blue transition-colors"
                      >
                        {staff.email}
                      </a>
                    </p>
                  )}
                  {staff.phoneNumber && (
                    <p className="text-text-grey text-sm">
                      <a
                        href={`tel:${staff.phoneNumber}`}
                        className="hover:text-royal-blue transition-colors"
                      >
                        {staff.phoneNumber}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Bio */}
          {staff.bio && (
            <div className="mb-12">
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-6">
                About
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-text-grey leading-relaxed mb-6">
                  {staff.bio}
                </p>
              </div>
            </div>
          )}

          {/* Achievements */}
          {staff.metadata?.achievements &&
            Array.isArray(staff.metadata.achievements) &&
            staff.metadata.achievements.length > 0 && (
              <div className="mb-12">
                <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-6">
                  Key Achievements
                </h2>
                <ul className="space-y-4">
                  {staff.metadata.achievements.map(
                    (achievement: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-light-grey rounded-[10px]"
                        style={{
                          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)"
                        }}
                      >
                        <svg
                          className="w-5 h-5 text-royal-blue shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-text-grey">{achievement}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

          {/* Social Links */}
          {staff.socialLinks &&
            (staff.socialLinks.linkedin ||
              staff.socialLinks.twitter ||
              staff.socialLinks.facebook ||
              staff.socialLinks.instagram) && (
              <div className="mb-12">
                <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-6">
                  Connect
                </h2>
                <div className="flex flex-wrap gap-4">
                  {staff.socialLinks.linkedin && (
                    <a
                      href={staff.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-royal-blue text-white rounded-[10px] hover:bg-royal-blue/90 transition-colors"
                    >
                      LinkedIn
                    </a>
                  )}
                  {staff.socialLinks.twitter && (
                    <a
                      href={staff.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-royal-blue text-white rounded-[10px] hover:bg-royal-blue/90 transition-colors"
                    >
                      Twitter
                    </a>
                  )}
                  {staff.socialLinks.facebook && (
                    <a
                      href={staff.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-royal-blue text-white rounded-[10px] hover:bg-royal-blue/90 transition-colors"
                    >
                      Facebook
                    </a>
                  )}
                  {staff.socialLinks.instagram && (
                    <a
                      href={staff.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-royal-blue text-white rounded-[10px] hover:bg-royal-blue/90 transition-colors"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            )}
        </div>
      </SectionContainer>

      {/* NAVIGATION CTA */}
      <SectionContainer background="light">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/staff" variant="secondary" size="lg">
              View All Staff
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

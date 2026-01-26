"use client";

import Link from "next/link";
import Image from "next/image";
import { useGetStaffQuery } from "@/store/services/staffSlice";
import { STAFF_STATUS, StaffMemberWithComputed, StaffMember } from "@/types";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";

// Helper function to compute staff properties
function computeStaffProperties(staff: StaffMember): StaffMemberWithComputed {
  const fullName = `${staff.firstName} ${staff.lastName}`.trim();
  const category =
    staff.metadata?.category ||
    (staff.position?.toLowerCase().includes("principal") ||
      staff.position?.toLowerCase().includes("head")
      ? "leadership"
      : staff.position?.toLowerCase().includes("teacher") ||
        staff.position?.toLowerCase().includes("lecturer")
        ? "teaching"
        : "support");
  const department = staff.metadata?.department;

  return {
    ...staff,
    fullName,
    category,
    department
  };
}

// Helper to generate slug from staff member
function getStaffSlug(staff: StaffMember): string {
  return (
    staff.metadata?.slug ||
    `${staff.firstName}-${staff.lastName}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
  );
}

export default function StaffPage() {
  const { data: staffData, isLoading, error } = useGetStaffQuery({
    page: 1,
    limit: 100,
    status: STAFF_STATUS.ACTIVE
  });

  const allStaff = (staffData?.data || []).map(computeStaffProperties);

  // Organize staff by category and department
  const leadershipTeam = allStaff.filter(
    (staff) => staff.category === "leadership"
  );
  const teachingStaff = allStaff.filter(
    (staff) => staff.category === "teaching"
  );
  const supportStaff = allStaff.filter(
    (staff) => staff.category === "support"
  );

  // Group teaching staff by department
  const departments = Array.from(
    new Set(teachingStaff.map((staff) => staff.department).filter(Boolean))
  );

  const teachingStaffByDept = departments.map((dept) => ({
    department: dept,
    staff: teachingStaff.filter((staff) => staff.department === dept)
  }));


  return (
    <>
      {/* STAFF HERO - Phase 6: Calm academic imagery, institutional credibility */}
      <section className="bg-[#eee5b5] text-white py-20 md:py-28">
        <div className="container">
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            Our Staff & Leadership Team
          </h1>
          <p className="text-lg font-light md:text-xl text-cream/95 max-w-4xl leading-relaxed">
            Meet the experienced and dedicated educators who make Skyheights
            Academy a place of excellence, growth, and achievement.
          </p>
        </div>
      </section>

      {/* LEADERSHIP TEAM - Phase 6: Core leadership */}
      <SectionContainer background="white">
        <SectionHeader
          title="Leadership Team"
          subtitle="Experienced educators leading our vision"
          centered
        />
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-text-grey text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            Our leadership team brings together years of educational experience,
            academic expertise, and a shared commitment to student success and
            institutional excellence.
          </p>
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-text-grey">Loading staff...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-text-grey">
                Unable to load staff. Please try again later.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((staff) => (
                <Link
                  key={staff.id}
                  href={`/staff/${getStaffSlug(staff)}`}
                  className="bg-light-grey rounded-[14px] p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer block"
                  style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
                >
                  {staff.photo?.url ? (
                    <div className="w-24 h-24 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                      <Image
                        src={staff.photo.url}
                        alt={staff.fullName}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-4">
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
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                  <h4 className="font-playfair font-bold text-xl text-deep-navy mb-2 hover:text-heritage-brown transition-colors">
                    {staff.fullName}
                  </h4>
                  <p className="text-heritage-brown font-semibold text-sm mb-2">
                    {staff.position}
                  </p>
                  {staff.metadata?.qualifications && (
                    <p className="text-text-grey text-xs mb-1">
                      {staff.metadata.qualifications}
                    </p>
                  )}
                  {staff.metadata?.experience && (
                    <p className="text-text-grey text-xs mb-3">
                      {staff.metadata.experience} experience
                    </p>
                  )}
                  {staff.bio && (
                    <p className="text-text-grey text-sm leading-relaxed">
                      {staff.bio.substring(0, 150)}
                      {staff.bio.length > 150 ? "..." : ""}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </SectionContainer>

      {/* TEACHING STAFF - Phase 6: Organized by department */}
      <SectionContainer background="light">
        <SectionHeader
          title="Teaching Staff"
          subtitle="Qualified educators across all levels"
          centered
        />
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-text-grey text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            Our teaching staff consists of qualified, dedicated professionals
            committed to delivering quality education and supporting student
            growth across all academic levels.
          </p>

          {teachingStaffByDept.map((department, deptIndex) => (
            <div key={deptIndex} className="mb-12 last:mb-0">
              <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-6 text-center">
                {department.department}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {department.staff.map((staff) => (
                  <Link
                    key={staff.id}
                    href={`/staff/${getStaffSlug(staff)}`}
                    className="bg-white rounded-[10px] p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer block"
                    style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
                  >
                    {staff.photo?.url ? (
                      <div className="w-16 h-16 bg-heritage-brown rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                        <Image
                          src={staff.photo.url}
                          alt={staff.fullName}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-heritage-brown rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-white"
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
                    )}
                    <h4 className="font-playfair font-bold text-lg text-deep-navy mb-2 text-center hover:text-heritage-brown transition-colors">
                      {staff.fullName}
                    </h4>
                    <p className="text-heritage-brown font-semibold text-sm mb-2 text-center">
                      {staff.position}
                    </p>
                    {staff.metadata?.qualifications && (
                      <p className="text-text-grey text-xs mb-2 text-center">
                        {staff.metadata.qualifications}
                      </p>
                    )}
                    {staff.metadata?.specialization && (
                      <p className="text-text-grey text-xs text-center">
                        {staff.metadata.specialization}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* SUPPORT STAFF - Phase 6: Essential support services */}
      <SectionContainer background="white">
        <SectionHeader
          title="Support Staff"
          subtitle="Dedicated professionals supporting our operations"
          centered
        />
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-text-grey text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            Our support staff plays a crucial role in ensuring smooth operations,
            student welfare, and the overall success of our educational
            environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportStaff.map((staff) => (
              <Link
                key={staff.id}
                href={`/staff/${getStaffSlug(staff)}`}
                className="bg-light-grey rounded-[10px] p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer block"
                style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
              >
                {staff.photo?.url ? (
                  <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <Image
                      src={staff.photo.url}
                      alt={staff.fullName}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
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
                  </div>
                )}
                <h4 className="font-playfair font-bold text-lg text-deep-navy mb-2 hover:text-heritage-brown transition-colors">
                  {staff.fullName}
                </h4>
                <p className="text-heritage-brown font-semibold text-sm mb-3">
                  {staff.position}
                </p>
                {staff.bio && (
                  <p className="text-text-grey text-sm leading-relaxed">
                    {staff.bio.substring(0, 100)}
                    {staff.bio.length > 100 ? "..." : ""}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* CTA SECTION - Phase 6: Connection opportunity */}
      <SectionContainer background="light">
        <div className="max-w-4xl mx-auto bg-cream rounded-[14px] p-8 md:p-12 text-center">
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-playfair font-bold text-deep-navy mb-6 leading-tight">
            Interested in Joining Our Team?
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg text-text-grey mb-8 leading-relaxed max-w-2xl mx-auto">
            We are always looking for qualified, dedicated educators who share
            our passion for excellence. If you are interested in joining our
            team, please reach out to us.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Contact Us
          </Button>
        </div>
      </SectionContainer>
    </>
  );
}

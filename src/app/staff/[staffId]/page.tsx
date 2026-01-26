import { notFound } from "next/navigation";
import Link from "next/link";
import SectionContainer from "../../../components/SectionContainer";
import SectionHeader from "../../../components/SectionHeader";
import Button from "../../../components/Button";
import { getStaffById, getAllStaff } from "../staffData";

interface PageProps {
  params: Promise<{
    staffId: string;
  }>;
}

export async function generateStaticParams() {
  const allStaff = getAllStaff();
  return allStaff.map((staff) => ({
    staffId: staff.id
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { staffId } = await params;
  const staff = getStaffById(staffId);

  if (!staff) {
    return {
      title: "Staff Member Not Found | Skyheights Academy"
    };
  }

  return {
    title: `${staff.name} - ${staff.role} | Skyheights Academy`,
    description: staff.description || staff.bio || `${staff.name} - ${staff.role} at Skyheights Academy`
  };
}

export default async function StaffDetailPage({ params }: PageProps) {
  const { staffId } = await params;
  const staff = getStaffById(staffId);

  if (!staff) {
    notFound();
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
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

  const getCategoryLabel = (category: string) => {
    switch (category) {
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

  return (
    <>
      {/* STAFF DETAIL HERO */}
      <section className="bg-[#eee5b5] text-white py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Staff Photo/Avatar */}
              <div className="flex-shrink-0">
                <div
                  className={`w-32 h-32 md:w-40 md:h-40 ${getCategoryColor(
                    staff.category
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
              </div>

              {/* Staff Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm mb-4">
                    {getCategoryLabel(staff.category)}
                  </span>
                </div>
                <h1 className="text-[3rem] md:text-[4rem] font-playfair font-bold mb-4 leading-tight">
                  {staff.name}
                </h1>
                <p className="text-xl md:text-2xl text-cream/95 mb-2 font-semibold">
                  {staff.role}
                </p>
                {staff.department && (
                  <p className="text-lg text-cream/90 mb-4">
                    {staff.department}
                  </p>
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
            <div
              className="bg-light-grey rounded-[14px] p-6"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
            >
              <h3 className="font-playfair font-bold text-lg text-deep-navy mb-4">
                Qualifications
              </h3>
              <p className="text-text-grey">{staff.qualifications}</p>
            </div>

            {/* Experience */}
            {staff.experience && (
              <div
                className="bg-light-grey rounded-[14px] p-6"
                style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
              >
                <h3 className="font-playfair font-bold text-lg text-deep-navy mb-4">
                  Experience
                </h3>
                <p className="text-text-grey">{staff.experience}</p>
              </div>
            )}

            {/* Specialization */}
            {staff.specialization && (
              <div
                className="bg-light-grey rounded-[14px] p-6"
                style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
              >
                <h3 className="font-playfair font-bold text-lg text-deep-navy mb-4">
                  Specialization
                </h3>
                <p className="text-text-grey">{staff.specialization}</p>
              </div>
            )}
          </div>

          {/* Bio/Description */}
          <div className="mb-12">
            <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-6">
              About
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-text-grey leading-relaxed mb-6">
                {staff.bio || staff.description}
              </p>
            </div>
          </div>

          {/* Achievements */}
          {staff.achievements && staff.achievements.length > 0 && (
            <div className="mb-12">
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-6">
                Key Achievements
              </h2>
              <ul className="space-y-4">
                {staff.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-light-grey rounded-[10px]"
                    style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
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
                ))}
              </ul>
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

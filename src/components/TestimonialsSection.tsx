"use client";

import { useGetTestimonialsQuery } from "@/store/services/testimonialsSlice";
import SectionHeader from "./SectionHeader";

const STAR_RATINGS = [1, 2, 3, 4, 5];

const FALLBACK_TESTIMONIALS = [
  {
    id: "1",
    name: "Mrs. Adaeze Okonkwo",
    role: "Parent — Primary 4 Student",
    quote:
      "Skyheights Academy transformed my daughter's confidence. The teachers are attentive, the environment is safe, and the academic standards are exceptional. I couldn't have made a better choice.",
    rating: 5
  },
  {
    id: "2",
    name: "Mr. Emeka Nwosu",
    role: "Parent — Secondary 2 Student",
    quote:
      "My son's academic performance improved dramatically after joining Skyheights. The blended curriculum is outstanding and the discipline instilled in students is exactly what every parent hopes for.",
    rating: 5
  },
  {
    id: "3",
    name: "Mrs. Fatima Bello",
    role: "Parent — Nursery & Primary Students",
    quote:
      "We enrolled both children here and have never regretted it. The Montessori approach in early years is excellent, and the smooth transition to primary has been seamless. Truly a school of excellence.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const { data, isLoading } = useGetTestimonialsQuery({ limit: 6 });

  const testimonials =
    data?.data && data.data.length > 0 ? data.data : FALLBACK_TESTIMONIALS;

  if (isLoading) {
    return (
      <section className="bg-light-grey py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-8 animate-pulse">
                <div className="flex gap-1 mb-4">
                  {STAR_RATINGS.map((s) => (
                    <div key={s} className="w-4 h-4 rounded bg-divider-grey" />
                  ))}
                </div>
                <div className="h-24 bg-divider-grey rounded mb-6" />
                <div className="h-4 bg-divider-grey rounded w-2/3 mb-2" />
                <div className="h-3 bg-divider-grey rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-light-grey py-20">
      <div className="container">
        <SectionHeader
          title="What Parents Are Saying"
          subtitle="Hear from families who chose Skyheights Academy for their children's education"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-sm border border-divider-grey hover:shadow-md transition-[box-shadow] duration-300 flex flex-col"
            >
              <div className="flex gap-1 mb-5" aria-label={`${testimonial.rating} out of 5 stars`}>
                {STAR_RATINGS.map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${
                      star <= Math.round(testimonial.rating)
                        ? "text-amber-400"
                        : "text-divider-grey"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-text-grey leading-relaxed mb-6 flex-grow italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <figcaption>
                <p className="font-playfair font-bold text-deep-navy">
                  {testimonial.name}
                </p>
                <p className="text-sm text-heritage-brown font-medium mt-0.5">
                  {testimonial.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

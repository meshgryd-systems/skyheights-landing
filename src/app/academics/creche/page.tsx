import SectionContainer from "../../../components/SectionContainer";
import SectionHeader from "../../../components/SectionHeader";
import Button from "../../../components/Button";
import Image from "next/image";

export const metadata = {
  title: "Creche School in Lugbe Abuja | Skyheights Academy",
  description:
    "Skyheights Academy's Creche programme in Lugbe, Abuja offers world-class early years care for children aged 6 months–2 years. Montessori-inspired, CCTV-monitored, and developmentally focused."
};

const WHY_ITEMS = [
  {
    title: "A Foundation That Lasts a Lifetime",
    description:
      "The first two years of a child's life represent the most critical window for brain development. The connections formed during this period directly influence how a child learns, communicates, and relates to others for years to come. Our Creche programme is intentionally designed to maximise this window."
  },
  {
    title: "Qualified, Caring Professionals",
    description:
      "Every Creche caregiver at Skyheights Academy is certified in early childhood development and undergoes continuous professional training. We don't just employ people who like children — we invest in professionals who understand how children develop."
  },
  {
    title: "Small Ratios. Real Attention.",
    description:
      "With a maximum of 8–10 children per caregiver, your child receives individualised attention that a larger setting simply cannot provide. Every milestone, every moment of curiosity, every need is noticed and responded to."
  },
  {
    title: "Safety You Can Count On",
    description:
      "Our Creche facility operates under 24-hour CCTV surveillance with controlled access points. Hygiene protocols are strictly maintained throughout each day. You drop off your child knowing they are in one of the safest environments in Lugbe."
  }
];

const DAILY_ACTIVITIES = [
  { time: "7:30 – 8:30 AM", activity: "Arrival, welcome, and free sensory play" },
  { time: "8:30 – 9:00 AM", activity: "Morning snack and social bonding time" },
  { time: "9:00 – 9:30 AM", activity: "Guided movement & motor skills exercises" },
  { time: "9:30 – 10:30 AM", activity: "Montessori-inspired learning activities" },
  { time: "10:30 – 11:30 AM", activity: "Outdoor / indoor sensory exploration" },
  { time: "11:30 AM – 12:30 PM", activity: "Lunch and hygiene routine" },
  { time: "12:30 – 2:30 PM", activity: "Nap / quiet rest time" },
  { time: "2:30 – 3:30 PM", activity: "Music, singing, and creative play" },
  { time: "3:30 – 4:00 PM", activity: "Story time and day-end circle" }
];

const MONTESSORI_FEATURES = [
  {
    title: "The Montessori Room",
    description:
      "Our dedicated Montessori room is a carefully prepared environment filled with purpose-designed materials that invite independent exploration. Low shelves, natural textures, and child-sized furniture allow every child to move, choose, and discover at their own pace — exactly as Maria Montessori intended.",
    highlight: "Child-led exploration in a rich, prepared environment"
  },
  {
    title: "Sensory Stations",
    description:
      "From sand trays and water tables to tactile boards and light tables, our sensory stations stimulate all five senses simultaneously — supporting cognitive processing, language development, and emotional regulation.",
    highlight: "Multi-sensory learning that stimulates brain development"
  },
  {
    title: "Language-Rich Environment",
    description:
      "Our caregivers engage in constant, high-quality verbal interaction — narrating activities, naming objects, singing songs, and reading aloud. Research shows that vocabulary exposure in the early years is one of the strongest predictors of later academic success.",
    highlight: "Vocabulary development from day one"
  }
];

export default function CrechePage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          backgroundImage: "url('/pics/14920.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top"
        }}
        className="relative text-white py-20 md:py-28 overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/45 to-black/20"></div>
        <div className="container relative z-10">
          <div className="inline-block px-4 py-2 bg-white/15 rounded-full mb-4">
            <span className="text-white text-sm font-medium tracking-wide">
              Ages 6 months – 2 years
            </span>
          </div>
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight !text-white">
            Creche Programme
          </h1>
          <p className="text-lg font-light md:text-xl !text-white/90 max-w-3xl leading-relaxed mb-10">
            The most critical window of your child&apos;s development, handled
            with expertise, warmth, and intention. Our Creche is where strong
            futures begin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/admissions" variant="primary" size="lg">
              Enrol Your Child
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Book a Visit
            </Button>
          </div>
        </div>
      </section>

      {/* WHY EARLY YEARS MATTERS — THE PARENT CASE */}
      <SectionContainer background="white">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <SectionHeader
            title="Why the Early Years Matter More Than You Think"
            subtitle="Parents who are particular about their child's foundation are right to be. The Creche years are not preparation for learning — they are learning. Here is why Skyheights Academy is the right choice for this stage."
            centered
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {WHY_ITEMS.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-light-grey rounded-xl border-l-4 border-heritage-brown"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-heritage-brown text-white flex items-center justify-center font-playfair font-bold text-sm flex-shrink-0" aria-hidden="true">
                  {index + 1}
                </div>
                <h3 className="font-playfair font-bold text-xl text-deep-navy">
                  {item.title}
                </h3>
              </div>
              <p className="text-text-grey leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* MONTESSORI ENVIRONMENT */}
      <SectionContainer background="cream">
        <SectionHeader
          title="Our Early Years Environment"
          subtitle="Purposefully designed spaces that nurture curiosity, independence, and joy"
          centered
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {MONTESSORI_FEATURES.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden">
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-heritage-brown/10 text-heritage-brown text-xs font-semibold rounded-full mb-4 uppercase tracking-wide">
                  {feature.highlight}
                </span>
                <h3 className="font-playfair font-bold text-xl text-deep-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-grey text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CURRICULUM APPROACH */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader title="Curriculum Approach" />
            <p className="text-text-grey leading-relaxed mb-8">
              Our Creche curriculum is guided by Montessori principles adapted
              for the youngest learners, supplemented by Nigerian early
              childhood development standards. Every activity has developmental
              intention behind it — nothing happens by accident in our Creche.
            </p>
            <div className="space-y-4">
              {[
                {
                  approach: "Montessori-Inspired Exploration",
                  description:
                    "Child-led discovery with attentive adult observation and gentle guidance"
                },
                {
                  approach: "Play-Based Learning",
                  description:
                    "Structured and free play as the primary vehicle for early cognitive development"
                },
                {
                  approach: "Sensory Integration",
                  description:
                    "Activities that stimulate all five senses to build neural pathways"
                },
                {
                  approach: "Language Immersion",
                  description:
                    "Constant verbal engagement, narration, songs, and story-reading"
                },
                {
                  approach: "Social-Emotional Learning",
                  description:
                    "Group activities that build turn-taking, empathy, and emotional expression"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-light-grey rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-heritage-brown mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-1">{item.approach}</h4>
                    <p className="text-text-grey text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden relative h-[480px] bg-light-grey">
            <Image
              src="/pics/14875.jpg"
              alt="Early years learning environment at Skyheights Academy"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6 text-white">
                <p className="font-playfair font-bold text-xl drop-shadow-lg">Learning Through Play</p>
                <p className="text-sm !text-white/85 drop-shadow-md">Every moment is a learning opportunity</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* DAILY ROUTINE */}
      <SectionContainer background="light">
        <SectionHeader
          title="A Typical Day in Our Creche"
          subtitle="Structure gives young children security. Flexibility honours their needs."
          centered
        />
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden border border-divider-grey">
            {DAILY_ACTIVITIES.map((slot, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-5 ${index < DAILY_ACTIVITIES.length - 1 ? "border-b border-divider-grey" : ""}`}
              >
                <div className="flex-shrink-0 min-w-[130px] text-sm font-medium text-heritage-brown">
                  {slot.time}
                </div>
                <p className="text-deep-navy text-sm">{slot.activity}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-text-grey mt-5">
            Routines are adapted based on the developmental needs of the children in each group.
          </p>
        </div>
      </SectionContainer>

      {/* CLASS ENVIRONMENT */}
      <SectionContainer background="white">
        <SectionHeader title="Class Environment & Safety" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {[
            {
              feature: "Maximum 8–10 Children Per Caregiver",
              detail:
                "Low ratios ensure every child receives genuine individualised attention and care throughout the day."
            },
            {
              feature: "Certified & Trained Caregivers",
              detail:
                "All staff hold early childhood development certifications and undergo regular professional development."
            },
            {
              feature: "24-Hour CCTV Surveillance",
              detail:
                "Complete coverage of all Creche spaces gives parents complete peace of mind at all times."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-light-grey p-6 rounded-xl text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-heritage-brown/15 flex items-center justify-center" aria-hidden="true">
                <svg className="w-6 h-6 text-heritage-brown" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-playfair font-bold text-lg text-deep-navy mb-3">
                {item.feature}
              </h4>
              <p className="text-text-grey text-sm leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Parent Communication callout */}
        <div className="max-w-3xl mx-auto bg-heritage-brown/8 border-l-4 border-heritage-brown p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-heritage-brown shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0110 1.944 11.954 11.954 0 0117.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="font-playfair font-bold text-deep-navy mb-2">Daily Parent Updates</h4>
              <p className="text-text-grey text-sm leading-relaxed">
                We maintain daily communication with parents on feeding, sleeping, activities, and
                developmental milestones. Regular parent–caregiver conferences ensure your family
                is always a full partner in your child&apos;s growth and progress.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer background="light">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-playfair font-bold text-[2.5rem] text-deep-navy mb-4 leading-tight">
            Give Your Child the Best Possible Start
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg text-text-grey mb-10 leading-relaxed">
            Spaces in our Creche programme are limited to maintain our small class sizes.
            Enquire early to secure your child&apos;s place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/admissions" variant="primary" size="lg">
              Apply for Admission
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Book a School Visit
            </Button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

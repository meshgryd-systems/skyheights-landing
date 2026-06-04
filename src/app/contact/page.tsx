import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import ContactForm from "../../components/ContactFormWrapper";
import {
  HiBookOpen,
  HiCurrencyDollar,
  HiInformationCircle,
  HiClipboardDocumentList,
} from "react-icons/hi2";

export const metadata = {
  title: "Contact Us | Skyheights Academy",
  description:
    "Get in touch with Skyheights Academy. Visit us, call, or send us a message. We are here to help with your enquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('/pics/14940.jpg')",
          backgroundSize: "cover",
          backgroundPositionY: "-150px",
        }}
        className="relative bg-[#eee5b5] text-white py-20 md:py-28 overflow-hidden"
      >
        {/* Background Image */}
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container relative z-10">
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-2 text-white! drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg font-light md:text-xl !text-white/95 max-w-3xl drop-shadow-md">
            We&apos;re here to answer your questions and help you on your
            journey with Skyheights Academy
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ),
              title: "Visit Us",
              content: (
                <>
                  <p className="mb-2">Skyheights Academy</p>
                  <p className="mb-2">Phase 4, Palmheights Homes</p>
                  <p className="mb-2">
                    Queen Amudat Giwa Avenue, Oxford Street
                  </p>
                  <p className="mb-2">off V.O.N Road</p>
                  <p>Lugbe 900107, Federal Capital Territory</p>
                </>
              ),
            },
            {
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              ),
              title: "Call Us",
              content: (
                <>
                  <p className="mb-2">
                    <a
                      href="tel:+2349095441116"
                      className="hover:text-royal-blue transition-colors"
                    >
                      +234 909 544 1116
                    </a>
                  </p>
                  <p className="text-sm text-text-grey mt-3">
                    Mon - Fri: 8:00 AM - 4:00 PM
                  </p>
                </>
              ),
            },
            {
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              ),
              title: "Email Us",
              content: (
                <>
                  <p className="mb-2">
                    <a
                      href="mailto:info@skyheightsacademy.ng"
                      className="hover:text-royal-blue transition-colors"
                    >
                      info@skyheightsacademy.ng
                    </a>
                  </p>
                  <p className="mb-2">
                    <a
                      href="mailto:admissions@skyheightsacademy.ng"
                      className="hover:text-royal-blue transition-colors"
                    >
                      admissions@skyheightsacademy.ng
                    </a>
                  </p>
                  <p className="text-sm text-text-grey mt-3">
                    We respond within 24 hours
                  </p>
                </>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-light-grey p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-royal-blue rounded-full text-white mb-4">
                {item.icon}
              </div>
              <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                {item.title}
              </h3>
              <div className="text-text-grey">{item.content}</div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Contact Form and Map */}
      <SectionContainer background="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <SectionTitle>Send Us a Message</SectionTitle>
            <p className="text-text-grey mb-8">
              Have a question or need more information? Fill out the form below
              and our team will get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>

          {/* Map and Office Hours */}
          <div>
            <SectionTitle>Find Us on the Map</SectionTitle>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <iframe
                className="w-full h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.30103774098!2d7.359106!3d8.955869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOC45NTU4NjkgNy4zNTkxMDY!5e0!3m2!1sen!2sng!4v1737900000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-6">
              Office Hours
            </h3>
            <div className="space-y-4">
              {[
                { day: "Monday - Friday", time: "8:00 AM - 4:00 PM" },
                { day: "Saturday", time: "9:00 AM - 1:00 PM" },
                { day: "Sunday", time: "Closed" },
              ].map((schedule, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-divider-grey last:border-0"
                >
                  <span className="font-medium text-deep-navy">
                    {schedule.day}
                  </span>
                  <span className="text-text-grey">{schedule.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-royal-blue/10 rounded-lg">
              <p className="text-sm text-deep-navy">
                <strong>Note:</strong> Visiting hours may vary during holidays
                and school breaks. Please call ahead to confirm availability.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Quick Links */}
      <SectionContainer background="cream">
        <SectionTitle centered>Quick Help</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              question: "How do I apply?",
              answer:
                "Visit our Admissions page for the complete application process and requirements.",
              link: "/admissions",
            },
            {
              question: "What are your fees?",
              answer:
                "Contact our Finance Office for detailed fee structure and payment plans.",
              link: "mailto:finance@skyheightsacademy.ng",
            },
            {
              question: "Can I schedule a tour?",
              answer:
                "Yes! Use the contact form above or call us to schedule a campus visit.",
              link: "#",
            },
            {
              question: "What curriculum do you offer?",
              answer:
                "We offer a blend of Nigerian, British, and Montessori curriculum.",
              link: "/academics",
            },
            {
              question: "Do you have transportation?",
              answer:
                "Yes, we provide safe school bus services covering major areas in Abuja.",
              link: "#",
            },
            {
              question: "What are your class sizes?",
              answer:
                "We maintain small class sizes to ensure personalized attention for each student.",
              link: "#",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-playfair font-bold text-lg text-deep-navy mb-2">
                {item.question}
              </h4>
              <p className="text-text-grey text-sm mb-3">{item.answer}</p>
              <a
                href={item.link}
                className="text-royal-blue font-medium text-sm hover:underline flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
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
              </a>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Social Media */}
      <SectionContainer background="white">
        <div className="text-center max-w-3xl mx-auto">
          <SectionTitle centered className="mb-2">
            Connect With Us on Social Media
          </SectionTitle>
          <p className="text-text-grey max-w-lg mx-auto mb-8">
            Follow us on social media for daily updates, photos, announcements,
            and school activities.
          </p>
          <div className="flex justify-center space-x-6">
            {[
              {
                name: "Facebook",
                icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
              },
              {
                name: "Twitter",
                icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
              },
              {
                name: "Instagram",
                icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
              },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 bg-heritage-brown hover:bg-royal-blue rounded-full flex items-center justify-center text-white transition-colors"
                aria-label={social.name}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

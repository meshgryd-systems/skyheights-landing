import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";

export const metadata = {
  title: "Privacy Policy | Skyheights Academy",
  description:
    "Read our privacy policy to understand how we collect, use, and protect your personal information."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-heritage-brown to-deep-navy text-white py-20 md:py-28">
        <div className="container">
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-2">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl">
            Last updated: January 14, 2026
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <SectionContainer background="white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8 text-text-grey">
            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                1. Introduction
              </h2>
              <p>
                Skyheights Academy ("we," "our," or "us") is committed to
                protecting the privacy and security of personal information
                provided to us by students, parents, guardians, and visitors.
                This Privacy Policy outlines how we collect, use, store, and
                protect your personal information.
              </p>
              <p>
                By using our website or services, you consent to the practices
                described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                2. Information We Collect
              </h2>
              <h3 className="font-semibold text-lg text-deep-navy mb-3">
                2.1 Personal Information
              </h3>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Student information (name, date of birth, address, medical
                  information)
                </li>
                <li>
                  Parent/guardian contact details (name, email, phone number,
                  address)
                </li>
                <li>Academic records and assessment results</li>
                <li>
                  Photographs and videos of students for educational and
                  promotional purposes
                </li>
                <li>Financial information for fee payments</li>
                <li>Emergency contact information</li>
              </ul>

              <h3 className="font-semibold text-lg text-deep-navy mb-3 mt-6">
                2.2 Website Usage Information
              </h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website addresses</li>
                <li>Cookie data (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                3. How We Use Your Information
              </h2>
              <p>
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Providing educational services and managing student enrollment
                </li>
                <li>
                  Communicating with parents and guardians about student
                  progress
                </li>
                <li>
                  Processing fee payments and maintaining financial records
                </li>
                <li>Ensuring student safety and security</li>
                <li>Improving our services and website functionality</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>
                  Sending school updates, newsletters, and announcements (with
                  consent)
                </li>
                <li>
                  Marketing and promotional activities (with explicit consent)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p>
                We do not sell, rent, or trade your personal information to
                third parties. We may share information only in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With educational authorities as required by law</li>
                <li>
                  With service providers (e.g., payment processors) who assist
                  in our operations
                </li>
                <li>
                  With healthcare providers in case of medical emergencies
                </li>
                <li>With law enforcement agencies when legally required</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect personal information against unauthorized access,
                alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Secure servers and encrypted data transmission</li>
                <li>Access controls and authentication procedures</li>
                <li>Regular security assessments and updates</li>
                <li>Staff training on data protection and confidentiality</li>
                <li>Physical security measures for paper records</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                6. Photography and Video Policy
              </h2>
              <p>
                We may take photographs and videos of students during school
                activities for educational and promotional purposes.
                Parents/guardians will be asked to provide consent for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use of images on our website and social media</li>
                <li>
                  Inclusion in school publications and marketing materials
                </li>
                <li>Display within school premises</li>
              </ul>
              <p className="mt-4">
                You have the right to withdraw consent at any time by contacting
                us in writing.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                7. Your Rights
              </h2>
              <p>
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate or incomplete information</li>
                <li>
                  Right to request deletion of your data (subject to legal
                  requirements)
                </li>
                <li>Right to object to processing of your information</li>
                <li>Right to data portability</li>
                <li>
                  Right to withdraw consent for specific processing activities
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@skyheightsacademy.ng"
                  className="text-royal-blue hover:underline"
                >
                  privacy@skyheightsacademy.ng
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                8. Data Retention
              </h2>
              <p>
                We retain personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a
                longer retention period is required by law. Student academic
                records are typically retained for a minimum period as specified
                by Nigerian educational regulations.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                9. Cookies
              </h2>
              <p>
                Our website uses cookies to enhance user experience. Cookies are
                small text files stored on your device. You can control cookie
                settings through your browser preferences. Disabling cookies may
                affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                10. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of these external
                sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                11. Children's Privacy
              </h2>
              <p>
                We are committed to protecting children's privacy. We do not
                knowingly collect personal information from children without
                parental consent. All student information is collected through
                parents or guardians.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                12. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                13. Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us:
              </p>
              <div className="bg-light-grey p-6 rounded-lg mt-4">
                <p className="font-semibold text-deep-navy mb-2">
                  Skyheights Academy
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:privacy@skyheightsacademy.ng"
                    className="text-royal-blue hover:underline"
                  >
                    privacy@skyheightsacademy.ng
                  </a>
                </p>
                <p>Phone: +234 xxx xxx xxxx</p>
                <p>Address: Lagos, Nigeria</p>
              </div>
            </section>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

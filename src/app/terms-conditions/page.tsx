import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";

export const metadata = {
  title: "Terms & Conditions | Skyheights Academy",
  description:
    "Read our terms and conditions for using Skyheights Academy services and website."
};

export default function TermsConditionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-blue to-heritage-brown text-white py-20 md:py-28">
        <div className="container">
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-2">
            Terms & Conditions
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl">
            Last updated: January 14, 2026
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <SectionContainer background="white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8 text-text-grey">
            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By enrolling your child at Skyheights Academy or using our
                website and services, you agree to be bound by these Terms and
                Conditions. If you do not agree to these terms, please do not
                use our services or website.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                2. Admission and Enrollment
              </h2>
              <h3 className="font-semibold text-lg text-deep-navy mb-3">
                2.1 Admission Process
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Admission is subject to availability and successful completion
                  of the assessment process
                </li>
                <li>
                  All required documents must be submitted before enrollment is
                  finalized
                </li>
                <li>
                  The school reserves the right to accept or decline any
                  application
                </li>
                <li>
                  Admission offers are valid for the specified academic term
                  only
                </li>
              </ul>

              <h3 className="font-semibold text-lg text-deep-navy mb-3 mt-6">
                2.2 Enrollment Requirements
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Parents/guardians must provide accurate and complete
                  information
                </li>
                <li>All medical and immunization records must be up to date</li>
                <li>
                  Enrollment is confirmed only upon payment of required fees
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                3. Fees and Payment
              </h2>
              <h3 className="font-semibold text-lg text-deep-navy mb-3">
                3.1 Tuition and Fees
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All fees must be paid by the stipulated due dates</li>
                <li>
                  Fees are non-refundable except in cases specified by the
                  school
                </li>
                <li>
                  The school reserves the right to review and adjust fees
                  annually
                </li>
                <li>
                  Late payment attracts penalty charges as specified in the fee
                  schedule
                </li>
              </ul>

              <h3 className="font-semibold text-lg text-deep-navy mb-3 mt-6">
                3.2 Payment Methods
              </h3>
              <p>Payments can be made through:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bank transfer</li>
                <li>Online payment portal</li>
                <li>Check (subject to clearance)</li>
                <li>Cash payments at the school office</li>
              </ul>

              <h3 className="font-semibold text-lg text-deep-navy mb-3 mt-6">
                3.3 Outstanding Fees
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Students with outstanding fees may not be allowed to write
                  examinations
                </li>
                <li>
                  Report cards will be withheld until all fees are cleared
                </li>
                <li>
                  Continued enrollment for the next term requires clearance of
                  all outstanding fees
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                4. Academic Policies
              </h2>
              <h3 className="font-semibold text-lg text-deep-navy mb-3">
                4.1 Attendance
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regular attendance is mandatory for all students</li>
                <li>Parents must notify the school of absences in advance</li>
                <li>
                  Excessive absences may affect academic progress and promotion
                </li>
                <li>
                  Students arriving late must report to the office for late slip
                </li>
              </ul>

              <h3 className="font-semibold text-lg text-deep-navy mb-3 mt-6">
                4.2 Academic Integrity
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Cheating, plagiarism, and academic dishonesty are strictly
                  prohibited
                </li>
                <li>All work submitted must be the student's own</li>
                <li>
                  Violations may result in disciplinary action including
                  suspension
                </li>
              </ul>

              <h3 className="font-semibold text-lg text-deep-navy mb-3 mt-6">
                4.3 Examinations
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All students must participate in scheduled examinations</li>
                <li>
                  Make-up exams are only permitted for medical emergencies with
                  documentation
                </li>
                <li>Examination misconduct will result in automatic failure</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                5. Code of Conduct
              </h2>
              <h3 className="font-semibold text-lg text-deep-navy mb-3">
                5.1 Student Behavior
              </h3>
              <p>Students are expected to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respect teachers, staff, and fellow students</li>
                <li>Follow all school rules and regulations</li>
                <li>Wear proper school uniform at all times</li>
                <li>Take care of school property and facilities</li>
                <li>Refrain from bullying, violence, or disruptive behavior</li>
              </ul>

              <h3 className="font-semibold text-lg text-deep-navy mb-3 mt-6">
                5.2 Prohibited Items
              </h3>
              <p>Students are not permitted to bring:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Weapons or dangerous objects</li>
                <li>Illegal substances or alcohol</li>
                <li>Inappropriate materials or content</li>
                <li>
                  Excessive money or valuable items (school not responsible for
                  loss)
                </li>
              </ul>

              <h3 className="font-semibold text-lg text-deep-navy mb-3 mt-6">
                5.3 Disciplinary Actions
              </h3>
              <p>Violations may result in:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verbal or written warnings</li>
                <li>Detention or suspension</li>
                <li>Expulsion in cases of serious misconduct</li>
                <li>Referral to appropriate authorities when necessary</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                6. Parent/Guardian Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensure timely payment of all fees</li>
                <li>Provide accurate contact and medical information</li>
                <li>Attend parent-teacher conferences and school events</li>
                <li>
                  Support the school's educational and disciplinary policies
                </li>
                <li>
                  Notify the school immediately of any changes to contact
                  information
                </li>
                <li>Ensure students arrive on time and in proper uniform</li>
                <li>Pick up students promptly at the end of school day</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                7. Health and Safety
              </h2>
              <h3 className="font-semibold text-lg text-deep-navy mb-3">
                7.1 Medical Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Parents must provide complete medical history and emergency
                  contacts
                </li>
                <li>
                  Students with medical conditions must have updated medical
                  documentation
                </li>
                <li>
                  Medications must be administered through the school nurse with
                  proper authorization
                </li>
              </ul>

              <h3 className="font-semibold text-lg text-deep-navy mb-3 mt-6">
                7.2 Emergency Procedures
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The school will contact parents immediately in case of
                  emergencies
                </li>
                <li>
                  If parents cannot be reached, emergency contacts will be
                  contacted
                </li>
                <li>
                  The school reserves the right to seek medical attention when
                  necessary
                </li>
              </ul>

              <h3 className="font-semibold text-lg text-deep-navy mb-3 mt-6">
                7.3 Illness Policy
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Students who are unwell should stay at home</li>
                <li>
                  Students showing symptoms of illness will be isolated and
                  parents contacted
                </li>
                <li>
                  Students must be fever-free for 24 hours before returning to
                  school
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                8. Transportation
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  School transportation is provided as a service and is subject
                  to availability
                </li>
                <li>Transportation fees are separate from tuition</li>
                <li>
                  Students must follow bus rules and respect drivers and
                  attendants
                </li>
                <li>
                  The school is not liable for delays due to traffic or
                  unforeseen circumstances
                </li>
                <li>Parents must be present at designated pick-up points</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                9. Withdrawal and Transfer
              </h2>
              <h3 className="font-semibold text-lg text-deep-navy mb-3">
                9.1 Notice Period
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Parents must provide one full term's notice for withdrawal
                </li>
                <li>
                  Fees are payable in lieu of notice if proper notice is not
                  given
                </li>
                <li>
                  Transfer certificates will be issued upon clearance of all
                  outstanding fees
                </li>
              </ul>

              <h3 className="font-semibold text-lg text-deep-navy mb-3 mt-6">
                9.2 School-Initiated Withdrawal
              </h3>
              <p>
                The school reserves the right to ask a student to withdraw for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Serious or repeated disciplinary violations</li>
                <li>Non-payment of fees after due warning</li>
                <li>
                  False or misleading information provided during admission
                </li>
                <li>Inability to meet academic or behavioral standards</li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                10. Liability and Insurance
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The school maintains liability insurance for school activities
                </li>
                <li>
                  Parents are responsible for their child's personal belongings
                </li>
                <li>
                  The school is not liable for lost, stolen, or damaged personal
                  items
                </li>
                <li>
                  Parents are encouraged to have personal insurance for their
                  children
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                11. Website Terms of Use
              </h2>
              <h3 className="font-semibold text-lg text-deep-navy mb-3">
                11.1 Intellectual Property
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All content on this website is owned by Skyheights Academy
                </li>
                <li>
                  Unauthorized use, reproduction, or distribution is prohibited
                </li>
                <li>School logo and branding are registered trademarks</li>
              </ul>

              <h3 className="font-semibold text-lg text-deep-navy mb-3 mt-6">
                11.2 Website Use
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Users must not misuse or interfere with the website</li>
                <li>
                  The school reserves the right to modify or discontinue the
                  website
                </li>
                <li>
                  Links to third-party sites are provided for convenience only
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                12. Changes to Terms
              </h2>
              <p>
                Skyheights Academy reserves the right to modify these Terms and
                Conditions at any time. Updated terms will be posted on our
                website and communicated to parents. Continued enrollment
                constitutes acceptance of revised terms.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                13. Governing Law
              </h2>
              <p>
                These Terms and Conditions are governed by the laws of the
                Federal Republic of Nigeria. Any disputes arising from these
                terms shall be resolved through appropriate legal channels in
                Nigeria.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
                14. Contact Information
              </h2>
              <p>
                For questions regarding these Terms and Conditions, please
                contact:
              </p>
              <div className="bg-light-grey p-6 rounded-lg mt-4">
                <p className="font-semibold text-deep-navy mb-2">
                  Skyheights Academy
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@skyheightsacademy.ng"
                    className="text-royal-blue hover:underline"
                  >
                    info@skyheightsacademy.ng
                  </a>
                </p>
                <p>Phone: +234 xxx xxx xxxx</p>
                <p>Address: Lagos, Nigeria</p>
              </div>
            </section>

            <div className="bg-royal-blue/10 border-l-4 border-royal-blue p-6 rounded-lg mt-8">
              <p className="text-sm text-deep-navy">
                <strong>Important:</strong> By enrolling your child at
                Skyheights Academy, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

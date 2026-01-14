import SectionContainer from '../../components/SectionContainer';
import SectionHeader from '../../components/SectionHeader';
import Button from '../../components/Button';

export const metadata = {
  title: 'About Skyheights Academy | Private School in Abuja',
  description: 'Learn about Skyheights Academy, a private school in Lugbe Abuja founded in 2017, committed to academic excellence, safety, and character development.',
};

export default function AboutPage() {
  return (
    <>
      {/* ABOUT HERO - Phase 6: Calm academic imagery, institutional credibility */}
      <section className="bg-heritage-brown text-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            About Skyheights Academy
          </h1>
          <p className="text-lg md:text-xl text-cream/95 max-w-4xl leading-relaxed">
            A private educational institution committed to academic excellence, character development, 
            and lifelong success.
          </p>
        </div>
      </section>

      {/* SCHOOL OVERVIEW - Phase 6: Who We Are */}
      <SectionContainer background="white">
        <SectionHeader title="Who We Are" />
        <div className="max-w-4xl">
          <p className="text-lg text-text-grey leading-relaxed mb-6">
            Skyheights Academy is a <strong>private co-educational institution</strong> located in Lugbe, Abuja, 
            offering quality education from Creche through Secondary School. Since our establishment, we have 
            remained dedicated to nurturing young minds in a <strong>secure, disciplined, and academically 
            enriching environment</strong>.
          </p>
          <p className="text-lg text-text-grey leading-relaxed">
            Our institution serves families who value structured learning, character formation, and academic 
            preparation. We provide a purposeful educational experience that equips students with the knowledge, 
            skills, and values needed for success in both their academic pursuits and future endeavors.
          </p>
        </div>
      </SectionContainer>

      {/* OUR HISTORY - Phase 6: Our Journey, continuity and experience */}
      <SectionContainer background="light">
        <SectionHeader title="Our Journey" />
        <div className="max-w-4xl">
          <p className="text-lg text-text-grey leading-relaxed mb-6">
            <strong>Founded in 2017</strong>, Skyheights Academy was established with a clear vision: to provide 
            a balanced education that combines academic excellence, moral values, and practical life skills. 
          </p>
          <p className="text-lg text-text-grey leading-relaxed">
            Over the years, the school has grown into a trusted learning institution serving families who value 
            quality education and character formation. Our continued commitment to educational standards, safety, 
            and student development has established us as a reliable partner in the academic journey of our pupils.
          </p>
        </div>
      </SectionContainer>

      {/* MISSION, VISION & MOTTO - Phase 6: Core identity, formal and timeless */}
      <SectionContainer background="white">
        <SectionHeader title="Our Core Identity" subtitle="The principles that guide our work" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="bg-light-grey rounded-[14px] p-8 text-center" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
            <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-4">Our Mission</h3>
            <p className="text-text-grey leading-relaxed">
              To foster each child's well-being and lay a strong foundation for academic success and lifelong achievement.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-light-grey rounded-[14px] p-8 text-center" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
            <div className="w-16 h-16 bg-heritage-brown rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-4">Our Vision</h3>
            <p className="text-text-grey leading-relaxed">
              To envision a world where every child, regardless of background, grows into a healthy, confident, 
              and productive adult.
            </p>
          </div>

          {/* Motto */}
          <div className="bg-light-grey rounded-[14px] p-8 text-center" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
            <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-4">Our Motto</h3>
            <p className="text-3xl font-playfair font-bold text-heritage-brown mb-4">
              "Passion for Excellence"
            </p>
            <p className="text-text-grey text-sm">
              This guiding principle shapes every aspect of our educational practice.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* OUR EDUCATIONAL PHILOSOPHY - Phase 6: Intentional, not experimental */}
      <SectionContainer background="light">
        <SectionHeader title="Our Educational Approach" />
        <div className="max-w-4xl">
          <p className="text-lg text-text-grey leading-relaxed mb-8">
            At Skyheights Academy, we believe that education extends beyond the classroom. Our approach combines 
            academic rigor, moral discipline, and holistic development to prepare pupils for both examinations 
            and life.
          </p>
          
          <h4 className="font-playfair font-bold text-xl text-deep-navy mb-4">Key Principles</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                principle: 'Blended Nigerian, British, and Montessori curricula',
                detail: 'Combining proven educational frameworks for comprehensive learning',
              },
              {
                principle: 'Emphasis on discipline and character',
                detail: 'Developing responsible, respectful, and resilient individuals',
              },
              {
                principle: 'Child-centered learning',
                detail: "Recognizing and nurturing each student's unique strengths",
              },
              {
                principle: 'Continuous assessment and growth',
                detail: 'Regular evaluation to support ongoing academic progress',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-[10px]" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
                <svg className="w-5 h-5 text-royal-blue shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-deep-navy mb-1">{item.principle}</p>
                  <p className="text-sm text-text-grey">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* PROPRIETOR'S MESSAGE - Phase 6: VERY IMPORTANT for Nigerian parents */}
      <SectionContainer background="white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Message from the Proprietor" centered />
          <div className="bg-light-grey rounded-[14px] p-8 md:p-12 mt-8" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
            <div className="space-y-6 text-text-grey text-lg leading-relaxed">
              <p>
                At Skyheights Academy, our commitment goes beyond academic instruction. We are deeply invested 
                in shaping confident, disciplined, and responsible individuals who are prepared for the future.
              </p>
              <p>
                We understand the trust parents place in us, and we do not take this responsibility lightly. 
                Our team of dedicated educators and staff work tirelessly to ensure that every child receives 
                quality education in a safe and supportive environment.
              </p>
              <p>
                Education is a partnership between the school and the home. We value the involvement of parents 
                in their child's learning journey and maintain open communication to support each student's 
                growth and development.
              </p>
              <p>
                We look forward to partnering with parents in nurturing the leaders of tomorrow.
              </p>
              <div className="pt-6 border-t border-divider-grey mt-6">
                <p className="font-playfair font-semibold text-deep-navy text-xl">
                  Proprietor, Skyheights Academy
                </p>
                <p className="text-sm text-text-grey mt-2">Lugbe, Abuja</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* WHY SKYHEIGHTS ACADEMY - Phase 6: Quiet confidence, no exaggeration */}
      <SectionContainer background="light">
        <SectionHeader title="What Sets Us Apart" subtitle="Our distinctive strengths" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: 'Experienced and Dedicated Educators',
              description: 'Qualified teaching staff committed to student success and professional development',
            },
            {
              title: 'Secure Learning Environment',
              description: '24-hour CCTV surveillance and strict safety protocols ensure student protection',
            },
            {
              title: 'Blended Curriculum with Global Relevance',
              description: 'Nigerian, British, and Montessori approaches prepare students for local and international success',
            },
            {
              title: 'Strong Emphasis on Discipline and Values',
              description: 'Character education integrated into daily learning and school culture',
            },
            {
              title: 'Purpose-Built Learning Facilities',
              description: 'Well-equipped classrooms, laboratories, library, and ICT facilities support quality education',
            },
            {
              title: 'Structured Academic Support',
              description: 'Regular assessments, parent communication, and individualized attention promote progress',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-[10px] p-6" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
              <h4 className="font-playfair font-bold text-lg text-deep-navy mb-3">{item.title}</h4>
              <p className="text-text-grey text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CLOSING TRUST CTA - Phase 6: Soft neutral, partnership language */}
      <SectionContainer background="white">
        <div className="max-w-4xl mx-auto bg-cream rounded-[14px] p-8 md:p-12 text-center">
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-playfair font-bold text-deep-navy mb-6 leading-tight">
            Partner With Us in Your Child's Educational Journey
          </h2>
          <div className="w-[60px] h-[3px] bg-heritage-brown mx-auto mb-6"></div>
          <p className="text-lg text-text-grey mb-8 leading-relaxed max-w-2xl mx-auto">
            We invite you to explore our academic programmes and admission process, and discover how 
            Skyheights Academy can support your child's growth and success.
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

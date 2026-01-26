import Link from "next/link";
import SectionContainer from "../../../components/SectionContainer";
import Button from "../../../components/Button";

export default function NewsNotFound() {
  return (
    <>
      <section className="bg-[#eee5b5] text-white py-20 md:py-28">
        <div className="container">
          <h1 className="text-[3.5rem] md:text-[4rem] font-playfair font-bold mb-6 leading-tight">
            News Article Not Found
          </h1>
          <p className="text-lg font-light md:text-xl text-cream/95 max-w-4xl leading-relaxed">
            The news article you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
        </div>
      </section>

      <SectionContainer background="white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-text-grey mb-8">
            Please check the URL or return to the news directory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/news-events" variant="primary" size="lg">
              View All News
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

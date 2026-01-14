import React from "react";

const Curriculum = () => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
        <div className="bg-light-grey p-8 rounded-lg">
          <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
            Nigerian Curriculum
          </h3>
          <p className="text-text-grey mb-4">
            Full alignment with NERDC standards, ensuring students excel in
            WAEC, NECO, and Common Entrance examinations.
          </p>
          <p className="text-sm text-heritage-brown font-semibold">
            Academic Benefit: National competitiveness and local relevance
          </p>
        </div>

        <div className="bg-light-grey p-8 rounded-lg">
          <h3 className="font-playfair pr-3 font-bold text-2xl text-deep-navy mb-4">
            British Curriculum
          </h3>
          <p className="text-text-grey mb-4">
            Cambridge-inspired methods emphasizing critical thinking,
            inquiry-based learning, and international standards.
          </p>
          <p className="text-sm text-heritage-brown font-semibold">
            Academic Benefit: Global perspective and analytical skills
          </p>
        </div>

        <div className="bg-light-grey p-8 rounded-lg">
          <h3 className="font-playfair font-bold text-2xl text-deep-navy mb-4">
            Montessori Approach
          </h3>
          <p className="text-text-grey mb-4">
            Child-centered learning in early years promoting independence,
            natural development, and hands-on exploration.
          </p>
          <p className="text-sm text-heritage-brown font-semibold">
            Academic Benefit: Strong foundational skills and love for learning
          </p>
        </div>
      </div>
      <p className="text-center text-lg text-deep-navy max-w-4xl mx-auto">
        Our blended curriculum ensures students are{" "}
        <strong>academically competitive</strong>,{" "}
        <strong>globally aware</strong>, and{" "}
        <strong>practically grounded</strong>.
      </p>
    </>
  );
};

export default Curriculum;

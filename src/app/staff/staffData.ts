// Staff data structure and helper functions

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  experience?: string;
  description?: string;
  specialization?: string;
  department?: string;
  category: "leadership" | "teaching" | "support";
  email?: string;
  bio?: string;
  achievements?: string[];
}

// Generate ID from name (slugified)
function generateId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Leadership Team
export const leadershipTeam: StaffMember[] = [
  {
    id: generateId("Principal"),
    name: "Principal",
    role: "School Principal",
    qualifications: "M.Ed, B.Ed",
    experience: "15+ years",
    description:
      "Leading our academic vision with extensive educational leadership experience and a passion for student success.",
    category: "leadership",
    bio:
      "With over 15 years of experience in educational leadership, our Principal brings a wealth of knowledge and a deep commitment to academic excellence. Under their guidance, Skyheights Academy has continued to grow and maintain high standards of education.",
    achievements: [
      "Led multiple successful academic improvement initiatives",
      "Established strong partnerships with educational institutions",
      "Mentored numerous educators in professional development"
    ]
  },
  {
    id: generateId("Vice Principal"),
    name: "Vice Principal",
    role: "Vice Principal",
    qualifications: "M.Ed, PGDE",
    experience: "12+ years",
    description:
      "Supporting daily operations and ensuring high standards across all academic levels and departments.",
    category: "leadership",
    bio:
      "Our Vice Principal plays a crucial role in maintaining operational excellence and supporting both staff and students. With extensive experience in educational administration, they ensure smooth day-to-day operations.",
    achievements: [
      "Streamlined administrative processes",
      "Implemented effective student support systems",
      "Coordinated successful school events and programs"
    ]
  },
  {
    id: generateId("Head of Academics"),
    name: "Head of Academics",
    role: "Head of Academics",
    qualifications: "M.Sc, B.Ed",
    experience: "10+ years",
    description:
      "Overseeing curriculum development and academic excellence across all departments and grade levels.",
    category: "leadership",
    bio:
      "The Head of Academics is responsible for curriculum design, teacher development, and ensuring academic standards across all levels. Their expertise in educational methodology drives our innovative teaching approaches.",
    achievements: [
      "Developed comprehensive curriculum frameworks",
      "Led teacher training and professional development",
      "Achieved consistent improvement in student outcomes"
    ]
  },
  {
    id: generateId("Head of Primary"),
    name: "Head of Primary",
    role: "Head of Primary School",
    qualifications: "B.Ed, NCE",
    experience: "8+ years",
    description:
      "Guiding primary education with expertise in child development, learning methodologies, and student engagement.",
    category: "leadership",
    bio:
      "Our Head of Primary brings specialized knowledge in primary education and child development. They work closely with teachers to create engaging and effective learning experiences for our primary students.",
    achievements: [
      "Enhanced primary curriculum delivery",
      "Improved student engagement and participation",
      "Developed innovative teaching methodologies"
    ]
  },
  {
    id: generateId("Head of Secondary"),
    name: "Head of Secondary",
    role: "Head of Secondary School",
    qualifications: "M.Ed, B.Sc",
    experience: "10+ years",
    description:
      "Preparing students for examinations and future academic pursuits with a focus on excellence and achievement.",
    category: "leadership",
    bio:
      "The Head of Secondary leads our secondary school program, focusing on academic rigor and preparation for higher education. Their experience ensures our students are well-prepared for examinations and future challenges.",
    achievements: [
      "Achieved high examination success rates",
      "Established effective examination preparation programs",
      "Mentored students for university admissions"
    ]
  },
  {
    id: generateId("Head of Early Years"),
    name: "Head of Early Years",
    role: "Head of Early Years",
    qualifications: "B.Ed, Montessori Certified",
    experience: "7+ years",
    description:
      "Nurturing our youngest learners with specialized early childhood education and development expertise.",
    category: "leadership",
    bio:
      "Our Head of Early Years specializes in early childhood development and Montessori education. They create nurturing environments where our youngest students can explore, learn, and grow.",
    achievements: [
      "Developed comprehensive early years curriculum",
      "Trained staff in Montessori methodologies",
      "Created engaging learning environments for young children"
    ]
  }
];

// Teaching Staff
export const teachingStaff: StaffMember[] = [
  // Early Years
  {
    id: generateId("Early Years Teacher 1"),
    name: "Early Years Teacher 1",
    role: "Nursery Class Teacher",
    qualifications: "B.Ed, NCE",
    specialization: "Early Childhood Development",
    department: "Early Years (Creche & Nursery)",
    category: "teaching",
    bio:
      "Specialized in early childhood development with a focus on creating engaging and nurturing learning environments for nursery students."
  },
  {
    id: generateId("Early Years Teacher 2"),
    name: "Early Years Teacher 2",
    role: "Creche Class Teacher",
    qualifications: "B.Ed, Montessori Certified",
    specialization: "Infant Care & Development",
    department: "Early Years (Creche & Nursery)",
    category: "teaching",
    bio:
      "Montessori-certified educator specializing in infant care and early development, ensuring our youngest learners receive the best start."
  },
  {
    id: generateId("Early Years Teacher 3"),
    name: "Early Years Teacher 3",
    role: "Pre-Nursery Teacher",
    qualifications: "NCE, Early Years Certified",
    specialization: "Play-Based Learning",
    department: "Early Years (Creche & Nursery)",
    category: "teaching",
    bio:
      "Expert in play-based learning methodologies, creating fun and educational experiences for pre-nursery students."
  },
  // Primary School
  {
    id: generateId("Primary Teacher 1"),
    name: "Primary Teacher 1",
    role: "Primary 1-2 Class Teacher",
    qualifications: "B.Ed, NCE",
    specialization: "Foundation Years",
    department: "Primary School",
    category: "teaching",
    bio:
      "Dedicated to building strong foundations in literacy and numeracy for our youngest primary students."
  },
  {
    id: generateId("Primary Teacher 2"),
    name: "Primary Teacher 2",
    role: "Primary 3-4 Class Teacher",
    qualifications: "B.Ed, PGDE",
    specialization: "Intermediate Years",
    department: "Primary School",
    category: "teaching",
    bio:
      "Experienced educator focused on developing critical thinking and problem-solving skills in intermediate primary students."
  },
  {
    id: generateId("Primary Teacher 3"),
    name: "Primary Teacher 3",
    role: "Primary 5-6 Class Teacher",
    qualifications: "B.Ed, M.Ed",
    specialization: "Upper Primary",
    department: "Primary School",
    category: "teaching",
    bio:
      "Preparing upper primary students for the transition to secondary school with advanced teaching methodologies."
  },
  {
    id: generateId("Primary Mathematics Teacher"),
    name: "Mathematics Teacher",
    role: "Mathematics Specialist",
    qualifications: "B.Sc (Maths), B.Ed",
    specialization: "Mathematics Education",
    department: "Primary School",
    category: "teaching",
    bio:
      "Mathematics specialist dedicated to making math engaging and accessible for primary school students."
  },
  {
    id: generateId("Primary English Teacher"),
    name: "English Teacher",
    role: "English Language Specialist",
    qualifications: "B.A (English), B.Ed",
    specialization: "Language Arts",
    department: "Primary School",
    category: "teaching",
    bio:
      "Language arts specialist fostering a love for reading, writing, and communication in primary students."
  },
  {
    id: generateId("Primary Science Teacher"),
    name: "Science Teacher",
    role: "Science Specialist",
    qualifications: "B.Sc (Science), B.Ed",
    specialization: "General Science",
    department: "Primary School",
    category: "teaching",
    bio:
      "Science educator inspiring curiosity and scientific thinking through hands-on experiments and exploration."
  },
  // Secondary School
  {
    id: generateId("Secondary Mathematics Teacher"),
    name: "Mathematics Teacher",
    role: "Mathematics Teacher",
    qualifications: "M.Sc (Mathematics), B.Ed",
    specialization: "Advanced Mathematics",
    department: "Secondary School",
    category: "teaching",
    bio:
      "Advanced mathematics teacher preparing students for examinations and higher-level mathematical concepts."
  },
  {
    id: generateId("Secondary English Teacher"),
    name: "English Teacher",
    role: "English Language & Literature",
    qualifications: "M.A (English), B.Ed",
    specialization: "Language & Literature",
    department: "Secondary School",
    category: "teaching",
    bio:
      "English language and literature specialist developing advanced communication and analytical skills in secondary students."
  },
  {
    id: generateId("Physics Teacher"),
    name: "Physics Teacher",
    role: "Physics Teacher",
    qualifications: "M.Sc (Physics), B.Ed",
    specialization: "Physics Education",
    department: "Secondary School",
    category: "teaching",
    bio:
      "Physics educator making complex concepts accessible through practical demonstrations and real-world applications."
  },
  {
    id: generateId("Chemistry Teacher"),
    name: "Chemistry Teacher",
    role: "Chemistry Teacher",
    qualifications: "M.Sc (Chemistry), B.Ed",
    specialization: "Chemistry Education",
    department: "Secondary School",
    category: "teaching",
    bio:
      "Chemistry specialist conducting engaging laboratory experiments and preparing students for advanced chemistry studies."
  },
  {
    id: generateId("Biology Teacher"),
    name: "Biology Teacher",
    role: "Biology Teacher",
    qualifications: "M.Sc (Biology), B.Ed",
    specialization: "Biology Education",
    department: "Secondary School",
    category: "teaching",
    bio:
      "Biology educator fostering understanding of life sciences through practical learning and scientific inquiry."
  },
  {
    id: generateId("Social Studies Teacher"),
    name: "Social Studies Teacher",
    role: "Social Studies Teacher",
    qualifications: "B.A (History), B.Ed",
    specialization: "Social Sciences",
    department: "Secondary School",
    category: "teaching",
    bio:
      "Social studies teacher helping students understand history, geography, and social dynamics in our world."
  },
  {
    id: generateId("French Teacher"),
    name: "French Teacher",
    role: "French Language Teacher",
    qualifications: "B.A (French), B.Ed",
    specialization: "Modern Languages",
    department: "Secondary School",
    category: "teaching",
    bio:
      "French language teacher developing students' proficiency in modern languages and cultural understanding."
  }
];

// Support Staff
export const supportStaff: StaffMember[] = [
  {
    id: generateId("Administrative Officer"),
    name: "Administrative Officer",
    role: "School Administrator",
    description: "Managing school operations and administrative processes",
    category: "support",
    bio:
      "Ensuring smooth administrative operations and supporting the school community with efficient service."
  },
  {
    id: generateId("ICT Coordinator"),
    name: "ICT Coordinator",
    role: "ICT Support",
    description: "Supporting technology integration and computer lab management",
    category: "support",
    bio:
      "Managing ICT infrastructure and supporting technology-enhanced learning across the school."
  },
  {
    id: generateId("Librarian"),
    name: "Librarian",
    role: "Library Coordinator",
    description: "Managing library resources and promoting reading culture",
    category: "support",
    bio:
      "Curating library resources and fostering a love for reading and research among students."
  },
  {
    id: generateId("Guidance Counselor"),
    name: "Guidance Counselor",
    role: "Student Counselor",
    description: "Providing academic and personal guidance to students",
    category: "support",
    bio:
      "Supporting student well-being and providing guidance for academic and personal development."
  },
  {
    id: generateId("Nurse"),
    name: "Nurse",
    role: "School Nurse",
    description: "Ensuring student health and wellness on campus",
    category: "support",
    bio:
      "Maintaining student health and wellness, providing first aid and health education."
  },
  {
    id: generateId("Security Personnel"),
    name: "Security Personnel",
    role: "Security Team",
    description: "Maintaining campus safety and security protocols",
    category: "support",
    bio:
      "Ensuring campus safety and security, maintaining a secure learning environment for all."
  }
];

// Get all staff members
export function getAllStaff(): StaffMember[] {
  return [...leadershipTeam, ...teachingStaff, ...supportStaff];
}

// Get staff member by ID
export function getStaffById(id: string): StaffMember | undefined {
  const allStaff = getAllStaff();
  return allStaff.find((staff) => staff.id === id);
}

// Get staff by category
export function getStaffByCategory(
  category: "leadership" | "teaching" | "support"
): StaffMember[] {
  const allStaff = getAllStaff();
  return allStaff.filter((staff) => staff.category === category);
}

// Get teaching staff by department
export function getTeachingStaffByDepartment(
  department: string
): StaffMember[] {
  return teachingStaff.filter((staff) => staff.department === department);
}

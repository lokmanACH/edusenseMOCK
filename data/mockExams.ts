/**
 * Mock Exams Data
 * Multiple exam types with realistic content
 */

export interface MockExam {
  _id: string;
  title: string;
  description: string;
  subject: string;
  class: string;
  type: "algebra" | "calculus" | "physics" | "chemistry" | "history" | "language" | "multilingual";
  examImages: Array<{ url: string; public_id: string }>;
  solutionImages: Array<{ url: string; public_id: string }>;
  createdAt?: string;
  status?: "draft" | "uploaded" | "processing" | "completed" | "reviewed";
  difficulty?: "easy" | "medium" | "hard";
  questionCount?: number;
}

const mockFile = (name: string) => ({
  url: `data:text/plain;charset=utf-8,Mock%20file%3A%20${encodeURIComponent(name)}#${encodeURIComponent(name)}`,
  public_id: `mock_${encodeURIComponent(name)}`,
});

// Mathematics Exams
export const MATH_EXAMS: MockExam[] = [
  {
    _id: "exam_math_algebra_linear",
    title: "Algebra Quiz - Linear Equations",
    description: "Solve first-degree equations: 2x + 5 = 13, -3x + 7 = -8",
    subject: "Mathematics",
    class: "mathematics-grade-10",
    type: "algebra",
    examImages: [mockFile("algebra_linear_equations.pdf")],
    solutionImages: [mockFile("algebra_linear_solutions.pdf")],
    createdAt: "2024-01-15",
    status: "completed",
    difficulty: "easy",
    questionCount: 8,
  },
  {
    _id: "exam_math_algebra_quadratic",
    title: "Quadratic Equations Test",
    description:
      'Solve x² + 5x + 6 = 0 using factoring and quadratic formula. Interpret roots.',
    subject: "Mathematics",
    class: "mathematics-grade-10",
    type: "algebra",
    examImages: [mockFile("quadratic_equations_exam.pdf")],
    solutionImages: [mockFile("quadratic_equations_key.pdf")],
    createdAt: "2024-02-01",
    status: "completed",
    difficulty: "medium",
    questionCount: 10,
  },
  {
    _id: "exam_math_algebra_probability",
    title: "Probability and Counting",
    description:
      "Permutations, combinations, and basic probability scenarios.",
    subject: "Mathematics",
    class: "mathematics-grade-10",
    type: "algebra",
    examImages: [mockFile("probability_exam.png")],
    solutionImages: [mockFile("probability_solution.png")],
    createdAt: "2024-02-15",
    status: "completed",
    difficulty: "hard",
    questionCount: 12,
  },
  {
    _id: "exam_math_calculus_derivatives",
    title: "Introduction to Derivatives",
    description:
      "Find derivatives using power rule, product rule, and chain rule.",
    subject: "Mathematics",
    class: "mathematics-grade-10",
    type: "calculus",
    examImages: [mockFile("derivatives_exam.pdf")],
    solutionImages: [mockFile("derivatives_key.pdf")],
    createdAt: "2024-03-01",
    status: "completed",
    difficulty: "hard",
    questionCount: 15,
  },
  {
    _id: "exam_math_calculus_integration",
    title: "Basic Integration",
    description: "Definite and indefinite integrals with various functions.",
    subject: "Mathematics",
    class: "mathematics-grade-10",
    type: "calculus",
    examImages: [mockFile("integration_exam.png")],
    solutionImages: [],
    createdAt: "2024-03-15",
    status: "processing",
    difficulty: "hard",
    questionCount: 10,
  },
];

// Science Exams
export const SCIENCE_EXAMS: MockExam[] = [
  {
    _id: "exam_science_physics_newton",
    title: "Newton's Laws of Motion",
    description:
      "Free body diagrams, force calculations, F=ma applications, and units analysis.",
    subject: "Physics",
    class: "physics-grade-11",
    type: "physics",
    examImages: [mockFile("newton_laws_exam.pdf")],
    solutionImages: [mockFile("newton_laws_solution.pdf")],
    createdAt: "2024-01-20",
    status: "completed",
    difficulty: "medium",
    questionCount: 9,
  },
  {
    _id: "exam_science_physics_energy",
    title: "Work, Energy, and Power",
    description:
      "Kinetic energy, potential energy, conservation of energy, and power calculations.",
    subject: "Physics",
    class: "physics-grade-11",
    type: "physics",
    examImages: [mockFile("energy_worksheet.png")],
    solutionImages: [mockFile("energy_worksheet_key.png")],
    createdAt: "2024-02-10",
    status: "completed",
    difficulty: "medium",
    questionCount: 8,
  },
  {
    _id: "exam_science_physics_waves",
    title: "Waves and Oscillations",
    description:
      "Wavelength, frequency, speed of waves, interference, and diffraction.",
    subject: "Physics",
    class: "physics-grade-11",
    type: "physics",
    examImages: [mockFile("waves_exam.pdf")],
    solutionImages: [],
    createdAt: "2024-03-01",
    status: "uploaded",
    difficulty: "hard",
    questionCount: 11,
  },
  {
    _id: "exam_science_chem_periodic",
    title: "Periodic Table and Trends",
    description:
      "Atomic structure, electron configuration, periodic trends, and valence electrons.",
    subject: "Chemistry",
    class: "chemistry-grade-10",
    type: "chemistry",
    examImages: [mockFile("periodic_table_quiz.pdf")],
    solutionImages: [mockFile("periodic_table_key.pdf")],
    createdAt: "2024-01-25",
    status: "completed",
    difficulty: "easy",
    questionCount: 10,
  },
  {
    _id: "exam_science_chem_reactions",
    title: "Chemical Reactions and Equations",
    description:
      "Balancing equations, types of reactions, stoichiometry, and limiting reagents.",
    subject: "Chemistry",
    class: "chemistry-grade-10",
    type: "chemistry",
    examImages: [mockFile("chemical_reactions_exam.png")],
    solutionImages: [mockFile("chemical_reactions_key.png")],
    createdAt: "2024-02-20",
    status: "completed",
    difficulty: "medium",
    questionCount: 12,
  },
  {
    _id: "exam_science_chem_tables",
    title: "Solution Chemistry with Data Tables",
    description:
      "Molarity, molality, pH calculations with incomplete data tables requiring students to fill cells.",
    subject: "Chemistry",
    class: "chemistry-grade-10",
    type: "chemistry",
    examImages: [mockFile("solution_chem_table_exam.pdf")],
    solutionImages: [mockFile("solution_chem_table_key.pdf")],
    createdAt: "2024-03-05",
    status: "completed",
    difficulty: "hard",
    questionCount: 8,
  },
];

// History Exams
export const HISTORY_EXAMS: MockExam[] = [
  {
    _id: "exam_history_algeria",
    title: "Algerian Revolution (1954-1962)",
    description:
      "Causes, key figures, major events, and consequences of the Algerian War of Independence.",
    subject: "History",
    class: "history-grade-11",
    type: "history",
    examImages: [mockFile("algeria_revolution_exam.pdf")],
    solutionImages: [mockFile("algeria_revolution_key.pdf")],
    createdAt: "2024-02-01",
    status: "completed",
    difficulty: "medium",
    questionCount: 5,
  },
  {
    _id: "exam_history_industrial",
    title: "Industrial Revolution",
    description:
      "Technological innovations, social impact, spread from Britain to Europe and USA.",
    subject: "History",
    class: "history-grade-11",
    type: "history",
    examImages: [mockFile("industrial_revolution_exam.png")],
    solutionImages: [mockFile("industrial_revolution_key.png")],
    createdAt: "2024-02-15",
    status: "completed",
    difficulty: "medium",
    questionCount: 4,
  },
  {
    _id: "exam_history_wwii",
    title: "World War II - Causes and Consequences",
    description:
      "Treaty of Versailles, rise of fascism, major battles, and post-war world order.",
    subject: "History",
    class: "history-grade-11",
    type: "history",
    examImages: [mockFile("wwii_exam.pdf")],
    solutionImages: [],
    createdAt: "2024-03-10",
    status: "processing",
    difficulty: "hard",
    questionCount: 6,
  },
];

// Language Exams
export const LANGUAGE_EXAMS: MockExam[] = [
  {
    _id: "exam_lang_english_grammar",
    title: "English Grammar - Tenses and Structures",
    description:
      "Present perfect, past continuous, conditionals, and sentence transformation exercises.",
    subject: "English",
    class: "language-grade-10",
    type: "language",
    examImages: [mockFile("english_grammar_exam.pdf")],
    solutionImages: [mockFile("english_grammar_key.pdf")],
    createdAt: "2024-01-30",
    status: "completed",
    difficulty: "medium",
    questionCount: 15,
  },
  {
    _id: "exam_lang_english_writing",
    title: "English Essay Writing",
    description:
      "Write a 300-word persuasive essay: 'Technology in Education: Benefits and Challenges'",
    subject: "English",
    class: "language-grade-10",
    type: "language",
    examImages: [mockFile("english_essay_exam.png")],
    solutionImages: [mockFile("english_essay_rubric.pdf")],
    createdAt: "2024-02-25",
    status: "completed",
    difficulty: "hard",
    questionCount: 3,
  },
  {
    _id: "exam_lang_french_comprehension",
    title: "French Reading Comprehension",
    description:
      "Read French texts and answer comprehension questions, vocabulary matching.",
    subject: "French",
    class: "language-grade-10",
    type: "language",
    examImages: [mockFile("french_comprehension_exam.pdf")],
    solutionImages: [mockFile("french_comprehension_key.pdf")],
    createdAt: "2024-03-01",
    status: "completed",
    difficulty: "medium",
    questionCount: 12,
  },
];

// Multilingual Exams
export const MULTILINGUAL_EXAMS: MockExam[] = [
  {
    _id: "exam_multi_arabic_french",
    title: "Arabic-French Language Exam",
    description:
      "Mixed language comprehension and translation between Arabic and French.",
    subject: "Languages",
    class: "language-grade-11",
    type: "multilingual",
    examImages: [mockFile("arabic_french_mixed_exam.pdf")],
    solutionImages: [mockFile("arabic_french_mixed_key.pdf")],
    createdAt: "2024-02-28",
    status: "completed",
    difficulty: "hard",
    questionCount: 14,
  },
  {
    _id: "exam_multi_trilingual",
    title: "Trilingual Exam (Arabic, French, English)",
    description: "Mixed content in three languages with translation and comprehension.",
    subject: "Languages",
    class: "language-grade-12",
    type: "multilingual",
    examImages: [mockFile("trilingual_exam.pdf")],
    solutionImages: [],
    createdAt: "2024-03-15",
    status: "uploaded",
    difficulty: "hard",
    questionCount: 18,
  },
];

export const ALL_EXAMS = [
  ...MATH_EXAMS,
  ...SCIENCE_EXAMS,
  ...HISTORY_EXAMS,
  ...LANGUAGE_EXAMS,
  ...MULTILINGUAL_EXAMS,
];

export const EXAMS_BY_CLASS: Record<string, MockExam[]> = {
  "mathematics-grade-10": MATH_EXAMS,
  "physics-grade-11": SCIENCE_EXAMS.filter((e) => e.subject === "Physics"),
  "chemistry-grade-10": SCIENCE_EXAMS.filter((e) => e.subject === "Chemistry"),
  "history-grade-11": HISTORY_EXAMS,
  "language-grade-10": LANGUAGE_EXAMS,
  "language-grade-11": MULTILINGUAL_EXAMS,
};

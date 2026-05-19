/**
 * Mock Scenarios - Demo scenario selection system
 * Allows users to quickly switch between different demo scenarios
 */

export interface DemoScenario {
  id: string;
  name: string;
  description: string;
  studentRole?: string;
  teacherRole?: string;
  keyFeatures: string[];
  classId?: string;
  examIds?: string[];
  submissionIds?: string[];
}

export const DEMO_SCENARIOS: Record<string, DemoScenario> = {
  excellent_student: {
    id: "excellent_student",
    name: "Excellent Student Scenario",
    description:
      "Student with perfect submissions and top-tier performance. Great for showing ideal workflow and positive feedback.",
    studentRole: "Ben Mohamed Ali",
    keyFeatures: [
      "Perfect submissions (95%+ scores)",
      "Clean handwriting, organized work",
      "High OCR confidence (98%)",
      "Positive, encouraging feedback",
      "Ready for advanced content",
      "Shows strong mathematical reasoning",
    ],
    classId: "mathematics-grade-10",
    examIds: [
      "exam_math_algebra_linear",
      "exam_math_algebra_quadratic",
    ],
    submissionIds: [
      "sub_excellent_001",
      "sub_excellent_002",
    ],
  },

  weak_student: {
    id: "weak_student",
    name: "Weak Student Scenario",
    description:
      "Student struggling with concepts, incomplete work, and low scores. Shows intervention pathways and remediation recommendations.",
    studentRole: "Omar Faris",
    keyFeatures: [
      "Low scores (30-40%)",
      "Incomplete submissions",
      "Poor handwriting, disorganized",
      "Low OCR confidence (54%)",
      "Requires teacher review",
      "Shows remediation recommendations",
      "Demonstrates intervention workflow",
    ],
    classId: "mathematics-grade-10",
    examIds: [
      "exam_math_algebra_probability",
      "exam_history_wwii",
    ],
    submissionIds: [
      "sub_weak_001",
      "sub_weak_002",
    ],
  },

  average_student: {
    id: "average_student",
    name: "Average Student Scenario",
    description:
      "Student with typical performance - good understanding but with room for improvement. Shows balanced feedback.",
    studentRole: "Amira Hassan",
    keyFeatures: [
      "Moderate scores (70-80%)",
      "Mix of correct and incorrect answers",
      "Decent handwriting with some issues",
      "Medium OCR confidence (82%)",
      "Constructive feedback with specific suggestions",
      "Shows improvement pathway",
      "Realistic grading distribution",
    ],
    classId: "chemistry-grade-10",
    examIds: [
      "exam_science_chem_reactions",
      "exam_math_algebra_quadratic",
    ],
    submissionIds: [
      "sub_average_001",
      "sub_average_003",
    ],
  },

  low_ocr_confidence: {
    id: "low_ocr_confidence",
    name: "Low OCR Confidence Scenario",
    description:
      "Submission with poor handwriting and OCR challenges. Shows teacher review workflow and manual intervention.",
    studentRole: "Omar Faris",
    keyFeatures: [
      "OCR confidence below 60%",
      "Unclear handwriting regions",
      "Multiple unrecognized symbols",
      "Requires teacher review",
      "Shows confidence scoring UI",
      "Demonstrates manual override capabilities",
      "Warning flags for educators",
    ],
    classId: "mathematics-grade-10",
    examIds: ["exam_math_algebra_probability"],
    submissionIds: ["sub_weak_001"],
  },

  math_exam: {
    id: "math_exam",
    name: "Mathematics Exam Scenario",
    description:
      "Comprehensive math exam across multiple difficulty levels (algebra, quadratic, probability, calculus).",
    keyFeatures: [
      "Algebraic equation solving",
      "Quadratic equations with multiple methods",
      "Probability and counting",
      "Calculus concepts (derivatives, integration)",
      "Shows formula recognition",
      "Demonstrates calculation accuracy",
      "Covers beginner to advanced content",
    ],
    classId: "mathematics-grade-10",
    examIds: [
      "exam_math_algebra_linear",
      "exam_math_algebra_quadratic",
      "exam_math_algebra_probability",
      "exam_math_calculus_derivatives",
    ],
  },

  science_table_exam: {
    id: "science_table_exam",
    name: "Science with Data Tables",
    description:
      "Science exams featuring data tables, chemical equations, and structured problem-solving.",
    keyFeatures: [
      "Table detection and parsing",
      "Chemical equation balancing",
      "Data analysis and interpretation",
      "Missing cell handling",
      "Scientific notation",
      "Unit conversions",
      "Shows OCR table capabilities",
    ],
    classId: "chemistry-grade-10",
    examIds: [
      "exam_science_chem_reactions",
      "exam_science_chem_tables",
    ],
  },

  physics_exam: {
    id: "physics_exam",
    name: "Physics Exam Scenario",
    description: "Physics exams with formulas, diagrams, and numerical problem-solving.",
    keyFeatures: [
      "Free-body diagrams",
      "Physics formulas (F=ma, W=mg, etc.)",
      "Numerical calculations",
      "Units and dimensional analysis",
      "Multiple problem-solving strategies",
      "Shows formula recognition",
    ],
    classId: "physics-grade-11",
    examIds: [
      "exam_science_physics_newton",
      "exam_science_physics_energy",
    ],
  },

  multilingual: {
    id: "multilingual",
    name: "Multilingual Exam Scenario",
    description:
      "Exams with mixed languages (Arabic, French, English). Tests OCR in multiple languages.",
    studentRole: "Rania Hadjadj",
    keyFeatures: [
      "Arabic text recognition",
      "French text recognition",
      "English text recognition",
      "Translation tasks",
      "Language switching",
      "Cultural content",
      "Multilingual grading rubric",
    ],
    classId: "language-grade-11",
    examIds: [
      "exam_multi_arabic_french",
      "exam_multi_trilingual",
    ],
    submissionIds: ["sub_multilingual_001"],
  },

  incomplete_submission: {
    id: "incomplete_submission",
    name: "Incomplete Submission Scenario",
    description:
      "Student submission with missing pages or unanswered questions. Shows handling of incomplete work.",
    studentRole: "Karim Youssef",
    keyFeatures: [
      "Missing pages detected",
      "Partial answers",
      "Low OCR confidence due to missing content",
      "Flags for student resubmission",
      "Shows alert system",
      "Tracks submission status",
    ],
    classId: "chemistry-grade-10",
    examIds: ["exam_science_chem_reactions"],
    submissionIds: ["sub_average_002"],
  },

  teacher_dashboard: {
    id: "teacher_dashboard",
    name: "Teacher Dashboard",
    description:
      "Comprehensive teacher view with analytics across all classes, students, and performance metrics.",
    teacherRole: "Sarah Bennacer",
    keyFeatures: [
      "Multiple class analytics",
      "Student performance distribution",
      "Recent submission tracking",
      "Grade distribution charts",
      "Alert system (needs review items)",
      "Performance trends",
      "Class comparisons",
    ],
    classId: "mathematics-grade-10",
  },

  student_dashboard: {
    id: "student_dashboard",
    name: "Student Dashboard",
    description:
      "Student view showing personal performance, submitted exams, and feedback.",
    studentRole: "Ben Mohamed Ali",
    keyFeatures: [
      "Personal score history",
      "Exam submissions and status",
      "Received feedback",
      "Performance trends",
      "Enrolled classes",
      "Next assessment",
      "Personal achievement stats",
    ],
  },

  processing_workflow: {
    id: "processing_workflow",
    name: "Exam Processing Workflow",
    description:
      "Complete workflow from submission through OCR, analysis, grading to final report.",
    keyFeatures: [
      "File upload simulation",
      "OCR processing status",
      "Confidence scoring display",
      "Automated analysis results",
      "Teacher review interface",
      "Feedback generation",
      "Report download",
      "Archive/export options",
    ],
  },

  history_essay_exam: {
    id: "history_essay_exam",
    name: "History Essay Exam",
    description: "History exams with paragraph-based answers requiring OCR and linguistic analysis.",
    keyFeatures: [
      "Paragraph text extraction",
      "Essay quality assessment",
      "Historical content recognition",
      "Long-form answer handling",
      "Grading rubric application",
      "Suggested improvements",
    ],
    classId: "history-grade-11",
    examIds: [
      "exam_history_algeria",
      "exam_history_industrial",
    ],
  },

  language_writing_exam: {
    id: "language_writing_exam",
    name: "Language & Writing Exam",
    description: "Language exams with grammar, writing, and comprehension components.",
    keyFeatures: [
      "Grammar error detection",
      "Writing quality assessment",
      "Comprehension questions",
      "Translation accuracy",
      "Vocabulary usage",
      "Stylistic feedback",
    ],
    classId: "language-grade-10",
    examIds: [
      "exam_lang_english_grammar",
      "exam_lang_english_writing",
    ],
  },
};

export const SCENARIO_CATEGORIES = {
  "By Student Level": {
    scenarios: [
      "excellent_student",
      "average_student",
      "weak_student",
    ],
    description: "View scenarios organized by student performance level",
  },
  "By Subject": {
    scenarios: [
      "math_exam",
      "science_table_exam",
      "physics_exam",
      "history_essay_exam",
      "language_writing_exam",
    ],
    description: "Explore different subject matter and exam types",
  },
  "By Challenge Type": {
    scenarios: [
      "low_ocr_confidence",
      "incomplete_submission",
      "multilingual",
    ],
    description: "See how the system handles challenging cases",
  },
  "Dashboard Views": {
    scenarios: [
      "teacher_dashboard",
      "student_dashboard",
    ],
    description: "Explore user dashboards",
  },
  "Full Workflows": {
    scenarios: [
      "processing_workflow",
    ],
    description: "See complete end-to-end workflows",
  },
};

export const getScenarioById = (id: string): DemoScenario | undefined => {
  return DEMO_SCENARIOS[id];
};

export const getAllScenarios = (): DemoScenario[] => {
  return Object.values(DEMO_SCENARIOS);
};

export const getScenariosByCategory = (category: string): DemoScenario[] => {
  const categoryData = SCENARIO_CATEGORIES[category as keyof typeof SCENARIO_CATEGORIES];
  if (!categoryData) return [];
  return categoryData.scenarios
    .map((id) => DEMO_SCENARIOS[id])
    .filter(Boolean);
};

export const getRecommendedScenario = (): DemoScenario => {
  return DEMO_SCENARIOS.excellent_student;
};

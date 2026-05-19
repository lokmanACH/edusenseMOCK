/**
 * Mock Student Submissions & Scenarios
 * Realistic student answers across different performance levels
 */

export interface MockSubmission {
  _id: string;
  studentId: string;
  studentName: string;
  examId: string;
  examTitle: string;
  classId: string;
  submittedAt: string;
  status: "submitted" | "processing" | "completed" | "needs_review" | "failed";
  rawScore?: number;
  confidence?: number;
  quality?: "excellent" | "good" | "average" | "poor";
  issues?: string[];
}

export const SUBMISSION_SCENARIOS = {
  // Excellent Student - Perfect submission
  excellent_clean: {
    _id: "sub_excellent_001",
    studentId: "student_excellent_001",
    studentName: "Ben Mohamed Ali",
    examId: "exam_math_algebra_linear",
    examTitle: "Algebra Quiz - Linear Equations",
    classId: "mathematics-grade-10",
    submittedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: "completed",
    rawScore: 95,
    confidence: 0.98,
    quality: "excellent",
    issues: [],
  },

  // Excellent Student - Clean handwriting, well organized
  excellent_physics: {
    _id: "sub_excellent_002",
    studentId: "student_excellent_002",
    studentName: "Saad Azzem Maher",
    examId: "exam_science_physics_newton",
    examTitle: "Newton's Laws of Motion",
    classId: "physics-grade-11",
    submittedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: "completed",
    rawScore: 92,
    confidence: 0.96,
    quality: "excellent",
    issues: [],
  },

  // Average Student - Good content, some handwriting issues
  average_decent: {
    _id: "sub_average_001",
    studentId: "student_avg_001",
    studentName: "Amira Hassan",
    examId: "exam_math_algebra_quadratic",
    examTitle: "Quadratic Equations Test",
    classId: "mathematics-grade-10",
    submittedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: "completed",
    rawScore: 76,
    confidence: 0.82,
    quality: "good",
    issues: ["Some handwriting unclear in problem 3", "Minor calculation error in step 4"],
  },

  // Average Student - Missing some pages
  average_incomplete: {
    _id: "sub_average_002",
    studentId: "student_avg_002",
    studentName: "Karim Youssef",
    examId: "exam_science_chem_reactions",
    examTitle: "Chemical Reactions and Equations",
    classId: "chemistry-grade-10",
    submittedAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
    status: "needs_review",
    rawScore: 64,
    confidence: 0.71,
    quality: "average",
    issues: [
      "Page 2 of 4 is completely missing",
      "Questions 5-7 not answered",
      "OCR detected missing content",
    ],
  },

  // Average Student - Messy handwriting
  average_messy: {
    _id: "sub_average_003",
    studentId: "student_avg_003",
    studentName: "Lina Samir",
    examId: "exam_lang_english_writing",
    examTitle: "English Essay Writing",
    classId: "language-grade-10",
    submittedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    status: "completed",
    rawScore: 72,
    confidence: 0.68,
    quality: "average",
    issues: [
      "Handwriting quality is poor in several lines",
      "Some words are illegible",
      "Needs teacher review for exact interpretation",
    ],
  },

  // Weak Student - Low confidence OCR
  weak_low_confidence: {
    _id: "sub_weak_001",
    studentId: "student_weak_001",
    studentName: "Omar Faris",
    examId: "exam_math_algebra_probability",
    examTitle: "Probability and Counting",
    classId: "mathematics-grade-10",
    submittedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    status: "needs_review",
    rawScore: 38,
    confidence: 0.54,
    quality: "poor",
    issues: [
      "Very low OCR confidence (54%) - requires manual review",
      "Multiple unclear mathematical notations",
      "Possible wrong question numbering",
      "Answer regions not clearly marked",
    ],
  },

  // Weak Student - Mostly empty
  weak_empty: {
    _id: "sub_weak_002",
    studentId: "student_weak_002",
    studentName: "Sara Malik",
    examId: "exam_science_chem_tables",
    examTitle: "Solution Chemistry with Data Tables",
    classId: "chemistry-grade-10",
    submittedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    status: "failed",
    rawScore: 12,
    confidence: 0.41,
    quality: "poor",
    issues: [
      "Only 2 out of 12 questions attempted",
      "Most pages are blank",
      "No clear understanding of content",
      "Processing failed - insufficient content",
    ],
  },

  // Weak Student - Wrong numbering
  weak_wrong_numbering: {
    _id: "sub_weak_003",
    studentId: "student_weak_003",
    studentName: "Achouche Loukmene",
    examId: "exam_history_wwii",
    examTitle: "World War II - Causes and Consequences",
    classId: "history-grade-11",
    submittedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    status: "needs_review",
    rawScore: 31,
    confidence: 0.48,
    quality: "poor",
    issues: [
      "Student numbered answers out of order",
      "Answer for Q3 is in Q2 position",
      "Mixed up question numbering throughout",
      "Teacher verification required",
    ],
  },

  // Multilingual Student - Mixed languages
  multilingual_mixed: {
    _id: "sub_multilingual_001",
    studentId: "student_multi_001",
    studentName: "Rania Hadjadj",
    examId: "exam_multi_arabic_french",
    examTitle: "Arabic-French Language Exam",
    classId: "language-grade-11",
    submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: "completed",
    rawScore: 81,
    confidence: 0.85,
    quality: "good",
    issues: ["Some Arabic text slightly unclear", "French translation is accurate"],
  },

  // Multilingual Student - Table with mixed scripts
  multilingual_tables: {
    _id: "sub_multilingual_002",
    studentId: "student_multi_002",
    studentName: "Yacine Boukhalfa",
    examId: "exam_science_chem_tables",
    examTitle: "Solution Chemistry with Data Tables",
    classId: "chemistry-grade-10",
    submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: "completed",
    rawScore: 85,
    confidence: 0.89,
    quality: "good",
    issues: ["Some cells in data table are empty but expected", "Overall quality is good"],
  },

  // Processing Scenario
  processing_pending: {
    _id: "sub_processing_001",
    studentId: "student_avg_001",
    studentName: "Amira Hassan",
    examId: "exam_math_calculus_derivatives",
    examTitle: "Introduction to Derivatives",
    classId: "mathematics-grade-10",
    submittedAt: new Date(Date.now() - 0.5 * 24 * 60 * 60 * 1000).toISOString(),
    status: "processing",
    rawScore: undefined,
    confidence: 0,
    quality: "average",
    issues: ["Analysis in progress..."],
  },
};

export const PARTIAL_ANSWER_EXAMPLES: Record<string, string> = {
  excellent_math: `
Question 1: Solve 2x + 5 = 13
Step 1: 2x + 5 - 5 = 13 - 5
Step 2: 2x = 8
Step 3: x = 4
Check: 2(4) + 5 = 8 + 5 = 13 ✓
  `,

  average_math: `
Question 2: Solve x² + 5x + 6 = 0
Using factoring: (x + 2)(x + 3) = 0
Solutions: x = -2 or x = -3
[Work shown but some steps skipped, final answers correct]
  `,

  weak_math: `
Question 3: Probability problem
Answer: 1/2?
[Very brief answer with no work shown, possibly incorrect]
  `,

  multilingual_arabic: `
السؤال 1: ترجم إلى الفرنسية
الإجابة: [Student writes partial translation with mix of Arabic and French]
  `,

  multilingual_french: `
Question 1: Traduire en français
Réponse: "L'éducation est importante pour la société"
[Partial answer, some grammar issues]
  `,

  mixed_script: `
Table of Results:
| Solution | Molarity | pH    |
|----------|----------|-------|
| HCl      | 0.1M     | 1.0   |
| NaOH     | 0.1M     | 13.0  |
| Water    | -        | [empty - expected] |
  `,
};

export const SUBMISSION_QUALITY_DESCRIPTIONS: Record<string, string> = {
  excellent:
    "Clean handwriting, clear organization, complete answers, professional presentation",
  good: "Good handwriting, mostly clear, minor organizational issues, mostly complete",
  average:
    "Readable handwriting with some unclear parts, inconsistent organization, some answers missing",
  poor: "Very unclear handwriting, disorganized, many blank areas, needs significant teacher review",
};

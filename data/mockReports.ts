/**
 * Mock Grading Results & Reports
 * Realistic grading and personalized feedback
 */

export interface MockReport {
  studentId: string;
  studentName: string;
  classId: string;
  className: string;
  examId: string;
  examTitle: string;
  submissionDate: string;
  gradedDate: string;
  rawScore: number;
  percentage: number;
  grade: "A+" | "A" | "A-" | "B+" | "B" | "B-" | "C+" | "C" | "C-" | "D" | "F";
  feedback: {
    overallAssessment: string;
    strengths: string[];
    areasForImprovement: string[];
    detailedFeedback: string;
    recommendations: string[];
  };
  rubricScores?: Record<string, number>;
  confidence: number;
  requiresTeacherReview: boolean;
}

export const GRADING_SCENARIOS = {
  excellent_student_math: {
    studentId: "student_excellent_001",
    studentName: "Ben Mohamed Ali",
    classId: "mathematics-grade-10",
    className: "grp 4 SDIA - Algebra & Functions",
    examId: "exam_math_algebra_linear",
    examTitle: "Algebra Quiz - Linear Equations",
    submissionDate: "2024-01-10",
    gradedDate: "2024-01-11",
    rawScore: 95,
    percentage: 95,
    grade: "A+",
    feedback: {
      overallAssessment:
        "Exceptional performance! This student demonstrates mastery of linear equation solving with perfect execution across all problems.",
      strengths: [
        "Perfect algebraic manipulation",
        "Clear step-by-step documentation",
        "Correct verification of solutions",
        "Professional mathematical presentation",
        "Excellent attention to detail",
      ],
      areasForImprovement: ["None identified - excellent work across the board"],
      detailedFeedback:
        "Every solution is correct and well-explained. The student shows all steps clearly, making it easy to follow the logic. Verification of answers demonstrates understanding beyond just arriving at the correct result. This is the standard to which other students should aspire.",
      recommendations: [
        "Provide advanced problem sets to maintain challenge",
        "Consider this student as a peer tutor for classmates",
        "Explore extension topics like systems of equations",
      ],
    },
    rubricScores: {
      "Correctness of Answers": 10,
      "Clarity of Work": 10,
      "Mathematical Notation": 10,
      "Problem-Solving Process": 10,
      "Communication": 10,
    },
    confidence: 0.98,
    requiresTeacherReview: false,
  },

  good_student_physics: {
    studentId: "student_excellent_002",
    studentName: "Saad Azzem Maher",
    classId: "physics-grade-11",
    className: "grp 11 SDSI - Mechanics & Energy",
    examId: "exam_science_physics_newton",
    examTitle: "Newton's Laws of Motion",
    submissionDate: "2024-01-15",
    gradedDate: "2024-01-16",
    rawScore: 92,
    percentage: 92,
    grade: "A",
    feedback: {
      overallAssessment:
        "Strong performance demonstrating solid understanding of Newton's Laws. Most problems solved correctly with clear reasoning.",
      strengths: [
        "Accurate free-body diagrams",
        "Correct application of F=ma",
        "Good problem-solving strategy",
        "Clear identification of forces",
      ],
      areasForImprovement: [
        "Question 7: Could specify coordinate system more clearly",
        "Question 9: Minor units error in final answer",
      ],
      detailedFeedback:
        "This student clearly understands the fundamentals of Newton's Laws and applies them effectively. The work is well-organized and mostly error-free. Two minor issues prevent this from being perfect: slightly ambiguous coordinate system setup in one problem and a units notation mistake in another. These are easily correctable with attention to detail.",
      recommendations: [
        "Emphasize consistent coordinate system specification",
        "Practice unit conversions and dimensional analysis",
        "Excellent foundation for advanced mechanics topics",
      ],
    },
    rubricScores: {
      "Correctness of Answers": 9,
      "Clarity of Work": 10,
      "Diagram Quality": 9,
      "Understanding of Concepts": 10,
      "Accuracy of Units": 8,
    },
    confidence: 0.96,
    requiresTeacherReview: false,
  },

  average_student_chemistry: {
    studentId: "student_avg_001",
    studentName: "Amira Hassan",
    classId: "chemistry-grade-10",
    className: "grp 10 Chemistry - Fundamentals",
    examId: "exam_science_chem_reactions",
    examTitle: "Chemical Reactions and Equations",
    submissionDate: "2024-02-05",
    gradedDate: "2024-02-06",
    rawScore: 76,
    percentage: 76,
    grade: "B-",
    feedback: {
      overallAssessment:
        "Adequate performance. This student shows basic understanding of chemical reactions but needs more practice with complex equations and stoichiometry.",
      strengths: [
        "Correct identification of reaction types",
        "Generally balanced equations",
        "Reasonable problem-solving attempts",
      ],
      areasForImprovement: [
        "Questions 5-6: Equation balancing errors",
        "Question 8: Stoichiometry calculation incomplete",
        "Missing explanation for limiting reagent determination",
      ],
      detailedFeedback:
        "This student has the basics down but struggles with more complex applications. Several equation balancing errors suggest a need for more practice. The stoichiometry problem was started correctly but not completed. Overall, with targeted practice, this student can improve significantly.",
      recommendations: [
        "Practice equation balancing with increasing complexity",
        "Work through stoichiometry examples step-by-step",
        "Study limiting reagent concept more thoroughly",
        "Attend after-school help sessions if available",
      ],
    },
    rubricScores: {
      "Equation Balancing": 7,
      "Understanding Reactions": 8,
      "Stoichiometry": 6,
      "Problem-Solving": 7,
      "Communication": 7,
    },
    confidence: 0.82,
    requiresTeacherReview: false,
  },

  weak_student_with_issues: {
    studentId: "student_weak_001",
    studentName: "Omar Faris",
    classId: "mathematics-grade-10",
    className: "grp 4 SDIA - Algebra & Functions",
    examId: "exam_math_algebra_probability",
    examTitle: "Probability and Counting",
    submissionDate: "2024-02-10",
    gradedDate: "2024-02-12",
    rawScore: 38,
    percentage: 38,
    grade: "F",
    feedback: {
      overallAssessment:
        "This submission indicates significant gaps in understanding probability concepts. Manual review was required due to OCR challenges.",
      strengths: [
        "Student attempted most questions",
        "Some understanding of basic counting principles",
      ],
      areasForImprovement: [
        "Fundamental misunderstanding of permutations vs combinations",
        "Incorrect probability calculations",
        "Missing work and explanations",
        "Several questions left blank",
        "Handwriting quality made automatic analysis difficult",
      ],
      detailedFeedback:
        "This student needs significant intervention. The core concepts of permutations, combinations, and probability are not yet mastered. Several questions were unanswered, suggesting either confusion or time management issues. The handwriting made automatic grading challenging, but manual review confirms low understanding levels. Recommend one-on-one tutoring.",
      recommendations: [
        "Schedule immediate tutoring session",
        "Review basic counting principles from previous unit",
        "Practice simple probability problems",
        "Build up to more complex scenarios gradually",
        "Encourage neater, more legible work for better feedback",
      ],
    },
    rubricScores: {
      "Conceptual Understanding": 2,
      "Problem-Solving": 3,
      "Accuracy": 2,
      "Completeness": 3,
      "Clarity": 3,
    },
    confidence: 0.54,
    requiresTeacherReview: true,
  },

  low_ocr_confidence_report: {
    studentId: "student_avg_002",
    studentName: "Karim Youssef",
    classId: "chemistry-grade-10",
    className: "grp 10 Chemistry - Fundamentals",
    examId: "exam_science_chem_reactions",
    examTitle: "Chemical Reactions and Equations",
    submissionDate: "2024-02-08",
    gradedDate: "2024-02-10",
    rawScore: 64,
    percentage: 64,
    grade: "D+",
    feedback: {
      overallAssessment:
        "MANUAL REVIEW REQUIRED: OCR confidence was only 71%. The grading below is based on what could be read, but teacher verification is essential.",
      strengths: [
        "Some correct chemical formulas written",
        "Apparent understanding of reaction types in readable portions",
      ],
      areasForImprovement: [
        "Pages 2-3 of submission were missing (critical content)",
        "Handwriting quality very poor in several sections",
        "Many equations could not be read with confidence",
      ],
      detailedFeedback:
        "IMPORTANT: This submission is incomplete and difficult to assess. Page 2 is completely missing, which contains questions 5-7. Only 64% of expected content was available for analysis. The handwriting is very difficult to read. Recommend asking student to resubmit with complete, legible work.",
      recommendations: [
        "Request student resubmit complete exam (all pages)",
        "Ask student to improve handwriting legibility",
        "Provide clear submission guidelines",
        "Consider alternative assessment method if chronic issues",
      ],
    },
    rubricScores: {
      "Accuracy": 5,
      "Completeness": 3,
      "Clarity": 2,
      "Understanding": 6,
      "Presentation": 2,
    },
    confidence: 0.71,
    requiresTeacherReview: true,
  },

  multilingual_student_report: {
    studentId: "student_multi_001",
    studentName: "Rania Hadjadj",
    classId: "language-grade-11",
    className: "grp 11 French - Communication",
    examId: "exam_multi_arabic_french",
    examTitle: "Arabic-French Language Exam",
    submissionDate: "2024-02-15",
    gradedDate: "2024-02-16",
    rawScore: 81,
    percentage: 81,
    grade: "B",
    feedback: {
      overallAssessment:
        "Good bilingual performance. This student demonstrates strong competence in both Arabic and French with minor issues.",
      strengths: [
        "Excellent French comprehension and translation",
        "Clear Arabic handwriting",
        "Good understanding of both languages",
        "Creative and accurate translations",
      ],
      areasForImprovement: [
        "Few Arabic grammar errors (verb tense in Q3)",
        "One French translation could be more idiomatic",
      ],
      detailedFeedback:
        "This is a strong bilingual submission. The student clearly has good command of both languages. Most comprehension questions are answered correctly, and translations are accurate. A few minor grammar issues in Arabic and one slightly awkward French phrasing are the only detractions from an otherwise excellent performance.",
      recommendations: [
        "Encourage this student to participate in advanced language program",
        "Consider peer teaching for other students",
        "Practice more idiomatic French expressions",
        "Continue strong performance",
      ],
    },
    rubricScores: {
      "Arabic Understanding": 8,
      "French Understanding": 9,
      "Translation Accuracy": 8,
      "Grammar (Arabic)": 7,
      "Grammar (French)": 9,
    },
    confidence: 0.85,
    requiresTeacherReview: false,
  },
};

// Dashboard aggregated data
export const DASHBOARD_PERFORMANCE_DATA = {
  classPerformance: {
    "mathematics-grade-10": {
      className: "grp 4 SDIA - Algebra & Functions",
      totalExams: 5,
      totalSubmissions: 12,
      averageScore: 76,
      passRate: 83,
      distribution: {
        excellent: 3,
        good: 4,
        average: 3,
        poor: 2,
      },
    },
    "physics-grade-11": {
      className: "grp 11 SDSI - Mechanics & Energy",
      totalExams: 4,
      totalSubmissions: 10,
      averageScore: 79,
      passRate: 85,
      distribution: {
        excellent: 2,
        good: 5,
        average: 2,
        poor: 1,
      },
    },
    "chemistry-grade-10": {
      className: "grp 10 Chemistry - Fundamentals",
      totalExams: 4,
      totalSubmissions: 11,
      averageScore: 72,
      passRate: 78,
      distribution: {
        excellent: 1,
        good: 5,
        average: 4,
        poor: 1,
      },
    },
  },

  studentPerformance: {
    excellent: {
      averageScore: 92,
      passRate: 100,
      feedbackQuality: "Exceptional",
      typicalGrade: "A+",
    },
    good: {
      averageScore: 81,
      passRate: 98,
      feedbackQuality: "Good",
      typicalGrade: "B+",
    },
    average: {
      averageScore: 68,
      passRate: 76,
      feedbackQuality: "Fair",
      typicalGrade: "C",
    },
    poor: {
      averageScore: 42,
      passRate: 35,
      feedbackQuality: "Needs Improvement",
      typicalGrade: "F",
    },
  },
};

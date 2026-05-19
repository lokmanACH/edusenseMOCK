/**
 * Mock OCR/Analysis Results
 * Realistic OCR and analysis output with various confidence levels
 */

export interface MockOCRResult {
  submissionId: string;
  confidence: number;
  status: "high_confidence" | "medium_confidence" | "low_confidence" | "failed";
  detectedElements: {
    text: string[];
    tables: Array<{ rows: number; cols: number; data: string[][] }>;
    formulas: string[];
    handwriting_regions: number;
    images: number;
  };
  issues: string[];
  extractedContent: string;
}

export const OCR_SCENARIOS = {
  high_confidence: {
    submissionId: "sub_excellent_001",
    confidence: 0.98,
    status: "high_confidence" as const,
    detectedElements: {
      text: [
        "Question 1: Solve 2x + 5 = 13",
        "Step 1: 2x = 8",
        "Step 2: x = 4",
      ],
      tables: [],
      formulas: ["2x + 5 = 13", "x = 4"],
      handwriting_regions: 1,
      images: 0,
    },
    issues: [],
    extractedContent: `Perfect extraction. All mathematical notations clearly recognized.
Equations detected: 2x + 5 = 13, x = 4
All steps are legible and properly formatted.`,
  },

  medium_confidence: {
    submissionId: "sub_average_001",
    confidence: 0.82,
    status: "medium_confidence" as const,
    detectedElements: {
      text: [
        "Question 1: Solve x² + 5x + 6 = 0",
        "(x + 2)(x + 3) = 0",
        "x = -2 or x = -3",
        "[Unclear word] result",
      ],
      tables: [],
      formulas: ["x² + 5x + 6 = 0", "(x + 2)(x + 3) = 0"],
      handwriting_regions: 2,
      images: 0,
    },
    issues: [
      "1 word unclear in line 3 (82% sure it's 'final')",
      "Some handwriting is slightly smudged",
    ],
    extractedContent: `Good extraction with minor uncertainties. Some mathematical notation needed clarification.
Equations: x² + 5x + 6 = 0, (x + 2)(x + 3) = 0
Confidence: 82% - One ambiguous word detected.`,
  },

  low_confidence: {
    submissionId: "sub_weak_001",
    confidence: 0.54,
    status: "low_confidence" as const,
    detectedElements: {
      text: [
        "Question [unclear - 3 or 8?]: Probability",
        "[Multiple unclear words]",
        "Answer: [illegible]",
      ],
      tables: [],
      formulas: ["[Unrecognized formula]", "[Partial symbol]"],
      handwriting_regions: 4,
      images: 1,
    },
    issues: [
      "Question number unclear (3 or 8?)",
      "4 handwriting regions too unclear for OCR",
      "Multiple mathematical symbols unrecognized",
      "1 embedded image - may contain important content",
      "54% confidence - REQUIRES TEACHER REVIEW",
    ],
    extractedContent: `WARNING: Low confidence extraction (54%). Significant portions are illegible.
Multiple unclear elements detected:
- Question number ambiguous
- Several mathematical notations unrecognized
- Handwriting quality poor in multiple regions
RECOMMENDATION: Manual teacher review required before grading.`,
  },

  with_tables: {
    submissionId: "sub_multilingual_002",
    confidence: 0.89,
    status: "medium_confidence" as const,
    detectedElements: {
      text: [
        "Data Table Results:",
        "Solution HCl",
        "Molarity: 0.1M",
        "pH: 1.0",
      ],
      tables: [
        {
          rows: 4,
          cols: 3,
          data: [
            ["Solution", "Molarity", "pH"],
            ["HCl", "0.1M", "1.0"],
            ["NaOH", "0.1M", "13.0"],
            ["Water", "-", "[empty]"],
          ],
        },
      ],
      formulas: [],
      handwriting_regions: 0,
      images: 0,
    },
    issues: [
      "Cell (3,3) empty - may be expected based on question",
      "Some column borders slightly unclear",
    ],
    extractedContent: `Table detected and parsed successfully. 
Table dimensions: 4 rows × 3 columns
All values extracted and cross-checked.
One empty cell in solution data (expected for pure water).
Confidence: 89% - Minor border detection issues.`,
  },

  with_formulas: {
    submissionId: "sub_excellent_002",
    confidence: 0.96,
    status: "high_confidence" as const,
    detectedElements: {
      text: [
        "F = ma",
        "Weight = mg",
        "Force = 2kg × 10m/s²",
        "Force = 20N",
      ],
      tables: [],
      formulas: ["F = ma", "W = mg", "F = 2 × 10 = 20"],
      handwriting_regions: 1,
      images: 0,
    },
    issues: [],
    extractedContent: `Excellent formula recognition. All mathematical notations properly parsed.
Detected 3 key physics formulas:
1. F = ma (Newton's second law)
2. W = mg (Weight calculation)
3. F = 2kg × 10m/s² = 20N (Application)
Confidence: 96% - Professional quality submission.`,
  },

  mixed_language: {
    submissionId: "sub_multilingual_001",
    confidence: 0.85,
    status: "medium_confidence" as const,
    detectedElements: {
      text: [
        "السؤال 1",
        "Question 1: Translate to French",
        "Réponse: L'éducation est importante",
        "مهم للمجتمع",
      ],
      tables: [],
      formulas: [],
      handwriting_regions: 2,
      images: 0,
    },
    issues: [
      "Mixed language content (Arabic, English, French)",
      "Some Arabic text requires verification (85% confidence)",
    ],
    extractedContent: `Multilingual content detected - Arabic, English, French.
Extracted text verified in all three languages.
Arabic text confidence: 85%
Translation assessment possible with language-specific teacher.
Overall extraction quality: Good with minor language-specific uncertainties.`,
  },

  processing_failure: {
    submissionId: "sub_weak_002",
    confidence: 0.0,
    status: "failed" as const,
    detectedElements: {
      text: [],
      tables: [],
      formulas: [],
      handwriting_regions: 0,
      images: 0,
    },
    issues: [
      "Processing failed: Insufficient readable content",
      "Most pages appear blank",
      "No meaningful text regions detected",
      "Cannot proceed with automated analysis",
    ],
    extractedContent: `PROCESSING FAILED
Reason: Insufficient readable content
Detected only blank or nearly blank pages.
No text, formulas, or structured data could be extracted.
ACTION REQUIRED: Student may need to resubmit with clearer/complete work.`,
  },

  with_missing_regions: {
    submissionId: "sub_average_002",
    confidence: 0.71,
    status: "medium_confidence" as const,
    detectedElements: {
      text: [
        "Question 1: [complete]",
        "Question 2: [complete]",
        "[Page 2 missing content]",
        "Question 8: [partial]",
      ],
      tables: [],
      formulas: [],
      handwriting_regions: 2,
      images: 0,
    },
    issues: [
      "Page 2 completely missing from submission",
      "Questions 5-7 have no corresponding content",
      "Question 8 partially visible but incomplete",
      "71% of expected content detected",
    ],
    extractedContent: `INCOMPLETE SUBMISSION DETECTED
Pages submitted: 3/4
Detectable content: 71%
Missing regions:
- Full page 2 (Questions 5-7)
- Partial content from page 3
ACTION REQUIRED: Student should resubmit complete exam paper.`,
  },

  with_suggestions: {
    submissionId: "sub_average_003",
    confidence: 0.68,
    status: "medium_confidence" as const,
    detectedElements: {
      text: [
        "Technology in Education",
        "Benefits and Challenges",
        "[Multiple unclear passages]",
      ],
      tables: [],
      formulas: [],
      handwriting_regions: 3,
      images: 0,
    },
    issues: [
      "Handwriting quality inconsistent",
      "Some words illegible (marked as [unclear])",
      "68% confidence overall",
    ],
    extractedContent: `Essay detected with theme: "Technology in Education"
Word count estimate: ~280 words
Readability: Fair (3 regions with unclear handwriting)
Suggestions for improvement:
1. Use clearer handwriting or print where possible
2. Number your pages clearly
3. Use pen instead of pencil for better OCR
TEACHER REVIEW recommended for full comprehension.`,
  },
};

export const FEEDBACK_TEMPLATES = {
  excellent: {
    confidence: 0.95,
    strengths: [
      "Excellent reasoning with clear step-by-step work shown",
      "Mathematical notation properly formatted and easy to read",
      "All required elements present and well-organized",
      "Final answers clearly marked and correct",
    ],
    weaknesses: ["No significant issues identified"],
    recommendations:
      "Excellent work! This student demonstrates strong understanding. Consider providing extension problems to maintain engagement.",
    next_steps: "Consider for advanced program or tutoring others",
  },

  good: {
    confidence: 0.82,
    strengths: [
      "Good conceptual understanding demonstrated",
      "Most work is clearly shown and organized",
      "Correct method selection for problems",
      "Few arithmetic or notation errors",
    ],
    weaknesses: [
      "Some steps could be more clearly explained",
      "Minor handwriting clarity issues in places",
      "1-2 minor calculation errors",
    ],
    recommendations:
      "Good effort! Focus on showing all steps and double-checking calculations. This student is on the right track.",
    next_steps: "Reinforce multi-step problem-solving techniques",
  },

  average: {
    confidence: 0.71,
    strengths: [
      "Attempted most questions",
      "Basic understanding of core concepts",
      "Some work is clearly shown",
    ],
    weaknesses: [
      "Several steps missing or unexplained",
      "Inconsistent work quality",
      "Multiple arithmetic errors",
      "Organization could be improved",
    ],
    recommendations:
      "This student has potential but needs practice. Review fundamental concepts and encourage showing all work. Consider small group instruction.",
    next_steps: "Targeted remediation on core topics, practice problem sets",
  },

  poor: {
    confidence: 0.42,
    strengths: [
      "Student made an attempt",
      "Some correct understanding of basic concepts",
    ],
    weaknesses: [
      "Limited work shown",
      "Multiple conceptual gaps",
      "Most answers are incorrect or missing",
      "Needs significant review",
      "Low confidence in OCR - manual review recommended",
    ],
    recommendations:
      "This student requires significant intervention. Schedule one-on-one tutoring. Review fundamental skills from previous grade level. Consider alternative assessment methods.",
    next_steps:
      "Intensive remediation, one-on-one tutoring, prerequisite skill review",
  },

  processing_error: {
    confidence: 0.0,
    strengths: [],
    weaknesses: [
      "Submission incomplete or illegible",
      "Insufficient content for analysis",
      "Cannot generate automated feedback",
    ],
    recommendations:
      "This submission cannot be automatically analyzed. Please ask the student to resubmit with clearer, complete work.",
    next_steps: "Request student resubmission with complete exam paper",
  },
};

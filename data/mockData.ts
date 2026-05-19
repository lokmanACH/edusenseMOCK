
// Re-export all comprehensive mock data
export * from './mockUsers';
export * from './mockClasses';
export * from './mockExams';
export * from './mockSubmissions';
export * from './mockAnalysis';
export * from './mockReports';
export * from './mockScenarios';

export const DASHBOARD_STATS = {
  teacher: [
    { label: "Classes", value: "7" },
    { label: "Students", value: "65" },
    { label: "Submissions", value: "287" },
    { label: "AI Analyses", value: "265" },
  ],
  student: [
    { label: "Enrolled Classes", value: "4" },
    { label: "Assignments Done", value: "23" },
    { label: "Avg. Grade", value: "B+" },
    { label: "AI Feedbacks", value: "21" },
  ]
};

export const RECENT_ACTIVITIES = [
  { student: "Ben Mohamed Ali", exam: "Algebra Quiz - Linear Equations", status: "Completed", time: "1h ago" },
  { student: "Amira Hassan", exam: "Quadratic Equations Test", status: "Completed", time: "3h ago" },
  { student: "Rania Hadjadj", exam: "Arabic-French Language Exam", status: "Completed", time: "6h ago" },
  { student: "Karim Youssef", exam: "Chemical Reactions and Equations", status: "Processing", time: "8h ago" },
  { student: "Omar Faris", exam: "Probability and Counting", status: "Needs Review", time: "1d ago" },
  { student: "Lina Samir", exam: "English Essay Writing", status: "Completed", time: "1d ago" },
  { student: "Sara Malik", exam: "Solution Chemistry with Data Tables", status: "Failed", time: "2d ago" },
];

export const CHART_DATA = {
  submissions: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [12, 19, 10, 24, 18, 27, 15],
  },
  performance: {
    labels: ["Excellent (85-100)", "Good (70-84)", "Average (50-69)", "Needs Improvement (<50)"],
    data: [18, 31, 28, 12],
  },
  strengthWeakness: {
    labels: ["Concept Understanding", "Problem Solving", "Calculation Accuracy", "Communication", "Completeness"],
    strengths: [82, 78, 72, 75, 76],
    weaknesses: [18, 22, 28, 25, 24],
  }
};

export const CLASS_SECTIONS_DATA: Record<string, any[]> = {
  "mathematics-grade-10": [
    {
      id: 1,
      title: "Linear Equations",
      description: "Solving first-degree equations and verifying solutions.",
    },
    {
      id: 2,
      title: "Quadratic Equations",
      description: "Factoring, completing the square, and quadratic formula.",
    },
    {
      id: 3,
      title: "Probability and Counting",
      description: "Permutations, combinations, and probability scenarios.",
    },
    {
      id: 4,
      title: "Introduction to Derivatives",
      description: "Power rule, product rule, and chain rule applications.",
    },
    {
      id: 5,
      title: "Basic Integration",
      description: "Definite and indefinite integrals with various functions.",
    }
  ],
  "physics-grade-11": [
    {
      id: 1,
      title: "Newton's Laws of Motion",
      description: "Free-body diagrams, force calculations, and F=ma applications.",
    },
    {
      id: 2,
      title: "Work, Energy, and Power",
      description: "Kinetic energy, potential energy, and conservation principles.",
    },
    {
      id: 3,
      title: "Waves and Oscillations",
      description: "Wave properties, interference, and diffraction.",
    }
  ]
};

export const STUDENT_COURSES = [
  { id: "math-10", name: "Mathematics G-10", teacher: "Sarah Bennacer", progress: 85, color: "from-[#334155] to-[#1e293b]" },
  { id: "phys-11", name: "Physics G-11", teacher: "Ahmed Benali", progress: 79, color: "from-[#3b82f6] to-[#1d4ed8]" },
  { id: "chem-10", name: "Chemistry G-10", teacher: "Meriem Haddad", progress: 76, color: "from-[#10B981] to-[#059669]" },
  { id: "lang-10", name: "English & French", teacher: "Lina Bensalem", progress: 82, color: "from-[#F59E0B] to-[#d97706]" },
];

export const STUDENT_EXAMS: Record<string, any[]> = {
  "math-10": [
    { 
      id: 101, 
      title: "Algebra Quiz - Linear Equations", 
      date: "Jan 15, 2024", 
      grade: "A+", 
      score: 95,
      feedback: "Excellent reasoning, clear steps, perfect execution.", 
      strengths: ["Variable manipulation", "Equation verification", "Clear notation"], 
      weaknesses: [] 
    },
    { 
      id: 102, 
      title: "Quadratic Equations Test", 
      date: "Feb 01, 2024", 
      grade: "A-", 
      score: 88,
      feedback: "Strong understanding of methods, minor notation issues.", 
      strengths: ["Factoring skills", "Formula application"], 
      weaknesses: ["Coordinate system clarity"] 
    },
    { 
      id: 103, 
      title: "Probability and Counting", 
      date: "Feb 15, 2024", 
      grade: "B", 
      score: 76,
      feedback: "Good attempt, needs practice on complex counting scenarios.", 
      strengths: ["Basic permutation understanding"], 
      weaknesses: ["Combination applications", "Problem setup clarity"] 
    }
  ]
};

export const STUDENT_PERFORMANCE_TRENDS: Record<string, any> = {
  "math-10": {
    labels: ["Linear Equations", "Quadratic Test", "Probability Quiz", "Expected: Calculus"],
    data: [95, 88, 76, 81]
  }
};

export const PER_STUDENT_DATA: Record<string, any> = {
  "Amira Hassan": {
    exams: [
      { title: "Algebra Quiz 1", grade: "A-", score: 92, feedback: "Excellent grasp of variables.", date: "Oct 12, 2023" },
      { title: "Linear Equations", grade: "B+", score: 88, feedback: "Strong logic, watch for arithmetic.", date: "Nov 05, 2023" },
    ],
    trend: [85, 92, 88, 90, 95],
    strengths: ["Logic", "Variable manipulation"],
    weaknesses: ["Arithmetic accuracy"]
  },
  "Karim Youssef": {
    exams: [
      { title: "Algebra Quiz 1", grade: "C+", score: 78, feedback: "Needs practice in basic terms.", date: "Oct 12, 2023" },
      { title: "Linear Equations", grade: "B", score: 82, feedback: "Improving, but step-by-step logic needs work.", date: "Nov 05, 2023" },
    ],
    trend: [70, 75, 78, 80, 82],
    strengths: ["Visual graphing"],
    weaknesses: ["Mathematical calculation", "Logic"]
  },
  "Lina Samir": {
    exams: [
      { title: "Algebra Quiz 1", grade: "A", score: 96, feedback: "Perfect score in logic sections.", date: "Oct 12, 2023" },
      { title: "Linear Equations", grade: "A-", score: 93, feedback: "Very consistent performance.", date: "Nov 05, 2023" },
    ],
    trend: [90, 92, 96, 94, 98],
    strengths: ["Problem Solving", "Speed"],
    weaknesses: ["None identified"]
  }
};

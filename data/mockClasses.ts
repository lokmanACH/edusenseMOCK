/**
 * Mock Classes Data
 * Expanded classes with multiple teachers and realistic scenarios
 */

export interface MockClass {
  _id: string;
  name: string;
  subject: string;
  description: string;
  code: string;
  color: string;
  teacherId: string;
  studentCount: number;
  sectionCount: number;
  createdAt?: string;
  level?: "beginner" | "intermediate" | "advanced";
}

export const BANNER_COLORS = [
  "from-[#334155] to-[#1e293b]",
  "from-[#10B981] to-[#059669]",
  "from-[#F59E0B] to-[#d97706]",
  "from-[#3b82f6] to-[#1d4ed8]",
  "from-[#8b5cf6] to-[#6d28d9]",
  "from-[#ef4444] to-[#b91c1c]",
];

// Mathematics Classes
export const MATH_CLASSES: MockClass[] = [
  {
    _id: "mathematics-grade-10",
    name: "grp 4 SDIA - Algebra & Functions",
    subject: "Mathematics",
    description:
      "Algebra, functions, and equation solving with automated exam feedback. Mixed-level classroom.",
    code: "MAT10X",
    color: BANNER_COLORS[0],
    teacherId: "teacher_001",
    studentCount: 12,
    sectionCount: 5,
    createdAt: "2023-09-01",
    level: "intermediate",
  },
  {
    _id: "mathematics-grade-11",
    name: "grp 11 Advanced Mathematics",
    subject: "Mathematics",
    description:
      "Calculus, advanced algebra, and analytical geometry for students heading to STEM fields.",
    code: "MAT11A",
    color: BANNER_COLORS[0],
    teacherId: "teacher_001",
    studentCount: 8,
    sectionCount: 4,
    createdAt: "2023-09-05",
    level: "advanced",
  },
];

// Physics Classes
export const PHYSICS_CLASSES: MockClass[] = [
  {
    _id: "physics-grade-11",
    name: "grp 11 SDSI - Mechanics & Energy",
    subject: "Physics",
    description:
      "Mechanics, motion, energy, and force problems evaluated with EduSense. Strong focus on problem-solving.",
    code: "PHY11B",
    color: BANNER_COLORS[3],
    teacherId: "teacher_002",
    studentCount: 10,
    sectionCount: 4,
    createdAt: "2023-09-03",
    level: "intermediate",
  },
  {
    _id: "physics-grade-12",
    name: "grp 12 Physics - Waves & Electricity",
    subject: "Physics",
    description:
      "Advanced topics including wave motion, electromagnetism, and modern physics concepts.",
    code: "PHY12C",
    color: BANNER_COLORS[3],
    teacherId: "teacher_002",
    studentCount: 7,
    sectionCount: 3,
    createdAt: "2023-09-08",
    level: "advanced",
  },
];

// Chemistry Classes
export const CHEMISTRY_CLASSES: MockClass[] = [
  {
    _id: "chemistry-grade-10",
    name: "grp 10 Chemistry - Fundamentals",
    subject: "Chemistry",
    description:
      "Atomic structure, periodic trends, and chemical reactions. Good for beginners with mixed abilities.",
    code: "CHE10A",
    color: BANNER_COLORS[1],
    teacherId: "teacher_003",
    studentCount: 11,
    sectionCount: 3,
    createdAt: "2023-09-02",
    level: "beginner",
  },
  {
    _id: "chemistry-grade-11",
    name: "grp 11 Chemistry - Reactions & Solutions",
    subject: "Chemistry",
    description:
      "Advanced chemical reactions, stoichiometry, and solution chemistry with calculation-heavy problems.",
    code: "CHE11D",
    color: BANNER_COLORS[1],
    teacherId: "teacher_003",
    studentCount: 9,
    sectionCount: 4,
    createdAt: "2023-09-10",
    level: "intermediate",
  },
];

// History Classes
export const HISTORY_CLASSES: MockClass[] = [
  {
    _id: "history-grade-11",
    name: "grp 11 History - Revolutions & Change",
    subject: "History",
    description:
      "Exploring major historical events including the Algerian Revolution, Industrial Revolution, and World Wars.",
    code: "HIS11E",
    color: BANNER_COLORS[4],
    teacherId: "teacher_003",
    studentCount: 9,
    sectionCount: 3,
    createdAt: "2023-09-04",
    level: "intermediate",
  },
];

// Language Classes
export const LANGUAGE_CLASSES: MockClass[] = [
  {
    _id: "language-grade-10",
    name: "grp 10 English - Grammar & Writing",
    subject: "English",
    description:
      "English grammar, essay writing, and reading comprehension for intermediate learners.",
    code: "ENG10F",
    color: BANNER_COLORS[2],
    teacherId: "teacher_004",
    studentCount: 10,
    sectionCount: 3,
    createdAt: "2023-09-06",
    level: "intermediate",
  },
  {
    _id: "language-grade-11",
    name: "grp 11 French - Communication",
    subject: "French",
    description: "Advanced French language skills with focus on communication and literary analysis.",
    code: "FRE11G",
    color: BANNER_COLORS[2],
    teacherId: "teacher_004",
    studentCount: 8,
    sectionCount: 3,
    createdAt: "2023-09-07",
    level: "intermediate",
  },
  {
    _id: "language-grade-12",
    name: "grp 12 Multilingual Studies",
    subject: "Languages",
    description:
      "Advanced multilingual exam preparation with Arabic, French, and English integration.",
    code: "MLT12H",
    color: BANNER_COLORS[5],
    teacherId: "teacher_004",
    studentCount: 6,
    sectionCount: 2,
    createdAt: "2023-09-12",
    level: "advanced",
  },
];

export const ALL_CLASSES = [
  ...MATH_CLASSES,
  ...PHYSICS_CLASSES,
  ...CHEMISTRY_CLASSES,
  ...HISTORY_CLASSES,
  ...LANGUAGE_CLASSES,
];

export const CLASSES_BY_ID = ALL_CLASSES.reduce(
  (acc, cls) => {
    acc[cls._id] = cls;
    return acc;
  },
  {} as Record<string, MockClass>,
);

export const CLASSES_BY_TEACHER = ALL_CLASSES.reduce(
  (acc, cls) => {
    if (!acc[cls.teacherId]) acc[cls.teacherId] = [];
    acc[cls.teacherId].push(cls);
    return acc;
  },
  {} as Record<string, MockClass[]>,
);

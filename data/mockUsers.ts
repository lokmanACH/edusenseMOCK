/**
 * Mock Users Data
 * Realistic users with different roles and profiles
 */

export interface MockUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role: "teacher" | "student" | "admin";
  roleId?: string;
  school?: string;
  isRealUser?: boolean;
  avatar?: string;
  bio?: string;
  phone?: string;
  joinedDate?: string;
}

// Teachers
export const TEACHERS: MockUser[] = [
  {
    _id: "teacher_001",
    firstName: "Sarah",
    lastName: "Bennacer",
    email: "sarah.bennacer@edusense.demo",
    password: "demo123",
    role: "teacher",
    school: "University Constantine 2",
    isRealUser: true,
    avatar: "SB",
    bio: "Mathematics specialist with 8 years experience",
    phone: "+213 21 234 5678",
    joinedDate: "2023-01-15",
  },
  {
    _id: "teacher_002",
    firstName: "Ahmed",
    lastName: "Benali",
    email: "ahmed.benali@edusense.demo",
    password: "demo123",
    role: "teacher",
    school: "University Constantine 2",
    isRealUser: true,
    avatar: "AB",
    bio: "Physics teacher, expert in mechanics and waves",
    phone: "+213 21 234 5679",
    joinedDate: "2023-02-20",
  },
  {
    _id: "teacher_003",
    firstName: "Meriem",
    lastName: "Haddad",
    email: "meriem.haddad@edusense.demo",
    password: "demo123",
    role: "teacher",
    school: "University Constantine 2",
    isRealUser: true,
    avatar: "MH",
    bio: "History and culture educator",
    phone: "+213 21 234 5680",
    joinedDate: "2023-03-10",
  },
  {
    _id: "teacher_004",
    firstName: "Lina",
    lastName: "Bensalem",
    email: "lina.bensalem@edusense.demo",
    password: "demo123",
    role: "teacher",
    school: "University Constantine 2",
    isRealUser: true,
    avatar: "LB",
    bio: "Languages professor - French and English",
    phone: "+213 21 234 5681",
    joinedDate: "2023-04-05",
  },
];

// Students - Excellent performers
export const STUDENTS_EXCELLENT: MockUser[] = [
  {
    _id: "student_excellent_001",
    firstName: "Ben Mohamed",
    lastName: "Ali",
    email: "benmohammedali@edusense.demo",
    password: "demo123",
    role: "student",
    school: "University Constantine 2",
    isRealUser: false,
    avatar: "BMA",
    bio: "Excellent student, consistent achiever",
    phone: "+213 21 334 5600",
    joinedDate: "2023-06-01",
  },
  {
    _id: "student_excellent_002",
    firstName: "Saad",
    lastName: "Azzem Maher",
    email: "saad.azzem@edusense.demo",
    password: "demo123",
    role: "student",
    school: "University Constantine 2",
    isRealUser: false,
    avatar: "SAM",
    bio: "Outstanding mathematician",
    phone: "+213 21 334 5601",
    joinedDate: "2023-06-05",
  },
];

// Students - Average performers
export const STUDENTS_AVERAGE: MockUser[] = [
  {
    _id: "student_avg_001",
    firstName: "Amira",
    lastName: "Hassan",
    email: "amira.hassan@edusense.demo",
    password: "demo123",
    role: "student",
    school: "University Constantine 2",
    isRealUser: false,
    avatar: "AH",
    bio: "Steady learner, needs support in advanced topics",
    phone: "+213 21 334 5602",
    joinedDate: "2023-06-10",
  },
  {
    _id: "student_avg_002",
    firstName: "Karim",
    lastName: "Youssef",
    email: "karim.youssef@edusense.demo",
    password: "demo123",
    role: "student",
    school: "University Constantine 2",
    isRealUser: false,
    avatar: "KY",
    bio: "Average student, inconsistent performance",
    phone: "+213 21 334 5603",
    joinedDate: "2023-06-12",
  },
  {
    _id: "student_avg_003",
    firstName: "Lina",
    lastName: "Samir",
    email: "lina.samir@edusense.demo",
    password: "demo123",
    role: "student",
    school: "University Constantine 2",
    isRealUser: false,
    avatar: "LS",
    bio: "Good effort, needs practice in calculations",
    phone: "+213 21 334 5604",
    joinedDate: "2023-06-15",
  },
];

// Students - Weak performers
export const STUDENTS_WEAK: MockUser[] = [
  {
    _id: "student_weak_001",
    firstName: "Omar",
    lastName: "Faris",
    email: "omar.faris@edusense.demo",
    password: "demo123",
    role: "student",
    school: "University Constantine 2",
    isRealUser: false,
    avatar: "OF",
    bio: "Struggling student, needs intervention",
    phone: "+213 21 334 5605",
    joinedDate: "2023-06-20",
  },
  {
    _id: "student_weak_002",
    firstName: "Sara",
    lastName: "Malik",
    email: "sara.malik@edusense.demo",
    password: "demo123",
    role: "student",
    school: "University Constantine 2",
    isRealUser: false,
    avatar: "SM",
    bio: "Low performance, needs tutoring",
    phone: "+213 21 334 5606",
    joinedDate: "2023-06-22",
  },
  {
    _id: "student_weak_003",
    firstName: "Achouche",
    lastName: "Loukmene",
    email: "achouche.loukmene@edusense.demo",
    password: "demo123",
    role: "student",
    school: "University Constantine 2",
    isRealUser: false,
    avatar: "AL",
    bio: "Needs significant remediation",
    phone: "+213 21 334 5607",
    joinedDate: "2023-06-25",
  },
];

// More diverse students
export const STUDENTS_MULTILINGUAL: MockUser[] = [
  {
    _id: "student_multi_001",
    firstName: "Rania",
    lastName: "Hadjadj",
    email: "rania.hadjadj@edusense.demo",
    password: "demo123",
    role: "student",
    school: "University Constantine 2",
    isRealUser: false,
    avatar: "RH",
    bio: "Multilingual learner, French and Arabic",
    phone: "+213 21 334 5608",
    joinedDate: "2023-07-01",
  },
  {
    _id: "student_multi_002",
    firstName: "Yacine",
    lastName: "Boukhalfa",
    email: "yacine.boukhalfa@edusense.demo",
    password: "demo123",
    role: "student",
    school: "University Constantine 2",
    isRealUser: false,
    avatar: "YB",
    bio: "Bilingual student, Arabic and French",
    phone: "+213 21 334 5609",
    joinedDate: "2023-07-03",
  },
];

// Admin user (optional)
export const ADMIN: MockUser = {
  _id: "admin_001",
  firstName: "Admin",
  lastName: "Demo",
  email: "admin@edusense.demo",
  password: "demo123",
  role: "admin",
  school: "EduSense Central",
  isRealUser: true,
  avatar: "AD",
  bio: "System administrator",
  phone: "+213 21 234 9999",
  joinedDate: "2023-01-01",
};

export const ALL_STUDENTS = [
  ...STUDENTS_EXCELLENT,
  ...STUDENTS_AVERAGE,
  ...STUDENTS_WEAK,
  ...STUDENTS_MULTILINGUAL,
];

export const ALL_USERS = [
  ...TEACHERS,
  ...ALL_STUDENTS,
  ADMIN,
];

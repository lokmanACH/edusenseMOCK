/**
 * Mock API utility for the standalone EduSense frontend.
 *
 * This file intentionally does not call fetch, axios, or any external API.
 * It simulates the old backend routes with localStorage-backed mock data.
 */

import { getUser, saveAuth, updateUserInfo } from "./auth";
import {
  ALL_USERS,
  TEACHERS,
  STUDENTS_EXCELLENT,
  STUDENTS_AVERAGE,
  STUDENTS_WEAK,
  STUDENTS_MULTILINGUAL,
} from "@/data/mockUsers";
import { ALL_CLASSES, CLASSES_BY_TEACHER, CLASSES_BY_ID, BANNER_COLORS } from "@/data/mockClasses";
import { ALL_EXAMS, EXAMS_BY_CLASS } from "@/data/mockExams";
import { SUBMISSION_SCENARIOS } from "@/data/mockSubmissions";
import { GRADING_SCENARIOS } from "@/data/mockReports";

type RequestOptions = RequestInit & { skipAuth?: boolean };
type ImageFile = { url: string; public_id: string; _id?: string };
type UserRole = "teacher" | "student" | "admin";

type MockUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role: UserRole;
  roleId?: string;
  school?: string;
  isRealUser?: boolean;
};

type MockClass = {
  _id: string;
  name: string;
  subject: string;
  description: string;
  code: string;
  color: string;
  teacherId: string;
  studentCount: number;
  sectionCount: number;
};

type MockEnrollment = {
  _id: string;
  classId: string;
  studentId: string;
  isLocal?: boolean;
};

type MockExam = {
  _id: string;
  title: string;
  description: string;
  class: string;
  examImages: ImageFile[];
  solutionImages: ImageFile[];
};

type MockAnswer = {
  _id: string;
  examId: string;
  studentClassId: string;
  answers: ImageFile[];
  submittedAt: string;
  isGraded: boolean;
  rating?: number;
  feedback?: {
    strengths: string;
    weaknesses: string;
    recommendation: string;
  };
};

type MockDb = {
  users: MockUser[];
  classes: MockClass[];
  enrollments: MockEnrollment[];
  exams: MockExam[];
  answers: MockAnswer[];
};

const DB_KEY = "edusense_mock_db_v3";
const MOCK_DELAY_MS = 180;

function nowIso() {
  return new Date().toISOString();
}

function uid(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}${Date.now().toString(36).slice(-4)}`;
}

function normalizePath(path: string) {
  const [pathname, query = ""] = path.split("?");
  return { pathname, params: new URLSearchParams(query) };
}

function sleep(ms = MOCK_DELAY_MS) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function assertBrowser() {
  if (typeof window === "undefined") {
    throw new Error("Mock API is available in the browser only.");
  }
}

function mockFile(name: string): ImageFile {
  const safe = encodeURIComponent(name);
  return {
    url: `data:text/plain;charset=utf-8,Mock%20file%3A%20${safe}#${safe}`,
    public_id: `mock_${safe}`,
  };
}

function seededAnswer(id: string, examId: string, studentClassId: string, rating: number, isGraded: boolean): MockAnswer {
  return {
    _id: id,
    examId,
    studentClassId,
    answers: [mockFile(`${id}_student_paper.pdf`)],
    submittedAt: nowIso(),
    isGraded,
    rating,
    feedback: makeFeedback(rating),
  };
}

function defaultDb(): MockDb {
  // Use comprehensive mock data from separate files
  const users: MockUser[] = ALL_USERS.map((u) => ({
    _id: u._id,
    firstName: u.firstName,
    lastName: u.lastName,
    email: u.email,
    password: u.password,
    role: u.role,
    roleId: u.roleId || u._id,
    school: u.school,
    isRealUser: u.isRealUser,
  }));

  // Convert classes data to match MockClass type
  const classes: MockClass[] = ALL_CLASSES.map((cls) => ({
    _id: cls._id,
    name: cls.name,
    subject: cls.subject,
    description: cls.description,
    code: cls.code,
    color: cls.color,
    teacherId: cls.teacherId,
    studentCount: cls.studentCount,
    sectionCount: cls.sectionCount,
  }));

  // Create comprehensive enrollments - connect students to classes
  const enrollments: MockEnrollment[] = [];
  classes.forEach((cls) => {
    const classTeacher = users.find((u) => u._id === cls.teacherId);
    if (!classTeacher) return;

    // Assign appropriate students to each class
    let assignedStudents: MockUser[] = [];
    if (cls.subject === "Mathematics") {
      assignedStudents = [
        ...STUDENTS_EXCELLENT.map((s) => users.find((u) => u._id === s._id)!),
        ...STUDENTS_AVERAGE.map((s) => users.find((u) => u._id === s._id)!),
        ...STUDENTS_WEAK.slice(0, 2).map((s) => users.find((u) => u._id === s._id)!),
      ].filter(Boolean);
    } else if (cls.subject === "Physics") {
      assignedStudents = [
        ...STUDENTS_EXCELLENT.map((s) => users.find((u) => u._id === s._id)!),
        ...STUDENTS_AVERAGE.slice(0, 2).map((s) => users.find((u) => u._id === s._id)!),
        ...STUDENTS_WEAK.slice(0, 2).map((s) => users.find((u) => u._id === s._id)!),
      ].filter(Boolean);
    } else if (cls.subject === "Chemistry") {
      assignedStudents = [
        ...STUDENTS_AVERAGE.map((s) => users.find((u) => u._id === s._id)!),
        ...STUDENTS_MULTILINGUAL.slice(0, 1).map((s) => users.find((u) => u._id === s._id)!),
      ].filter(Boolean);
    } else if (cls.subject === "History") {
      assignedStudents = [
        ...STUDENTS_EXCELLENT.slice(0, 1).map((s) => users.find((u) => u._id === s._id)!),
        ...STUDENTS_AVERAGE.map((s) => users.find((u) => u._id === s._id)!),
        ...STUDENTS_WEAK.slice(0, 2).map((s) => users.find((u) => u._id === s._id)!),
      ].filter(Boolean);
    } else if (cls.subject === "English" || cls.subject === "French" || cls.subject === "Languages") {
      assignedStudents = [
        ...STUDENTS_EXCELLENT.map((s) => users.find((u) => u._id === s._id)!),
        ...STUDENTS_MULTILINGUAL.map((s) => users.find((u) => u._id === s._id)!),
        ...STUDENTS_AVERAGE.slice(0, 1).map((s) => users.find((u) => u._id === s._id)!),
      ].filter(Boolean);
    }

    assignedStudents.forEach((student) => {
      if (student) {
        enrollments.push({
          _id: `${cls._id}_enrollment_${student._id}`,
          classId: cls._id,
          studentId: student._id,
          isLocal: !student.isRealUser,
        });
      }
    });
  });

  // Convert exams - map to correct classes
  const exams: MockExam[] = ALL_EXAMS.map((exam) => ({
    _id: exam._id,
    title: exam.title,
    description: exam.description,
    class: exam.class,
    examImages: exam.examImages,
    solutionImages: exam.solutionImages,
  }));

  // Create comprehensive answers using submission scenarios
  const answers: MockAnswer[] = [];
  const submissionEntries = Object.values(SUBMISSION_SCENARIOS);
  
  submissionEntries.forEach((sub) => {
    const enrollment = enrollments.find(
      (e) => e.classId === sub.classId && e.studentId === sub.studentId,
    );
    if (enrollment) {
      const grading = Object.values(GRADING_SCENARIOS).find(
        (g) => g.studentId === sub.studentId && g.examId === sub.examId,
      );
      const rating = grading?.rawScore || sub.rawScore || 75;
      answers.push({
        _id: sub._id,
        examId: sub.examId,
        studentClassId: enrollment._id,
        answers: [mockFile(`${sub._id}_student_paper.pdf`)],
        submittedAt: sub.submittedAt,
        isGraded: sub.status === "completed" || sub.status === "needs_review",
        rating,
        feedback: makeFeedback(rating),
      });
    }
  });

  return { users, classes, enrollments, exams, answers };
}

function loadDb(): MockDb {
  assertBrowser();
  const raw = localStorage.getItem(DB_KEY);
  if (!raw) {
    const fresh = defaultDb();
    saveDb(fresh);
    return fresh;
  }

  try {
    const parsed = JSON.parse(raw) as MockDb;
    return {
      ...defaultDb(),
      ...parsed,
      users: parsed.users || defaultDb().users,
      classes: parsed.classes || defaultDb().classes,
      enrollments: parsed.enrollments || defaultDb().enrollments,
      exams: parsed.exams || defaultDb().exams,
      answers: parsed.answers || defaultDb().answers,
    };
  } catch {
    const fresh = defaultDb();
    saveDb(fresh);
    return fresh;
  }
}

function saveDb(db: MockDb) {
  if (typeof window === "undefined") return;
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function currentUser(db: MockDb): MockUser {
  const stored = getUser();
  if (stored?._id) {
    const found = db.users.find((u) => u._id === stored._id);
    if (found) return found;
  }

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  if (pathname.startsWith("/teacher")) return db.users.find((u) => u.role === "teacher")!;
  return db.users.find((u) => u.role === "student")!;
}

function decorateClass(db: MockDb, cls: MockClass) {
  const sectionCount = db.exams.filter((exam) => exam.class === cls._id).length;
  const studentCount = db.enrollments.filter((enrollment) => enrollment.classId === cls._id).length;
  return { ...cls, sectionCount, studentCount };
}

function enrollmentsForClass(db: MockDb, classId: string) {
  return db.enrollments
    .filter((enrollment) => enrollment.classId === classId)
    .map((enrollment) => {
      const user = db.users.find((u) => u._id === enrollment.studentId);
      const name = user ? `${user.firstName} ${user.lastName}` : "Unknown Student";
      return {
        _id: enrollment._id,
        class: enrollment.classId,
        student: {
          _id: enrollment.studentId,
          name,
          user: user ? {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isRealUser: !!user.isRealUser,
          } : null,
        },
      };
    });
}

function answersForClass(db: MockDb, classId: string) {
  const enrollmentIds = new Set(db.enrollments.filter((e) => e.classId === classId).map((e) => e._id));
  return db.answers.filter((answer) => enrollmentIds.has(answer.studentClassId));
}

function answerForTeacher(db: MockDb, answer: MockAnswer) {
  const enrollment = db.enrollments.find((e) => e._id === answer.studentClassId);
  const user = db.users.find((u) => u._id === enrollment?.studentId);
  const name = user ? `${user.firstName} ${user.lastName}` : "Unknown Student";
  return {
    ...answer,
    student: {
      name,
      email: user?.email || "no-email@local.edu",
      avatar: initials(name),
    },
  };
}

function initials(name: string) {
  return name.split(" ").filter(Boolean).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

function scoreLabel(score: number) {
  if (score >= 85) return "Completed";
  if (score >= 70) return "Needs Review";
  return "Not Processed";
}

function makeFeedback(score = 84) {
  if (score >= 90) {
    return {
      strengths: "Excellent reasoning, clear steps, and accurate final answers.",
      weaknesses: "Only minor notation improvements are needed.",
      recommendation: "Give this student more advanced extension problems.",
    };
  }
  if (score >= 75) {
    return {
      strengths: "Good conceptual understanding and correct method selection.",
      weaknesses: "Some arithmetic slips and missing explanation steps were detected.",
      recommendation: "Review multi-step exercises and ask the student to show each transformation.",
    };
  }
  return {
    strengths: "The student attempted the main questions and used relevant formulas.",
    weaknesses: "Several steps are incomplete, and final units are missing in some answers.",
    recommendation: "Re-teach the core method with a guided example, then assign a short remediation quiz.",
  };
}

function computeStudentStats(db: MockDb, user: MockUser) {
  const myEnrollmentIds = db.enrollments.filter((e) => e.studentId === user._id).map((e) => e._id);
  const myAnswers = db.answers.filter((answer) => myEnrollmentIds.includes(answer.studentClassId));
  const scores = myAnswers.map((answer) => answer.rating || 0);
  const averageScore = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;

  const examTitle = (examId: string) => db.exams.find((exam) => exam._id === examId)?.title || "Exam";
  const graded = myAnswers.filter((answer) => answer.isGraded);

  return {
    stats: {
      classCount: myEnrollmentIds.length,
      submissionCount: myAnswers.length,
      analysisCount: graded.length,
      averageScore,
    },
    submissionsData: myAnswers.map((answer) => ({ exam: examTitle(answer.examId), score: answer.rating || 0 })),
    distribution: {
      excellent: scores.filter((s) => s >= 85).length,
      good: scores.filter((s) => s >= 70 && s < 85).length,
      average: scores.filter((s) => s >= 50 && s < 70).length,
      weak: scores.filter((s) => s < 50).length,
    },
    recentFeedbacks: graded.slice(-4).reverse().map((answer) => ({
      exam: examTitle(answer.examId),
      feedback: answer.feedback?.recommendation || makeFeedback(answer.rating).recommendation,
      score: answer.rating || 0,
    })),
    recentSubmissions: myAnswers.slice(-5).reverse().map((answer) => ({
      exam: examTitle(answer.examId),
      status: answer.isGraded ? "Evaluated" : "Submitted",
    })),
  };
}

function computeTeacherStats(db: MockDb, teacherId: string) {
  const classes = db.classes.filter((cls) => cls.teacherId === teacherId);
  const classIds = classes.map((cls) => cls._id);
  const enrollments = db.enrollments.filter((enrollment) => classIds.includes(enrollment.classId));
  const exams = db.exams.filter((exam) => classIds.includes(exam.class));
  const answers = db.answers.filter((answer) => exams.some((exam) => exam._id === answer.examId));

  return {
    classesCount: classes.length,
    studentsCount: new Set(enrollments.map((e) => e.studentId)).size,
    sectionsCount: exams.length,
    analysisCount: answers.filter((answer) => answer.isGraded).length,
  };
}

function computeTeacherAnalytics(db: MockDb, teacherId: string) {
  return db.classes.filter((cls) => cls.teacherId === teacherId).map((cls) => {
    const classAnswers = answersForClass(db, cls._id);
    const graded = classAnswers.filter((answer) => answer.isGraded || answer.rating);
    const byExam = graded.map((answer) => {
      const exam = db.exams.find((e) => e._id === answer.examId);
      const enrollment = db.enrollments.find((e) => e._id === answer.studentClassId);
      const user = db.users.find((u) => u._id === enrollment?.studentId);
      const studentName = user ? `${user.firstName} ${user.lastName}` : "Unknown Student";
      return {
        studentName,
        examTitle: exam?.title || "Exam",
        exam: exam?.title || "Exam",
        score: answer.rating || 0,
        status: answer.isGraded ? "Completed" : "Not Processed",
      };
    });

    const scores = byExam.map((item) => item.score);
    const distribution = [
      scores.filter((s) => s < 50).length,
      scores.filter((s) => s >= 50 && s < 70).length,
      scores.filter((s) => s >= 70 && s < 85).length,
      scores.filter((s) => s >= 85).length,
    ];

    return {
      classId: cls._id,
      className: cls.name,
      submissions: byExam.slice(-8).map((item) => ({ exam: item.examTitle, score: item.score })),
      passFail: {
        pass: scores.filter((score) => score >= 50).length,
        fail: scores.filter((score) => score < 50).length,
      },
      distribution,
      topStudents: [...byExam].sort((a, b) => b.score - a.score).slice(0, 3),
      lowestStudents: [...byExam].sort((a, b) => a.score - b.score).slice(0, 3),
      recentAnalyses: byExam.slice(-5).reverse().map((item) => ({
        studentName: item.studentName,
        examTitle: item.examTitle,
        status: item.status,
      })),
    };
  });
}

function perStudentStats(db: MockDb, classId: string) {
  const result: Record<string, any> = {};
  enrollmentsForClass(db, classId).forEach((record) => {
    const name = record.student.name;
    const answers = db.answers.filter((answer) => answer.studentClassId === record._id);
    result[name] = {
      exams: answers.map((answer) => ({
        title: db.exams.find((exam) => exam._id === answer.examId)?.title || "Exam",
        grade: answer.rating && answer.rating >= 90 ? "A" : answer.rating && answer.rating >= 80 ? "B+" : answer.rating && answer.rating >= 70 ? "B" : "C",
        score: answer.rating || 0,
        feedback: answer.feedback?.recommendation || makeFeedback(answer.rating).recommendation,
        date: new Date(answer.submittedAt).toLocaleDateString(),
      })),
      trend: answers.length ? answers.map((answer) => answer.rating || 0) : [72, 78, 82, 85],
      strengths: ["Problem solving", "Concept recognition"],
      weaknesses: ["Detailed justification", "Arithmetic accuracy"],
    };
  });
  return result;
}

async function fileToMockImage(file: File): Promise<ImageFile> {
  const publicId = `${uid("file")}_${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
  let url = "";

  if (typeof URL !== "undefined" && URL.createObjectURL) {
    url = `${URL.createObjectURL(file)}#${encodeURIComponent(file.name)}`;
  } else {
    url = `data:text/plain;charset=utf-8,Mock%20file%3A%20${encodeURIComponent(file.name)}#${encodeURIComponent(file.name)}`;
  }

  return { url, public_id: publicId };
}

async function uploadFiles(formData: FormData): Promise<ImageFile[]> {
  const files = formData.getAll("files").filter((item): item is File => item instanceof File);
  return Promise.all(files.map(fileToMockImage));
}

function makeReportPdfText(title: string) {
  const escapedTitle = title.replace(/[()\\]/g, "\\$&");
  const body = `EduSense Mock Report\\nStudent: Ben Mohamed Ali\\nSubject: Mathematics\\nScore: 84%\\nFeedback: Good method, improve final calculation details.`;
  const escapedBody = body.replace(/[()\\]/g, "\\$&");
  return `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 230 >>
stream
BT /F1 18 Tf 50 770 Td (${escapedTitle}) Tj /F1 12 Tf 0 -35 Td (${escapedBody}) Tj ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000059 00000 n 
0000000116 00000 n 
0000000250 00000 n 
0000000530 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
600
%%EOF`;
}

async function request<T = unknown>(path: string, options: RequestOptions = {}): Promise<T> {
  await sleep();
  const db = loadDb();
  const method = (options.method || "GET").toUpperCase();
  const body = options.body ? JSON.parse(options.body as string) : {};
  const { pathname, params } = normalizePath(path);
  const user = currentUser(db);

  const ok = (value: unknown) => value as T;

  // Auth
  if (method === "POST" && pathname === "/auth/signin") {
    const email = String(body.email || "").toLowerCase();
    let found = db.users.find((u) => u.email.toLowerCase() === email);
    if (!found) {
      found = email.includes("teacher") ? db.users.find((u) => u.role === "teacher") : db.users.find((u) => u.role === "student");
    }
    if (!found) throw new Error("Invalid email or password");
    const token = `mock_token_${found._id}`;
    saveAuth(token, found);
    return ok({ success: true, token, user: found, roleId: found.roleId || found._id });
  }

  if (method === "POST" && pathname === "/auth/signup/request-otp") {
    return ok({ success: true, message: "Mock OTP accepted. Use any 6 digits." });
  }

  if (method === "POST" && pathname === "/auth/signup/confirm-otp") {
    const newUser: MockUser = {
      _id: uid(body.role === "teacher" ? "teacher" : "student"),
      firstName: body.firstName || "Demo",
      lastName: body.lastName || "User",
      email: body.email || `${uid("user")}@edusense.demo`,
      password: body.password || "demo123",
      role: body.role === "teacher" ? "teacher" : "student",
      roleId: "",
      school: "EduSense Demo School",
      isRealUser: true,
    };
    newUser.roleId = newUser._id;
    db.users.push(newUser);
    saveDb(db);
    saveAuth(`mock_token_${newUser._id}`, newUser);
    return ok({ success: true, token: `mock_token_${newUser._id}`, user: newUser, roleId: newUser._id });
  }

  // Users
  if (method === "PUT" && pathname.startsWith("/users/")) {
    const id = pathname.split("/")[2];
    const target = db.users.find((u) => u._id === id) || user;
    Object.assign(target, {
      firstName: body.firstName ?? target.firstName,
      lastName: body.lastName ?? target.lastName,
      school: body.school ?? target.school,
    });
    saveDb(db);
    updateUserInfo(target);
    return ok({ success: true, data: target, user: target });
  }

  // Classes
  if (method === "GET" && pathname === "/classes") {
    return ok({ success: true, data: db.classes.map((cls) => decorateClass(db, cls)) });
  }

  if (method === "GET" && pathname === "/classes/my") {
    const myClasses = db.classes.filter((cls) => cls.teacherId === user._id || user.role === "teacher");
    return ok({ success: true, data: myClasses.map((cls) => decorateClass(db, cls)) });
  }

  if (method === "POST" && pathname === "/classes") {
    const cls: MockClass = {
      _id: uid("class"),
      name: body.name || "New Class",
      subject: body.subject || "General",
      description: body.description || "Mock class created locally.",
      code: uid("CLS").slice(0, 8).toUpperCase(),
      color: body.color || bannerColors[0],
      teacherId: user._id,
      studentCount: 0,
      sectionCount: 0,
    };
    db.classes.unshift(cls);
    saveDb(db);
    return ok({ success: true, data: decorateClass(db, cls) });
  }

  if (method === "GET" && pathname.startsWith("/classes/")) {
    const id = pathname.split("/")[2];
    const cls = db.classes.find((c) => c._id === id || c.code === id);
    if (!cls) throw new Error("Class not found");
    return ok({ success: true, data: decorateClass(db, cls) });
  }

  // Student class routes
  if (method === "GET" && pathname === "/student-classes/my") {
    const myClassIds = db.enrollments.filter((e) => e.studentId === user._id).map((e) => e.classId);
    const classes = db.classes.filter((cls) => myClassIds.includes(cls._id)).map((cls) => decorateClass(db, cls));
    return ok({ success: true, data: classes });
  }

  if (method === "POST" && pathname === "/student-classes/join") {
    const classId = String(body.classId || "").trim();
    const cls = db.classes.find((c) => c._id === classId || c.code.toLowerCase() === classId.toLowerCase());
    if (!cls) throw new Error("Class not found. Try MAT10X, PHY11B, or CHE10A.");
    let enrollment = db.enrollments.find((e) => e.classId === cls._id && e.studentId === user._id);
    if (!enrollment) {
      enrollment = { _id: `${cls._id}_enrollment_${user._id}`, classId: cls._id, studentId: user._id };
      db.enrollments.push(enrollment);
      saveDb(db);
    }
    return ok({ success: true, data: enrollment });
  }

  if (method === "GET" && pathname === "/student-classes/my-stats") {
    return ok({ success: true, data: computeStudentStats(db, user) });
  }

  if (method === "GET" && pathname.startsWith("/student-classes/my-enrollment/")) {
    const classId = pathname.split("/")[3];
    let enrollment = db.enrollments.find((e) => e.classId === classId && e.studentId === user._id);
    if (!enrollment) {
      enrollment = { _id: `${classId}_enrollment_${user._id}`, classId, studentId: user._id };
      db.enrollments.push(enrollment);
      saveDb(db);
    }
    return ok({ success: true, data: enrollment });
  }

  if (method === "GET" && pathname.startsWith("/student-classes/stats/")) {
    const classId = pathname.split("/")[3];
    return ok(perStudentStats(db, classId));
  }

  if (method === "GET" && pathname.startsWith("/student-classes/")) {
    const classId = pathname.split("/")[2];
    return ok(enrollmentsForClass(db, classId));
  }

  // Teacher routes
  if (method === "GET" && pathname === "/teachers/stats") {
    const teacher = db.users.find((u) => u.role === "teacher") || user;
    return ok({ success: true, data: computeTeacherStats(db, teacher._id) });
  }

  if (method === "GET" && pathname === "/teachers/analytics") {
    const teacher = db.users.find((u) => u.role === "teacher") || user;
    return ok({ success: true, data: computeTeacherAnalytics(db, teacher._id) });
  }

  // Exams
  if (method === "GET" && pathname.startsWith("/exams/class/")) {
    const classId = pathname.split("/")[3];
    return ok(db.exams.filter((exam) => exam.class === classId));
  }

  if (method === "POST" && pathname === "/exams") {
    const exam: MockExam = {
      _id: uid("exam"),
      title: body.title || "New Section",
      description: body.description || "",
      class: body.class,
      examImages: [],
      solutionImages: [],
    };
    db.exams.push(exam);
    saveDb(db);
    return ok(exam);
  }

  if (method === "PUT" && pathname.startsWith("/exams/")) {
    const id = pathname.split("/")[2];
    const exam = db.exams.find((e) => e._id === id);
    if (!exam) throw new Error("Section not found");
    Object.assign(exam, body);
    saveDb(db);
    return ok(exam);
  }

  if (method === "DELETE" && pathname.startsWith("/exams/")) {
    const [, , examId, endpoint] = pathname.split("/");
    const exam = db.exams.find((e) => e._id === examId);
    if (!exam) throw new Error("Section not found");
    const publicId = params.get("public_id");
    if (endpoint === "solution-image") exam.solutionImages = exam.solutionImages.filter((img) => img.public_id !== publicId);
    if (endpoint === "exam-image") exam.examImages = exam.examImages.filter((img) => img.public_id !== publicId);
    saveDb(db);
    return ok(exam);
  }

  // Student answers
  if (method === "GET" && pathname.startsWith("/student-class-answers/my/")) {
    const classIdOrAnswerId = pathname.split("/")[3];
    const classId = classIdOrAnswerId;
    const enrollmentIds = db.enrollments.filter((e) => e.classId === classId && e.studentId === user._id).map((e) => e._id);
    const data = db.answers.filter((answer) => enrollmentIds.includes(answer.studentClassId));
    return ok({ success: true, data });
  }

  if (method === "DELETE" && pathname.startsWith("/student-class-answers/my/")) {
    const answerId = pathname.split("/")[3];
    const before = db.answers.length;
    db.answers = db.answers.filter((answer) => answer._id !== answerId);
    saveDb(db);
    return ok({ success: true, deleted: before !== db.answers.length });
  }

  if (method === "GET" && pathname.startsWith("/student-class-answers/teacher/")) {
    const classId = pathname.split("/")[3];
    return ok({ success: true, data: answersForClass(db, classId).map((answer) => answerForTeacher(db, answer)) });
  }

  // Feedback
  if (method === "POST" && pathname === "/feedbacks/generate") {
    const answerId = body.studentClassAnswerId;
    const answer = db.answers.find((a) => a._id === answerId);
    const rating = 78 + Math.floor(Math.random() * 18);
    const feedback = makeFeedback(rating);
    if (answer) {
      answer.rating = rating;
      answer.feedback = feedback;
      answer.isGraded = true;
      saveDb(db);
    }
    return ok({ rating, ...feedback });
  }

  if (method === "POST" && pathname === "/feedbacks/bulk-analyze") {
    const submissionIds: string[] = body.submissionIds || [];
    db.answers = db.answers.map((answer) => {
      if (!submissionIds.includes(answer._id)) return answer;
      const rating = answer.rating || (72 + Math.floor(Math.random() * 22));
      return { ...answer, rating, feedback: makeFeedback(rating), isGraded: true };
    });
    saveDb(db);
    return ok({ success: true, message: "Mock analysis completed." });
  }

  throw new Error(`Mock route not implemented: ${method} ${pathname}`);
}

export const api = {
  get: <T = unknown>(path: string, opts?: RequestOptions) =>
    request<T>(path, { method: "GET", ...opts }),

  post: <T = unknown>(path: string, body: object, opts?: RequestOptions) =>
    request<T>(path, { method: "POST", body: JSON.stringify(body), ...opts }),

  put: <T = unknown>(path: string, body: object, opts?: RequestOptions) =>
    request<T>(path, { method: "PUT", body: JSON.stringify(body), ...opts }),

  delete: <T = unknown>(path: string, opts?: RequestOptions) =>
    request<T>(path, { method: "DELETE", ...opts }),

  upload: async <T = unknown>(path: string, formData: FormData): Promise<T> => {
    await sleep(350);
    const db = loadDb();

    if (path === "/cloudinary/upload") {
      const images = await uploadFiles(formData);
      return { success: true, results: images.map((file) => ({ ...file, cloudinaryUrl: file.url })) } as T;
    }

    if (path === "/student-class-answers/upload") {
      const examId = String(formData.get("examId") || "");
      const studentClassId = String(formData.get("studentClassId") || "");
      const answers = await uploadFiles(formData);
      const existing = db.answers.find((answer) => answer.examId === examId && answer.studentClassId === studentClassId);

      if (existing) {
        existing.answers = answers;
        existing.submittedAt = nowIso();
        existing.isGraded = false;
        saveDb(db);
        return existing as T;
      }

      const answer: MockAnswer = {
        _id: uid("answer"),
        examId,
        studentClassId,
        answers,
        submittedAt: nowIso(),
        isGraded: false,
      };
      db.answers.push(answer);
      saveDb(db);
      return answer as T;
    }

    throw new Error(`Mock upload route not implemented: ${path}`);
  },

  downloadPdf: async (_path: string, filename = "report.pdf"): Promise<void> => {
    await sleep(250);
    if (typeof document === "undefined") return;
    const blob = new Blob([makeReportPdfText(filename.replace(/_/g, " "))], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },
};

export default api;

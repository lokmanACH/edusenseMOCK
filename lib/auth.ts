/**
 * auth.ts - Token and session helpers for the standalone mock frontend.
 */

export const TOKEN_KEY = "edusense_token";
export const USER_KEY = "edusense_user";

const DEFAULT_TEACHER = {
  _id: "teacher_demo_01",
  firstName: "Sarah",
  lastName: "Bennacer",
  email: "teacher@edusense.demo",
  role: "teacher",
  roleId: "teacher_demo_01",
  school: "University Constantine 2",
  isRealUser: true,
};

const DEFAULT_STUDENT = {
  _id: "student_demo_01",
  firstName: "Ali",
  lastName: "Ben Mohamed",
  email: "student@edusense.demo",
  role: "student",
  roleId: "student_demo_01",
  school: "University Constantine 2",
  isRealUser: true,
};

export const saveAuth = (token: string, user: any) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const updateUserInfo = (user: any) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const logout = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  window.location.href = "/login";
};

export const getToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY) || "mock_token";
};

export const getUser = () => {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(USER_KEY);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch {
      localStorage.removeItem(USER_KEY);
    }
  }

  const fallback = window.location.pathname.startsWith("/teacher")
    ? DEFAULT_TEACHER
    : DEFAULT_STUDENT;

  saveAuth(`mock_token_${fallback._id}`, fallback);
  return fallback;
};

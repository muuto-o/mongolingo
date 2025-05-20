import Exercise from "@/pages/exercises";
import HomePage from "@/pages/home";
import Leaderboard from "@/pages/leaderboard";
import Letters from "@/pages/letters";
import LoaderPage from "@/pages/loader";
import LoginPage from "@/pages/login";
import Profile from "@/pages/profile";
import RegisterPage from "@/pages/register";
import Lesson from "@/pages/lesson";
import ResetPassword from "@/pages/reset-password";
import ForgetPassword from "@/pages/recover";
import QuestionRegistration from "@/pages/question-register";
// import NotFound from "@/pages/not-found";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
    showSidebar: true,
    requireAuth: true,
  },
  {
    path: "/lesson",
    element: <Lesson />,
    showSidebar: true,
    requireAuth: true,
  },
  {
    path: "/letters",
    element: <Letters />,
    showSidebar: true,
    requireAuth: true,
  },
  {
    path: "/profile",
    element: <Profile />,
    showSidebar: true,
    requireAuth: true,
  },
  {
    path: "/loader",
    element: <LoaderPage />,
    showSidebar: false,
    requireAuth: true,
  },
  {
    path: "/exercise",
    element: <Exercise />,
    showSidebar: false,
    requireAuth: true,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
    showSidebar: true,
    requireAuth: true,
  },
  {
    path: "/login",
    element: <LoginPage />,
    showSidebar: false,
    requireAuth: false, // login page does not require auth
  },
  {
    path: "/register",
    element: <RegisterPage />,
    showSidebar: false,
    requireAuth: false,
  },
  {
    path: "/forgot-password",
    element: <ForgetPassword />,
    showSidebar: false,
    requireAuth: false,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
    showSidebar: false,
    requireAuth: false,
  },
  {
    path: "/qr",
    element: <QuestionRegistration />,
    showSidebar: false,
    requireAuth: true,
  },
];

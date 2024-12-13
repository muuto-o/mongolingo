import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import RootLayout from "./layouts/root";
import PrivateLayout from "./layouts/private";
import PublicLayout from "./layouts/public";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Letters from "./pages/letters";
import Leaderboard from "./pages/leaderboard";
import Profile from "./pages/profile";
import Lesson from "./pages/lesson";
import Exercise from "./pages/exercises";
import NotFound from "./pages/not-found";
// import Post from './pages/post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Public layout */}

          <Route element={<PublicLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          {/* Private layout */}

          <Route element={<PrivateLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/letters" element={<Letters />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/lesson" element={<Lesson />} />
            <Route path="/exercise" element={<Exercise />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
    // <Post/>
  );
}

export default App;

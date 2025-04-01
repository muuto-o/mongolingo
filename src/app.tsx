import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RootLayout from "./layouts/root";
import PrivateLayout from "./layouts/private";
import PublicLayout from "./layouts/public";

import NotFound from "./pages/not-found";

import { routes } from "./lib/routes";
// import ExerciseActivity from "./mock/pages/ExerciseActivity";
// import Post from './pages/post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Public layout */}

          <Route element={<PublicLayout />}>
            {routes.map((route) => {
              if (!route.requireAuth) {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                );
              }
              return null; // Handle cases where neither public nor private
            })}
          </Route>

          {/* Private layout */}

          <Route element={<PrivateLayout />}>
            {routes.map((route) => {
              if (route.requireAuth) {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                    // element={
                    //   isLogged ? route.element : <Navigate to="/login" replace />
                    // }
                  />
                );
              }
            })}
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
    // <Post/>
  );
}

export default App;

{
  {
    /* <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} /> */
  }
  /* <Route index element={<HomePage />} />
            <Route path="/letters" element={<Letters />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/lesson" element={<Lesson />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/loader" element={<LoaderPage />} /> */
}

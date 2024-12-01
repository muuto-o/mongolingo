import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import RootLayout from './layouts/root';
import PrivateLayout from './layouts/private';
import PublicLayout from './layouts/public';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Letters from './pages/letters';
import Leaderboard from './pages/leaderboard';
import Profile from './pages/profile';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout/>}>

          {/* Public layout */}
          
         <Route element={<PublicLayout/>}>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
         </Route>

          {/* Private layout */}

         <Route element={<PrivateLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/letters' element={<Letters/>}/>
          <Route path='/leaderboard' element={<Leaderboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
         </Route>

        </Route>
      </Routes>
    </Router>
  )
}

export default App

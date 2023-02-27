import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoardPage';

function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = true;

  return (
    <Router>
      {/* Routes */}
      <Routes>
        {/* Redirections to protect our routes */}
        <Route
          path='/'
          element={
            loggedIn ?
            (<Navigate to='/dashboard' />)
            :
            (<Navigate to='/login' />)
          }
        />
        {/* DashBoard Route */}
        <Route
          path='/dashboard'
          element={
            loggedIn ?
            (<DashBoardPage />)
            :
            (<Navigate to='/login' />)
          }
        />
        {/* Login Route */}
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route path='*' element={(<NotFoundPage />)} />
      </Routes>
    </Router>
  );

}

export default AppRoutingFinal;

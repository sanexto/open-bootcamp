import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashBoardPage from './pages/dashboard/DashBoardPage';

function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = true;

  const [credentials, setCredentials] = useState(localStorage.getItem('credentials'));

  return (
    <Router>
      {/* Routes */}
      <Routes>
        {/* Redirections to protect our routes */}
        <Route
          path='/'
          element={
            credentials ?
            (<Navigate to='/dashboard' />)
            :
            (<Navigate to='/login' />)
          }
        />
        {/* DashBoard Route */}
        <Route
          path='/dashboard'
          element={
            credentials ?
            (<DashBoardPage />)
            :
            (<Navigate to='/login' />)
          }
        />
        {/* Login Route */}
        <Route
          path='/login'
          element={
            credentials ?
            (<Navigate to='/dashboard' />)
            :
            (<LoginPage setCredentials={setCredentials} />)
          }
        />
        {/* Register Route */}
        <Route
          path='/register'
          element={
            credentials ?
            (<Navigate to='/dashboard' />)
            :
            (<RegisterPage />)
          }
        />
        <Route path='*' element={(<NotFoundPage />)} />
      </Routes>
    </Router>
  );

}

export default AppRoutingFinal;

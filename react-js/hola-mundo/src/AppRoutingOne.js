import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

  let logged = false;

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged);
  }, []);

  return (
    // Definimos un conjunto de rutas
    <Router>
      <div>
        <aside>
          {/* Navegación entre rutas, a traves de la vista, a traves de enlaces */}
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/tasks/1'>| Task 1 |</Link>
          <Link to='/tasks/2'>| Task 2 |</Link>
          <Link to='/any404'>| Not Existing Route |</Link>
          <Link to='/login'>| Login ||</Link>
        </aside>
        <main>
          {/* El orden en el que se definen las rutas importa */}
          <Routes>
            {/* En la raiz del proyecto quiero me cargue HomePage */}
            <Route path='/' element={<HomePage />} />
            <Route path='/online-state' element={<StatePage />} />
            <Route
              path='/login'
              element={
                logged ? 
                  (<Navigate to='/' />) 
                  : 
                  (<LoginPage />)
              }
            />
            {/*
              Dos rutas que llevan a la misma pagina.
              Dos rutas que cargan el mismo componente.
              /about -> AboutPage
              /faqs -> AboutPage
            */}
            <Route path='/about' element={<AboutPage />} />
            <Route path='/faqs' element={<AboutPage />} />
            <Route 
              path='/profile'
              element={
                logged ? 
                  (<ProfilePage />) 
                  : 
                  (<Navigate to='/login' />)
              }
            />
            <Route path='/tasks' element={<TasksPage />} />
            <Route path='/tasks/:id' element={<TaskDetailPage />} />
            {/* Si el path no coincide con ninguna ruta, mostrar por defecto NotFoundPage */}
            {/* 404 - Page Not Found */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;

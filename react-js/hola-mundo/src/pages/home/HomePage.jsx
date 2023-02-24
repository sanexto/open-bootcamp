import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {

    // useLocation -> hook para obtener la ruta actual
    const location = useLocation();
    // useNavigate -> hook para navegar entre rutas (programaticamente)
    const navigate = useNavigate();

    console.log('We are in Route:', location.pathname); // /

    const go = (path) => {
        navigate(path);
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => go('/profile')}>
                Go To Profile
            </button>
        </div>
    );
}

export default HomePage;

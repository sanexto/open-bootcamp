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

    const goProps = (path) => {
        navigate(path, {
            state: {
                online: true,
            },
        });
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => goProps('/online-state?online=true')}>
                Go To Page with State / Query Params
            </button>
            <button onClick={() => go('/profile')}>
                Go To Profile
            </button>
        </div>
    );
}

export default HomePage;

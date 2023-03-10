import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    // useNavigate -> hook para navegar entre rutas (programaticamente)
    const navigate = useNavigate();

    const go = (path) => {
        navigate(path);
    };

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={() => go('/')}>
                Go back to home
            </button>
        </div>
    );
}

export default NotFoundPage;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

    // useLocation -> hook para obtener la ruta actual
    const location = useLocation();
    // useNavigate -> hook para navegar entre rutas (programaticamente)
    const navigate = useNavigate();

    console.log('We are in Route:', location.pathname); // /about | /faqs

    const go = (path) => {
        navigate(path);
    };

    const goBack = () => {
        navigate(-1);
    };

    const goForward = () => {
        navigate(1);
    };

    return (
        <div>
            <h1>
                About | FAQs
            </h1>
            <div>
                <button onClick={() => go('/')}>
                    Go To Home
                </button>
                <button onClick={goBack}>
                    Go Back
                </button>
                <button onClick={goForward}>
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default AboutPage;

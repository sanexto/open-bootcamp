import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({user}) => {

    // useNavigate -> hook para navegar entre rutas (programaticamente)
    const navigate = useNavigate();

    const go = (path) => {
        navigate(path);
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={() => go('/tasks')}>Tasks</button>
            <button onClick={goBack}>Go back</button>
        </div>
    );
}

export default ProfilePage;

import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormik from '../../components/pure/forms/loginFormik';

const LoginPage = ({ setCredentials }) => {
    return (
        <div>
            <h1>Login Page</h1>
            <LoginFormik setCredentials={setCredentials} />
            <Link to='/register'>Register</Link>
        </div>
    );
}

export default LoginPage;

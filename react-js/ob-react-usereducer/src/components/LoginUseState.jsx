import React, { useState } from 'react';

const LoginUseState = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Login
    const login = (username, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'admin' && password === 'admin') {
                    resolve();
                } else {
                    reject('Invalid Username or Password');
                }
            }, 2000);
        });
    };

    // Logout
    const logout = () => {
        setIsLoggedIn(false);
        setLoading(false);
    };

    // Submit
    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await login(username, password);
            setIsLoggedIn(true);
        } catch (error) {
            setError(error);
            setUsername('');
            setPassword('');
        }
        setLoading(false);
    };

    return (
        <div className='App'>
            <div>
                {
                    isLoggedIn ? (
                        <div>
                            <h1>
                                Welcome, {username}!
                            </h1>
                            <button onClick={logout}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={submit}>
                            {
                                error && <p style={{color: 'tomato'}}>{error}</p>
                            }
                            <input
                                type='text'
                                placeholder='Username'
                                value={username}
                                onChange={(e) => setUsername(e.currentTarget.value)}
                            />
                            <input
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                            />
                            <button type='submit'>
                                { isLoading ? 'Logging...' : 'Login' }
                            </button>
                        </form>
                    )
                }
            </div>
        </div>
    );

}

export default LoginUseState;

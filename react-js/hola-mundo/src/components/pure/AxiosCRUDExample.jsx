import React from 'react';
import { login, getAllUsers, getAllPagedUsers, getUserById, createUser, updateUserById, deleteUserById } from '../../services/axiosCRUDService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AxiosCRUDExample = () => {

    const initialCredentials = {
        email: '',
        password: '',
    };

    // Creamos esquema de validación
    const loginSchema = Yup.object().shape(
        {
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().required('Password is required'),
        }
    );

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {

                if (response.data.token) {
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token);
                } else {
                    sessionStorage.removeItem('token');
                    throw new Error('Login failure');
                }

            })
            .catch((error) => {
                sessionStorage.removeItem('token');
                alert(`Something went wrong: ${error}`);
            })
            .finally(() => {
                console.log('Login done');
            });
    };

    // CRUD Examples
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                if (response.status === 200 && response.data.data) {
                    console.table(response.data.data);
                } else {
                    throw new Error(`No users found`);
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            });
    };

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if (response.status === 200 && response.data.data) {
                    console.table(response.data.data);
                } else {
                    throw new Error(`No users found in page ${page}`);
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            });
    };

    const obtainUserById = (id) => {
        getUserById(id)
            .then((response) => {
                if (response.status === 200 && response.data.data) {
                    console.table(response.data.data);
                } else {
                    throw new Error('User not found');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            });
    };

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if (response.status === 201 && response.data) {
                    console.log(response.data);
                } else {
                    throw new Error('User not created');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            });
    };

    const updateUser = (id, name, job) => {
        updateUserById(id, name, job)
            .then((response) => {
                if (response.status === 200 && response.data) {
                    console.log(response.data);
                } else {
                    throw new Error('User not found & no update done');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            });
    };

    const deleteUser = (id) => {
        deleteUserById(id)
            .then((response) => {
                if (response.status === 204) {
                    alert(`User with id: ${id} successfully deleted`);
                } else {
                    throw new Error('User not found & no delete done');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            });
    };
 
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** Initial values that the form will take ***
                initialValues={initialCredentials}
                // *** Yup Validation Schema ***
                validationSchema={loginSchema}
                // *** onSubmit Event ***
                onSubmit={async (values) => {
                    authUser(values);
                }}
            >
                {/* We obtain props from Formik */}

                {({
                    values, // permite obtener los valores de los campos del formulario
                    touched, // sirve para saber si el usuario ha tocado alguno de los campos del formulario
                    errors, // permite recuperar los errores de los campos del formulario
                    isSubmitting, // nos dice si el formulario se esta enviando
                    handleChange, // podemos controlar cuando hay cambios en los campos del formulario
                    handleBlur, // podemos controlar cuando hay cambios de focus en los campos del formulario
                }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="example@email.com" type="email" />

                        {/* Email Errors */}
                        {/* {
                            errors.email && touched.email && 
                            (
                                <div className='error'>
                                    <p>{errors.email}</p>
                                </div>
                            )
                        } */}
                        <ErrorMessage name="email" component="div" />

                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="password" type="password" />

                        {/* Password Errors */}
                        {/* {
                            errors.password && touched.password && 
                            (
                                <div className='error'>
                                    <p>{errors.password}</p>
                                </div>
                            )
                        } */}
                        <ErrorMessage name="password" component="div" />

                        <button type="submit">Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}
            </Formik>
            {/* Example buttons to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>
                    Get All Users with Axios
                </button>
                <button onClick={() => obtainAllPagedUsers(2)}>
                    Get All Users (Page 2) with Axios
                </button>
                <button onClick={() => obtainUserById(1)}>
                    Get User 1
                </button>
                <button onClick={() => createNewUser('morpheus', 'UX')}>
                    Create User
                </button>
                <button onClick={() => updateUser(1, 'morpheus', 'Developer')}>
                    Update User
                </button>
                <button onClick={() => deleteUser(1)}>
                    Delete User
                </button>
            </div>
        </div>
    );

}

export default AxiosCRUDExample;

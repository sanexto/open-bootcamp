import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Creamos esquema de validación
const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required'),
    }
);

const LoginForm = ({ loged, fetching, onLogin }) => {

    const initialCredentials = {
        email: '',
        password: '',
    };

    return (
        <Formik
            // *** Initial values that the form will take ***
            initialValues={initialCredentials}
            // *** Yup Validation Schema ***
            validationSchema={loginSchema}
            // *** onSubmit Event ***
            onSubmit={async (values) => {
                onLogin(values.email, values.password);
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
                    { fetching && (<p>LOADING...</p>) }
                    {isSubmitting ? (<p>Login your credentials...</p>) : null}
                </Form>
            )}
        </Formik>
    );
};

LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
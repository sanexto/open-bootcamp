import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ContactForm = ({addContact}) => {

    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const emailRef = useRef(null);

    const add = (e) => {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            false,
        );
        addContact(newContact);
        nameRef.current.value = '';
        surnameRef.current.value = '';
        emailRef.current.value = '';
        nameRef.current.focus();
    };

    return (
        <form onSubmit={add}>
            <div className='form-floating mb-3'>
                <input ref={nameRef} type='text' className='form-control border-0' id='inputName' placeholder='Name' autoFocus />
                <label htmlFor='inputName'>Name</label>
            </div>
            <div className='form-floating mb-3'>
                <input ref={surnameRef} type='text' className='form-control border-0' id='inputSurname' placeholder='Surname' />
                <label htmlFor='inputSurname'>Surname</label>
            </div>
            <div className='form-floating mb-3'>
                <input ref={emailRef} type='email' className='form-control border-0' id='inputEmail' placeholder='Email' />
                <label htmlFor='inputEmail'>Email</label>
            </div>
            <button type='submit' className='btn btn-dark float-end mb-3'>Add</button>
        </form>
    );

};


ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};


export default ContactForm;

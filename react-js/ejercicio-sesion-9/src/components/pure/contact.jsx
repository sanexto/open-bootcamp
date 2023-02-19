import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

import '../../styles/contact.scss';


const ContactComponent = ({contact, setConnected, removeContact}) => {

    const connectedIcon = () => {
        if(contact.connected)
            return (<i onClick={() => setConnected(contact)} className='bi-circle-fill contact-icon' style={{color: 'green'}}></i>);
        return (<i onClick={() => setConnected(contact)} className='bi-circle-fill contact-icon' style={{color: 'grey'}}></i>);
    }

    return (
        <tr>
            <td>
                {contact.name}
            </td>
            <td>
                {contact.surname}
            </td>
            <td>
                {contact.email}
            </td>
            <td className='text-center'>
                {connectedIcon()}
            </td>
            <td className='text-center'>
                <i onClick={() => removeContact(contact)} className='bi-trash-fill contact-icon' style={{color: 'tomato'}}></i>
            </td>
        </tr>
    );

};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    setConnected: PropTypes.func.isRequired,
    removeContact: PropTypes.func.isRequired,
};


export default ContactComponent;

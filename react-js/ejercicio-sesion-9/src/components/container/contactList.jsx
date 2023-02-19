import React, { useState } from 'react';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';


const ContactList = () => {

    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    const setConnected = (contact) => {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);
    }

    const removeContact = (contact) => {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    return (
        <div>
            <ContactForm 
                addContact={addContact}
            />
            <table className='table table-borderless table-hover rounded overflow-hidden align-middle'>
                <thead className='table-dark'>
                    <tr>
                        <th scope='col'>
                            Name
                        </th>
                        <th scope='col'>
                            Surname
                        </th>
                        <th scope='col'>
                            Email
                        </th>
                        <th scope='col' className='text-center'>
                            Online
                        </th>
                        <th scope='col' className='text-center'>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {contacts.map((contact, index) => {
                        return (
                            <ContactComponent 
                                key={index} 
                                contact={contact} 
                                setConnected={setConnected} 
                                removeContact={removeContact} 
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

};


export default ContactList;

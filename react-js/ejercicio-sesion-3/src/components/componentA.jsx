import React from 'react';
import PropTypes from 'prop-types';
import ComponentB from './componentB';
import { Contact } from '../models/contact.class';


const ComponentA = ({ contact }) => {
    return (
        <div>
            <h2>Name: { contact.name }</h2>
            <h3>Surname: { contact.surname }</h3>
            <h3>Email: { contact.email }</h3>
            <ComponentB state={ contact.connected } />
        </div>
    );
};


ComponentA.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};


export default ComponentA;

import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ComponentB = ({ state }) => {

    const [connected, setConnected] = useState(state);

    return (
        <div>
            <h3>{ connected ? 'Online Contact' : 'Contact Not Available' }</h3>
            <button onClick={ () => setConnected(!connected) }>{ connected ? 'Disconnected' : 'Connected' }</button>
        </div>
    );
};


ComponentB.propTypes = {
    state: PropTypes.bool,
};


export default ComponentB;

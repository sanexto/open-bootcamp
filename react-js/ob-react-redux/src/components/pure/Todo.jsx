import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ id, text, completed, onClick }) => {
    return (
        <li onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none',
                textDecorationColor: completed ? 'green' : 'none',
                color: completed ? 'green' : 'white',
            }}
        >
            {id} - {text}
        </li>
    );
}

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Todo;

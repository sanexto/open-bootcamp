import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ onSubmit }) => {

    const newText = useRef(null);

    return (
        <div>
            <h2>Create your TODOs</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit(newText.current.value);
                newText.current.value = '';
            }}>
                <input type='text' ref={newText} />
                <button type='submit'>
                    Create Todo
                </button>
            </form>
        </div>
    );
};

TodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;

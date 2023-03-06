import { connect } from 'react-redux';

// Actions
import { addTodo } from '../../store/actions/actions';

import TodoForm from '../pure/TodoForm';

const mapStateToProps = (state) => ({
    // Not necessary
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text) => {
            dispatch(addTodo(text));
        },
    };
};

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm);

export default TodoFormContainer;

import { connect } from 'react-redux';

// Actions
import { toggleTodo } from '../../store/actions/actions';

import TodoList from '../pure/TodoList';

// Filter Todo List
const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);
        default:
            return todos;
    }
};

const mapStateToProps = (state) => {
    return {
        /**
         * A través del parámetro state accedemos a los estados
         * definidos en el Root Reducer
         */
        todos: filterTodos(state.todoState, state.filterState),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        },
    };
};

// Conectamos la información de REDUX con el componente TodoList
// We map State & Dispatch to TodoList's Props
const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoContainer;

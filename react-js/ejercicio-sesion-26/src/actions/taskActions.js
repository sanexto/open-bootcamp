export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const FILTER_TASKS = 'FILTER_TASKS';

export const addTask = (task) => {

    return {
        type: ADD_TASK,
        payload: {
            task: task,
        },
    };

};

export const toggleTask = (id) => {

    return {
        type: TOGGLE_TASK,
        payload: {
            id: id,
        },
    };

};

export const deleteTask = (id) => {

    return {
        type: DELETE_TASK,
        payload: {
            id: id,
        },
    };

};

export const filterTasks = (filter) => {

    return {
        type: FILTER_TASKS,
        payload: {
            filter: filter,
        },
    };

};
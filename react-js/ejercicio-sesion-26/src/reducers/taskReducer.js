import {
    ADD_TASK,
    DELETE_TASK,
    FILTER_TASKS,
    TOGGLE_TASK
} from '../actions/taskActions';

import { PRIORITIES } from '../models/priorities.enum';

const chipColors = {};

chipColors[ PRIORITIES.NORMAL ] = 'primary';
chipColors[ PRIORITIES.URGENT ] = 'warning';
chipColors[ PRIORITIES.BLOCKING ] = 'error';

export const taskState = {
    tasks: [],
    filter: 'all',
    chipColors: chipColors,
};

export const taskReducer = (state, action) => {

    switch (action.type) {

        case ADD_TASK: {

            return {
                ...state,
                tasks: [ ...state.tasks, action.payload.task ],
            };

        }
        
        case TOGGLE_TASK: {

            return {
                ...state,
                tasks: state.tasks.map((task) => {

                    if (task.id === action.payload.id) {

                        const cTask = Object.assign(Object.create(Object.getPrototypeOf(task)), task);

                        cTask.completed = !cTask.completed;

                        return cTask;

                    }

                    return task;

                }),
            };

        }

        case DELETE_TASK: {

            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload.id),
            };

        }

        case FILTER_TASKS: {

            return {
                ...state,
                filter: action.payload.filter,
            };

        }
    
        default: {

            return state;

        }

    }

};
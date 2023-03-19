import React, { useReducer } from 'react';

import {
    Box,
    Container
} from '@mui/material';

import { taskReducer, taskState } from '../reducers/taskReducer';
import { TaskContext } from '../contexts/TaskContext';

import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TaskPage = () => {

    const [ state, dispatch ] = useReducer(taskReducer, taskState);

    return (
        <TaskContext.Provider value={ [ state, dispatch ] }>
            <Container maxWidth='lg'>
                <Box
                    sx={{
                        marginTop: 4,
                        marginBottom: 4,
                        padding: 6,
                        borderRadius: 2,
                        bgcolor: 'white'
                    }}
                >
                    <TaskForm />
                    <Box sx={{ mt: 6 }} />
                    <TaskList />
                </Box>
            </Container>
        </TaskContext.Provider>
    );

};

export default TaskPage;
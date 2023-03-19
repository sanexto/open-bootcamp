import React, { useContext } from 'react';

import {
    Alert,
    Box,
    Grid,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from '@mui/material';

import { TaskContext } from '../contexts/TaskContext';

import {
    filterTasks
} from '../actions/taskActions';

import TaskItem from './TaskItem';

const TaskList = () => {

    const [ state, dispatch ] = useContext(TaskContext);

    const tasks = state.tasks.filter((task) => state.filter === 'all' ? true : state.filter === task.completed);

    return (
        <Grid container spacing={ 2 }>
            <Grid item xs={ 12 }>
                <Box display='flex' justifyContent='flex-end'>
                    <TextField
                        select
                        id='filter'
                        name='filter'
                        defaultValue='all'
                        size='small'
                        sx={{ width: '20%' }}
                        onChange={ (e) => dispatch(filterTasks(e.target.value)) }
                    >
                        <MenuItem value='all'>
                            All
                        </MenuItem>
                        <MenuItem value={ false }>
                            Active
                        </MenuItem>
                        <MenuItem value={ true }>
                            Completed
                        </MenuItem>
                    </TextField>
                </Box>
            </Grid>
            <Grid item xs={ 12 }>
                { tasks.length > 0
                    ?
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                                    <TableCell align='left'>
                                        <Typography variant='subtitle1'>
                                            Title
                                        </Typography>
                                    </TableCell>
                                    <TableCell align='left'>
                                        <Typography variant='subtitle1'>
                                            Description
                                        </Typography>
                                    </TableCell>
                                    <TableCell align='center' sx={{ width: 150 }}>
                                        <Typography variant='subtitle1'>
                                            Priority
                                        </Typography>
                                    </TableCell>
                                    <TableCell align='center' sx={{ width: 150 }}>
                                        <Typography variant='subtitle1'>
                                            Actions
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { tasks.map((task, index) => (
                                    <TaskItem key={ index } task={ task } />
                                )) }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <Alert icon={ false } color='info'>
                        <Typography variant='body2'>
                            There are no tasks to show.
                        </Typography>
                    </Alert>
                }
            </Grid>
        </Grid>
    );

};

export default TaskList;
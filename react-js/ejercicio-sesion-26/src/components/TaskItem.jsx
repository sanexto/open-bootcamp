import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
    Chip,
    IconButton,
    Switch,
    TableCell,
    TableRow,
    Typography
} from '@mui/material';

import {
    Delete as DeleteIcon
} from '@mui/icons-material';

import { TaskContext } from '../contexts/TaskContext';

import {
    deleteTask,
    toggleTask
} from '../actions/taskActions';

import { Task } from '../models/task.class';

const TaskItem = ({ task }) => {

    const [ state, dispatch ] = useContext(TaskContext);

    return (
        <TableRow hover>
            <TableCell align='left'>
                <Typography variant='body2'>
                    { task.title }
                </Typography>
            </TableCell>
            <TableCell align='left'>
                <Typography variant='body2'>
                    { task.description }
                </Typography>
            </TableCell>
            <TableCell align='center'>
                <Chip
                    label={ <Typography variant='body2'>{ task.priority }</Typography> }
                    color={ state.chipColors[ task.priority ] }
                />
            </TableCell>
            <TableCell align='center'>
                <Switch
                    checked={ task.completed }
                    onChange={ () => dispatch(toggleTask(task.id)) }
                />
                <IconButton
                    sx={{ ml: 1 }}
                    onClick={ () => dispatch(deleteTask(task.id)) }
                >
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );

};

TaskItem.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
};

export default TaskItem;
import React, { useContext } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

import {
    Box,
    Button,
    Grid,
    MenuItem,
    TextField
} from '@mui/material';

import { TaskContext } from '../contexts/TaskContext';

import {
    addTask
} from '../actions/taskActions';

import { Task } from '../models/task.class';
import { PRIORITIES } from '../models/priorities.enum';

const initialValues = {
    title: '',
    description: '',
    priority: PRIORITIES.NORMAL,
    completed: false,
};

const validationSchema = yup.object({
    title: yup
        .string('Enter task title')
        .min(3, 'Title too short')
        .max(60, 'Title too long')
        .required('Title is required'),
    description: yup
        .string('Enter task description')
        .min(3, 'Description too short')
        .max(120, 'Description too long')
        .required('Description is required'),
    priority: yup
        .string('Select task priority')
        .oneOf([ PRIORITIES.NORMAL, PRIORITIES.URGENT, PRIORITIES.BLOCKING ], 'Select a valid priority')
        .required('Priority is required'),
});

const TaskForm = () => {

    const [ , dispatch ] = useContext(TaskContext);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {

            dispatch(addTask(new Task(
                Date.now(),
                values.title,
                values.description,
                values.priority,
                values.completed,
            )));

            actions.resetForm({
                values: initialValues,
            });

        },
    });

    return (
        <form onSubmit={ formik.handleSubmit }>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 }>
                    <TextField
                        fullWidth
                        id='title'
                        name='title'
                        label='Title'
                        value={ formik.values.title }
                        onChange={ formik.handleChange }
                        error={ formik.touched.title && Boolean(formik.errors.title) }
                        helperText={ formik.touched.title && formik.errors.title }
                    />
                </Grid>
                <Grid item xs={ 12 }>
                    <TextField
                        fullWidth
                        multiline
                        rows={ 4 }
                        id='description'
                        name='description'
                        label='Description'
                        value={ formik.values.description }
                        onChange={ formik.handleChange }
                        error={ formik.touched.description && Boolean(formik.errors.description) }
                        helperText={ formik.touched.description && formik.errors.description }
                    />
                </Grid>
                <Grid item xs={ 12 }>
                    <TextField
                        fullWidth
                        select
                        id='priority'
                        name='priority'
                        label='Priority'
                        value={ formik.values.priority }
                        onChange={ formik.handleChange }
                        error={ formik.touched.priority && Boolean(formik.errors.priority) }
                        helperText={ formik.touched.priority && formik.errors.priority }
                    >
                        <MenuItem value={ PRIORITIES.NORMAL }>
                            { PRIORITIES.NORMAL }
                        </MenuItem>
                        <MenuItem value={ PRIORITIES.URGENT }>
                            { PRIORITIES.URGENT }
                        </MenuItem>
                        <MenuItem value={ PRIORITIES.BLOCKING }>
                            { PRIORITIES.BLOCKING }
                        </MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={ 12 }>
                    <Box display='flex' justifyContent='flex-end'>
                        <Button variant='contained' type='submit'>Save</Button>
                    </Box>
                </Grid>
            </Grid>
        </form>
    );

};

export default TaskForm;
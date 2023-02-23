import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, length}) => {

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL,
    };

    const taskSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name too short')
            .max(60, 'Name too long')
            .required('Name is required'),
        description: Yup.string()
            .min(3, 'Description too short')
            .max(120, 'Description too long')
            .required('Description is required'),
        level: Yup.string()
            .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a level: Normal, Urgent or Blocking')
            .required('Level is required'),
    });

    function addTask(values) {
        const newTask = new Task(
            values.name,
            values.description,
            values.completed,
            values.level,
        );
        add(newTask);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={taskSchema}
            onSubmit={addTask}
        >
            <Form className='d-flex justify-content-center align-items-center mb-4'>
                <div className='form-outline flex-fill'>
                    <Field id='name' name='name' className='form-control form-control-lg' type='text' placeholder='Task Name' autoFocus />
                    <ErrorMessage name='name' component='div' />

                    <Field id='description' name='description' className='form-control form-control-lg' type='text' placeholder='Task Description' />
                    <ErrorMessage name='description' component='div' />

                    <Field id='level' name='level' className='form-control form-control-lg' as='select'>
                        <option value={LEVELS.NORMAL}>
                            Normal
                        </option>
                        <option value={LEVELS.URGENT}>
                            Urgent
                        </option>
                        <option value={LEVELS.BLOCKING}>
                            Blocking
                        </option>
                    </Field>
                    <ErrorMessage name='level' component='div' />

                    <button type='submit' className='btn btn-success btn-lg ms-2'>
                        {length > 0 ? 'Add New Task' : 'Create your First Task'}
                    </button>
                </div>
            </Form>
        </Formik>
    );
};


TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number,
};


export default TaskForm;

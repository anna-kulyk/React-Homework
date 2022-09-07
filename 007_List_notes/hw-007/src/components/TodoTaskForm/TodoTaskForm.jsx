import React from 'react';
import styles from '../TodoApp/_variables.scss';
import './TodoTaskForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import { addTodoListItemAction, taskInputChangeAction } from '../../redux-store/actions';

const TodoTaskForm = () => {
    const dispatch = useDispatch();
    const taskFormStore = useSelector(state => state.todoTaskForm);
    const { taskInput } = taskFormStore;

    const hadleOnChange = (e) => {
        dispatch(taskInputChangeAction(e.target.value));
    }

    const hadleOnClick = () => {
        if(taskInput==='') {return}
        dispatch(addTodoListItemAction(taskInput));
        dispatch(taskInputChangeAction(''));
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        hadleOnClick();
    }

    const color = styles.secondaryColor;

    return (
        <form className='todo-task-form' onSubmit={handleOnSubmit}>
            <label className='new-task-label'>New Task</label>
            <p className='new-task-container'>
                <input 
                    className='new-task-input'
                    type='text'
                    name='new-task-input'
                    value={taskInput}
                    onChange={hadleOnChange}
                />
                <Button 
                    className={'add-task-btn'}
                    size={'16'}
                    color={color}
                    iconType={'plus'}
                    onClick={hadleOnClick}
                >
                </Button>
            </p>
        </form>
    );
};

export default TodoTaskForm;
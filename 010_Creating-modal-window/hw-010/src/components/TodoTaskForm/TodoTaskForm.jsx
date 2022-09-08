import React from 'react';
import './TodoTaskForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import { addTodoListItemAction, taskInputChangeAction } from '../../redux-store/actions';
import { ThemeContext } from '../../context/ThemeContext';

const TodoTaskForm = () => {
    const dispatch = useDispatch();
    const taskFormStore = useSelector(state => state.todoTaskForm);
    const { taskInput } = taskFormStore;
    const theme = React.useContext(ThemeContext);

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

    return (
        <form className='todo-task-form' onSubmit={handleOnSubmit} style={{backgroundColor: theme.primaryColor}}>
            <label className='new-task-label'>New Task</label>
            <p className='new-task-container'>
                <input 
                    className='new-task-input'
                    type='text'
                    name='new-task-input'
                    value={taskInput}
                    onChange={hadleOnChange}
                    style={{color: theme.primaryColor}}
                />
                <Button 
                    className={'add-task-btn'}
                    size={'16'}
                    color={'white'}
                    iconType={'plus'}
                    onClick={hadleOnClick}
                >
                </Button>
            </p>
        </form>
    );
};

export default TodoTaskForm;
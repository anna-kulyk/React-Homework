import React from 'react';
import TodoList from '../TodoList/TodoList';
import TodoTaskForm from '../TodoTaskForm/TodoTaskForm';
import './TodoApp.scss';
import { ThemeContext } from '../../context/ThemeContext';

const TodoApp = () => {
    const theme = React.useContext(ThemeContext);
    return (
        <div className='todo-app__container' style={{outlineColor: theme.primaryColor}}>
            <h1 className='todo-app__header' style={{color: theme.primaryColor}}>Todo list</h1>
            <TodoTaskForm />
            <TodoList />
        </div>
    );
};

export default TodoApp;
import React from 'react';
import TodoList from '../TodoList/TodoList';
import TodoTaskForm from '../TodoTaskForm/TodoTaskForm';
import './TodoApp.scss';

const TodoApp = () => {
    return (
        <div className='todo-app__container'>
            <h1 className='todo-app__header'>Todo list</h1>
            <TodoTaskForm />
            <TodoList />
        </div>
    );
};

export default TodoApp;
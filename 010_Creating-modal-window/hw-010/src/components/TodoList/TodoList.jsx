import React from 'react';
import './TodoList.scss';
import { useSelector } from 'react-redux';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = () => {
    const todoListStore = useSelector(state => state.todoList);
    const { tasks } = todoListStore;
    const taskList = Object.values(tasks).map((task)=>{return <TodoListItem key={task.key} task={task}/>});

    return (
        <ul className='todo-list'>
            {taskList}
        </ul>
    );
};

export default TodoList;
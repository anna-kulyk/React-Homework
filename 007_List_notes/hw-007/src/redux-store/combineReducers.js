import { combineReducers } from 'redux';
import todoListReduser from './redusers/todoListReduser';
import todoTaskFormReduser from './redusers/todoTaskFormReduser';

export default combineReducers({
    todoTaskForm: todoTaskFormReduser,
    todoList: todoListReduser
})
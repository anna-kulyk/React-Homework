import { ADD_TODO_LIST_ITEM, CHECK_TODO_LIST_ITEM, DELETE_TODO_LIST_ITEM } from "../actions";
import initialStore from "../initialStore";

const todoListReduser = (state = initialStore.todoList, action) => {
    let tasks = {...state.tasks};
    switch (action.type) {
        case ADD_TODO_LIST_ITEM:
            const key = new Date().getTime();
            tasks[key] = {
                taskName: action.payload, 
                isDone: false,
                key: new Date().getTime()
            };
            localStorage.setItem('tasks', JSON.stringify(tasks));
            return {
                ...state, 
                tasks
            };
        case CHECK_TODO_LIST_ITEM:
            tasks[action.payload].isDone = !tasks[action.payload].isDone;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            return {
                ...state, 
                tasks
            };
        case DELETE_TODO_LIST_ITEM:
            delete tasks[action.payload];
            localStorage.setItem('tasks', JSON.stringify(tasks));
            return {
                ...state, 
                tasks
            };
        default:
            return state;
    } 
}

export default todoListReduser;
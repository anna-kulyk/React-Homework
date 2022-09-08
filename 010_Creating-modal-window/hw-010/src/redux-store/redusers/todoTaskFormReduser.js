import { TASK_INPUT_CHANGE } from "../actions";
import initialStore from "../initialStore";

const todoTaskFormReduser = (state = initialStore.todoTaskForm, action) => {
    switch (action.type) {
        case TASK_INPUT_CHANGE:
            return {...state, taskInput: action.payload};
        default:
            return state;
    } 
}

export default todoTaskFormReduser;
//TODO task form
export const TASK_INPUT_CHANGE = "TASK_INPUT_CHANGE";

export function taskInputChangeAction(task) {
    return{
        type: TASK_INPUT_CHANGE,
        payload: task
    }
}

//TODO List
export const ADD_TODO_LIST_ITEM = "ADD_TODO_LIST_ITEM";
export const CHECK_TODO_LIST_ITEM = "CHECK_TODO_LIST_ITEM";
export const DELETE_TODO_LIST_ITEM = "DELETE_TODO_LIST_ITEM";


export function addTodoListItemAction(listItem) {
    return{
        type: ADD_TODO_LIST_ITEM,
        payload: listItem
    }
}

export function checkTodoListItemAction(key) {
    return{
        type: CHECK_TODO_LIST_ITEM,
        payload: key
    }
}

export function deleteTodoListItemAction(key) {
    return{
        type: DELETE_TODO_LIST_ITEM,
        payload: key
    }
}
const initialStore = {
    todoTaskForm: {
        taskInput: ''
    },
    todoList: {
        tasks: JSON.parse(localStorage.getItem('tasks')) || {}
    }
}

export default initialStore;
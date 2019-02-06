import * as type from '../constants/constants';

let nextTodoId = 0;
const addTodo = (text,date) =>({
    type: type.ADD_TODO,
    id: nextTodoId ++,
    text,
    date
})

const toggleTodo = (id) =>({
    type: type.TOGGLE_TODO,
    id
})

const deleteTodo = (id) =>({
    type: type.DELETE_TODO,
    id
})

const setVisibility = filter =>({
    type: type.SET_VISIBILITY,
    filter
})

export{
    addTodo,
    toggleTodo,
    setVisibility,
    deleteTodo
}
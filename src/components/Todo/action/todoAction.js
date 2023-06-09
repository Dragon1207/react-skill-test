
import { ADD_TODO, DELETE_TODO } from "../reducer/todoReducer";

export const addTodo = (todo) => dispatch => {
    dispatch({
        type: ADD_TODO,
        payload: todo
    });
}

export const deleteTodo = (id) => dispatch => {
    dispatch({
        type: DELETE_TODO,
        payload: id
    });
}

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const initialState = {
    todos: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, { id: Math.random(), ...action.payload }] }
        case DELETE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return initialState;
    }
}
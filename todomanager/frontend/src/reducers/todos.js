import { GET_TODOS, DELETE_TODO, ADD_TODO, COMPLETED_TODO, UPDATE_TODO, FILTER_TODO } from "../actions/types.js";

const initialState = {
    todos: [],
    allTodos: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                allTodos: action.payload
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
                allTodos: state.allTodos.filter(todo => todo.id !== action.payload)
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                allTodos: [...state.allTodos, action.payload]
            };
        case COMPLETED_TODO:
        case UPDATE_TODO:
            let edittedIndex = state.todos.findIndex(todo => todo.id === action.payload.id)
            let edittedIndexAllTodos = state.allTodos.findIndex(todo => todo.id === action.payload.id)

            state.todos[edittedIndex].completed = action.payload.completed
            state.todos[edittedIndex].title = action.payload.title
            state.todos[edittedIndex].description = action.payload.description

            state.allTodos[edittedIndexAllTodos].completed = action.payload.completed
            state.allTodos[edittedIndexAllTodos].title = action.payload.title
            state.allTodos[edittedIndexAllTodos].description = action.payload.description

            return {
                ...state,
                todos: [...state.todos],
                allTodos: [...state.allTodos]
            }
        case FILTER_TODO:
            const value = action.payload.toLowerCase();
            const todos = value ? state.allTodos.filter(todo => todo.title.toLowerCase().match(value)) : state.allTodos;
            return {
                ...state,
                todos
            }
        default:
            return state;
    }
}
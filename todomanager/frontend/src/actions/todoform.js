import { EDIT_TODO, RESET_TODO } from './types'

export const editTodo = (id, title, description) => {
    return {
        type: EDIT_TODO,
        payload: {id, title, description}
    }
}
export const resetTodo = () => {
    return {
        type: RESET_TODO
    }
}
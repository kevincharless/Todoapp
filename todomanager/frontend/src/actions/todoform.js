import { EDIT_TODO, RESET_TODO } from './types'

export const editTodo = (title, id) => {
    return {
        type: EDIT_TODO,
        payload: {title, id}
    }
}
export const resetTodo = () => {
    return {
        type: RESET_TODO
    }
}
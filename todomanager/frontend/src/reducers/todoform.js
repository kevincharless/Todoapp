import { EDIT_TODO, RESET_TODO } from "../actions/types.js";

const initialState = {
    formState: "create",
    title: "",
    description: "",
    id: null,
}

const todoformreducer = (state = initialState, action) => {
    switch(action.type) {
        case EDIT_TODO:
            return {
                ...state,
                formState: "edit",
                title: action.payload.title,
                description: action.payload.description,
                id: action.payload.id,
            }
        case RESET_TODO:
            return {
                formState: "create",
                title: "",
                description: "",
                id: null,
            }
        default: 
            return state
    }
}

export default todoformreducer
import { EDIT_TODO, RESET_TODO } from "../actions/types.js";

const initialState = {
    formState: "create",
    title: "",
    id: null,
}

const todoformreducer = (state = initialState, action) => {
    switch(action.type) {
        case EDIT_TODO:
            return {
                ...state,
                formState: "edit",
                title: action.payload.title,
                id: action.payload.id,
            }
        case RESET_TODO:
            return initialState
        default: 
            return initialState
    }
}

export default todoformreducer
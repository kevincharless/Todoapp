import { CREATE_MESSAGE, CREATE_MESSAGGE } from './types';

// CREATE MESSAGE
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};
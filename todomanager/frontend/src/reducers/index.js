import { combineReducers } from 'redux';
import todos from './todos';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import todoform from './todoform';

export default combineReducers({
    todos,
    errors,
    messages,
    auth,
    todoform
});
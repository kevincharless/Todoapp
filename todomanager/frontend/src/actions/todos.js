import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_TODOS, DELETE_TODO, ADD_TODO, COMPLETED_TODO, UPDATE_TODO } from './types';

// GET TODOS
export const getTodos = () => (dispatch, getState) => {
    axios
    .get('/api/todos/', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_TODOS,
            payload: res.data
        });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE TODO
export const deleteTodo = (id) => (dispatch, getState) => {
    axios
    .delete(`/api/todos/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteTodo: 'Todo Deleted' }));
        dispatch({
            type: DELETE_TODO,
            payload: id
        });
    })
    .catch(err => console.log(err));
};

// ADD TODO
export const addTodo = todo => (dispatch, getState) => {
    axios
    .post('/api/todos/', todo, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addTodo: 'Todo Added' }));
        dispatch({
            type: ADD_TODO,
            payload: res.data
        });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// Completed TODO
export const completedTodo = todo => (dispatch, getState) => {
    axios
    .put(`/api/todos/${todo.id}/`, {
        title: todo.title,
        completed: !todo.completed
    } ,tokenConfig(getState))
    .then(res => {
        dispatch({
            type: COMPLETED_TODO,
            payload: res.data
        });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// Update Todo
export const updateTodo = (id, title) => (dispatch, getState) => {
    axios
    .put(`/api/todos/${id}/`, {
        title,
        completed: false
    } ,tokenConfig(getState))
    .then(res => {
        dispatch({
            type: UPDATE_TODO,
            payload: res.data
        });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
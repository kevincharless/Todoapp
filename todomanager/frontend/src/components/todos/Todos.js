import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getTodos, deleteTodo, completedTodo } from '../../actions/todos';
import { editTodo } from '../../actions/todoform';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const style = {
    taskwrapper: css `
        display: flex;
        cursor: pointer;
        border-bottom: 1px solid  #e9e9e9;
        color: #686868;
        margin:5px;
        padding:20px;
    `
}

export class Todos extends Component {
    static propTypes = {
        todos: propTypes.array.isRequired,
        getTodos: propTypes.func.isRequired,
        deleteTodo: propTypes.func.isRequired,
        completedTodo: propTypes.func.isRequired,
        editTodo: propTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getTodos();
    }

    handleDeleteAll = () => {
        this.props.deleteTodo(this.props.todos)
    }

    submit = (id, title) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                const style = {
                    textBlack: css`
                        color: #020205;
                    `,
                    buttonNo: css`
                        background-color: #fcf9f9;
                        color: #020205;

                        &:hover{
                            border: 1px solid #020205;
                            background-color: transparent;
                            color: #020205;
                        }
                    `,
                    buttonYes: css`
                        background-color: #cd0a0a;
                        color: #fcf9f9;

                        &:hover{
                            border: 1px solid #cd0a0a;
                            background-color: transparent;
                            color: #cd0a0a;
                        }
                    `,
                }

                return (
                    <div className='custom-ui'>
                        <div className="card rounded-lg p-5 d-flex justify-content-center text-center">
                            <div className="d-flex justify-content-center">
                                <FontAwesomeIcon icon={faExclamationTriangle} style={{fontSize: "6em", color: "#cd0a0a"}} />
                            </div>
                            <h1 css={style.textBlack} className="font-weight-bold pt-3">Are you sure?</h1>
                            <p css={style.textBlack} className="">You want to delete<p css={style.textBlack} className="font-weight-bold m-0">{title}</p>from Todolist?</p>
                            <div className="row">
                                <button css={style.buttonNo} onClick={onClose} className="col btn rounded-lg mr-2 font-weight-bold">No</button>
                                <button
                                    onClick={() => {
                                        this.props.deleteTodo(id)
                                        onClose();
                                    }}
                                    className="col btn rounded-lg font-weight-bold"
                                    css={style.buttonYes}
                                >
                                Yes, Delete it!
                                </button>
                            </div>
                        </div>
                    </div>
                    );
                }
            });
        };

    render() {
        const style = {
            div: css`
                color: #020205;
            `,
            button: css`
                color: #fcf9f9;
                background-color: #b3d146;
                border: 2px solid #b3d146;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;

                &:hover {
                    color: #fcf9f9;
                    background: transparent;
                }
            `,
            todos: css`
                margin-right: 2.5em;
                color: #020205;
                font-size: 1.5em;
                font-family: 'Roboto', sans-serif;
            `,
            hr: css`
                border-top: 1px solid #020205;
            `,
            buttonEdit: css`
                color: #fcf9f9;
                background-color: #150485;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;

                &:hover {
                    color: #150485;
                    background: transparent;
                    border: 1px solid #150485;
                }
            `,
            buttonDelete: css`
                color: #fcf9f9;
                background-color: #cd0a0a;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;

                &:hover {
                    color: #cd0a0a;
                    background: transparent;
                    border: 1px solid #cd0a0a;
                }
            `,
            text: css`
                font-family: 'Roboto', sans-serif;
            `,
        }
        return (
            <Fragment>
                <div css={style.div} className="container">
                    <div className="container">
                        <div css={style.todos}> 
                            { this.props.todos.map(todo => (
                                <>
                                    <div className="d-flex flex-wrap">
                                        <div onClick={this.props.completedTodo.bind(this, todo)} style={{flex:1}} className="d-flex justify-content-center align-items-center">
                                            {todo.completed === false ? (
                                                ""
                                            ) : (
                                                <span className="material-icons">
                                                    check
                                                </span>
                                            )}
                                        </div>

                                        <div onClick={this.props.completedTodo.bind(this, todo)} style={{flex:12}} className="d-flex align-items-center">
                                            {todo.completed === false ? (
                                                <span>{todo.title}</span>
                                            ) : (
                                                <strike>{todo.title}</strike>
                                            )}
                                            
                                        </div>

                                        {todo.completed ? (
                                            <></>
                                        ):(
                                            <div style={{flex:1}} className="d-flex align-items-center">
                                                <button css={style.buttonEdit} onClick={this.props.editTodo.bind(this, todo.title, todo.id)} className="btn btn-sm d-flex justify-content-center align-items-center">
                                                    <span className="material-icons d-block">
                                                        create
                                                    </span>
                                                    <span className="d-block">
                                                        Edit
                                                    </span>
                                                </button>
                                            </div>
                                        )}

                                        <div style={{flex:1}} className="d-flex align-items-center mx-2">
                                            <button
                                            css={style.buttonDelete}
                                            onClick={ () => this.submit(todo.id, todo.title)}
                                            // onClick={this.props.deleteTodo.bind(this, todo.id)}
                                            className="btn btn-sm d-flex justify-content-center align-items-center">
                                                <span className="material-icons d-block">
                                                    delete
                                                </span>
                                                <span className="d-block">
                                                    Delete
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <hr css={style.hr} />
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos
}); 

export default connect(
    mapStateToProps, 
    { getTodos, deleteTodo, completedTodo, editTodo }
    )(Todos);
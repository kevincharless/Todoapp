import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getTodos, deleteTodo, completedTodo, filterTodo } from '../../actions/todos';
import { editTodo } from '../../actions/todoform';
import Form from '../todos/Form';

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
        color: #e9e9e9;
        margin:5px;
        padding:20px;
    `
}

export class Todos extends Component {
    state = {
        selectedId: []
    }

    static propTypes = {
        todos: propTypes.array.isRequired,
        getTodos: propTypes.func.isRequired,
        deleteTodo: propTypes.func.isRequired,
        completedTodo: propTypes.func.isRequired,
        editTodo: propTypes.func.isRequired,
        filterTodo: propTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getTodos(); 
    }

    handleOnChange = (e) => {
        this.props.filterTodo(e.target.value);
    }
    
    handleDeleteSelected = (id) => {
        const {selectedId} = this.state;

        if (selectedId.includes(id)) {
            this.setState({
                selectedId: selectedId.filter(ids => ids != id)
            })
        } else {
            this.setState({
                selectedId: [...selectedId, id]
            })
        }
    }

    deleteSelected = () => {
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
                            <p css={style.textBlack} className="">You want to delete all selected Tasks from Todolist?</p>
                            
                            <form onSubmit={() => {
                                this.props.deleteTodo(this.state.selectedId)
                                onClose();
                                this.state.selectedId.length = 0
                            }}>
                                <div class="row form-group form-check">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" name="remember" required /> I agree to delete all selected Tasks.
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Check this checkbox to continue.</div>
                                    </label>
                                </div>
                                
                                <div className="row">
                                    <button css={style.buttonNo} onClick={onClose} className="col btn rounded-lg mr-2 font-weight-bold">No</button>
                                    
                                    <button
                                        type="submit"
                                        className="col btn rounded-lg font-weight-bold"
                                        css={style.buttonYes}
                                    >
                                    Yes, Delete it!
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    );
                }
            });
        }

    handleDeleteAll = () => {
        const todos = this.props.todos

        todos.map(todo => (
            this.props.deleteTodo(todo.id)
        ))
    }

    deleteTodoAll = () => {
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
                            <p css={style.textBlack} className="">You want to delete all from Todolist?</p>
                            
                            <form onSubmit={() => {
                                this.handleDeleteAll()
                                onClose();
                            }}>
                                <div class="row form-group form-check">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" name="remember" required /> I agree to delete all.
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Check this checkbox to continue.</div>
                                    </label>
                                </div>
                                
                                <div className="row">
                                    <button css={style.buttonNo} onClick={onClose} className="col btn rounded-lg mr-2 font-weight-bold">No</button>
                                    
                                    <button
                                        type="submit"
                                        className="col btn rounded-lg font-weight-bold"
                                        css={style.buttonYes}
                                    >
                                    Yes, Delete it!
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    );
                }
            });
        };

    deleteTodo = (id, title) => {
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
                    divTitle: css`
                        width: 25vw;
                        font-weight: 500;
                        word-break: break-all;
                        color: #020205;
                    `,
                }

                return (
                    <div className='custom-ui'>
                        <div className="card rounded-lg p-5 d-flex justify-content-center text-center overflow-hidden">
                            <div className="d-flex justify-content-center">
                                <FontAwesomeIcon icon={faExclamationTriangle} style={{fontSize: "6em", color: "#cd0a0a"}} />
                            </div>
                            <h1 css={style.textBlack} className="font-weight-bold pt-3">Are you sure?</h1>
                            <p css={style.textBlack} className="">You want to delete<p css={style.divTitle} className="font-weight-bold m-0">{title}</p>from Todolist?</p>
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

    isUrl = (description) => {
        const regexUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

        return description.match(regexUrl)
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
            });
        }

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
                border-radius: 6px;

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
                border-top: 1px solid #e5e5e5;
            `,
            buttonEdit: css`
                color: #fcf9f9;
                background-color: #150485;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;
                border-radius: 6px;

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
                border-radius: 6px;

                &:hover {
                    color: #cd0a0a;
                    background: transparent;
                    border: 1px solid #cd0a0a;
                }
            `,
            buttonAddDescription: css`
                color: #fcf9f9;
                background-color: #b3d146;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;
                border-radius: 6px;

                &:hover {
                    color: #b3d146;
                    background: transparent;
                    border: 1px solid #b3d146;
                }
            `,
            text: css`
                font-family: 'Roboto', sans-serif;
            `,
            divTitle: css`
                font-weight: 500;
                word-break: break-all;

                &:hover {
                    cursor: pointer;
                }
            `,
            divDescription: css`
                font-weight: 300;
                font-size: 0.8em;
                word-break: break-all;

                
            `,
            ceklis: css`
                &:hover {
                    cursor: pointer;
                }
            `,
            checkBox: css`
                top: 0;
            `,
            card: css`
                border-radius: 6px;
            `,
            searchBar: css`
                border-radius: 6px;
                padding: 15px;
            `,
            media: css`
                @media (min-width: 576px) {
                    
                }
            `,
            title: css`
                width: 90%;
            `,
        }

        return (
            <Fragment>
                <div css={style.div} className="container">
                    <div css={style.todos}>
                        <div className="container">
                            <h4 className="my-0">Add An Item</h4>

                            <Form />

                            <div className="row mb-3">
                                <div className="col d-flex align-items-center my-0">
                                    <h4 className="my-0">Search the Title</h4>
                                </div>
                                <div className="col-auto p-0 pr-2">
                                    <div className="text-right">
                                        { this.state.selectedId.length > 0 ?
                                            <button css={style.buttonDelete} onClick={this.deleteSelected} className="btn pull-right">
                                                Delete Selected
                                            </button>
                                            :
                                            <button css={style.buttonDelete} onClick={this.deleteSelected} className="btn pull-right invisible">
                                                Delete Selected
                                            </button>
                                        }
                                    </div>
                                </div>
                                <div className="col-auto pl-0">
                                    <div className="text-right">
                                        { this.props.todos.length != 0 ? <button css={style.buttonDelete} onClick={this.deleteTodoAll} className="btn pull-right">Delete All</button> : <></>}
                                    </div>
                                </div>
                            </div>
                            
                            <input css={style.searchBar} onChange={this.handleOnChange} className="form-control mb-3" type="text" placeholder="Search..." aria-label="Search" />

                            <div css={style.card} className="card">
                                <div className="card-body">
                                    { this.props.todos.map(todo => (
                                        <div key={todo.id}>
                                            <div className="d-flex flex-wrap">
                                                <div style={{flex:1}} className="d-flex align-items-center">
                                                    <div className="col d-flex align-items-center">
                                                        <input css={style.checkBox} onChange={ () => this.handleDeleteSelected(todo.id)} type="checkbox" className="form-check-input m-0" id="exampleCheck1" />
                                                    </div>
                                                    <div onClick={this.props.completedTodo.bind(this, todo)} className="col d-flex align-items-center">
                                                    {todo.completed === false ? (
                                                        <span css={style.ceklis} className="material-icons invisible">
                                                            check
                                                        </span>
                                                    ) : (
                                                        <span css={style.ceklis} className="material-icons">
                                                            check
                                                        </span>
                                                    )}
                                                    </div>
                                                </div>

                                                <div style={{flex:10}}>
                                                    <div css={style.title} className="row mx-0" onClick={this.props.completedTodo.bind(this, todo)}>
                                                        {todo.completed === false ? (
                                                            <span css={style.divTitle}>{todo.title}</span>
                                                        ) : (
                                                            <strike css={style.divTitle}>{todo.title}</strike>
                                                        )}
                                                    </div>
                                                    <div className="row ml-1">
                                                        <div className="description">
                                                            {todo.completed === false ? 
                                                                this.isUrl(todo.description) ?
                                                                (<a href={todo.description} target="__blank" css={style.divDescription}>{todo.description}</a>)
                                                                    :
                                                                (<span css={style.divDescription}>{todo.description}</span>)

                                                            : (
                                                                <strike css={style.divDescription}>{todo.description}</strike>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                {todo.completed ? (
                                                    <div style={{flex:1}} className="d-flex align-items-center invisible">
                                                        <button css={style.buttonEdit} onClick={this.props.editTodo.bind(this, todo.id, todo.title, todo.description)} className="btn btn-sm d-flex justify-content-center align-items-center">
                                                            <span className="material-icons d-block">
                                                                create
                                                            </span>
                                                            <span className="d-none d-sm-block">
                                                                Edit
                                                            </span>
                                                        </button>
                                                    </div>
                                                ):(
                                                    <div style={{flex:1}} onClick={this.scrollToTop} className="d-flex align-items-center">
                                                        <button css={style.buttonEdit} onClick={this.props.editTodo.bind(this, todo.id, todo.title, todo.description)} className="btn btn-sm d-flex justify-content-center align-items-center">
                                                            <span className="material-icons d-block">
                                                                create
                                                            </span>
                                                            <span className="d-none d-sm-block">
                                                                Edit
                                                            </span>
                                                        </button>
                                                    </div>
                                                )}

                                                <div style={{flex:1}} className="d-flex align-items-center mx-2">
                                                    <button
                                                    css={style.buttonDelete}
                                                    onClick={ () => this.deleteTodo(todo.id, todo.title)}
                                                    className="btn btn-sm d-flex justify-content-center align-items-center">
                                                        <span className="material-icons d-block">
                                                            delete
                                                        </span>
                                                        <span className="d-none d-sm-block">
                                                            Delete
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <hr css={style.hr} />
                                        </div>
                                    ))}
                                </div>
                            </div>
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
    { getTodos, deleteTodo, completedTodo, editTodo, filterTodo }
    )(Todos);
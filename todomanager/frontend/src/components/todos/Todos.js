import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getTodos, deleteTodo, completedTodo } from '../../actions/todos';
import { editTodo } from '../../actions/todoform';
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

    render() {
        const style = {
            div: css`
                background: #1b1b1b;
                height: 73vh;
            `,
            button: css`
                color: white;
                background-color: #b3d146;
                border: 2px solid #b3d146;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;

                &:hover {
                    color: white;
                    background: transparent;
                }
            `,
            todos: css`
                margin-right: 2.5em;
                color: white;
                font-size: 1.5em;
                font-family: 'Roboto', sans-serif;
            `,
            hr: css`
                border-top: 2px solid white;
            `,
        }
        return (
            <Fragment>
                <div css={style.div} className="container">
                    <div className="container">
                        <div css={style.todos}> 
                            { this.props.todos.map(todo => (
                                <div css={style.taskwrapper} key={todo.id} className="d-flex flex-wrap">
                                    <div onClick={this.props.completedTodo.bind(this, todo)} style={{flex:12}}>
                                        {todo.completed === false ? (
                                            <span>{todo.title}</span>
                                        ) : (
                                            <strike>{todo.title}</strike>
                                        )}
                                        <hr css={style.hr} />
                                    </div>

                                    {!todo.completed && (
                                        <div style={{flex:1}}>
                                            <button onClick={this.props.editTodo.bind(this, todo.title, todo.id)} className="btn btn-sm btn-outline-info">Edit</button>
                                            <hr css={style.hr} />
                                        </div>
                                    )}

                                    <div style={{flex:1}}>
                                        <button onClick={this.props.deleteTodo.bind(this, todo.id)} className="btn btn-sm btn-danger delete">Delete</button>
                                        <hr css={style.hr} />
                                    </div>
                                </div>
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
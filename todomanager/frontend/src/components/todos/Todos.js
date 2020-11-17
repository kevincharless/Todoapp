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
        return (
            <Fragment>
                <div className="container">
                    <div id="list-wrapper"> 
                    { this.props.todos.map(todo => (
                            <div css={style.taskwrapper} key={todo.id} className="task-wrapper flex-wrapper">
                                <div onClick={this.props.completedTodo.bind(this, todo)} style={{flex:7}}>
                                    {todo.completed === false ? (
                                        <span>{todo.title}</span>
                                    ) : (
                                        <strike>{todo.title}</strike>
                                    )}
                                    
                                </div>

                                {!todo.completed && (
                                    <div style={{flex:1}}>
                                        <button onClick={this.props.editTodo.bind(this, todo.title, todo.id)} className="btn btn-sm btn-outline-info">Edit</button>
                                    </div>
                                )}

                                <div style={{flex:1}}>
                                    <button onClick={this.props.deleteTodo.bind(this, todo.id)} className="btn btn-sm btn-outline-danger delete">-</button>
                                </div>

                            </div>
                            ))}
                    </div>
                </div>
                


                {/* <h2>Todos</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed}</td>
                                <td>
                                    <button onClick={this.props.deleteTodo.bind(this, todo.id)} className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table> */}
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
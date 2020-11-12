import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getTodos, deleteTodo } from '../../actions/todos';

export class Todos extends Component {
    static propTypes = {
        todos: propTypes.array.isRequired,
        getTodos: propTypes.func.isRequired,
        deleteTodo: propTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        return (
            <Fragment>
                <h2>Todos</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.name}</td>
                                <td>{todo.email}</td>
                                <td>{todo.message}</td>
                                <td>
                                    <button onClick={this.props.deleteTodo.bind(this, todo.id)} className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos
}); 

export default connect(
    mapStateToProps, 
    { getTodos, deleteTodo }
    )(Todos);
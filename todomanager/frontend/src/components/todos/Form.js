import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo, updateTodo } from '../../actions/todos';
import { resetTodo } from '../../actions/todoform';

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

export class Form extends Component {
    constructor(props) {
        super(props);
        this.myInput = createRef()
    }

    state = {
        title: '',
        description: '',
        completed: false,
        formState: 'create',
    }
    

    componentDidUpdate = (prevprops, prevstate) => {
        if (prevstate.formState != this.props.todoform.formState) {
            this.setState({
                title: this.props.todoform.title,
                description: this.props.todoform.description,
                formState: this.props.todoform.formState
            })
        }
        else if (prevstate.formState === "edit" && prevstate.title !== this.props.todoform.title && prevstate.description !== this.props.todoform.description) {
            this.setState({
                title: this.props.todoform.title,
                description: this.props.todoform.description
            })
        }
    }

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    onChangeTitle = e => {
        this.props.todoform.title = e.target.value
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeDescription = e => {
        this.props.todoform.description = e.target.value
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const { title, description, completed } = this.state;
        const todo = { title, description, completed };

        if (this.props.todoform.formState === "create") {
            this.props.addTodo(todo);
            this.setState({
                title: "",
                description: "",
                completed: false,
            });
        }
        else if (this.props.todoform.formState === "edit") {
            this.props.updateTodo(this.props.todoform.id, title, description);
            this.props.resetTodo();
        }

        
    };

    render() {
        const style = {
            button: css`
                color: #fcf9f9;
                background-color: #b3d146;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;
                border-radius: 6px;

                &:hover {
                    color: #020205;
                    background: #b3d146;
                }
            `,
            buttonCancel: css`
                color: #fcf9f9;
                background-color: #cd0a0a;;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;
                border-radius: 6px;

                &:hover {
                    color: #020205;
                    background: #cd0a0a;
                }
            `,
            input: css`
                border-radius: 6px;
                padding: 15px;
            `,
            card: css`
                border-radius: 6px;
            `
        }

        const { title, description } = this.state
        return (
            <div className="container px-0 py-3">
                <div css={style.card} className="card">
                    <div className="card-body">
                        <form onSubmit={this.onSubmit} id="form">
                            <div className="mb-2">Title</div>
                            <div className="d-flex flex-wrap">
                                <div style={{flex: 12}}>
                                    <input
                                        css={style.input}
                                        onChange={this.onChangeTitle}
                                        className="form-control"
                                        id="title"
                                        ref={this.myInput}
                                        value={title}
                                        type="text"
                                        name="title"
                                        placeholder="Add Title..."
                                        />
                                </div>
                            </div>
                            
                            <div className="my-2">Description</div>
                            <div className="d-flex flex-wrap">
                                <div style={{flex: 12}}>
                                    <input
                                        css={style.input}
                                        onChange={this.onChangeDescription}
                                        className="form-control"
                                        id="description"
                                        ref={this.myInput}
                                        value={description}
                                        type="text"
                                        name="description"
                                        placeholder="Add Description..."
                                        />
                                </div>
                            </div>
                            <div>
                            <div style={{flex: 1}} className="text-right mt-3">
                                {this.props.todoform.formState === "edit" && (
                                    <button css={style.buttonCancel} onClick={this.props.resetTodo.bind(this)} className="btn px-4" type="button" name="Cancel">
                                        Cancel Edit
                                    </button>
                                        
                                    )}

                                    <button css={style.button} className="btn px-5 ml-2" type="submit" name="Add">
                                        Submit
                                    </button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>    
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todoform: state.todoform
}); 


export default connect(mapStateToProps, { addTodo, resetTodo, updateTodo })(Form);

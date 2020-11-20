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
        completed: false,
        formState: 'create',
    }

    componentDidMount = () => {
        console.log(this.props)
    }

    componentDidUpdate = (prevprops, prevstate) => {
        if (prevstate.formState != this.props.todoform.formState) {
            this.setState({
                title: this.props.todoform.title,
                formState: this.props.todoform.formState
            })
        }
        else if (prevstate.formState === "edit" && prevstate.title !== this.props.todoform.title) {
            this.setState({
                title: this.props.todoform.title
            })
        }
    }

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    onChange = e => {
        this.props.todoform.title = e.target.value
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const { title, completed } = this.state;
        const todo = { title, completed };

        if (this.props.todoform.formState === "create") {
            this.props.addTodo(todo);
            this.setState({
                title: "",
                completed: false,
            });
        }
        else if (this.props.todoform.formState === "edit") {
            this.props.updateTodo(this.props.todoform.id, title);
            this.props.resetTodo();
        }

        
    };

    render() {
        const style = {
            div: css`
                padding-top: 6em;
                padding-bottom: 1em;
            `,
            button: css`
                color: white;
                background-color: #b3d146;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;

                &:hover {
                    color: #b3d146;
                    background: white;
                }
            `,
            divCancel: css`
                flex: auto 0 auto;
            `,
            buttonCancel: css`
                display:
                color: white;
                background-color: #ff0039;;
                font-size: 1em;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;

                &:hover {
                    color: white;
                    background: transparent;
                }
            `,
        }

        const { title } = this.state
        return (
            <div css={style.div} className="container">
                <div className="pt-4">
                    <div className="pt-4">
                        <form onSubmit={this.onSubmit} id="form">
                            <div className="d-flex flex-wrap">
                                <div style={{flex: 12}}>
                                    <input
                                        onChange={this.onChange}
                                        className="form-control"
                                        id="title"
                                        ref={this.myInput}
                                        value={title}
                                        type="text"
                                        name="title"
                                        placeholder="Add task..."
                                        />
                                </div>
                                {this.props.todoform.formState === "edit" && (
                                    <div css={style.divCancel} >
                                        <button css={style.buttonCancel} onClick={this.props.resetTodo.bind(this)} className="btn btn-danger" type="button" name="Cancel">Cancel Edit</button>
                                    </div>
                                )}

                                <div style={{flex: 2}}>
                                    <button css={style.button} className="btn px-4" type="submit" name="Add">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    
                </div>
                
                </div>






            // <div className="card card-body mt-4 mb-4">
            //     <h2>Add Todo</h2>
            //     <form onSubmit={this.onSubmit}>
            //         <div className="form-group">
            //             <label>title</label>
            //             <input 
            //                 className="form-control"
            //                 type="text"
            //                 name="title"
            //                 onChange={this.onChange}
            //                 value={title}
            //             />
            //         </div>
            //         <div className="bootstrap-switch-square">
            //             <label>Completed</label>
            //             <input 
            //                 type="checkbox"
            //                 data-toggle="switch"
            //                 name="Resend"
            //                 id="Resend"
            //                 onChange={this.onChange}
            //                 value={completed}
            //                 />
            //         </div>
                
            //         <div className="form-group">
            //             <button type="submit" className="btn btn-primary">
            //                 Submit
            //             </button>
            //         </div>
            //     </form>
            // </div>
        )
    }
}

const mapStateToProps = state => ({
    todoform: state.todoform
}); 


export default connect(mapStateToProps, { addTodo, resetTodo, updateTodo })(Form);

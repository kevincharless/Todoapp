import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo, updateTodo } from '../../actions/todos';
import { resetTodo } from '../../actions/todoform';

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
        const { title } = this.state
        return (
            <div className="container">
                <br /><br /><br />
                <div id="task-container">
                    <div  id="form-wrapper">
                        <form onSubmit={this.onSubmit} id="form">
                            <div className="flex-wrapper">
                                <div style={{flex: 6}}>
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
                                    <div style={{flex: 1}}>
                                        <button onClick={this.props.resetTodo.bind(this)} className="btn btn-danger" type="button" name="Cancel">Cancel Edit</button>
                                    </div>
                                )}

                                <div style={{flex: 1}}>
                                    <button id="submit" className="btn" type="submit" name="Add">Submit</button>
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

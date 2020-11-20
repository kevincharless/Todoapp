import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';
import EndContent from '../ReactComponents/Footer'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        if(password !== password2) {
            this.props.createMessage({ passwordNotMatch: 'Password do not match' });
        }
        else {
            const newUser = {
                username,
                password,
                email
            };
            this.props.register(newUser);
        }
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const style = {
            div: css`
                background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('../../static/frontend/images/register.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                height: 92.1vh;
            `,
            heading: css`
                color: #b3d146;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;
                font-size: 3em;
                line-height: 1em;
                text-transform: uppercase;
            `,
            text: css`
                color: white;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;
                font-size: 1.5em;
                line-height: 1em;
                text-transform: uppercase;
            `,
            input: css`
                background: transparent;
                color: white;
                font-family: 'Roboto', sans-serif;
                border: 2px solid #b3d146;
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
            alreadyHave: css`
                color: white;
                font-family: 'Roboto', sans-serif;
                font-size: 1.2em;
                line-height: 1em;
            `,
            alreadyHaveButton: css`
                color:  #b3d146;
                font-family: 'Roboto', sans-serif;
                font-size: 1.2em;
                line-height: 1em;

                &:hover {
                    color: white;
                    text-decoration: none;
                }
            `,
        }


        if(this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, email, password, password2 } = this.state;
        return (
            <>
            <div css={style.div} className="py-4">
                <div className="col-md-6 m-auto">
                    <div className="card card-body mt-4 bg-transparent border-0">
                        <h2 css={style.heading} className="text-center my-4">Register</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label css={style.text}>Username</label>
                                <input
                                    css={style.input}
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    onChange={this.onChange}
                                    value={username}
                                />
                            </div>
                            <div className="form-group">
                                <label css={style.text}>Email</label>
                                <input
                                    css={style.input}
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={this.onChange}
                                    value={email}
                                />
                            </div>
                            <div className="form-group">
                                <label css={style.text}>Password</label>
                                <input
                                    css={style.input}
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    onChange={this.onChange}
                                    value={password}
                                />
                            </div>
                            <div className="form-group">
                                <label css={style.text}>Confirm Password</label>
                                <input
                                    css={style.input}
                                    type="password"
                                    className="form-control"
                                    name="password2"
                                    onChange={this.onChange}
                                    value={password2}
                                />
                            </div>
                            <div className="form-group">
                                <p css={style.alreadyHave}>
                                    <button css={style.button} type="submit" className="btn mr-4">
                                        Register
                                    </button>

                                    *Already have an account? <Link to="/login" css={style.alreadyHaveButton}>Login</Link>
                                </p>
                            </div>
                                
                        </form>
                    </div>
                </div>
                
            </div>
            <EndContent />
            </>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, createMessage })(Register);
import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

import Header from '../layout/Header';

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
            col: css`
                color: #fcf9f9;
                font-family: 'Roboto', sans-serif;
                z-index: 3;
            `,
            form: css`
                font-family: 'Roboto', sans-serif;
            `,
            colAnimation: css`
                left: 0;
                min-width: 100%;
                min-height: 100%;
                font-family: 'Roboto', sans-serif;
                background-color: #b3d146;
                position: absolute;
                z-index: 2;
                
                // animation: toLeft 1.0s forwards;
                // animation-timing-function: linear;

                // @keyframes toLeft {
                //     from  {right:0vw; transform: scaleX(1.5); z-index: 1;}
                //     to {right:1vw; transform: scaleX(1); z-index: 1;}
                // }
            `,
            colButton: css`
                left: 0;
                min-width: 100%;
                min-height: 100%;
                font-family: 'Roboto', sans-serif;
                background-color: invinsible;
                position: absolute;
                z-index: 4;
            `,
            buttonAnimation: css`
                font-family: 'Roboto', sans-serif;
                z-index: 4;
                
                animation: toRightButton 1.0s forwards;
                animation-timing-function: linear;

                @keyframes toRightButton {
                    from { transform: scaleX(1.5); opacity: 0;}
                    to {ransform: scaleX(1); opacity: 1; }
                }

                &:hover {
                    color: #b3d146;
                    background-color: #fcf9f9;
                }
            `,
            button: css`
                background-color: #b3d146;
                color: #fcf9f9;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;
                font-size: 1.2em;

                &:hover {
                    color: #b3d146;
                    background-color: #fcf9f9;
                    border: 2px solid #b3d146
                }
            `,
            text: css`
                font-family: 'Roboto', sans-serif;
            `,
            heading: css`
                color: #1b1b1b;
                font-family: 'Roboto', sans-serif;
            `,
            paragraft: css`
                color: #fcf9f9;
            `,
        }

        if(this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, email, password, password2 } = this.state;
        return (
            <>
            <Header logoGreen noButton />
            <div className="container-fluid" style={{height: "100vh"}}>
                <div className="row" style={{minHeight: "100%"}}>
                    <div className="col-xs-12 col-md-8 d-flex align-items-center justify-content-center p-5">
                        <form onSubmit={this.onSubmit} css={style.form} className="col-lg-8 d-flex">
                            <div className="container text-center w-100">
                                <h1 css={style.heading} className="font-weight-bold my-4">
                                    Sign up
                                </h1>
                                <div className="input-group flex-nowrap bg-light rounded-pill my-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-transparent border-0 material-icons" id="addon-wrapping">person</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control bg-transparent border-0"
                                        placeholder="Username" aria-label="Username"
                                        aria-describedby="addon-wrapping"
                                        name="username"
                                        onChange={this.onChange}
                                        value={username}
                                    />
                                </div>

                                <div className="input-group flex-nowrap bg-light rounded-pill my-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-transparent border-0 material-icons" id="addon-wrapping">email</span>
                                    </div>
                                    <input
                                        type="email"
                                        className="form-control bg-transparent border-0"
                                        placeholder="Email"
                                        aria-label="Email"
                                        aria-describedby="emailHelp"
                                        name="email"
                                        onChange={this.onChange}
                                        value={email}
                                    />
                                </div>

                                <div className="input-group flex-nowrap bg-light rounded-pill my-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-transparent border-0 material-icons" id="addon-wrapping">lock</span>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control bg-transparent border-0" 
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="addon-wrapping"
                                        name="password"
                                        onChange={this.onChange}
                                        value={password}
                                    />
                                </div>

                                <div className="input-group flex-nowrap bg-light rounded-pill my-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-transparent border-0 material-icons" id="addon-wrapping">lock</span>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control bg-transparent border-0"
                                        placeholder="Confirm Password"
                                        aria-label="Confirm Password"
                                        aria-describedby="addon-wrapping"
                                        name="password2"
                                        onChange={this.onChange}
                                        value={password2}
                                    />
                                </div>

                                <button css={style.button} type="submit" className="btn rounded-pill px-5">Sign up</button>
                            </div>
                        </form>
                    </div>



                    <div className="col-xs-6 col-md-4 d-flex align-items-center p-5">
                        <div css={style.colAnimation} className="d-flex align-items-center animate__animated animate__bounceInLeft">
                        </div>

                        <div css={style.colButton} className="d-flex align-items-center animate__animated animate__bounceInLeft">
                            <div className="container text-center w-100">
                                <h1 css={style.text} className="font-weight-bold pt-5 invisible">
                                    Hello, Friend!
                                </h1>
                                <p className="invisible">
                                    Enter your personal details and start journey with us
                                </p>
                                <Link to="/login">
                                    <button
                                        css={style.buttonAnimation}
                                        type="button"
                                        className="btn btn-outline-light rounded-pill px-5 font-weight-bold">
                                            Sign in
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div css={style.col} className="container text-center w-100">
                            <h1 css={style.text} className=" font-weight-bold">
                                Welcome Back!
                            </h1>
                            <p css={style.paragraft}>
                                To keep connected with us, please login with your personal info
                            </p>
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-pill px-5 font-weight-bold invisible">
                                    Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, createMessage })(Register);
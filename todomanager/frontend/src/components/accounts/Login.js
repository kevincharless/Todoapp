import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import EndContent from '../ReactComponents/Footer'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

export class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const style = {
            div: css`
                background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('../../static/frontend/images/login.jpg');
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
            dontHave: css`
                color: white;
                font-family: 'Roboto', sans-serif;
                font-size: 1.2em;
                line-height: 1em;
            `,
            dontHaveButton: css`
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
        const { username, password } = this.state;
        return (
            <>
            <div css={style.div} className="py-4">
                <div className="col-md-6 m-auto">
                    <div className="card card-body mt-4 bg-transparent border-0">
                        <h2 css={style.heading} className="text-center my-4">Login</h2>
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
                                <p css={style.dontHave}>
                                    <button css={style.button} type="submit" className="btn mr-4">
                                        Login
                                    </button>

                                    Don't have an account? <Link to="/register" css={style.dontHaveButton}>Register</Link>

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

export default connect(mapStateToProps, { login })(Login);
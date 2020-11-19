import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  { logout } from '../../actions/auth';
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

export class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
    }

    static propTypes ={
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    };

    handleLogout = () => {
        this.props.logout();
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
        const isTop = window.scrollY < 100;
        if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
        }
    });
    }

    onScroll(isTop) {
    this.setState({ isTop });
    }
    
    render() {
        const style = {
            logo: css`
                color: white;
                font-family: 'Roboto', sans-serif;
                font-size: 2em;
                font-weight: bold;
            `,
            nav: css`
                font-family: 'Roboto', sans-serif;
                font-size: 1em;
            `,
            navactive: css`
                background-color: #1b1b1b;
                font-family: 'Roboto', sans-serif;
                font-size: 1em;
            `,
            btnRegister: css`
                color: white;
                font-family: 'Roboto', sans-serif;
                font-size: 1em;
                font-weight: bold;
                padding: 6px 16px;

                &:hover {
                    color: #b3d146;
                    background: #1b1b1b;
                }
            `,
            btnLogin: css`
                background: #b3d146;
                color: white;
                font-family: 'Roboto', sans-serif;
                font-size: 1em;
                font-weight: bold;
                padding: 6px 16px;

                &:hover {
                    color: white;
                    background: #1b1b1b;
                }
            `
        }

        const { isAuthenticated, user } = this.props.auth;
        
        const authLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <span className="navbar-text mr-3">
                    <strong>
                        { user ? `Welcome ${user.username}` : "" }
                    </strong>
                </span>
                <li className="nav-item">
                    <button onClick={this.handleLogout} className="nav-link btn btn-info btn-sm text-light">
                        Logout
                    </button>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item d-flex justify-content-center px-2">
                    <Link to="/register">
                        <button css={style.btnRegister} className="btn">Register</button>
                    </Link>
                </li>
                <li className="nav-item d-flex justify-content-center">
                    <Link  to="/login">
                        <button css={style.btnLogin} className="btn">Login</button>
                    </Link>
                </li>
            </ul>
        );

        return (
            <nav css={this.state.isTop ? style.nav : style.navactive } className={this.state.isTop ? 'navbar navbar-expand-sm navbar-dark fixed-top navbar-transparent' : 'navbar navbar-expand-sm navbar-dark fixed-top'}>
                <div className="container">
                    <button className="btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <Link  to="/">
                            <a css={style.logo} className="navbar-brand" href="/">TODOAPP</a>
                        </Link>
                    </div>
                    { isAuthenticated ? authLinks : guestLinks }
                </div>  
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header);
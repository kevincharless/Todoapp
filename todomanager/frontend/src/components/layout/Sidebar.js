
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  { logout } from '../../actions/auth';

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import '../ReactComponents/Sidebar/index.css';

export class Sidebar extends Component {

    constructor(props) {
        super(props);
    }


    static propTypes ={
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    };

    handleLogout = () => {
        this.props.logout();
    }

    activeSidebar() {
        this.state.sidebar ? this.setState({sidebar: false}) : this.setState({sidebar: true})
    } 

    render() {
        const style = {
            logo: css`
                color: #fcf9f9;
                font-family: 'Roboto', sans-serif;
                font-size: 2em;
                font-weight: bold;

                &:hover {
                    color: #020205;
                }
            `,
            logoGreen: css`
                color: #b3d146;
                font-family: 'Roboto', sans-serif;
                font-size: 2em;
                font-weight: bold;

                &:hover {
                    color: #020205;
                }
            `,
            logoLanding: css`
                color: #fcf9f9;
                font-family: 'Roboto', sans-serif;
                font-size: 2em;
                font-weight: bold;

                &:hover {
                    color: #b3d146;
                }
            `,
            nav: css`
                color: #fcf9f9;
                font-family: 'Roboto', sans-serif;
                font-size: 1em;
            `,
            navactive: css`
                background-color: #020205;
                font-family: 'Roboto', sans-serif;
                font-size: 1em;
            `,
            btnRegister: css`
                color: #fcf9f9;
                font-family: 'Roboto', sans-serif;
                font-size: 1em;
                font-weight: bold;
                padding: 6px 16px;

                &:hover {
                    color: #b3d146;
                    background: #020205;
                }
            `,
            btnLogin: css`
                background: #b3d146;
                color: #fcf9f9;
                font-family: 'Roboto', sans-serif;
                font-size: 1em;
                font-weight: bold;
                padding: 6px 16px;

                &:hover {
                    color: #fcf9f9;
                    background: #020205;
                }
            `,
            btnLogout: css`
                color: #fcf9f9;
                font-family: 'Roboto', sans-serif;
                font-size: 1em;
                font-weight: bold;

                &:hover {
                    color: #fcf9f9;
                    background: transparent;
                }
            `,
            linkHover: css`
                :hover{
                    text-decoration: none;
                }
            `,
        }
        
        const { isAuthenticated, user } = this.props.auth;
        
        const authLinks = (
            <nav id="sidebar" className={`d-flex justify-content-center ${this.props.activeSidebar ? "active" : ""}`}>
                <div className="position-fixed">
                    <div className="sidebar-header">
                        <h3>Todoapp</h3>
                    </div>
                    <div className="card rounded-lg">
                        <div className="card-body p-0">
                        <ul className="list-unstyled components rounded-lg p-2 my-0">
                            <Link css={style.linkHover} to="/">
                                <li className={`pb-1 ${this.props.currentPath === "/" ? "active" : "" }`}>
                                    <button href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="btn btn-block rounded-lg d-flex align-items-center mr-1">
                                        <span className="material-icons mr-1 ">
                                            dashboard
                                        </span>
                                        Dashboard
                                    </button>
                                </li>
                            </Link>
                            <Link css={style.linkHover} to="/landingpage">
                                <li className={`pb-1 ${this.props.currentPath === "/landingpage" ? "active" : "" }`}>
                                    <button className="btn btn-block rounded-lg d-flex align-items-center mr-1">
                                        <span className="material-icons mr-1">
                                            home
                                        </span>
                                        Site Home
                                    </button>
                                </li>
                            </Link>
                            <Link css={style.linkHover} to="/about">
                                <li className={`pb-1 ${this.props.currentPath === "/about" ? "active" : "" }`}>
                                    <button className="btn btn-block rounded-lg d-flex align-items-center mr-1">
                                        <span className="material-icons mr-1">
                                            people_alt
                                        </span>
                                        About Us
                                    </button>
                                </li>
                            </Link>
                            <Link css={style.linkHover} to="/faq">
                                <li className={`pb-1 ${this.props.currentPath === "/faq" ? "active" : "" }`}>
                                    <button className="btn btn-block rounded-lg d-flex align-items-center mr-1">
                                        <span className="material-icons mr-1">
                                            help
                                        </span>
                                        FAQ
                                    </button>
                                </li>
                            </Link>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    
        const guestLinks = (
            ""
        );

        return (
            <div className="wrapper">
                {isAuthenticated ? authLinks : guestLinks}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Sidebar);
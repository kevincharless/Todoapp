import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  { logout } from '../../actions/auth';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

export class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        isTop: true,
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

    submit = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                const style = {
                    textBlack: css`
                        color: #020205;
                    `,
                    buttonNo: css`
                        background-color: #fcf9f9;
                        color: #020205;

                        &:hover{
                            border: 1px solid #020205;
                            background-color: transparent;
                            color: #020205;
                        }
                    `,
                    buttonLogout: css`
                        background-color: #cd0a0a;
                        color: #fcf9f9;

                        &:hover{
                            border: 1px solid #cd0a0a;
                            background-color: transparent;
                            color: #cd0a0a;
                        }
                    `,
                }

                return (
                    <div className='custom-ui'>
                        <div className="card rounded-lg p-5 d-flex justify-content-center text-center">
                            <div className="d-flex justify-content-center">
                                <FontAwesomeIcon icon={faExclamationTriangle} style={{fontSize: "6em", color: "#cd0a0a"}} />
                            </div>
                            <h1 css={style.textBlack} className="font-weight-bold pt-3">Are you sure?</h1>
                            <p css={style.textBlack} className="p-2">You want to logout from this app?</p>
                            <div className="row">
                                <button css={style.buttonNo} onClick={onClose} className="col btn rounded-lg mr-2 font-weight-bold">No</button>
                                <button
                                    onClick={() => {
                                        this.handleLogout();
                                        onClose();
                                    }}
                                    className="col btn rounded-lg font-weight-bold"
                                    css={style.buttonLogout}
                                >
                                Yes, Logout!
                                </button>
                            </div>
                        </div>
                    </div>
                    );
                }
            });
        };


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
            btnPositionActive: css`
                position: relative;
                padding-left: 8vw;
            `,
            btnPositionDeactive: css`
                position: relative;
                padding-left: 0vw;
            `,
            logo: css`
                color: #fcf9f9;
                font-family: 'Roboto', sans-serif;
                font-size: 1.6em;
                font-weight: bold;

                &:hover {
                    color: #020205;
                }
            `,
            logoGreen: css`
                color: #b3d146;
                font-family: 'Roboto', sans-serif;
                font-size: 1.6em;
                font-weight: bold;

                &:hover {
                    color: #020205;
                }
            `,
            logoLanding: css`
                color: #fcf9f9;
                font-family: 'Roboto', sans-serif;
                font-size: 1.6em;
                font-weight: bold;

                &:hover {
                    color: #b3d146;
                }
            `,
            nav: css`
                color: #b3d146;
                font-family: 'Roboto', sans-serif;
                font-size: 1em;
                font-weight: bold;
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
                border-radius: 6px;

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
                border-radius: 6px;

                &:hover {
                    color: #fcf9f9;
                    background: #020205;
                }
            `,
            btnLogout: css`
                background-color: #cd0a0a;
                color: #fcf9f9;
                font-family: 'Roboto', sans-serif;
                font-size: 1em;
                font-weight: bold;
                border-radius: 6px;

                &:hover {
                    color: #cd0a0a;
                    background: transparent;
                    border: 2px solid #cd0a0a;
                }
            `,
            buttonSidebar: css`
                background-color: #b3d146;

                &:hover {
                    color: #fcf9f9;
                    
                }
            `,
        }

        const { isAuthenticated, user } = this.props.auth;
        
        const authLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <span className="navbar-text mr-3">
                    <strong css={style.nav}>
                        { user ? `Welcome ${user.username}` : "" }
                    </strong>
                </span>
                <li className="nav-item">
                    <button css={style.btnLogout} onClick={this.submit} className="nav-link btn btn-sm">
                        Logout
                    </button>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
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

        const handleChange = (e) => this.props.handleActiveSidebar(e.target.value);
        
        {this.props.isAuth ?
            this.props.isAuth(isAuthenticated)
            :
            ""
        }
        

        return (
            <nav css={this.state.isTop ? style.nav : style.navactive } className={this.state.isTop ? 'navbar navbar-expand navbar-toggleable-xl navbar-inverse fixed-top navbar-transparent' : 'navbar navbar-expand navbar-toggleable-xl navbar-inverse fixed-top'}>
                { isAuthenticated ? 
                            <button css={style.buttonSidebar} onClick={handleChange} type="button" id="sidebarCollapse" className="btn rounded-circle d-flex align-items-center py-2">
                                <span className="material-icons">
                                    menu
                                </span>
                            </button>
                            :
                            ""
                        }
                <>
                    <Link to="/" className={this.props.noLogo ? "d-none" : "d-block ml-4"} >
                        {this.props.headerLanding ?
                            <p css={style.logoLanding} className="navbar-brand p-0 m-0" href="/">TODOAPP</p>
                            :
                            <p css={this.props.logoGreen ? style.logoGreen : style.logo} className="navbar-brand p-0 m-0" href="/">TODOAPP</p>
                        }
                    </Link>
                    
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        
                        
                        {this.props.noButton ? '' :  isAuthenticated ? authLinks : guestLinks  }
                    </div>
                    
                </>  
            </nav>
        )
    }
    
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header);
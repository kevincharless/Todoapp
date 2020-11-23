import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  { logout } from '../../actions/auth';

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import '../ReactComponents/Sidebar/index.css';
import Header from './Header';
import Form from '../todos/Form';
import Todos from '../todos/Todos';

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
                            <Link to="/">
                                <li className={`pb-1 ${this.props.currentPath === "/" ? "active" : "" }`}>
                                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="rounded-lg">Dashboard</a>
                                </li>
                            </Link>
                            <Link to="/landingpage">
                                <li className={this.props.currentPath === "/landingpage" ? "active" : "" }>
                                    <a href="#" className="rounded-lg pb-1">Site Home</a>
                                </li>
                            </Link>
                            
                            <li>
                                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="rounded-lg pb-1">Pages</a>
                            </li>
                            <li>
                                <a href="#" className="rounded-lg pb-1">Portfolio</a>
                            </li>
                            <li>
                                <a href="#" className="rounded-lg">Contact</a>
                            </li>
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
            // <nav css={this.state.isTop ? style.nav : style.navactive } className={this.state.isTop ? 'navbar navbar-expand navbar-toggleable-xl navbar-inverse fixed-top navbar-transparent' : 'navbar navbar-expand navbar-toggleable-xl navbar-inverse fixed-top'}>
            //     <div className="container">
            //         <Link  to="/">
            //             {this.props.headerLanding ?
            //                 <a css={style.logoLanding} className="navbar-brand" href="/">TODOAPP</a> 
            //                 :
            //                 <a css={this.props.logoGreen ? style.logoGreen : style.logo} className="navbar-brand" href="/">TODOAPP</a>
            //             }
            //         </Link>
                    
            //         <div className="collapse navbar-collapse" id="navbarCollapse">
                        
            //             {this.props.noButton ? '' :  isAuthenticated ? authLinks : guestLinks  }
            //         </div>
                    
            //     </div>  
            // </nav>

            <div className="wrapper">
                {isAuthenticated ? authLinks : guestLinks}
                

                {/* <div id="content">
                    
                        <div className="container-fluid">
                            <div className="row">
                                <button onClick={this.activeSidebar.bind(this)} type="button" id="sidebarCollapse" className="btn btn-info rounded-circle">
                                    <span className="material-icons">
                                        menu
                                    </span>
                                </button>
                            </div>
                            <div className="row">
                                <Form />
                                
                            </div>
                            <div className="row">
                            <Todos />
                            </div>
                            
                            
                        </div>
                    
                </div> */}

            </div>
        )
    }
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Sidebar);
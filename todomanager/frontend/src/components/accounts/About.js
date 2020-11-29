import React, { Component } from 'react';
import BackToTop from "react-back-to-top-button";

import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../ReactComponents/Footer'

import HeroAbout from '../ReactComponents/Heroabout';
import Profileabout from '../ReactComponents/Profileabout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default class About extends Component {
    state = {
        activeSidebar: false,
    };

    handleActiveSidebar = (activeSidebar) => this.state.activeSidebar ? this.setState({activeSidebar: false}) : this.setState({activeSidebar: true})

    render() {
        return (
            <>
            <BackToTop
                showOnScrollUp={false}
                showAt={100}
                speed={1500}
                easing="easeInOutQuint"
                style={{zIndex: "999", borderRadius: "50%", cursor: "default"}}
            >
                <button className="btn btn-transparent p-0 m-0 rounded-circle" style={{borderRadius: "50%", cursor: "default"}}>
                    <FontAwesomeIcon icon={faAngleUp} style={{width: "1.5em",  height: "1.5em",fontSize: "2em", color: "#b3d146", backgroundColor: "#020205", borderRadius: "50%", cursor: "pointer"}} />
                </button>
            </BackToTop>
            <Header headerLanding handleActiveSidebar={this.handleActiveSidebar} activeSidebar={this.state.activeSidebar} />
            <Sidebar activeSidebar={this.state.activeSidebar} currentPath="/about" />
            <div className="container-fluid p-0 m-0">
                <HeroAbout />
                <div className="row p-0 p-3 m-0 text-center d-flex justify-content-center">
                    <h2 className="font-weight-bold">Our Members :</h2>
                </div>
                <div className="row p-0 py-2 m-0">
                    <div className="col p-4 m-0 animate__animated animate__zoomIn" style={{animationDelay: "0.3s"}}>
                        <Profileabout
                            img="../../../static/frontend/images/kevincharles.jpg"
                            heading="Kevin Charles "
                            paragraph="
                            Leader & Programmer
                            "
                        />
                    </div>
                    <div className="col py-4 px-0 m-0 animate__animated animate__zoomIn" style={{animationDelay: "0.9s"}}>
                        <Profileabout
                            img="../../../static/frontend/images/kelvin.jpg"
                            heading="Kelvin "
                            paragraph="
                            Idea Giver
                            "
                        />
                    </div>
                    <div className="col p-4 m-0 animate__animated animate__zoomIn" style={{animationDelay: "1.4s"}}>
                        <Profileabout
                            img="../../../static/frontend/images/justinchua.png"
                            heading="Justin Chua "
                            paragraph="
                            Presentation Material Maker
                            "
                        />
                    </div>
                    <div className="col py-4 px-0 m-0 animate__animated animate__zoomIn" style={{animationDelay: "1.8s"}}>
                        <Profileabout
                            img="../../../static/frontend/images/kevinalexander.jpg"
                            heading="Kevin Alexander "
                            paragraph="
                            Designer
                            "
                        />
                    </div>
                    <div className="col py-4 pl-4 px-0 m-0 animate__animated animate__zoomIn" style={{animationDelay: "2.1s"}}>
                        <Profileabout
                            img="../../../static/frontend/images/jensentanedy.png"
                            heading="Jensen Tanedy "
                            paragraph="
                            Editor
                            "
                        />
                    </div>
                    <div className="col p-4 m-0 animate__animated animate__zoomIn" style={{animationDelay: "2.4s"}}>
                        <Profileabout
                            img="../../../static/frontend/images/stevenirfando.jpg"
                            heading="Steven Irfando "
                            paragraph="
                            Designer
                            "
                        />
                    </div>
                </div>
                <Footer />
            </div>
            

            </>
        )
    }
}

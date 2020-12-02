import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BackToTop from "react-back-to-top-button";

import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Hero from '../ReactComponents/Hero';
import Content from '../ReactComponents/Content';
import Content2 from '../ReactComponents/Content2';
import Section from '../ReactComponents/Section';
import Carousel from '../ReactComponents/Carousel';
import Endcontent from '../ReactComponents/Endcontent';
import Endcontentauth from '../ReactComponents/Endcontentauth'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default class LandingPage extends Component {
    state = {
        activeSidebar: false,
        isAuthenticated: false
    };

    handleActiveSidebar = (activeSidebar) => this.state.activeSidebar ? this.setState({activeSidebar: false}) : this.setState({activeSidebar: true})

    isAuth = (isAuthenticated) => this.setState({isAuthenticated: !isAuthenticated})

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
                <div className="btn btn-transparent p-0 m-0 rounded-circle" style={{borderRadius: "50%", cursor: "default"}}>
                    <FontAwesomeIcon icon={faAngleUp} style={{width: "1.5em",  height: "1.5em",fontSize: "2em", color: "#b3d146", backgroundColor: "#020205", borderRadius: "50%", cursor: "pointer"}} />
                </div>
            </BackToTop>
            <Header headerLanding logoGreen handleActiveSidebar={this.handleActiveSidebar} activeSidebar={this.state.activeSidebar} isAuth={this.isAuth} />
            <Sidebar activeSidebar={this.state.activeSidebar} currentPath="/landingpage" />
            <div className="container-fluid p-0 m-0">
                <Hero />
                <Content
                    heading="Make Your Schedule Ordered"
                    content="Whenever you are busy, you will not be confused because you have made a regular schedule. Todoapp helps you to organize your daily activity. 
                    " 
                    image="../static/frontend/images/content1_1.svg"
                />
                <Content
                    heading="Start Planning and Do it Right Now"
                    content="Todoapp helps you to be more productive all the time. Let's design your plan and achieve your dreams now"
                    image="../static/frontend/images/content1_2.svg"
                    imageStart
                    bgGreen
                />
                <Content
                    heading="Your Privacy is our Top Priority"
                    content="All your tasks are always safe and no one have an access to see or making a change on it" 
                    image="../static/frontend/images/content1_3.svg"
                />
                <Section 
                    heading="See how it works"
                    content="Go from idea to action in seconds with Todoapp’s. The app where has a great and simple design."
                />
                <Carousel />
                <Section 
                    bgGreen
                    heading="Todoapp your way"
                    content="Use Todoapp the way your team works best. We’ve got the flexibility & features to fit any team’s style."
                />
                <div style={{backgroundColor: "#89a617"}}>
                    <div className="container">
                        <div className="row">
                            <Content2
                                img="../../../static/frontend/images/content2_1.svg"
                                heading="Simple and Minimalism Design"
                                paragraph="
                                    Great design make user easy to use the application and can enjoy when using it.
                                "
                                button="Start Using"
                            />
                            <Content2
                                img="../../../static/frontend/images/content2_2.svg"
                                heading="A Productivity Platform"
                                paragraph="
                                    Application to keep you productive all the time.
                                "
                                button="Let's be Productive"
                            />
                            <Content2
                                img="../../../static/frontend/images/content2_3.svg"
                                heading="Always In Sync"
                                paragraph="
                                    No matter where you are, Todoapp stays in sync across all of your devices. See your Tasks, from sitting on the bus to sitting on the beach.
                                "
                                button="Stay in Sync Now"
                            />
                        </div>
                    </div>
                </div>
                {this.state.isAuthenticated ? 
                    <Endcontent />                       
                    :
                    <Endcontentauth /> 
                }
            </div>
            

            </>
        )
    }
}

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Hero from '../ReactComponents/Hero'
import Content from '../ReactComponents/Content'
import Content2 from '../ReactComponents/Content2'
import Section from '../ReactComponents/Section'
import Carousel from '../ReactComponents/Carousel'
import Endcontent from '../ReactComponents/Endcontent'

export default class LandingPage extends Component {
    render() {
        return (
            <>
            <Hero />
            <Content
                heading="First featurette heading. It’ll blow your mind."
                content="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo." 
                image="../static/frontend/images/content1.png"
            />
            <Content
                heading="First featurette heading. It’ll blow your mind."
                content="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo." 
                image="../static/frontend/images/content1.png"
                imageStart
                bgGreen
            />
            <Content
                heading="First featurette heading. It’ll blow your mind."
                content="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo." 
                image="../static/frontend/images/content1.png"
            />
            <Section 
                heading="See how it works"
                content="Go from idea to action in seconds with Todoapp’s intuitively simple boards, lists, and cards."
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
                            img="../../../static/frontend/images/content2-1.jpg"
                            heading="The Team Playbook"
                            paragraph="
                                It’s easy to get your team up and running with Todoapp. We’ve collected all of the boards and tools your team needs to succeed in one handy resource.
                            "
                            button="Make A Plan"
                        />
                        <Content2
                            img="../../../static/frontend/images/content2-2.jpg"
                            heading="A Productivity Platform"
                            paragraph="
                                Integrate the apps your team already uses directly into your workflow. Power-Ups turn Todoapp boards into living applications to meet your team's unique business needs.
                            "
                            button="Power-Up Your Workflow"
                        />
                        <Content2
                            img="../../../static/frontend/images/content2-3.jpg"
                            heading="Always In Sync"
                            paragraph="
                                No matter where you are, Todoapp stays in sync across all of your devices. Collaborate with your team anywhere, from sitting on the bus to sitting on the beach.
                            "
                            button="Start doing"
                        />
                    </div>
                </div>
            </div>
            <Endcontent />
            </>
        )
    }
}

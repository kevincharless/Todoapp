import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Hero from '../ReactComponents/Hero'
import Content from '../ReactComponents/Content'
import Content2 from '../ReactComponents/Content2'
import Section from '../ReactComponents/Section'
import Carousel from '../ReactComponents/Carousel'

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
                heading="Todoapp your way"
                content="Use Todoapp the way your team works best. We’ve got the flexibility & features to fit any team’s style."
            />
            <Content2 />
            </>
        )
    }
}

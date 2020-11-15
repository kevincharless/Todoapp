import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Hero from '../ReactComponents/Hero'
import Content from '../ReactComponents/Content'

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
            />
            </>
        )
    }
}

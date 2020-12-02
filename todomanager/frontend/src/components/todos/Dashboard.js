import React, { useState } from 'react';
import BackToTop from "react-back-to-top-button";
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Form from '../todos/Form';
import Todos from '../todos/Todos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

export default function Dashboard(initialValue = false) {
    const [activeSidebar,handleActiveSidebars] = React.useState (initialValue = false);

    const auth = useSelector(state => state.auth)

    const handleActiveSidebar = React.useCallback(() => {
        handleActiveSidebars(v => !v);
    }, []);

    if (!auth.token) {
        return <Redirect to="/landingpage" />
    }

    return (
        <>
            <BackToTop
                showOnScrollUp={false}
                showAt={100}
                speed={1500}
                easing="easeInOutQuint"
                style={{zIndex: "999", borderRadius: "50%", cursor: "default"}}
            >
                <div className="btn btn-transparent p-0 rounded-circle" style={{borderRadius: "50%", cursor: "default"}}>
                    <FontAwesomeIcon icon={faAngleUp} style={{width: "1.5em",  height: "1.5em",fontSize: "2em", color: "#b3d146", backgroundColor: "#020205", borderRadius: "50%", cursor: "pointer"}} />
                </div>
            </BackToTop>
            <Header handleActiveSidebar={handleActiveSidebar} noLogo />
            <Sidebar activeSidebar={activeSidebar} currentPath="/" />
            <div className="container-fluid">
                <div className="container mt-5">
                    <div className="container">
                        <h1 className="font-weight-bold" style={{color: "#b3d146"}}>ToDO List</h1>
                    </div>
                </div>
                <Todos />
            </div>
            
        </>
    )
}
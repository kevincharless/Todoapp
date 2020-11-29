import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Form from '../todos/Form';
import Todos from '../todos/Todos';

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
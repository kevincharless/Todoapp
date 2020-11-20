import React, { Fragment } from 'react';
import Form from './Form';
import Todos from './Todos'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function Dashboard() {
    const auth = useSelector(state => state.auth)

    if (!auth.token) {
        return <Redirect to="/landingpage" />
    }

    return (
        <div style={{backgroundColor: '#1b1b1b'}}>
            <div className="container">
                <Fragment>
                    <Form />
                    <Todos />
                </Fragment>
            </div>
        </div>
    )
}

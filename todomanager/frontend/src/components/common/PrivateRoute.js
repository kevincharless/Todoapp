import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem("token");

    return (
        <Route 
            {...rest}
            render={props => {
                if(!isAuthenticated) {
                    return <Redirect to="/landingpage" />;
                } else {
                    return <Component {...props} />;
                }
            }}
        />
    )
};



export default PrivateRoute;
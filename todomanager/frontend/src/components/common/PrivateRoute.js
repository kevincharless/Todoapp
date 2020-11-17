import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem("token");

    return (
        <Route 
            {...rest}
            render={props => {
                if(isAuthenticated) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/landingpage" />;
                }
            }}
        />
    )
};



export default PrivateRoute;
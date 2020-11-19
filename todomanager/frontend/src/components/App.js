import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import  { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './todos/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import LandingPage from './accounts/LandingPage';
import NotFound404 from './accounts/NotFound404';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

import AOS from 'aos';

// Alert Options
const alertOptions = {
    timeout: 3000,
    offset: '10px',
    position: 'bottom right'
}

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());

        AOS.init({
            duration : 1000,
        });
        
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                                <Alerts />
                                <Switch>
                                    <PrivateRoute exact path="/" component={Dashboard} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/landingpage" component={LandingPage} />
                                    <Route component={NotFound404} />
                                </Switch>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
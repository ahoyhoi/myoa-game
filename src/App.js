//react components
import React, { Component } from 'react';
// import Sound from "react-sound";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import Fullscreen from "react-full-screen";
// import WheelReact from "wheel-react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import store from './store';

import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

if(localStorage.jwtToken){
    const token = localStorage.jwtToken;
    setAuthToken(token);

    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime){
        store.dispatch(logoutUser());
        window.location.href = "./login";
    }
}

class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Switch>
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;

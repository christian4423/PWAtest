
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from "../components/layout/Body";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
const store = configureStore();


const routes = (
    <Router>
        <Provider store={store}>
            <div>
                <NavBar store={store} />
                <Switch>
                    <Route path="/" component={() => <Body app={store} />} exact={true} />
                </Switch>
                <Footer />
            </div>
        </Provider>
    </Router>
);

var appRoot = document.getElementById("root");
ReactDOM.render(routes, appRoot);
var nojs = document.getElementById("nojs");
document.body.removeChild(nojs);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from "../components/layout/Body";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import Loadable from "react-loadable";


const store = configureStore();


const LoadableBody = Loadable({
    loader: () => import("../components/layout/Body"),
    loading: Body
});

const LoadableNavBar = Loadable({
    loader: () => import("../components/layout/NavBar"),
    loading: NavBar
});

const LoadableFooter = Loadable({
    loader: () => import("../components/layout/Footer"),
    loading: Footer
});


const routes = (
    <Router>
        <Provider store={store}>
            <div>
                <LoadableNavBar store={store} />
                <Switch>
                    <Route path="/" component={() => <LoadableBody app={store} />} exact={true} />
                </Switch>
                <LoadableFooter />
            </div>
        </Provider>
    </Router>
);

var appRoot = document.getElementById("root");
ReactDOM.render(routes, appRoot);
var nojs = document.getElementById("nojs");
document.body.removeChild(nojs);
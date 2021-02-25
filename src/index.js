import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Switch, Route } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import {BrowserRouter} from 'react-router-dom';
import { SignIn } from "./pages/sign-in/sign-in";
import { SignUp } from "./pages/sign-up/sign-up";
import { RemindPassword } from "./pages/remind-password/remind-password";
import { Test } from "./components/test/test";
import {Localization} from "./utils/localization";
import { LayOut } from "./pages/layout/layout";

Localization.initI18();

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {/*<Route exact path="/sign-in" component={SignIn} />*/}
            {/*<Route exact path="/sign-up" component={SignUp} />*/}
            {/*<Route exact path="/remind-password" component={RemindPassword} />*/}
            {/*<Route exact path="/test" component={Test} />*/}
            <Route exact path="/" component={LayOut} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

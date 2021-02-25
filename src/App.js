import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {Switch} from 'react-router-dom';

class App extends Component {
    state = {
        email: '',
        fullName: '',
    };
    signIn = (event) => {
        debugger
    };

    render() {
        return (
            <Provider>
                <div className="App">
                    <Switch>
                        {/*<Route exact path="/" component={signUp} />*/}
                        {/*<ProtectedRoute />*/}
                    </Switch>
                </div>
            </Provider>
            //<SignIn onFormSubmit={this.props.signIn}></SignIn>
        )
    }
}

export default App;

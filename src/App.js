import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
    return (
        <Router>
            <Navigation />

            <Switch>
                <Route exact path='/'>
                    <SignUp />
                </Route>

                <Route exact path='/signin'>
                    <SignIn />
                </Route>
                <Route exact path='/signup'>
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

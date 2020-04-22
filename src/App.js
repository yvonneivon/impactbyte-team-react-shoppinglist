import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import ShoppingList from './components/pages/ShoppingList';

import PrivateRoute from './helpers/PrivateRoute';

function App() {
    return (
        <Router>
            <Navigation />

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/signup'>
                    <SignUp />
                </Route>
                <Route exact path='/signin'>
                    <SignIn />
                </Route>
                <PrivateRoute exact path='/shopping-list'>
                    <ShoppingList />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App;

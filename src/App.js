import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation';
import Home from './components/Home';
import MockAPI from './components/MockAPI';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ShoppingList from './components/ShoppingList'
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Header />
            <Navigation />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/mockapi">
                    <MockAPI />
                </Route>
                <Route exact path="/signin">
                    <SignIn />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/shoppinglist">

                    <ShoppingList/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup'

const Main = () => {
    localStorage.setItem("sel",0);
    return (
        <BrowserRouter>
            <Switch> {/* The Switch decides which component to show based on the current URL.*/}
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/signup' component={Signup}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Main;
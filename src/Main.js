import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

const Main = () => {
    localStorage.setItem("sel",0);
    return (
        <BrowserRouter>
            <Switch> {/* The Switch decides which component to show based on the current URL.*/}
                <Route exact path='/login' component={Login}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Main;
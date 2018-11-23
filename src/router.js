import React from 'react';
import {Switch,Route} from 'react-router-dom';

import HomePage from './pages/homepage';
import CartPage from './pages/cartpage';


const Router = (props) => (
    <Switch>
        <Route exact path="/" component={HomePage}>Home</Route>
        <Route exact path="/cart" component={CartPage}>Cart</Route>
    </Switch>
)

export default Router;
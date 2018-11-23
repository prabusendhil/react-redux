import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Router from './router';
class App extends Component {
  render(){

	const Navigation = () => 
	<ul>
		<li><NavLink to="/">Home</NavLink></li>
		<li><NavLink to="/cart">cart</NavLink></li>
	</ul>
	  return(
		<div>
		<h3>My Shopping Cart</h3>
		<Navigation/>
		<Router />
		</div>
	)
  }
}

export default App;

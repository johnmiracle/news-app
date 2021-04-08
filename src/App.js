/** @format */

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Contact, Home, NewsPost } from './Pages';

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/" exact={true} component={Home} />
				<Route path="/item/:id" component={NewsPost} />
				<Route path="/contact" component={Contact} />
			</Router>
		</div>
	);
}

export default App;

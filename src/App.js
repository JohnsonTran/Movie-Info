import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import FrontPage from "./FrontPage"
import MoviesPage from './MoviesPage';

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={FrontPage} />
				<Route exact path="/movies" component={MoviesPage} />
			</Router>
		</div>
	);
}

export default App;

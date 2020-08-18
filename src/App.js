import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchPage from './components/SearchPage';
import RecommendedVideos from './components/RecommendedVideos';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<Switch>
					<Route path="/search/:searchTerm">
						<div className="app__content">
							<Sidebar />
							<SearchPage />
						</div>
					</Route>
					<Route path="/">
						<div className="app__content">
							<Sidebar />
							<RecommendedVideos />
						</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

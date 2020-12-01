import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import theme from './utils/Theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<BrowserRouter>
					<NavBar />
					<Switch>
						<Route path="/" component={Dashboard} />
					</Switch>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
};

export default App;

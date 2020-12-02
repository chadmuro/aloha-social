import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import UserDetails from './components/user/UserDetails';
import theme from './utils/Theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<BrowserRouter>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route path="/user/:id" component={UserDetails} />
					</Switch>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
};

export default App;

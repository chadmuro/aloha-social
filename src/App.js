import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, ThemeProvider } from '@material-ui/core';
import NavBar from './components/layout/Navbar';
import theme from './utils/Theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="md">
				<BrowserRouter>
					<NavBar />
				</BrowserRouter>
			</Container>
		</ThemeProvider>
	);
};

export default App;

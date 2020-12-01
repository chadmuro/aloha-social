import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        textDecoration: 'none',
        color: theme.palette.text.primary,
    }
}))

const Navbar = () => {
    const classes = useStyles();

	return (
		<AppBar style={{ position: 'sticky' }}>
			<Toolbar>
				<Link to="/" className={classes.title}>
					<Typography variant="h4" >Aloha Social</Typography>
				</Link>
				<SignedInLinks />
                <SignedOutLinks />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;

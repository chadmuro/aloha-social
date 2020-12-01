import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	link: {
		textDecoration: 'none',
	},
});

const SignedOutLinks = () => {
    const classes = useStyles();
    
	return (
		<>
			<NavLink to="/" className={classes.link}>
				<Button>Signup</Button>
			</NavLink>
			<NavLink to="/" className={classes.link}>
				<Button>Login</Button>
			</NavLink>
		</>
	);
};

export default SignedOutLinks;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, IconButton, makeStyles } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none'
    }
})

const SignedInLinks = () => {
    const classes = useStyles();
	return (
		<>
			<NavLink to="/" className={classes.link}>
				<Button>New Shaka</Button>
			</NavLink>
			<NavLink to="/" className={classes.link}>
				<Button>Logout</Button>
			</NavLink>
			<NavLink to="/" className={classes.link}>
				<IconButton>
                    <AccountCircle />
                </IconButton>
			</NavLink>
		</>
	);
};

export default SignedInLinks;

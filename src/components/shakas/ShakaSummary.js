import React, { useState } from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	Typography,
	CardActions,
	IconButton,
	Avatar,
	makeStyles,
	Collapse,
	Button,
	TextField,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
	card: {
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(1, 1, 0, 1),
		marginBottom: theme.spacing(1),
		justifyContent: 'center',
	},

	avatar: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	avatarSmall: {
		width: theme.spacing(5),
		height: theme.spacing(5),
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
	},
	form: {
		paddingBottom: theme.spacing(2)
	},
	textField: {
		width: '70%'
	}
}));

const ShakaSummary = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	}

	return (
		<Card className={classes.card}>
			<CardHeader
				avatar={
					<Avatar
						src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
						alt="Avatar Image"
						className={classes.avatar}
					/>
				}
				title="Name"
				titleTypographyProps={{ color: 'primary', variant: 'h5' }}
				subheader="Date"
			/>

			<CardContent className={classes.content} style={{ paddingBottom: 0 }}>
				<Typography variant="body1" gutterBottom>
					This is the post text area
				</Typography>
				<CardActions>
					<IconButton>
						<FavoriteBorderIcon />
					</IconButton>
					<Typography>Likes</Typography>
					<IconButton>
						<CommentIcon />
					</IconButton>
					<Typography style={{ flex: 1 }}>Comments</Typography>
					<IconButton onClick={handleExpandClick}>
						<ExpandMoreIcon />
					</IconButton>
				</CardActions>
				<Collapse in={expanded} unmountOnExit>
					<CardContent>
						<form className={classes.form}>
							<TextField label="Comment" size="small" className={classes.textField} />
							<Button size="small" type="submit" variant="contained" color="secondary" >Submit</Button>
						</form>
						<Card>
							<CardHeader
								avatar={
									<Avatar
										src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
										alt="Avatar Image"
										className={classes.avatarSmall}
									/>
								}
								title="Name"
								titleTypographyProps={{ color: 'primary', variant: 'h6' }}
								subheader="Date"
							/>
							<CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
								<Typography variant="body1" gutterBottom>
									This is a comment
								</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardHeader
								avatar={
									<Avatar
										src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
										alt="Avatar Image"
										className={classes.avatarSmall}
									/>
								}
								title="Name"
								titleTypographyProps={{ color: 'primary', variant: 'h6' }}
								subheader="Date"
							/>
							<CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
								<Typography variant="body1" gutterBottom>
									This is another comment
								</Typography>
							</CardContent>
						</Card>
					</CardContent>
				</Collapse>
			</CardContent>
		</Card>
	);
};

export default ShakaSummary;

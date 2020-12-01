import React from 'react';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	IconButton,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';

const ShakaSummary = () => {
	return (
		<Card>
			<CardMedia
				component="img"
				image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
			/>
			<CardContent>
				<Typography>Name</Typography>
				<Typography>Date</Typography>
				<Typography>Post</Typography>
				<CardActions>
					<IconButton>
						<FavoriteBorderIcon />
					</IconButton>
					<IconButton>
						<CommentIcon />
					</IconButton>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default ShakaSummary;

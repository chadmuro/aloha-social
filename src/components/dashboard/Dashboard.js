import React from 'react';
import { Container, Grid } from '@material-ui/core';
import UserSummary from '../user/UserSummary';
import ShakaList from '../shakas/ShakaList';

const Dashboard = () => {
    return (
        <Container maxWidth="md">
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <ShakaList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <UserSummary />
                </Grid>
                
            </Grid>
        </Container>
    )
}

export default Dashboard;

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuStudent from '../../../components/menuStudent';

export default function HomeStudent() {

    const authToken = sessionStorage.getItem('@teachers_room/token');
    const userName = sessionStorage.getItem('@teachers_room/userName');

    return (
        <Grid container component="main">
            <MenuStudent />
        </Grid>
    );
}
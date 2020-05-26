import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export default function HomeStudent() {

    const authToken = sessionStorage.getItem('@teachers_room/token');
    const userName = sessionStorage.getItem('@teachers_room/userName');

    return (
        <Grid container component="main">
            <Box display="flex" justifyContent="flex-end" p={1} m={1} bgcolor="background.paper">
                <Box>
                    Olá {userName} 

                    TELA DO ESTUDANTE
                </Box>
            </Box>
        </Grid>
    );
}
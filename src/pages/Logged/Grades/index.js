import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuStudent from '../../../components/menuStudent';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      margin: 'opx',
      padding: '0px',
    },
    title: {
      fontFamily: 'Andale Mono, monospace',
      fontSize: '25px',
      marginLeft: '55%',
      marginTop: '40px',
      position: 'fixed',
    },
    background: {
      backgroundColor: '#669dd0',
      marginTop: '45px',
      height: '120px',
      width: '100%',
    },
  }));

export default function HomeStudent() {

    const authToken = sessionStorage.getItem('@teachers_room/token');
    const userName = sessionStorage.getItem('@teachers_room/userName');

    const classes = useStyles();

    return (
        <Grid container component="main">
            <MenuStudent />
            <Box className={classes.background}>
                <Box className={classes.title}>
                    Notas
                </Box>
            </Box>
        </Grid>
    );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuTeacher from '../../../components/menuTeacher';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      margin: 'opx',
      padding: '0px',
    },
    title: {
      fontFamily: 'Andale Mono, monospace',
      fontSize: '25px',
      marginLeft: '53%',
      marginTop: '40px',

    },
    background: {
      backgroundColor: '#ADD8E6',
      marginTop: '45px',
      height: '120px',
      width: '100%',
    },
    newActivity: {
        marginTop: '60px',
        marginLeft: '80%',
    }
  }));

export default function TeacherActivities() {

    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <MenuTeacher />
            <Box className={classes.background}>
                <Box className={classes.title}>
                    Atividades
                </Box>
            </Box>
                <Button variant="contained" color="primary" href="/newActivity" className={classes.newActivity}>
                    Nova atividade
                </Button>  
        </Grid>
    );
}
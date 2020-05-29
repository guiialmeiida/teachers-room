import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuTeacher from '../../../components/menuTeacher';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    title: {
      fontFamily: 'Andale Mono, monospace',
      fontSize: '25px',
      marginLeft: '55%',
      marginTop: '3.5%',
    },
    background: {
      backgroundColor: '#ADD8E6',
      marginTop: '45px',
      height: '120px',
      width: '100%',
    },
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
        </Grid>
    );
}
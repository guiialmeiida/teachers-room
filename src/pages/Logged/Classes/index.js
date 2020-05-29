import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuTeacher from '../../../components/menuTeacher';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
  }));

export default function TeacherActivities() {

    const classes = useStyles();

    return (
        <Grid >
            <MenuTeacher />
            <Box className={classes.background}>
                <Box className={classes.title}>
                    
                </Box>
            </Box>
        </Grid>
    );
}
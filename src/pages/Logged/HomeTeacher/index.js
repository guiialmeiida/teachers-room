import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import MenuTeacher from '../../../components/menuTeacher';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    class: {
        marginTop: '80px',
        marginLeft: '80%',
    }
  }));

export default function HomeTeacher() {

    const classes = useStyles();

    const authToken = sessionStorage.getItem('@teachers_room/token');
    const userName = sessionStorage.getItem('@teachers_room/userName');

    return (
        <Grid>
            <MenuTeacher />
            <Box>
                <Box >
                    <Button variant="contained" color="primary" href="/newClass" className={classes.class}>
                        Criar Aula
                    </Button>  
                </Box>
            </Box>
        </Grid>
    );
}
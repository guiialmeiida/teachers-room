import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuTeacher from '../../../components/menuTeacher';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    class: {
        marginTop: '80px',
        marginLeft: '80%',
    }
  }));

export default function Classes() {

    const classes = useStyles();

    return (
        <Grid >
            <MenuTeacher />
            <Box>
                <Box >
                    <Button variant="contained" color="primary" href="/" className={classes.class}>
                        Criar turma
                    </Button>  
                </Box>
            </Box>
        </Grid>
    );
}
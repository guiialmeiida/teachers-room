import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        backgroundColor: 'transparent',
      },
    },
  }));

export default function Menu() {
    const classes = useStyles()
    
    return (
        <div className={classes.root} >
            <Box display="flex" justifyContent="flex-end" p={1} m={1} bgcolor="background.paper">
                <Box p={1}>
                    <Button variant="contained" color="primary" href="/" >
                        Home
                    </Button>
                </Box>
                <Box p={1}>
                    <Button variant="contained" color="primary" href="/login">
                        Entrar
                    </Button>
                </Box>
                <Box p={1}>
                    <Button variant="contained" color="primary" href="/about">
                        Sobre nós
                    </Button>
                </Box>
            </Box>
        </div>

    );
}
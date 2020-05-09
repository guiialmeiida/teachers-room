import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '../../components/menu';

import fundoImg from '../../assets/home.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    background: {
        backgroundSize: 'cover',
        backgroundImage: `url(${fundoImg})`,
        position: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100%',
        minWidth: '100%',
        backgroundPosition: 'center',
    },
  }));



export default function Home() {
    const classes = useStyles()

    return (
        <div className={classes.background} >
        <Menu />
        </div>
    );
}
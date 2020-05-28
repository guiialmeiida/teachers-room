import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header';

import fundoImg from '../../assets/about.jpg';

const useStyles = makeStyles((theme) => ({
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
        <Header />
        </div>
    );
}
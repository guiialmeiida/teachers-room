import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SchoolIcon from '@material-ui/icons/School';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  menu: {
    backgroundColor: '#f0f0f0',
    width: '250px',
    height: '100%',
    position: 'fixed',
    left: '0px',
    top: '55px',
  },
  header: {
    height: '45px',
    boxShadow: '0px 2px 0px #9E9E9E',
    position: 'fixed',
    width: '100%',
    left: '0px',
  },
  title: {
    fontFamily: 'Andale Mono, monospace',
    fontSize: '25px',
    marginLeft: '35px',
    marginTop: '4px',
  },
  user: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '50px',
    marginTop: '-25px',
    fontFamily: 'Andale Mono, monospace',
    fontSize: '22px',
  },
  itensMenu: {
    marginLeft: '20px',
  }
}));

const userName = sessionStorage.getItem('@teachers_room/userName');

export default function MenuStudent() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <div className={classes.header}>
      <div className={classes.title}>
          Teachers Room
      </div>
      <div className={classes.user}>
          Olá {userName}
      </div>
    </div>
    <List className={classes.menu} component="nav" aria-label="main mailbox folders">
      <div className={classes.itensMenu}>
      <ListItem button>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Aulas" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LibraryAddCheckIcon />
        </ListItemIcon>
        <ListItemText primary="Notas" />
      </ListItem>
      </div>
    </List>
    </div>
    );
}

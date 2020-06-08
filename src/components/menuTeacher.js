import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SchoolIcon from '@material-ui/icons/School';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import ReportIcon from '@material-ui/icons/Report';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  menu: {
    backgroundColor: '#f0f0f0',
    width: '250px',
    height: '100%',
    position: 'absolute',
    left: '0px',
    top: '54px',
    textAlign: 'center',
  },
  header: {
    height: '45px',
    boxShadow: '0px 2px 0px #9E9E9E',
    width: '100%',
    left: '0px',
  },
  title: {
    fontFamily: 'Andale Mono, monospace',
    fontSize: '25px',
    marginLeft: '35px',
    marginTop: '7px',
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

export default function MenuTeacher() {

  function notes(e) {
    alert('Funcionalidade ainda não disponível!');
  }

  const classes = useStyles();

  useEffect(() => {
    document.getElementsByTagName('body')[0].style = "margin:0px"
  }, );

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
    <List className={classes.menu} component='nav' aria-label='main mailbox folders'>
      <div className={classes.itensMenu}>
      <ListItem button component={Link} to='/teacherActivities' >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary='Atividades' />
      </ListItem>
      <ListItem button component={Link} to='/classes'>
        <ListItemIcon>
          <SupervisorAccountIcon />
        </ListItemIcon>
        <ListItemText primary='Turmas' />
      </ListItem>
      <ListItem button onClick={notes}>
        <ListItemIcon>
          <LibraryAddCheckIcon />
        </ListItemIcon>
        <ListItemText primary='Notas' />
        <ListItemIcon>
          <ReportIcon />
        </ListItemIcon>
      </ListItem>
      </div>
    </List>
    </div>
    );
}

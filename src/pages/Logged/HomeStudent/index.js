import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuStudent from '../../../components/menuStudent';
import { Button } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import api from '../../../service/api';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      margin: 'opx',
      padding: '0px',
    },
    title: {
      fontFamily: 'Andale Mono, monospace',
      fontSize: '25px',
      marginLeft: '55%',
      marginTop: '40px',
      position: 'fixed',
    },
    background: {
      backgroundColor: '#7FFFD4',
      marginTop: '45px',
      height: '120px',
      width: '100%',
    },
    card: {
      width: '700px',
      marginLeft: '400px',
      marginTop: '30px'
    },
    painels: {
      marginBottom: '20px'
    },
  }));

export default function HomeStudent() {

    const authToken = sessionStorage.getItem('@teachers_room/token');
    const userName = sessionStorage.getItem('@teachers_room/userName');
    const studentClass = sessionStorage.getItem('@teachers_room/studentClass');

    const classes = useStyles();

    const [listActivities, setListActivities] = useState([]);

    useEffect(() => {
        const data = { studentClass };
        api.post('/class/filteredActivitie', data).then(response => {

          setListActivities(response.data);
        });
    }, []);

    return (
        <Grid container component="main">
            <MenuStudent />
            <Box className={classes.background}>
                <Box className={classes.title}>
                    Atividades
                </Box>
            </Box>

            <Box className={classes.card}>
              {listActivities.map(activity => (
                <ExpansionPanel className={classes.painels} key={activity._id}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>{activity.name}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        {activity.description}
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
            </Box>
        </Grid>
    );
}
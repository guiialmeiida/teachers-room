import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuTeacher from '../../../components/menuTeacher';
import { Button } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
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
      marginLeft: '53%',
      marginTop: '100px',
    },
    newActivity: {
      marginTop: '50px',
      marginLeft: '80%',
      marginBottom: '15px',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    card: {
      width: '700px',
      marginLeft: '400px',
      marginTop: '20px'
    },
    painels: {
      marginBottom: '20px'
    },
    teste: {
      marginLeft: '600px',
      position: 'absolute'
    }
  }));

export default function TeacherActivities() {

    const classes = useStyles();

    const [listActivities, setListActivities] = useState([]);
    const [expanded, setExpanded] = React.useState(false);

    useEffect(() => {
        api.get('/class/listClass').then(response => {

          setListActivities(response.data);
        });
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Grid container component="main" className={classes.root}>
            <MenuTeacher />
                <Button variant="contained" color="primary" href="/newActivity" className={classes.newActivity}>
                    Nova atividade
                </Button>
            
            <Box className={classes.card}>
            {listActivities.map(activity => (
              <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')} key={activity.id} className={classes.painels}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>{activity.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    {activity.description}
                  </Typography>
                  <DeleteIcon  className={classes.teste} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
            </Box>
        </Grid>
    );
}
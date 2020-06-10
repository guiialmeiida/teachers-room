import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuStudent from '../../../components/menuStudent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
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
      marginLeft: '50%',
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
    response: {
      marginLeft: '600px',
      position: 'absolute'
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(14, 22, 18),
      position: 'fixed'
    },
    textModal: {
      height: '212px',
      margin: '0px',
      width: '654px',
    },
    saveButton: {
      marginTop: '10px'
    }
  }));

export default function HomeStudent() {

    const authToken = sessionStorage.getItem('@teachers_room/token');
    const studentClass = sessionStorage.getItem('@teachers_room/studentClass');

    const classes = useStyles();
    const history = useHistory();

    const [listActivities, setListActivities] = useState([]);
    const [response, setResponse] = useState('');
    const [open, setOpen] = useState(false);
    const [idList, setIdList] = useState([]);
    const [responsePlace, setResponsePlace] = useState([]);

    useEffect(() => {
      if(!authToken) {
        alert('Falha na autenticação, realize o login para continuar.')

        history.push('/');
      }
    });

    useEffect(() => {
        const data = { studentClass };
        api.post('/class/filteredActivitie', data).then(response => {

          setListActivities(response.data);
        });
    });

    useEffect(() => {
      const getResponse = localStorage.getItem(idList);

      if (getResponse) {
        setResponsePlace(getResponse);
      }

    });

    const handleOpen = () => {
      setOpen(true);
  };

    const handleClose = () => {
      setOpen(false);
  };

    function saveResponse(e) {
      /* console.log(`A resposta armazenada foi ${response}`)
      console.log(`O id da resposta armazeda é ${idList}`) */
      localStorage.setItem(idList, response);

    }

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
                <ExpansionPanel className={classes.painels} key={activity._id} onChange={e => setIdList(activity.name)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>{activity.name}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        {activity.description}
                    </Typography>
                    <EventNoteIcon className={classes.response} onClick={handleOpen}/>
                    <Modal
                          aria-labelledby="transition-modal-title"
                          aria-describedby="transition-modal-description"
                          className={classes.modal}
                          open={open}
                          onClose={handleClose}
                          closeAfterTransition
                          BackdropComponent={Backdrop}
                          BackdropProps={{
                          timeout: 500,
                          }}
                      >
                          <Fade in={open}>
                          <div className={classes.paper}>
                            <Box>
                              <h2 id="transition-modal-title">Resposta da questão</h2>
                                   <TextareaAutosize 
                                      aria-label="minimum height" 
                                      rowsMin={15}
                                      rowsMax={15}
                                      placeholder="Campo para preenchimento da resposta." 
                                      className={classes.textModal} 
                                      onChange={e => setResponse(e.target.value)}
                                  >
                                  {response}
                                  </TextareaAutosize>
                            </Box>
                                  <Button variant="contained" color="primary" type="submit" className={classes.saveButton} onClick={saveResponse} >
                                    Salvar resposta
                                </Button> 
                          </div>
                          </Fade>
                    </Modal>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
            </Box>
        </Grid>
    );
}
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuTeacher from '../../../components/menuTeacher';
import { Button } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import api from '../../../service/api';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    newClass: {
      marginTop: '50px',
      marginLeft: '80%',
      marginBottom: '15px',
    },
    card: {
        width: '700px',
        marginLeft: '400px',
        marginTop: '20px'
      },
    painels: {
        marginTop: '20px'
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
        padding: theme.spacing(12, 20, 16),
      },
      buttonClass: {
        marginTop: '80px',
        marginLeft: '-170px'

      },
      circleButton: {
          marginLeft: '80%'
      },
      delete: {
        marginLeft: '600px',
        position: 'absolute'
      },
      maginName: {
          marginRight: '10px'
      }
  }));

export default function Classes() {

    const [listClasses, setListClasses] = useState([]);
    const [open, setOpen] = useState(false);
    const [nTurma, setNTurma] = useState('');
    const [users, setUsers] = useState([]);
    const [_id, set_id] = useState('');

    const classes = useStyles();
    const history = useHistory();

    const authToken = sessionStorage.getItem('@teachers_room/token');

    useEffect(() => {
        if(!authToken) {
          alert('Falha na autenticação, realize o login para continuar.')
  
          history.push('/');
        }
      });

    useEffect(() => {
        api.get('/class/listClass').then(response => {

        setListClasses(response.data);
        });
    }, []);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function handleNewClass(e) {
        e.preventDefault();
        console.log('entrou aqui')

        const data = { nTurma };

        try {
            await api.post('/class/newClass', data)
  
            alert('Turma cadastrada com sucesso.');
            setOpen(false);
  
        } catch (e) {
            alert('Erro ao cadastar turma, tente novamente.');
        }
    }

    async function handleDelete(e) {
        e.preventDefault();
  
        const data = { _id };

        try {
            await api.post('/class/deleteClass', data)
  
            alert('Turma deletada com sucesso.');
  
        } catch (e) {
            alert('Erro ao deletar turma, tente novamente.');
        }
    }

    async function handleStudents(nTurma) {

        try {

            await api.get(`/users/listUsers/${nTurma}`).then(response => {

               setUsers(response.data);
            });
        } catch (e) {
            console.log('Falha ao buscar usuários pela turma', e);
        }
    }

    return (
        <Grid >
            <MenuTeacher />
            <Button variant="contained" color="primary" onClick={handleOpen} className={classes.newClass}>
                Nova turma
            </Button>
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
                    <h2 id="transition-modal-title">Digite a nova turma</h2>
                    <TextField 
                        id="outlined-basic" 
                        label="Id da turma" 
                        variant="outlined" 
                        onChange={e => setNTurma(e.target.value)}
                        />
                    <Button variant="contained" color="primary" onClick={handleNewClass} className={classes.buttonClass}>
                        Criar turma
                    </Button>
                </div>
                </Fade>
            </Modal>
            
            <Box className={classes.card}>
            {listClasses.map(list => (
                <ExpansionPanel 
                    className={classes.painels} 
                    key={list.id} 
                    onClick={() => handleStudents(list.nTurma)}
                    onChange={e => set_id(list._id)}
                    >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>{list.nTurma}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    {users.map(user => (
                        <Typography className={classes.maginName} >
                            {user.firstName} {user.lastName},
                        </Typography>
                    ))}
                    <DeleteIcon  className={classes.delete} onClick={handleDelete} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
            </Box>
        </Grid>
    );
}
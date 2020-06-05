import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuTeacher from '../../../components/menuTeacher';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
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
      marginLeft: '53%',
      marginTop: '40px',

    },
    background: {
      backgroundColor: '#ADD8E6',
      marginTop: '-206px',
      height: '120px',
      width: '100%',
    },
    form: {
      marginTop: '-50px',
      marginLeft: '500px',
      marginBottom: '100px'
    },
    newActivity: {
      fontFamily: 'Andale Mono, monospace',
      fontSize: '25px',
      marginBottom: '5px',
    },
    styleText: {
      width: '500px',
    },
    textArea: {
      marginTop: '30px',
      width: '500px',
    },
    selectBox: {
      marginTop: '10px',
      height: '40px'
    },
    createButton: {
      marginLeft: '195px'
    },
  }));

export default function NewActivity() {

    const classes = useStyles();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [team, setTeam] = useState('');

    const history = useHistory();

    async function handleNewActivity(e) {
      e.preventDefault();

      const data = {
          name,
          description,
          team
      };

      try {
          console.log(data.name, data.description, data.team);
          await api.post('/class/createClass', data)

          alert('Atividade cadastrada com sucesso.');

          history.push('/teacherActivities');

      } catch (e) {
          alert('Erro ao cadastar atividade, tente novamente.');
      }
  }

    return (
        <Grid container component="main" className={classes.root}>
            <MenuTeacher />
            <Box className={classes.background}>
                <Box className={classes.title}>
                    Atividades
                </Box>
            </Box>

            <Box>
                <form className={classes.form} onSubmit={handleNewActivity}>
                  <Box className={classes.newActivity}>
                          Criar nova atividade
                  </Box>
                      <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="name"
                          label="Nome da atividade"
                          name="name"
                          autoComplete="name"
                          autoFocus
                          className={classes.styleText}
                          onChange={e => setName(e.target.value)}
                      />
                    <Box>
                      <TextareaAutosize 
                      aria-label="minimum height" 
                      rowsMin={15} 
                      placeholder="Descreva a atividade, adicione links ou textos." 
                      className={classes.textArea}
                      onChange={e => setDescription(e.target.value)}
                      />
                    </Box>
                    <Box>
                        <select className={classes.selectBox} onChange={e => setTeam(e.target.value)}>
                            <option value="2">Selecione uma turma</option>
                            <option value="1">turma 1</option>
                            <option value="5">turma 2</option>
                        </select>

                        <Button variant="contained" color="primary" type="submit" className={classes.createButton}>
                          Criar atividade
                        </Button> 
                    </Box>
                </form>
            </Box>
        </Grid>
    );
}
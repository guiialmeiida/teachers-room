import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuTeacher from '../../../components/menuTeacher';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    form: {
        marginTop: '100px',
        position: 'fixed',
        marginLeft: '400px',
        
      },
    email: {
        width: '600px',
    },
    selectStudents: {
        marginTop: '30px',
        fontFamily: 'Andale Mono, monospace',
        fontSize: '25px',
    },
    newClass: {
        fontFamily: 'Andale Mono, monospace',
        fontSize: '25px',
        marginBottom: '5px',
    },
    class: {
        marginTop: '30px',
    }
  }));

export default function NewClass() {

    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

    return (
        <Grid >
            <MenuTeacher />
            <Box>
                <form className={classes.form}>
                    <Box className={classes.newClass}>
                    Criar nova turma
                    </Box>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nome da turma"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    className={classes.email}
            />
            <Box className={classes.selectStudents}>
            Selecionar Alunos
            </Box>
            <List dense className={classes.root}>
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                    <ListItem key={value} button>
                        <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                        <ListItemSecondaryAction>
                        <Checkbox
                            edge="end"
                            onChange={handleToggle(value)}
                            checked={checked.indexOf(value) !== -1}
                            inputProps={{ 'aria-labelledby': labelId }}
                        />
                        </ListItemSecondaryAction>
                    </ListItem>
                    );
                })}
            </List>
            <Box >
                    <Button variant="contained" color="primary" href="/" className={classes.class}>
                        Criar turma
                    </Button>  
                </Box>
                </form>
            </Box>
        </Grid>
    );
}
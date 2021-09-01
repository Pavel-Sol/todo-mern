import { Button, Container, TextField, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useState} from 'react';
import { useHistory } from "react-router";

import {registration} from '../../srore/actions/authActions'
import {useStyles} from './style'

const SignUp = () => {
   const history = useHistory()
   const classes = useStyles()
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch()

   const registrationHandler = (e) => {
      e.preventDefault();
      dispatch(registration(email, password))
      setEmail('')
      setPassword('')
      history.push("/login")
    };


   return (
      <Container>
         <div className={classes.wrapper}>
            <Typography className={classes.title} variant="h4" component="h1">Регистрация</Typography>
            <form className={classes.form} action="" onSubmit={registrationHandler}>
               <TextField
                  className={classes.input}
                  onChange={(e) => setEmail(e.target.value)}
                  id="outlined-basic" 
                  label="Email" 
                  variant="outlined" 
                  value={email}
                  type='email'
                  size='small'
               />
               <TextField
                  className={classes.input}
                  onChange={(e) => setPassword(e.target.value)}
                  id="outlined-basic" 
                  label="Password" 
                  variant="outlined" 
                  value={password}
                  type='password'
                  size='small'
               />

               <Button 
                   type='submit'variant="contained" color="primary">
                  зарегистрироваться
               </Button>
            </form>
         </div>
      </Container>
   )
}

export default SignUp
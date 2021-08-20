import { Button, Container, TextField, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useState} from 'react';

import {login} from '../../srore/actions/authActions'
import {useStyles} from './style'

const SignIn = () => {
   const classes = useStyles()
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch()

   const loginHandler = (e) => {
      e.preventDefault();
      dispatch(login(email, password))
      // занулить поля
    };



   // return (
   //    <div className='container'>
   //       <h3>Login</h3>
   //          <form action="" onSubmit={loginHandler}>
   //             <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' value={email}/>
   //             <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='password' value={password}/>
   //             <button type='submit'>войти</button>
   //          </form>
   //    </div>
   // )

   return (
      <Container>
         <div className={classes.wrapper}>
            <Typography className={classes.title} variant="h4" component="h1">Login</Typography>
            <form className={classes.form} action="" onSubmit={loginHandler}>
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
                  войти
               </Button>
            </form>
         </div>
      </Container>
   )
}

export default SignIn
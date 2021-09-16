import { Button, Container, TextField, Typography, 
         FormControl, InputLabel, OutlinedInput, 
         InputAdornment, IconButton } from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { useState} from 'react';

import {login} from '../../srore/actions/authActions'
import {useStyles} from './style'

const SignIn = () => {
   
   const classes = useStyles()
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false)
   const dispatch = useDispatch()

   const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };

   const loginHandler = (e) => {
      e.preventDefault();
      dispatch(login(email, password))
      setEmail('')
      setPassword('')
    };


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
               <FormControl variant="outlined" size='small' className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                     id="outlined-adornment-password"
                     type={showPassword ? 'text' : 'password'}
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     endAdornment={
                     <InputAdornment position="end">
                        <IconButton
                           aria-label="toggle password visibility"
                           onClick={handleClickShowPassword}
                           edge="end"
                        >
                           {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                     </InputAdornment>
                     }
                     labelWidth={70}
                  />
               </FormControl>

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
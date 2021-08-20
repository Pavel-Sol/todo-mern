import {AppBar, Button, Toolbar, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom'
import { useSelector} from 'react-redux';
import { useDispatch} from 'react-redux';

import {logOutAC} from '../../srore/reducers/authReducer'
import {useStyles} from './style'


const Navbar = () => {
   const classes = useStyles()

   const isAuth = useSelector((state) => state.authReducer.isAuth);
   const dispatch = useDispatch()

   const onLogOut = () => {
      dispatch(logOutAC())
      localStorage.removeItem('token')
   }


   return (
      <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
         <Typography variant="h6" className={classes.title}>
            Todo-mern
         </Typography>
         <div className={classes.btnGroup}>
         {
            isAuth
            ? <Button className={classes.button} variant="outlined" size='small' onClick={onLogOut}>
                  выйти
               </Button>
            :  <div >
                  <NavLink to='/login'>
                     <Button className={classes.button} variant="outlined" size='small'>
                         войти
                     </Button>
                  </NavLink>
                  <NavLink to='/registration'>
                  <Button className={classes.button} variant="outlined" size='small'>
                         регистрация
                     </Button>
                  </NavLink>
               </div>
         }
         </div>
      </Toolbar>
      </AppBar>
   )
}



export default Navbar
import React from 'react'
import { useSelector } from 'react-redux';
import {Switch, Redirect, Route} from 'react-router-dom'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import Main from '../Main/Main'




const Router = () => {
   const isAuth = useSelector(state => state.authReducer.isAuth)
   return (
      <React.Fragment>
         {
           !isAuth 
           ? (<Switch>
               <Route path="/registration" component={SignUp} />
               <Route path="/login" component={SignIn} />
               <Redirect to='login' />
           </Switch>)

           : (<Switch>
               <Route exact path="/" component={Main} />
               <Redirect to='/' />
           </Switch>)
         }
      </React.Fragment>
   )
}

export default Router
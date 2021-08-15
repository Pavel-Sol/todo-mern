import { useDispatch } from 'react-redux';
import { useState} from 'react';

import {login} from './../srore/actions/authActions'

const SignIn = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch()

   const loginHandler = (e) => {
      e.preventDefault();
      dispatch(login(email, password))
      // занулить поля
    };



   return (
      <div className='container'>
         <h3>Login</h3>
            <form action="" onSubmit={loginHandler}>
               <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' value={email}/>
               <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='password' value={password}/>
               <button type='submit'>войти</button>
            </form>
      </div>
   )
}

export default SignIn
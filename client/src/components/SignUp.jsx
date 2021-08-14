
import { useSelector, useDispatch } from 'react-redux';
import { useState} from 'react';

import {registration} from './../srore/actions/authActions'

const SignUp = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch()

   const registrationHandler = (e) => {
      e.preventDefault();
      dispatch(registration(email, password))
      // занулить поля
    };



   return (
      <div className='container'>
         <h3>Регистрация</h3>
            <form action="" onSubmit={registrationHandler}>
               <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' value={email}/>
               <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='password' value={password}/>
               <button type='submit'>зарегистрироваться</button>
            </form>
      </div>
   )
}

export default SignUp
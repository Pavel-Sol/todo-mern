import {NavLink} from 'react-router-dom'
import { useSelector} from 'react-redux';
import { useDispatch} from 'react-redux';


import {logOutAC} from './../srore/reducers/authReducer'

const Navbar = () => {

   const isAuth = useSelector((state) => state.authReducer.isAuth);
   const dispatch = useDispatch()

   const onLogOut = () => {
      dispatch(logOutAC())
      localStorage.removeItem('token')
   }

   return (
      <div className='navbar'>
         <div className="container">
           <div className="navbar-content">
            <div className="logo">
                  <h1>TODO</h1>
               </div>
              {
                 isAuth
                 ? <button onClick={onLogOut} >выйти</button>
                 :  <div className="btn-group">
                 <NavLink to='/login'>
                    <button>войти</button>
                 </NavLink>
                 <NavLink to='/registration'>
                    <button>регистрация</button>
                 </NavLink>
              </div>
              }
           </div>
         </div>
      </div>
   )
}

export default Navbar
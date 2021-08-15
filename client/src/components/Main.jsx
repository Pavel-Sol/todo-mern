import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {addTodo} from './../srore/actions/todoActions'


const Main = () => {
   const currentUser = useSelector(state => state.authReducer.currentUser)
   const [textTodo, setTextTodo] = useState('')
   const dispatch = useDispatch()

   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(addTodo({
         text: textTodo,
         userId: currentUser.id
      }))
   }

   return (
      <div className="container">
         <div>
            <form action="" onSubmit={handleSubmit}>
               <input type="text" placeholder='напишите задачу' value={textTodo} 
               onChange={(e) => setTextTodo(e.target.value)}/>
               <button type='submit'>добавить</button>
            </form>
         </div>
      </div>
   )
}

export default Main
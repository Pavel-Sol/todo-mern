import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {addTodo} from './../srore/actions/todoActions'


const Main = () => {
   const userId = useSelector(state => state.authReducer.currentUser.id)
   // console.log(userId)

   const [textTodo, setTextTodo] = useState('')
   const dispatch = useDispatch()

   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(addTodo({
         text: textTodo,
         userId
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
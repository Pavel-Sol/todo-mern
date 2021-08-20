import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';

import {addTodo, getTodo} from './../srore/actions/todoActions'


const Main = () => {
   const currentUser = useSelector((state) => state.authReducer.currentUser);
   const todos = useSelector(state => state.todoReducer.todos)
   console.log(todos)

   
   const [textTodo, setTextTodo] = useState('')
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getTodo(currentUser.id));
    }, [currentUser, dispatch]);

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
         <ul>
            {
               todos
               ? todos.map(item => {
                  return <li key={item._id}>
                     <p>
                        {item.text}
                     </p>
                     <button>удалить</button>
                     <input type="checkbox" defaultChecked={item.completed} name="" id="" />
                     <hr />
                  </li>
               })
               : <p>нет туду</p>
            }
         </ul>
      </div>
   )
}

export default Main
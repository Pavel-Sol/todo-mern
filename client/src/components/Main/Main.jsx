import { Button, Container, TextField } from '@material-ui/core';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';


import {addTodo, getTodos} from '../../srore/actions/todoActions'
import{useStyles} from './style'
import Todo from './../Todo/Todo'



const Main = () => {
   const classes = useStyles()
   const currentUser = useSelector((state) => state.authReducer.currentUser);
   const todos = useSelector(state => state.todoReducer.todos)

   const [textTodo, setTextTodo] = useState('')
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getTodos(currentUser.id));
    }, [currentUser, dispatch]);

   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(addTodo({
         text: textTodo,
         userId: currentUser.id,
         completed: false
      }))
      setTextTodo('')
   }

   return (
      <Container className={classes.container}>
         <form 
            className={classes.form}
            action="" onSubmit={handleSubmit}
            >
            <TextField
               id="standard-multiline-flexible"
               label="Напишите задачу"
               multiline
               maxRows={4}
               value={textTodo} 
               onChange={(e) => setTextTodo(e.target.value)}
            />
            <Button
               className={classes.btn}
               type='submit'variant="contained" color="primary">
               добавить
            </Button>
         </form>
         <div>
            {
               todos
               ? todos.map(item => {
                  return <Todo key={item._id} todo={item}/>
               })
               : <p>нет туду</p>
            }
         </div>
      </Container>
   )
}

export default Main
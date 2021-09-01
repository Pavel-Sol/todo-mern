import { Button, Card, Checkbox, TextField, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import {useState} from 'react'
import React from 'react'

import {deleteTodo, updateTodo} from './../../srore/actions/todoActions'
import{useStyles} from './style'



export default React.memo(
   function Todo ({todo}) {
   
      const classes = useStyles({isCompleted: todo.completed})
      const dispatch = useDispatch()
   
      const [isEdit, setIsEdit] = useState(false)
      const [inputText, setInputText] = useState(todo.text)
   
      const handleDelete = (id) => {
         dispatch(deleteTodo(id))
      }
   
      const handleComplete = (e) => {
         todo.completed = e.target.checked
         dispatch(updateTodo(todo)) 
      }
   
   
      const handleEdit = () => {
         setIsEdit(true)
      }
      
      const handleSave = (e) => {
         e.stopPropagation()
   
         if (todo.text === inputText) {
            setIsEdit(false)
            return
         }
   
         todo.text = inputText 
         dispatch(updateTodo(todo)) 
         setIsEdit(false) 
         
      }
   
      return (
         <Card 
            onClick={(e) => handleEdit(e)}
            variant="outlined"
            className={classes.card}
         >
            {
               isEdit
               ? <div className={classes.todoContainer}>
                  <TextField id="standard-basic"
                     size='small'
                     multiline
                     className={classes.textarea}
                     onChange={e => setInputText(e.target.value)}
                     autoFocus={true} type='text' value={inputText}
                  />
   
                  <Button 
                     onClick={(e) => handleSave(e)}
                     className={classes.btnSave}
                     variant="contained" color="primary" size='small'>
                        сохранить
                  </Button>
               </div>
               : <div className={classes.todoContainer}>
                  <Typography 
                     className={classes.todoText}
                     variant="body2" component="p">
                     {todo.text}
                  </Typography>
                  <div className={classes.btnGroup}
                     onClick={e => e.stopPropagation()}
                  >
                     <Checkbox
                        checked={todo.completed}
                        onChange={(e) => handleComplete(e)}
                        color="primary"
                     />
                     <DeleteIcon
                        onClick={() => handleDelete(todo._id)}
                        color="primary"
                        />
                  </div>
               </div>
            }
         </Card>
      )
   }
)

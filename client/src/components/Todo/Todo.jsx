import { Button, Card, Checkbox, Divider, TextField, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import {useState} from 'react'

import {deleteTodo, completeTodo} from './../../srore/actions/todoActions'
import{useStyles} from './style'

const Todo = ({todo}) => {
   // console.log(todo)
   const classes = useStyles()
   const dispatch = useDispatch()

   
   const [isEdit, setIsEdit] = useState(false)
   const [inputText, setInputText] = useState(todo.text)

   const handleDelete = (id) => {
      dispatch(deleteTodo(id))
   }

   const handleComplete = (e, id) => {
      dispatch(completeTodo(e.target.checked, id))
   }


   const handleEdit = () => {
      setIsEdit(true)
   }
   
   const handleSave = (id) => {
      console.log(id)
      console.log(inputText)
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
                  onClick={() => handleSave(todo._id)}
                  className={classes.btnSave}
                  variant="contained" color="primary" size='small'>
                     сохранить
               </Button>
            </div>
            : <div className={classes.todoContainer}>
               <Typography 
                  variant="body2" component="p">
                  {todo.text}
               </Typography>
               <div className={classes.btnGroup}
                  onClick={e => e.stopPropagation()}
               >
                  <Checkbox
                     checked={todo.completed}
                     onChange={(e) => handleComplete(e, todo._id)}
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

export default Todo
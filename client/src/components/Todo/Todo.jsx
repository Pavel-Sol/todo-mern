import { Card, Checkbox, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';


import {deleteTodo, completeTodo} from './../../srore/actions/todoActions'
import{useStyles} from './style'

const Todo = ({todo}) => {
   const classes = useStyles()
   const dispatch = useDispatch()
   

   const handleDelete = (id) => {
      dispatch(deleteTodo(id))
   }

   const handleComplete = (e, id) => {
      dispatch(completeTodo(e.target.checked, id))
   }

   return (
      <Card 
         variant="outlined"
         className={classes.todoContainer}
      >
         <Typography variant="body2" component="p">
             {todo.text}
         </Typography>
         <div className={classes.btnGroup}>
         <Checkbox
            defaultChecked={todo.completed}
            onChange={(e) => handleComplete(e, todo._id)}
            color="primary"
         />
         <DeleteIcon
            onClick={() => handleDelete(todo._id)}
            color="primary"
             />
         </div>
      </Card>
   )
}

export default Todo
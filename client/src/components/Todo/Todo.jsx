import { Card, Checkbox, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import{useStyles} from './style'

const Todo = ({todo}) => {
   const classes = useStyles()

   return (
      // <li key={todo._id}>
      //    <p>
      //       {todo.text}
      //    </p>
      //    <button>удалить</button>
      //    <input type="checkbox" defaultChecked={todo.completed} name="" id="" />
      //    <hr />
      // </li>

      <Card 
         variant="outlined"
         className={classes.todoContainer}
      >
         <Typography variant="body2" component="p">
             {todo.text}
         </Typography>
         <div className={classes.btnGroup}>
         <Checkbox
          color="primary"
         />
         <DeleteIcon color="primary"/>
         </div>
      </Card>
   )
}

export default Todo
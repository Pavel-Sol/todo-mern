import { CircularProgress, Container } from "@material-ui/core"
import {useStyles} from './style'

const Loader = () => {
   const classes = useStyles()

   return(
      <Container className={classes.container}>
         <CircularProgress color="secondary" />
      </Container>
   )
}

export default Loader
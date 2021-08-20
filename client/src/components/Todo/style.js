import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  todoContainer: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    maxWidth: 600,
    margin: '0px auto',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  btnGroup: {
    display: 'flex',
    alignItems: 'center',
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '100px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    margin: '0px auto',
  },
  btn: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
}));

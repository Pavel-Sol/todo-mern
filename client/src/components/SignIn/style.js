import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: '600px',
    margin: '0px auto',
    textAlign: 'center',
    marginTop: '100px',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 500,
    marginBottom: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 300,
    margin: '0px auto',
  },
  input: {
    marginBottom: theme.spacing(2),
  },
}));

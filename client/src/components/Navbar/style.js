import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    border: '1px solid #fff',
    color: '#fff',
    margin: '3px',
  },
}));

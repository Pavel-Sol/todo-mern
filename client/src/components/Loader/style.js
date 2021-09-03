import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1200',
  },
}));

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  mainContainer: {
    textAlign: 'center',
  },
  nav: {
    marginBottom: '3em',
    cursor: 'default',
  },
  searchArtist: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: '1em',
  },
  mainForm: {
    maxWidth: '800px',
    margin: '2em auto 0em',
    padding: '2em',
    border: '1px solid green',
  },
}));

export default useStyles;

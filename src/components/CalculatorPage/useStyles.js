import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  genericPadding: {
    padding: '2em',
  },
  genericMarginUpDown: {
    margin: '1em 0em',
  },
  divider: {
    marginTop: '2em',
    marginBottom: '2em',
  },
  genericCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  generalMarginTop: {
    marginTop: '1em',
  },
}));

export default useStyles;

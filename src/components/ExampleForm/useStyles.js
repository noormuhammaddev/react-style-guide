import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1.5em',
  },
  genericPaddingTop: {
    paddingTop: '0px',
  },
  whiteSpace: {
    whiteSpace: 'nowrap',
  },
}));

export default useStyles;

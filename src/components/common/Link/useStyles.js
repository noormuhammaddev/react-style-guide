import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  base: {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    cursor: 'pointer',

    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
    },
    '&:active, &:focus': {
      textDecoration: 'underline',
      outline: 'none',
    },
  },
  active: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

export default useStyles;

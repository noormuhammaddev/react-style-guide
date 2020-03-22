import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#66e0ff',
      main: '#00aeef',
      dark: '#007fbc',
      contrastText: '#f7f7f7',
    },
    secondary: {
      light: '#ffd27c',
      main: '#efa14d',
      dark: '#b8721e',
      contrastText: '#f7f7f7',
    },
    error: {
      light: '#fd5642',
      main: '#c31a18',
      dark: '#8a0000',
      contrastText: '#f7f7f7',
    },
  },
  typography: {
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
  },
});

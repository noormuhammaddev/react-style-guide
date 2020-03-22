import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../../utils/themeUtil';
import CalculatorPage from '../CalculatorPage';
import Drawer from '../Drawer';
import Footer from '../Footer';
import Header from '../Header';
import HomePage from '../HomePage';
import JobsPage from '../JobsPage';
import Modal from '../common/Modal';
import MusicPage from '../MusicPage';
import Snackbar from '../Snackbar';
import useStyles from './useStyles.js';

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main className={classes.mainContainer}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/calculator' component={CalculatorPage} />
            <Route path='/jobs' component={JobsPage} />
            <Route path='/music' component={MusicPage} />
          </Switch>
        </main>
        <Footer />
        <Drawer />
        <Modal />
        <Snackbar />
      </ThemeProvider>
    </Router>
  );
};

export default App;

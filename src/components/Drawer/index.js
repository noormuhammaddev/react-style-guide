import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import MuiDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { closeDrawer } from '../../redux/actions';
import { selectDrawerOpen } from '../../redux/selectors';
import Link from '../common/Link';
import useStyles from './useStyles.js';

const Drawer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectDrawerOpen);
  const onClose = () => dispatch(closeDrawer());
  // const { container } = props
  const classes = useStyles();

  return (
    <MuiDrawer
      // container={ container }
      variant='temporary'
      open={isOpen}
      onClose={onClose}
      classes={{ paper: classes.drawerPaper }}
    >
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button>
            <ListItemText
              primary={
                <Link to='/' unstyled className={classes.displayBlock}>
                  Home
                </Link>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={
                <Link
                  to='/calculator'
                  unstyled
                  className={classes.displayBlock}
                >
                  Calculator
                </Link>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={
                <Link to='/music' unstyled className={classes.displayBlock}>
                  Music
                </Link>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={
                <Link to='/jobs' unstyled className={classes.displayBlock}>
                  Jobs
                </Link>
              }
            />
          </ListItem>
        </List>
        <Divider />
      </div>
    </MuiDrawer>
  );
};

export default Drawer;

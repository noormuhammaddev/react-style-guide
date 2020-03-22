import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { fetchJobIds } from '../../redux/actions';
import {
  selectJobIds,
  selectHackerNewsProcessing,
} from '../../redux/selectors';
import Link from '../common/Link';
import useStyles from './useStyles.js';

const JobsPage = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobIds()).then((res) => console.log('got some job IDs', res));
  }, [dispatch]);

  const jobIds = useSelector(selectJobIds);
  const hnProcessing = useSelector(selectHackerNewsProcessing);
  const classes = useStyles();

  return (
    <Fade in>
      <Container>
        <div className={classes.mainContainer}>
          <nav className={classes.nav}>
            <Link to='/' nav exact activeStyle={{ color: 'green' }}>
              Home
            </Link>
            &nbsp;|&nbsp;
            <Link to='/jobs' nav>
              Jobs
            </Link>
            &nbsp;|&nbsp;
            <Link to='/music' nav>
              Music
            </Link>
          </nav>
          {hnProcessing && (
            <Typography variant='subtitle1'>
              Processing async request
            </Typography>
          )}
          {jobIds && (
            <Typography>
              Jobs data loaded.
              <br />
              {JSON.stringify(jobIds, null, 2)}
            </Typography>
          )}
        </div>
      </Container>
    </Fade>
  );
};

export default JobsPage;

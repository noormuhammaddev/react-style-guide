import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

import { requireArtist } from '../../redux/actions';
import Button from '../common/Button';
import Link from '../common/Link';
import TextInput from '../common/TextInput';
import ExampleForm from '../ExampleForm';
import useStyles from './useStyles.js';

const MusicPage = ({}) => {
  const dispatch = useDispatch();
  const getArtist = (artist) => dispatch(requireArtist(artist));

  const [artist, setArtist] = useState('');
  const artistData = useSelector((state) => state.music.artists[artist]);
  const classes = useStyles();

  return (
    <Fade in>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
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
              <p>Current artist: {artist || 'none'}</p>
              <div className={classes.searchArtist}>
                <TextInput
                  name='artist'
                  placeholder='Search for an artist'
                  onChange={(e) => setArtist(e.target.value)}
                  // Props can be passed without being explicitly defined in the component
                  maxLength={40}
                />
                <span className={classes.marginLeft}>
                  <Button onClick={() => getArtist(artist)}>Get artist</Button>
                </span>
              </div>
              {artistData && <p>{artistData.primaryGenreName}</p>}
              <div className={classes.mainForm}>
                <ExampleForm />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default MusicPage;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';

import { showModal, showSnackbar } from '../../redux/actions';
import Button from '../common/Button';
import Link from '../common/Link';
import TextInput from '../common/TextInput';
import useStyles from './useStyles.js';

const CalculatorPage = ({}) => {
  const dispatch = useDispatch();
  const showExampleModal = () => dispatch(showModal('example', { dataPoint1: true, dataPoint2: false }));
  const showSnackbarDemo = () => dispatch(showSnackbar());
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [yearlyRevenue, setYearlyRevenue] = useState('0');
  const [customerRetention, setCustomerRetention] = useState('0');
  const classes = useStyles();

  return (
    <Fade in>
      <Container>
        <div>
          <Paper className={classes.genericPadding}>
            <div className={classes.genericCenter}>
              <Typography gutterBottom>
                How often do you bill your customers?
              </Typography>
              <ToggleButtonGroup
                value={billingCycle}
                exclusive
                onChange={(e, v) => setBillingCycle(v)}
              >
                <ToggleButton value='monthly'>
                  <Typography>Monthly</Typography>
                </ToggleButton>
                ,
                <ToggleButton value='annually'>
                  <Typography>Annually</Typography>
                </ToggleButton>
                ,
                <ToggleButton value='once'>
                  <Typography>One time fee</Typography>
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div
              className={`${classes.genericCenter} ${classes.genericMarginUpDown}`}
            >
              <Typography>
                What is your average yearly revenue per customer?
              </Typography>
              <TextInput
                name='yearly-revenue'
                placeholder='0.00'
                onChange={(e, v) => setYearlyRevenue(v)}
              />
            </div>
            <div className={classes.genericCenter}>
              <Typography>
                What is the average number of years a customer stays with you?
              </Typography>
              <TextInput
                name='customer-retention'
                placeholder='0'
                onChange={(e, v) => setCustomerRetention(v)}
              />
            </div>
            <div
              className={`${classes.genericCenter} ${classes.genericMarginUpDown}`}
            >
              <Typography variant='h6'>
                <strong>Customer Lifetime Revenue</strong>
              </Typography>
              <Typography variant='h6'>
                <strong>50 bucks</strong>
              </Typography>
            </div>
            <Divider className={classes.divider} />
            <div className={classes.genericCenter}>
              <Typography>
                What percentage of revenue are you willing to spend on a
                marketing channel to acquire a new customer?
              </Typography>
              <TextInput
                name='customer-acquisition-percentage'
                placeholder='0'
                onChange={(e, v) => setCustomerRetention(v)}
              />
            </div>
            <div
              className={`${classes.genericCenter} ${classes.genericMarginUpDown}`}
            >
              <Typography variant='h6'>
                <strong>Target Customer Acquisition Cost</strong>
              </Typography>
              <Typography variant='h6'>
                <strong>50 bucks</strong>
              </Typography>
            </div>
            <Divider className={classes.divider} />
            <div
              className={`${classes.genericCenter} ${classes.generalMarginTop}`}
            >
              <Typography>
                What percentage of qualified leads become customers (close
                rate)?
              </Typography>
              <TextInput
                name='customer-acquisition-percentage'
                placeholder='0'
                onChange={(e, v) => setCustomerRetention(v)}
              />
            </div>
            <div
              className={`${classes.genericCenter} ${classes.generalMarginTop}`}
            >
              <Typography>
                What percentage of web leads are qualified for sales
                (qualification rate)?
              </Typography>
              <TextInput
                name='customer-acquisition-percentage'
                placeholder='0'
                onChange={(e, v) => setCustomerRetention(v)}
              />
            </div>
            <div
              className={`${classes.genericCenter} ${classes.generalMarginTop}`}
            >
              <Typography variant='h6'>
                <strong>Target Cost Per Lead (CPL)</strong>
              </Typography>
              <Typography variant='h6'>
                <strong>50 bucks</strong>
              </Typography>
            </div>
            <Divider className={classes.divider} />
            <div className={classes.genericCenter}>
              <Typography>
                What percentage of website visitors fill out a form (Conversion
                Rate)?
              </Typography>
              <TextInput
                name='customer-acquisition-percentage'
                placeholder='0'
                onChange={(e, v) => setCustomerRetention(v)}
              />
            </div>
          </Paper>
          <div className={classes.generalMarginTop}>
            <Button size='large' fullWidth onClick={() => {}}>
              Get my quote
            </Button>
          </div>
        </div>
      </Container>
    </Fade>
  );
};

export default CalculatorPage;

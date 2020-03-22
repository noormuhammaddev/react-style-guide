import React from 'react';
import PropTypes from 'prop-types';

const ExampleModal = ({ data }) => (
  <div>
    <h4>Modal props for ExampleModal</h4>
    <p>{data.dataPoint1.toString()}<br />{data.dataPoint2.toString()}</p>
  </div>
);

ExampleModal.propTypes = {
	data: PropTypes.string
};
export default ExampleModal;
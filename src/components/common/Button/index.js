import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@material-ui/core/Button';
import useStyles from './useStyles.js';

const Button = ({
  children,
  color = 'primary',
  onClick,
  type = 'button',
  value,
  variant = 'contained',
  ...props
}) => {
  const classes = useStyles();

  return (
    <MuiButton
      {...props}
      type={type}
      color={color}
      onClick={onClick}
      value={value}
      variant={variant}
      classes={{ root: classes.button }}
      style={{ ...props.style }}
    >
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  style: PropTypes.object,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import useStyles from './useStyles.js';

const Link = ({
  actionLink,
  activeStyle,
  children,
  exact = false,
  external = false,
  nav = false,
  onClick,
  to,
  unstyled = false,
  ...props
}) => {
  const classes = useStyles();

  return external ? (
    <a
      {...props}
      href={to}
      onClick={onClick}
      className={unstyled ? classes.base : classes.link}
    >
      {children}
    </a>
  ) : actionLink ? (
    <span
      {...props}
      onClick={onClick}
      className={unstyled ? classes.base : classes.link}
    >
      {children}
    </span>
  ) : nav ? (
    <NavLink
      {...props}
      exact
      to={to}
      onClick={onClick}
      className={unstyled ? classes.base : classes.link}
      activeClassName={classes.active}
      activeStyle={{ ...activeStyle, fontWeight: 'bold', cursor: 'default' }}
    >
      {children}
    </NavLink>
  ) : (
    <RouterLink
      {...props}
      to={to}
      onClick={onClick}
      className={unstyled ? classes.base : classes.link}
    >
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  actionLink: PropTypes.bool,
  activeStyle: PropTypes.object,
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool,
  external: PropTypes.bool,
  nav: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  unstyled: PropTypes.bool,
};

export default Link;

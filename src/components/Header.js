import React from 'react';
import PropTypes from 'prop-types';

import logo from '../logo.svg';

const Header = props => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>{props.title}</h2>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;

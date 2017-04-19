import React from 'react';

import logo from '../logo.svg';

const Header = props => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>{props.title}</h2>
  </div>
);

export default Header;

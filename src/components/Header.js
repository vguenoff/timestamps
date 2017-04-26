import React from 'react';
import Clock from './Clock';

const Header = (props) => {
  return (
    <div className="App-header">
      <Clock />
      <h2>{props.title}</h2>
    </div>
  );
};

export default Header;

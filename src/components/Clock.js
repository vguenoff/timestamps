import React from 'react';

const Clock = () => {
  return (
    <div className="Clock">
      <div className="clock-face">
        <div className="hand hand-hour" />
        <div className="hand min-hand" />
        <div className="hand second-hand" />
      </div>
    </div>
  );
};

export default Clock;

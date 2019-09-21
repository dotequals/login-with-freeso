import React from 'react';

function Icon(props) {
  const { icon } = props;

  return icon ? (
    <div className="icon" style={{ backgroundImage: `url(${icon})` }} />
  ) : (
    <div className="icon" />
  );
}

export default Icon;
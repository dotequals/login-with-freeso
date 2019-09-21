import React from 'react';

function Permission(props) {
  const { permissionLevel } = props;

  return (
    <div className="Permission">
      <div className={`permissionIcon ${permissionLevel && permissionLevel > 1 ? 'warning' : 'ok'}`} />
      <div className="permissionText">
        {props.children}
      </div>
    </div>
  )
}

export default Permission;
import React from 'react';

import Permission from './Permission';

import mapPermission from './utils/mapPermission';

function PermissionList(props) {
  const { permissionLevel } = props;
  return (
    <div className="permissionsList">
      <Permission>
        <div>Your FreeSO username</div>
        <div className="detail">ex. JamMan2001</div>
      </Permission>
      <Permission>
        <div>Your FreeSO user ID</div>
        <div className="detail">ex. 373376</div>
      </Permission>
      <Permission permissionLevel={permissionLevel}>
        <div>{mapPermission(permissionLevel)} access to your FreeSO account</div>
        <div><span className="detail">ex. {mapPermission(permissionLevel)} avatar data</span>
        { permissionLevel > 1 ? <span style={{ color: '#c93507'}}> (Be sure you trust this application)</span> : ''}</div>
      </Permission>
    </div>
  )
}

export default PermissionList;

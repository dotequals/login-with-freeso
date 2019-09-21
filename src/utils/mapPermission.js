const permissionMap = {
  1: 'Read',
  2: 'Update',
  3: 'Write',
  4: 'Delete',
};

function mapPermission(permissionLevel) {
  return permissionMap[permissionLevel] || 'Invalid Permission';
}

export default mapPermission;
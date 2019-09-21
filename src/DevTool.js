import React from 'react';

function Token(props) {
  const { location } = props;
  const searchParams = new URLSearchParams(location.search);
  return (
    <div className="column">
      <h2>Dev Tool</h2>
      <div>Use this page's URL as your redirect parameter to see a sample token and when it will expire.</div>
      <h3>access_token</h3>
      <input readOnly type="text" value={searchParams.get('token') || ''} />
      <div style={{ color: '#c93507', marginTop: '0.5rem' }}>
        Do not share this token with others.
      </div>
      <h3>expiration_date</h3>
      <input readOnly type="text" value={searchParams.get('expiration_date') || ''} />
    </div>
  );
}

export default Token;
import React, { PureComponent } from 'react';

class URLHelper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      redirect: props.redirect,
      icon: props.icon,
      permissionLevel: props.permissionLevel,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  render() {
    const { name, redirect, icon, permissionLevel } = this.state;
    const permissionLevelNumber = Number.parseInt(permissionLevel);
  
    return (
      <div>
        <h2>Oops</h2>
        <p>
          It looks like your URL has missing/invalid parameters. Please contact the developer of the application and let them know.
        </p>
        <p>If you are the developer, let's get your link updated following the steps below.</p>
        <hr />
        <div className="column">
          <h3 className={!name ? 'error' : ''}>name (required)</h3>
          <div>
            The name field lets users know what application they're giving their token too. Be sure to use something players can easily recognize.
          </div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={name} onChange={this.handleChange} />
        </div>
        <div className="column">
          <h3 className={(!permissionLevelNumber || permissionLevelNumber < 1 || permissionLevelNumber > 4) ? 'error' : ''}>permission_level (required)</h3>
          <div>
            The permission level is a number that corresponds to read (1), update (2), create (3), and delete (4) access to a user's account. Currently only read is necessary as there are no API endpoints for the others. 
          </div>
          <label htmlFor="permissionLevel">Permission Level (1-4)</label>
          <input id="permissionLevel" type="text" value={permissionLevel} onChange={this.handleChange} />
        </div>
        <div className="column">
          <h3 className={!redirect ? 'error' : ''}>redirect (required)</h3>
          <div>
            The redirect field is the URL you'd like the user sent to with their token. Make sure any special characters are URL encoded if creating the authentication URL manually.
          </div>
          <div style={{ marginTop: '1rem' }}>You can use {window.location.origin}/dev if you just want to get a token for testing.</div>
          <label htmlFor="redirect">Redirect</label>
          <input id="redirect" type="text" value={redirect} onChange={this.handleChange} />
        </div>
        <div className="column">
          <h3>icon (optional)</h3>
          <div>
            An image URL to go along with your request. Make sure any special characters are URL encoded if creating the authentication URL manually.
          </div>
          <div style={{ marginTop: '1rem' }}>Square images will have the best results.</div>
          <label htmlFor="icon">Icon</label>
          <input id="icon" type="text" value={icon} onChange={this.handleChange} />
        </div>
        <hr />
        <div className="column">
          <h3 className={(!name || !redirect || permissionLevel < 1 || permissionLevel > 4) ? 'error' : ''}>Login with FreeSO URL</h3>
          <input type="text" readOnly value={`${window.location.origin}?name=${encodeURIComponent(name)}&permission_level=${permissionLevel}&redirect=${encodeURIComponent(redirect)}${icon ? `&icon=${encodeURIComponent(icon)}` : ''}`} />
        </div>
      </div>
    );
  }
}

export default URLHelper;
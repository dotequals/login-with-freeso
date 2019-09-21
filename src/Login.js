import React, { PureComponent } from 'react';

import { ReactComponent as ErrorIcon } from './assets/images/error.svg';
import Icon from './Icon';
import PermissionList from './PermissionList';
import URLHelper from './URLHelper';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    const { location } = props;
    const searchParams = new URLSearchParams(location.search);
    this.state = {
      error: '',
      icon: searchParams.get('icon') ? decodeURI(searchParams.get('icon')) : '',
      name: searchParams.get('name') || '',
      password: '',
      permissionLevel: searchParams.get('permission_level') || '',
      redirect: searchParams.get('redirect') ? decodeURI(searchParams.get('redirect')) : '',
      username: '',
    };

    this.cancel = this.cancel.bind(this);
    this.authorize = this.authorize.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async authorize(e) {
    e.preventDefault();
    const { password, permissionLevel, redirect, username } = this.state;
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('permission_level', permissionLevel);
    try {
      const response = await fetch('https://api.freeso.org/userapi/oauth/token', {
        body: formData,
        method: 'POST',
      });
      const data = await response.json();
      if (data.error) {
        this.setState({ error: data.error_description });
      } else {
        let redirectWithToken = new URL(redirect);
        const searchParams = new URLSearchParams(redirectWithToken.search);
        searchParams.append('token', data.access_token);
        searchParams.append('expiration_date', Date.now() + (data.expires_in * 1000));
        redirectWithToken.search = searchParams;
        window.location = redirectWithToken;
      }
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  cancel(e) {
    e.preventDefault();
    const { redirect } = this.state;
    window.location = redirect;
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({ [id]: value});
  }

  render() {
    const { error, name, icon, redirect, permissionLevel, password, username } = this.state;

    const renderError = error ? (
      <div className="error">
        <ErrorIcon /> {error}
      </div>
    ) :  '';

    return name && redirect && permissionLevel >= 1 && permissionLevel <= 4 ? (
      <div>
        <div className="profileGroup">
          <Icon icon={icon} />
          <div className="profileText">
            <h2 className="name">{name}</h2>
            <div>
              would like to access the following
            </div>
          </div>
        </div>
        <PermissionList permissionLevel={permissionLevel} />
        <div>Once authorized, you will be redirected to <a href={redirect}>{redirect}</a></div>
        <hr />
        {renderError}
        <form onSubmit={this.authorize}>
          <label htmlFor="username">Username</label>
          <input autoComplete="username" id="username" type="text" value={username} onChange={this.handleChange} />
          <label htmlFor="password">Password</label>
          <input autoComplete="current-password" id="password" type="password" value={password} onChange={this.handleChange} />
          <div className="noAccount">
            <a href="https://beta.freeso.org" target="_blank" rel="noopener noreferrer">I don't have a FreeSO account</a>
          </div>
          <div className="buttonGroup">
            <button type="button" onClick={this.cancel}>Cancel</button>
            <button disabled={username.length === 0 || password.length === 0} type="submit">Authorize</button>
          </div>
        </form>
      </div>
    ) : <URLHelper name={name} redirect={redirect} icon={icon} permissionLevel={permissionLevel} />;
  }

}

export default Login;
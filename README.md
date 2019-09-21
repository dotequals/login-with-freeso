# login-with-freeso
Client-side OAuth token provider for FreeSO to make protected API calls such as [Get Avatars By User ID](https://github.com/riperiperi/FreeSO/wiki/Public-API#get-avatars-by-user-id-protected).

## Getting Started
1. `git clone https://github.com/dotequals/login-with-freeso`
2. `cd login-with-freeso && npm install`
3. `npm start`

## URL Specification

### Parameters
- `name` - The name of your application/service
- `redirect` - Where you'd like the client to redirect to after logging in
- `permission_level` - The access level you need to a user's FreeSO account (1 - Read, 2 - Update, 3 - Create, 4 - Delete)
- `icon` (optional) - An image to go alongside your request (square images work best).

### Sample URL
[http://localhost:3000?name=Login%20with%20FreeSO%20Test&permission_level=1&redirect=http%3A%2F%2Flocalhost%3A3000%2Fdev](http://localhost:3000?name=Login%20with%20FreeSO%20Test&permission_level=1&redirect=http%3A%2F%2Flocalhost%3A3000%2Fdev)

### Redirect Parameters
- `token` - The JWT token you can use to authenticate protected requests with
- `expiration_date` - The timestamp for when the token will no longer work to authenticate queries (1 hour after request).
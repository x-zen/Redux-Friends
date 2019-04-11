import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>LOGIN</h2>

        <form>
          <h3>Username:</h3>
          <input
            type='text'
            name='username'
            placeholder='Username' />
          <h3>Password:</h3>
          <input
            type='text'
            name='password'
            placeholder='Password' />
          <br />
          <input
            type='submit'
            value='Sign In!' />
        </form>
      </div>
    )
  }
}

export default Login;

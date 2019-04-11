import React from 'react';
import { connect } from 'react-redux';

import { logingIn } from '../../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  }

  handleLogin = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  }

  logingIn = e => {
    e.preventDefault();
    this.props.logingIn(this.state.credentials)
      .then(() => {
        this.props.history.push('/friends')
      })
  }

  render() {
    return (
      <div>
        <h2>LOGIN</h2>

        <form onSubmit={ this.logingIn }>
          <h3>Username:</h3>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={ this.state.credentials.username }
            onChange={ this.handleLogin } />
          <h3>Password:</h3>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={ this.state.credentials.password }
            onChange={ this.handleLogin } />
          <br />
          <button>Sign In!</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  {logingIn}
)(Login);

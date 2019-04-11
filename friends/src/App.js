import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import LockRoute from './comps/Auth/LockRoute.js'
import Login from './comps/Auth/Login.js';
import FriendsList from './comps/FriendsList/FriendsList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Friends GUI</h2>

        <Switch>
          <Route exact path='/' component={ Login } />
          <LockRoute path='/friends' component={ FriendsList } />
        </Switch>
      </div>
    );
  }
}

export default App;

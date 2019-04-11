import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './comps/Auth/Login.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Friends GUI</h2>

        <Switch>
          <Route exact path='/' component={ Login } />
        </Switch>
      </div>
    );
  }
}

export default App;

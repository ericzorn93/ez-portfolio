import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Component Imports
import Navigation from './components/sub-components/Navigation';
import Home from './components/main-components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
            <Route exact path={'/'} component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;

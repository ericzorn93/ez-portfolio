import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Component Imports
import Home from './components/main-components/Home';
import About from './components/main-components/About';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/about'} component={About} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Navigation from '../sub-components/Navigation';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <h1>About Page</h1>
      </React.Fragment>
    )
  }
}

export default About;
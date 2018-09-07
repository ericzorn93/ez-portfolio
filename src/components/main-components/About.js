import React, { Component } from 'react';
import Navigation from '../sub-components/Navigation';
import '../../assets/css/about.css';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation sidebarMarginTop={-20} profileImgMarginLeft={2}/>
        <h1>About Page</h1>
      </React.Fragment>
    )
  }
}

export default About;
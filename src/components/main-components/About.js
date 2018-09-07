import React, { Component } from 'react';
import Navigation from '../sub-components/Navigation';
import '../../assets/css/about.css';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation sidebarMarginTop={-10} profileImgMarginLeft={2}/>
        <div className="row">
          <div className="container">
            <h1 className="about-header text-center">About Me / Skills</h1>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default About;
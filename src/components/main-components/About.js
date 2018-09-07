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
            <section className="education-section">
              <h3 className="education-header">Education</h3>
              <div className="schools container">
                <div className="info-card">
                  <h4 className="about-label">
                  University of Denver - M.S. Information &amp; Communications Technology <span>Concentration: Web Design &amp; Development</span>
                  </h4>
                  <p className="about-info">Earned August 2018</p>
                  <p className="about-info">Focused on Full-Stack Web Design and Development - Cumulative GPA: 3.94</p>
                </div>

                <div className="info-card">
                  <h4 className="about-label">
                  Quinnipiac University - B.A. Interactive Digital Design
                  </h4>
                  <p className="about-info">Earned May 2017</p>
                  <p className="about-info">Focused on UX/UI and Front-End Web Design and Development - Cumulative GPA: 3.40</p>
                  <p className="about-info">Founding Father of Beta Theta Pi Fraternity: Eta Sigma Chapter</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default About;
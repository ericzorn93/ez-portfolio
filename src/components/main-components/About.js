import React, { Component } from 'react';
import Navigation from '../sub-components/Navigation';
import '../../assets/css/about.css';
import { ProgressBar } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation sidebarMarginTop={-10} profileImgMarginLeft={2}/>
        <div className="row">
          <div className="container">
            <h1 className="about-header text-center">About Me / Skills</h1>
            <section className="education-section">
              <h3 className="section-header-text">Education</h3>
              <div className="schools container">
                {/* University of Denver */}
                <div className="info-card">
                  <h4 className="about-label">
                  University of Denver - M.S. Information &amp; Communications Technology <span>Concentration: Web Design &amp; Development</span>
                  </h4>
                  <p className="about-info">Earned August 2018</p>
                  <p className="about-info">Focused on Full-Stack Web Design and Development - Cumulative GPA: 3.94</p>
                </div>

                {/* Quinnipiac University */}
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
              <br/>
            <section className="skills">
              <h3 className="section-header-text">Skills</h3>
              <div className="progress-bars container">
                  <label className={"progressbar-label"}>HTML5:</label>
                  <ProgressBar now={95} label={"HTML 5"} bsStyle={"warning"} />

                  <label className="progressbar-label">CSS3</label>
                  <ProgressBar now={90} label={"CSS3"} bsStyle={"warning"} />

                  <label className="progressbar-label">JavaScript (ES6, ES7, ES8), jQuery, React, NodeJS, Angular, ExpressJS</label>
                  <ProgressBar>
                    <ProgressBar bsStyle={"warning"} now={50} key={1} label={"Vanilla JS"}/>
                    <ProgressBar bsStyle={"success"} now={20} key={2} label={"jQuery"}/>
                    <ProgressBar bsStyle={"warning"} now={20} key={3} label={"React JS"} />
                    <ProgressBar bsStyle={"success"} now={5} key={4} label={"NodeJS"} />
                    <ProgressBar bsStyle={"warning"} now={1} key={5} label={"Angular JS"} />
                    <ProgressBar bsStyle={"success"} now={3} key={6} label={"Express JS"} />
                  </ProgressBar>

                  <label className={"progressbar-label"}>Python &amp; Django Framework</label>
                  <ProgressBar now={60} label={"Python & Django"} bsStyle={"warning"}/>

                  <label className={"progressbar-label"}>Ruby &amp; Rails Framework</label>
                  <ProgressBar now={65} label={"Ruby & Rails"} bsStyle={"warning"}/>

                  <label className={"progressbar-label"}>PHP</label>
                  <ProgressBar now={70} label={"PHP"} bsStyle={"warning"}/>

                  <label className={"progressbar-label"}>Relational Database Management Systems (RDBMS)</label>
                  <ProgressBar>
                    <ProgressBar bsStyle={"warning"} label={"MySQL"} now={33.33} />
                    <ProgressBar bsStyle={"success"} label={"PostgreSQL"} now={33.33} />
                    <ProgressBar bsStyle={"warning"} label={"SQL Server"} now={33.33} />
                  </ProgressBar>

                  <label className={"progressbar-label"}>NoSQL Databases</label>
                  <ProgressBar now={60} label={"MongoDB"} bsStyle={"warning"}/>
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default About;
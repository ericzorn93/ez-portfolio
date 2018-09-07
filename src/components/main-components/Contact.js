import React, { Component } from 'react'
import Navigation from "../sub-components/Navigation";

class Contact extends Component {
  render() {
    return (
      <div>
          <Navigation sidebarMarginTop={-20} profileImgMarginLeft={5}/>
        <h1>Contact</h1>
      </div>
    )
  }
}

export default Contact;
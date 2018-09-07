import React, { Component } from 'react';
import ProfilePicture from '../../assets/img/profile-picture.jpg';
import { Link } from 'react-router-dom';
import '../../assets/css/navigation.css';


class Navigation extends Component {

  state = {
      sidebarOpen: false
  }; 

  toggleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }; 

  handleLinkToggle = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  render() {
    const { sidebarOpen } = this.state;  
    return (
        <nav className={sidebarOpen ? "sidebar active" : "sidebar"} style={{marginTop: this.props.sidebarMarginTop}}>
            <button className="toggle-menu-btn" onClick={this.toggleSidebar}>
                &#9776;
            </button>
            <h1 className={'nav-title'}>Eric Zorn<i className="fas fa-code"></i></h1>
            <ul>
                <img src={ProfilePicture} alt="profile-pic" className="profile-pic" style={{marginLeft: this.props.profileImgMarginLeft}}/>
                <li><Link to={'/'} onClick={this.handleLinkToggle}>Home</Link></li>
                <li><Link to={'/about'} onClick={this.handleLinkToggle}>About</Link></li>
                <li><Link to={'/contact'} onClick={this.handleLinkToggle}>Contact Me</Link></li>
            </ul>
        </nav>
    )
  }
}

export default Navigation;
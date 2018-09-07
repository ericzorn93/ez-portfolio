import React, { Component } from 'react';
import ProfilePicture from '../../assets/img/profile-picture.jpg';
import '../../assets/css/navigation.css';
import { Link } from 'react-router-dom';


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
        <nav className={sidebarOpen ? "sidebar active" : "sidebar"}>
            <button className="toggle-menu-btn" onClick={this.toggleSidebar}>
                &#9776;
            </button>
            <ul>
                <img src={ProfilePicture} alt="profile-pic" className="profile-pic"/>
                <li><Link to={'/'} onClick={this.handleLinkToggle}>Home</Link></li>
                <li><Link to={'/about'} onClick={this.handleLinkToggle}>About</Link></li>
                <li><Link to={'/contact'} onClick={this.handleLinkToggle}>Contact</Link></li>
            </ul>
        </nav>
    )
  }
}

export default Navigation;
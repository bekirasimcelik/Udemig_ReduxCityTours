import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { favourites = [] } = this.props;
    const { isOpen } = this.state;

    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">City Tour</Link>
        </div>
        <button className="nav-toggle" onClick={this.handleToggle}>
          <i className="fas fa-bars"></i>
        </button>
        <div className="nav-center">
          <ul className={`nav-links ${isOpen ? "show-nav" : ""}`}>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tours" className="nav-link">
                Tours
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/favourites" className="nav-link">
                Favourites ({favourites.length})
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </div>
      </nav>
    );
  }
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-container">
        <div className="Navbar-container-left">
          <span className="Navbar-items">RS</span>
          <NavLink to='/' exact className="nav-link" activeClassName="active">
            <p className="Navbar-items">Home</p>
          </NavLink>
          <NavLink to='/course' exact className="nav-link" activeClassName="active" >
            <p className="Navbar-items">Course</p>
          </NavLink>
          <NavLink to='/events' exact className="nav-link" activeClassName="active">
            <p className="Navbar-items">Events</p>
          </NavLink>
          <NavLink to='/workshop' exact className="nav-link" activeClassName="active">
            <p className="Navbar-items">Workshop</p>
          </NavLink>
          <NavLink to='/blogs' exact className="nav-link" activeClassName="active">
            <p className="Navbar-items">Blogs</p>
          </NavLink>
          <NavLink to='/about' exact className="nav-link" activeClassName="active">
            <p className="Navbar-items">About us</p>
          </NavLink>
        </div>
        <div className="Navbar-container-right">
          <NavLink to='/help' exact className="nav-link" activeClassName="active">
            <p className="Navbar-items">Help</p>
          </NavLink>
          <NavLink to='/profile' exact className="nav-link" activeClassName="active">
            <p className="Navbar-items">Login</p>
          </NavLink>
          <button className="try-free-button">Try for free</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

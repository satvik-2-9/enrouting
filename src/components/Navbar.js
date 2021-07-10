import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div class="Navbar">
      <div class="Navbar-container">
        <div class="Navbar-container-left">
          <span class="Navbar-items">RS</span>
          <p class="Navbar-items active">Home</p>
          <p class="Navbar-items">Course</p>
          <p class="Navbar-items">Events</p>
          <p class="Navbar-items">Workshop</p>
          <p class="Navbar-items">Blogs</p>
          <p class="Navbar-items">About us</p>
        </div>
        <div class="Navbar-container-right">
          <p class="Navbar-items">Help</p>
          <p class="Navbar-items">Login</p>
          <button class="try-free-button">Try for free</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

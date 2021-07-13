import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const history = useHistory();
  return (
    <div className="ProfilePage">
      <Navbar />
      <div className="ProfilePage-title-container">
        <div className="ProfilePage-title-row">
          <h1>Pradeep Tekale</h1>
          <span onClick={() => history.push('/profile/edit')}>Edit my profile</span>
        </div>
        <div className="contact-details-div">
          <span className="profile-name">9730488258</span>
          <span>impradeep@gmail.com</span>
        </div>
      </div>
      <div className="Profile-card-container">
        <div className="Profile-card first-card">
          <h3>About Me</h3>
          <div className="Profile-card-content-div">
            <div className="Profile-card-column-div">
              <span>Name</span>
              <span>Email ID</span>
              <span>Number</span>
              <span>Address</span>
            </div>
            <div className="Profile-card-column-div col-values-div">
              <span>Pradeep Tekale</span>
              <span>impradeep@gmail.com</span>
              <span>9730488258</span>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
            </div>
          </div>
        </div>
        <div className="Profile-card">
          <h3>Education</h3>
          <div className="Profile-card-content-div">
            <div className="Profile-card-column-div">
              <span>Standard of student</span>
              <span>School Name</span>
            </div>
            <div className="Profile-card-column-div col-values-div">
              <span>8th standard</span>
              <span>Gandhi High School</span>
            </div>
          </div>
        </div>
        <div className="Profile-card">
          <h3>Security</h3>
          <div className="Profile-card-content-div">
            <div className="Profile-card-column-div">
              <span>Password</span>
            </div>
            <div className="Profile-card-column-div col-values-div">
              <span>************</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;

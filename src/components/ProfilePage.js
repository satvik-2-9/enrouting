import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const history = useHistory();

  const { userData } = useSelector((store) => store.userReducer);

  return (
    <div className="ProfilePage">
      <Navbar activeMenuItem={'profile'} />
      <div className="ProfilePage-title-container">
        <div className="ProfilePage-title-row">
          <h1>{userData.firstname} {userData.lastname}</h1>
          <span onClick={() => history.push('/profile/edit')}>Edit my profile</span>
        </div>
        <div className="contact-details-div">
          <span className="profile-name">{userData.phone}</span>
          <span>{userData.email}</span>
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
              <span>{userData.firstname} {userData.lastname}</span>
              <span>{userData.email}</span>
              <span>{userData.phone}</span>
              <span>{userData.address}</span>
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
              <span>{userData.standard}th standard</span>
              <span>{userData.school}</span>
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

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/EditProfilePage.css';

const initialData = {
  name: 'Pradeep Tekale',
  email: 'impradeep@gmail.com',
  number: '9730488258',
  address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  standard: '8th standard',
  school: 'Gandhi High School',
  password: 'pradeep619',
  confirmPassword: 'pradeep619',
}

const EditProfilePage = () => {
  const history = useHistory();
  const [details, setDetails] = useState(initialData);

  const handleChange = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
  };

  return (
    <div className="EditProfilePage">
      <Navbar />
      <div className="EditProfilePage-title-container">
        <h1>Edit profile</h1>
      </div>
      <div className="EditProfile-card-container">
        <div className="EditProfile-card first-card">
          <h3>About Me</h3>
          <div className="EditProfile-card-content-div">
            <div className="EditProfile-card-content-row">
              <div className="EditProfile-card-content-col">
                <p>Name</p>
                <input
                  name="name"
                  type="text"
                  value={details.name}
                  onChange={handleChange}
                />
              </div>
              <div className="EditProfile-card-content-col">
                <p>Email ID</p>
                <input
                  name="email"
                  type="text"
                  value={details.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="EditProfile-card-content-row">
              <div className="EditProfile-card-content-col">
                <p>Email ID</p>
                <input
                  name="email"
                  type="text"
                  value={details.email}
                  onChange={handleChange}
                />
              </div>
              <div className="EditProfile-card-content-col">
                <p>Number</p>
                <input
                  name="number"
                  type="tel"
                  value={details.number}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="EditProfile-card-content-row">
              <div className="EditProfile-card-content-col address-col">
                <p>Address</p>
                <input
                  name="address"
                  type="text"
                  value={details.address}
                  className="address-input"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="EditProfile-card">
          <h3>Education</h3>
          <div className="EditProfile-card-content-div">
            <div className="EditProfile-card-content-row">
              <div className="EditProfile-card-content-col">
                <p>Standard of student</p>
                <input
                  name="standard"
                  type="text"
                  value={details.standard}
                  onChange={handleChange}
                />
              </div>
              <div className="EditProfile-card-content-col">
                <p>School Name</p>
                <input
                  name="school"
                  type="text"
                  value={details.school}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="EditProfile-card">
          <h3>Security</h3>
          <div className="EditProfile-card-content-div">
            <div className="EditProfile-card-content-row">
              <div className="EditProfile-card-content-col">
                <p>Password</p>
                <input
                  name="password"
                  type="password"
                  value={details.password}
                  onChange={handleChange}
                />
              </div>
              <div className="EditProfile-card-content-col">
                <p>Confirm password</p>
                <input
                  name="confirmPassword"
                  type="password"
                  value={details.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="EditProfile-button-container">
        <button onClick={() => history.push('/profile')} className="cancel-button">
          Cancel
        </button>
        <button onClick={() => history.push('/profile')} className="save-button">
          Save changes
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfilePage;

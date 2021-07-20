import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

import { updateUserDetails } from '../redux/actions/userActions';

import '../styles/EditProfilePage.css';

const EditProfilePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userData } = useSelector((store) => store.userReducer);

  const initialData = {
    ...userData, password: '123456789', confirmPassword: '123456789'
  };

  const firstName = initialData.firstname;
  const lastName = initialData.lastname;
  delete initialData.firstname;
  delete initialData.lastname;
  initialData.name = firstName + " " + lastName;

  const [details, setDetails] = useState(initialData);

  const handleChange = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
  };

  const handleSave = () => {
    if (details.password !== details.confirmPassword) {
      alert('Password and confirm password do not match!');
    } else {
      const changes = { ...details };
      const [firstName, lastName] = changes.name.split(" ");
      delete changes.name;
      delete changes.confirmPassword;
      delete changes.id;
      changes.firstname = firstName;
      changes.lastname = lastName;

      if (changes.password === '123456789')
        delete changes.password;

      dispatch(updateUserDetails(changes)).then(() => {
        history.push('/profile');
      });
    }
  };

  return (
    <div className="EditProfilePage">
      <Navbar activeMenuItem={'profile'} />
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
                  name="phone"
                  type="tel"
                  value={details.phone}
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
                  type="number"
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
        <button onClick={handleSave} className="save-button">
          Save changes
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfilePage;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import closeIcon from '../images/ic_close.svg';
import backIcon from '../images/ic_back.svg';
import successIcon from '../images/ic_success_tick.svg';

import { login, signup } from '../redux/actions/userActions';

import '../styles/LoginModal.css';

const initialSignupDetails = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  addressLine1: '',
  addressLine2: '',
  standard: '',
  school: '',
};

const initialLoginDetails = {
  email: '',
  password: '',
};

const LoginModal = (props) => {
  const { setLoginModal } = props;
  const [modalType, setModalType] = useState('login');
  const [signupData, setSignupData] = useState(initialSignupDetails);
  const [loginData, setLoginData] = useState(initialLoginDetails);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignupDetailsChange = (e) => {
    const { name } = e.target;
    setSignupData({ ...signupData, [name]: e.target.value });
  };

  const handleLoginDetailsChange = (e) => {
    const { name } = e.target;
    setLoginData({ ...loginData, [name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const formData = { ...signupData };
    const address = formData.addressLine1 + " " + formData.addressLine2;
    delete formData.addressLine1;
    delete formData.addressLine2;
    formData.address = address;
    dispatch(signup(formData)).then(() => {
      setSignupData(initialSignupDetails);
    });
    setModalType('success');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginData, history)).then(() => {
      setLoginData(initialLoginDetails);
      history.push('/');
    });
    setLoginModal(false);
  };

  const handleSignupSuccess = () => {
    setLoginModal(false);
    history.push('/');
  };

  return (
    <div className="LoginModal">
      <div className="LoginModal-content">
        <span onClick={() => setLoginModal(false)}>
          <img src={closeIcon} alt="close-icon" className="LoginModal-close-icon" />
        </span>
        {modalType === 'login' && (
          <div className="LoginModal-container">
            <h1 className="login-title">Login</h1>
            <input
              name="email"
              type="email"
              value={loginData.email}
              placeholder="Email ID"
              className="LoginModal-input"
              onChange={handleLoginDetailsChange}
            />
            <input
              name="password"
              type="password"
              value={loginData.password}
              placeholder="Password"
              className="LoginModal-input"
              onChange={handleLoginDetailsChange}
            />
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
            <div className="LoginModal-divider"></div>
            <p>Don't have an account?</p>
            <button
              className="create-account-button"
              onClick={() => setModalType('create-account')}
            >
              Create an account
            </button>
          </div>
        )}
        {modalType === 'create-account' && (
          <div className="LoginModal-container">
            <div className="back-icon-container">
              <img
                src={backIcon}
                alt="back-icon"
                className="back-icon"
                onClick={() => setModalType('login')}
              />
            </div>
            <h1 className="create-account-title">Create account</h1>
            <input
              name="firstname"
              type="text"
              value={signupData.firstname}
              placeholder="First name"
              className="LoginModal-input"
              onChange={handleSignupDetailsChange}
            />
            <input
              name="lastname"
              type="text"
              value={signupData.lastname}
              placeholder="Last name"
              className="LoginModal-input"
              onChange={handleSignupDetailsChange}
            />
            <input
              name="email"
              type="email"
              value={signupData.email}
              placeholder="Email ID"
              className="LoginModal-input"
              onChange={handleSignupDetailsChange}
            />
            <input
              name="phone"
              type="tel"
              value={signupData.phone}
              placeholder="Phone number"
              className="LoginModal-input"
              onChange={handleSignupDetailsChange}
            />
            <input
              name="password"
              type="password"
              value={signupData.password}
              placeholder="Password"
              className="LoginModal-input"
              onChange={handleSignupDetailsChange}
            />
            <input
              name="confirmPassword"
              type="password"
              value={signupData.confirmPassword}
              placeholder="Confirm password"
              className="LoginModal-input"
              onChange={handleSignupDetailsChange}
            />
            <button className="login-button" onClick={() => setModalType('few-details')}>
              Proceed
            </button>
          </div>
        )}
        {modalType === 'few-details' && (
          <div className="LoginModal-container">
            <div className="back-icon-container">
              <img
                src={backIcon}
                alt="back-icon"
                className="back-icon"
                onClick={() => setModalType('create-account')}
              />
            </div>
            <h1 className="create-account-title">Few details</h1>
            <input
              name="addressLine1"
              type="text"
              value={signupData.addressLine1}
              placeholder="Address line 1"
              className="LoginModal-input"
              onChange={handleSignupDetailsChange}
            />
            <input
              name="addressLine2"
              type="text"
              value={signupData.addressLine2}
              placeholder="Address line 2"
              className="LoginModal-input"
              onChange={handleSignupDetailsChange}
            />
            <input
              name="standard"
              type="number"
              value={signupData.standard}
              placeholder="Standard of student"
              className="LoginModal-input"
              onChange={handleSignupDetailsChange}
            />
            <input
              name="school"
              type="text"
              value={signupData.school}
              placeholder="School name"
              className="LoginModal-input"
              onChange={handleSignupDetailsChange}
            />
            <button className="login-button" onClick={handleSignup}>
              Create account
            </button>
          </div>
        )}
        {modalType === 'success' && (
          <div className="LoginModal-container">
            <img src={successIcon} alt="success-icon" className="success-icon" />
            <h1 className="success-title">Account created successfully</h1>
            <p className="success-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <button
              className="login-button"
              onClick={handleSignupSuccess}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;

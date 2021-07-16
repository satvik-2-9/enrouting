import React from 'react';
import closeIcon from '../images/ic_close.svg';
import '../styles/LoginModal.css';

const LoginModal = (props) => {
  const { handleClose } = props;
  return (
    <div className="LoginModal">
      <div className="LoginModal-content">
        <span onClick={() => handleClose()}>
          <img src={closeIcon} alt="close-icon" className="LoginModal-close-icon" />
        </span>
        <div className="LoginModal-container">
          <h1>Login</h1>
          <input type="email" placeholder="Email ID" className="LoginModal-input" />
          <input type="password" placeholder="Password" className="LoginModal-input" />
          <button className="login-button">Login</button>
          <div className="LoginModal-divider"></div>
          <p>Don't have an account?</p>
          <button className="create-account-button">Create an account</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

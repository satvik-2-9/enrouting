import React from 'react';
import Navbar from './Navbar';
import errorImage from '../images/img_error.svg';
import '../styles/ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <Navbar />
      <h1 className="ErrorPage-heading">Something went wrong</h1>
      <p className="ErrorPage-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. Ut sjhd hj laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <img src={errorImage} alt="error-img" className="error-img" />
    </div>
  );
};

export default ErrorPage;

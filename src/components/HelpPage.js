import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import helpImage from '../images/img_help.svg';
import '../styles/HelpPage.css';

const HelpPage = () => {
  return (
    <div className="HelpPage">
      <Navbar activeMenuItem={'help'} />
      <div className="HelpPage-container">
        <div className="HelpPage-container-left">
          <img src={helpImage} alt="help-img" className="help-img" />
        </div>
        <div className="HelpPage-container-right">
          <div className="HelpPage-text-box">
            <h1>Let's connect</h1>
            <p>Let us know if you have something interesting to say and share it with us. If you have
              any questions, just fill in the contact form and we will answer you shortly.</p>
            <div className="HelpPage-name-container">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="text" placeholder="Email address" className="HelpPage-input" />
            <textarea type="text" rows="5" placeholder="Type message here..." className="HelpPage-input" />
            <div className="HelpPage-button-container">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpPage;

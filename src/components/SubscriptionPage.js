import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import tickIcon from '../images/ic_success_tick.svg';
import bgImage from '../images/img_bg.png';
import notesImage from '../images/ic_notes_unlocked.svg';
import downloadIcon from '../images/ic_download.svg';
import '../styles/SubscriptionPage.css';

const SubscriptionPage = () => {
  return (
    <div className="SubscriptionPage">
      <Navbar />
      <div className="SubscriptionPage-title-container">
        <div className="SubscriptionPage-content">
          <img src={bgImage} alt="bg-img" className="bg-img" />
          <img src={tickIcon} alt="tick-icon" className="tick-icon" />
          <h1>Thank you for purchasing your subscription</h1>
          <p>We hope you enjoy the premium experience of enrouting carrier.</p>
          <p>Happy learning.</p>
        </div>
      </div>
      <div className="subscription-card-container">
        <div className="subscription-card">
          <p className="subscription-card-title">Subscription details</p>
          <div className="subscription-details-container">
            <div className="subscription-details-container-col-left">
              <p>Date of purchase</p>
              <p>Amount paid</p>
              <p>Subject</p>
              <p>Standard / Class</p>
              <p>Board</p>
            </div>
            <div className="subscription-details-container-col-right">
              <p>04 Sept, 2021</p>
              <p>₹1000 / year</p>
              <p>Maths</p>
              <p>8th standard</p>
              <p>CBSE</p>
            </div>
          </div>
          <div className="invoice-container">
            <img src={downloadIcon} alt="download-icon" className="download-icon" />
            <span>Download invoice</span>
          </div>
        </div>
        <div className="subscription-card">
          <p className="subscription-card-title">Subscribed notes</p>
          <p className="subscription-card-text">We have added maths notes to your account you can check in your my account / my notes section.</p>
          <img src={notesImage} alt="notes-img" className="notes-img" />
          <div>
            <button className="subscription-card-button">My notes</button>
          </div>
        </div>
      </div>
      <div className="workshop-title">
        <h1>Best technical workshops to attend</h1>
      </div>
      <div className="best-workshop-card-container">
        <div className="best-workshop-card">
          <div className="best-workshop-card-img"></div>
          <h4>Career in automobile Engineering</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat un muter...</p>
          <span>Know more</span>
        </div>
        <div className="best-workshop-card">
          <div className="best-workshop-card-img"></div>
          <h4>Career in mechanical Engineering</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat un muter...</p>
          <span>Know more</span>
        </div>
        <div className="best-workshop-card">
          <div className="best-workshop-card-img"></div>
          <h4>Career as a chartered accountant</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat un muter...</p>
          <span>Know more</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubscriptionPage;

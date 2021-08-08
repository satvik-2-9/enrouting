import React from 'react';
import { useLocation, useHistory } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import tickIcon from '../images/ic_success_tick.svg';
import bgImage from '../images/img_bg.png';
import notesImage from '../images/ic_notes_unlocked.svg';
import downloadIcon from '../images/ic_download.svg';
import '../styles/SubscriptionPage.css';

const SubscriptionPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { type, course, event, workshop, paymentDetails, regType } = location.state;

  const getFormattedDate = () => {
    const dateObj = new Date();
    const date = dateObj.getDate();
    const month = dateObj.toLocaleString('default', { month: 'short' });
    const year = dateObj.getFullYear();
    return (date + ' ' + month + ', ' + year);
  };

  const getConvertedDate = (str) => {
    const newStr = str.substring(0, str.length - 8);
    return newStr;
  };

  return (
    <div className="SubscriptionPage">
      <Navbar />
      <div className="SubscriptionPage-title-container">
        <div className="SubscriptionPage-content">
          <img src={bgImage} alt="bg-img" className="bg-img" />
          <img src={tickIcon} alt="tick-icon" className="tick-icon" />
          {type === 'course' && <h1>Thank you for purchasing your subscription</h1>}
          {type === 'event' && <h1>Thank you for registering for events</h1>}
          {type === 'workshop' && <h1>Thank you for registering for workshops</h1>}
          <p>We hope you enjoy the premium experience of enrouting carrier.</p>
          <p>Happy learning.</p>
        </div>
      </div>
      <div className="subscription-card-container">
        <div className="subscription-card">
          <p className="subscription-card-title">
            {type === 'course' && 'Subscription details'}
            {type === 'event' && 'Event details'}
            {type === 'workshop' && 'Workshop details'}
          </p>
          <div className="subscription-details-container">
            {type === 'course' && (
              <div className="subscription-details-container-col-left">
                <p>Date of purchase</p>
                <p>Amount paid</p>
                <p>Subject</p>
                <p>Standard / Class</p>
                <p>Board</p>
              </div>
            )}
            {type === 'event' && (
              <div className="subscription-details-container-col-left">
                <p>Date of register</p>
                <p>Amount paid</p>
                <p>Event name</p>
                <p>Start date</p>
                <p>End date</p>
              </div>
            )}
            {type === 'workshop' && (
              <div className="subscription-details-container-col-left">
                <p>Date of register</p>
                <p>Amount paid</p>
                <p>Workshop name</p>
                <p>Date</p>
              </div>
            )}
            {type === 'course' && (
              <div className="subscription-details-container-col-right">
                <p>{getFormattedDate()}</p>
                <p>₹{course.price} / year</p>
                <p>{course.subject}</p>
                <p>{course.class}th standard</p>
                <p>{course.board}</p>
              </div>
            )}
            {type === 'event' && (
              <div className="subscription-details-container-col-right">
                <p>{getFormattedDate()}</p>
                <p>₹{regType === 'solo' ? event.soloPrice : event.groupPrice}</p>
                <p>{event.topic}</p>
                <p>{getConvertedDate(event.start_time)}</p>
                <p>{getConvertedDate(event.end_time)}</p>
              </div>
            )}
            {type === 'workshop' && (
              <div className="subscription-details-container-col-right">
                <p>{getFormattedDate()}</p>
                <p>₹{workshop.price}</p>
                <p>{workshop.topic}</p>
                <p>{getConvertedDate(workshop.start_date)}</p>
              </div>
            )}
          </div>
          <div className="invoice-container">
            <img src={downloadIcon} alt="download-icon" className="download-icon" />
            <span>Download invoice</span>
          </div>
        </div>
        {type === 'course' && (
          <div className="subscription-card">
            <p className="subscription-card-title">Subscribed notes</p>
            <p className="subscription-card-text">We have added {course.subject} notes to your account you can check in my account / my notes section.</p>
            <img src={notesImage} alt="notes-img" className="notes-img" />
            <div>
              <button
                className="subscription-card-button"
                onClick={() => history.push({ pathname: '/notes', state: 'notes' })}
              >
                My notes
              </button>
            </div>
          </div>
        )}
        {type === 'event' && (
          <div className="subscription-card">
            <p className="subscription-card-title">All events</p>
            <p className="subscription-card-text">We have added event to your account you can check in my account / Registered events section.</p>
            <img src={notesImage} alt="notes-img" className="notes-img" />
            <div>
              <button
                className="subscription-card-button"
                onClick={() => history.push('/myEvents')}
              >
                Registered events
              </button>
            </div>
          </div>
        )}
        {type === 'workshop' && (
          <div className="subscription-card">
            <p className="subscription-card-title">All workshops</p>
            <p className="subscription-card-text">We have added workshop to your account you can check in my account / Registered workshops section.</p>
            <img src={notesImage} alt="notes-img" className="notes-img" />
            <div>
              <button
                className="subscription-card-button"
                onClick={() => history.push('/myWorkshops')}
              >
                Registered workshops
              </button>
            </div>
          </div>
        )}
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

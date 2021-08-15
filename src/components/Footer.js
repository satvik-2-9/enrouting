import React from 'react';
import { useHistory } from 'react-router-dom';
import youtubeIcon from '../images/ic_youtube.svg';
import instaIcon from '../images/ic_insta.svg';
import fbIcon from '../images/ic_fb.svg';
import linkedinIcon from '../images/ic_linkedin.svg';
import '../styles/Footer.css';

const Footer = () => {
  const history = useHistory();
  return (
    <div className='Footer'>
      <div className='links-section'>
        <div className='links-vertical-div'>
          <p className='links-title'>ABOUT</p>
          <p className='links-text' onClick={() => history.push('/about')}>
            About us
          </p>
          <p className='links-text'>Our story</p>
          <p className='links-text'>Vision</p>
        </div>
        <div className='links-vertical-div'>
          <p className='links-title'>ACADEMICS</p>
          <p className='links-text'>CBSE</p>
          <p className='links-text'>Kerala board</p>
          <p className='links-text'>Resources</p>
          <p className='links-text'>Webinar</p>
        </div>
        <div className='links-vertical-div'>
          <p className='links-title'>COURSES</p>
          <p className='links-title' onClick={() => history.push('/events')}>
            EVENTS
          </p>
          <p className='links-title'>FAQ</p>
        </div>
        <div className='links-vertical-div'>
          <p className='links-title'>SOCIAL MEDIA</p>
          <div className='social-media-icons-container'>
            <img
              src={linkedinIcon}
              alt='linkedin-icon'
              className='social-media-icon'
            />
            <img src={fbIcon} alt='fb-icon' className='social-media-icon' />
            <img
              src={instaIcon}
              alt='insta-icon'
              className='social-media-icon'
            />
            <img
              src={youtubeIcon}
              alt='youtube-icon'
              className='social-media-icon'
            />
          </div>
        </div>
      </div>
      <div className='terms-container'>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </div>
      <footer className='footer-text'>
        © 2021 Enrouting careers. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;

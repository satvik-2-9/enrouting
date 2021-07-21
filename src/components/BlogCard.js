import React, { useState } from 'react';
import BlogModal from './BlogModal';
import eventImage from '../images/event_img.jpg';
import nextIcon from '../images/ic_arrow_right.svg';
import '../styles/BlogCard.css';

const BlogCard = () => {
  const [blogModal, setBlogModal] = useState(false);

  blogModal ? document.querySelector("body").style.overflow = 'hidden'
    : document.querySelector("body").style.overflow = 'auto';

  return (
    <div className="BlogCard">
      {blogModal && <BlogModal setBlogModal={setBlogModal} />}
      <div className="BlogCard-title-row">
        <span className="BlogCard-title-text">Career in fashion</span>
      </div>
      <div className="BlogCard-content-row">
        <div className="BlogCard-img-container">
          <img src={eventImage} alt="event-img" />
        </div>
        <div className="BlogCard-content-div">
          <p>The Best out of waste is basically for young talents who wish to that suits the real beauty of this place...</p>
          <div className="BlogCard-date-row">
            <p>Written by John Alex posted on 16/09/20 will take a maximum 10 minutes to read</p>
            <div onClick={() => setBlogModal(true)} className="BlogCard-detail-div">
              <span className="BlogCard-details-text">Read more</span>
              <img src={nextIcon} alt="forward-icon" className="BlogCard-forward-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

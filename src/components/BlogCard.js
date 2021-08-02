import React, { useState } from 'react';
import BlogModal from './BlogModal';
import nextIcon from '../images/ic_arrow_right.svg';
import '../styles/BlogCard.css';

const BlogCard = (props) => {
  const { blog } = props;
  const [blogModal, setBlogModal] = useState(false);

  blogModal ? document.querySelector("body").style.overflow = 'hidden'
    : document.querySelector("body").style.overflow = 'auto';

  return (
    <div className="BlogCard">
      {blogModal && <BlogModal setBlogModal={setBlogModal} blog={blog} />}
      <div className="BlogCard-title-row">
        <span className="BlogCard-title-text">{blog.topic}</span>
      </div>
      <div className="BlogCard-content-row">
        <div className="BlogCard-img-container">
          <img src={blog.img} alt="blog-img" />
        </div>
        <div className="BlogCard-content-div">
          <p className="blog-text">
            {blog.desc
              .replace(/(<([^>]+)>)/ig, '')
              .replace('&nbsp;', ' ')
              .substring(0, 120)
            }...
          </p>
          <div className="BlogCard-date-row">
            <p className="blog-text">Written by {blog.author} posted on {blog.date} will take a maximum 10 minutes to read</p>
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

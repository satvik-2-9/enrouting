import React from 'react';
import closeIcon from '../images/ic_close.svg';
import '../styles/BlogModal.css';

const BlogModal = (props) => {
  const { setBlogModal, blog } = props;
  return (
    <div className='BlogModal'>
      <div className='BlogModal-content'>
        <span onClick={() => setBlogModal(false)}>
          <img
            src={closeIcon}
            alt='close-icon'
            className='BlogModal-close-icon'
          />
        </span>
        <div className='BlogModal-container'>
          <h1>{blog.topic}</h1>
          <p className='author-text'>Written By {blog.author}</p>
          <img src={blog.img} alt='blog-img' className='blog-full-img' />
          <div
            dangerouslySetInnerHTML={{ __html: blog.desc }}
            className='blogModal-desc'
          />
        </div>
      </div>
    </div>
  );
};

export default BlogModal;

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BlogCard from './BlogCard';
import '../styles/BlogsPage.css';

const BlogsPage = () => {
  return (
    <div className="BlogsPage">
      <Navbar activeMenuItem={'blogs'} />
      <div className="BlogsPage-title-container">
        <h1>Blogs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="events-card-container">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;

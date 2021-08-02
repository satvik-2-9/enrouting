import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import BlogCard from './BlogCard';
import { getAllBlogs } from '../redux/actions/blogActions';
import '../styles/BlogsPage.css';

const BlogsPage = () => {
  const dispatch = useDispatch();
  const { allBlogs } = useSelector((store) => store.blogReducer);

  useEffect(() => {
    if (allBlogs.length === 0) {
      dispatch(getAllBlogs());
    }
  }, [dispatch, allBlogs]);

  return (
    <div className="BlogsPage">
      <Navbar activeMenuItem={'blogs'} />
      <div className="BlogsPage-title-container">
        <h1>Blogs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="events-card-container">
        {allBlogs?.map(blog => (
          <BlogCard blog={blog} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import ChapterCard from './ChapterCard';
import '../styles/CoursePage.css';

import { getUserCourses } from '../redux/actions/courseActions';

const CoursePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const courseData = location.state;

  const { isAuthenticated } = useSelector((store) => store.userReducer);
  const { userCourses } = useSelector((store) => store.courseReducer);

  useEffect(() => {
    if (isAuthenticated && !userCourses) {
      dispatch(getUserCourses());
    }
  }, [dispatch, isAuthenticated, userCourses]);

  var isPurchased = false;
  if (userCourses)
    isPurchased = userCourses.some(course => course.id === courseData.id);

  return (
    <div className="CoursePage">
      <Navbar activeMenuItem={'course'} />
      <div className="CoursePage-title-container">
        <h1>Welcome to class {courseData.class}th</h1>
        <h2>{courseData.subject}</h2>
        <p>Lorem ipsum dolor sit amet. Unde velit hst yyu rer jhkji plohf bshsy nisi yutt uyu fdrte gty ut tempore voluptatem. Sed internos sunt cum nostrum saepe. Rem voluptas quisquam qui vero repellat et rerum nihil a rerum velit quo enim eligendi.</p>
      </div>
      <div className="chapter-card-container">
        {(!isAuthenticated || !isPurchased) ? courseData.chapters.map((chapter, index) => (
          index < 2 ? <ChapterCard isLocked={false} chapter={chapter} />
            : <ChapterCard isLocked={true} chapter={chapter} />
        )) : (
          courseData.chapters.map(chapter => (
            <ChapterCard isLocked={false} chapter={chapter} />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;

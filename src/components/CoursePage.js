import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import ChapterCard from './ChapterCard';
import '../styles/CoursePage.css';

import { getAllCourses } from '../redux/actions/courseActions';

const CoursePage = (props) => {
  const location = useLocation();
  const { standard, board } = location.state;

  const dispatch = useDispatch();
  const { allCourses } = useSelector((store) => store.courseReducer);

  useEffect(() => {
    if (!allCourses) {
      dispatch(getAllCourses());
    }
  });

  var requiredCourses = [];
  if (allCourses) {
    requiredCourses = allCourses.filter(
      (course) => (course.class === standard && course.board === board)
    );
  }

  return (
    <div className="CoursePage">
      <Navbar activeMenuItem={'course'} />
      <div className="CoursePage-title-container">
        <h1>Welcome to class {standard}th</h1>
        <p>Lorem ipsum dolor sit amet. Unde velit hst yyu rer jhkji plohf bshsy nisi yutt uyu fdrte gty ut tempore voluptatem. Sed internos sunt cum nostrum saepe. Rem voluptas quisquam qui vero repellat et rerum nihil a rerum velit quo enim eligendi.</p>
      </div>
      <div className="chapter-card-container">
        {requiredCourses.map(course => {
          return course.chapters.map(chapter => (
            <ChapterCard isLocked={false} chapter={chapter} />
          ))
        })
        }
        {requiredCourses.map(course => {
          return course.chapters.map(chapter => (
            <ChapterCard isLocked={true} chapter={chapter} />
          ))
        })
        }
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;

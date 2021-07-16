import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChapterCard from './ChapterCard';
import '../styles/CoursePage.css';

const CoursePage = () => {
  return (
    <div className="CoursePage">
      <Navbar activeMenuItem={'course'} />
      <div className="CoursePage-title-container">
        <h1>Welcome to class 8th</h1>
        <p>Lorem ipsum dolor sit amet. Unde velit hst yyu rer jhkji plohf bshsy nisi yutt uyu fdrte gty ut tempore voluptatem. Sed internos sunt cum nostrum saepe. Rem voluptas quisquam qui vero repellat et rerum nihil a rerum velit quo enim eligendi.</p>
      </div>
      <div className="chapter-card-container">
        <ChapterCard isLocked={false} chapNo={1} />
        <ChapterCard isLocked={false} chapNo={2} />
        <ChapterCard isLocked={true} chapNo={3} />
        <ChapterCard isLocked={true} chapNo={4} />
        <ChapterCard isLocked={true} chapNo={5} />
        <ChapterCard isLocked={true} chapNo={6} />
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;

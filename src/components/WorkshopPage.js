import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import EventCard from './EventCard';
import '../styles/WorkshopPage.css';

const WorkshopPage = () => {
  return (
    <div className="WorkshopPage">
      <Navbar activeMenuItem={'workshop'} />
      <div className="WorkshopPage-title-container">
        <h1>Workshop</h1>
        <p>All workshops you are part of you can check here.</p>
      </div>
      <div className="workshop-card-container">
        <EventCard isWorkshop={true} />
        <EventCard isWorkshop={true} />
      </div>
      <Footer />
    </div>
  );
};

export default WorkshopPage;

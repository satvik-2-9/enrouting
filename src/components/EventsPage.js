import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import EventCard from './EventCard';
import '../styles/EventsPage.css';

const EventsPage = () => {
  return (
    <div className="EventsPage">
      <Navbar />
      <div className="EventsPage-title-container">
        <h1>Events</h1>
        <p>All events you are part of you can check here.</p>
      </div>
      <div className="events-card-container">
        <EventCard isWorkshop={false} />
        <EventCard isWorkshop={false} />
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;

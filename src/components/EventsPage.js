import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import EventCard from './EventCard';
import { getAllEvents } from '../redux/actions/eventActions';
import '../styles/EventsPage.css';

const EventsPage = () => {
  const dispatch = useDispatch();
  const { allEvents } = useSelector((store) => store.eventReducer);
  const { isAuthenticated } = useSelector((store) => store.userReducer);

  useEffect(() => {
    if (allEvents.length === 0) {
      dispatch(getAllEvents());
    }
  }, [dispatch, allEvents]);

  return (
    <div className="EventsPage">
      <Navbar activeMenuItem={'events'} />
      <div className="EventsPage-title-container">
        <h1>Events</h1>
        {isAuthenticated
          ? <p>All events you are part of you can check here.</p>
          : <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        }
      </div>
      <div className="events-card-container">
        {allEvents?.map(event => (
          <EventCard event={event} isAuthenticated={isAuthenticated} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;

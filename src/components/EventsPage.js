import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import EventCard from './EventCard';
import { getAllEvents, getUserEvents } from '../redux/actions/eventActions';
import '../styles/EventsPage.css';

const EventsPage = () => {
  const dispatch = useDispatch();
  const { allEvents, userEvents } = useSelector((store) => store.eventReducer);
  const { isAuthenticated } = useSelector((store) => store.userReducer);

  useEffect(() => {
    if (allEvents.length === 0) {
      dispatch(getAllEvents());
    }
  }, [dispatch, allEvents]);

  useEffect(() => {
    if (isAuthenticated && !userEvents) {
      dispatch(getUserEvents());
    }
  }, [dispatch, isAuthenticated, userEvents]);

  const isPurchased = (event) => {
    if (!userEvents) {
      return false;
    } else {
      return userEvents.some((e) => e.id === event.id);
    }
  };

  return (
    <div className='EventsPage'>
      <Navbar activeMenuItem={'events'} />
      <div className='EventsPage-title-container'>
        <h1>Events</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className='events-card-container'>
        {allEvents?.map((event) => (
          <EventCard
            event={event}
            key={event.id}
            locked={!isAuthenticated || !isPurchased(event)}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;

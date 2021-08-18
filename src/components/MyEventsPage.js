import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import EventCard from './EventCard';
import { getUserEvents } from '../redux/actions/eventActions';
import '../styles/EventsPage.css';

const MyEventsPage = () => {
  const dispatch = useDispatch();
  const { userEvents } = useSelector((store) => store.eventReducer);

  useEffect(() => {
    if (!userEvents) {
      dispatch(getUserEvents());
    }
  }, [dispatch, userEvents]);

  return (
    <div className='EventsPage'>
      <Navbar activeMenuItem={'profile'} />
      <div className='EventsPage-title-container'>
        <h1>Events</h1>
        <p>All events you are part of you can check here.</p>
      </div>
      <div className='events-card-container'>
        {userEvents?.map((event) => (
          <EventCard
            event={event}
            key={event.id}
            locked={false}
            isAuthenticated={true}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MyEventsPage;

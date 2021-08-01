import React, { useState } from 'react';
import EventWorkshopModal from './EventWorkshopModal';
import nextIcon from '../images/ic_arrow_right.svg';
import '../styles/EventCard.css';

const EventCard = (props) => {
  const { event, isAuthenticated } = props;
  const [eventModal, setEventModal] = useState(false);

  (eventModal)
    ? document.querySelector("body").style.overflow = 'hidden'
    : document.querySelector("body").style.overflow = 'auto'

  return (
    <div className="EventCard">
      {eventModal &&
        <EventWorkshopModal
          type={'event'}
          event={event}
          setEventModal={setEventModal}
          isAuthenticated={isAuthenticated}
        />
      }
      <div className="EventCard-title-row">
        <span className="EventCard-title-text">{event.topic}</span>
        {isAuthenticated
          ? <span className="EventCard-amount-text">Paid amount: ₹200</span>
          : <button className="register-event-button">Register for event</button>
        }
      </div>
      <div className="EventCard-content-row">
        <img src={event.img} alt="event-img" />
        <div className="EventCard-content-div">
          <p>{event.desc.replace('<p>', '').substring(0, 185)}...</p>
          <div className="EventCard-date-row">
            {isAuthenticated ? (
              <div>
                <span className="EventCard-date-text">
                  Start date: {event.start_time.replace('6:30 PM', '')}
                </span>
                <span className="EventCard-date-text">
                  End date: {event.end_time.replace('6:30 PM', '')}
                </span>
              </div>
            ) : (
              <div>
                <span className="EventCard-date-text">
                  Registration fee: ₹{event.price}
                </span>
              </div>
            )}
            <div className="EventCard-detail-div" onClick={() => setEventModal(true)}>
              <span className="EventCard-details-text">More Detail</span>
              <img src={nextIcon} alt="forward-icon" className="forward-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

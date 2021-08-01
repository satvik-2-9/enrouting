import React from 'react';
import closeIcon from '../images/ic_close.svg';
import '../styles/EventWorkshopModal.css';

const EventWorkshopModal = (props) => {
  const { type, event, workshop, setEventModal, setWorkshopModal, isAuthenticated } = props;

  const handleClick = () => {
    type === 'event' ? setEventModal(false) : setWorkshopModal(false)
  };

  return (
    <div className="EventWorkshopModal">
      <div className="EventWorkshopModal-content">
        <span onClick={handleClick}>
          <img src={closeIcon} alt="close-icon" className="EventWorkshopModal-close-icon" />
        </span>
        {type === 'event' ? (
          <div className="EventWorkshopModal-container">
            <div className="EventWorkshopModal-title-row">
              <h1>{event.topic}</h1>
              {!isAuthenticated && <button>Register for event</button>}
            </div>
            {isAuthenticated ? (
              <div className="registration-details-div">
                <p className="registration-text">Paid amount: ₹{event.price}</p>
                <div>
                  <span className="registration-text date-text-margin">Start date: {event.start_time.replace('6:30 PM', '')}</span>
                  <span className="registration-text">End date: {event.end_time.replace('6:30 PM', '')}</span>
                </div>
              </div>
            ) : (
              <div className="registration-details-div">
                <p className="registration-text">Registration fee: ₹{event.price}</p>
              </div>
            )}
            <div
              dangerouslySetInnerHTML={{ __html: event.desc }}
              className="EventWorkshopModal-desc"
            />
            <img src={event.img} alt="event-img" className="EventWorkshopModal-img" />
          </div>
        ) : (
          <div className="EventWorkshopModal-container">
            <div className="EventWorkshopModal-title-row">
              <h1>{workshop.topic}</h1>
              {!isAuthenticated && <button>Register for workshop</button>}
            </div>
            {isAuthenticated ? (
              <div className="registration-details-div">
                <p className="registration-text">Paid amount: ₹{workshop.price}</p>
                <div>
                  <span className="registration-text">Workshop date: {workshop.start_date.replace('6:30 PM', '')}</span>
                </div>
              </div>
            ) : (
              <div className="registration-details-div">
                <p className="registration-text">Registration fee: ₹{workshop.price}</p>
              </div>
            )}
            <div
              dangerouslySetInnerHTML={{ __html: workshop.desc }}
              className="EventWorkshopModal-desc"
            />
            <img src={workshop.img} alt="event-img" className="EventWorkshopModal-img" />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventWorkshopModal;
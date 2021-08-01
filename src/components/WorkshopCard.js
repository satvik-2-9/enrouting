import React, { useState } from 'react';
import EventWorkshopModal from './EventWorkshopModal';
import nextIcon from '../images/ic_arrow_right.svg';
import '../styles/EventCard.css';

const WorkshopCard = (props) => {
  const { workshop, isAuthenticated } = props;
  const [workshopModal, setWorkshopModal] = useState(false);

  (workshopModal)
    ? document.querySelector("body").style.overflow = 'hidden'
    : document.querySelector("body").style.overflow = 'auto'

  return (
    <div className="EventCard">
      {workshopModal &&
        <EventWorkshopModal
          type={'workshop'}
          workshop={workshop}
          setWorkshopModal={setWorkshopModal}
          isAuthenticated={isAuthenticated}
        />
      }
      <div className="EventCard-title-row">
        <span className="EventCard-title-text">{workshop.topic}</span>
        {!isAuthenticated && (
          <button className="register-event-button">Register for workshop</button>
        )}
      </div>
      <div className="EventCard-content-row">
        <img src={workshop.img} alt="workshop-img" />
        <div className="EventCard-content-div">
          <p>{workshop.desc.replace('<p>', '').substring(0, 185)}...</p>
          <div className="EventCard-date-row">
            {isAuthenticated ? (
              <div>
                <span className="EventCard-date-text">
                  Workshop date: {workshop.start_date.replace('6:30 PM', '')}
                </span>
              </div>
            ) : (
              <div>
                <span className="EventCard-date-text">
                  Registration fee: ₹{workshop.price}
                </span>
              </div>
            )}
            <div className="EventCard-detail-div" onClick={() => setWorkshopModal(true)}>
              <span className="EventCard-details-text">More Detail</span>
              <img src={nextIcon} alt="forward-icon" className="forward-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;

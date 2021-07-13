import React from 'react';
import eventImage from '../images/event_img.jpg';
import nextIcon from '../images/ic_arrow_right.svg';
import '../styles/EventCard.css';

const EventCard = (props) => {
  const { isWorkshop } = props;

  return (
    <div className="EventCard">
      <div className="EventCard-title-row">
        <span className="EventCard-title-text">Best out of waste</span>
        {!isWorkshop && <span className="EventCard-amount-text">Paid amount: ₹200</span>}
      </div>
      <div className="EventCard-content-row">
        <img src={eventImage} alt="event-img" />
        <div className="EventCard-content-div">
          <p>The Best out of waste is basically for young talents & aspirants who wish to transform the whole world into a definition that suits the real beauty of this place...</p>
          <div className="EventCard-date-row">
            {isWorkshop ? (
              <span className="EventCard-date-text">Workshop date: 20 July, 2021</span>
            ) : (
              <div>
                <span className="EventCard-date-text">Start date: 20 July, 2021</span>
                <span className="EventCard-date-text">End date: 29 July, 2021</span>
              </div>
            )}
            <div className="EventCard-detail-div">
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

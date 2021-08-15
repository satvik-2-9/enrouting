import React, { useState } from 'react';
import SubmissionModal from './SubmissionModal';
import ResultsModal from './ResultsModal';
import closeIcon from '../images/ic_close.svg';
import '../styles/EventWorkshopModal.css';

const EventWorkshopModal = (props) => {
  const {
    type,
    event,
    workshop,
    setEventModal,
    setWorkshopModal,
    locked,
    handleRegisterClick,
  } = props;
  const [submissionModal, setSubmissionModal] = useState(false);
  const [resultsModal, setResultsModal] = useState(false);

  const handleClick = () => {
    type === 'event' ? setEventModal(false) : setWorkshopModal(false);
  };

  return (
    <div className='EventWorkshopModal'>
      {submissionModal && (
        <SubmissionModal
          event={event}
          setSubmissionModal={setSubmissionModal}
        />
      )}
      {resultsModal && (
        <ResultsModal event={event} setResultsModal={setResultsModal} />
      )}
      <div className='EventWorkshopModal-content'>
        <span onClick={handleClick}>
          <img
            src={closeIcon}
            alt='close-icon'
            className='EventWorkshopModal-close-icon'
          />
        </span>
        {type === 'event' ? (
          <div className='EventWorkshopModal-container'>
            <div className='EventWorkshopModal-title-row'>
              <h1>{event.topic}</h1>
              {locked && (
                <button onClick={() => handleRegisterClick()}>
                  Register for event
                </button>
              )}
            </div>
            {!locked ? (
              <div className='registration-details-div'>
                <p className='registration-text'>
                  Paid amount: ₹{event.groupPrice}
                </p>
                <div>
                  <span className='registration-text date-text-margin'>
                    Start date: {event.start_time.replace('6:30 PM', '')}
                  </span>
                  <span className='registration-text'>
                    End date: {event.end_time.replace('6:30 PM', '')}
                  </span>
                </div>
              </div>
            ) : (
              <div className='registration-details-div'>
                <p className='registration-text'>
                  Registration fee: ₹{event.soloPrice} (for single) and ₹
                  {event.groupPrice} (for group)
                </p>
              </div>
            )}
            <img
              src={event.img}
              alt='event-img'
              className='EventWorkshopModal-img'
            />
            <div
              dangerouslySetInnerHTML={{ __html: event.desc }}
              className='EventWorkshopModal-desc'
            />

            {!locked && (
              <div className='EventWorkshopModal-button-container'>
                <button onClick={() => setSubmissionModal(true)}>
                  Make submissions
                </button>
                <button onClick={() => setResultsModal(true)}>
                  View Results
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className='EventWorkshopModal-container'>
            <div className='EventWorkshopModal-title-row'>
              <h1>{workshop.topic}</h1>
              {locked && <button>Register for workshop</button>}
            </div>
            {!locked ? (
              <div className='registration-details-div'>
                <p className='registration-text'>
                  Paid amount: ₹{workshop.price}
                </p>
                <div>
                  <span className='registration-text'>
                    Workshop date: {workshop.start_date.replace('6:30 PM', '')}
                  </span>
                </div>
              </div>
            ) : (
              <div className='registration-details-div'>
                <p className='registration-text'>
                  Registration fee: ₹{workshop.price}
                </p>
              </div>
            )}
            <img
              src={workshop.img}
              alt='event-img'
              className='EventWorkshopModal-img'
            />
            <div
              dangerouslySetInnerHTML={{ __html: workshop.desc }}
              className='EventWorkshopModal-desc'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventWorkshopModal;

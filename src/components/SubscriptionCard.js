import React, { useState } from 'react';
import ReadWatchModal from './ReadWatchModal';
import nextIcon from '../images/ic_arrow_right.svg';
import '../styles/SubscriptionCard.css';

const SubscriptionCard = (props) => {
  const { chapNo } = props;
  const [notesModal, setNotesModal] = useState(false);
  const [lecturesModal, setLecturesModal] = useState(false);

  const handleOpen = (type) => {
    (type === 'notes') ? setNotesModal(true) : setLecturesModal(true);
  };

  const handleClose = () => {
    setNotesModal(false);
    setLecturesModal(false);
  };

  return (
    <div className={`SubscriptionCard ${chapNo === 1 && 'first-chapter'}`}>
      {notesModal && <ReadWatchModal type={'notes'} handleClose={handleClose} />}
      {lecturesModal && <ReadWatchModal type={'lectures'} handleClose={handleClose} />}
      <div className="SubscriptionCard-left">
        <p>Chapter {chapNo}</p>
        <p>Name of the chapter</p>
      </div>
      <div className="SubscriptionCard-right">
        <div onClick={() => handleOpen('notes')} className="read-watch-button">
          <span>Read notes</span>
          <img src={nextIcon} alt="next-icon" className="unlocked-icons" />
        </div>
        <div onClick={() => handleOpen('lectures')} className="read-watch-button">
          <span>Watch lecture</span>
          <img src={nextIcon} alt="next-icon" className="unlocked-icons" />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;

import React from 'react';
import { useHistory } from 'react-router-dom';
import unlockImage from '../images/img_unlock.jpg';
import closeIcon from '../images/ic_close.svg';
import '../styles/UnlockChapterModal.css';

const UnlockChapterModal = (props) => {
  const { handleClose } = props;
  const history = useHistory();

  const handleClick = () => {
    handleClose();
    document.querySelector("body").style.overflow = 'auto';
    history.push('/subscription');
  };

  return (
    <div className="UnlockChapterModal">
      <div className="UnlockChapterModal-content">
        <span onClick={() => handleClose()}>
          <img src={closeIcon} alt="close-icon" className="UnlockChapterModal-close-icon" />
        </span>
        <div className="UnlockChapterModal-content-container">
          <img src={unlockImage} alt="unlock-chapter-img" className="unlock-chapter-img" />
          <div className="UnlockChapterModal-text-container">
            <h1>Unlock notes</h1>
            <p>Get complete access to all the lecture videos and notes by availing our annual subscription.</p>
            <div className="UnlockChapterModal-details-container">
              <div className="UnlockChapterModal-details-container-col-left">
                <span>Subject name</span>
                <span>Board</span>
                <span>Standard / Class</span>
                <span>Subscription cost</span>
              </div>
              <div className="UnlockChapterModal-details-container-col-right">
                <span>Maths</span>
                <span>CBSE</span>
                <span>8th standard</span>
                <span>₹1000 / year</span>
              </div>
            </div>
            <button onClick={handleClick} className="UnlockChapterModal-button">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockChapterModal;

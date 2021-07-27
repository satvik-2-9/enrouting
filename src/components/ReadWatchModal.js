import React, { useState } from 'react';
import closeIcon from '../images/ic_close.svg';
import prevLightIcon from '../images/ic_arrow_left_white.svg';
import prevDarkIcon from '../images/ic_arrow_left_gray.svg';
import nextLightIcon from '../images/ic_arrow_right_white.svg';
import nextDarkIcon from '../images/ic_arrow_right_gray.svg';
import escLightIcon from '../images/ic_esc_white.svg';
import escDarkIcon from '../images/ic_esc_gray.svg';
import '../styles/ReadWatchModal.css';

const ReadWatchModal = (props) => {
  const { type, handleClose, chapter } = props;
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="ReadWatchModal">
      <div className={`ReadWatchModal-content ${isDarkMode && 'dark-mode'}`}>
        <span onClick={() => handleClose()}>
          <img src={closeIcon} alt="close-icon" className="ReadWatchModal-close-icon" />
        </span>
        <div className="ReadWatchModal-title-container">
          <h1>{chapter.name}</h1>
          <button>
            <a href={chapter.notes} download target="_blank" rel="noopener noreferrer">
              Download {type === 'notes' ? 'notes' : 'video'}
            </a>
          </button>
        </div>
        <p className="ReadWatchModal-notes-text">
          {type === 'notes' ? 'Notes' : 'Video lecture'}
        </p>
        {type === 'notes' ? (
          <div className={`ReadWatchModal-notes-container ${isDarkMode && 'dark-mode'}`}>
            <embed
              className="notes-frame"
              src={`${chapter.notes}#toolbar=0&navpanes=0&scrollbar=0`}
              type="application/pdf"
              scrolling="auto"
              frameBorder="0"
              height="100%"
              width="100%"
            ></embed>
          </div>
        ) : (
          <div className={`ReadWatchModal-lecture-container ${isDarkMode && 'dark-mode'}`}>
            <iframe
              allowFullScreen
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="video-lecture"
              className="video-frame"
            ></iframe>
          </div>
        )}
        <div className="ReadWatchModal-options-container">
          <div className="ReadWatchModal-toggle-div">
            <p className={`toggle-switch-label ${isDarkMode && 'dark-mode'}`}>Dark mode</p>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)} />
              <span className="switch" />
            </label>
          </div>
          <div className={`ReadWatchModal-prev-next-div ${isDarkMode && 'dark-mode'}`}>
            <div className="prev-chapter-div">
              <img
                src={isDarkMode ? prevLightIcon : prevDarkIcon}
                alt="prev-icon"
                className="prev-icon"
              />
              <span>Previous chapter</span>
            </div>
            <div className="next-chapter-div">
              <span>Next chapter</span>
              <img
                src={isDarkMode ? nextLightIcon : nextDarkIcon}
                alt="next-icon"
                className="next-icon"
              />
            </div>
          </div>
          <div className={`ReadWatchModal-close-div ${isDarkMode && 'dark-mode'}`}>
            <img
              src={isDarkMode ? escLightIcon : escDarkIcon}
              alt="esc-icon"
              className="esc-icon"
            />
            <span>Close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadWatchModal;

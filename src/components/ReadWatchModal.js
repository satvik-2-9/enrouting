import React, { useState } from 'react';
import closeIcon from '../images/ic_close.svg';
import prevLightIcon from '../images/ic_arrow_left_white.svg';
import prevDarkIcon from '../images/ic_arrow_left_gray.svg';
import nextLightIcon from '../images/ic_arrow_right_white.svg';
import nextDarkIcon from '../images/ic_arrow_right_gray.svg';
import escLightIcon from '../images/ic_esc_white.svg';
import escDarkIcon from '../images/ic_esc_gray.svg';
import '../styles/ReadWatchModal.css';

const notes = "Lorem ipsum dolor sit amet. Eos nisi odit qui porro voluptatum est sequi dolor et vero ullam aut eius nihil eum Quis mollitia. Aut dignissimos adipisci eum rerum voluptas et veritatis dignissimos aut tenetur suscipit ut dolorem nemo qui itaque cupiditate. Et eligendi aliquam vel iure natus sed dolores accusamus? Ea doloremque pariatur ut eaque optio est sint nulla ea ducimus porro ea velit culpa et assumenda deserunt. Ab eligendi culpa quo nisi asperiores ab velit esse. Et similique dolores a voluptatem natus non alias Quis vel quod veniam cum asperiores error ex fugit nulla aut tenetur perspiciatis?Qui vero eaque et laudantium quod est consequatur tempore. Eos galisum quia ut cupiditate delectus ea cupiditate sapiente et omnis eligendi et voluptatem deleniti et voluptatum amet sed sunt. Id quisquam voluptates cum voluptatem quia et eaque velit et molestias ullam. Quo exercitationem iste eum fugit suscipit et odio vero aut enim similique et quisquam natus non rerum iusto At asperiores earum."

const ReadWatchModal = (props) => {
  const { type, handleClose } = props;
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="ReadWatchModal">
      <div className={`ReadWatchModal-content ${isDarkMode && 'dark-mode'}`}>
        <span onClick={() => handleClose()}>
          <img src={closeIcon} alt="close-icon" className="ReadWatchModal-close-icon" />
        </span>
        <div className="ReadWatchModal-title-container">
          <h1>Name of the chapter</h1>
          <button>Download {type === 'notes' ? 'notes' : 'video'}</button>
        </div>
        <p className="ReadWatchModal-notes-text">
          {type === 'notes' ? 'Notes' : 'Video lecture'}
        </p>
        {type === 'notes' ? (
          <div className={`ReadWatchModal-notes-container ${isDarkMode && 'dark-mode'}`}>
            <div className="ReadWatchModal-notes">
              {notes}
              {notes}
              {notes}
              {notes}
              {notes}
              {notes}
              {notes}
              {notes}
              {notes}
              {notes}
              {notes}
              {notes}
            </div>
          </div >
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

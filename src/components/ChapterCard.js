import React from 'react';
import lockIcon from '../images/ic_lock.svg';
import nextIcon from '../images/ic_arrow_right.svg';
import '../styles/ChapterCard.css';

const ChapterCard = (props) => {
  const { isLocked, chapNo } = props;

  return (
    <div className="ChapterCard">
      <div className="ChapterCard-left">
        <p>Chapter {chapNo}</p>
        <p>Name of the chapter</p>
      </div>
      {isLocked ? (
        <div className="ChapterCard-right">
          <button>Unlock chapter</button>
          <img src={lockIcon} alt="lock-icon" className="lock-icon" />
        </div>
      ) : (
        <div className="ChapterCard-right">
          <div>
            <span>Read notes</span><img src={nextIcon} alt="next-icon" className="unlocked-icons" />
          </div>
          <div>
            <span>Watch lecture</span><img src={nextIcon} alt="next-icon" className="unlocked-icons" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChapterCard;

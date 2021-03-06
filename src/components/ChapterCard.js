import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReadWatchModal from './ReadWatchModal';
import UnlockChapterModal from './UnlockChapterModal';
import LoginModal from './LoginModal';
import lockIcon from '../images/ic_lock.svg';
import nextIcon from '../images/ic_arrow_right.svg';
import '../styles/ChapterCard.css';

const ChapterCard = (props) => {
  const { isLocked, chapter, course } = props;
  const [notesModal, setNotesModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [lecturesModal, setLecturesModal] = useState(false);
  const [unlockChapterModal, setUnlockChapterModal] = useState(false);

  const { isAuthenticated } = useSelector((store) => store.userReducer);

  const handleOpen = (type) => {
    if (type === 'notes') {
      setNotesModal(true);
    } else if (type === 'lectures') {
      setLecturesModal(true);
    } else if (type === 'login') {
      setLoginModal(true);
    } else {
      setUnlockChapterModal(true);
    }
  };

  const handleClose = () => {
    setNotesModal(false);
    setLecturesModal(false);
    setUnlockChapterModal(false);
    setLoginModal(false);
  };

  const handleUnlockClick = () => {
    isAuthenticated ? handleOpen('unlockChapter') : handleOpen('login');
  };

  (notesModal || lecturesModal || unlockChapterModal)
    ? document.querySelector("body").style.overflow = 'hidden'
    : document.querySelector("body").style.overflow = 'auto'

  return (
    <div className="ChapterCard">
      {notesModal &&
        <ReadWatchModal
          type={'notes'}
          handleClose={handleClose}
          chapter={chapter}
        />
      }
      {lecturesModal &&
        <ReadWatchModal
          type={'lectures'}
          handleClose={handleClose}
          chapter={chapter}
        />
      }
      {unlockChapterModal &&
        <UnlockChapterModal
          handleClose={handleClose}
          course={course}
        />
      }
      {loginModal && <LoginModal setLoginModal={handleClose} />}
      <div className="ChapterCard-left">
        <span>Chapter {chapter.number}</span>
        <p>{chapter.name}</p>
      </div>
      {isLocked ? (
        <div className="ChapterCard-right">
          <button onClick={handleUnlockClick}>Unlock chapter</button>
          <img src={lockIcon} alt="lock-icon" className="lock-icon" />
        </div>
      ) : (
        <div className="ChapterCard-right">
          <div onClick={() => handleOpen('notes')} className="read-watch-button">
            <span>Read notes</span>
            <img src={nextIcon} alt="next-icon" className="unlocked-icons" />
          </div>
          <div onClick={() => handleOpen('lectures')} className="read-watch-button">
            <span>Watch lecture</span>
            <img src={nextIcon} alt="next-icon" className="unlocked-icons" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChapterCard;

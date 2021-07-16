import React, { useState } from 'react';
import ReadWatchModal from './ReadWatchModal';
import UnlockChapterModal from './UnlockChapterModal';
import LoginModal from './LoginModal';
import lockIcon from '../images/ic_lock.svg';
import nextIcon from '../images/ic_arrow_right.svg';
import '../styles/ChapterCard.css';

const ChapterCard = (props) => {
  const { isLocked, chapNo } = props;
  const [notesModal, setNotesModal] = useState(false);
  const [lecturesModal, setLecturesModal] = useState(false);
  const [unlockChapterModal, setUnlockChapterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const handleOpen = (type) => {
    if (type === 'notes') {
      setNotesModal(true);
    } else if (type === 'lectures') {
      setLecturesModal(true);
    } else if (type === 'unlockChapter') {
      setUnlockChapterModal(true);
    } else {
      setLoginModal(true);
    }
  };

  const handleClose = () => {
    setNotesModal(false);
    setLecturesModal(false);
    setUnlockChapterModal(false);
    setLoginModal(false);
  };

  (notesModal || lecturesModal || unlockChapterModal || loginModal)
    ? document.querySelector("body").style.overflow = 'hidden'
    : document.querySelector("body").style.overflow = 'auto'

  return (
    <div className="ChapterCard">
      {notesModal && <ReadWatchModal type={'notes'} handleClose={handleClose} />}
      {lecturesModal && <ReadWatchModal type={'lectures'} handleClose={handleClose} />}
      {unlockChapterModal && <UnlockChapterModal handleClose={handleClose} />}
      {loginModal && <LoginModal handleClose={handleClose} />}
      <div className="ChapterCard-left">
        <p>Chapter {chapNo}</p>
        <p>Name of the chapter</p>
      </div>
      {isLocked ? (
        <div className="ChapterCard-right">
          <button onClick={() => handleOpen('unlockChapter')}>Unlock chapter</button>
          <img onClick={() => handleOpen('login')} src={lockIcon} alt="lock-icon" className="lock-icon" />
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

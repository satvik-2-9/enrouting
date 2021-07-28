import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserCourses } from '../redux/actions/courseActions';
import closeIcon from '../images/ic_close.svg';
import '../styles/TryModal.css';

const TryModal = (props) => {
  const { setTryModal } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const [activeMenu1Item, setActiveMenu1Item] = useState(0);
  const [activeMenu2Item, setActiveMenu2Item] = useState('');
  const [activeMenu3Item, setActiveMenu3Item] = useState('');

  const { isAuthenticated } = useSelector((store) => store.userReducer);
  const { allBoards } = useSelector((store) => store.boardReducer);
  const { allStandards } = useSelector((store) => store.standardReducer);
  const { allCourses, userCourses } = useSelector((store) => store.courseReducer);

  const handleSubmit = (course) => {
    closeAllMenu();
    if (!userCourses && isAuthenticated) {
      dispatch(getUserCourses());
    }
    history.push({
      pathname: '/course',
      state: course,
    });
  };

  const closeAllMenu = () => {
    setTryModal(false);
    setActiveMenu1Item(0);
    setActiveMenu2Item('');
    setActiveMenu3Item('');
  };

  const getFilteredCourses = (standard, board) => {
    return allCourses?.filter(course =>
      (course.class === standard.toString() && course.board === board)
    );
  };

  const subjectsMenu = (standard, board) => (
    <div className="TryModal-menu-2">
      {getFilteredCourses(standard, board).length === 0 ? (
        <div className="no-subject-item">
          <span>No subject available</span>
        </div>
      ) : getFilteredCourses(standard, board)?.map(course => (
        <div
          onClick={() => handleSubmit(course)}
          className="TryModal-menu-1-item"
        >
          <span>{course.subject}</span>
        </div>
      ))}
    </div>
  );

  const boardMenu = () => (
    <div className="TryModal-menu-2">
      {allBoards?.map(board => (
        <div>
          <div
            onClick={() => setActiveMenu3Item(board.name)}
            className={`TryModal-menu-1-item ${activeMenu3Item === board.name && 'active-item'}`}
          >
            <span>{board.name}</span>
          </div>
          {activeMenu3Item === board.name && subjectsMenu(activeMenu2Item, activeMenu3Item)}
        </div>
      ))}
    </div>
  );

  const classMenu = () => (
    <div className="TryModal-menu-2">
      {allStandards?.map(standard => (
        <div>
          <div
            onClick={() => setActiveMenu2Item(standard.class)}
            className={`TryModal-menu-1-item ${activeMenu2Item === standard.class && 'active-item'}`}
          >
            <span>{standard.class}th Class</span>
          </div>
          {activeMenu2Item === standard.class && boardMenu()}
        </div>
      ))}
    </div>
  );

  return (
    <div className="TryModal">
      <div className="TryModal-content">
        <span onClick={() => setTryModal(false)}>
          <img src={closeIcon} alt="close-icon" className="TryModal-close-icon" />
        </span>
        <div className="TryModal-container">
          <h1 className="TryModal-title">Select courses</h1>
          <div
            onClick={() => setActiveMenu1Item(1)}
            className={`TryModal-menu-1-item ${activeMenu1Item === 1 && 'active-item'}`}
          >
            <span>Notes & lectures</span>
          </div>
          {activeMenu1Item === 1 && classMenu()}
          <div
            onClick={() => setActiveMenu1Item(2)}
            className={`TryModal-menu-1-item ${activeMenu1Item === 2 && 'active-item'}`}
          >
            <span>Exam preparation</span>
          </div>
          <div
            onClick={() => setActiveMenu1Item(3)}
            className={`TryModal-menu-1-item ${activeMenu1Item === 3 && 'active-item'}`}
          >
            <span>Competitive exam</span>
          </div>
          <div
            onClick={() => setActiveMenu1Item(4)}
            className={`TryModal-menu-1-item ${activeMenu1Item === 4 && 'active-item'}`}
          >
            <span>Articulture</span>
          </div>
          <div
            onClick={() => setActiveMenu1Item(5)}
            className={`TryModal-menu-1-item ${activeMenu1Item === 5 && 'active-item'}`}
          >
            <span>Scifun</span>
          </div>
          <div
            onClick={() => setActiveMenu1Item(6)}
            className={`TryModal-menu-1-item ${activeMenu1Item === 6 && 'active-item'}`}
          >
            <span>Practical presentation</span>
          </div>
          <div
            onClick={() => setActiveMenu1Item(7)}
            className={`TryModal-menu-1-item ${activeMenu1Item === 7 && 'active-item'}`}
          >
            <span>Conceptual videos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryModal;

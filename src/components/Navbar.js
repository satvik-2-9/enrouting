import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import LoginModal from './LoginModal';
import OutsideClickHandler from 'react-outside-click-handler';
import brandLogo from '../images/ec_logo_nobg.png';
import downIcon from '../images/ic_arrow_down_green.svg';

import { logout } from '../redux/actions/userActions';
import { getAllCourses, getUserCourses } from '../redux/actions/courseActions';

import '../styles/Navbar.css';

const Navbar = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { activeMenuItem } = props;

  const [loginModal, setLoginModal] = useState(false);
  const [courseMenu, setCourseMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [activeMenu1Item, setActiveMenu1Item] = useState(0);
  const [activeMenu2Item, setActiveMenu2Item] = useState('');
  const [activeMenu3Item, setActiveMenu3Item] = useState('');
  const [activeProfileMenuItem, setActiveProfileMenuItem] = useState(0);

  const { isAuthenticated, userData } = useSelector((store) => store.userReducer);
  const { allCourses, userCourses } = useSelector((store) => store.courseReducer);

  const handleMenu1Click = (val) => {
    setActiveMenu1Item(val);
  };

  const handleSubmit = (course) => {
    handleOutsideClick();
    if (!userCourses && isAuthenticated) {
      dispatch(getUserCourses());
    }
    history.push({
      pathname: '/course',
      state: course,
    });
  };

  const handleCourseClick = () => {
    setCourseMenu(true);
    if (!allCourses) {
      dispatch(getAllCourses());
    }
  };

  const handleProfileClick = (option) => {
    setProfileMenu(false);
    if (option === 'profile')
      history.push('/profile');
    else if (option === 'purchases')
      history.push({
        pathname: '/purchases',
        state: 'purchases'
      });
    else if (option === 'events')
      history.push('/events');
    else if (option === 'workshop')
      history.push('/workshop');
    else if (option === 'notes')
      history.push({
        pathname: '/notes',
        state: 'notes'
      });
  };

  const handleOutsideClick = () => {
    setProfileMenu(false);
    setCourseMenu(false);
    setActiveMenu1Item(0);
    setActiveMenu2Item('');
    setActiveMenu3Item('');
    setActiveProfileMenuItem(0);
  };

  loginModal
    ? document.querySelector("body").style.overflow = 'hidden'
    : document.querySelector("body").style.overflow = 'auto'

  const getFilteredCourses = (standard, board) => {
    return allCourses.filter(course => (course.class === standard && course.board === board));
  };

  const subjectsMenu = (standard, board) => (
    <div className="course-menu-2">
      {getFilteredCourses(standard, board).map(course => (
        <div
          onClick={() => handleSubmit(course)}
          className="course-menu-1-item"
        >
          <span>{course.subject}</span>
        </div>
      ))}
    </div>
  );

  const boardMenu = () => (
    <div className="course-menu-2">
      <div
        onClick={() => setActiveMenu3Item('CBSE')}
        className={`course-menu-1-item ${activeMenu3Item === 'CBSE' && 'active-item'}`}
      >
        <span>CBSE board</span>
        {activeMenu3Item === 'CBSE' && subjectsMenu(activeMenu2Item, activeMenu3Item)}
      </div>
      <div
        onClick={() => setActiveMenu3Item('Kerala')}
        className={`course-menu-1-item ${activeMenu3Item === 'Kerala' && 'active-item'}`}
      >
        <span>Kerala board</span>
        {activeMenu3Item === 'Kerala' && subjectsMenu(activeMenu2Item, activeMenu3Item)}
      </div>
    </div>
  );

  const classMenu = () => (
    <div className="course-menu-2">
      <div
        onClick={() => setActiveMenu2Item('8')}
        className={`course-menu-1-item ${activeMenu2Item === '8' && 'active-item'}`}
      >
        <span>8th Class</span>
        {activeMenu2Item === '8' && boardMenu()}
      </div>
      <div
        onClick={() => setActiveMenu2Item('9')}
        className={`course-menu-1-item ${activeMenu2Item === '9' && 'active-item'}`}
      >
        <span>9th Class</span>
        {activeMenu2Item === '9' && boardMenu()}
      </div>
      <div
        onClick={() => setActiveMenu2Item('10')}
        className={`course-menu-1-item ${activeMenu2Item === '10' && 'active-item'}`}
      >
        <span>10th Class</span>
        {activeMenu2Item === '10' && boardMenu()}
      </div>
      <div
        onClick={() => setActiveMenu2Item('11')}
        className={`course-menu-1-item ${activeMenu2Item === '11' && 'active-item'}`}
      >
        <span>11th Class</span>
        {activeMenu2Item === '11' && boardMenu()}
      </div>
      <div
        onClick={() => setActiveMenu2Item('12')}
        className={`course-menu-1-item ${activeMenu2Item === '12' && 'active-item'}`}
      >
        <span>12th Class</span>
        {activeMenu2Item === '12' && boardMenu()}
      </div>
    </div>
  );

  return (
    <div className="Navbar">
      {courseMenu && <div className="dim"></div>}
      {loginModal && <LoginModal setLoginModal={setLoginModal} />}
      <div className="Navbar-container">
        <div className="Navbar-container-left">
          <img
            src={brandLogo}
            alt="ec_logo"
            className="ec-logo"
            onClick={() => history.push('/')}
          />
          <NavLink
            to='/'
            exact
            className={`nav-link ${activeMenuItem === 'home' && !courseMenu && !profileMenu && 'activ'}`}>
            <p onClick={() => setCourseMenu(false)} className="Navbar-items">Home</p>
          </NavLink>
          <div
            className={`Navbar-items course-div ${(courseMenu || activeMenuItem === 'course') && 'activ'}`}
          >
            <span className="course-text" onClick={handleCourseClick}>Course</span>
            {courseMenu && (
              <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                <div className="course-menu-1">
                  <div
                    onClick={() => handleMenu1Click(1)}
                    className={`course-menu-1-item ${activeMenu1Item === 1 && 'active-item'}`}
                  >
                    <span>Notes & lectures</span>
                    {activeMenu1Item === 1 && classMenu()}
                  </div>
                  <div
                    onClick={() => handleMenu1Click(2)}
                    className={`course-menu-1-item ${activeMenu1Item === 2 && 'active-item'}`}
                  >
                    <span>Exam preparation</span>
                  </div>
                  <div
                    onClick={() => handleMenu1Click(3)}
                    className={`course-menu-1-item ${activeMenu1Item === 3 && 'active-item'}`}
                  >
                    <span>Competitive exam</span>
                  </div>
                  <div
                    onClick={() => handleMenu1Click(4)}
                    className={`course-menu-1-item ${activeMenu1Item === 4 && 'active-item'}`}
                  >
                    <span>Articulture</span>
                  </div>
                  <div
                    onClick={() => handleMenu1Click(5)}
                    className={`course-menu-1-item ${activeMenu1Item === 5 && 'active-item'}`}
                  >
                    <span>Scifun</span>
                  </div>
                  <div
                    onClick={() => handleMenu1Click(6)}
                    className={`course-menu-1-item ${activeMenu1Item === 6 && 'active-item'}`}
                  >
                    <span>Practical presentation</span>
                  </div>
                  <div
                    onClick={() => handleMenu1Click(7)}
                    className={`course-menu-1-item ${activeMenu1Item === 7 && 'active-item'}`}
                  >
                    <span>Conceptual videos</span>
                  </div>
                </div>
              </OutsideClickHandler>
            )}
          </div>
          <NavLink
            to='/events'
            exact
            className={`nav-link ${activeMenuItem === 'events' && !courseMenu && !profileMenu && 'activ'}`}>
            <p onClick={() => setCourseMenu(false)} className="Navbar-items">Events</p>
          </NavLink>
          <NavLink
            to='/workshop'
            exact
            className={`nav-link ${activeMenuItem === 'workshop' && !courseMenu && !profileMenu && 'activ'}`}>
            <p onClick={() => setCourseMenu(false)} className="Navbar-items">Workshop</p>
          </NavLink>
          <NavLink
            to='/blogs'
            exact
            className={`nav-link ${activeMenuItem === 'blogs' && !courseMenu && !profileMenu && 'activ'}`}>
            <p className="Navbar-items">Blogs</p>
          </NavLink>
          <NavLink
            to='/about'
            exact
            className={`nav-link ${activeMenuItem === 'about' && !courseMenu && !profileMenu && 'activ'}`}>
            <p className="Navbar-items">About us</p>
          </NavLink>
        </div>
        <div className="Navbar-container-right">
          <NavLink
            to='/help'
            exact
            className={`nav-link ${activeMenuItem === 'help' && !courseMenu && !profileMenu && 'activ'}`}>
            <p className="Navbar-items">Help</p>
          </NavLink>
          {isAuthenticated ? (
            <div className={`Navbar-items profile-div ${(profileMenu || activeMenuItem === 'profile') && 'activ'}`}>
              <span
                className="name-text"
                onClick={() => setProfileMenu(true)}
              >
                {userData.firstname}
              </span>
              <img
                src={downIcon}
                alt="down-icon"
                className="down-icon"
                onClick={() => setProfileMenu(true)}
              />
              {profileMenu && (
                <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                  <div className="profile-menu">
                    <div
                      onClick={() => setActiveProfileMenuItem(1)}
                      className={`course-menu-1-item ${activeProfileMenuItem === 1 && 'active-item'}`}
                    >
                      <p onClick={() => handleProfileClick('profile')}>Profile</p>
                    </div>
                    <div
                      onClick={() => setActiveProfileMenuItem(2)}
                      className={`course-menu-1-item ${activeProfileMenuItem === 2 && 'active-item'}`}
                    >
                      <p onClick={() => handleProfileClick('purchases')}>My purchases</p>
                    </div>
                    <div
                      onClick={() => setActiveProfileMenuItem(3)}
                      className={`course-menu-1-item ${activeProfileMenuItem === 3 && 'active-item'}`}
                    >
                      <p onClick={() => handleProfileClick('events')}>Registered events</p>
                    </div>
                    <div
                      onClick={() => setActiveProfileMenuItem(4)}
                      className={`course-menu-1-item ${activeProfileMenuItem === 4 && 'active-item'}`}
                    >
                      <p onClick={() => handleProfileClick('workshop')}>Workshop</p>
                    </div>
                    <div
                      onClick={() => setActiveProfileMenuItem(5)}
                      className={`course-menu-1-item ${activeProfileMenuItem === 5 && 'active-item'}`}
                    >
                      <p onClick={() => handleProfileClick('notes')}>My Notes</p>
                    </div>
                    <div
                      onClick={() => setActiveProfileMenuItem(6)}
                      className={`course-menu-1-item ${activeProfileMenuItem === 6 && 'active-item'}`}
                    >
                      <p onClick={() => dispatch(logout(history))}>Log Out</p>
                    </div>
                  </div>
                </OutsideClickHandler>
              )}
            </div>
          ) : (
            <p onClick={() => setLoginModal(true)} className="Navbar-items">Login</p>
          )}
          <button className="try-free-button">Try for free</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

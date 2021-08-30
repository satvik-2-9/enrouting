import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import LoginModal from './LoginModal';
import TryModal from './TryModal';
import OutsideClickHandler from 'react-outside-click-handler';
import brandLogo from '../images/ec_logo_nobg.png';
import downIcon from '../images/ic_arrow_down_green.svg';
import { logout } from '../redux/actions/userActions';
import { getAllBoards } from '../redux/actions/boardActions';
import { getAllStandards } from '../redux/actions/standardActions';
import { getAllCourses, getUserCourses } from '../redux/actions/courseActions';
import '../styles/Navbar.css';

const Navbar = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { activeMenuItem } = props;

  const [loginModal, setLoginModal] = useState(false);
  const [tryModal, setTryModal] = useState(false);
  const [courseMenu, setCourseMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [activeMenu1Item, setActiveMenu1Item] = useState(0);
  const [activeMenu2Item, setActiveMenu2Item] = useState('');
  const [activeMenu3Item, setActiveMenu3Item] = useState('');
  const [activeProfileMenuItem, setActiveProfileMenuItem] = useState(0);

  const { isAuthenticated, userData } = useSelector((store) => store.userReducer);
  const { allBoards } = useSelector((store) => store.boardReducer);
  const { allStandards } = useSelector((store) => store.standardReducer);
  const { allCourses, userCourses } = useSelector((store) => store.courseReducer);

  useEffect(() => {
    if (allBoards.length === 0) {
      dispatch(getAllBoards());
    }
    if (allStandards.length === 0) {
      dispatch(getAllStandards());
    }
  }, [dispatch, allBoards, allStandards]);

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

  const handleTryClick = () => {
    setTryModal(true);
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
      history.push('/myEvents');
    else if (option === 'workshop')
      history.push('/myWorkshops');
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

  (loginModal || tryModal)
    ? document.querySelector("body").style.overflow = 'hidden'
    : document.querySelector("body").style.overflow = 'auto'

  const getFilteredCourses = (standard, board) => {
    return allCourses?.filter(course =>
      (course.class === standard.toString() && course.board === board)
    );
  };

  const comingSoonMenu = () => (
    <div className="course-menu-2">
      <div className="no-subject-item">
        <span>Available soon</span>
      </div>
    </div>
  );

  const subjectsMenu = (standard, board) => (
    <div className="course-menu-2">
      {getFilteredCourses(standard, board).length === 0 ? (
        <div className="no-subject-item">
          <span>No subject available</span>
        </div>
      ) : getFilteredCourses(standard, board)?.map(course => (
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
      {allBoards?.map(board => (
        <div
          onClick={() => setActiveMenu3Item(board.name)}
          className={`course-menu-1-item ${activeMenu3Item === board.name && 'active-item'}`}
        >
          <span>{board.name}</span>
          {activeMenu3Item === board.name && subjectsMenu(activeMenu2Item, activeMenu3Item)}
        </div>
      ))}
    </div>
  );

  const classMenu = () => (
    <div className="course-menu-2">
      {allStandards?.map(standard => (
        <div
          onClick={() => setActiveMenu2Item(standard.class)}
          className={`course-menu-1-item ${activeMenu2Item === standard.class && 'active-item'}`}
        >
          <span>{standard.class}th Class</span>
          {activeMenu2Item === standard.class && boardMenu()}
        </div>
      ))}
    </div>
  );
  const [ct, setct] = useState(false);

  return (
    <div className="Navbar">
      {courseMenu && <div className="dim"></div>}
      {loginModal && <LoginModal setLoginModal={setLoginModal} />}
      {tryModal && <TryModal setTryModal={setTryModal} />}
      <div className="Navbar-container">
        <div className="Navbar-container-left">
          
          <div className="bar" onClick={() => { setct(!ct) }}><i class={ct?"fas fa-times":"fas fa-bars"}></i></div>
          
          
          <img
            src={brandLogo}
            alt="ec_logo"
            className="ec-logo"
            onClick={() => history.push('/')}
          />
          <div className={ct===true?"nav_left":"remove"}>

          <NavLink
            to='/'
            exact
            className={`nav-link ${activeMenuItem === 'home' && !courseMenu && !profileMenu && 'activ'}`}>
            <p onClick={() => setCourseMenu(false)} className="Navbar-items">Home</p>
          </NavLink>
          <div
            className={`Navbar-items course-div ${(courseMenu || activeMenuItem === 'course') && 'activ'}`}
          >
            <p className="course-text" onClick={handleCourseClick}>Course</p>
            {courseMenu && (
              <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                <div className="course-menu-1">
                
                    <div
                    onClick={() => handleMenu1Click(1)}
                    className={`course-menu-1-item ${activeMenu1Item === 1 && 'active-item'}`}
                  >
                    <span className="uu"  >Notes & lectures</span>
                    {activeMenu1Item === 1 && classMenu()}
                   </div>
               
                  <div
                    onClick={() => handleMenu1Click(2)}
                    className={`course-menu-1-item ${activeMenu1Item === 2 && 'active-item'}`}
                  >
                    <span className="uu" >Exam preparation</span>
                    {activeMenu1Item === 2 && comingSoonMenu()}
                  </div>
                  <div
                    onClick={() => handleMenu1Click(3)}
                    className={`course-menu-1-item ${activeMenu1Item === 3 && 'active-item'}`}
                  >
                    <span className="uu" >Competitive exam</span>
                    {activeMenu1Item === 3 && comingSoonMenu()}
                  </div>
                  <div
                    onClick={() => handleMenu1Click(4)}
                    className={`course-menu-1-item ${activeMenu1Item === 4 && 'active-item'}`}
                  >
                    <span className="uu" >Articulture</span>
                    {activeMenu1Item === 4 && comingSoonMenu()}
                  </div>
                  <div
                    onClick={() => handleMenu1Click(5)}
                    className={`course-menu-1-item ${activeMenu1Item === 5 && 'active-item'}`}
                  >
                    <span className="uu"  >Scifun</span>
                    {activeMenu1Item === 5 && comingSoonMenu()}
                  </div>
                  <div
                    onClick={() => handleMenu1Click(6)}
                    className={`course-menu-1-item ${activeMenu1Item === 6 && 'active-item'}`}
                  >
                    <span className="uu" >Practical presentation</span>
                    {activeMenu1Item === 6 && comingSoonMenu()}
                  </div>
                  <div
                    onClick={() => handleMenu1Click(7)}
                    className={`course-menu-1-item ${activeMenu1Item === 7 && 'active-item'}`}
                  >
                    <span className="uu"  >Conceptual videos</span>
                    {activeMenu1Item === 7 && comingSoonMenu()}
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
        </div>
        <div className="Navbar-container-right">
        
        <div className={ct===true?"sec":"sec_shrink"}>
          <NavLink
            to='/help'
            exact
            className={`nav-link ${activeMenuItem === 'help' && !courseMenu && !profileMenu && 'activ'}`}>
            <p className="Navbar-items help">Help</p>
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

          </div>
          <button onClick={() => handleTryClick()} className={`try-free-button ${ct && 'j'}`}>
            <div className="ff">Try for free</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = (props) => {
  const history = useHistory();
  const { activeMenuItem } = props;
  const [courseMenu, setCourseMenu] = useState(false);
  const [activeMenu1Item, setActiveMenu1Item] = useState(0);
  const [activeMenu2Item, setActiveMenu2Item] = useState(0);

  const handleSubmit = () => {
    setCourseMenu(false);
    history.push('/course');
  };

  return (
    <div className="Navbar">
      {courseMenu && <div className="dim"></div>}
      <div className="Navbar-container">
        <div className="Navbar-container-left">
          <span className="Navbar-items">RS</span>
          <NavLink
            to='/'
            exact
            className={`nav-link ${activeMenuItem === 'home' && !courseMenu && 'activ'}`}>
            <p onClick={() => setCourseMenu(false)} className="Navbar-items">Home</p>
          </NavLink>
          <div
            className={`Navbar-items course-div ${(courseMenu || activeMenuItem === 'course') && 'activ'}`}
          >
            <span onClick={() => setCourseMenu(true)}>Course</span>
            {courseMenu && (
              <div className="course-menu-1">
                <div
                  onClick={() => setActiveMenu1Item(1)}
                  className={`course-menu-1-item ${activeMenu1Item === 1 && 'active-item'}`}
                >
                  <span>Notes & lectures</span>
                  {activeMenu1Item === 1 && (
                    <div className="course-menu-2">
                      <div
                        onClick={() => setActiveMenu2Item(1)}
                        className={`course-menu-1-item ${activeMenu2Item === 1 && 'active-item'}`}
                      >
                        <span>8th Class</span>
                      </div>
                      <div
                        onClick={() => setActiveMenu2Item(2)}
                        className={`course-menu-1-item ${activeMenu2Item === 2 && 'active-item'}`}
                      >
                        <span>9th Class</span>
                      </div>
                      <div
                        onClick={() => setActiveMenu2Item(3)}
                        className={`course-menu-1-item ${activeMenu2Item === 3 && 'active-item'}`}
                      >
                        <span>10th Class</span>
                        {activeMenu2Item === 3 && (
                          <div className="course-menu-2">
                            <div
                              onClick={handleSubmit}
                              className="course-menu-1-item"
                            >
                              <span>CBSE board</span>
                            </div>
                            <div
                              onClick={handleSubmit}
                              className="course-menu-1-item"
                            >
                              <span>Kerala board</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div
                        onClick={() => setActiveMenu2Item(4)}
                        className={`course-menu-1-item ${activeMenu2Item === 4 && 'active-item'}`}
                      >
                        <span>11th Class</span>
                      </div>
                      <div
                        onClick={() => setActiveMenu2Item(5)}
                        className={`course-menu-1-item ${activeMenu2Item === 5 && 'active-item'}`}
                      >
                        <span>12th Class</span>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setActiveMenu1Item(2)}
                  className={`course-menu-1-item ${activeMenu1Item === 2 && 'active-item'}`}
                >
                  <span>Exam preparation</span>
                </div>
                <div
                  onClick={() => setActiveMenu1Item(3)}
                  className={`course-menu-1-item ${activeMenu1Item === 3 && 'active-item'}`}
                >
                  <span>Competitive exam</span>
                </div>
                <div
                  onClick={() => setActiveMenu1Item(4)}
                  className={`course-menu-1-item ${activeMenu1Item === 4 && 'active-item'}`}
                >
                  <span>Articulture</span>
                </div>
                <div
                  onClick={() => setActiveMenu1Item(5)}
                  className={`course-menu-1-item ${activeMenu1Item === 5 && 'active-item'}`}
                >
                  <span>Scifun</span>
                </div>
                <div
                  onClick={() => setActiveMenu1Item(6)}
                  className={`course-menu-1-item ${activeMenu1Item === 6 && 'active-item'}`}
                >
                  <span>Practical presentation</span>
                </div>
                <div
                  onClick={() => setActiveMenu1Item(7)}
                  className={`course-menu-1-item ${activeMenu1Item === 7 && 'active-item'}`}
                >
                  <span>Conceptual videos</span>
                </div>
              </div>
            )}
          </div>
          <NavLink
            to='/events'
            exact
            className={`nav-link ${activeMenuItem === 'events' && !courseMenu && 'activ'}`}>
            <p onClick={() => setCourseMenu(false)} className="Navbar-items">Events</p>
          </NavLink>
          <NavLink
            to='/workshop'
            exact
            className={`nav-link ${activeMenuItem === 'workshop' && !courseMenu && 'activ'}`}>
            <p onClick={() => setCourseMenu(false)} className="Navbar-items">Workshop</p>
          </NavLink>
          <NavLink to='/blogs' exact className="nav-link">
            <p className="Navbar-items">Blogs</p>
          </NavLink>
          <NavLink to='/about' exact className="nav-link">
            <p className="Navbar-items">About us</p>
          </NavLink>
        </div>
        <div className="Navbar-container-right">
          <NavLink to='/help' exact className="nav-link">
            <p className="Navbar-items">Help</p>
          </NavLink>
          <NavLink to='/profile' exact className="nav-link">
            <p className="Navbar-items">Login</p>
          </NavLink>
          <button className="try-free-button">Try for free</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

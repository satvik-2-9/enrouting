import React, { useState } from 'react';
import heroImage from '../images/img_hero.png';
import favIcon from '../images/ic_fav.svg';
import universityLogo1 from '../images/logo_univercity_1.jpg';
import universityLogo2 from '../images/logo_univercity_2.jpg';
import featureImage1 from '../images/ic_simple_n_1.svg';
import featureImage2 from '../images/ic_simple_n_2.svg';
import featureImage3 from '../images/ic_simple_n_3.svg';
import featureImage4 from '../images/ic_simple_n_4.svg';
import featureImage5 from '../images/ic_simple_n_5.svg';
import featureImage6 from '../images/ic_simple_n_6.svg';
import eventsImage from '../images/img_events.png';
import workshopImage1 from '../images/img_tech_workshop1.svg';
import workshopImage2 from '../images/img_tech_workshop2.svg';
import workshopImage3 from '../images/img_tech_workshop3.svg';
import workshopImage4 from '../images/img_tech_workshop4.svg';
import teachersImage from '../images/img_best_teacher.svg';
import studentImage from '../images/img_student.jpg';
import starIcon from '../images/ic_star.svg';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/HomePage.css';

const HomePage = () => {
  const [activeDot, setActiveDot] = useState(1);

  const handleDotClick = (val) => {
    setActiveDot(val);
  };

  return (
    <div className="HomePage">
      <Navbar />
      <div className="welcome-section">
        <div className="welcome-textbox">
          <h1 className="welcome-text1">Welcome to Enrouting careers</h1>
          <h1 className="welcome-text2">Own your future with us</h1>
        </div>
        <img src={heroImage} alt="img-hero" className="hero-img" />
        <div className="curved-div">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M-0.84,99.17 C84.36,59.70 263.82,-16.28 502.54,95.22 L504.22,170.22 L-1.97,152.45 Z" style={{ stroke: 'none', fill: '#3eac72' }}></path>
          </svg>
        </div>
        <div className="curved-div">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M-14.39,155.42 C123.87,88.31 252.54,8.39 502.54,95.22 L504.22,170.22 L-8.74,172.20 Z" style={{ stroke: 'none', fill: '#ffffff' }}></path>
          </svg>
        </div>
      </div>
      <div className="university-section">
        <div className="university-section-container">
          <div className="university-section-content-box-left">
            <h1>6000+</h1>
            <div className="fav-icon-container">
              <img className="fav-icon" src={favIcon} alt="fav-icon-1" />
              <img className="fav-icon" src={favIcon} alt="fav-icon-2" />
              <img className="fav-icon" src={favIcon} alt="fav-icon-3" />
              <img className="fav-icon" src={favIcon} alt="fav-icon-4" />
              <img className="fav-icon" src={favIcon} alt="fav-icon-5" />
            </div>
            <p>Active students</p>
          </div>
          {activeDot === 1 && (
            <div className="university-section-content-box-right">
              <h1>Trust our world of learning, joining us to achieve their goals.</h1>
              <p>Collaborated with universities</p>
              <div className="university-icon-container">
                <img className="university-logo" src={universityLogo1} alt="university-1" />
                <img className="university-logo" src={universityLogo2} alt="university-2" />
              </div>
            </div>
          )}
          {activeDot === 2 && (
            <div className="university-section-content-box-right">
              <h1>Organised 50+ technical events, in and around 15+ cities all over India.</h1>
            </div>
          )}
          {activeDot === 3 && (
            <div className="university-section-content-box-right">
              <h1>75+ technical workshops conducted.</h1>
            </div>
          )}
          <div className="carousal-pagination">
            <span
              className={`dot ${activeDot === 1 && 'checked'}`}
              onClick={() => handleDotClick(1)}
            ></span>
            <span
              className={`dot ${activeDot === 2 && 'checked'}`}
              onClick={() => handleDotClick(2)}
            ></span>
            <span
              className={`dot ${activeDot === 3 && 'checked'}`}
              onClick={() => handleDotClick(3)}
            ></span>
          </div>
        </div>
      </div>
      <div className="features-section">
        <div className="features-section-title">
          <h1>Why simple notes are better than Tuitions & video classNamees"</h1>
        </div>
        <div className="features-container">
          <div className="features-container-row">
            <div className="feature-item">
              <img src={featureImage1} alt="feature-1" className="feature-img" />
              <p className="feature-text">
                Easily learn and understand tough topics without a guide. Boost your self confidence.
              </p>
            </div>
            <div className="feature-item">
              <img src={featureImage2} alt="feature-2" className="feature-img" />
              <p className="feature-text">
                No more tough tuition timings, no more travel time.
              </p>
            </div>
            <div className="feature-item">
              <img src={featureImage3} alt="feature-3" className="feature-img" />
              <p className="feature-text">
                No more dependence in solving problems or analyzing solutions.
              </p>
            </div>
          </div>
          <div className="features-container-row">
            <div className="feature-item">
              <img src={featureImage4} alt="feature-4" className="feature-img" />
              <p className="feature-text">
                Watch the lectures any number of times, no particular timetable.
              </p>
            </div>
            <div className="feature-item">
              <img src={featureImage5} alt="feature-5" className="feature-img" />
              <p className="feature-text">
                No more worries of loosing a className or avoiding family functions.
              </p>
            </div>
            <div className="feature-item">
              <img src={featureImage6} alt="feature-6" className="feature-img" />
              <p className="feature-text">
                All these at the comfort from your home.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="events-section">
        <div className="event-curved-div" >
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M-0.27,1.48 C160.55,79.44 349.60,80.42 501.41,1.48 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#2f2f2f' }}></path>
          </svg>
        </div>
        <div className="events-section-text-div">
          <div className="events-section-title-container">
            <h1>Events which will challenge your abilities & help in evolution</h1>
          </div>
          <div className="events-section-subtitle-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dsd sdeom.</p>
          </div>
          <button>Register for events</button>
        </div>
        <div className="events-section-container">
          <img src={eventsImage} alt="events-img" className="events-img" />
        </div>
      </div>
      <div className="experience-section">
        <div className="experience-section-container">
          <h1>Best notes from 10+ year teaching experience teachers will crack all your troubles</h1>
          <div className="experience-section-content-div">
            <div className="experience-section-content-div-left">
              <h3>Become an Independent learner.</h3>
              <p>Become self reliant.</p>
              <p>Start making Informed decisions about your learning.</p>
              <p>Be aware of your strength and weaknesses.</p>
              <p>Connect the classNameroom learning with the real world.</p>
              <p>Start taking responsibility for your own learning.</p>
              <p>Know about the different strategies of learning.</p>
            </div>
            <div className="experience-section-content-div-right">
              <img src={teachersImage} alt="best-teacher" className="teacher-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="workshops-section">
        <h1>Technical Workshops</h1>
        <div className="workshops-section-card-container">
          <div className="workshops-section-card-container-row">
            <div className="workshops-section-card">
              <img src={featureImage4} alt="workshop-img-1" className="workshop-feature-img" />
              <p>Provides practical knowledge on various topics which would help the students to build strong concepts and hands on experience.</p>
            </div>
            <div className="workshops-section-card">
              <img src={workshopImage2} alt="workshop-img-2" className="workshop-img" />
              <p>Opportunities for networking with other like minded students.</p>
            </div>
            <div className="workshops-section-card">
              <img src={workshopImage3} alt="workshop-img-3" className="workshop-img" />
              <p>Will help you realize and think new ideas as you learn.</p>
            </div>
          </div>
          <div className="workshops-section-card-container-row">
            <div className="workshops-section-card">
              <img src={workshopImage4} alt="workshop-img-4" className="workshop-img" />
              <p>Have fun while learning.</p>
            </div>
            <div className="workshops-section-card">
              <img src={featureImage6} alt="workshop-img-5" className="workshop-feature-img" />
              <p>Get inspired to work better on your ideas.</p>
            </div>
            <div className="workshops-section-card">
              <img src={workshopImage1} alt="workshop-img-6" className="workshop-img" />
              <p>Step by step explanations on how a project is completed.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-section">
        <div className="empty-div">

        </div>
        <div className="testimonial-curved-div" >
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M-1.41,68.58 C175.78,-7.39 317.43,14.30 500.84,91.28 L503.67,159.38 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#3eac72' }}></path>
          </svg>
        </div>
        <div className="testimonial-curved-div" >
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M-1.41,68.58 C178.61,6.42 320.82,25.16 502.54,150.48 L503.67,153.45 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#2f2f2f' }}></path>
          </svg>
        </div>
        <div className="testimonial-section-container">
          <div className="testimonial-section-title-div">
            <h1>What our students says</h1>
          </div>
          <div className="testimonial-section-content-box">
            <div className="testimonial-section-content-box-left">
              <img src={studentImage} alt="student-img" className="student-img" />
            </div>
            <div className="testimonial-section-content-box-right">
              <div className="star-container">
                <img src={starIcon} alt="star-icon-1" className="star-icon" />
                <img src={starIcon} alt="star-icon-2" className="star-icon" />
                <img src={starIcon} alt="star-icon-3" className="star-icon" />
                <img src={starIcon} alt="star-icon-4" className="star-icon" />
                <img src={starIcon} alt="star-icon-5" className="star-icon" />
              </div>
              <p className="testimonial-text">Lorem ipsum dolor sit amet. Laudantium voluptatem est sunt eaque hic minus. Delectus rerum ut pariatur maiores ut dolor cupiditate et ipsa saepe ut delectus maiores est impedit minima qui harum dolorem.</p>
              <p className="name-text">Nisha Patel</p>
              <p className="board-text">CBSC board</p>
            </div>
          </div>
        </div>
      </div>
      <div className="conclusion-section">
        <h3>Its not just how well you were taught that bring great results, it's the efforts that the student puts in to get those result on board.</h3>
        <h1>"WE TEACH THEY PERSUE" !!!</h1>
        <button>Try for free</button>
      </div>
      <Footer />
    </div >
  );
};

export default HomePage;

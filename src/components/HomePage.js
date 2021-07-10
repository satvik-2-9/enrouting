import React from 'react';
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
import youtubeIcon from '../images/ic_youtube.svg';
import instaIcon from '../images/ic_insta.svg';
import fbIcon from '../images/ic_fb.svg';
import linkedinIcon from '../images/ic_linkedin.svg';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div class="HomePage">
      <div class="welcome-section">
        <div class="welcome-textbox">
          <h1 class="welcome-text1">Welcome to Enrouting careers</h1>
          <h1 class="welcome-text2">Own your future with us</h1>
        </div>
        <img src={heroImage} alt="img-hero" class="hero-img" />
        <div class="curved-div">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M-0.84,99.17 C84.36,59.70 263.82,-16.28 502.54,95.22 L504.22,170.22 L-1.97,152.45 Z" style={{ stroke: 'none', fill: '#3eac72' }}></path>
          </svg>
        </div>
        <div class="curved-div">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M-14.39,155.42 C123.87,88.31 252.54,8.39 502.54,95.22 L504.22,170.22 L-8.74,172.20 Z" style={{ stroke: 'none', fill: '#ffffff' }}></path>
          </svg>
        </div>
      </div>
      <div class="university-section">
        <div class="university-section-container">
          <div class="university-section-content-box-left">
            <h1>6000+</h1>
            <div class="fav-icon-container">
              <img class="fav-icon" src={favIcon} alt="fav-icon-1" />
              <img class="fav-icon" src={favIcon} alt="fav-icon-2" />
              <img class="fav-icon" src={favIcon} alt="fav-icon-3" />
              <img class="fav-icon" src={favIcon} alt="fav-icon-4" />
              <img class="fav-icon" src={favIcon} alt="fav-icon-5" />
            </div>
            <p>Active students</p>
          </div>
          <div class="university-section-content-box-right">
            <h1>Trust our world of learning, joining us to achieve their goals.</h1>
            <p>Collaborated with universities</p>
            <div class="university-icon-container">
              <img class="university-logo" src={universityLogo1} alt="university-1" />
              <img class="university-logo" src={universityLogo2} alt="university-2" />
            </div>
          </div>
          <div class="carousal-pagination">
            <span class="dot checked"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      </div>
      <div class="features-section">
        <div class="features-section-title">
          <h1>Why simple notes are better than Tuitions & video classes"</h1>
        </div>
        <div class="features-container">
          <div class="features-container-row">
            <div class="feature-item">
              <img src={featureImage1} alt="feature-1" class="feature-img" />
              <p class="feature-text">
                Easily learn and understand tough topics without a guide. Boost your self confidence.
              </p>
            </div>
            <div class="feature-item">
              <img src={featureImage2} alt="feature-2" class="feature-img" />
              <p class="feature-text">
                No more tough tuition timings, no more travel time.
              </p>
            </div>
            <div class="feature-item">
              <img src={featureImage3} alt="feature-3" class="feature-img" />
              <p class="feature-text">
                No more dependence in solving problems or analyzing solutions.
              </p>
            </div>
          </div>
          <div class="features-container-row">
            <div class="feature-item">
              <img src={featureImage4} alt="feature-4" class="feature-img" />
              <p class="feature-text">
                Watch the lectures any number of times, no particular timetable.
              </p>
            </div>
            <div class="feature-item">
              <img src={featureImage5} alt="feature-5" class="feature-img" />
              <p class="feature-text">
                No more worries of loosing a class or avoiding family functions.
              </p>
            </div>
            <div class="feature-item">
              <img src={featureImage6} alt="feature-6" class="feature-img" />
              <p class="feature-text">
                All these at the comfort from your home.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="events-section">
        <div class="event-curved-div" >
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M-0.27,1.48 C160.55,79.44 349.60,80.42 501.41,1.48 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#2f2f2f' }}></path>
          </svg>
        </div>
        <div class="events-section-text-div">
          <div class="events-section-title-container">
            <h1>Events which will challenge your abilities & help in evolution</h1>
          </div>
          <div class="events-section-subtitle-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dsd sdeom.</p>
          </div>
          <button>Register for events</button>
        </div>
        <div class="events-section-container">
          <img src={eventsImage} alt="events-img" class="events-img" />
        </div>
      </div>
      <div class="experience-section">
        <div class="experience-section-container">
          <h1>Best notes from 10+ year teaching experience teachers will crack all your troubles</h1>
          <div class="experience-section-content-div">
            <div class="experience-section-content-div-left">
              <h3>Become an Independent learner.</h3>
              <p>Become self reliant.</p>
              <p>Start making Informed decisions about your learning.</p>
              <p>Be aware of your strength and weaknesses.</p>
              <p>Connect the classroom learning with the real world.</p>
              <p>Start taking responsibility for your own learning.</p>
              <p>Know about the different strategies of learning.</p>
            </div>
            <div class="experience-section-content-div-right">
              <img src={teachersImage} alt="best-teacher" class="teacher-img" />
            </div>
          </div>
        </div>
      </div>
      <div class="workshops-section">
        <h1>Technical Workshops</h1>
        <div class="workshops-section-card-container">
          <div class="workshops-section-card-container-row">
            <div class="workshops-section-card">
              <img src={featureImage4} alt="workshop-img-1" class="workshop-feature-img" />
              <p>Provides practical knowledge on various topics which would help the students to build strong concepts and hands on experience.</p>
            </div>
            <div class="workshops-section-card">
              <img src={workshopImage2} alt="workshop-img-2" class="workshop-img" />
              <p>Opportunities for networking with other like minded students.</p>
            </div>
            <div class="workshops-section-card">
              <img src={workshopImage3} alt="workshop-img-3" class="workshop-img" />
              <p>Will help you realize and think new ideas as you learn.</p>
            </div>
          </div>
          <div class="workshops-section-card-container-row">
            <div class="workshops-section-card">
              <img src={workshopImage4} alt="workshop-img-4" class="workshop-img" />
              <p>Have fun while learning.</p>
            </div>
            <div class="workshops-section-card">
              <img src={featureImage6} alt="workshop-img-5" class="workshop-feature-img" />
              <p>Get inspired to work better on your ideas.</p>
            </div>
            <div class="workshops-section-card">
              <img src={workshopImage1} alt="workshop-img-6" class="workshop-img" />
              <p>Step by step explanations on how a project is completed.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="testimonial-section">
        <div class="empty-div">

        </div>
        <div class="testimonial-curved-div" >
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M-1.41,68.58 C175.78,-7.39 317.43,14.30 500.84,91.28 L503.67,159.38 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#3eac72' }}></path>
          </svg>
        </div>
        <div class="testimonial-curved-div" >
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M-1.41,68.58 C178.61,6.42 320.82,25.16 502.54,150.48 L503.67,153.45 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#2f2f2f' }}></path>
          </svg>
        </div>
        <div class="testimonial-section-container">
          <div class="testimonial-section-title-div">
            <h1>What our students says</h1>
          </div>
          <div class="testimonial-section-content-box">
            <div class="testimonial-section-content-box-left">
              <img src={studentImage} alt="student-img" class="student-img" />
            </div>
            <div class="testimonial-section-content-box-right">
              <div class="star-container">
                <img src={starIcon} alt="star-icon-1" class="star-icon" />
                <img src={starIcon} alt="star-icon-2" class="star-icon" />
                <img src={starIcon} alt="star-icon-3" class="star-icon" />
                <img src={starIcon} alt="star-icon-4" class="star-icon" />
                <img src={starIcon} alt="star-icon-5" class="star-icon" />
              </div>
              <p class="testimonial-text">Lorem ipsum dolor sit amet. Laudantium voluptatem est sunt eaque hic minus. Delectus rerum ut pariatur maiores ut dolor cupiditate et ipsa saepe ut delectus maiores est impedit minima qui harum dolorem.</p>
              <p class="name-text">Nisha Patel</p>
              <p class="board-text">CBSC board</p>
            </div>
          </div>
        </div>
      </div>
      <div class="conclusion-section">
        <h3>Its not just how well you were taught that bring great results, it's the efforts that the student puts in to get those result on board.</h3>
        <h1>"WE TEACH THEY PERSUE" !!!</h1>
        <button>Try for free</button>
      </div>
      <div class="links-section">
        <div class="links-vertical-div">
          <p class="links-title">ABOUT</p>
          <p class="links-text">About us</p>
          <p class="links-text">Our story</p>
          <p class="links-text">Vision</p>
        </div>
        <div class="links-vertical-div">
          <p class="links-title">ACADEMICS</p>
          <p class="links-text">CBSE</p>
          <p class="links-text">Kerala board</p>
          <p class="links-text">Resources</p>
          <p class="links-text">Webinar</p>
        </div>
        <div class="links-vertical-div">
          <p class="links-title">COURSES</p>
          <p class="links-title">EVENTS</p>
          <p class="links-title">FAQ</p>
        </div>
        <div class="links-vertical-div">
          <p class="links-title">SOCIAL MEDIA</p>
          <div class="social-media-icons-container">
            <img src={linkedinIcon} alt="linkedin-icon" class="social-media-icon" />
            <img src={fbIcon} alt="fb-icon" class="social-media-icon" />
            <img src={instaIcon} alt="insta-icon" class="social-media-icon" />
            <img src={youtubeIcon} alt="youtube-icon" class="social-media-icon" />
          </div>
        </div>
      </div>
      <div class="terms-container">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </div>
      <footer class="footer-text">© 2021 Enrouting careers. All rights reserved.</footer>
    </div >
  );
};

export default HomePage;

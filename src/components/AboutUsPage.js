import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import aboutUsImage from '../images/img_aboutus.svg';
import '../styles/AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="AboutUsPage">
      <Navbar activeMenuItem={'about'} />
      <div className="AboutUsPage-container">
        <div className="AboutUsPage-container-left">
          <img src={aboutUsImage} alt="aboutUs-img" className="aboutUs-img" />
        </div>
        <div className="AboutUsPage-container-right">
          <div className="AboutUsPage-text-box">
            <h1>About Us</h1>
            <p>As a firm our main objective is to built a small sense of responsibility to their
              futuristic goals. By the time they finish up their high school they should be well
              aware of the path they need to travel through rather than taking up confused
              decisions. Parents need to understand that more than marks, talents and abilities of
              a candidate is tested in each and every field they try to take up. We are just a small
              firm who try to built that practical knowledge and ability in your kids which they can
              take on to their own levels after acquiring a basic knowledge of the theoretical
              concepts practically that they are taught in schools.</p>
            <p>The most important fact that we should realize is that there is no conventional way
              of learning or teaching a particular topic. Some learn from visual learning, some
              learn from study materials and others seek help from notes that usually 80% of the
              student population don't use as a professional learning method and is left out in
              negligence. Our main objective is to provide them with detailed notes and make
              them adapted towards the learning method that they would compulsorily require in
              their graduation levels where the topics are complex and vast. The method of
              learning through notes is always an added benefit, It gets registered in brain and it's
              always a quick way of revision. It's said that 10-15% of the eye movements are
              regressive, this means that the eyes go back and recheck what you just read, all this
              happens in just a fraction of seconds but has a great impact on the understanding.</p>
            <p>We conduct technical and non-technical events like exhibitions where they get to see
              their competitors they realize that its not just them who are good at it. It is their
              fellow beings as well, we also conduct workshops for the students so that they can
              explore the technological world and also can relax their senses out of studies and
              hectic exam schedules. Its all about bringing their actual time into investments
              where they learn a lot out of the books. Most of the talents are left untouched or
              unexplored just because they don't get the platforms to uplift themselves and prove
              their actual abilities and talents. We also conduct mental health classes for the
              students to help them relax their mind and let them understand the value of
              education.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;

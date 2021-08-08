import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import WorkshopCard from './WorkshopCard';
import { getAllWorkshops, getUserWorkshops } from '../redux/actions/workshopActions';
import '../styles/WorkshopPage.css';

const WorkshopPage = () => {
  const dispatch = useDispatch();
  const { allWorkshops, userWorkshops } = useSelector((store) => store.workshopReducer);
  const { isAuthenticated } = useSelector((store) => store.userReducer);

  useEffect(() => {
    if (allWorkshops.length === 0) {
      dispatch(getAllWorkshops());
    }
  }, [dispatch, allWorkshops]);

  useEffect(() => {
    if (isAuthenticated && !userWorkshops) {
      dispatch(getUserWorkshops());
    }
  }, [dispatch, isAuthenticated, userWorkshops]);

  const isPurchased = (workshop) => {
    if (!userWorkshops) {
      return false;
    } else {
      return userWorkshops.some(w => w.id === workshop.id);
    }
  };

  return (
    <div className="WorkshopPage">
      <Navbar activeMenuItem={'workshop'} />
      <div className="WorkshopPage-title-container">
        <h1>Workshops</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="workshop-card-container">
        {allWorkshops?.map(workshop => (
          <WorkshopCard
            workshop={workshop}
            locked={!isAuthenticated || !isPurchased(workshop)}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </div>
      <Footer />
    </div >
  );
};

export default WorkshopPage;

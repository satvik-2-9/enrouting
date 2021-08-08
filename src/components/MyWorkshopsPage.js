import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import WorkshopCard from './WorkshopCard';
import { getUserWorkshops } from '../redux/actions/workshopActions';
import '../styles/WorkshopPage.css';

const MyWorkshopPage = () => {
  const dispatch = useDispatch();
  const { userWorkshops } = useSelector((store) => store.workshopReducer);

  useEffect(() => {
    if (!userWorkshops) {
      dispatch(getUserWorkshops());
    }
  }, [dispatch, userWorkshops]);

  return (
    <div className="WorkshopPage">
      <Navbar activeMenuItem={'profile'} />
      <div className="WorkshopPage-title-container">
        <h1>Workshops</h1>
        <p>All workshops you are part of you can check here.</p>
      </div>
      <div className="workshop-card-container">
        {userWorkshops?.map(workshop => (
          <WorkshopCard
            workshop={workshop}
            locked={false}
            isAuthenticated={true}
          />
        ))}
      </div>
      <Footer />
    </div >
  );
};

export default MyWorkshopPage;
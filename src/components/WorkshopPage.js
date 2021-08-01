import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import WorkshopCard from './WorkshopCard';
import { getAllWorkshops } from '../redux/actions/workshopActions';
import '../styles/WorkshopPage.css';

const WorkshopPage = () => {
  const dispatch = useDispatch();
  const { allWorkshops } = useSelector((store) => store.workshopReducer);
  const { isAuthenticated } = useSelector((store) => store.userReducer);

  useEffect(() => {
    if (allWorkshops.length === 0) {
      dispatch(getAllWorkshops());
    }
  }, [dispatch, allWorkshops]);

  return (
    <div className="WorkshopPage">
      <Navbar activeMenuItem={'workshop'} />
      <div className="WorkshopPage-title-container">
        <h1>Workshops</h1>
        {isAuthenticated
          ? <p>All workshops you are part of you can check here.</p>
          : <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        }
      </div>
      <div className="workshop-card-container">
        {allWorkshops?.map(workshop => (
          <WorkshopCard workshop={workshop} isAuthenticated={isAuthenticated} />
        ))}
      </div>
      <Footer />
    </div >
  );
};

export default WorkshopPage;

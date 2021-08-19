import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SubscriptionCard from './SubscriptionCard';
import TransactionCard from './TransactionCard';
import '../styles/PurchasesPage.css';

import { getUserCourses } from '../redux/actions/courseActions';

const PurchasesPage = () => {
  const dispatch = useDispatch();
  const [activeOption, setActiveOption] = useState('subscriptions');
  const [expandView, setExpandView] = useState([]);
  const location = useLocation();

  const { userCourses } = useSelector((store) => store.courseReducer);

  useEffect(() => {
    if (!userCourses) {
      dispatch(getUserCourses());
    }
  }, [dispatch, userCourses]);

  const handleViewClick = (sub) => {
    var index = expandView.indexOf(sub);
    let newArr = [];
    if (index === -1) {
      newArr = [...expandView, sub];
    } else {
      newArr = [...expandView];
      newArr.splice(index, 1);
    }
    setExpandView(newArr);
  };

  return (
    <div className='PurchasesPage'>
      <Navbar activeMenuItem={'profile'} />
      <div className='PurchasesPage-title-container'>
        <h1>{location.state === 'purchases' ? 'Purchases' : 'My notes'}</h1>
        <div className='PurchasesPage-options-container'>
          {location.state === 'purchases' ? (
            <div>
              <span
                onClick={() => setActiveOption('subscriptions')}
                className={activeOption === 'subscriptions' && 'active-option'}
              >
                Manage Subscriptions
              </span>
              <span
                onClick={() => setActiveOption('transactions')}
                className={activeOption === 'transactions' && 'active-option'}
              >
                Transactions
              </span>
            </div>
          ) : (
            <span>All notes you have subscribes are here.</span>
          )}
        </div>
      </div>
      {activeOption === 'transactions' ? (
        <div className='transactions-card-container'>
          <div className='transactions-card-container-title-row'>
            <p className='first-title'>Purchases</p>
            <p className='middle-title'>Price</p>
            <p className='last-title'>Purchase Date</p>
          </div>
          {userCourses?.map((course) => (
            <TransactionCard
              purchaseDetails={course.UserCourses}
              standard={course.class}
              subject={course.subject}
              yearlyPrice={course.yearlyPrice}
              halfyearlyPrice={course.halfyearlyPrice}
              quarterlyPrice={course.quarterlyPrice}
              date={course.createdAt}
            />
          ))}
        </div>
      ) : (
        <div className='subscriptions-card-content'>
          {userCourses?.map((course, index) => (
            <div className='subscriptions-card-container'>
              <p className='subscriptions-card-title'>
                Class {course.class}th : {course.subject} notes
              </p>
              {course?.chapters
                ?.sort((a, b) =>
                  a.number > b.number ? 1 : b.number > a.number ? -1 : 0
                )
                .map((chapter, idx) =>
                  idx <= 1 ? (
                    <SubscriptionCard chapter={chapter} />
                  ) : (
                    expandView.includes(course.id) && (
                      <SubscriptionCard chapter={chapter} />
                    )
                  )
                )}
              <div className='view-toggle'>
                <span onClick={() => handleViewClick(course.id)}>
                  {expandView.includes(course.id) ? 'View less' : 'View more'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PurchasesPage;

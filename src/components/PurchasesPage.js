import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import SubscriptionCard from './SubscriptionCard';
import TransactionCard from './TransactionCard';
import '../styles/PurchasesPage.css';

const PurchasesPage = () => {
  const [activeOption, setActiveOption] = useState('subscriptions');
  const [expandView, setExpandView] = useState([]);
  const location = useLocation();

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
    <div className="PurchasesPage">
      <Navbar activeMenuItem={'profile'} />
      <div className="PurchasesPage-title-container">
        <h1>{location.state === 'purchases' ? 'Purchases' : 'My notes'}</h1>
        <div className="PurchasesPage-options-container">
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
        <div className="transactions-card-container">
          <div className="transactions-card-container-title-row">
            <p className="first-title">Purchases</p>
            <p className="middle-title">Price</p>
            <p className="last-title">Purchase Date</p>
          </div>
          <TransactionCard standard={8} subject={'Maths'} price={1000} date={'Jun 19, 2021'} />
          <TransactionCard standard={8} subject={'Science'} price={1000} date={'Jun 20, 2021'} />
        </div>
      ) : (
        <div className="subscriptions-card-content">
          <div className="subscriptions-card-container">
            <p className="subscriptions-card-title">Class 8th : Maths notes</p>
            <SubscriptionCard chapNo={1} />
            <SubscriptionCard chapNo={2} />
            {expandView.includes('maths') && (
              <div>
                <SubscriptionCard chapNo={3} />
                <SubscriptionCard chapNo={4} />
                <SubscriptionCard chapNo={5} />
                <SubscriptionCard chapNo={6} />
              </div>
            )}
            <div className="view-toggle">
              <span onClick={() => handleViewClick('maths')}>
                {expandView.includes('maths') ? 'View less' : 'View more'}
              </span>
            </div>
          </div>
          <div className="subscriptions-card-container">
            <p className="subscriptions-card-title">Class 8th : Science notes</p>
            <SubscriptionCard chapNo={1} />
            <SubscriptionCard chapNo={2} />
            {expandView.includes('science') && (
              <div>
                <SubscriptionCard chapNo={3} />
                <SubscriptionCard chapNo={4} />
                <SubscriptionCard chapNo={5} />
                <SubscriptionCard chapNo={6} />
              </div>
            )}
            <div className="view-toggle">
              <span onClick={() => handleViewClick('science')}>
                {expandView.includes('science') ? 'View less' : 'View more'}
              </span>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PurchasesPage;

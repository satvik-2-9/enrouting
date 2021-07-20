import React from 'react';
import '../styles/TransactionCard.css';

const TransactionCard = (props) => {
  const { standard, subject, price, date } = props;
  return (
    <div className="TransactionCard">
      <div className="TransactionCard-row-1">
        <p className="first-col">Class {standard}th : {subject} notes</p>
        <p className="second-col">₹{price} / Year</p>
        <p className="third-col">{date}</p>
      </div>
      <div className="TransactionCard-row-2">
        <p className="all-chapters-text">All chapters</p>
        <p className="download-text">Download receipt</p>
      </div>
    </div>
  );
};

export default TransactionCard;

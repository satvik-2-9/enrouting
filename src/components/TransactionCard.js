import React, { useState, useEffect } from 'react';
import '../styles/TransactionCard.css';

const options = { year: 'numeric', month: 'short', day: '2-digit' };

const TransactionCard = (props) => {
  const {
    standard,
    subject,
    yearlyPrice,
    halfyearlyPrice,
    quarterlyPrice,
    date,
    purchaseDetails,
  } = props;
  const parsedDate = Date.parse(date);
  const formattedDate = new Date(parsedDate);

  const [boolVal, setBoolVal] = useState(false);
  const [details, setDetails] = useState({ amount: '', message: '' });

  useEffect(() => {
    if (!boolVal) {
      const subsType =
        purchaseDetails[purchaseDetails.length - 1].typeofSubcription;

      if (subsType === 'Year') {
        setDetails({ amount: yearlyPrice, message: ' / Year' });
      } else if (subsType === 'HalfYear') {
        setDetails({ amount: halfyearlyPrice, message: ' for 6 months' });
      } else {
        setDetails({ amount: quarterlyPrice, message: ' for 3 months' });
      }
      setBoolVal(true);
    }
  }, [boolVal, halfyearlyPrice, yearlyPrice, quarterlyPrice, purchaseDetails]);

  return (
    <div className='TransactionCard'>
      <div className='TransactionCard-row-1'>
        <p className='first-col'>
          Class {standard}th : {subject} notes
        </p>
        <p className='second-col'>
          ₹{details.amount} {details.message}
        </p>
        <p className='third-col'>
          {formattedDate.toLocaleDateString('en-US', options)}
        </p>
      </div>
      <div className='TransactionCard-row-2'>
        <p className='all-chapters-text'>All chapters</p>
        <p className='download-text'>Download receipt</p>
      </div>
    </div>
  );
};

export default TransactionCard;

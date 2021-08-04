import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { buyWorkshop, verifyWorkshopPayment } from '../redux/actions/api/index';
import LoginModal from './LoginModal';
import EventWorkshopModal from './EventWorkshopModal';
import ecLogo from '../images/ec_logo_square.jpg';
import nextIcon from '../images/ic_arrow_right.svg';
import '../styles/EventCard.css';

const WorkshopCard = (props) => {
  const { workshop, locked, isAuthenticated } = props;
  const history = useHistory();
  const [workshopModal, setWorkshopModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const { userData } = useSelector((store) => store.userReducer);

  (workshopModal)
    ? document.querySelector("body").style.overflow = 'hidden'
    : document.querySelector("body").style.overflow = 'auto'

  const buyNow = async () => {
    const res = await buyWorkshop(workshop.id);
    if (res.status !== 201) {
      return;
    }
    const options = {
      "key": process.env.REACT_APP_RAZORPAY_KEY,
      "amount": res.data.response.amount,
      "currency": res.data.response.currency,
      "name": "Enrouting Careers",
      "description": workshop.topic,
      "image": ecLogo,
      "order_id": res.data.response.id,
      "handler": async function (response) {
        const data = {
          orderCreationId: res.data.response.id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature,
          workshopId: workshop?.id,
          userId: userData?.id,
        };
        await verifyWorkshopPayment(data);
        history.push({
          pathname: '/subscription',
          state: { type: 'workshop', workshop, paymentDetails: data }
        });
      },
      "prefill": {
        "name": userData.firstname + ' ' + userData.lastname,
        "email": userData.email,
        "contact": userData.phone
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new window.Razorpay(options);

    rzp1.open();

    rzp1.on('payment.failed', function (response) {
      // payment failed
    });
  };

  const handleRegisterClick = () => {
    if (!isAuthenticated) {
      setLoginModal(true);
    } else {
      buyNow();
    }
  };

  return (
    <div className="EventCard">
      {workshopModal &&
        <EventWorkshopModal
          type={'workshop'}
          workshop={workshop}
          setWorkshopModal={setWorkshopModal}
          locked={locked}
        />
      }
      {loginModal && <LoginModal setLoginModal={setLoginModal} />}
      <div className="EventCard-title-row">
        <span className="EventCard-title-text">{workshop.topic}</span>
        {locked && (
          <button className="register-event-button" onClick={handleRegisterClick}>
            Register for workshop
          </button>
        )}
      </div>
      <div className="EventCard-content-row">
        <img src={workshop.img} alt="workshop-img" />
        <div className="EventCard-content-div">
          <p>{workshop.desc.replace('<p>', '').substring(0, 185)}...</p>
          <div className="EventCard-date-row">
            {!locked ? (
              <div>
                <span className="EventCard-date-text">
                  Workshop date: {workshop.start_date.replace('6:30 PM', '')}
                </span>
              </div>
            ) : (
              <div>
                <span className="EventCard-date-text">
                  Registration fee: ₹{workshop.price}
                </span>
              </div>
            )}
            <div className="EventCard-detail-div" onClick={() => setWorkshopModal(true)}>
              <span className="EventCard-details-text">More Detail</span>
              <img src={nextIcon} alt="forward-icon" className="forward-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;

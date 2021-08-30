import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { buyEvent, verifyEventPayment } from '../redux/actions/api/index';
import { checkSubmission } from '../redux/actions/eventActions';
import LoginModal from './LoginModal';
import EventWorkshopModal from './EventWorkshopModal';
import RegisterModal from './RegisterModal';
import ecLogo from '../images/ec_logo_square.jpg';
import nextIcon from '../images/ic_arrow_right.svg';
import '../styles/EventCard.css';

const EventCard = (props) => {
  const { event, locked, isAuthenticated } = props;
  const validTill = new Date(event.end_time) >= new Date() ? true : false;
  const history = useHistory();
  const dispatch = useDispatch();
  const [eventModal, setEventModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const [submissionDetails, setSubmissionDetails] = useState([]);
  const [purchaseDetails, setPurchaseDetails] = useState({});
  const [boolVal, setBoolVal] = useState(false);
  const { userData } = useSelector((store) => store.userReducer);
  const { userEvents } = useSelector((store) => store.eventReducer);

  useEffect(() => {
    if (userEvents && !boolVal) {
      const Event =
        userEvents.length !== 0
          ? userEvents.filter((detail) => detail.id === event.id)
          : [];
      const Details = Event.length !== 0 ? Event[0].UserEvents[0] : null;
      setPurchaseDetails(Details);
      setBoolVal(true);
    }
  }, [userEvents, boolVal, event]);

  eventModal
    ? (document.querySelector('body').style.overflow = 'hidden')
    : (document.querySelector('body').style.overflow = 'auto');

  const buyNow = async (regType, memberList) => {
    const formData = {
      isSolo: regType === 'solo',
      isGroup: regType === 'group',
      groupMembers: memberList,
    };
    const res = await buyEvent(event.id, formData);
    if (res.status !== 201) {
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: res.data.response.amount,
      currency: res.data.response.currency,
      name: 'Enrouting Careers',
      description: event.topic,
      image: ecLogo,
      order_id: res.data.response.id,
      handler: async function (response) {
        const data = {
          orderCreationId: res.data.response.id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature,
          eventId: event?.id,
          userId: userData?.id,
          groupMembers: memberList,
          isSolo: regType === 'solo',
          isGroup: regType === 'group',
          price: res.data.price,
        };

        await verifyEventPayment(data);
        history.push({
          pathname: '/subscription',
          state: {
            type: 'event',
            event,
            paymentDetails: data,
            regType: regType,
          },
        });
      },
      prefill: {
        name: userData.firstname + ' ' + userData.lastname,
        email: userData.email,
        contact: userData.phone,
      },
      theme: {
        color: '#3399cc',
      },
    };
    var rzp1 = new window.Razorpay(options);

    rzp1.open();

    rzp1.on('payment.failed', function (response) {
      // payment failed
    });
  };

  const handleMoreDetail = () => {
    dispatch(checkSubmission(event.id)).then((res) => {
      if (res && Object.keys(res).length !== 0) {
        setSubmissionDetails(res);
        setSubmissionStatus(true);
      }

      setEventModal(true);
    });
  };

  const handleRegisterClick = () => {
    if (!isAuthenticated) {
      setLoginModal(true);
    } else {
      setRegisterModal(true);
    }
  };

  return (
    <div className='EventCard'>
      {eventModal && (
        <EventWorkshopModal
          type={'event'}
          event={event}
          validTill={validTill}
          purchaseDetails={purchaseDetails}
          setEventModal={setEventModal}
          submissionDetails={submissionDetails}
          locked={locked}
          submissionStatus={submissionStatus}
          handleRegisterClick={handleRegisterClick}
        />
      )}
      {loginModal && <LoginModal setLoginModal={setLoginModal} />}
      {registerModal && (
        <RegisterModal
          setRegisterModal={setRegisterModal}
          buyNow={buyNow}
          event={event}
        />
      )}
      <div className='EventCard-title-row'>
        <span className='EventCard-title-text'>{event.topic}</span>
        {!locked ? (
          <span className='EventCard-amount-text'>
            Paid amount: ₹
            {purchaseDetails.isSolo ? event.soloPrice : event.groupPrice}
          </span>
        ) : validTill ? (
          <button
            className='register-event-button cc'
            onClick={handleRegisterClick}
          >
            Register for event
          </button>
        ) : (
          <span className='EventCard-amount-text'>Event ends</span>
        )}
      </div>
      <div className='EventCard-content-row'>
        <img src={event.img} alt='event-img' />
        <div className='EventCard-content-div'>
          <p>
            {event.desc
              .replace(/(<([^>]+)>)/gi, '')
              .replace('&nbsp;', ' ')
              .substring(0, 185)}
            ...
          </p>
          <div className='EventCard-date-row'>
            {!locked ? (
              <div>
                <span className='EventCard-date-text'>
                  Start date: {event.start_time.replace('6:30 PM', '')}
                </span>
                <span className='EventCard-date-text'>
                  End date: {event.end_time.replace('6:30 PM', '')}
                </span>
              </div>
            ) : (
              <div>
                <span className='EventCard-date-text'>
                  Registration fee: ₹{event.soloPrice} (for single){' '}
                  {event.groupAllowed
                    ? `and ₹
                    ${event.groupPrice} (for group)`
                    : ''}
                </span>
              </div>
            )}
            <div className='EventCard-detail-div' onClick={handleMoreDetail}>
              <span className='EventCard-details-text'>More Detail</span>
              <img src={nextIcon} alt='forward-icon' className='forward-icon' />
            </div>
          </div>
        </div>
      </div>
      <button className="register-event-button bb" > Register for event </button>
    </div>
  );
};

export default EventCard;

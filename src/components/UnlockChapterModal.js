import React from 'react';
import { useSelector } from 'react-redux';
import { buyCourse, verifyCoursePayment } from '../redux/actions/api/index';
import { useHistory } from 'react-router-dom';
import unlockImage from '../images/img_unlock.jpg';
import closeIcon from '../images/ic_close.svg';
import ecLogo from '../images/ec_logo_square.jpg';
import '../styles/UnlockChapterModal.css';

const UnlockChapterModal = (props) => {
  const { handleClose, course } = props;
  const history = useHistory();

  const { userData } = useSelector((store) => store.userReducer);

  const buyNow = async () => {
    const res = await buyCourse(course.id);
    if (res.status !== 201) {
      return;
    }
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: res.data.response.amount,
      currency: res.data.response.currency,
      name: 'Enrouting Careers',
      description: res.data.response.notes.desc,
      image: ecLogo,
      order_id: res.data.response.id,
      handler: async function (response) {
        const data = {
          orderCreationId: res.data.response.id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature,
          courseId: course?.id,
          userId: userData?.id,
        };
        await verifyCoursePayment(data);
        handleClose();
        document.querySelector('body').style.overflow = 'auto';
        history.push({
          pathname: '/subscription',
          state: { course, paymentDetails: data, type: 'course' },
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
      handleClose();
    });
  };

  return (
    <div className='UnlockChapterModal'>
      <div className='UnlockChapterModal-content'>
        <span onClick={() => handleClose()}>
          <img
            src={closeIcon}
            alt='close-icon'
            className='UnlockChapterModal-close-icon'
          />
        </span>
        <div className='UnlockChapterModal-content-container'>
          <img
            src={unlockImage}
            alt='unlock-chapter-img'
            className='unlock-chapter-img'
          />
          <div className='UnlockChapterModal-text-container'>
            <h1>Unlock notes</h1>
            <p>
              Get complete access to all the lecture videos and notes by
              availing our annual subscription.
            </p>
            <div className='UnlockChapterModal-details-container'>
              <div className='UnlockChapterModal-details-container-col-left'>
                <span>Subject name</span>
                <span>Board</span>
                <span>Standard / Class</span>
                <span>Subscription cost</span>
              </div>
              <div className='UnlockChapterModal-details-container-col-right'>
                <span>{course.subject}</span>
                <span>{course.board}</span>
                <span>{course.class}th standard</span>
                <span>₹{course.price} for 3 months</span>
              </div>
            </div>
            <button
              onClick={() => buyNow()}
              className='UnlockChapterModal-button'
            >
              Buy now
            </button>
          </div>
          <div className='UnlockChapterModal-text-container'>
            <h1>Unlock notes</h1>
            <p>
              Get complete access to all the lecture videos and notes by
              availing our annual subscription.
            </p>
            <div className='UnlockChapterModal-details-container'>
              <div className='UnlockChapterModal-details-container-col-left'>
                <span>Subject name</span>
                <span>Board</span>
                <span>Standard / Class</span>
                <span>Subscription cost</span>
              </div>
              <div className='UnlockChapterModal-details-container-col-right'>
                <span>{course.subject}</span>
                <span>{course.board}</span>
                <span>{course.class}th standard</span>
                <span>₹{course.price} for 6 months</span>
              </div>
            </div>
            <button
              onClick={() => buyNow()}
              className='UnlockChapterModal-button'
            >
              Buy now
            </button>
          </div>
          <div className='UnlockChapterModal-text-container'>
            <h1>Unlock notes</h1>
            <p>
              Get complete access to all the lecture videos and notes by
              availing our annual subscription.
            </p>
            <div className='UnlockChapterModal-details-container'>
              <div className='UnlockChapterModal-details-container-col-left'>
                <span>Subject name</span>
                <span>Board</span>
                <span>Standard / Class</span>
                <span>Subscription cost</span>
              </div>
              <div className='UnlockChapterModal-details-container-col-right'>
                <span>{course.subject}</span>
                <span>{course.board}</span>
                <span>{course.class}th standard</span>
                <span>₹{course.price} / year</span>
              </div>
            </div>
            <button
              onClick={() => buyNow()}
              className='UnlockChapterModal-button'
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockChapterModal;

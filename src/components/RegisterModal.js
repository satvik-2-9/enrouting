import React, { useState } from 'react';
import closeIcon from '../images/ic_close.svg';
import '../styles/RegisterModal.css';

const RegisterModal = (props) => {
  const { setRegisterModal, buyNow } = props;
  const [participationType, setParticipationType] = useState('');
  const [memberNames, setMemberNames] = useState('');

  const handleChange = (e) => {
    setParticipationType(e.target.value);
  };

  const handleClick = () => {
    buyNow(participationType, memberNames);
    setRegisterModal(false);
  };

  const handleMembersChange = (e) => {
    setMemberNames(e.target.value);
  };

  return (
    <div className="RegisterModal">
      <div className="RegisterModal-content">
        <span onClick={() => setRegisterModal(false)}>
          <img src={closeIcon} alt="close-icon" className="RegisterModal-close-icon" />
        </span>
        <h1>Registration Details</h1>
        <div className="RegisterModal-type-div">
          <p>Participation Type :</p>
          <div className="RegisterModal-radio-div" onChange={handleChange}>
            <input type="radio" value="solo" name="participationType" />
            <span style={{ marginRight: '1rem' }}>Solo</span>
            <input type="radio" value="group" name="participationType" />
            <span>Group</span>
          </div>
        </div>
        {participationType === 'group' && (
          <div className="members-list-div">
            <p>Please write names of all the group members separated by a comma (,)</p>
            <textarea
              type="text"
              rows="3"
              placeholder="Type group member names here..."
              value={memberNames}
              onChange={handleMembersChange}
            />
          </div>
        )}
        <div className="RegisterModal-button-div">
          <button className="RegisterModal-button" onClick={handleClick}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;

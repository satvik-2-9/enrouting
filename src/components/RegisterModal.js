import React, { useState, Fragment } from 'react';
import closeIcon from '../images/ic_close.svg';
import '../styles/RegisterModal.css';

const RegisterModal = (props) => {
  const { setRegisterModal, buyNow, event } = props;
  const [participationType, setParticipationType] = useState('');
  // const [memberNames, setMemberNames] = useState('');
  const [inputList, setInputList] = useState([{ name: '' }]);

  const handleChange = (e) => {
    setParticipationType(e.target.value);
  };

  const handleRegister = () => {
    const memberString = inputList.map((x) => x.name).join(',');
    buyNow(participationType, memberString);
    setRegisterModal(false);
  };

  // const handleMembersChange = (e) => {
  //   setMemberNames(e.target.value);
  // };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { name: '' }]);
  };

  return (
    <div className='RegisterModal'>
      <div className='RegisterModal-content'>
        <span onClick={() => setRegisterModal(false)}>
          <img
            src={closeIcon}
            alt='close-icon'
            className='RegisterModal-close-icon'
          />
        </span>
        <h1>Registration Details</h1>
        <div
          className={`${
            event.groupAllowed
              ? 'RegisterModal-type-div'
              : 'RegisterModal-type-div-center'
          }`}
        >
          <p>Participation Type :</p>
          <div className='RegisterModal-radio-div' onChange={handleChange}>
            <input type='radio' value='solo' name='participationType' />
            <span style={{ marginRight: '1rem' }}>Solo</span>
            {event.groupAllowed ? (
              <Fragment>
                <input type='radio' value='group' name='participationType' />
                <span>Group</span>
              </Fragment>
            ) : (
              ''
            )}
          </div>
        </div>
        {participationType === 'group' && (
          <div className='members-list-div'>
            {inputList.map((x, i) => {
              return (
                <div className='box'>
                  <input
                    name='name'
                    className='member-input'
                    placeholder='Member name'
                    value={x.firstName}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                  <div className='btn-box'>
                    {inputList.length !== 1 && (
                      <button
                        className='mr10'
                        onClick={() => handleRemoveClick(i)}
                      >
                        -
                      </button>
                    )}
                    {inputList.length - 1 === i &&
                      event.groupLimit &&
                      event.groupLimit - 1 > i && (
                        <button onClick={handleAddClick}>+</button>
                      )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className='RegisterModal-button-div'>
          <button className='RegisterModal-button' onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;

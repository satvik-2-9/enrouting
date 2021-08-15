import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import closeIcon from '../images/ic_close.svg';
import backIcon from '../images/ic_back.svg';
import successIcon from '../images/ic_tick_green.svg';
import { validator } from '../util/helperFunctions';

import { login, signup } from '../redux/actions/userActions';

import '../styles/LoginModal.css';

const initialSignupDetails = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  addressLine1: '',
  addressLine2: '',
  institutionType: '',
  collegeName: '',
  state: '',
  standard: '',
  schoolName: '',
};

const initialLoginDetails = {
  email: '',
  password: '',
};

const LoginModal = (props) => {
  const { setLoginModal } = props;
  const [modalType, setModalType] = useState('login');
  const [openInstitutionalMenu, setOpenInstitutionalMenu] = useState(false);
  const [signupData, setSignupData] = useState(initialSignupDetails);
  const [loginData, setLoginData] = useState(initialLoginDetails);
  const [errors, setErrors] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const goTOLoginModal = () => {
    setModalType('login');
    setSignupData(initialSignupDetails);
    setErrors(null);
  };

  const goTOCreateAccountModal = () => {
    setModalType('create-account');
    setSignupData({
      ...signupData,
      addressLine1: '',
      addressLine2: '',
      institutionType: '',
      collegeName: '',
      state: '',
      standard: '',
      school: '',
    });
    setOpenInstitutionalMenu(false);
    setErrors(null);
  };

  const handleInstitutionMenu = () => {
    if (errors) {
      setErrors({ ...errors, institutionType: '' });
    }
    if (openInstitutionalMenu) setOpenInstitutionalMenu(false);
    else setOpenInstitutionalMenu(true);
  };

  const handleInstitutionType = (type) => {
    // console.log(type, openInstitutionalMenu);
    setSignupData({ ...signupData, institutionType: type });
    if (errors) {
      setErrors({ ...errors, institutionType: '' });
    }
  };

  const handleSignupDetailsChange = (e) => {
    const { name } = e.target;
    setSignupData({ ...signupData, [name]: e.target.value });
    if (errors) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleLoginDetailsChange = (e) => {
    const { name } = e.target;
    setLoginData({ ...loginData, [name]: e.target.value });
    if (errors) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    var requiredFields = ['addressLine1', 'institutionType', 'state'];
    if (signupData.institutionType === 'College') {
      requiredFields = [...requiredFields, 'collegeName'];
    } else if (signupData.institutionType === 'School') {
      requiredFields = [...requiredFields, 'schoolName', 'standard'];
    }

    const flag = validator(signupData, requiredFields);

    if (flag === true) {
      setErrors(null);
      const formData = { ...signupData };
      const address = formData.addressLine1 + ' ' + formData.addressLine2;
      delete formData.addressLine1;
      delete formData.addressLine2;
      formData.address = address;
      dispatch(signup(formData)).then(() => {
        setSignupData(initialSignupDetails);
      });
      setModalType('success');
    } else {
      setErrors(flag);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const requiredFields = ['email', 'password'];
    const flag = validator(loginData, requiredFields);

    if (flag === true) {
      setErrors(null);
      dispatch(login(loginData, history)).then(() => {
        setLoginData(initialLoginDetails);
        history.push('/');
      });
      setLoginModal(false);
    } else {
      setErrors(flag);
    }
  };

  const changeToNextModal = () => {
    const requiredFields = [
      'firstname',
      'lastname',
      'email',
      'password',
      'confirmPassword',
      'phone',
    ];
    const flag = validator(signupData, requiredFields);

    if (flag === true) {
      setErrors(null);
      if (signupData.password === signupData.confirmPassword) {
        setModalType('few-details');
      } else {
        setErrors({
          ...errors,
          password: '',
          confirmPassword: "Passwords don't match",
        });
      }
    } else {
      setErrors(flag);
    }
  };

  const handleSignupSuccess = () => {
    setLoginModal(false);
    history.push('/');
  };

  return (
    <div className='LoginModal'>
      <div className='LoginModal-content'>
        <span onClick={() => setLoginModal(false)}>
          <img
            src={closeIcon}
            alt='close-icon'
            className='LoginModal-close-icon'
          />
        </span>
        {modalType === 'login' && (
          <div className='LoginModal-container'>
            <h1 className='login-title'>Login</h1>
            <div className='LoginModal-inputDiv'>
              <input
                name='email'
                type='text'
                value={loginData.email}
                placeholder='Email ID'
                className={`LoginModal-input ${
                  errors && errors.email && errors.email !== '' ? 'error' : ''
                }`}
                onChange={handleLoginDetailsChange}
              />
              {errors && errors.email !== '' && (
                <label className='errorMessage' htmlFor='emailError'>
                  {errors.email}
                </label>
              )}
            </div>
            <div className='LoginModal-inputDiv'>
              <input
                name='password'
                type='password'
                value={loginData.password}
                placeholder='Password'
                className={`LoginModal-input ${
                  errors && errors.password && errors.password !== ''
                    ? 'error'
                    : ''
                }`}
                onChange={handleLoginDetailsChange}
              />
              {errors && errors.password !== '' && (
                <label className='errorMessage' htmlFor='passwordError'>
                  {errors.password}
                </label>
              )}
            </div>
            <button className='login-button' onClick={handleLogin}>
              Login
            </button>
            <div className='LoginModal-divider'></div>
            <p>Don't have an account?</p>
            <button
              className='create-account-button'
              onClick={() => setModalType('create-account')}
            >
              Create an account
            </button>
          </div>
        )}
        {modalType === 'create-account' && (
          <div className='LoginModal-container'>
            <div className='back-icon-container'>
              <img
                src={backIcon}
                alt='back-icon'
                className='back-icon'
                onClick={goTOLoginModal}
              />
            </div>
            <h1 className='create-account-title'>Create account</h1>
            <div className='LoginModal-inputDiv'>
              <input
                name='firstname'
                type='text'
                value={signupData.firstname}
                placeholder='First name'
                className={`LoginModal-input ${
                  errors && errors.firstname && errors.firstname !== ''
                    ? 'error'
                    : ''
                }`}
                onChange={handleSignupDetailsChange}
              />
              {errors && errors.firstname !== '' && (
                <label className='errorMessage' htmlFor='firstnameError'>
                  {errors.firstname}
                </label>
              )}
            </div>
            <div className='LoginModal-inputDiv'>
              <input
                name='lastname'
                type='text'
                value={signupData.lastname}
                placeholder='Last name'
                className={`LoginModal-input ${
                  errors && errors.lastname && errors.lastname !== ''
                    ? 'error'
                    : ''
                }`}
                onChange={handleSignupDetailsChange}
              />
              {errors && errors.lastname !== '' && (
                <label className='errorMessage' htmlFor='lastnameError'>
                  {errors.lastname}
                </label>
              )}
            </div>
            <div className='LoginModal-inputDiv'>
              <input
                name='email'
                type='text'
                value={signupData.email}
                placeholder='Email ID'
                className={`LoginModal-input ${
                  errors && errors.email && errors.email !== '' ? 'error' : ''
                }`}
                onChange={handleSignupDetailsChange}
              />
              {errors && errors.email !== '' && (
                <label className='errorMessage' htmlFor='emailError'>
                  {errors.email}
                </label>
              )}
            </div>
            <div className='LoginModal-inputDiv'>
              <input
                name='phone'
                type='tel'
                value={signupData.phone}
                placeholder='Phone number'
                className={`LoginModal-input ${
                  errors && errors.phone && errors.phone !== '' ? 'error' : ''
                }`}
                onChange={handleSignupDetailsChange}
              />
              {errors && errors.phone !== '' && (
                <label className='errorMessage' htmlFor='phoneError'>
                  {errors.phone}
                </label>
              )}
            </div>
            <div className='LoginModal-inputDiv'>
              <input
                name='password'
                type='password'
                value={signupData.password}
                placeholder='Password'
                className={`LoginModal-input ${
                  errors && errors.password && errors.password !== ''
                    ? 'error'
                    : ''
                }`}
                onChange={handleSignupDetailsChange}
              />
              {errors && errors.password !== '' && (
                <label className='errorMessage' htmlFor='passwordError'>
                  {errors.password}
                </label>
              )}
            </div>
            <div className='LoginModal-inputDiv'>
              <input
                name='confirmPassword'
                type='password'
                value={signupData.confirmPassword}
                placeholder='Confirm password'
                className={`LoginModal-input ${
                  errors &&
                  errors.confirmPassword &&
                  errors.confirmPassword !== ''
                    ? 'error'
                    : ''
                }`}
                onChange={handleSignupDetailsChange}
              />
              {errors && errors.confirmPassword !== '' && (
                <label className='errorMessage' htmlFor='confirmPasswordError'>
                  {errors.confirmPassword}
                </label>
              )}
            </div>

            <button className='login-button' onClick={changeToNextModal}>
              Proceed
            </button>
          </div>
        )}
        {modalType === 'few-details' && (
          <div className='LoginModal-container'>
            <div className='back-icon-container'>
              <img
                src={backIcon}
                alt='back-icon'
                className='back-icon'
                onClick={goTOCreateAccountModal}
              />
            </div>
            <h1 className='create-account-title'>Few details</h1>
            <div className='LoginModal-inputDiv'>
              <input
                name='addressLine1'
                type='text'
                value={signupData.addressLine1}
                placeholder='Address line 1'
                className={`LoginModal-input ${
                  errors && errors.addressLine1 && errors.addressLine1 !== ''
                    ? 'error'
                    : ''
                }`}
                onChange={handleSignupDetailsChange}
              />
              {errors && errors.addressLine1 !== '' && (
                <label className='errorMessage' htmlFor='addressLine1Error'>
                  {errors.addressLine1}
                </label>
              )}
            </div>
            <div className='LoginModal-inputDiv'>
              <input
                name='addressLine2'
                type='text'
                value={signupData.addressLine2}
                placeholder='Address line 2'
                className='LoginModal-input'
                onChange={handleSignupDetailsChange}
              />
            </div>
            <div className='menuDiv'>
              <div
                className={`LoginModal-input LoginModal-menuDiv ${
                  errors &&
                  errors.institutionType &&
                  errors.institutionType !== ''
                    ? 'error'
                    : ''
                }`}
                onClick={handleInstitutionMenu}
              >
                {!openInstitutionalMenu && (
                  <span
                    className={
                      signupData.institutionType === '' ? 'placeholder' : ''
                    }
                  >
                    {signupData.institutionType === ''
                      ? 'Institution type'
                      : signupData.institutionType}
                  </span>
                )}
                {openInstitutionalMenu && (
                  <div className='menu-container'>
                    <div
                      className='menu-item'
                      onClick={() => handleInstitutionType('College')}
                    >
                      <span>College</span>
                    </div>
                    <div
                      className='menu-item'
                      onClick={() => handleInstitutionType('School')}
                    >
                      <span>School</span>
                    </div>
                  </div>
                )}
              </div>
              {errors && errors.institutionType !== '' && (
                <label className='errorMessage' htmlFor='institutionTypeError'>
                  {errors.institutionType}
                </label>
              )}
            </div>
            {signupData.institutionType === 'School' && (
              <Fragment>
                <div className='LoginModal-inputDiv'>
                  <input
                    name='standard'
                    type='number'
                    value={signupData.standard}
                    placeholder='Standard of student'
                    onChange={handleSignupDetailsChange}
                    className={`LoginModal-input ${
                      errors && errors.standard && errors.standard !== ''
                        ? 'error'
                        : ''
                    }`}
                  />
                  {errors && errors.standard !== '' && (
                    <label className='errorMessage' htmlFor='standardError'>
                      {errors.standard}
                    </label>
                  )}
                </div>
                <div className='LoginModal-inputDiv'>
                  <input
                    name='schoolName'
                    type='text'
                    value={signupData.schoolName}
                    placeholder='School name'
                    onChange={handleSignupDetailsChange}
                    className={`LoginModal-input ${
                      errors && errors.schoolName && errors.schoolName !== ''
                        ? 'error'
                        : ''
                    }`}
                  />
                  {errors && errors.schoolName !== '' && (
                    <label className='errorMessage' htmlFor='schoolNameError'>
                      {errors.schoolName}
                    </label>
                  )}
                </div>
              </Fragment>
            )}
            {signupData.institutionType === 'College' && (
              <div className='LoginModal-inputDiv'>
                <input
                  name='collegeName'
                  type='text'
                  value={signupData.collegeName}
                  placeholder='College name'
                  className={`LoginModal-input ${
                    errors && errors.collegeName && errors.collegeName !== ''
                      ? 'error'
                      : ''
                  }`}
                  onChange={handleSignupDetailsChange}
                />
                {errors && errors.collegeName !== '' && (
                  <label className='errorMessage' htmlFor='collegeNameError'>
                    {errors.collegeName}
                  </label>
                )}
              </div>
            )}

            <div className='LoginModal-inputDiv'>
              <input
                name='state'
                type='text'
                value={signupData.state}
                placeholder='State'
                className={`LoginModal-input ${
                  errors && errors.state && errors.state !== '' ? 'error' : ''
                }`}
                onChange={handleSignupDetailsChange}
              />
              {errors && errors.state !== '' && (
                <label className='errorMessage' htmlFor='stateError'>
                  {errors.state}
                </label>
              )}
            </div>

            <button className='login-button' onClick={handleSignup}>
              Create account
            </button>
          </div>
        )}
        {modalType === 'success' && (
          <div className='LoginModal-container'>
            <img
              src={successIcon}
              alt='success-icon'
              className='success-icon'
            />
            <h1 className='success-title'>Account created successfully</h1>
            <p className='success-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <button className='login-button' onClick={handleSignupSuccess}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import { validator } from '../util/helperFunctions';
import { helpMail } from '../redux/actions/helpEmailActions';
import helpImage from '../images/img_help.svg';
import '../styles/HelpPage.css';

const initialData = {
  firstname: '',
  lastname: '',
  email: '',
  description: '',
};

const HelpPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
    if (errors) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ['firstname', 'lastname', 'email', 'description'];

    const flag = validator(formData, requiredFields);
    if (flag === true) {
      setErrors(null);
      dispatch(helpMail(formData)).then((res) => {
        setFormData(initialData);
        alert(res.message);
      });
    } else {
      setErrors(flag);
    }
  };

  return (
    <div className='HelpPage'>
      <Navbar activeMenuItem={'help'} />
      <div className='HelpPage-container'>
        <div className='HelpPage-container-left'>
          <img src={helpImage} alt='help-img' className='help-img' />
        </div>
        <div className='HelpPage-container-right'>
          <div className='HelpPage-text-box'>
            <h1>Let's connect</h1>
            <p>
              Let us know if you have something interesting to say and share it
              with us. If you have any questions, just fill in the contact form
              and we will answer you shortly.
            </p>
            <form onSubmit={handleSubmit} autoComplete='off'>
              <div className='HelpPage-name-container'>
                <div className='HelpPage-inputDiv-name'>
                  <input
                    type='text'
                    placeholder='First name'
                    name='firstname'
                    value={formData.firstname}
                    onChange={handleChange}
                    className={`marginRight ${
                      errors && errors.firstname && errors.firstname !== ''
                        ? 'error'
                        : ''
                    }`}
                  />
                  {errors && errors.firstname !== '' && (
                    <label
                      className='errorMessage correctMargin'
                      htmlFor='firstnameError'
                    >
                      {errors.firstname}
                    </label>
                  )}
                </div>
                <div className='HelpPage-inputDiv-name'>
                  <input
                    type='text'
                    placeholder='Last name'
                    name='lastname'
                    value={formData.lastname}
                    onChange={handleChange}
                    className={`marginLeft ${
                      errors && errors.lastname && errors.lastname !== ''
                        ? 'error'
                        : ''
                    }`}
                  />
                  {errors && errors.lastname !== '' && (
                    <label className='errorMessage' htmlFor='lastnameError'>
                      {errors.lastname}
                    </label>
                  )}
                </div>
              </div>
              <div className='HelpPage-inputDiv'>
                <input
                  type='text'
                  placeholder='Email address'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className={`HelpPage-input ${
                    errors && errors.email && errors.email !== '' ? 'error' : ''
                  }`}
                />
                {errors && errors.email !== '' && (
                  <label
                    className='errorMessage correctMargin'
                    htmlFor='emailError'
                  >
                    {errors.email}
                  </label>
                )}
              </div>
              <div className='HelpPage-inputDiv'>
                <textarea
                  type='text'
                  rows='5'
                  placeholder='Type message here...'
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                  className={`HelpPage-input ${
                    errors && errors.description && errors.description !== ''
                      ? 'error'
                      : ''
                  }`}
                />
                {errors && errors.description !== '' && (
                  <label
                    className='errorMessage correctMargin'
                    htmlFor='descriptionError'
                  >
                    {errors.description}
                  </label>
                )}
              </div>
              <div className='HelpPage-button-container'>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpPage;

import React, { useState } from 'react';
import { validator } from '../util/helperFunctions';
import { useHistory } from 'react-router-dom';
import brandLogo from '../images/ec_logo_nobg.png';
import { resetPassword } from '../redux/actions/api';
import '../styles/ResetPasswordPage.css';

const initialData = {
  password: '',
  confirmPassword: '',
};

const ResetPasswordPage = (props) => {
  const history = useHistory();
  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState(initialData);
  const { token } = props.match.params;
  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
    if (errors) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ['password', 'confirmPassword'];

    const flag = validator(formData, requiredFields);

    if (flag === true) {
      setErrors(null);
      if (formData.password === formData.confirmPassword) {
        await resetPassword({
          newpassword: formData.password,
          token,
        })
          .then((res) => {
            alert('Password changed successfull!');
            setFormData(initialData);
            history.push('/');
          })
          .catch((error) => {
            alert(error.response.data.message);
          });
        alert('success');
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

  return (
    <div className='page-container'>
      <div className='forgotpass-imgDiv'>
        <img src={brandLogo} alt='ec_logo' className='ec-logo' />
      </div>
      <div className='page-content'>
        <div className='title-div'>
          <h1>Reset Password</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='forgotpass-inputDiv'>
            <input
              name='password'
              type='password'
              value={formData.password}
              placeholder='New password'
              className={`forgotpass-input ${
                errors && errors.password && errors.password !== ''
                  ? 'error'
                  : ''
              }`}
              onChange={handleChange}
            />
            {errors && errors.password !== '' && (
              <label className='errorMessage' htmlFor='passwordError'>
                {errors.password}
              </label>
            )}
          </div>
          <div className='forgotpass-inputDiv'>
            <input
              name='confirmPassword'
              type='password'
              value={formData.confirmPassword}
              placeholder='Confirm Password'
              className={`forgotpass-input ${
                errors &&
                errors.confirmPassword &&
                errors.confirmPassword !== ''
                  ? 'error'
                  : ''
              }`}
              onChange={handleChange}
            />
            {errors && errors.confirmPassword !== '' && (
              <label className='errorMessage' htmlFor='confirmPasswordError'>
                {errors.confirmPassword}
              </label>
            )}
          </div>
          <div className='forgotpass-inputDiv'>
            <button type='submit' className='forgotpass-button'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

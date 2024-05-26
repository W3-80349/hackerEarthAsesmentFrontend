import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    type: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    passwordMatch: false,
    formValid: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      passwordMatch: form.password === form.confirmPassword,
      formValid: Object.values(form).every((field) => field !== '') && (name !== 'confirmPassword' || value === form.password),
    });
  };
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.formValid) {
      try {
        const response = await axios.post(`https://hackerearthassesment.onrender.com/register`, form);
        console.log('Signup successful', response.data);
        history.push('/');
      } catch (error) {
        console.error('Signup failed', error);
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input type="text" id="mobileNumber" name="mobileNumber" value={form.mobileNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select id="type" name="type" value={form.type} onChange={handleChange} required>
              <option value="">Select Type</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={form.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
            {!errors.passwordMatch && form.confirmPassword !== '' && (
              <span className="error">Passwords do not match</span>
            )}
          </div>
          <button type="submit" className="signup-button" disabled={!errors.formValid}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

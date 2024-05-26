import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`https://hackerearthassesment.onrender.com/login`, {
        email,
        password,
      });

      if (response.data.status) {
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('userId',response.data.userId );
        sessionStorage.setItem('userType', response.data.userType);
        console.log('Login successful');
        history.push("/home")
      } else {
        // setError('Login failed');
      }
    } catch (error) {

      // setError('Network error occurred');
      console.error('Network error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


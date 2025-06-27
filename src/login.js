import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://hotel-booking-backend-cvxr.onrender.com/login', { username, password });
      if (response.status === 200) {
        navigate('/menu',{state: {id : username} })
      }
    } catch (error) {
      alert("Please enter correct login credentials!");
      console.error(error);
    }
  };

  return (
    <div class="row" className="login-container">
      <div class="col-4"><img style={{height:'500px',width:"500px"}} src="profile4.jpg" alt="" /></div>
      <div class="col-6" className="login-card" >
        <img src="profile5.jpg" style={{height:'250px',width:'300px'}} alt="Card" />
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className='lab'>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
          </div>
          <div className='lab'>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <br /><br />
          <button type="submit" className='login-button'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

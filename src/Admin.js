import React, { useState } from 'react';
import './Admin.css';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    if (username === 'admin' && password === 'Admin@678') {
      navigate('/data');
    }
  }

  return (
    <div className="admin-container">
      <br /><br /><br />
      <div className="admin-card">
        <h1>Login</h1><br /><br /><br />
        <form onSubmit={handleLogin}>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
          <br /><br /><br />
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          <br /><br /><br /><br /><br />
          <button className='admin-button' type="signinbutton">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;







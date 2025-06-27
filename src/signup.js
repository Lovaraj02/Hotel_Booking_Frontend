import { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Signup = () => {
  const [formdata, setFormdata] = useState({
    username: '',
    email:'',
    password: '',
  });
  const backend_api = 'https://hotel-booking-backend-cvxr.onrender.com/addlogin';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both username and password are provided
    if (!formdata.username ||  !formdata.email  || !formdata.password) {
      alert(" 'username','email' and 'password' are required.");
      return;
    }

    axios.post(backend_api, formdata)
      .then((res) => {
        if (res.status === 200) {
          alert("Account created successfully");
          window.location.replace('/mainlogin');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-card card"> {/* Added 'card' class */}
        {/* <img src="profile5.jpg" alt="Card Image" /> */}
        <br />
        <h1 className="card-title">Sign Up</h1><br />
        <form onSubmit={handleSubmit}>
          <label className="form-label">Username: </label>
          <input className="form-control" type="text" name="username" onChange={(e) => setFormdata({ ...formdata, username: e.target.value })} />
          <br />
          <label className="form-label">Email: </label>
          <input className="form-control" type="email" name="email" onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} />
          <br />
          <label className="form-label">Password: </label>
          <input className="form-control" type="password" name="password" onChange={(e) => setFormdata({ ...formdata, password: e.target.value })} />
          <br />
          <button className='k btn btn-primary' type="submit" style={{ backgroundColor: 'blueviolet', width: '350px', marginTop: '20px' }}>Submit</button> {/* Added style to set background color */}
        </form>
      </div>
    </div>
  );
};

export default Signup;

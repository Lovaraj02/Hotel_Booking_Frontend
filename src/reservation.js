



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { Dropdown, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function Booking() {
  const location = useLocation();
  const name1 = location.state.id;

  const [username, setUser] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedTableType, setSelectedTableType] = useState('');
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const navigate = useNavigate();

  const handleMenuClick = () => navigate('/menu', { state: { id: name1 } });
  const handleBookingClick = () => navigate('/booking', { state: { id: name1 } });
  const handleLogoutClick = () => navigate('/');
  const handleViewReservations = () => navigate('/reservationDetails', { state: { id: name1 } });

  const handleTableTypeSelect = (tableType) => {
    setSelectedTableType(tableType);
    setShowConfirmButton(true);
  };

  const sendConfirmationEmail = () => {
    const mailData = {
      to: 'user-email@example.com', // replace with actual user email
      subject: 'Reservation Confirmation',
      text: `Dear ${name},\n\nYour ${selectedTableType} reservation on ${date} at ${time} has been confirmed.\n\nThank you for choosing us!\n\nBest regards,\nYour Restaurant Name`,
    };

    axios.post('https://hotel-booking-backend-cvxr.onrender.com/sendemail', mailData)
      .then((response) => {
        console.log('Email sent successfully');
      })
      .catch((error) => console.error('Email error:', error));
  };

  const handleConfirmReservation = () => {
    if (!username || !name || !phone || !date || !time || !selectedTableType) {
      alert("Please fill in all fields.");
      return;
    }

    const reservationData = {
      username,
      name,
      phone,
      date,
      time,
      selectedTableType,
    };

    console.log("Sending reservation:", reservationData);

    axios.post('https://hotel-booking-backend-cvxr.onrender.com/addreservation', reservationData)
      .then((response) => {
        if (response.status === 200) {
          setReservationSuccess(true);
          sendConfirmationEmail();
        } else {
          alert('Reservation failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Reservation error:', error);
        alert('Server error. Try again later.');
      });
  };

  return (
    <div className="container-fluid p-4 text-white" style={{ backgroundImage: "url('back1.jpg')", minHeight: "100vh", backgroundSize: "cover" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <Button variant="outline-light" className="me-2" onClick={handleMenuClick}>Menu</Button>
          <Button variant="outline-light" onClick={handleBookingClick}>Booking</Button>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">{name1}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleLogoutClick}>Log Out</Dropdown.Item>
              <Dropdown.Item onClick={handleViewReservations}>Reservation Details</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="bg-dark bg-opacity-50 p-4 rounded shadow-lg mx-auto" style={{ maxWidth: '600px' }}>

        <h2 className="text-center text-warning mb-4">Book Your Seats</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" value={username} onChange={(e) => setUser(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date (MM/DD/YYYY)</Form.Label>
            <Form.Control type="text" value={date} onChange={(e) => setDate(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Time (HH:MM AM/PM)</Form.Label>
            <Form.Control type="text" value={time} onChange={(e) => setTime(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select Table Type</Form.Label>
            <div className="d-flex flex-wrap gap-2">
              {["2-member table", "4-member table", "6-member table", "Hall"].map(type => (
                <Button key={type} variant="outline-warning" onClick={() => handleTableTypeSelect(type)}>
                  {type}
                </Button>
              ))}
            </div>
          </Form.Group>

          {showConfirmButton && !reservationSuccess && (
            <div className="text-center">
              <Button variant="success" onClick={handleConfirmReservation}>Confirm Reservation</Button>
            </div>
          )}

          {reservationSuccess && (
            <div className="text-center mt-4">
              <h5 className="text-success">Your {selectedTableType} is booked on {date} at {time} successfully!</h5>
              <h6 className="text-white">Thank you for choosing us, {name}!</h6>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Booking;



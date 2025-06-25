import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Data.css"; // Import your CSS file here
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Data() {
  const [rev, setRev] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [showCount, setShowCount] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/getdata')
      .then((response) => {
        setRev(response.data.reservedata);
      });
  }, []);

  const handleShowTable = () => {
    setShowTable(true);
    setShowCount(false);
  }

  const handleShowCount = () => {
    setShowTable(false);
    setShowCount(true);
  }

  return (
    <div className="container-fluid data-container">
      <div className="row">
        <div className="col-md-4 data-links">
          <img src="graphs.png" alt="" className="img-fluid" style={{ height: "200px", width: "300px" }} />
          <ul className="list-unstyled">
            <li><a onClick={handleShowTable} href="#"><h4>Show Table</h4></a></li>
            <li><a onClick={handleShowCount} href="#"><h4>Show Count of Reservations</h4></a></li>
          </ul>
        </div>
        <div className="col-md-8 data-content">
          {showTable && (
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Sno.</th>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Table Type</th>
                </tr>
              </thead>
              <tbody>
                {rev.map((ele, obj, arr) => (
                  <tr key={obj}>
                    <td>{obj + 1}</td>
                    <td>{ele.username}</td>
                    <td>{ele.name}</td>
                    <td>{ele.phone}</td>
                    <td>{ele.date}</td>
                    <td>{ele.time}</td>
                    <td>{ele.selectedTableType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {showCount && (
            <div>
              <h1 className="text-center text-danger" style={{marginTop:"350px"}}>Total Number of Reservations: {rev.length}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Data;







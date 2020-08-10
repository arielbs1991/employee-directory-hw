import React from "react";
import "./style.css";

function EmployeeCard({ img, name, phone, email, location }) {
  return (
      <div className="card">
          <div className="img-container">
              <img alt={name} src={img} />
          </div>
          <div className="content">
              <ul>
                  <li>
                      <strong>Name:</strong> {name.title} {name.first} {name.last}
                  </li>
                  <li>
                      <strong>Email:</strong> {email}
                  </li>
                  <li>
                      <strong>Phone Number:</strong> {phone}
                  </li>
                  <li>
                      <strong>Address:</strong> {location.city}, {location.state}, {location.country}
                  </li>
              </ul>
          </div>
          {/* <span onClick={() => handleDelete(id.value)} className="remove">𝘅</span> */}
      </div>
  );
}

export default EmployeeCard;

import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class EmployeeCard extends Component {

  state = {
    results: []
  };

  componentDidMount() {
    this.APIReturnEmployees();
  };

  APIReturnEmployees = () => {
    API.search()
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  }
  render(results) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={results.name} src={results.picture.medium} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {results.name}
            </li>
            <li>
              <strong>Email:</strong> {results.email}
            </li>
            <li>
              <strong>Address:</strong> {results.city}, {results.state}, {results.country}
            </li>
          </ul>
        </div>
        <span onClick={() => results.handleDelete(results.id.value)} className="remove">𝘅</span>
      </div>
    );
  }
}

export default EmployeeCard;

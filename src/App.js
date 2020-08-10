import React, { Component } from 'react'
import Wrapper from "./components/Wrapper";
import EmployeeCard from "./components/EmployeeCard";
// import ReactDOM from "react-dom";
// import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    numInput: 0,
    users: [EmployeeCard.APIReturnEmployees],
    filteredUsers: []
  }

  handleDelete = idToDelete => {
   const employeeCopy = [...this.state.users];
   const filteredEmployBees = employeeCopy.filter(user=>{
     if(user.id!== idToDelete){
       return true;
     }else{
       return false;
     }
   })
   this.setState({users: filteredEmployBees});
  }

  renderEmployees = () => {
    return this.state.filteredUsers.map(user => <EmployeeCard
      key={user.id.value}
      img={user.picture.large}
      name={user.name}
      phone={user.phone}
      email={user.email}
    />);
  }

  render() {
    const isNumberEntered = this.state.numInput === 0
    return (
      <div className="App">
        <h1>Sabre International</h1>
        <label htmlFor="numInput"># of Employees
      <input
            id="numInput"
            name="numInput"
            type="number"
            value={this.state.numInput}
            min="0"
            onChange={this.handleInputChange}
          />
        </label>
        <Button  disabledBy={isNumberEntered} onHandleClick={this.makeRequest} title={isNumberEntered ? "Please Enter a Number" : "Submit"}/>
        <Button onHandleClick={this.filterFemaleEmployees} title={"Female Employees"}/>
        <Button onHandleClick={this.filterMaleEmployees} title={"Male Employees"}/>
        <Button onHandleClick={this.sortEmployeesAlphabetical} title={"Alphabetical"}/>
        <div style={styles.employeeContainer}>
          {this.renderEmployees()}
        </div>
      </div>
    );
  }
}

  // render() {
  //   return (
  //     <Wrapper>
  //       <h1 className="title">Employees List</h1>
  //       {this.state.users.map((user)=> <userCard id={user.id.value} handleDelete={this.handleDelete} name={user.name} picture={user.picture} city={user.city} state={user.state} country={user.country} email={user.email} />)}
  //     </Wrapper>
  //   )
  // }


export default App;

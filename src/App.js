
import Wrapper from "./components/Wrapper";
import EmployeeCard from "./components/EmployeeCard";
// import API from "./utils/API";
import "./App.css";

// function App() {
//   return (
// <Wrapper>
//   <h1 className="title">Employees List</h1>
//   <EmployeeCard
//     name={employees[0].name}
//     image={employees[0].image}
//     occupation={employees[0].occupation}
//     location={employees[0].location}
//   />
//   <EmployeeCard
//     name={employees[1].name}
//     image={employees[1].image}
//     occupation={employees[1].occupation}
//     location={employees[1].location}
//   />
//   <EmployeeCard
//     name={employees[2].name}
//     image={employees[2].image}
//     occupation={employees[2].occupation}
//     location={employees[2].location}
//   />
// </Wrapper>
//   );
// }

import React, { Component } from 'react'

class App extends Component {
  state = {
    employees: EmployeeCard.APIReturnEmployees
  }

  handleDelete = idToDelete => {
   const employeeCopy = [...this.state.employees];
   const filteredEmployees = employeeCopy.filter(employee=>{
     if(employee.id!== idToDelete){
       return true;
     }else{
       return false;
     }
   })
   this.setState({employees: filteredEmployees});
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Employees List</h1>
        {this.state.employees.map((employee)=> <EmployeeCard id={employee.id.value} handleDelete={this.handleDelete} name={employee.name} picture={employee.picture} city={employee.city} state={employee.state} country={employee.country} email={employee.email} />)}
      </Wrapper>
    )
  }
}

export default App;

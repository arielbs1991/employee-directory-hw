import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import EmployeeCard from "./components/EmployeeCard";

const styles = {
    employeeContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
}

class App extends Component {
    state = {
        numInput: "",
        users: [],
        filteredUsers: []
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })

    };

    makeRequest = async () => {
        const URL = `https://randomuser.me/api/?results=${this.state.numInput}&nat=us`;
        try {
            let results = await axios.get(URL);
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            })
            console.log(results)
        } catch (e) {
            console.log("ERROR: ", e)
        }
    }
    sortEmployeesAlphebetical = () => {
        const usersCopy = [...this.state.users]
        const sortedUsers = usersCopy.sort((a, b) => {
            if (a.name.last < b.name.last) {
                return -1
            } else {
                return 1
            }
        })
        this.setState({ filteredUsers: sortedUsers })
        console.log("Emp Alph", sortedUsers);
    }
    filterFemaleEmployees = () => {
        const usersCopy = [...this.state.users]
        const filteredUsers = usersCopy.filter((user) => user.gender === "female")
        this.setState({ filteredUsers: filteredUsers })
    }
    filterMaleEmployees = () => {
        const usersCopy = [...this.state.users]
        const filteredUsers = usersCopy.filter((user) => user.gender === "male")
        this.setState({ filteredUsers: filteredUsers })
    }
    renderEmployees = () => {

        return this.state.filteredUsers.map(user => <EmployeeCard
            key={user.id.value}
            img={user.picture.large}
            name={user.name}
            phone={user.phone}
            email={user.email}
            location={user.location}
        />);
    }

    render() {
        this.numInput = "";
        return (
            <div className="App">
                <h1>Internal Spy Database</h1>
                <label htmlFor="numInput">
                    Number of Spies: 
                <input
                        id="numInput"
                        name="numInput"
                        value={this.state.numInput}
                        type="number"
                        min="0"
                        onChange={this.handleInputChange}
                    />
                </label>
                <button onClick={this.makeRequest} title={"Submit Number"} value="Submit Number">Submit Number</button>
                <br />
                <br />
                <button onClick={this.sortEmployeesAlphebetical} title={"Sort Alphebetically"}>Sort Alphebetically</button>

                <button onClick={this.filterFemaleEmployees} title={"Sort by Women"}>Sort by Women</button>

                <button onClick={this.filterMaleEmployees} title={"Sort by Men"}>Sort by Men</button>


                <div style={styles.employeeContainer}>
                    {this.renderEmployees()}
                </div>
            </div>
        );
    }
}

export default App;
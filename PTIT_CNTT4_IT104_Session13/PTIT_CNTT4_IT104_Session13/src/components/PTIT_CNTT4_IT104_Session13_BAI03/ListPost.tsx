import React, { Component } from "react";

class Exercise03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "John", address: "New York" },
        { id: 2, name: "Mary", address: "Los Angeles" },
        { id: 3, name: "Jane", address: "Chicago" },
      ],
    };
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Danh sách Users</h2>
        <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Exercise03;

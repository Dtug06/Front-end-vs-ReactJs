import React, { Component } from "react";

class BirthdayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthday: "",      
      inputBirthday: ""  
    };
  }

  handleChange = (event) => {
    this.setState({ inputBirthday: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ birthday: this.state.inputBirthday });
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2>
          Ngày sinh: {this.state.birthday ? this.state.birthday : ""}
        </h2>

        <form onSubmit={this.handleSubmit}>
          <h3>Form Nhập Ngày Sinh</h3>
          <label>
            Ngày sinh
            <input
              type="date"
              value={this.state.inputBirthday}
              onChange={this.handleChange}
              style={{ marginLeft: "10px" }}
            />
          </label>
          <br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default BirthdayForm;

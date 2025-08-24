import React, { Component } from "react";

class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      submittedData: null,
    };
  }
  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault(); 
    this.setState({ submittedData: { email: this.state.email } });
  };

  render() {
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email{" "}
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {this.state.submittedData && (
          <p>{JSON.stringify(this.state.submittedData)}</p>
        )}
      </div>
    );
  }
}

export default EmailForm;

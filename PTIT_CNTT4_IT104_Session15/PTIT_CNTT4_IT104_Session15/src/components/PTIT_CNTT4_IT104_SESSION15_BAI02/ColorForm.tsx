import React, { Component } from "react";

class ColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",       
      inputColor: ""   
    };
  }

  handleChange = (event) => {
    this.setState({ inputColor: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ color: this.state.inputColor });
  };
  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2>
          Color: {this.state.color ? this.state.color : ""}
        </h2>
        <form onSubmit={this.handleSubmit}>
          <h3>Form</h3>
          <label>
            Màu sắc
            <input
              type="color"
              value={this.state.inputColor}
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

export default ColorForm;

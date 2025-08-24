import React, { Component } from "react";

class ProgressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: "",       
      inputProgress: 0     
    };
  }


  handleChange = (event) => {
    this.setState({ inputProgress: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ progress: this.state.inputProgress });
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2>
          Tiến độ hoàn thành:{" "}
          {this.state.progress !== "" ? `${this.state.progress}%` : ""}
        </h2>

        <form onSubmit={this.handleSubmit}>
          <h3>Form Kiểm Tra Tiến Độ</h3>
          <label>
            Tiến độ
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={this.state.inputProgress}
              onChange={this.handleChange}
              style={{ margin: "0 10px" }}
            />
            {this.state.inputProgress}%
          </label>
          <br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ProgressForm;

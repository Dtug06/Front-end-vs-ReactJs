import React, { Component, ChangeEvent, FormEvent } from 'react'

interface State {
  gender: string;  
  submitted: boolean;
}

export default class Exc6 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      gender: "",
      submitted: false
    }
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  }
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Giới tính:</label><br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChange}
            />
            Nam
          </label><br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={this.state.gender === "Nữ"}
              onChange={this.handleChange}
            />
            Nữ
          </label><br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={this.state.gender === "Khác"}
              onChange={this.handleChange}
            />
            Khác
          </label><br />

          <button type="submit">Submit</button>
        </form>

        {this.state.submitted && (
          <h3>Giới tính: {this.state.gender}</h3>
        )}
      </div>
    )
  }
}

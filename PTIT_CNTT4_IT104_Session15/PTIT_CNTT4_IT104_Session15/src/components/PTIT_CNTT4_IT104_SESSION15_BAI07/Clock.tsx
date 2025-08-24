import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date() 
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { time } = this.state;
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");

    return (
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        {hours}:{minutes}:{seconds}
      </div>
    );
  }
}

export default Clock;

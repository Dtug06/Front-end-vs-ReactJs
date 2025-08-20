
import React, { Component } from "react";

class exc1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Doanh"
    };
  }

  render() {
    return (
      <div>
        <h2>Xin chào, tôi là {this.state.name}</h2>
      </div>
    );
  }
}

export default exc1;

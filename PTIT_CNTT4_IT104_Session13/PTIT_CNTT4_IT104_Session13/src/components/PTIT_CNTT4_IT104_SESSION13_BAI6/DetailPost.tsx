import React, { Component } from "react";

interface Props {
  id: number;
  title: string;
  content: string;
  author: string;
}

export default class DetailPost extends Component<Props> {
  render() {
    return (
      <div style={{ marginBottom: "15px" }}>
        <p><strong>Id:</strong> {this.props.id}</p>
        <p><strong>Title:</strong> {this.props.title}</p>
        <p><strong>Content:</strong> {this.props.content}</p>
        <p><strong>Author:</strong> {this.props.author}</p>
        <hr />
      </div>
    );
  }
}

import React, { Component, ChangeEvent } from "react";

type State = {
  todos: string[];
  input: string;
};

class TodoApp extends Component<{}, State> {
  state: State = {
    todos: [],
    input: "",
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value });
  };

  handleAdd = () => {
    const { input, todos } = this.state;
    if (!input.trim()) return; // bỏ qua nếu trống
    this.setState({
      todos: [...todos, input],
      input: "",
    });
  };

  handleDelete = (index: number) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((_, i) => i !== index),
    }));
  };

  render() {
    const { input, todos } = this.state;

    return (
      <div>
        <h2>Todo List</h2>
        <input
          value={input}
          onChange={this.handleChange}
          placeholder="Nhập công việc"
        />
        <button onClick={this.handleAdd}>Thêm</button>

        <ul>
          {todos.map((todo, i) => (
            <li key={i}>
              {todo} <button onClick={() => this.handleDelete(i)}>Xóa</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;

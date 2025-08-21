import React, { Component, createRef } from "react";

interface User {
  name: string;
  email: string;
  password: string;
  address: string;
}

interface State {
  name: string;
  email: string;
  password: string;
  address: string;
  message: string;
}

export default class Register extends Component<{}, State> {
  nameRef = createRef<HTMLInputElement>();

  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      address: "",
      message: ""
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as any);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, password, address } = this.state;

    if (!name || !email || !password) {
      this.setState({ message: "Tên, Email, Mật khẩu không được để trống" });
      return;
    }

    let users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      this.setState({ message: "Email đã tồn tại" });
      return;
    }
    users.push({ name, email, password, address });
    localStorage.setItem("users", JSON.stringify(users));
    this.setState({
      name: "",
      email: "",
      password: "",
      address: "",
      message: "Đăng ký tài khoản thành công"
    });
    if (this.nameRef.current) {
      this.nameRef.current.focus();
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Đăng ký tài khoản</h2>

          <label>Tên sinh viên</label><br />
          <input
            type="text"
            name="name"
            ref={this.nameRef}
            value={this.state.name}
            onChange={this.handleChange}
          /><br />

          <label>Email</label><br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          /><br />

          <label>Mật khẩu</label><br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          /><br />

          <label>Địa chỉ</label><br />
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          /><br />

          <button type="submit">Đăng ký</button>
        </form>

        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}

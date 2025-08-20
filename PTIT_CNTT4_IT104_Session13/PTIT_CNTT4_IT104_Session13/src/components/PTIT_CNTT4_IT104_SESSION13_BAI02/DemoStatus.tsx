import React, { Component } from "react";

interface PersonalInfo {
  id: number;
  name: string;
  birthDate: string;
  address: string;
}

class Exercise02 extends Component<{}, PersonalInfo> {
  constructor(props: {}) {
    super(props);
    this.state = {
      id: 1,
      name: "Nguyễn Văn Sơn",
      birthDate: "20/12/2023",
      address: "Thanh Xuân, Hà Nội"
    };
  }

  render() {
    const { id, name, birthDate, address } = this.state;

    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Thông tin cá nhân</h2>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Tên:</strong> {name}</p>
        <p><strong>Ngày sinh:</strong> {birthDate}</p>
        <p><strong>Địa chỉ:</strong> {address}</p>
      </div>
    );
  }
}

export default Exercise02;

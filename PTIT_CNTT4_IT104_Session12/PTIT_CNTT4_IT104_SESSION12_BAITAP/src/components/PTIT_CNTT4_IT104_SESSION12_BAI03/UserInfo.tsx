import React from "react";

interface User {
  name: string;
  gender: string;
  dob: string;
  email: string;
  address: string;
}

const UserInfo: React.FC = () => {
  const user: User = {
    name: "Nguyễn Văn A",
    gender: "Nam",
    dob: "06/03/2024",
    email: "nva@gmail.com",
    address: "Thanh Xuân, Hà Nội",
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>Thông tin cá nhân</h2>
      <ul>
        <li>
          Họ và tên: <b>{user.name}</b>
        </li>
        <li>
          Giới tính: <b>{user.gender}</b>
        </li>
        <li>
          Ngày sinh: <b>{user.dob}</b>
        </li>
        <li>
          Email: <b>{user.email}</b>
        </li>
        <li>
          Địa chỉ: <b>{user.address}</b>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;

import React from "react";
import UserRow from "./UserRow";

interface User {
  id: number;
  name: string;
  dob: string;
  gender: string;
  address: string;
}

interface Props {
  users: User[];
}

const UserTable: React.FC<Props> = ({ users }) => {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Ngày sinh</th>
          <th>Giới tính</th>
          <th>Địa chỉ</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserRow key={user.id} user={user} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

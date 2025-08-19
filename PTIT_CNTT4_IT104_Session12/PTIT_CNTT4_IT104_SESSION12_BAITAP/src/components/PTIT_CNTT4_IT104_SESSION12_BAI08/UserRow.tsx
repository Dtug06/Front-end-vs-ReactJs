import React from "react";

interface User {
  id: number;
  name: string;
  dob: string;
  gender: string;
  address: string;
}

interface Props {
  user: User;
  index: number;
}

const UserRow: React.FC<Props> = ({ user, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{user.name}</td>
      <td>{user.dob}</td>
      <td>{user.gender}</td>
      <td>{user.address}</td>
      <td>
        <button className="btn-edit">Sửa</button>
        <button className="btn-delete">Xóa</button>
      </td>
    </tr>
  );
};

export default UserRow;

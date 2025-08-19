
import React from "react";

type User = {
  firstName: string;
  lastName: string;
};

// Hàm formatName
function formatName(user: User) {
  return `${user.firstName} ${user.lastName}`;
}

// Component FormatName
const FormatName: React.FC = () => {
  const user: User = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",
  };

  return (
    <div>
      <h3>Họ và tên: {formatName(user)}</h3>
    </div>
  );
};

export default FormatName;

import React, { useState } from 'react';

type User = {
  name: string;
  email: string;
};

export default function UserInfoForm() {
  const [user, setUser] = useState<User>({ name: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      <h3>Thông tin người dùng</h3>
      <input type="text" name="name" placeholder="Tên" onChange={handleInputChange} /> <br />
      <input type="text" name="email" placeholder="Email" onChange={handleInputChange} /> <br />
      <button onClick={handleSubmit}>Gửi</button>

      {isSubmitted ? (
        <div>
          <p>Tên: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
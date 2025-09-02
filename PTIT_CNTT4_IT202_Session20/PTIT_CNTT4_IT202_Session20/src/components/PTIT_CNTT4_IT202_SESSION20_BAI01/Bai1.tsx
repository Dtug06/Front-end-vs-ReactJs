import React, { useState } from 'react';

export default function InputLengthChecker() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputLength = e.target.value.length;

    if (inputLength > 5) {
      setErrorMessage("Chuỗi nhập vào nhiều hơn 5 ký tự");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div>
      <h3>Kiểm tra độ dài</h3>
      <input type="text" onChange={handleInputChange} />
      <p style={{ color: "red" }}>{errorMessage}</p>
    </div>
  );
}
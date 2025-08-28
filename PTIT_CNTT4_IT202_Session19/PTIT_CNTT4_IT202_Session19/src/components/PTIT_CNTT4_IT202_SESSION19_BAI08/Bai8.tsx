import React, { useReducer, useState } from "react";

export default function Bai8() {
  const initialState = {
  loading: false,
  success: false,
  error: false,
};
function loginReducer(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return { loading: true, success: false, error: false };
    case "LOGIN_SUCCESS":
      return { loading: false, success: true, error: false };
    case "LOGIN_ERROR":
      return { loading: false, success: false, error: true };
    default:
      return state;
  }
}
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    dispatch({ type: "LOGIN_START" });
    setTimeout(() => {
      if (username === "tuan" && password === "doanhtuan123@") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({ type: "LOGIN_ERROR" });
      }
    }, 1000);
  };
  return (
    <div >
      <h2>Dang nhap</h2>
      <div>
        <input type="text" placeholder="Username"  value={username}  onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div >
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}   />
      </div>
      <button  onClick={handleLogin}> Đăng nhập </button>

      <div>
        {state.loading? <p>dang dang nhap</p>:""}
        {state.success ? <p style={{ color: "green" }}>dang nhap thanh cong!</p>:""}
        {state.error ? <p style={{ color: "red" }}> dang nhap that bai</p>:""}
      </div>
    </div>
  );
}